import { createHash } from "node:crypto";
import { createReadStream, existsSync } from "node:fs";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, extname, join, resolve, sep } from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(rootDir, "public");
const appScriptPath = resolve(publicDir, "tantritrace-ultimate", "app.js");
const dataDir = resolve(rootDir, "data");
const stateFile = resolve(dataDir, "tantritrace-state.json");
const port = Number(process.env.PORT || 8790);
const clients = new Set();

let state;

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp",
};

const fallbackTrend = [
  ["Jan", 1200],
  ["Feb", 1900],
  ["Mar", 3100],
  ["Apr", 5200],
  ["May", 8800],
  ["Jun", 15300],
  ["Jul", 27100],
];

function jsonResponse(response, status, payload) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function nowIso() {
  return new Date().toISOString();
}

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function short(hash) {
  return hash ? `${hash.slice(0, 10)}...${hash.slice(-8)}` : "pending";
}

function getWeaver(weaverId) {
  return state.weavers.find((weaver) => weaver.id === weaverId) || state.weavers[0];
}

function canonicalProduct(product, weaver) {
  return JSON.stringify({
    id: product.id,
    name: product.name,
    weaverId: product.weaverId,
    weaverName: weaver?.name,
    craft: product.craft,
    category: product.category,
    material: product.material,
    technique: product.technique,
    gi: product.gi,
    days: Number(product.days),
    price: Number(product.price),
    premium: Number(product.premium),
  });
}

function createHashForProduct(product) {
  return sha256(canonicalProduct(product, getWeaver(product.weaverId)));
}

function certificateId(product) {
  return `TT-CERT-${product.id}-${String(product.hash || "")
    .slice(0, 6)
    .toUpperCase()}`;
}

function extractConstArray(source, name) {
  const marker = `const ${name} =`;
  const markerIndex = source.indexOf(marker);
  if (markerIndex < 0) throw new Error(`Missing ${name} in app script`);

  const arrayStart = source.indexOf("[", markerIndex);
  if (arrayStart < 0) throw new Error(`Missing array initializer for ${name}`);

  let depth = 0;
  let quote = "";
  let escaped = false;
  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "[") depth += 1;
    if (char === "]") {
      depth -= 1;
      if (depth === 0) return source.slice(arrayStart, index + 1);
    }
  }

  throw new Error(`Unterminated array for ${name}`);
}

async function loadSeedArrays() {
  const source = await readFile(appScriptPath, "utf8");
  return {
    seedWeavers: vm.runInNewContext(
      extractConstArray(source, "seedWeavers"),
      {},
      { timeout: 1000 },
    ),
    seedProducts: vm.runInNewContext(
      extractConstArray(source, "seedProducts"),
      {},
      { timeout: 1000 },
    ),
    fallbackJourney: vm.runInNewContext(
      extractConstArray(source, "fallbackJourney"),
      {},
      { timeout: 1000 },
    ),
  };
}

async function createBlock(type, payload) {
  const previousHash = state.ledger.length ? state.ledger[state.ledger.length - 1].hash : "0";
  const block = {
    index: state.ledger.length,
    type,
    timestamp: nowIso(),
    previousHash,
    payload,
  };
  block.hash = sha256(JSON.stringify(block));
  state.ledger.push(block);
  return block;
}

function addEvent(title, detail) {
  state.events.unshift({
    id: `EV-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
    timestamp: nowIso(),
    title,
    detail,
  });
  state.events = state.events.slice(0, 80);
}

function requireText(value, field) {
  const text = String(value || "").trim();
  if (!text) throw new Error(`${field} is required`);
  return text.slice(0, 500);
}

function requireNumber(value, field, min = 0, max = Number.MAX_SAFE_INTEGER) {
  const number = Number(value);
  if (!Number.isFinite(number) || number < min || number > max) {
    throw new Error(`${field} must be between ${min} and ${max}`);
  }
  return number;
}

function validateProduct(product) {
  const cleaned = {
    ...product,
    id: requireText(product.id, "Product id").slice(0, 64),
    name: requireText(product.name, "Product name"),
    weaverId: requireText(product.weaverId, "Weaver id").slice(0, 64),
    craft: requireText(product.craft, "Craft"),
    category: requireText(product.category, "Category"),
    material: requireText(product.material, "Material"),
    technique: requireText(product.technique, "Technique"),
    gi: requireText(product.gi, "GI or certification mark").slice(0, 80),
    days: requireNumber(product.days, "Days to make", 1, 1000),
    price: requireNumber(product.price, "Price", 1, 10_000_000),
    premium: requireNumber(product.premium, "Premium", 0, 100),
    scans: requireNumber(product.scans || 0, "Scans", 0, 10_000_000),
    trust: requireNumber(product.trust || 92, "Trust", 0, 100),
    story: requireText(product.story, "Product story").slice(0, 2000),
    journey: Array.isArray(product.journey) ? product.journey.slice(0, 12) : [],
    status: "verified",
  };
  if (!state.weavers.some((weaver) => weaver.id === cleaned.weaverId)) {
    throw new Error("Product must reference an existing weaver");
  }
  if (state.products.some((item) => item.id === cleaned.id)) {
    throw new Error("Product id already exists");
  }
  return cleaned;
}

function validateWeaver(weaver) {
  const cleaned = {
    ...weaver,
    id: requireText(weaver.id, "Weaver id").slice(0, 64),
    name: requireText(weaver.name, "Weaver name"),
    role: requireText(weaver.role, "Role"),
    village: requireText(weaver.village, "Village"),
    state: requireText(weaver.state, "State"),
    craft: requireText(weaver.craft, "Craft"),
    cluster: requireText(weaver.cluster, "Cluster"),
    years: requireNumber(weaver.years, "Experience years", 1, 100),
    generations: requireNumber(weaver.generations, "Generations", 1, 20),
    currentIncome: requireNumber(weaver.currentIncome || 18000, "Current income", 0, 10_000_000),
    story: requireText(weaver.story, "Story").slice(0, 2000),
  };
  if (state.weavers.some((item) => item.id === cleaned.id)) {
    throw new Error("Weaver id already exists");
  }
  return cleaned;
}

function findProductByValue(value) {
  const query = String(value || "")
    .trim()
    .toLowerCase();
  if (!query) return undefined;
  return state.products.find((product) =>
    [product.id, product.certId, product.hash].some(
      (candidate) => String(candidate || "").toLowerCase() === query,
    ),
  );
}

function buildCertificate(product) {
  const weaver = getWeaver(product.weaverId);
  return {
    certificateId: product.certId,
    productId: product.id,
    product: product.name,
    weaver: {
      id: weaver.id,
      name: weaver.name,
      village: weaver.village,
      state: weaver.state,
      cluster: weaver.cluster,
    },
    craft: product.craft,
    gi: product.gi,
    technique: product.technique,
    material: product.material,
    traceHash: product.hash,
    blockIndex: product.blockIndex,
    issuedAt: product.createdAt || "seed-record",
  };
}

function verifyLedgerIntegrity() {
  for (let index = 0; index < state.ledger.length; index += 1) {
    const block = state.ledger[index];
    const expectedPrevious = index === 0 ? "0" : state.ledger[index - 1].hash;
    const cloneBlock = { ...block };
    delete cloneBlock.hash;
    if (block.previousHash !== expectedPrevious)
      return { valid: false, failedAt: index, reason: "previous-hash mismatch" };
    if (block.hash !== sha256(JSON.stringify(cloneBlock))) {
      return { valid: false, failedAt: index, reason: "block hash mismatch" };
    }
  }
  return { valid: true, blocks: state.ledger.length };
}

async function createSeedState() {
  const { seedWeavers, seedProducts, fallbackJourney } = await loadSeedArrays();
  state = {
    version: 2,
    weavers: clone(seedWeavers),
    products: clone(seedProducts),
    ledger: [],
    events: [],
    fraud: [],
    trend: clone(fallbackTrend),
  };

  await createBlock("GENESIS", { app: "TantriTrace", standard: "handloom-auth-v2" });
  for (const product of state.products) {
    product.hash = createHashForProduct(product);
    product.certId = certificateId(product);
    product.status = "verified";
    product.journey = product.journey || clone(fallbackJourney);
    const block = await createBlock("REGISTER_PRODUCT", {
      productId: product.id,
      hash: product.hash,
      gi: product.gi,
      weaverId: product.weaverId,
    });
    product.blockIndex = block.index;
  }
  addEvent("System initialized", "Seed products hashed and registered on the live Node API.");
  return state;
}

async function persistState() {
  await mkdir(dataDir, { recursive: true });
  await writeFile(stateFile, JSON.stringify(state, null, 2), "utf8");
}

function normalizeState(nextState) {
  if (!nextState || typeof nextState !== "object")
    throw new Error("State payload must be an object");
  if (nextState.version !== 2) throw new Error("Unsupported state version");
  for (const key of ["weavers", "products", "ledger", "events", "fraud", "trend"]) {
    if (!Array.isArray(nextState[key])) throw new Error(`State field ${key} must be an array`);
  }
  return nextState;
}

async function ensureState() {
  if (state) return state;
  if (existsSync(stateFile)) {
    try {
      state = normalizeState(JSON.parse(await readFile(stateFile, "utf8")));
      return state;
    } catch (error) {
      console.warn(`Rebuilding registry state: ${error.message}`);
    }
  }
  await createSeedState();
  await persistState();
  return state;
}

function broadcast(event, payload) {
  const data = `event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`;
  for (const response of clients) response.write(data);
}

async function saveAndBroadcast(reason) {
  await persistState();
  broadcast("state", { reason, state, at: nowIso() });
}

async function readJsonBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 2_000_000) throw new Error("Request body too large");
  }
  return body ? JSON.parse(body) : {};
}

async function recordScan(productId, source = "API scan") {
  const product = state.products.find((item) => item.id === productId);
  if (!product) throw new Error("Product not found");
  product.scans = Number(product.scans || 0) + 1;
  product.lastScanAt = nowIso();
  const block = await createBlock("VERIFY_SCAN", {
    productId: product.id,
    hash: product.hash,
    source,
    scanNumber: product.scans,
  });
  addEvent("Product verified", `${product.name} scanned from ${source}. Block #${block.index}.`);
  state.trend[state.trend.length - 1][1] += 1;
  return product;
}

async function handleApi(request, response, url) {
  await ensureState();

  if (request.method === "GET" && url.pathname === "/api/health") {
    jsonResponse(response, 200, {
      ok: true,
      mode: "live",
      products: state.products.length,
      events: state.events.length,
    });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/state") {
    jsonResponse(response, 200, { mode: "live", state });
    return true;
  }

  if (request.method === "PUT" && url.pathname === "/api/state") {
    const payload = await readJsonBody(request);
    state = normalizeState(payload.state);
    await saveAndBroadcast(payload.reason || "state-sync");
    jsonResponse(response, 200, { ok: true, mode: "live", state });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/reset") {
    await createSeedState();
    await saveAndBroadcast("reset");
    jsonResponse(response, 200, { ok: true, mode: "live", state });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/scan") {
    const payload = await readJsonBody(request);
    const product = await recordScan(payload.productId, payload.source || "API scan");
    await saveAndBroadcast("scan");
    jsonResponse(response, 200, { ok: true, product, state });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/verify") {
    const payload = await readJsonBody(request);
    const product = findProductByValue(payload.value);
    if (product) {
      await recordScan(product.id, payload.source || "API verification");
      await saveAndBroadcast("verify");
      jsonResponse(response, 200, {
        ok: true,
        status: "authentic",
        product,
        certificate: buildCertificate(product),
        state,
      });
      return true;
    }

    const submitted = String(payload.value || "").slice(0, 128);
    const fraud = {
      id: `FR-${Date.now()}`,
      severity: submitted.length > 20 ? "high" : "medium",
      timestamp: nowIso(),
      productId: "UNKNOWN",
      title: "Unknown verification attempt",
      detail: `No matching product, certificate, or hash for "${submitted}".`,
    };
    state.fraud.unshift(fraud);
    await createBlock("UNKNOWN_VERIFY_ATTEMPT", { submitted });
    addEvent("Unknown verification attempt", fraud.detail);
    await saveAndBroadcast("unknown-verify");
    jsonResponse(response, 200, { ok: false, status: "not_verified", fraud, state });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/products") {
    const payload = await readJsonBody(request);
    const product = validateProduct(payload.product || {});
    product.hash = createHashForProduct(product);
    product.certId = certificateId(product);
    product.status = "verified";
    const block = await createBlock("REGISTER_PRODUCT", {
      productId: product.id,
      hash: product.hash,
      gi: product.gi,
      weaverId: product.weaverId,
    });
    product.blockIndex = block.index;
    state.products.unshift(product);
    addEvent("Product registered", `${product.name} created with certificate ${product.certId}.`);
    await saveAndBroadcast("register-product");
    jsonResponse(response, 201, { ok: true, product, state });
    return true;
  }

  const certificateMatch = url.pathname.match(/^\/api\/products\/([^/]+)\/certificate$/);
  if (request.method === "GET" && certificateMatch) {
    const product = state.products.find(
      (item) => item.id === decodeURIComponent(certificateMatch[1]),
    );
    if (!product) {
      jsonResponse(response, 404, { error: "Product not found" });
      return true;
    }
    jsonResponse(response, 200, { ok: true, certificate: buildCertificate(product) });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/weavers") {
    const payload = await readJsonBody(request);
    const weaver = validateWeaver(payload.weaver || {});
    state.weavers.unshift(weaver);
    await createBlock("REGISTER_WEAVER", {
      weaverId: weaver.id,
      name: weaver.name,
      cluster: weaver.cluster,
    });
    addEvent("Weaver registered", `${weaver.name} added to ${weaver.cluster}.`);
    await saveAndBroadcast("register-weaver");
    jsonResponse(response, 201, { ok: true, weaver, state });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/ledger/verify") {
    jsonResponse(response, 200, { ok: true, ...verifyLedgerIntegrity() });
    return true;
  }

  if (request.method === "POST" && url.pathname === "/api/fraud/report") {
    const payload = await readJsonBody(request);
    const productId = String(payload.productId || "UNKNOWN").slice(0, 80);
    const fraud = {
      id: `FR-${Date.now()}`,
      severity: ["low", "medium", "high"].includes(payload.severity) ? payload.severity : "medium",
      timestamp: nowIso(),
      productId,
      title: requireText(payload.title || "Fraud report", "Fraud title").slice(0, 160),
      detail: requireText(
        payload.detail || "Suspicious verification signal submitted.",
        "Fraud detail",
      ).slice(0, 500),
    };
    state.fraud.unshift(fraud);
    await createBlock("FRAUD_REPORT", { productId, severity: fraud.severity, title: fraud.title });
    addEvent("Fraud report submitted", `${fraud.title} for ${productId}.`);
    await saveAndBroadcast("fraud-report");
    jsonResponse(response, 201, { ok: true, fraud, state });
    return true;
  }

  if (request.method === "GET" && url.pathname === "/api/events") {
    response.writeHead(200, {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      connection: "keep-alive",
    });
    response.write(`event: hello\ndata: ${JSON.stringify({ ok: true, at: nowIso() })}\n\n`);
    const heartbeat = setInterval(() => {
      response.write(`event: heartbeat\ndata: ${JSON.stringify({ at: nowIso() })}\n\n`);
    }, 25_000);
    clients.add(response);
    request.on("close", () => {
      clearInterval(heartbeat);
      clients.delete(response);
    });
    return true;
  }

  return false;
}

function isInsidePublic(filePath) {
  const relative = filePath.slice(publicDir.length);
  return filePath === publicDir || (filePath.startsWith(publicDir) && relative.startsWith(sep));
}

async function serveStatic(request, response, url) {
  if (url.pathname === "/") {
    response.writeHead(302, { location: "/tantritrace-ultimate/" });
    response.end();
    return;
  }

  const decodedPath = decodeURIComponent(url.pathname);
  let filePath = resolve(publicDir, `.${decodedPath}`);
  if (!isInsidePublic(filePath)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  let fileStat;
  try {
    fileStat = await stat(filePath);
    if (fileStat.isDirectory()) {
      filePath = join(filePath, "index.html");
      fileStat = await stat(filePath);
    }
  } catch {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  response.writeHead(200, {
    "content-type": mimeTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
    "content-length": fileStat.size,
    "cache-control": extname(filePath) === ".html" ? "no-store" : "public, max-age=300",
  });
  createReadStream(filePath).pipe(response);
}

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host || "127.0.0.1"}`);
    if (url.pathname.startsWith("/api/")) {
      const handled = await handleApi(request, response, url);
      if (!handled) jsonResponse(response, 404, { error: "API route not found" });
      return;
    }
    await serveStatic(request, response, url);
  } catch (error) {
    jsonResponse(response, 500, { error: error.message || "Server error" });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`TantriTrace live server running at http://127.0.0.1:${port}/tantritrace-ultimate/`);
});
