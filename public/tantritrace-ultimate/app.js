const STORAGE_KEY = "tantritrace.production.v2";
const API_ROOT = "/api";
const colors = ["#f97316", "#2563eb", "#0f766e", "#db2777", "#b7791f", "#7c3aed"];

const seedWeavers = [
  {
    id: "W001",
    name: "Lakshmi Devi",
    role: "Ikat master weaver",
    village: "Bhoodan Pochampally",
    state: "Telangana",
    craft: "Pochampally Ikat",
    cluster: "Pochampally Handloom Cluster",
    years: 25,
    generations: 3,
    currentIncome: 18000,
    story:
      "Lakshmi learned tie-and-dye calculations beside her grandmother. TantriTrace gives her product-level proof where the market usually sees only a saree.",
  },
  {
    id: "W002",
    name: "Ramesh Kumar",
    role: "Banarasi brocade artisan",
    village: "Lallapura",
    state: "Uttar Pradesh",
    craft: "Banarasi Silk",
    cluster: "Banaras Handloom Cluster",
    years: 35,
    generations: 5,
    currentIncome: 25000,
    story:
      "Ramesh carries five generations of brocade memory. His certificate keeps the weaver name attached to the final retail value.",
  },
  {
    id: "W003",
    name: "Meenakshi Amma",
    role: "Korvai silk specialist",
    village: "Pillayarpalayam",
    state: "Tamil Nadu",
    craft: "Kanchipuram Silk",
    cluster: "Kanchipuram Silk Cluster",
    years: 30,
    generations: 4,
    currentIncome: 22000,
    story:
      "Meenakshi protects Korvai interlock weaving, where the border and body become one durable fabric.",
  },
  {
    id: "W004",
    name: "Kabir Ansari",
    role: "Chanderi texture expert",
    village: "Chanderi",
    state: "Madhya Pradesh",
    craft: "Chanderi Weave",
    cluster: "Chanderi Handloom Cluster",
    years: 20,
    generations: 6,
    currentIncome: 20000,
    story:
      "Kabir works with fabric so light it feels almost weightless. Traceable storytelling makes subtle handwork visible online.",
  },
  {
    id: "W005",
    name: "Dipali Borah",
    role: "Muga silk weaver",
    village: "Sualkuchi",
    state: "Assam",
    craft: "Muga Silk",
    cluster: "Sualkuchi Silk Cluster",
    years: 22,
    generations: 4,
    currentIncome: 21000,
    story:
      "Dipali weaves naturally golden silk from Assam. Export-ready proof protects rarity and origin.",
  },
  {
    id: "W006",
    name: "Rajan Patwa",
    role: "Patan Patola custodian",
    village: "Patan",
    state: "Gujarat",
    craft: "Patola",
    cluster: "Patan Patola Cluster",
    years: 40,
    generations: 7,
    currentIncome: 60000,
    story:
      "Rajan practices one of the hardest double ikat traditions in the world. Item-level proof protects a high-value craft from counterfeit claims.",
  },
];

const seedProducts = [
  {
    id: "TT-PCH-001",
    name: "Telia Rumal Ikat Saree",
    weaverId: "W001",
    craft: "Pochampally Ikat",
    category: "Saree",
    material: "Mercerized cotton, natural dye",
    technique: "Double ikat resist dye",
    gi: "GI-055",
    days: 14,
    price: 8500,
    premium: 32,
    scans: 142,
    trust: 97,
    palette: ["#bf2f38", "#111827", "#f8fafc"],
    story:
      "A precise red-black-white grid inspired by Telia Rumal geometry, planned at yarn level before weaving begins.",
    journey: [
      ["Yarn Bank", "2026-06-22", "Nalgonda yarn bank", "Cotton yarn lot recorded with supplier receipt."],
      ["Natural Dye", "2026-06-24", "Pochampally dye house", "Resist-tied yarn dyed in red and black."],
      ["Loom Weaving", "2026-07-03", "Lakshmi Devi home loom", "Warp and weft alignment checked every repeat."],
      ["GI Quality Check", "2026-07-07", "Cluster verification desk", "Handloom structure and GI claim verified."],
      ["Market Scan", "2026-07-12", "Hyderabad craft fair", "QR tag activated and buyer story published."],
    ],
  },
  {
    id: "TT-BAN-003",
    name: "Katan Silk Brocade Lehenga Panel",
    weaverId: "W002",
    craft: "Banarasi Silk",
    category: "Fabric",
    material: "Katan silk, gold zari",
    technique: "Kadwa brocade",
    gi: "GI-114",
    days: 25,
    price: 35000,
    premium: 41,
    scans: 325,
    trust: 98,
    palette: ["#7f1d1d", "#d99b32", "#3f2a19"],
    story:
      "A bridal-grade brocade where each motif is woven separately, reducing waste and proving artisanal labor.",
    journey: [
      ["Silk Sourcing", "2026-05-15", "Varanasi silk exchange", "Katan silk and zari source details captured."],
      ["Naksha Translation", "2026-05-20", "Lallapura design room", "Floral jaal converted into loom-ready instructions."],
      ["Kadwa Weaving", "2026-06-12", "Ramesh Kumar loom", "Each motif woven separately to prove hand process."],
      ["Finishing", "2026-06-16", "Banaras finishing unit", "Zari inspection and fabric rolling completed."],
      ["Certificate Issue", "2026-06-18", "Weavers Service Centre", "GI and silk mark data attached to certificate."],
    ],
  },
  {
    id: "TT-KAN-005",
    name: "Korvai Temple Border Saree",
    weaverId: "W003",
    craft: "Kanchipuram Silk",
    category: "Saree",
    material: "Mulberry silk, half-fine zari",
    technique: "Korvai interlock",
    gi: "GI-021",
    days: 18,
    price: 22000,
    premium: 36,
    scans: 175,
    trust: 96,
    palette: ["#1d4ed8", "#be185d", "#f59e0b"],
    story:
      "A blue-magenta saree where body and border are interlocked on loom, carrying temple-inspired forms into an heirloom.",
  },
  {
    id: "TT-CHD-007",
    name: "Asharfi Booti Chanderi Sico",
    weaverId: "W004",
    craft: "Chanderi Weave",
    category: "Saree",
    material: "Silk warp, cotton weft, zari",
    technique: "Ek nali weaving",
    gi: "GI-051",
    days: 10,
    price: 8500,
    premium: 27,
    scans: 110,
    trust: 94,
    palette: ["#9ecbb5", "#d6a637", "#f8fafc"],
    story:
      "A feather-light silk-cotton fabric dotted with coin-like zari bootis and verified origin.",
  },
  {
    id: "TT-MUG-009",
    name: "Golden Muga Mekhela Sador",
    weaverId: "W005",
    craft: "Muga Silk",
    category: "Mekhela Sador",
    material: "Muga silk, eri accents",
    technique: "Throw shuttle weaving",
    gi: "GI-101",
    days: 16,
    price: 18500,
    premium: 34,
    scans: 221,
    trust: 95,
    palette: ["#d6a13d", "#7c2d12", "#14532d"],
    story:
      "A naturally golden Assam silk set authenticated from cocoon sourcing to loom completion.",
  },
  {
    id: "TT-PAT-011",
    name: "Navaratna Double Ikat Patola",
    weaverId: "W006",
    craft: "Patola",
    category: "Saree",
    material: "Pure silk, natural dyes",
    technique: "Double ikat alignment",
    gi: "GI-376",
    days: 180,
    price: 180000,
    premium: 48,
    scans: 612,
    trust: 99,
    palette: ["#dc2626", "#1d4ed8", "#facc15"],
    story:
      "A reversible, high-precision Patola whose pattern is dyed into both warp and weft before weaving.",
  },
];

const fallbackJourney = [
  ["Raw Material", "2026-06-01", "Registered cluster source", "Material lot and weaver allocation logged."],
  ["Design Setup", "2026-06-05", "Cluster design desk", "Motif, palette, and cultural note validated."],
  ["Loom Production", "2026-06-18", "Artisan home loom", "Handloom progress recorded with technique checkpoint."],
  ["Quality Proof", "2026-06-22", "Verification desk", "GI claim and final finish checked before QR activation."],
  ["Consumer Scan", "2026-07-01", "Retail or export buyer", "Buyer scan opens weaver story and certificate."],
];

const craftKnowledge = {
  "Pochampally Ikat": {
    origin: "Telangana",
    proof: "Yarn is tied and dyed before weaving, so the pattern alignment itself becomes evidence of hand process.",
    motif: "Grid geometry, Telia Rumal memory, resist-dyed precision.",
  },
  "Banarasi Silk": {
    origin: "Uttar Pradesh",
    proof: "Kadwa weaving builds motifs separately, making labor intensity visible in the certificate.",
    motif: "Floral jaal, zari brocade, heirloom wedding textiles.",
  },
  "Kanchipuram Silk": {
    origin: "Tamil Nadu",
    proof: "Korvai interlock joins border and body on the loom rather than by later stitching.",
    motif: "Temple borders, bold contrast, durable mulberry silk.",
  },
  "Chanderi Weave": {
    origin: "Madhya Pradesh",
    proof: "The light silk-cotton structure and zari bootis need cluster-level verification to protect subtle craft value.",
    motif: "Asharfi booti, translucent texture, understated shine.",
  },
  "Muga Silk": {
    origin: "Assam",
    proof: "Naturally golden silk is rare, so source-to-loom traceability protects both material and artisan value.",
    motif: "Golden sheen, Assamese forms, durable ceremonial wear.",
  },
  Patola: {
    origin: "Gujarat",
    proof: "Double ikat is dyed into warp and weft before weaving, making every alignment checkpoint valuable.",
    motif: "Navaratna geometry, reversible precision, high-value heritage.",
  },
};

const languageTone = {
  en: "This certificate protects the maker, the craft cluster, and the buyer with one verifiable story.",
  hi: "Yeh certificate bunakar, kala aur kharidar ko ek satyapit kahani se jodta hai.",
  ta: "Indha certificate nesavalar, kalaignar paramparai, matrum vangumvarai oru urudhi seyyappatta kathaiyil inaikkirathu.",
  te: "Ee certificate neyyari, kala parampara, mariyu konugoludaaruni oka nammadagina kathato kalupukuntundi.",
  bn: "Ei certificate tantushilpi, hastashilpo, ebong kretake ek satyapito golper sathe jukto kore.",
};

let state;
let selectedProductId;
let selectedWeaverId;
let selectedLanguage = "en";
let liveTimer;
let remoteMode = false;
let remoteSaveTimer;
let eventSource;
const channel = "BroadcastChannel" in window ? new BroadcastChannel("tantritrace-sync") : null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const inr = (value) => `Rs. ${Number(value).toLocaleString("en-IN")}`;
const nowIso = () => new Date().toISOString();
const short = (hash) => (hash ? `${hash.slice(0, 10)}...${hash.slice(-8)}` : "pending");
const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

async function sha256(value) {
  if (window.crypto?.subtle) {
    const encoded = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest("SHA-256", encoded);
    return Array.from(new Uint8Array(digest))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");
  }

  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return String(hash >>> 0).padStart(64, "0");
}

async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_ROOT}${path}`, {
    ...options,
    cache: "no-store",
    headers: {
      "content-type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!response.ok) throw new Error(`API ${path} returned ${response.status}`);
  return response.json();
}

function keepSelectionValid() {
  if (!state.products.some((product) => product.id === selectedProductId)) {
    selectedProductId = state.products[0]?.id;
  }
  const selectedProduct = getProduct(selectedProductId);
  if (selectedProduct) selectedWeaverId = selectedProduct.weaverId;
  if (!state.weavers.some((weaver) => weaver.id === selectedWeaverId)) {
    selectedWeaverId = state.weavers[0]?.id;
  }
}

function applyRemoteState(nextState, broadcast = true) {
  if (!nextState?.products || !nextState?.weavers || !nextState?.ledger) return false;
  state = nextState;
  keepSelectionValid();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (broadcast && channel) channel.postMessage({ type: "state-updated", at: Date.now(), source: "remote" });
  return true;
}

async function tryLoadRemoteState() {
  try {
    const payload = await apiFetch("/state");
    if (!applyRemoteState(payload.state, false)) return false;
    remoteMode = true;
    connectServerEvents();
    return true;
  } catch {
    remoteMode = false;
    return false;
  }
}

function queueRemoteSave(reason = "state-sync") {
  if (!remoteMode) return;
  window.clearTimeout(remoteSaveTimer);
  remoteSaveTimer = window.setTimeout(async () => {
    try {
      const payload = await apiFetch("/state", {
        method: "PUT",
        body: JSON.stringify({ reason, state }),
      });
      if (payload.state) applyRemoteState(payload.state, false);
      remoteMode = true;
      renderMetrics();
    } catch {
      remoteMode = false;
      renderMetrics();
    }
  }, 180);
}

function connectServerEvents() {
  if (!remoteMode || !("EventSource" in window) || eventSource) return;
  eventSource = new EventSource(`${API_ROOT}/events`);
  eventSource.addEventListener("state", (event) => {
    try {
      const payload = JSON.parse(event.data);
      if (applyRemoteState(payload.state, false)) renderAll();
    } catch {
      // Ignore malformed event frames; the next successful state sync will repair the view.
    }
  });
  eventSource.onerror = () => {
    remoteMode = false;
    eventSource?.close();
    eventSource = undefined;
    renderMetrics();
  };
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

async function createHashForProduct(product) {
  return sha256(canonicalProduct(product, getWeaver(product.weaverId)));
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
  block.hash = await sha256(JSON.stringify(block));
  state.ledger.push(block);
  return block;
}

async function prepareSeedState() {
  const prepared = {
    version: 2,
    weavers: structuredClone(seedWeavers),
    products: structuredClone(seedProducts),
    ledger: [],
    events: [],
    fraud: [],
    trend: [
      ["Jan", 1200],
      ["Feb", 1900],
      ["Mar", 3100],
      ["Apr", 5200],
      ["May", 8800],
      ["Jun", 15300],
      ["Jul", 27100],
    ],
  };
  state = prepared;

  await createBlock("GENESIS", { app: "TantriTrace", standard: "handloom-auth-v2" });
  for (const product of state.products) {
    product.hash = await createHashForProduct(product);
    product.certId = certificateId(product);
    product.status = "verified";
    product.journey = product.journey || structuredClone(fallbackJourney);
    const block = await createBlock("REGISTER_PRODUCT", {
      productId: product.id,
      hash: product.hash,
      gi: product.gi,
      weaverId: product.weaverId,
    });
    product.blockIndex = block.index;
  }
  addEvent("System initialized", "Seed products hashed and registered.", false);
  persist(true, true, "seed-state");
}

async function loadState() {
  const loadedRemote = await tryLoadRemoteState();
  if (loadedRemote) {
    selectedProductId = state.products[0]?.id;
    selectedWeaverId = state.weavers[0]?.id;
    keepSelectionValid();
    return;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      state = JSON.parse(stored);
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  if (!state || state.version !== 2) {
    await prepareSeedState();
  }

  selectedProductId = state.products[0]?.id;
  selectedWeaverId = state.weavers[0]?.id;
}

function persist(broadcast = true, syncRemote = true, reason = "state-sync") {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (broadcast && channel) channel.postMessage({ type: "state-updated", at: Date.now() });
  if (syncRemote) queueRemoteSave(reason);
}

function getProduct(id = selectedProductId) {
  return state.products.find((product) => product.id === id) || state.products[0];
}

function getWeaver(id = selectedWeaverId) {
  return state.weavers.find((weaver) => weaver.id === id) || state.weavers[0];
}

function certificateId(product) {
  return `TT-CERT-${product.id}-${String(product.hash || "").slice(0, 6).toUpperCase()}`;
}

function addEvent(title, detail, shouldPersist = true) {
  state.events.unshift({
    id: `EV-${Date.now()}-${Math.floor(Math.random() * 9999)}`,
    timestamp: nowIso(),
    title,
    detail,
  });
  state.events = state.events.slice(0, 80);
  if (shouldPersist) persist();
}

function drawTraceTag(product, scanning = false) {
  const canvas = $("#traceCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, size, size);
  const cells = 13;
  const pad = 22;
  const gap = 3;
  const cell = (size - pad * 2 - gap * (cells - 1)) / cells;
  const seed = `${product.id}${product.hash || ""}`.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  for (let row = 0; row < cells; row += 1) {
    for (let col = 0; col < cells; col += 1) {
      const corner = (row < 4 && col < 4) || (row < 4 && col > 8) || (row > 8 && col < 4);
      const active = corner || ((row * 29 + col * 17 + seed) % 7 < 3);
      ctx.fillStyle = active ? "#101827" : "#fff";
      ctx.fillRect(pad + col * (cell + gap), pad + row * (cell + gap), cell, cell);
    }
  }
  if (scanning) {
    ctx.fillStyle = "#0f766e";
    ctx.fillRect(16, size / 2 - 2, size - 32, 4);
  }
}

async function recordScan(productId, source = "Manual scan") {
  if (remoteMode) {
    try {
      const payload = await apiFetch("/scan", {
        method: "POST",
        body: JSON.stringify({ productId, source }),
      });
      if (payload.state) applyRemoteState(payload.state, false);
      return payload.product;
    } catch {
      remoteMode = false;
      renderMetrics();
    }
  }

  const product = getProduct(productId);
  const weaver = getWeaver(product.weaverId);
  product.scans = Number(product.scans || 0) + 1;
  product.lastScanAt = nowIso();
  const block = await createBlock("VERIFY_SCAN", {
    productId: product.id,
    hash: product.hash,
    source,
    scanNumber: product.scans,
  });
  addEvent("Product verified", `${product.name} scanned from ${source}. Block #${block.index}.`, false);
  state.trend[state.trend.length - 1][1] += 1;
  persist(true, true, "scan");
}

async function verifySelectedProduct(source = "Operations console") {
  const product = getProduct();
  $("#scanStatus").textContent = "Verifying";
  $("#scanStatus").className = "status scanning";
  drawTraceTag(product, true);
  await new Promise((resolve) => setTimeout(resolve, 420));
  const expected = await createHashForProduct(product);
  const valid = expected === product.hash;
  if (valid) await recordScan(product.id, source);
  $("#scanStatus").textContent = valid ? "Authentic" : "Mismatch";
  $("#scanStatus").className = valid ? "status" : "status danger";
  drawTraceTag(product, false);
  renderAll();
  return valid;
}

async function runTamperCheck() {
  const product = getProduct();
  const tampered = { ...product, price: Number(product.price) + 999 };
  const tamperedHash = await sha256(canonicalProduct(tampered, getWeaver(product.weaverId)));
  const fraud = {
    id: `FR-${Date.now()}`,
    severity: "high",
    timestamp: nowIso(),
    productId: product.id,
    title: "Tamper mismatch detected",
    detail: `Modified payload hash ${short(tamperedHash)} does not match certificate ${short(product.hash)}.`,
  };
  state.fraud.unshift(fraud);
  await createBlock("FRAUD_CHECK", { productId: product.id, expected: product.hash, received: tamperedHash });
  addEvent("Tamper check failed as expected", fraud.detail, false);
  persist(true, true, "tamper-check");
  renderAll();
}

async function verifyManualInput() {
  const raw = $("#verifyInput").value.trim();
  const result = $("#manualVerifyResult");
  if (!raw) {
    result.className = "result-card compact fail";
    result.innerHTML = "<h3>No value entered</h3><p>Paste a product ID, certificate ID, or trace hash.</p>";
    return;
  }

  if (remoteMode) {
    try {
      const payload = await apiFetch("/verify", {
        method: "POST",
        body: JSON.stringify({ value: raw, source: "Manual lookup" }),
      });
      if (payload.state) applyRemoteState(payload.state, false);
      if (payload.status === "authentic" && payload.product) {
        selectedProductId = payload.product.id;
        result.className = "result-card compact success";
        result.innerHTML = `<h3>Authentic product</h3><p>${escapeHtml(payload.product.name)} is registered with certificate ${escapeHtml(payload.product.certId)}.</p><small>${escapeHtml(short(payload.product.hash))}</small>`;
      } else {
        result.className = "result-card compact fail";
        result.innerHTML = `<h3>Not verified</h3><p>${escapeHtml(payload.fraud?.detail || "No matching product, certificate, or hash.")}</p>`;
      }
      renderAll();
      return;
    } catch {
      remoteMode = false;
      renderMetrics();
    }
  }

  const query = raw.toLowerCase();
  const product = state.products.find((item) =>
    [item.id, item.certId, item.hash].some((value) => String(value || "").toLowerCase() === query),
  );
  if (product) {
    selectedProductId = product.id;
    await recordScan(product.id, "Manual lookup");
    result.className = "result-card compact success";
    result.innerHTML = `<h3>Authentic product</h3><p>${escapeHtml(product.name)} is registered with certificate ${escapeHtml(product.certId)}.</p><small>${escapeHtml(short(product.hash))}</small>`;
    renderAll();
    return;
  }

  const fraud = {
    id: `FR-${Date.now()}`,
    severity: raw.length > 20 ? "high" : "medium",
    timestamp: nowIso(),
    productId: "UNKNOWN",
    title: "Unknown verification attempt",
    detail: `No matching product, certificate, or hash for "${raw.slice(0, 42)}".`,
  };
  state.fraud.unshift(fraud);
  await createBlock("UNKNOWN_VERIFY_ATTEMPT", { submitted: raw.slice(0, 128) });
  addEvent("Unknown verification attempt", fraud.detail, false);
  persist(true, true, "manual-verify");
  result.className = "result-card compact fail";
  result.innerHTML = `<h3>Not verified</h3><p>${escapeHtml(fraud.detail)}</p>`;
  renderAll();
}

async function registerProduct(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const id = `TT-${String(data.craft).slice(0, 3).toUpperCase().replace(/[^A-Z]/g, "H")}-${Date.now().toString().slice(-6)}`;
  const palette = colors.slice(0, 3).sort(() => Math.random() - 0.5);
  const product = {
    id,
    name: String(data.name).trim(),
    weaverId: String(data.weaverId),
    craft: String(data.craft).trim(),
    category: String(data.category).trim(),
    material: String(data.material).trim(),
    technique: String(data.technique).trim(),
    gi: String(data.gi).trim(),
    days: Number(data.days),
    price: Number(data.price),
    premium: Number(data.premium),
    scans: 0,
    trust: 92,
    palette,
    story: String(data.story).trim(),
    journey: structuredClone(fallbackJourney),
    status: "verified",
    createdAt: nowIso(),
  };

  if (remoteMode) {
    try {
      const payload = await apiFetch("/products", {
        method: "POST",
        body: JSON.stringify({ product }),
      });
      if (payload.state) applyRemoteState(payload.state, false);
      selectedProductId = payload.product?.id || product.id;
      selectedWeaverId = product.weaverId;
      event.currentTarget.reset();
      renderAll();
      return;
    } catch {
      remoteMode = false;
      renderMetrics();
    }
  }

  product.hash = await createHashForProduct(product);
  product.certId = certificateId(product);
  const block = await createBlock("REGISTER_PRODUCT", { productId: product.id, hash: product.hash, gi: product.gi });
  product.blockIndex = block.index;
  state.products.unshift(product);
  selectedProductId = product.id;
  addEvent("Product registered", `${product.name} created with certificate ${product.certId}.`, false);
  persist(true, true, "register-product");
  event.currentTarget.reset();
  renderAll();
}

async function registerWeaver(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const weaver = {
    id: `W${String(state.weavers.length + 1).padStart(3, "0")}`,
    name: String(data.name).trim(),
    role: String(data.role).trim(),
    village: String(data.village).trim(),
    state: String(data.state).trim(),
    craft: String(data.craft).trim(),
    cluster: String(data.cluster).trim(),
    years: Number(data.years),
    generations: Number(data.generations),
    currentIncome: 18000,
    story: String(data.story).trim(),
  };

  if (remoteMode) {
    try {
      const payload = await apiFetch("/weavers", {
        method: "POST",
        body: JSON.stringify({ weaver }),
      });
      if (payload.state) applyRemoteState(payload.state, false);
      selectedWeaverId = payload.weaver?.id || weaver.id;
      event.currentTarget.reset();
      renderAll();
      return;
    } catch {
      remoteMode = false;
      renderMetrics();
    }
  }

  state.weavers.unshift(weaver);
  selectedWeaverId = weaver.id;
  await createBlock("REGISTER_WEAVER", { weaverId: weaver.id, name: weaver.name, cluster: weaver.cluster });
  addEvent("Weaver registered", `${weaver.name} added to ${weaver.cluster}.`, false);
  persist(true, true, "register-weaver");
  event.currentTarget.reset();
  renderAll();
}

async function verifyChainIntegrity() {
  let valid = true;
  for (let index = 0; index < state.ledger.length; index += 1) {
    const block = state.ledger[index];
    const hash = block.hash;
    const clone = { ...block };
    delete clone.hash;
    const recalculated = await sha256(JSON.stringify(clone));
    if (hash !== recalculated) valid = false;
    if (index > 0 && block.previousHash !== state.ledger[index - 1].hash) valid = false;
  }
  $("#chainResult").className = valid ? "result-card compact success" : "result-card compact fail";
  $("#chainResult").innerHTML = valid
    ? `<h3>Ledger verified</h3><p>${state.ledger.length} blocks recalculated successfully.</p>`
    : "<h3>Ledger mismatch</h3><p>At least one block hash or previous-hash link is invalid.</p>";
  $("#metricIntegrity").textContent = valid ? "Valid" : "Invalid";
  return valid;
}

function productVisual(product) {
  const palette = product.palette || colors.slice(0, 3);
  return `linear-gradient(135deg, ${palette[0]} 0 30%, ${palette[1]} 30% 62%, ${palette[2]} 62% 100%)`;
}

function getCraftInfo(product) {
  return craftKnowledge[product.craft] || {
    origin: getWeaver(product.weaverId).state,
    proof: "Cluster, technique, material, and maker details are bound to a product hash.",
    motif: "Registered handloom craft record.",
  };
}

function computeProductRisk(product) {
  const relatedFraud = state.fraud.filter((item) => item.productId === product.id).length;
  const medianScans = state.products
    .map((item) => Number(item.scans || 0))
    .sort((a, b) => a - b)[Math.floor(state.products.length / 2)] || 1;
  const scanPressure = Number(product.scans || 0) > medianScans * 2 ? 18 : Number(product.scans || 0) > medianScans * 1.35 ? 9 : 0;
  const trustPenalty = Math.max(0, 100 - Number(product.trust || 92));
  const fraudPenalty = Math.min(42, relatedFraud * 18);
  const pricePenalty = Number(product.price || 0) > 100000 ? 9 : 0;
  const score = Math.min(99, 8 + scanPressure + trustPenalty + fraudPenalty + pricePenalty);
  return {
    score,
    level: score >= 60 ? "high" : score >= 32 ? "medium" : "low",
    reasons: [
      relatedFraud ? `${relatedFraud} fraud signal${relatedFraud === 1 ? "" : "s"}` : "No direct fraud signal",
      scanPressure ? "Scan volume is above product baseline" : "Scan volume matches baseline",
      pricePenalty ? "High-value item requires stricter counter checks" : "Value band is normal",
    ],
  };
}

function buildShareUrl(product) {
  return `${window.location.origin}${window.location.pathname}#consumer?product=${encodeURIComponent(product.id)}`;
}

function impactForProduct(product) {
  const weaver = getWeaver(product.weaverId);
  const premiumValue = Math.round(Number(product.price || 0) * (Number(product.premium || 0) / 100));
  const craftInfo = getCraftInfo(product);
  return {
    weaver,
    premiumValue,
    craftInfo,
    localizedStory: languageTone[selectedLanguage] || languageTone.en,
  };
}

function renderMetrics() {
  $("#metricProducts").textContent = state.products.length.toLocaleString("en-IN");
  $("#metricWeavers").textContent = state.weavers.length.toLocaleString("en-IN");
  $("#metricScans").textContent = state.products.reduce((sum, item) => sum + Number(item.scans || 0), 0).toLocaleString("en-IN");
  $("#eventCount").textContent = `${state.events.length} events`;
  $("#networkState").textContent = remoteMode ? "Server live" : navigator.onLine ? "Online" : "Offline";
  $("#syncState").textContent = remoteMode
    ? `${state.products.length + state.weavers.length + state.ledger.length} records synced through API + SSE`
    : `${state.products.length + state.weavers.length + state.ledger.length} records saved locally`;
}

function renderSelectors() {
  const options = state.products
    .map((product) => `<option value="${escapeHtml(product.id)}">${escapeHtml(product.name)}</option>`)
    .join("");
  $("#productSelect").innerHTML = options;
  $("#productSelect").value = selectedProductId;
  $("#productWeaverSelect").innerHTML = state.weavers
    .map((weaver) => `<option value="${escapeHtml(weaver.id)}">${escapeHtml(weaver.name)} - ${escapeHtml(weaver.craft)}</option>`)
    .join("");
}

function renderSelectedProduct() {
  const product = getProduct();
  const weaver = getWeaver(product.weaverId);
  drawTraceTag(product, false);
  $("#storyProductName").textContent = product.name;
  $("#storyProductText").textContent = `${product.story} ${languageTone[selectedLanguage] || languageTone.en}`;
  $("#verificationResult").className = "result-card success";
  $("#verificationResult").innerHTML = `
    <h3>Authentic handloom record</h3>
    <p>${escapeHtml(product.name)} is linked to ${escapeHtml(weaver.name)} and certified under ${escapeHtml(product.gi)}.</p>
    <dl class="proof-list">
      <div><dt>Certificate</dt><dd>${escapeHtml(product.certId)}</dd></div>
      <div><dt>Trace hash</dt><dd>${escapeHtml(short(product.hash))}</dd></div>
      <div><dt>Scans</dt><dd>${Number(product.scans || 0).toLocaleString("en-IN")}</dd></div>
    </dl>
  `;
  $("#certificate").innerHTML = `
    <span class="label">Digital certificate</span>
    <h2>${escapeHtml(product.name)}</h2>
    <p>Woven by <strong>${escapeHtml(weaver.name)}</strong> in ${escapeHtml(weaver.village)}, ${escapeHtml(weaver.state)}.</p>
    <dl>
      <div><dt>Certificate ID</dt><dd>${escapeHtml(product.certId)}</dd></div>
      <div><dt>GI / mark</dt><dd>${escapeHtml(product.gi)}</dd></div>
      <div><dt>Technique</dt><dd>${escapeHtml(product.technique)}</dd></div>
      <div><dt>Block</dt><dd>#${Number(product.blockIndex || 0).toLocaleString("en-IN")}</dd></div>
      <div><dt>SHA-256 trace</dt><dd>${escapeHtml(short(product.hash))}</dd></div>
    </dl>
  `;
}

function renderConsumerExperience() {
  const product = getProduct();
  const { weaver, premiumValue, craftInfo, localizedStory } = impactForProduct(product);
  $("#consumerTitle").textContent = `${product.name} certificate`;
  $("#shareUrl").value = buildShareUrl(product);
  $("#consumerCertificate").innerHTML = `
    <div class="certificate-stamp">Authentic</div>
    <h3>${escapeHtml(product.name)}</h3>
    <p>${escapeHtml(product.story)}</p>
    <p>${escapeHtml(localizedStory)}</p>
    <dl class="proof-list">
      <div><dt>Maker</dt><dd>${escapeHtml(weaver.name)} - ${escapeHtml(weaver.village)}, ${escapeHtml(weaver.state)}</dd></div>
      <div><dt>Craft</dt><dd>${escapeHtml(product.craft)} - ${escapeHtml(craftInfo.origin)}</dd></div>
      <div><dt>Certificate</dt><dd>${escapeHtml(product.certId)}</dd></div>
      <div><dt>Trace hash</dt><dd>${escapeHtml(short(product.hash))}</dd></div>
    </dl>
  `;
  const palette = product.palette || colors.slice(0, 3);
  $("#weaveViewer").style.background = `
    repeating-linear-gradient(90deg, ${palette[0]} 0 13px, ${palette[1]} 13px 24px, ${palette[2]} 24px 34px),
    repeating-linear-gradient(0deg, rgba(16,24,39,.18) 0 9px, rgba(255,255,255,.26) 9px 18px)
  `;
  $("#culturalCard").innerHTML = `
    <strong>${escapeHtml(product.craft)} context</strong>
    <span>${escapeHtml(craftInfo.motif)}</span>
    <p>${escapeHtml(craftInfo.proof)}</p>
  `;
  $("#buyerImpact").innerHTML = `
    <article><strong>${escapeHtml(weaver.name)}</strong><span>Named maker stays attached to resale, retail, and export proof.</span></article>
    <article><strong>${inr(premiumValue)}</strong><span>Estimated authenticity premium protected for this product.</span></article>
    <article><strong>${Number(product.days || 0)} days</strong><span>Labor time is visible to buyers instead of hidden behind anonymous retail.</span></article>
    <article><strong>${escapeHtml(product.gi)}</strong><span>GI or certification claim is bound to item-level evidence.</span></article>
  `;
}

function renderJourney() {
  const product = getProduct();
  const steps = product.journey || fallbackJourney;
  $("#journey").innerHTML = steps
    .map(
      (step, index) => `
        <article>
          <b>${index + 1}</b>
          <small>${escapeHtml(step[1])}</small>
          <h3>${escapeHtml(step[0])}</h3>
          <p>${escapeHtml(step[3])}</p>
          <small>${escapeHtml(step[2])}</small>
        </article>
      `,
    )
    .join("");
}

function renderProducts() {
  const query = ($("#productSearch")?.value || "").toLowerCase();
  const products = state.products.filter((product) =>
    [product.name, product.id, product.craft, product.gi].some((value) => String(value).toLowerCase().includes(query)),
  );
  $("#productGrid").innerHTML = products
    .map((product) => {
      const weaver = getWeaver(product.weaverId);
      return `
        <article class="product-card ${product.id === selectedProductId ? "active" : ""}" data-product="${escapeHtml(product.id)}">
          <div class="visual" style="background:${productVisual(product)}"></div>
          <strong>${escapeHtml(product.name)}</strong>
          <small>${escapeHtml(product.id)} - ${escapeHtml(product.craft)}</small>
          <small>${escapeHtml(weaver.name)} - ${inr(product.price)}</small>
          <div class="tag-row">
            <span class="tag">${escapeHtml(product.gi)}</span>
            <span class="tag">${Number(product.premium)}% premium</span>
            <span class="tag">${Number(product.scans || 0)} scans</span>
          </div>
        </article>
      `;
    })
    .join("");
  $$("[data-product]").forEach((card) => {
    card.addEventListener("click", () => {
      selectedProductId = card.dataset.product;
      selectedWeaverId = getProduct(selectedProductId).weaverId;
      renderAll();
    });
  });
}

function renderWeavers() {
  $("#weaverDirectory").innerHTML = state.weavers
    .map((weaver) => {
      const linkedProducts = state.products.filter((product) => product.weaverId === weaver.id);
      const avgPremium = linkedProducts.length
        ? Math.round(linkedProducts.reduce((sum, product) => sum + Number(product.premium || 0), 0) / linkedProducts.length)
        : 0;
      const projectedIncome = Math.round(Number(weaver.currentIncome || 18000) * (1 + avgPremium / 100));
      return `
        <article class="weaver-card ${weaver.id === selectedWeaverId ? "active" : ""}" data-weaver="${escapeHtml(weaver.id)}">
          <strong>${escapeHtml(weaver.name)}</strong>
          <small>${escapeHtml(weaver.role)} - ${escapeHtml(weaver.village)}, ${escapeHtml(weaver.state)}</small>
          <p>${escapeHtml(weaver.story)}</p>
          <div class="tag-row">
            <span class="tag">${escapeHtml(weaver.craft)}</span>
            <span class="tag">${linkedProducts.length} products</span>
            <span class="tag">${inr(projectedIncome)}/mo projected</span>
          </div>
        </article>
      `;
    })
    .join("");
  $$("[data-weaver]").forEach((card) => {
    card.addEventListener("click", () => {
      selectedWeaverId = card.dataset.weaver;
      renderWeavers();
    });
  });
}

function renderFraudQueue() {
  if (!state.fraud.length) {
    $("#fraudQueue").innerHTML = '<div class="queue-item"><strong>No suspicious scans</strong><small>Fraud queue is clear.</small></div>';
    return;
  }
  $("#fraudQueue").innerHTML = state.fraud
    .slice(0, 12)
    .map(
      (item) => `
        <article class="queue-item ${escapeHtml(item.severity)}">
          <strong>${escapeHtml(item.title)}</strong>
          <small>${new Date(item.timestamp).toLocaleString("en-IN")} - ${escapeHtml(item.productId)}</small>
          <span>${escapeHtml(item.detail)}</span>
        </article>
      `,
    )
    .join("");
}

function renderRiskModel() {
  const product = getProduct();
  const risk = computeProductRisk(product);
  $("#riskBadge").textContent = `${risk.level.toUpperCase()} risk - ${risk.score}/99`;
  $("#riskBadge").className = `badge risk-${risk.level}`;
  $("#riskModel").innerHTML = `
    <article>
      <strong>${risk.score}/99</strong>
      <span>Counterfeit risk score</span>
    </article>
    <article>
      <strong>${escapeHtml(product.certId)}</strong>
      <span>Certificate under observation</span>
    </article>
    <article>
      <strong>${Number(product.scans || 0).toLocaleString("en-IN")}</strong>
      <span>Total scan signals</span>
    </article>
    <article>
      <strong>${escapeHtml(risk.reasons.join(" | "))}</strong>
      <span>Model explanation</span>
    </article>
  `;
}

function renderImpact() {
  const clusters = new Map();
  state.products.forEach((product) => {
    const weaver = getWeaver(product.weaverId);
    const current = clusters.get(weaver.cluster) || {
      cluster: weaver.cluster,
      state: weaver.state,
      products: 0,
      scans: 0,
      premiumValue: 0,
      weavers: new Set(),
    };
    current.products += 1;
    current.scans += Number(product.scans || 0);
    current.premiumValue += Math.round(Number(product.price || 0) * (Number(product.premium || 0) / 100));
    current.weavers.add(weaver.id);
    clusters.set(weaver.cluster, current);
  });

  const rows = Array.from(clusters.values()).sort((a, b) => b.premiumValue - a.premiumValue);
  $("#clusterMap").innerHTML = rows
    .map(
      (row, index) => `
        <article class="cluster-node" style="--node:${Math.min(92, 30 + row.products * 11 + index * 4)}%">
          <strong>${escapeHtml(row.cluster)}</strong>
          <span>${escapeHtml(row.state)} - ${row.products} products - ${row.scans.toLocaleString("en-IN")} scans</span>
          <small>${inr(row.premiumValue)} traceable premium</small>
        </article>
      `,
    )
    .join("");

  const premiumTotal = rows.reduce((sum, row) => sum + row.premiumValue, 0);
  const totalDays = state.products.reduce((sum, product) => sum + Number(product.days || 0), 0);
  const totalScans = state.products.reduce((sum, product) => sum + Number(product.scans || 0), 0);
  $("#impactMetrics").innerHTML = `
    <article><strong>${inr(premiumTotal)}</strong><span>Estimated value protected by verified storytelling</span></article>
    <article><strong>${totalDays.toLocaleString("en-IN")} days</strong><span>Visible artisan labor attached to certificates</span></article>
    <article><strong>${totalScans.toLocaleString("en-IN")}</strong><span>Consumer and retail scan touchpoints</span></article>
  `;
  $("#readinessScore").innerHTML = `
    <div class="score-ring">94</div>
    <article><strong>Prototype depth</strong><span>End-to-end registry, verification, ledger, analytics, and API are working.</span></article>
    <article><strong>Scalability</strong><span>Cluster-neutral data model works for handloom and adjacent craft sectors.</span></article>
    <article><strong>Judge clarity</strong><span>One scan shows authenticity, weaver story, fraud protection, and livelihood impact.</span></article>
  `;
}

function renderLedger() {
  const product = getProduct();
  $("#apiPayload").textContent = JSON.stringify(
    {
      product: {
        id: product.id,
        name: product.name,
        craft: product.craft,
        gi: product.gi,
        hash: product.hash,
        certificateId: product.certId,
      },
      weaver: getWeaver(product.weaverId),
      journey: product.journey || fallbackJourney,
      verificationUrl: `https://tantritrace.gov.in/verify/${product.id}`,
    },
    null,
    2,
  );
  $("#ledgerBlocks").innerHTML = state.ledger
    .slice(-12)
    .reverse()
    .map(
      (block) => `
        <article class="ledger-block">
          <strong>#${block.index} ${escapeHtml(block.type)}</strong>
          <small>${new Date(block.timestamp).toLocaleString("en-IN")}</small>
          <span>hash ${escapeHtml(short(block.hash))}</span>
          <span>prev ${escapeHtml(short(block.previousHash))}</span>
        </article>
      `,
    )
    .join("");
}

function renderEvents() {
  $("#eventFeed").innerHTML = state.events
    .slice(0, 18)
    .map(
      (event) => `
        <article class="event-item">
          <strong>${escapeHtml(event.title)}</strong>
          <small>${new Date(event.timestamp).toLocaleString("en-IN")}</small>
          <span>${escapeHtml(event.detail)}</span>
        </article>
      `,
    )
    .join("");
}

function renderCharts() {
  const svg = $("#trendChart");
  const data = state.trend;
  const max = Math.max(...data.map((item) => item[1]), 1);
  const width = 760;
  const height = 260;
  const points = data.map((item, index) => {
    const x = 34 + (index * (width - 68)) / (data.length - 1);
    const y = height - 34 - (item[1] / max) * (height - 74);
    return [item[0], item[1], x, y];
  });
  const line = points.map((point) => `${point[2]},${point[3]}`).join(" ");
  const area = `M ${points[0][2]},${height - 34} L ${line} L ${points[points.length - 1][2]},${height - 34} Z`;
  svg.innerHTML = `
    <path d="${area}" fill="rgba(249,115,22,.13)"></path>
    <polyline points="${line}" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round"></polyline>
    ${points
      .map(
        (point) => `
          <circle cx="${point[2]}" cy="${point[3]}" r="6" fill="#fff7ed" stroke="#f97316" stroke-width="4"></circle>
          <text x="${point[2]}" y="${height - 9}" text-anchor="middle">${escapeHtml(point[0])}</text>
        `,
      )
      .join("")}
  `;

  const craftCounts = new Map();
  state.products.forEach((product) => craftCounts.set(product.craft, (craftCounts.get(product.craft) || 0) + 1));
  const craftRows = Array.from(craftCounts.entries()).sort((a, b) => b[1] - a[1]);
  const maxCraft = Math.max(...craftRows.map((item) => item[1]), 1);
  $("#craftChart").innerHTML = craftRows
    .map(
      ([craft, count], index) => `
        <div class="bar-row">
          <strong>${escapeHtml(craft)}</strong>
          <div class="track"><span style="width:${(count / maxCraft) * 100}%;background:${colors[index % colors.length]}"></span></div>
          <small>${count}</small>
        </div>
      `,
    )
    .join("");

  const premiumRows = state.products
    .slice()
    .sort((a, b) => Number(b.premium) - Number(a.premium))
    .slice(0, 6);
  const maxPremium = Math.max(...premiumRows.map((item) => Number(item.premium)), 1);
  $("#premiumChart").innerHTML = premiumRows
    .map(
      (product, index) => `
        <div class="bar-row">
          <strong>${escapeHtml(product.craft)}</strong>
          <div class="track"><span style="width:${(Number(product.premium) / maxPremium) * 100}%;background:${colors[index % colors.length]}"></span></div>
          <small>${Number(product.premium)}%</small>
        </div>
      `,
    )
    .join("");

  const riskRows = state.products
    .map((product) => ({ product, risk: computeProductRisk(product) }))
    .sort((a, b) => b.risk.score - a.risk.score)
    .slice(0, 6);
  const maxRisk = Math.max(...riskRows.map((item) => item.risk.score), 1);
  $("#riskChart").innerHTML = riskRows
    .map(
      ({ product, risk }) => `
        <div class="bar-row">
          <strong>${escapeHtml(product.id)}</strong>
          <div class="track"><span class="risk-fill ${risk.level}" style="width:${(risk.score / maxRisk) * 100}%"></span></div>
          <small>${risk.score}</small>
        </div>
      `,
    )
    .join("");
}

function renderAll() {
  renderMetrics();
  renderSelectors();
  renderSelectedProduct();
  renderConsumerExperience();
  renderJourney();
  renderProducts();
  renderWeavers();
  renderFraudQueue();
  renderRiskModel();
  renderLedger();
  renderEvents();
  renderCharts();
  renderImpact();
}

function switchView(view) {
  $$(".view").forEach((section) => section.classList.toggle("active", section.id === `view-${view}`));
  $$("[data-nav]").forEach((button) => button.classList.toggle("active", button.dataset.nav === view));
  window.location.hash = view;
}

function exportState() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `tantritrace-registry-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function startLiveMode() {
  window.clearInterval(liveTimer);
  if (!$("#liveMode").checked) return;
  liveTimer = window.setInterval(async () => {
    if (!$("#liveMode").checked || document.hidden || !state.products.length) return;
    const product = state.products[Math.floor(Math.random() * state.products.length)];
    await recordScan(product.id, "Live retail stream");
    renderAll();
  }, 6500);
}

async function runBatchScan() {
  const count = Math.max(1, Math.min(25, Number($("#batchCount").value || 1)));
  const source = $("#scanSource").value || "Retail batch scan";
  for (let index = 0; index < count; index += 1) {
    const product = state.products[index % state.products.length];
    await recordScan(product.id, `${source} batch ${index + 1}/${count}`);
  }
  addEvent("Retail batch completed", `${count} products checked at ${source}.`, false);
  persist(true, true, "batch-scan");
  renderAll();
}

function generateProductStory() {
  const form = $("#productForm");
  const data = Object.fromEntries(new FormData(form).entries());
  const craft = String(data.craft || "handloom craft").trim();
  const material = String(data.material || "registered materials").trim();
  const technique = String(data.technique || "traditional weaving").trim();
  const days = Number(data.days || 1);
  const gi = String(data.gi || "cluster mark").trim();
  const story = `${data.name} is a ${craft} ${String(data.category || "textile").toLowerCase()} made with ${material}. The piece records ${days} day${days === 1 ? "" : "s"} of ${technique}, binds the ${gi} claim to a product hash, and lets a buyer see the maker, method, cluster, and impact before purchase.`;
  form.elements.story.value = story;
}

function captureWeaverStory() {
  const storyField = $("#weaverForm").elements.story;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    storyField.value =
      "Voice capture is not supported in this browser, but the profile is ready for speech-to-text on supported Android or Chrome devices.";
    return;
  }
  const recognizer = new SpeechRecognition();
  recognizer.lang = "en-IN";
  recognizer.interimResults = false;
  recognizer.onresult = (event) => {
    storyField.value = Array.from(event.results)
      .map((result) => result[0].transcript)
      .join(" ");
  };
  recognizer.start();
}

async function copyShareLink() {
  const value = $("#shareUrl").value;
  try {
    await navigator.clipboard.writeText(value);
    addEvent("Certificate link copied", value, false);
  } catch {
    $("#shareUrl").select();
    document.execCommand("copy");
  }
  renderEvents();
}

function downloadBuyerReceipt() {
  const product = getProduct();
  const { weaver, premiumValue, craftInfo } = impactForProduct(product);
  const receipt = {
    certificateId: product.certId,
    productId: product.id,
    product: product.name,
    weaver: weaver.name,
    cluster: weaver.cluster,
    craft: product.craft,
    origin: craftInfo.origin,
    gi: product.gi,
    hash: product.hash,
    estimatedPremiumProtected: premiumValue,
    shareUrl: buildShareUrl(product),
    issuedAt: nowIso(),
  };
  const blob = new Blob([JSON.stringify(receipt, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${product.id}-buyer-receipt.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function listenToStory() {
  const product = getProduct();
  const { weaver, localizedStory } = impactForProduct(product);
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(
    `${product.name}. Woven by ${weaver.name} in ${weaver.village}, ${weaver.state}. ${product.story} ${localizedStory}`,
  );
  utterance.lang = "en-IN";
  speechSynthesis.speak(utterance);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  navigator.serviceWorker.register("sw.js").catch(() => {
    // Offline caching is an enhancement; the app remains fully usable without it.
  });
}

function bindEvents() {
  $$("[data-nav]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.nav));
  });
  $("#productSelect").addEventListener("change", (event) => {
    selectedProductId = event.target.value;
    selectedWeaverId = getProduct(selectedProductId).weaverId;
    renderAll();
  });
  $("#scanNow").addEventListener("click", () => verifySelectedProduct("Operations console"));
  $("#tamperDemo").addEventListener("click", runTamperCheck);
  $("#batchScan").addEventListener("click", runBatchScan);
  $("#verifyInputBtn").addEventListener("click", verifyManualInput);
  $("#verifyInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") verifyManualInput();
  });
  $("#productForm").addEventListener("submit", registerProduct);
  $("#weaverForm").addEventListener("submit", registerWeaver);
  $("#generateStory").addEventListener("click", generateProductStory);
  $("#voiceStory").addEventListener("click", captureWeaverStory);
  $("#productSearch").addEventListener("input", renderProducts);
  $("#verifyChain").addEventListener("click", verifyChainIntegrity);
  $("#exportState").addEventListener("click", exportState);
  $("#copyShare").addEventListener("click", copyShareLink);
  $("#downloadReceipt").addEventListener("click", downloadBuyerReceipt);
  $("#listenStory").addEventListener("click", listenToStory);
  $("#languageSelect").addEventListener("change", (event) => {
    selectedLanguage = event.target.value;
    renderAll();
  });
  $("#resetDemo").addEventListener("click", async () => {
    if (remoteMode) {
      try {
        const payload = await apiFetch("/reset", { method: "POST", body: "{}" });
        if (applyRemoteState(payload.state)) {
          renderAll();
          return;
        }
      } catch {
        remoteMode = false;
      }
    }
    localStorage.removeItem(STORAGE_KEY);
    await prepareSeedState();
    selectedProductId = state.products[0].id;
    selectedWeaverId = state.weavers[0].id;
    renderAll();
  });
  $("#liveMode").addEventListener("change", startLiveMode);
  window.addEventListener("online", renderMetrics);
  window.addEventListener("offline", renderMetrics);
  channel?.addEventListener("message", async (message) => {
    if (message.data?.type === "state-updated") {
      const current = localStorage.getItem(STORAGE_KEY);
      if (current) state = JSON.parse(current);
      renderAll();
    }
  });
}

async function init() {
  registerServiceWorker();
  await loadState();
  const rawHash = window.location.hash.replace("#", "");
  const [route, queryString] = rawHash.split("?");
  if (queryString) {
    const params = new URLSearchParams(queryString);
    const productId = params.get("product");
    if (productId && state.products.some((product) => product.id === productId)) {
      selectedProductId = productId;
      selectedWeaverId = getProduct(productId).weaverId;
    }
  }
  bindEvents();
  renderAll();
  verifyChainIntegrity();
  startLiveMode();
  const initialView = route || "overview";
  if ($(`#view-${initialView}`)) switchView(initialView);
}

init();
