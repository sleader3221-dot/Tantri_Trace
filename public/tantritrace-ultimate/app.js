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
      [
        "Yarn Bank",
        "2026-06-22",
        "Nalgonda yarn bank",
        "Cotton yarn lot recorded with supplier receipt.",
      ],
      [
        "Natural Dye",
        "2026-06-24",
        "Pochampally dye house",
        "Resist-tied yarn dyed in red and black.",
      ],
      [
        "Loom Weaving",
        "2026-07-03",
        "Lakshmi Devi home loom",
        "Warp and weft alignment checked every repeat.",
      ],
      [
        "GI Quality Check",
        "2026-07-07",
        "Cluster verification desk",
        "Handloom structure and GI claim verified.",
      ],
      [
        "Market Scan",
        "2026-07-12",
        "Hyderabad craft fair",
        "QR tag activated and buyer story published.",
      ],
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
      [
        "Silk Sourcing",
        "2026-05-15",
        "Varanasi silk exchange",
        "Katan silk and zari source details captured.",
      ],
      [
        "Naksha Translation",
        "2026-05-20",
        "Lallapura design room",
        "Floral jaal converted into loom-ready instructions.",
      ],
      [
        "Kadwa Weaving",
        "2026-06-12",
        "Ramesh Kumar loom",
        "Each motif woven separately to prove hand process.",
      ],
      [
        "Finishing",
        "2026-06-16",
        "Banaras finishing unit",
        "Zari inspection and fabric rolling completed.",
      ],
      [
        "Certificate Issue",
        "2026-06-18",
        "Weavers Service Centre",
        "GI and silk mark data attached to certificate.",
      ],
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
  [
    "Raw Material",
    "2026-06-01",
    "Registered cluster source",
    "Material lot and weaver allocation logged.",
  ],
  [
    "Design Setup",
    "2026-06-05",
    "Cluster design desk",
    "Motif, palette, and cultural note validated.",
  ],
  [
    "Loom Production",
    "2026-06-18",
    "Artisan home loom",
    "Handloom progress recorded with technique checkpoint.",
  ],
  [
    "Quality Proof",
    "2026-06-22",
    "Verification desk",
    "GI claim and final finish checked before QR activation.",
  ],
  [
    "Consumer Scan",
    "2026-07-01",
    "Retail or export buyer",
    "Buyer scan opens weaver story and certificate.",
  ],
];

const craftKnowledge = {
  "Pochampally Ikat": {
    origin: "Telangana",
    proof:
      "Yarn is tied and dyed before weaving, so the pattern alignment itself becomes evidence of hand process.",
    motif: "Grid geometry, Telia Rumal memory, resist-dyed precision.",
  },
  "Banarasi Silk": {
    origin: "Uttar Pradesh",
    proof:
      "Kadwa weaving builds motifs separately, making labor intensity visible in the certificate.",
    motif: "Floral jaal, zari brocade, heirloom wedding textiles.",
  },
  "Kanchipuram Silk": {
    origin: "Tamil Nadu",
    proof: "Korvai interlock joins border and body on the loom rather than by later stitching.",
    motif: "Temple borders, bold contrast, durable mulberry silk.",
  },
  "Chanderi Weave": {
    origin: "Madhya Pradesh",
    proof:
      "The light silk-cotton structure and zari bootis need cluster-level verification to protect subtle craft value.",
    motif: "Asharfi booti, translucent texture, understated shine.",
  },
  "Muga Silk": {
    origin: "Assam",
    proof:
      "Naturally golden silk is rare, so source-to-loom traceability protects both material and artisan value.",
    motif: "Golden sheen, Assamese forms, durable ceremonial wear.",
  },
  Patola: {
    origin: "Gujarat",
    proof:
      "Double ikat is dyed into warp and weft before weaving, making every alignment checkpoint valuable.",
    motif: "Navaratna geometry, reversible precision, high-value heritage.",
  },
};

const languageTone = {
  en: "This certificate protects the maker, the craft cluster, and the buyer with one verifiable story.",
  hi: "यह प्रमाणपत्र बुनकर, शिल्प क्लस्टर और खरीदार को एक सत्यापित कहानी से जोड़ता है।",
  ta: "இந்தச் சான்றிதழ் நெசவாளர், கைவினைக் குழுமம் மற்றும் வாங்குபவரை ஒரு சரிபார்க்கப்பட்ட கதையுடன் இணைக்கிறது.",
  te: "ఈ ధృవీకరణ పత్రం నేయగాడు, కళా క్లస్టర్ మరియు కొనుగోలుదారును ఒక ధృవీకరించిన కథతో కలుపుతుంది.",
  bn: "এই সার্টিফিকেট তাঁতি, কারুশিল্প ক্লাস্টার এবং ক্রেতাকে একটি যাচাই করা গল্পের সঙ্গে যুক্ত করে।",
};

const languageMeta = {
  en: { htmlLang: "en", locale: "en-IN", speech: "en-IN" },
  hi: { htmlLang: "hi", locale: "hi-IN", speech: "hi-IN" },
  ta: { htmlLang: "ta", locale: "ta-IN", speech: "ta-IN" },
  te: { htmlLang: "te", locale: "te-IN", speech: "te-IN" },
  bn: { htmlLang: "bn", locale: "bn-IN", speech: "bn-IN" },
};

const uiText = {
  en: {
    appSubtitle: "Authenticity system",
    navOverview: "Operations",
    navVerify: "Verify",
    navConsumer: "Consumer",
    navRegistry: "Registry",
    navWeavers: "Weavers",
    navLedger: "Ledger",
    navAnalytics: "Analytics",
    navImpact: "Impact",
    navIntegrations: "Integrations",
    network: "Network",
    connecting: "Connecting",
    detectingApi: "Detecting API sync layer",
    online: "Online",
    offline: "Offline",
    serverLive: "Server live",
    localRecords: "{count} records saved locally",
    syncedRecords: "{count} records synced through API + SSE",
    exportRegistry: "Export registry JSON",
    topTitle: "Handloom authenticity control center",
    storyLanguage: "Story language",
    liveScanStream: "Live scan stream",
    resetSample: "Reset sample data",
    verifiedProducts: "Verified products",
    certifiedTraceRecords: "Certified trace records",
    registeredWeavers: "Registered weavers",
    profilesLinked: "Profiles linked to products",
    totalScans: "Total scans",
    realtimeEvents: "Real-time verification events",
    chainIntegrity: "Chain integrity",
    ledgerHashVerification: "Ledger hash verification",
    valid: "Valid",
    invalid: "Invalid",
    verificationStation: "Verification station",
    scanTrace: "Scan a product trace",
    ready: "Ready",
    product: "Product",
    verifySelected: "Verify selected product",
    tamperCheck: "Run tamper check",
    consumerStoryPage: "Consumer story page",
    productStory: "Product story",
    liveActivity: "Live activity",
    eventFeed: "Event feed",
    events: "{count} events",
    manualVerification: "Manual verification",
    verifyBy: "Verify by product ID, certificate ID, or hash",
    verifyPlaceholder: "Paste product ID, certificate ID, or trace hash",
    verify: "Verify",
    fraudQueue: "Fraud risk queue",
    suspiciousScans: "Suspicious scans",
    retailerStation: "Retailer station",
    batchRisk: "Batch scan and risk scoring",
    riskReady: "Risk model ready",
    scanLocation: "Scan location",
    batchSize: "Batch size",
    runBatch: "Run batch scan",
    productJourney: "Product journey",
    supplyTrace: "Supply chain trace",
    publicCertificate: "Public certificate",
    verifiedStory: "Verified handloom story",
    listenStory: "Listen story",
    shareUrl: "Shareable certificate URL",
    copyLink: "Copy link",
    downloadReceipt: "Download buyer receipt",
    weaveInspection: "Weave inspection",
    patternMicroscope: "Pattern microscope",
    buyerImpact: "Buyer impact",
    whatScanProves: "What the scan proves",
    registerProduct: "Register product",
    createAuthRecord: "Create a new authenticity record",
    productName: "Product name",
    weaver: "Weaver",
    craft: "Craft",
    category: "Category",
    materials: "Materials",
    technique: "Technique",
    giMark: "GI / certification mark",
    daysToMake: "Days to make",
    basePrice: "Base price",
    premiumPercent: "Verified premium %",
    generateStory: "Generate stronger product story",
    registerHash: "Register and hash product",
    registry: "Registry",
    certifiedProducts: "Certified products",
    searchProducts: "Search products",
    registerWeaver: "Register weaver",
    createWeaverProfile: "Create a weaver profile",
    name: "Name",
    role: "Role",
    village: "Village",
    state: "State",
    cluster: "Cluster",
    years: "Experience years",
    generations: "Family generations",
    story: "Story",
    voiceStory: "Voice capture story",
    saveWeaver: "Save weaver profile",
    weaverPortfolio: "Weaver portfolio",
    profilesIncome: "Profiles and income lift",
    ledgerIntegrity: "Ledger integrity",
    tamperChain: "Tamper-evident chain",
    ledgerDescription:
      "Each product registration and scan creates a block containing the previous block hash. The app recalculates hashes to detect tampering.",
    reverifyLedger: "Re-verify ledger integrity",
    exportPayload: "Export payload",
    apiReady: "Government/API-ready record",
    recentBlocks: "Recent blocks",
    ledgerBlocks: "Ledger blocks",
    realtimeScans: "Real-time scans",
    verificationTrend: "Verification trend",
    craftCoverage: "Craft coverage",
    productsByCraft: "Products by craft",
    incomeImpact: "Income impact",
    premiumByCluster: "Premium by cluster",
    anomalyModel: "Anomaly model",
    riskDistribution: "Current risk distribution",
    clusterIntelligence: "Cluster intelligence",
    proofCreatesValue: "Where proof creates value",
    livelihoodSignal: "Livelihood signal",
    verifiedIncomeLift: "Verified income lift",
    scaleReadiness: "Scale readiness",
    submissionStrength: "Submission strength",
    integrationReadiness: "Integration readiness",
    capabilities: "System capabilities",
    endpointBlueprint: "Endpoint blueprint",
    apiContract: "Production API contract",
    authenticRecord: "Authentic handloom record",
    linkedCertified: "{product} is linked to {weaver} and certified under {gi}.",
    certificate: "Certificate",
    traceHash: "Trace hash",
    scans: "Scans",
    digitalCertificate: "Digital certificate",
    wovenBy: "Woven by {weaver} in {place}.",
    block: "Block",
    shaTrace: "SHA-256 trace",
    authentic: "Authentic",
    mismatch: "Mismatch",
    verifying: "Verifying",
    noValue: "No value entered",
    pasteProof: "Paste a product ID, certificate ID, or trace hash.",
    authenticProduct: "Authentic product",
    notVerified: "Not verified",
    registeredWithCertificate: "{product} is registered with certificate {certificate}.",
    noMatchingProof: "No matching product, certificate, or hash.",
    ledgerVerified: "Ledger verified",
    ledgerVerifiedBody: "{count} blocks recalculated successfully.",
    ledgerMismatch: "Ledger mismatch",
    ledgerMismatchBody: "At least one block hash or previous-hash link is invalid.",
    publicStamp: "Authentic",
    maker: "Maker",
    origin: "Origin",
    namedMakerImpact: "Named maker stays attached to resale, retail, and export proof.",
    premiumProtected: "Estimated authenticity premium protected for this product.",
    laborVisible: "Labor time is visible to buyers instead of hidden behind anonymous retail.",
    giBound: "GI or certification claim is bound to item-level evidence.",
    noSuspicious: "No suspicious scans",
    fraudClear: "Fraud queue is clear.",
    counterfeitRisk: "Counterfeit risk score",
    certificateObserved: "Certificate under observation",
    totalScanSignals: "Total scan signals",
    modelExplanation: "Model explanation",
    valueProtected: "Estimated value protected by verified storytelling",
    visibleLabor: "Visible artisan labor attached to certificates",
    scanTouchpoints: "Consumer and retail scan touchpoints",
    prototypeDepth: "Prototype depth",
    prototypeDepthBody:
      "End-to-end registry, verification, ledger, analytics, and API are working.",
    scalability: "Scalability",
    scalabilityBody: "Cluster-neutral data model works for handloom and adjacent craft sectors.",
    judgeClarity: "Judge clarity",
    judgeClarityBody:
      "One scan shows authenticity, weaver story, fraud protection, and livelihood impact.",
    products: "products",
    projected: "projected",
    premium: "premium",
    risk: "risk",
    hash: "hash",
    previous: "prev",
    generatedStory:
      "{name} is a {craft} {category} made with {material}. The piece records {days} days of {technique}, binds the {gi} claim to a product hash, and lets a buyer see the maker, method, cluster, and impact before purchase.",
    voiceUnsupported:
      "Voice capture is not supported in this browser, but the profile is ready for speech-to-text on supported Android or Chrome devices.",
  },
};

uiText.hi = {
  ...uiText.en,
  appSubtitle: "प्रामाणिकता प्रणाली",
  navOverview: "संचालन",
  navVerify: "सत्यापन",
  navConsumer: "उपभोक्ता",
  navRegistry: "रजिस्ट्री",
  navWeavers: "बुनकर",
  navLedger: "लेजर",
  navAnalytics: "विश्लेषण",
  navImpact: "प्रभाव",
  navIntegrations: "इंटीग्रेशन",
  network: "नेटवर्क",
  connecting: "जुड़ रहा है",
  detectingApi: "API सिंक लेयर खोजी जा रही है",
  online: "ऑनलाइन",
  offline: "ऑफलाइन",
  serverLive: "सर्वर लाइव",
  localRecords: "{count} रिकॉर्ड स्थानीय रूप से सहेजे गए",
  syncedRecords: "{count} रिकॉर्ड API + SSE से सिंक हुए",
  exportRegistry: "रजिस्ट्री JSON निर्यात करें",
  topTitle: "हैंडलूम प्रामाणिकता नियंत्रण केंद्र",
  storyLanguage: "कहानी की भाषा",
  liveScanStream: "लाइव स्कैन स्ट्रीम",
  resetSample: "नमूना डेटा रीसेट करें",
  verifiedProducts: "सत्यापित उत्पाद",
  certifiedTraceRecords: "प्रमाणित ट्रेस रिकॉर्ड",
  registeredWeavers: "पंजीकृत बुनकर",
  profilesLinked: "उत्पादों से जुड़े प्रोफाइल",
  totalScans: "कुल स्कैन",
  realtimeEvents: "रीयल-टाइम सत्यापन घटनाएं",
  chainIntegrity: "चेन अखंडता",
  ledgerHashVerification: "लेजर हैश सत्यापन",
  valid: "वैध",
  invalid: "अवैध",
  verificationStation: "सत्यापन स्टेशन",
  scanTrace: "उत्पाद ट्रेस स्कैन करें",
  ready: "तैयार",
  product: "उत्पाद",
  verifySelected: "चुने गए उत्पाद को सत्यापित करें",
  tamperCheck: "टैंपर जांच चलाएं",
  consumerStoryPage: "उपभोक्ता कहानी पेज",
  productStory: "उत्पाद कहानी",
  liveActivity: "लाइव गतिविधि",
  eventFeed: "घटना फ़ीड",
  events: "{count} घटनाएं",
  manualVerification: "मैनुअल सत्यापन",
  verifyBy: "उत्पाद ID, प्रमाणपत्र ID या हैश से सत्यापित करें",
  verifyPlaceholder: "उत्पाद ID, प्रमाणपत्र ID या ट्रेस हैश पेस्ट करें",
  verify: "सत्यापित करें",
  fraudQueue: "धोखाधड़ी जोखिम कतार",
  suspiciousScans: "संदिग्ध स्कैन",
  retailerStation: "रिटेलर स्टेशन",
  batchRisk: "बैच स्कैन और जोखिम स्कोरिंग",
  riskReady: "जोखिम मॉडल तैयार",
  scanLocation: "स्कैन स्थान",
  batchSize: "बैच आकार",
  runBatch: "बैच स्कैन चलाएं",
  productJourney: "उत्पाद यात्रा",
  supplyTrace: "सप्लाई चेन ट्रेस",
  publicCertificate: "सार्वजनिक प्रमाणपत्र",
  verifiedStory: "सत्यापित हैंडलूम कहानी",
  listenStory: "कहानी सुनें",
  copyLink: "लिंक कॉपी करें",
  downloadReceipt: "खरीदार रसीद डाउनलोड करें",
  weaveInspection: "बुनाई निरीक्षण",
  patternMicroscope: "पैटर्न माइक्रोस्कोप",
  buyerImpact: "खरीदार प्रभाव",
  whatScanProves: "स्कैन क्या प्रमाणित करता है",
  registerProduct: "उत्पाद पंजीकृत करें",
  createAuthRecord: "नया प्रामाणिकता रिकॉर्ड बनाएं",
  productName: "उत्पाद नाम",
  weaver: "बुनकर",
  craft: "शिल्प",
  category: "श्रेणी",
  materials: "सामग्री",
  technique: "तकनीक",
  giMark: "GI / प्रमाणन चिह्न",
  daysToMake: "बनाने में दिन",
  basePrice: "मूल कीमत",
  premiumPercent: "सत्यापित प्रीमियम %",
  generateStory: "मजबूत उत्पाद कहानी बनाएं",
  registerHash: "उत्पाद पंजीकृत और हैश करें",
  registry: "रजिस्ट्री",
  certifiedProducts: "प्रमाणित उत्पाद",
  searchProducts: "उत्पाद खोजें",
  registerWeaver: "बुनकर पंजीकृत करें",
  createWeaverProfile: "बुनकर प्रोफाइल बनाएं",
  name: "नाम",
  role: "भूमिका",
  village: "गांव",
  state: "राज्य",
  cluster: "क्लस्टर",
  years: "अनुभव वर्ष",
  generations: "परिवार की पीढ़ियां",
  story: "कहानी",
  voiceStory: "आवाज से कहानी कैप्चर करें",
  saveWeaver: "बुनकर प्रोफाइल सहेजें",
  weaverPortfolio: "बुनकर पोर्टफोलियो",
  profilesIncome: "प्रोफाइल और आय वृद्धि",
  ledgerIntegrity: "लेजर अखंडता",
  tamperChain: "टैंपर-एविडेंट चेन",
  ledgerDescription:
    "हर उत्पाद पंजीकरण और स्कैन पिछले ब्लॉक हैश वाला ब्लॉक बनाता है। ऐप छेड़छाड़ पकड़ने के लिए हैश दोबारा गणना करता है।",
  reverifyLedger: "लेजर अखंडता दोबारा सत्यापित करें",
  exportPayload: "निर्यात पेलोड",
  apiReady: "सरकार/API-तैयार रिकॉर्ड",
  recentBlocks: "हाल के ब्लॉक",
  ledgerBlocks: "लेजर ब्लॉक",
  realtimeScans: "रीयल-टाइम स्कैन",
  verificationTrend: "सत्यापन प्रवृत्ति",
  craftCoverage: "शिल्प कवरेज",
  productsByCraft: "शिल्प के अनुसार उत्पाद",
  incomeImpact: "आय प्रभाव",
  premiumByCluster: "क्लस्टर के अनुसार प्रीमियम",
  anomalyModel: "अनोमली मॉडल",
  riskDistribution: "वर्तमान जोखिम वितरण",
  clusterIntelligence: "क्लस्टर इंटेलिजेंस",
  proofCreatesValue: "जहां प्रमाण मूल्य बनाता है",
  livelihoodSignal: "आजीविका संकेत",
  verifiedIncomeLift: "सत्यापित आय वृद्धि",
  scaleReadiness: "स्केल तैयारी",
  submissionStrength: "सबमिशन मजबूती",
  integrationReadiness: "इंटीग्रेशन तैयारी",
  capabilities: "सिस्टम क्षमताएं",
  endpointBlueprint: "एंडपॉइंट ब्लूप्रिंट",
  apiContract: "प्रोडक्शन API कॉन्ट्रैक्ट",
  authenticRecord: "प्रामाणिक हैंडलूम रिकॉर्ड",
  linkedCertified: "{product} {weaver} से जुड़ा है और {gi} के अंतर्गत प्रमाणित है।",
  certificate: "प्रमाणपत्र",
  traceHash: "ट्रेस हैश",
  scans: "स्कैन",
  digitalCertificate: "डिजिटल प्रमाणपत्र",
  wovenBy: "{place} में {weaver} द्वारा बुना गया।",
  authentic: "प्रामाणिक",
  mismatch: "मेल नहीं",
  verifying: "सत्यापित हो रहा है",
  noValue: "कोई मान दर्ज नहीं",
  pasteProof: "उत्पाद ID, प्रमाणपत्र ID या ट्रेस हैश पेस्ट करें।",
  authenticProduct: "प्रामाणिक उत्पाद",
  notVerified: "सत्यापित नहीं",
  registeredWithCertificate: "{product} प्रमाणपत्र {certificate} के साथ पंजीकृत है।",
  noMatchingProof: "कोई उत्पाद, प्रमाणपत्र या हैश मेल नहीं मिला।",
  ledgerVerified: "लेजर सत्यापित",
  ledgerVerifiedBody: "{count} ब्लॉक सफलतापूर्वक दोबारा गणना हुए।",
  ledgerMismatch: "लेजर मेल नहीं खाता",
  ledgerMismatchBody: "कम से कम एक ब्लॉक हैश या पिछला-हैश लिंक अमान्य है।",
  publicStamp: "प्रामाणिक",
  maker: "निर्माता",
  origin: "उत्पत्ति",
  noSuspicious: "कोई संदिग्ध स्कैन नहीं",
  fraudClear: "धोखाधड़ी कतार साफ है।",
  counterfeitRisk: "नकली उत्पाद जोखिम स्कोर",
  certificateObserved: "निगरानी में प्रमाणपत्र",
  totalScanSignals: "कुल स्कैन संकेत",
  modelExplanation: "मॉडल स्पष्टीकरण",
  products: "उत्पाद",
  projected: "अनुमानित",
  premium: "प्रीमियम",
  risk: "जोखिम",
  hash: "हैश",
  previous: "पिछला",
  generatedStory:
    "{name} {material} से बना {craft} {category} है। यह {technique} के {days} दिनों को दर्ज करता है, {gi} दावे को उत्पाद हैश से जोड़ता है, और खरीदार को निर्माता, तरीका, क्लस्टर और प्रभाव दिखाता है।",
  voiceUnsupported:
    "यह ब्राउज़र वॉइस कैप्चर का समर्थन नहीं करता, लेकिन प्रोफाइल समर्थित Android या Chrome उपकरणों पर speech-to-text के लिए तैयार है।",
};

uiText.ta = {
  ...uiText.en,
  appSubtitle: "உண்மைத்தன்மை அமைப்பு",
  navOverview: "செயல்பாடுகள்",
  navVerify: "சரிபார்ப்பு",
  navConsumer: "நுகர்வோர்",
  navRegistry: "பதிவு",
  navWeavers: "நெசவாளர்கள்",
  navLedger: "லெட்ஜர்",
  navAnalytics: "பகுப்பாய்வு",
  navImpact: "தாக்கம்",
  navIntegrations: "இணைப்புகள்",
  network: "நெட்வொர்க்",
  connecting: "இணைக்கிறது",
  detectingApi: "API ஒத்திசைவு அடுக்கு கண்டறியப்படுகிறது",
  online: "ஆன்லைன்",
  offline: "ஆஃப்லைன்",
  serverLive: "சர்வர் நேரலை",
  localRecords: "{count} பதிவுகள் உள்ளூரில் சேமிக்கப்பட்டன",
  syncedRecords: "{count} பதிவுகள் API + SSE மூலம் ஒத்திசைக்கப்பட்டன",
  exportRegistry: "பதிவு JSON ஏற்றுமதி",
  topTitle: "கைத்தறி உண்மைத்தன்மை கட்டுப்பாட்டு மையம்",
  storyLanguage: "கதையின் மொழி",
  liveScanStream: "நேரலை ஸ்கேன் ஓட்டம்",
  resetSample: "மாதிரி தரவை மீட்டமை",
  verifiedProducts: "சரிபார்க்கப்பட்ட தயாரிப்புகள்",
  certifiedTraceRecords: "சான்றளிக்கப்பட்ட தடப் பதிவுகள்",
  registeredWeavers: "பதிவுசெய்யப்பட்ட நெசவாளர்கள்",
  profilesLinked: "தயாரிப்புகளுடன் இணைந்த சுயவிவரங்கள்",
  totalScans: "மொத்த ஸ்கேன்கள்",
  realtimeEvents: "நேரடி சரிபார்ப்பு நிகழ்வுகள்",
  chainIntegrity: "சங்கிலி ஒருமைப்பாடு",
  ledgerHashVerification: "லெட்ஜர் ஹாஷ் சரிபார்ப்பு",
  valid: "செல்லுபடியாகும்",
  invalid: "செல்லுபடியாகாது",
  verificationStation: "சரிபார்ப்பு நிலையம்",
  scanTrace: "தயாரிப்பு தடத்தை ஸ்கேன் செய்",
  ready: "தயார்",
  product: "தயாரிப்பு",
  verifySelected: "தேர்ந்த தயாரிப்பை சரிபார்",
  tamperCheck: "மாற்றச் சோதனை நடத்து",
  consumerStoryPage: "நுகர்வோர் கதை பக்கம்",
  productStory: "தயாரிப்பு கதை",
  liveActivity: "நேரலை செயல்பாடு",
  eventFeed: "நிகழ்வு ஓட்டம்",
  events: "{count} நிகழ்வுகள்",
  manualVerification: "கைமுறை சரிபார்ப்பு",
  verifyBy: "தயாரிப்பு ID, சான்று ID அல்லது ஹாஷ் மூலம் சரிபார்",
  verifyPlaceholder: "தயாரிப்பு ID, சான்று ID அல்லது தட ஹாஷ் ஒட்டு",
  verify: "சரிபார்",
  fraudQueue: "மோசடி அபாய வரிசை",
  suspiciousScans: "சந்தேக ஸ்கேன்கள்",
  retailerStation: "சில்லறை நிலையம்",
  batchRisk: "தொகுதி ஸ்கேன் மற்றும் அபாய மதிப்பீடு",
  riskReady: "அபாய மாடல் தயார்",
  scanLocation: "ஸ்கேன் இடம்",
  batchSize: "தொகுதி அளவு",
  runBatch: "தொகுதி ஸ்கேன் நடத்து",
  productJourney: "தயாரிப்பு பயணம்",
  supplyTrace: "விநியோகச் சங்கிலி தடம்",
  publicCertificate: "பொது சான்றிதழ்",
  verifiedStory: "சரிபார்க்கப்பட்ட கைத்தறி கதை",
  listenStory: "கதையை கேள்",
  copyLink: "இணைப்பை நகலெடு",
  downloadReceipt: "வாங்குபவர் ரசீது பதிவிறக்கு",
  weaveInspection: "நெய்தல் ஆய்வு",
  patternMicroscope: "வடிவ மைக்ரோஸ்கோப்",
  buyerImpact: "வாங்குபவர் தாக்கம்",
  whatScanProves: "ஸ்கேன் நிரூபிப்பது",
  registerProduct: "தயாரிப்பு பதிவு",
  createAuthRecord: "புதிய உண்மைத்தன்மை பதிவு உருவாக்கு",
  productName: "தயாரிப்பு பெயர்",
  weaver: "நெசவாளர்",
  craft: "கைவினை",
  category: "வகை",
  materials: "பொருட்கள்",
  technique: "தொழில்நுட்பம்",
  giMark: "GI / சான்று குறி",
  daysToMake: "உருவாக்க நாட்கள்",
  basePrice: "அடிப்படை விலை",
  premiumPercent: "சரிபார்க்கப்பட்ட பிரீமியம் %",
  generateStory: "வலுவான தயாரிப்பு கதை உருவாக்கு",
  registerHash: "தயாரிப்பை பதிவு செய்து ஹாஷ் செய்",
  registry: "பதிவு",
  certifiedProducts: "சான்றளிக்கப்பட்ட தயாரிப்புகள்",
  searchProducts: "தயாரிப்புகளை தேடு",
  registerWeaver: "நெசவாளர் பதிவு",
  createWeaverProfile: "நெசவாளர் சுயவிவரம் உருவாக்கு",
  name: "பெயர்",
  role: "பங்கு",
  village: "கிராமம்",
  state: "மாநிலம்",
  cluster: "கிளஸ்டர்",
  years: "அனுபவ ஆண்டுகள்",
  generations: "குடும்ப தலைமுறைகள்",
  story: "கதை",
  voiceStory: "குரல் மூலம் கதை பதிவு",
  saveWeaver: "நெசவாளர் சுயவிவரம் சேமி",
  weaverPortfolio: "நெசவாளர் தொகுப்பு",
  profilesIncome: "சுயவிவரங்கள் மற்றும் வருமான உயர்வு",
  ledgerIntegrity: "லெட்ஜர் ஒருமைப்பாடு",
  tamperChain: "மாற்றம் கண்டறியும் சங்கிலி",
  ledgerDescription:
    "ஒவ்வொரு தயாரிப்பு பதிவு மற்றும் ஸ்கேனும் முந்தைய பிளாக் ஹாஷுடன் புதிய பிளாக்கை உருவாக்குகிறது. மாற்றத்தை கண்டறிய ஆப் ஹாஷ்களை மீண்டும் கணக்கிடுகிறது.",
  reverifyLedger: "லெட்ஜரை மீண்டும் சரிபார்",
  exportPayload: "பேலோடு ஏற்றுமதி",
  apiReady: "அரசு/API தயாரான பதிவு",
  recentBlocks: "சமீபத்திய பிளாக்குகள்",
  ledgerBlocks: "லெட்ஜர் பிளாக்குகள்",
  realtimeScans: "நேரடி ஸ்கேன்கள்",
  verificationTrend: "சரிபார்ப்பு போக்கு",
  craftCoverage: "கைவினை கவரேஜ்",
  productsByCraft: "கைவினை அடிப்படையிலான தயாரிப்புகள்",
  incomeImpact: "வருமான தாக்கம்",
  premiumByCluster: "கிளஸ்டர் பிரீமியம்",
  anomalyModel: "அசாதாரண மாடல்",
  riskDistribution: "தற்போதைய அபாய விநியோகம்",
  clusterIntelligence: "கிளஸ்டர் நுண்ணறிவு",
  proofCreatesValue: "சான்று மதிப்பு உருவாக்கும் இடம்",
  livelihoodSignal: "வாழ்வாதார சிக்னல்",
  verifiedIncomeLift: "சரிபார்க்கப்பட்ட வருமான உயர்வு",
  scaleReadiness: "அளவுபடுத்தல் தயார்",
  submissionStrength: "சமர்ப்பிப்பு வலிமை",
  integrationReadiness: "இணைப்பு தயார்பு",
  capabilities: "அமைப்பு திறன்கள்",
  endpointBlueprint: "எண்ட்பாயிண்ட் வரைவு",
  apiContract: "தயாரிப்பு API ஒப்பந்தம்",
  authenticRecord: "உண்மையான கைத்தறி பதிவு",
  linkedCertified: "{product} {weaver} உடன் இணைக்கப்பட்டு {gi} கீழ் சான்றளிக்கப்பட்டுள்ளது.",
  certificate: "சான்றிதழ்",
  traceHash: "தட ஹாஷ்",
  scans: "ஸ்கேன்கள்",
  digitalCertificate: "டிஜிட்டல் சான்றிதழ்",
  wovenBy: "{place} இல் {weaver} நெய்தது.",
  authentic: "உண்மையானது",
  mismatch: "பொருந்தவில்லை",
  verifying: "சரிபார்க்கிறது",
  noValue: "மதிப்பு இல்லை",
  pasteProof: "தயாரிப்பு ID, சான்று ID அல்லது தட ஹாஷ் ஒட்டு.",
  authenticProduct: "உண்மையான தயாரிப்பு",
  notVerified: "சரிபார்க்கப்படவில்லை",
  registeredWithCertificate: "{product} {certificate} சான்றுடன் பதிவு செய்யப்பட்டுள்ளது.",
  noMatchingProof: "பொருந்தும் தயாரிப்பு, சான்று அல்லது ஹாஷ் இல்லை.",
  ledgerVerified: "லெட்ஜர் சரிபார்க்கப்பட்டது",
  ledgerVerifiedBody: "{count} பிளாக்குகள் வெற்றிகரமாக மீண்டும் கணக்கிடப்பட்டன.",
  ledgerMismatch: "லெட்ஜர் பொருந்தவில்லை",
  ledgerMismatchBody: "குறைந்தது ஒரு பிளாக் ஹாஷ் அல்லது முந்தைய-ஹாஷ் இணைப்பு செல்லுபடியாகாது.",
  publicStamp: "உண்மையானது",
  maker: "உருவாக்குநர்",
  origin: "மூலம்",
  noSuspicious: "சந்தேக ஸ்கேன்கள் இல்லை",
  fraudClear: "மோசடி வரிசை காலியாக உள்ளது.",
  counterfeitRisk: "போலி அபாய மதிப்பெண்",
  certificateObserved: "கண்காணிப்பில் உள்ள சான்றிதழ்",
  totalScanSignals: "மொத்த ஸ்கேன் சிக்னல்கள்",
  modelExplanation: "மாடல் விளக்கம்",
  products: "தயாரிப்புகள்",
  projected: "மதிப்பிடப்பட்டது",
  premium: "பிரீமியம்",
  risk: "அபாயம்",
  hash: "ஹாஷ்",
  previous: "முந்தையது",
};

uiText.te = {
  ...uiText.en,
  appSubtitle: "ప్రామాణికత వ్యవస్థ",
  navOverview: "ఆపరేషన్స్",
  navVerify: "ధృవీకరణ",
  navConsumer: "వినియోగదారు",
  navRegistry: "రిజిస్ట్రీ",
  navWeavers: "నేయగాళ్లు",
  navLedger: "లెడ్జర్",
  navAnalytics: "విశ్లేషణ",
  navImpact: "ప్రభావం",
  navIntegrations: "ఇంటిగ్రేషన్లు",
  topTitle: "చేనేత ప్రామాణికత నియంత్రణ కేంద్రం",
  storyLanguage: "కథ భాష",
  liveScanStream: "లైవ్ స్కాన్ స్ట్రీమ్",
  resetSample: "నమూనా డేటాను రీసెట్ చేయి",
  verifiedProducts: "ధృవీకరించిన ఉత్పత్తులు",
  registeredWeavers: "నమోదైన నేయగాళ్లు",
  totalScans: "మొత్తం స్కాన్లు",
  chainIntegrity: "చైన్ సమగ్రత",
  verificationStation: "ధృవీకరణ కేంద్రం",
  scanTrace: "ఉత్పత్తి ట్రేస్ స్కాన్ చేయి",
  ready: "సిద్ధం",
  product: "ఉత్పత్తి",
  verifySelected: "ఎంచుకున్న ఉత్పత్తిని ధృవీకరించు",
  tamperCheck: "టాంపర్ చెక్ నడుపు",
  productStory: "ఉత్పత్తి కథ",
  verify: "ధృవీకరించు",
  fraudQueue: "మోసం ప్రమాద క్యూలు",
  suspiciousScans: "సందేహాస్పద స్కాన్లు",
  publicCertificate: "పబ్లిక్ సర్టిఫికేట్",
  verifiedStory: "ధృవీకరించిన చేనేత కథ",
  listenStory: "కథ విను",
  copyLink: "లింక్ కాపీ చేయి",
  downloadReceipt: "కొనుగోలుదారు రసీదు డౌన్‌లోడ్",
  buyerImpact: "కొనుగోలుదారు ప్రభావం",
  registerProduct: "ఉత్పత్తి నమోదు",
  createAuthRecord: "కొత్త ప్రామాణికత రికార్డు సృష్టించు",
  productName: "ఉత్పత్తి పేరు",
  weaver: "నేయగాడు",
  craft: "కళ",
  category: "వర్గం",
  materials: "పదార్థాలు",
  technique: "సాంకేతికత",
  registry: "రిజిస్ట్రీ",
  certifiedProducts: "సర్టిఫైడ్ ఉత్పత్తులు",
  registerWeaver: "నేయగాడిని నమోదు చేయి",
  createWeaverProfile: "నేయగాడి ప్రొఫైల్ సృష్టించు",
  name: "పేరు",
  role: "పాత్ర",
  village: "గ్రామం",
  state: "రాష్ట్రం",
  story: "కథ",
  saveWeaver: "నేయగాడి ప్రొఫైల్ సేవ్ చేయి",
  ledgerIntegrity: "లెడ్జర్ సమగ్రత",
  authenticRecord: "ప్రామాణిక చేనేత రికార్డు",
  certificate: "సర్టిఫికేట్",
  traceHash: "ట్రేస్ హాష్",
  scans: "స్కాన్లు",
  digitalCertificate: "డిజిటల్ సర్టిఫికేట్",
  authentic: "ప్రామాణికం",
  mismatch: "సరిపోలలేదు",
  verifying: "ధృవీకరిస్తోంది",
  authenticProduct: "ప్రామాణిక ఉత్పత్తి",
  notVerified: "ధృవీకరించబడలేదు",
  publicStamp: "ప్రామాణికం",
  maker: "తయారీదారు",
  origin: "మూలం",
  products: "ఉత్పత్తులు",
  projected: "అంచనా",
  premium: "ప్రీమియం",
  risk: "ప్రమాదం",
};

uiText.bn = {
  ...uiText.en,
  appSubtitle: "প্রামাণিকতা ব্যবস্থা",
  navOverview: "অপারেশন",
  navVerify: "যাচাই",
  navConsumer: "ক্রেতা",
  navRegistry: "রেজিস্ট্রি",
  navWeavers: "তাঁতি",
  navLedger: "লেজার",
  navAnalytics: "বিশ্লেষণ",
  navImpact: "প্রভাব",
  navIntegrations: "ইন্টিগ্রেশন",
  topTitle: "হ্যান্ডলুম প্রামাণিকতা নিয়ন্ত্রণ কেন্দ্র",
  storyLanguage: "গল্পের ভাষা",
  liveScanStream: "লাইভ স্ক্যান স্ট্রিম",
  resetSample: "নমুনা ডেটা রিসেট করুন",
  verifiedProducts: "যাচাই করা পণ্য",
  registeredWeavers: "নিবন্ধিত তাঁতি",
  totalScans: "মোট স্ক্যান",
  chainIntegrity: "চেইন অখণ্ডতা",
  verificationStation: "যাচাই কেন্দ্র",
  scanTrace: "পণ্যের ট্রেস স্ক্যান করুন",
  ready: "প্রস্তুত",
  product: "পণ্য",
  verifySelected: "নির্বাচিত পণ্য যাচাই করুন",
  tamperCheck: "ট্যাম্পার পরীক্ষা চালান",
  productStory: "পণ্যের গল্প",
  verify: "যাচাই",
  fraudQueue: "জালিয়াতি ঝুঁকি সারি",
  suspiciousScans: "সন্দেহজনক স্ক্যান",
  publicCertificate: "পাবলিক সার্টিফিকেট",
  verifiedStory: "যাচাই করা হ্যান্ডলুম গল্প",
  listenStory: "গল্প শুনুন",
  copyLink: "লিঙ্ক কপি করুন",
  downloadReceipt: "ক্রেতার রসিদ ডাউনলোড",
  buyerImpact: "ক্রেতার প্রভাব",
  registerProduct: "পণ্য নিবন্ধন",
  createAuthRecord: "নতুন প্রামাণিকতা রেকর্ড তৈরি করুন",
  productName: "পণ্যের নাম",
  weaver: "তাঁতি",
  craft: "কারুশিল্প",
  category: "বিভাগ",
  materials: "উপকরণ",
  technique: "প্রযুক্তি",
  registry: "রেজিস্ট্রি",
  certifiedProducts: "সার্টিফায়েড পণ্য",
  registerWeaver: "তাঁতি নিবন্ধন",
  createWeaverProfile: "তাঁতির প্রোফাইল তৈরি করুন",
  name: "নাম",
  role: "ভূমিকা",
  village: "গ্রাম",
  state: "রাজ্য",
  story: "গল্প",
  saveWeaver: "তাঁতির প্রোফাইল সংরক্ষণ",
  ledgerIntegrity: "লেজার অখণ্ডতা",
  authenticRecord: "প্রামাণিক হ্যান্ডলুম রেকর্ড",
  certificate: "সার্টিফিকেট",
  traceHash: "ট্রেস হ্যাশ",
  scans: "স্ক্যান",
  digitalCertificate: "ডিজিটাল সার্টিফিকেট",
  authentic: "প্রামাণিক",
  mismatch: "মেলেনি",
  verifying: "যাচাই হচ্ছে",
  authenticProduct: "প্রামাণিক পণ্য",
  notVerified: "যাচাই হয়নি",
  publicStamp: "প্রামাণিক",
  maker: "নির্মাতা",
  origin: "উৎপত্তি",
  products: "পণ্য",
  projected: "আনুমানিক",
  premium: "প্রিমিয়াম",
  risk: "ঝুঁকি",
};

Object.assign(uiText.hi, {
  block: "ब्लॉक",
  shaTrace: "SHA-256 ट्रेस",
  namedMakerImpact: "निर्माता का नाम पुनर्विक्रय, रिटेल और निर्यात प्रमाण से जुड़ा रहता है।",
  premiumProtected: "इस उत्पाद के लिए अनुमानित प्रामाणिकता प्रीमियम सुरक्षित है।",
  laborVisible: "कारीगर का समय गुमनाम बिक्री में छिपने के बजाय खरीदार को दिखता है।",
  giBound: "GI या प्रमाणन दावा आइटम-स्तर के प्रमाण से जुड़ा है।",
  valueProtected: "सत्यापित कहानी से सुरक्षित अनुमानित मूल्य",
  visibleLabor: "प्रमाणपत्रों से जुड़ा दिखाई देने वाला कारीगर श्रम",
  scanTouchpoints: "उपभोक्ता और रिटेल स्कैन टचपॉइंट",
  prototypeDepth: "प्रोटोटाइप गहराई",
  prototypeDepthBody: "एंड-टू-एंड रजिस्ट्री, सत्यापन, लेजर, एनालिटिक्स और API काम कर रहे हैं।",
  scalability: "स्केलेबिलिटी",
  scalabilityBody: "क्लस्टर-न्यूट्रल डेटा मॉडल हैंडलूम और संबंधित शिल्प क्षेत्रों में काम करता है।",
  judgeClarity: "जज स्पष्टता",
  judgeClarityBody:
    "एक स्कैन प्रामाणिकता, बुनकर कहानी, धोखाधड़ी सुरक्षा और आजीविका प्रभाव दिखाता है।",
});

Object.assign(uiText.ta, {
  block: "பிளாக்",
  shaTrace: "SHA-256 தடம்",
  namedMakerImpact:
    "உருவாக்குநரின் பெயர் மறுவிற்பனை, சில்லறை மற்றும் ஏற்றுமதி சான்றுடன் தொடர்ந்து இணைகிறது.",
  premiumProtected:
    "இந்த தயாரிப்புக்கான மதிப்பிடப்பட்ட உண்மைத்தன்மை பிரீமியம் பாதுகாக்கப்படுகிறது.",
  laborVisible: "கைவினை உழைப்பு பெயரில்லா விற்பனையில் மறையாமல் வாங்குபவருக்கு தெரிகிறது.",
  giBound: "GI அல்லது சான்று கோரிக்கை பொருள்-நிலை ஆதாரத்துடன் இணைக்கப்படுகிறது.",
  valueProtected: "சரிபார்க்கப்பட்ட கதையால் பாதுகாக்கப்பட்ட மதிப்பிடப்பட்ட மதிப்பு",
  visibleLabor: "சான்றிதழ்களுடன் இணைக்கப்பட்ட கைவினை உழைப்பு",
  scanTouchpoints: "நுகர்வோர் மற்றும் சில்லறை ஸ்கேன் தொடுப்புகள்",
  prototypeDepth: "புரோட்டோடைப் ஆழம்",
  prototypeDepthBody: "முழு பதிவு, சரிபார்ப்பு, லெட்ஜர், பகுப்பாய்வு மற்றும் API செயல்படுகின்றன.",
  scalability: "அளவுபடுத்தல்",
  scalabilityBody:
    "கிளஸ்டர்-நியூட்ரல் தரவு முறை கைத்தறி மற்றும் தொடர்புடைய கைவினைகளில் இயங்குகிறது.",
  judgeClarity: "நடுவர் தெளிவு",
  judgeClarityBody:
    "ஒரு ஸ்கேன் உண்மைத்தன்மை, நெசவாளர் கதை, மோசடி பாதுகாப்பு மற்றும் வாழ்வாதார தாக்கத்தை காட்டுகிறது.",
});

Object.assign(uiText.te, {
  block: "బ్లాక్",
  shaTrace: "SHA-256 ట్రేస్",
  namedMakerImpact: "తయారీదారి పేరు రీసేల్, రిటైల్ మరియు ఎగుమతి సాక్ష్యంతో కొనసాగుతుంది.",
  premiumProtected: "ఈ ఉత్పత్తికి అంచనా వేసిన ప్రామాణికత ప్రీమియం రక్షించబడింది.",
  laborVisible: "కళాకారుడి శ్రమ పేరు లేని అమ్మకంలో దాగకుండా కొనుగోలుదారుకు కనిపిస్తుంది.",
  giBound: "GI లేదా ధృవీకరణ క్లెయిమ్ ఐటమ్-స్థాయి సాక్ష్యంతో బంధించబడింది.",
  valueProtected: "ధృవీకరించిన కథ ద్వారా రక్షించబడిన అంచనా విలువ",
  visibleLabor: "సర్టిఫికెట్లకు అనుసంధానమైన కనిపించే కళాకారుడి శ్రమ",
  scanTouchpoints: "వినియోగదారు మరియు రిటైల్ స్కాన్ టచ్‌పాయింట్లు",
  prototypeDepth: "ప్రోటోటైప్ లోతు",
  prototypeDepthBody:
    "ఎండ్-టు-ఎండ్ రిజిస్ట్రీ, ధృవీకరణ, లెడ్జర్, విశ్లేషణలు మరియు API పని చేస్తున్నాయి.",
  scalability: "స్కేలబిలిటీ",
  scalabilityBody: "క్లస్టర్-న్యూట్రల్ డేటా మోడల్ చేనేత మరియు అనుబంధ కళా రంగాలకు పనిచేస్తుంది.",
  judgeClarity: "జడ్జ్ స్పష్టత",
  judgeClarityBody:
    "ఒక స్కాన్ ప్రామాణికత, నేయగాడి కథ, మోసం రక్షణ మరియు జీవనోపాధి ప్రభావాన్ని చూపిస్తుంది.",
});

Object.assign(uiText.bn, {
  block: "ব্লক",
  shaTrace: "SHA-256 ট্রেস",
  namedMakerImpact: "নির্মাতার নাম পুনর্বিক্রয়, খুচরা ও রপ্তানি প্রমাণের সঙ্গে যুক্ত থাকে।",
  premiumProtected: "এই পণ্যের আনুমানিক প্রামাণিকতা প্রিমিয়াম সুরক্ষিত।",
  laborVisible: "কারিগরের শ্রম নামহীন বিক্রয়ে হারিয়ে না গিয়ে ক্রেতার কাছে দৃশ্যমান থাকে।",
  giBound: "GI বা সার্টিফিকেশন দাবি আইটেম-স্তরের প্রমাণের সঙ্গে যুক্ত।",
  valueProtected: "যাচাই করা গল্পের মাধ্যমে সুরক্ষিত আনুমানিক মূল্য",
  visibleLabor: "সার্টিফিকেটে যুক্ত দৃশ্যমান কারিগরি শ্রম",
  scanTouchpoints: "ক্রেতা ও খুচরা স্ক্যান টাচপয়েন্ট",
  prototypeDepth: "প্রোটোটাইপ গভীরতা",
  prototypeDepthBody: "এন্ড-টু-এন্ড রেজিস্ট্রি, যাচাই, লেজার, অ্যানালিটিক্স এবং API কাজ করছে।",
  scalability: "স্কেলযোগ্যতা",
  scalabilityBody: "ক্লাস্টার-নিউট্রাল ডেটা মডেল হ্যান্ডলুম ও সংশ্লিষ্ট কারুশিল্পে কাজ করে।",
  judgeClarity: "বিচারক স্পষ্টতা",
  judgeClarityBody:
    "একটি স্ক্যান প্রামাণিকতা, তাঁতির গল্প, জালিয়াতি সুরক্ষা এবং জীবিকা প্রভাব দেখায়।",
});

const productTranslations = {
  "TT-PCH-001": {
    hi: {
      story:
        "तेलिया रूमाल ज्यामिति से प्रेरित लाल-काला-सफेद इकट ग्रिड, जिसे बुनाई से पहले धागे के स्तर पर योजनाबद्ध किया गया।",
    },
    ta: {
      story:
        "தெலியா ரூமால் வடிவியலால் ஈர்க்கப்பட்ட சிவப்பு-கருப்பு-வெள்ளை இக்கட் கட்டம், நெய்வதற்கு முன் நூல் நிலையில் திட்டமிடப்பட்டது.",
    },
    te: {
      story:
        "తెలియా రుమాల్ జ్యామితి ప్రేరణతో రూపొందిన ఎరుపు-నలుపు-తెలుపు ఇక్కట్ గ్రిడ్, నేయడానికి ముందు నూలు స్థాయిలో ప్రణాళిక చేయబడింది.",
    },
    bn: {
      story:
        "তেলিয়া রুমাল জ্যামিতি থেকে অনুপ্রাণিত লাল-কালো-সাদা ইকত গ্রিড, যা বুননের আগে সুতোর স্তরেই পরিকল্পনা করা হয়েছে।",
    },
  },
  "TT-BAN-003": {
    hi: {
      story:
        "ब्राइडल-ग्रेड बनारसी ब्रोकेड जिसमें हर मोटिफ अलग बुना जाता है, जिससे कारीगरी और श्रम स्पष्ट दिखता है।",
    },
    ta: {
      story:
        "ஒவ்வொரு மோட்டீஃபும் தனியாக நெய்யப்படும் மணமகள் தரப் பனாரசி ப்ரோகேட்; இதனால் கைவினை உழைப்பு தெளிவாகிறது.",
    },
    te: {
      story:
        "ప్రతి మోటీఫ్ విడిగా నేయబడే బ్రైడల్-గ్రేడ్ బనారసీ బ్రోకేడ్; ఇది చేతిపని శ్రమను స్పష్టంగా చూపిస్తుంది.",
    },
    bn: {
      story:
        "প্রতিটি মোটিফ আলাদা করে বোনা ব্রাইডাল-গ্রেড বেনারসি ব্রোকেড, যা কারিগরি শ্রমকে দৃশ্যমান করে।",
    },
  },
  "TT-KAN-005": {
    hi: {
      story:
        "नीली-मैजेंटा कांजीवरम साड़ी जिसमें बॉडी और बॉर्डर को करघे पर कोरवाई इंटरलॉक से जोड़ा गया है।",
    },
    ta: {
      story:
        "நீலம்-மஜெண்டா காஞ்சிபுரம் சேலை; உடலும் ஓரமும் கருவியிலேயே கோர்வை இணைப்பால் இணைக்கப்படுகின்றன.",
    },
    te: {
      story:
        "నీలం-మెజెంటా కాంచీపురం చీర; బాడీ మరియు బోర్డర్ మగ్గంపైనే కొర్వై ఇంటర్‌లాక్‌తో కలుపబడతాయి.",
    },
    bn: {
      story:
        "নীল-ম্যাজেন্টা কাঞ্চিপুরম শাড়ি, যেখানে দেহ ও পাড় করঘাতেই কোরভাই ইন্টারলকে যুক্ত হয়।",
    },
  },
  "TT-CHD-007": {
    hi: {
      story:
        "अशर्फी बूटी वाला हल्का चंदेरी सिल्क-कॉटन, जिसमें ज़री बूटियां और सत्यापित मूल जुड़ा है।",
    },
    ta: {
      story:
        "அஷர்ஃபி பூட்டி கொண்ட இலகுரக சந்தேரி பட்டு-பருத்தி; ஜரி பூட்டிகளும் சரிபார்க்கப்பட்ட மூலமும் இணைந்துள்ளன.",
    },
    te: {
      story:
        "అషర్ఫీ బూటీతో కూడిన తేలికైన చందేరీ పట్టు-పత్తి; జరీ బూటీలు మరియు ధృవీకరించిన మూలం కలిసివున్నాయి.",
    },
    bn: {
      story: "আশরফি বুটি যুক্ত হালকা চান্দেরি সিল্ক-কটন, যেখানে জরি বুটি ও যাচাই করা উৎস যুক্ত।",
    },
  },
  "TT-MUG-009": {
    hi: {
      story:
        "असम के प्राकृतिक सुनहरे मूगा सिल्क सेट को कोकून स्रोत से करघे तक प्रमाणित किया गया है।",
    },
    ta: {
      story:
        "அசாமின் இயற்கை பொன்னிற முகா சில்க் தொகுப்பு கூடு மூலத்திலிருந்து கருவி நிறைவு வரை சான்றளிக்கப்படுகிறது.",
    },
    te: {
      story:
        "అస్సాం సహజ బంగారు ముగ సిల్క్ సెట్, కోకూన్ మూలం నుండి మగ్గం పూర్తయ్యే వరకు ధృవీకరించబడింది.",
    },
    bn: {
      story: "অসমের প্রাকৃতিক সোনালি মুগা সিল্ক সেট, কোকুন উৎস থেকে তাঁত পর্যন্ত যাচাই করা হয়েছে।",
    },
  },
  "TT-PAT-011": {
    hi: {
      story:
        "दोनों ओर समान दिखने वाला उच्च-सटीकता पटोला, जिसका पैटर्न बुनाई से पहले ताना और बाना दोनों में रंगा जाता है।",
    },
    ta: {
      story:
        "இரு பக்கமும் ஒரேபோல் தோன்றும் உயர்துல்லிய படோலா; வடிவம் நெய்வதற்கு முன் வார்ப்பிலும் வேஃப்டிலும் நிறமிடப்படுகிறது.",
    },
    te: {
      story:
        "రెండు వైపులా ఒకేలా కనిపించే అధిక ఖచ్చితత్వ పటోలా; నమూనా నేయడానికి ముందు వార్ప్ మరియు వెఫ్ట్‌లోనే రంగబడుతుంది.",
    },
    bn: {
      story:
        "দুই দিকেই সমান দেখা উচ্চ-নির্ভুল পাটোলা, যার নকশা বুননের আগে তানা ও বানা দুই দিকেই রাঙানো হয়।",
    },
  },
};

const craftTranslations = {
  "Pochampally Ikat": {
    hi: {
      name: "पोचमपल्ली इकट",
      origin: "तेलंगाना",
      proof:
        "धागे को बुनाई से पहले बांधकर रंगा जाता है, इसलिए पैटर्न संरेखण ही हाथ की प्रक्रिया का प्रमाण बनता है।",
      motif: "ग्रिड ज्यामिति, तेलिया रूमाल स्मृति और रेजिस्ट-डाई सटीकता।",
    },
    ta: {
      name: "போச்சம்பள்ளி இக்கட்",
      origin: "தெலங்கானா",
      proof: "நூல் நெய்வதற்கு முன் கட்டி நிறமிடப்படுகிறது; எனவே வடிவ ஒழுங்கே கைப்பணி சான்றாகிறது.",
      motif: "கட்ட வடிவியல், தெலியா ரூமால் நினைவு, ரெசிஸ்ட்-டை துல்லியம்.",
    },
    te: {
      name: "పోచంపల్లి ఇక్కట్",
      origin: "తెలంగాణ",
      proof:
        "నూలు నేయడానికి ముందు కట్టి రంగు వేయబడుతుంది; కాబట్టి నమూనా సర్దుబాటు చేతిపని సాక్ష్యంగా మారుతుంది.",
      motif: "గ్రిడ్ జ్యామితి, తెలియా రుమాల్ జ్ఞాపకం, రెసిస్ట్-డై ఖచ్చితత్వం.",
    },
    bn: {
      name: "পোচমপল্লী ইকত",
      origin: "তেলেঙ্গানা",
      proof: "বুননের আগে সুতো বাঁধা ও রঙ করা হয়, তাই নকশার সামঞ্জস্যই হাতের কাজের প্রমাণ।",
      motif: "গ্রিড জ্যামিতি, তেলিয়া রুমাল স্মৃতি, রেজিস্ট-ডাই নির্ভুলতা।",
    },
  },
  "Banarasi Silk": {
    hi: {
      name: "बनारसी सिल्क",
      origin: "उत्तर प्रदेश",
      proof: "कड़वा बुनाई में मोटिफ अलग-अलग बनते हैं, जिससे श्रम-गहन कारीगरी प्रमाणित होती है।",
      motif: "फ्लोरल जाल, ज़री ब्रोकेड और विरासत वस्त्र।",
    },
    ta: {
      name: "பனாரசி பட்டு",
      origin: "உத்தரப் பிரதேசம்",
      proof: "கட்வா நெய்தலில் மோட்டீஃப்கள் தனித்தனியாக உருவாகுவதால் உழைப்பு தெளிவாகச் சான்றாகிறது.",
      motif: "மலர் ஜால், ஜரி ப்ரோகேட், பாரம்பரிய ஆடை.",
    },
    te: {
      name: "బనారసీ సిల్క్",
      origin: "ఉత్తర ప్రదేశ్",
      proof:
        "కద్వా నేయడంలో మోటీఫ్‌లు విడిగా నిర్మించబడతాయి, శ్రమతో కూడిన కళాసాక్ష్యాన్ని చూపిస్తాయి.",
      motif: "పుష్ప జాల్, జరీ బ్రోకేడ్, వారసత్వ వస్త్రాలు.",
    },
    bn: {
      name: "বেনারসি সিল্ক",
      origin: "উত্তর প্রদেশ",
      proof: "কড়ওয়া বুননে মোটিফ আলাদা করে তৈরি হয়, তাই শ্রমঘন কারুশিল্প দৃশ্যমান হয়।",
      motif: "ফ্লোরাল জাল, জরি ব্রোকেড, ঐতিহ্যবাহী বস্ত্র।",
    },
  },
  "Kanchipuram Silk": {
    hi: {
      name: "कांचीपुरम सिल्क",
      origin: "तमिलनाडु",
      proof: "कोरवाई इंटरलॉक बॉर्डर और बॉडी को करघे पर जोड़ता है, बाद की सिलाई से नहीं।",
      motif: "मंदिर बॉर्डर, गहरा कंट्रास्ट और टिकाऊ मुलबेरी सिल्क।",
    },
    ta: {
      name: "காஞ்சிபுரம் பட்டு",
      origin: "தமிழ்நாடு",
      proof:
        "கோர்வை இணைப்பு உடல் மற்றும் ஓரத்தை கருவியிலேயே இணைக்கிறது; பின்னர் தைக்கப்படுவது அல்ல.",
      motif: "கோயில் ஓரங்கள், வலுவான நிற முரண், நீடித்த முல்பெரி பட்டு.",
    },
    te: {
      name: "కాంచీపురం సిల్క్",
      origin: "తమిళనాడు",
      proof: "కొర్వై ఇంటర్‌లాక్ బోర్డర్ మరియు బాడీని మగ్గంపైనే కలుపుతుంది; తర్వాత కుట్టడం కాదు.",
      motif: "దేవాలయ బోర్డర్లు, గాఢ రంగు వ్యత్యాసం, మన్నికైన మల్బెరీ సిల్క్.",
    },
    bn: {
      name: "কাঞ্চিপুরম সিল্ক",
      origin: "তামিলনাড়ু",
      proof: "কোরভাই ইন্টারলক পাড় ও দেহকে তাঁতেই যুক্ত করে, পরে সেলাই করে নয়।",
      motif: "মন্দির পাড়, দৃঢ় কনট্রাস্ট, টেকসই মালবেরি সিল্ক।",
    },
  },
  "Chanderi Weave": {
    hi: {
      name: "चंदेरी बुनाई",
      origin: "मध्य प्रदेश",
      proof:
        "हल्की सिल्क-कॉटन संरचना और ज़री बूटियों को सूक्ष्म शिल्प मूल्य बचाने के लिए क्लस्टर सत्यापन चाहिए।",
      motif: "अशर्फी बूटी, पारदर्शी बनावट और संतुलित चमक।",
    },
    ta: {
      name: "சந்தேரி நெய்தல்",
      origin: "மத்தியப் பிரதேசம்",
      proof:
        "இலகுரக பட்டு-பருத்தி அமைப்பும் ஜரி பூட்டிகளும் நுட்பமான கைவினை மதிப்பை காக்க கிளஸ்டர் சரிபார்ப்பை தேவைப்படுத்துகின்றன.",
      motif: "அஷர்ஃபி பூட்டி, ஒளித்திரை அமைப்பு, மென்மையான ஒளிர்வு.",
    },
    te: {
      name: "చందేరీ నేయడం",
      origin: "మధ్య ప్రదేశ్",
      proof:
        "తేలికైన పట్టు-పత్తి నిర్మాణం మరియు జరీ బూటీలకు సూక్ష్మ కళా విలువను కాపాడటానికి క్లస్టర్ ధృవీకరణ అవసరం.",
      motif: "అషర్ఫీ బూటీ, పారదర్శక నిర్మాణం, మృదువైన మెరుపు.",
    },
    bn: {
      name: "চান্দেরি বুনন",
      origin: "মধ্য প্রদেশ",
      proof:
        "হালকা সিল্ক-কটন গঠন ও জরি বুটি সূক্ষ্ম কারুশিল্পের মূল্য রক্ষায় ক্লাস্টার যাচাই চায়।",
      motif: "আশরফি বুটি, স্বচ্ছ টেক্সচার, সংযত উজ্জ্বলতা।",
    },
  },
  "Muga Silk": {
    hi: {
      name: "मूगा सिल्क",
      origin: "असम",
      proof:
        "प्राकृतिक सुनहरा सिल्क दुर्लभ है, इसलिए स्रोत से करघे तक ट्रेसबिलिटी सामग्री और कारीगर दोनों की रक्षा करती है।",
      motif: "सुनहरी चमक, असमिया रूप और टिकाऊ औपचारिक वस्त्र।",
    },
    ta: {
      name: "முகா பட்டு",
      origin: "அசாம்",
      proof:
        "இயற்கை பொன்னிற பட்டு அரிதானது; எனவே மூலத்திலிருந்து கருவி வரை தடமறிதல் பொருளையும் கைவினையாளரையும் காக்கிறது.",
      motif: "பொன்னிற ஒளிர்வு, அசாமிய வடிவங்கள், நீடித்த விழா ஆடை.",
    },
    te: {
      name: "ముగ సిల్క్",
      origin: "అస్సాం",
      proof:
        "సహజ బంగారు సిల్క్ అరుదైనది; కాబట్టి మూలం నుండి మగ్గం వరకు ట్రేసబిలిటీ పదార్థం మరియు కళాకారుడిని రక్షిస్తుంది.",
      motif: "బంగారు మెరుపు, అస్సామీయ రూపాలు, మన్నికైన వేడుక వస్త్రం.",
    },
    bn: {
      name: "মুগা সিল্ক",
      origin: "অসম",
      proof:
        "প্রাকৃতিক সোনালি সিল্ক বিরল; তাই উৎস থেকে তাঁত পর্যন্ত ট্রেসেবিলিটি উপকরণ ও কারিগরকে রক্ষা করে।",
      motif: "সোনালি দীপ্তি, অসমীয়া রূপ, টেকসই আনুষ্ঠানিক পোশাক।",
    },
  },
  Patola: {
    hi: {
      name: "पटोला",
      origin: "गुजरात",
      proof:
        "डबल इकट में पैटर्न बुनाई से पहले ताना और बाना दोनों में रंगा जाता है, इसलिए हर संरेखण चरण मूल्यवान प्रमाण है।",
      motif: "नवरत्न ज्यामिति, रिवर्सिबल सटीकता और उच्च-मूल्य विरासत।",
    },
    ta: {
      name: "படோலா",
      origin: "குஜராத்",
      proof:
        "டபுள் இக்கட்டில் வடிவம் நெய்வதற்கு முன் வார்ப்பிலும் வேஃப்டிலும் நிறமிடப்படுகிறது; ஒவ்வொரு ஒழுங்குமுறையும் மதிப்புள்ள சான்று.",
      motif: "நவரத்தின வடிவியல், இருபுறத் துல்லியம், உயர்மதிப்பு பாரம்பரியம்.",
    },
    te: {
      name: "పటోలా",
      origin: "గుజరాత్",
      proof:
        "డబుల్ ఇక్కట్‌లో నమూనా నేయడానికి ముందు వార్ప్ మరియు వెఫ్ట్‌లో రంగబడుతుంది; ప్రతి సర్దుబాటు దశ విలువైన సాక్ష్యం.",
      motif: "నవరత్న జ్యామితి, రెండు వైపుల ఖచ్చితత్వం, అధిక విలువైన వారసత్వం.",
    },
    bn: {
      name: "পাটোলা",
      origin: "গুজরাট",
      proof:
        "ডাবল ইকতে নকশা বুননের আগে তানা ও বানা দুই দিকেই রাঙানো হয়, তাই প্রতিটি সামঞ্জস্য ধাপ মূল্যবান প্রমাণ।",
      motif: "নবরত্ন জ্যামিতি, উল্টোপিঠে নির্ভুলতা, উচ্চ-মূল্যের ঐতিহ্য।",
    },
  },
};

const journeyTranslations = {
  "Yarn Bank": { hi: "यार्न बैंक", ta: "நூல் வங்கி", te: "నూలు బ్యాంక్", bn: "সুতো ব্যাংক" },
  "Natural Dye": {
    hi: "प्राकृतिक रंगाई",
    ta: "இயற்கை நிறமிடல்",
    te: "సహజ రంగు",
    bn: "প্রাকৃতিক রং",
  },
  "Loom Weaving": { hi: "करघा बुनाई", ta: "கருவி நெய்தல்", te: "మగ్గం నేయడం", bn: "তাঁত বুনন" },
  "GI Quality Check": {
    hi: "GI गुणवत्ता जांच",
    ta: "GI தரச் சோதனை",
    te: "GI నాణ్యత తనిఖీ",
    bn: "GI মান পরীক্ষা",
  },
  "Market Scan": {
    hi: "बाज़ार स्कैन",
    ta: "சந்தை ஸ்கேன்",
    te: "మార్కెట్ స్కాన్",
    bn: "বাজার স্ক্যান",
  },
  "Raw Material": { hi: "कच्चा माल", ta: "மூலப் பொருள்", te: "ముడి పదార్థం", bn: "কাঁচামাল" },
  "Design Setup": {
    hi: "डिज़ाइन सेटअप",
    ta: "வடிவமைப்பு அமைப்பு",
    te: "డిజైన్ సెటప్",
    bn: "ডিজাইন সেটআপ",
  },
  "Quality Proof": {
    hi: "गुणवत्ता प्रमाण",
    ta: "தரச் சான்று",
    te: "నాణ్యత సాక్ష్యం",
    bn: "মানের প্রমাণ",
  },
  "Consumer Scan": {
    hi: "उपभोक्ता स्कैन",
    ta: "நுகர்வோர் ஸ்கேன்",
    te: "వినియోగదారు స్కాన్",
    bn: "ক্রেতা স্ক্যান",
  },
};

function getLanguage() {
  return uiText[selectedLanguage] ? selectedLanguage : "en";
}

function textFor(key, values = {}) {
  const active = getLanguage();
  const template = uiText[active][key] ?? uiText.en[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function localizedProduct(product) {
  const copy = productTranslations[product.id]?.[getLanguage()] || {};
  return {
    ...product,
    name: copy.name || product.name,
    story: copy.story || product.story,
  };
}

function localizedCraftName(craft) {
  return craftTranslations[craft]?.[getLanguage()]?.name || craft;
}

function localizedWeaver(weaver) {
  return {
    ...weaver,
    craft: localizedCraftName(weaver.craft),
  };
}

function localizedJourneyStep(step) {
  return [journeyTranslations[step[0]]?.[getLanguage()] || step[0], step[1], step[2], step[3]];
}

function translateStaticShell() {
  const active = getLanguage();
  document.documentElement.lang = languageMeta[active].htmlLang;
  const languageSelect = $("#languageSelect");
  if (languageSelect) languageSelect.value = active;
  const status = $("#scanStatus");
  if (status) status.textContent = textFor(scanStatusKey);

  const targets = [
    [".brand small", "appSubtitle"],
    ['.main-nav [data-nav="overview"]', "navOverview"],
    ['.main-nav [data-nav="verify"]', "navVerify"],
    ['.main-nav [data-nav="consumer"]', "navConsumer"],
    ['.main-nav [data-nav="registry"]', "navRegistry"],
    ['.main-nav [data-nav="weavers"]', "navWeavers"],
    ['.main-nav [data-nav="ledger"]', "navLedger"],
    ['.main-nav [data-nav="analytics"]', "navAnalytics"],
    ['.main-nav [data-nav="impact"]', "navImpact"],
    ['.main-nav [data-nav="integrations"]', "navIntegrations"],
    [".sync-card .label", "network"],
    ["#exportState", "exportRegistry"],
    [".topbar h1", "topTitle"],
    [".select-control span", "storyLanguage"],
    [".switch span", "liveScanStream"],
    ["#resetDemo", "resetSample"],
    [".kpis article:nth-child(1) span", "verifiedProducts"],
    [".kpis article:nth-child(1) small", "certifiedTraceRecords"],
    [".kpis article:nth-child(2) span", "registeredWeavers"],
    [".kpis article:nth-child(2) small", "profilesLinked"],
    [".kpis article:nth-child(3) span", "totalScans"],
    [".kpis article:nth-child(3) small", "realtimeEvents"],
    [".kpis article:nth-child(4) span", "chainIntegrity"],
    [".kpis article:nth-child(4) small", "ledgerHashVerification"],
    [".scan-console .label", "verificationStation"],
    [".scan-console h2", "scanTrace"],
    ['label[for="productSelect"]', "product"],
    ["#scanNow", "verifySelected"],
    ["#tamperDemo", "tamperCheck"],
    [".hero-panel .label", "consumerStoryPage"],
    ["#view-verify .two-col article:nth-child(1) .label", "manualVerification"],
    ["#view-verify .two-col article:nth-child(1) h2", "verifyBy"],
    ["#verifyInputBtn", "verify"],
    ["#view-verify .two-col article:nth-child(2) .label", "fraudQueue"],
    ["#view-verify .two-col article:nth-child(2) h2", "suspiciousScans"],
    [".retailer-panel .label", "retailerStation"],
    [".retailer-panel h2", "batchRisk"],
    ["#batchScan", "runBatch"],
    ["#view-verify > article.panel:not(.retailer-panel) .label", "productJourney"],
    ["#view-verify > article.panel:not(.retailer-panel) h2", "supplyTrace"],
    [".consumer-proof .label", "publicCertificate"],
    ["#listenStory", "listenStory"],
    ["#copyShare", "copyLink"],
    ["#downloadReceipt", "downloadReceipt"],
    [".weave-panel .label", "weaveInspection"],
    [".weave-panel h2", "patternMicroscope"],
    ["#view-consumer .wide .label", "buyerImpact"],
    ["#view-consumer .wide h2", "whatScanProves"],
    ["#view-registry .two-col article:nth-child(1) .label", "registerProduct"],
    ["#view-registry .two-col article:nth-child(1) h2", "createAuthRecord"],
    ["#generateStory", "generateStory"],
    ["#view-registry .two-col article:nth-child(2) .label", "registry"],
    ["#view-registry .two-col article:nth-child(2) h2", "certifiedProducts"],
    ["#view-weavers .two-col article:nth-child(1) .label", "registerWeaver"],
    ["#view-weavers .two-col article:nth-child(1) h2", "createWeaverProfile"],
    ["#voiceStory", "voiceStory"],
    ["#view-weavers .two-col article:nth-child(2) .label", "weaverPortfolio"],
    ["#view-weavers .two-col article:nth-child(2) h2", "profilesIncome"],
    ["#view-ledger .two-col article:nth-child(1) .label", "ledgerIntegrity"],
    ["#view-ledger .two-col article:nth-child(1) h2", "tamperChain"],
    ["#view-ledger .muted", "ledgerDescription"],
    ["#verifyChain", "reverifyLedger"],
    ["#view-ledger .two-col article:nth-child(2) .label", "exportPayload"],
    ["#view-ledger .two-col article:nth-child(2) h2", "apiReady"],
    ["#view-ledger > article.panel .label", "recentBlocks"],
    ["#view-ledger > article.panel h2", "ledgerBlocks"],
    ["#view-analytics .wide .label", "realtimeScans"],
    ["#view-analytics .wide h2", "verificationTrend"],
    ["#view-analytics article:nth-child(2) .label", "craftCoverage"],
    ["#view-analytics article:nth-child(2) h2", "productsByCraft"],
    ["#view-analytics article:nth-child(3) .label", "incomeImpact"],
    ["#view-analytics article:nth-child(3) h2", "premiumByCluster"],
    ["#view-analytics article:nth-child(4) .label", "anomalyModel"],
    ["#view-analytics article:nth-child(4) h2", "riskDistribution"],
    ["#view-impact .wide .label", "clusterIntelligence"],
    ["#view-impact .wide h2", "proofCreatesValue"],
    ["#view-impact article:nth-child(2) .label", "livelihoodSignal"],
    ["#view-impact article:nth-child(2) h2", "verifiedIncomeLift"],
    ["#view-impact article:nth-child(3) .label", "scaleReadiness"],
    ["#view-impact article:nth-child(3) h2", "submissionStrength"],
    ["#view-integrations article:nth-child(1) .label", "integrationReadiness"],
    ["#view-integrations article:nth-child(1) h2", "capabilities"],
    ["#view-integrations article:nth-child(2) .label", "endpointBlueprint"],
    ["#view-integrations article:nth-child(2) h2", "apiContract"],
  ];

  targets.forEach(([selector, key]) => {
    const element = $(selector);
    if (element) element.textContent = textFor(key);
  });

  const placeholders = [
    ["#verifyInput", "verifyPlaceholder"],
    ["#productSearch", "searchProducts"],
  ];
  placeholders.forEach(([selector, key]) => {
    const element = $(selector);
    if (element) element.placeholder = textFor(key);
  });

  const labels = [
    ["#productForm", "name", "productName"],
    ["#productForm", "weaverId", "weaver"],
    ["#productForm", "craft", "craft"],
    ["#productForm", "category", "category"],
    ["#productForm", "material", "materials"],
    ["#productForm", "technique", "technique"],
    ["#productForm", "gi", "giMark"],
    ["#productForm", "days", "daysToMake"],
    ["#productForm", "price", "basePrice"],
    ["#productForm", "premium", "premiumPercent"],
    ["#productForm", "story", "productStory"],
    ["#weaverForm", "name", "name"],
    ["#weaverForm", "role", "role"],
    ["#weaverForm", "village", "village"],
    ["#weaverForm", "state", "state"],
    ["#weaverForm", "craft", "craft"],
    ["#weaverForm", "cluster", "cluster"],
    ["#weaverForm", "years", "years"],
    ["#weaverForm", "generations", "generations"],
    ["#weaverForm", "story", "story"],
  ];
  labels.forEach(([formSelector, fieldName, key]) =>
    setFieldLabel(formSelector, fieldName, textFor(key)),
  );
  setPlainLabel("#scanSource", textFor("scanLocation"));
  setPlainLabel("#batchCount", textFor("batchSize"));
}

function setFieldLabel(formSelector, fieldName, text) {
  const field = $(formSelector)?.elements?.[fieldName];
  if (!field) return;
  setPlainLabel(field, text);
}

function setPlainLabel(fieldOrSelector, text) {
  const field = typeof fieldOrSelector === "string" ? $(fieldOrSelector) : fieldOrSelector;
  const label = field?.closest("label");
  if (!label) return;
  const textNode = Array.from(label.childNodes).find(
    (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
  );
  if (textNode) {
    textNode.textContent = `\n                  ${text}\n                  `;
  } else {
    label.insertBefore(document.createTextNode(`${text} `), field);
  }
}

function setScanStatus(key, className = "status") {
  scanStatusKey = key;
  const status = $("#scanStatus");
  if (!status) return;
  status.textContent = textFor(key);
  status.className = className;
}

let state;
let selectedProductId;
let selectedWeaverId;
let selectedLanguage = localStorage.getItem("tantritrace.language") || "en";
let scanStatusKey = "ready";
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
  if (broadcast && channel)
    channel.postMessage({ type: "state-updated", at: Date.now(), source: "remote" });
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
  return `TT-CERT-${product.id}-${String(product.hash || "")
    .slice(0, 6)
    .toUpperCase()}`;
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
  const seed = `${product.id}${product.hash || ""}`
    .split("")
    .reduce((total, char) => total + char.charCodeAt(0), 0);
  for (let row = 0; row < cells; row += 1) {
    for (let col = 0; col < cells; col += 1) {
      const corner = (row < 4 && col < 4) || (row < 4 && col > 8) || (row > 8 && col < 4);
      const active = corner || (row * 29 + col * 17 + seed) % 7 < 3;
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
  addEvent(
    "Product verified",
    `${product.name} scanned from ${source}. Block #${block.index}.`,
    false,
  );
  state.trend[state.trend.length - 1][1] += 1;
  persist(true, true, "scan");
}

async function verifySelectedProduct(source = "Operations console") {
  const product = getProduct();
  setScanStatus("verifying", "status scanning");
  drawTraceTag(product, true);
  await new Promise((resolve) => setTimeout(resolve, 420));
  const expected = await createHashForProduct(product);
  const valid = expected === product.hash;
  if (valid) await recordScan(product.id, source);
  setScanStatus(valid ? "authentic" : "mismatch", valid ? "status" : "status danger");
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
  await createBlock("FRAUD_CHECK", {
    productId: product.id,
    expected: product.hash,
    received: tamperedHash,
  });
  addEvent("Tamper check failed as expected", fraud.detail, false);
  persist(true, true, "tamper-check");
  renderAll();
}

async function verifyManualInput() {
  const raw = $("#verifyInput").value.trim();
  const result = $("#manualVerifyResult");
  if (!raw) {
    result.className = "result-card compact fail";
    result.innerHTML = `<h3>${escapeHtml(textFor("noValue"))}</h3><p>${escapeHtml(textFor("pasteProof"))}</p>`;
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
        const productText = localizedProduct(payload.product);
        result.className = "result-card compact success";
        result.innerHTML = `<h3>${escapeHtml(textFor("authenticProduct"))}</h3><p>${escapeHtml(textFor("registeredWithCertificate", { product: productText.name, certificate: payload.product.certId }))}</p><small>${escapeHtml(short(payload.product.hash))}</small>`;
      } else {
        result.className = "result-card compact fail";
        result.innerHTML = `<h3>${escapeHtml(textFor("notVerified"))}</h3><p>${escapeHtml(payload.fraud?.detail || textFor("noMatchingProof"))}</p>`;
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
    const productText = localizedProduct(product);
    result.className = "result-card compact success";
    result.innerHTML = `<h3>${escapeHtml(textFor("authenticProduct"))}</h3><p>${escapeHtml(textFor("registeredWithCertificate", { product: productText.name, certificate: product.certId }))}</p><small>${escapeHtml(short(product.hash))}</small>`;
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
  result.innerHTML = `<h3>${escapeHtml(textFor("notVerified"))}</h3><p>${escapeHtml(fraud.detail)}</p>`;
  renderAll();
}

async function registerProduct(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  const id = `TT-${String(data.craft)
    .slice(0, 3)
    .toUpperCase()
    .replace(/[^A-Z]/g, "H")}-${Date.now().toString().slice(-6)}`;
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
  const block = await createBlock("REGISTER_PRODUCT", {
    productId: product.id,
    hash: product.hash,
    gi: product.gi,
  });
  product.blockIndex = block.index;
  state.products.unshift(product);
  selectedProductId = product.id;
  addEvent(
    "Product registered",
    `${product.name} created with certificate ${product.certId}.`,
    false,
  );
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
  await createBlock("REGISTER_WEAVER", {
    weaverId: weaver.id,
    name: weaver.name,
    cluster: weaver.cluster,
  });
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
    ? `<h3>${escapeHtml(textFor("ledgerVerified"))}</h3><p>${escapeHtml(textFor("ledgerVerifiedBody", { count: state.ledger.length }))}</p>`
    : `<h3>${escapeHtml(textFor("ledgerMismatch"))}</h3><p>${escapeHtml(textFor("ledgerMismatchBody"))}</p>`;
  $("#metricIntegrity").textContent = valid ? textFor("valid") : textFor("invalid");
  return valid;
}

function productVisual(product) {
  const palette = product.palette || colors.slice(0, 3);
  return `linear-gradient(135deg, ${palette[0]} 0 30%, ${palette[1]} 30% 62%, ${palette[2]} 62% 100%)`;
}

function getCraftInfo(product) {
  const base = craftKnowledge[product.craft] || {
    origin: getWeaver(product.weaverId).state,
    proof: "Cluster, technique, material, and maker details are bound to a product hash.",
    motif: "Registered handloom craft record.",
  };
  return {
    ...base,
    ...(craftTranslations[product.craft]?.[getLanguage()] || {}),
  };
}

function computeProductRisk(product) {
  const relatedFraud = state.fraud.filter((item) => item.productId === product.id).length;
  const medianScans =
    state.products.map((item) => Number(item.scans || 0)).sort((a, b) => a - b)[
      Math.floor(state.products.length / 2)
    ] || 1;
  const scanPressure =
    Number(product.scans || 0) > medianScans * 2
      ? 18
      : Number(product.scans || 0) > medianScans * 1.35
        ? 9
        : 0;
  const trustPenalty = Math.max(0, 100 - Number(product.trust || 92));
  const fraudPenalty = Math.min(42, relatedFraud * 18);
  const pricePenalty = Number(product.price || 0) > 100000 ? 9 : 0;
  const score = Math.min(99, 8 + scanPressure + trustPenalty + fraudPenalty + pricePenalty);
  return {
    score,
    level: score >= 60 ? "high" : score >= 32 ? "medium" : "low",
    reasons: [
      relatedFraud
        ? `${relatedFraud} fraud signal${relatedFraud === 1 ? "" : "s"}`
        : "No direct fraud signal",
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
  const premiumValue = Math.round(
    Number(product.price || 0) * (Number(product.premium || 0) / 100),
  );
  const craftInfo = getCraftInfo(product);
  return {
    weaver,
    premiumValue,
    craftInfo,
    localizedStory: languageTone[selectedLanguage] || languageTone.en,
  };
}

function renderMetrics() {
  translateStaticShell();
  $("#metricProducts").textContent = state.products.length.toLocaleString("en-IN");
  $("#metricWeavers").textContent = state.weavers.length.toLocaleString("en-IN");
  $("#metricScans").textContent = state.products
    .reduce((sum, item) => sum + Number(item.scans || 0), 0)
    .toLocaleString("en-IN");
  $("#eventCount").textContent = textFor("events", { count: state.events.length });
  $("#networkState").textContent = remoteMode
    ? textFor("serverLive")
    : navigator.onLine
      ? textFor("online")
      : textFor("offline");
  $("#syncState").textContent = remoteMode
    ? textFor("syncedRecords", {
        count: state.products.length + state.weavers.length + state.ledger.length,
      })
    : textFor("localRecords", {
        count: state.products.length + state.weavers.length + state.ledger.length,
      });
}

function renderSelectors() {
  const options = state.products
    .map(
      (product) =>
        `<option value="${escapeHtml(product.id)}">${escapeHtml(localizedProduct(product).name)}</option>`,
    )
    .join("");
  $("#productSelect").innerHTML = options;
  $("#productSelect").value = selectedProductId;
  $("#productWeaverSelect").innerHTML = state.weavers
    .map(
      (weaver) =>
        `<option value="${escapeHtml(weaver.id)}">${escapeHtml(weaver.name)} - ${escapeHtml(localizedCraftName(weaver.craft))}</option>`,
    )
    .join("");
}

function renderSelectedProduct() {
  const product = getProduct();
  const productText = localizedProduct(product);
  const weaver = getWeaver(product.weaverId);
  drawTraceTag(product, false);
  $("#storyProductName").textContent = productText.name;
  $("#storyProductText").textContent =
    `${productText.story} ${languageTone[getLanguage()] || languageTone.en}`;
  $("#verificationResult").className = "result-card success";
  $("#verificationResult").innerHTML = `
    <h3>${escapeHtml(textFor("authenticRecord"))}</h3>
    <p>${escapeHtml(textFor("linkedCertified", { product: productText.name, weaver: weaver.name, gi: product.gi }))}</p>
    <dl class="proof-list">
      <div><dt>${escapeHtml(textFor("certificate"))}</dt><dd>${escapeHtml(product.certId)}</dd></div>
      <div><dt>${escapeHtml(textFor("traceHash"))}</dt><dd>${escapeHtml(short(product.hash))}</dd></div>
      <div><dt>${escapeHtml(textFor("scans"))}</dt><dd>${Number(product.scans || 0).toLocaleString("en-IN")}</dd></div>
    </dl>
  `;
  $("#certificate").innerHTML = `
    <span class="label">${escapeHtml(textFor("digitalCertificate"))}</span>
    <h2>${escapeHtml(productText.name)}</h2>
    <p>${escapeHtml(textFor("wovenBy", { weaver: weaver.name, place: `${weaver.village}, ${weaver.state}` }))}</p>
    <dl>
      <div><dt>${escapeHtml(textFor("certificate"))}</dt><dd>${escapeHtml(product.certId)}</dd></div>
      <div><dt>GI / mark</dt><dd>${escapeHtml(product.gi)}</dd></div>
      <div><dt>${escapeHtml(textFor("technique"))}</dt><dd>${escapeHtml(product.technique)}</dd></div>
      <div><dt>${escapeHtml(textFor("block"))}</dt><dd>#${Number(product.blockIndex || 0).toLocaleString("en-IN")}</dd></div>
      <div><dt>${escapeHtml(textFor("shaTrace"))}</dt><dd>${escapeHtml(short(product.hash))}</dd></div>
    </dl>
  `;
}

function renderConsumerExperience() {
  const product = getProduct();
  const productText = localizedProduct(product);
  const { weaver, premiumValue, craftInfo, localizedStory } = impactForProduct(product);
  $("#consumerTitle").textContent = `${productText.name} ${textFor("certificate")}`;
  $("#shareUrl").value = buildShareUrl(product);
  $("#consumerCertificate").innerHTML = `
    <div class="certificate-stamp">${escapeHtml(textFor("publicStamp"))}</div>
    <h3>${escapeHtml(productText.name)}</h3>
    <p>${escapeHtml(productText.story)}</p>
    <p>${escapeHtml(localizedStory)}</p>
    <dl class="proof-list">
      <div><dt>${escapeHtml(textFor("maker"))}</dt><dd>${escapeHtml(weaver.name)} - ${escapeHtml(weaver.village)}, ${escapeHtml(weaver.state)}</dd></div>
      <div><dt>${escapeHtml(textFor("craft"))}</dt><dd>${escapeHtml(craftInfo.name || localizedCraftName(product.craft))} - ${escapeHtml(craftInfo.origin)}</dd></div>
      <div><dt>${escapeHtml(textFor("certificate"))}</dt><dd>${escapeHtml(product.certId)}</dd></div>
      <div><dt>${escapeHtml(textFor("traceHash"))}</dt><dd>${escapeHtml(short(product.hash))}</dd></div>
    </dl>
  `;
  const palette = product.palette || colors.slice(0, 3);
  $("#weaveViewer").style.background = `
    repeating-linear-gradient(90deg, ${palette[0]} 0 13px, ${palette[1]} 13px 24px, ${palette[2]} 24px 34px),
    repeating-linear-gradient(0deg, rgba(16,24,39,.18) 0 9px, rgba(255,255,255,.26) 9px 18px)
  `;
  $("#culturalCard").innerHTML = `
    <strong>${escapeHtml(craftInfo.name || localizedCraftName(product.craft))}</strong>
    <span>${escapeHtml(craftInfo.motif)}</span>
    <p>${escapeHtml(craftInfo.proof)}</p>
  `;
  $("#buyerImpact").innerHTML = `
    <article><strong>${escapeHtml(weaver.name)}</strong><span>${escapeHtml(textFor("namedMakerImpact"))}</span></article>
    <article><strong>${inr(premiumValue)}</strong><span>${escapeHtml(textFor("premiumProtected"))}</span></article>
    <article><strong>${Number(product.days || 0)} days</strong><span>${escapeHtml(textFor("laborVisible"))}</span></article>
    <article><strong>${escapeHtml(product.gi)}</strong><span>${escapeHtml(textFor("giBound"))}</span></article>
  `;
}

function renderJourney() {
  const product = getProduct();
  const steps = product.journey || fallbackJourney;
  $("#journey").innerHTML = steps
    .map((rawStep) => localizedJourneyStep(rawStep))
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
  const products = state.products.filter((product) => {
    const productText = localizedProduct(product);
    return [
      product.name,
      productText.name,
      product.id,
      product.craft,
      localizedCraftName(product.craft),
      product.gi,
    ].some((value) => String(value).toLowerCase().includes(query));
  });
  $("#productGrid").innerHTML = products
    .map((product) => {
      const productText = localizedProduct(product);
      const weaver = getWeaver(product.weaverId);
      return `
        <article class="product-card ${product.id === selectedProductId ? "active" : ""}" data-product="${escapeHtml(product.id)}">
          <div class="visual" style="background:${productVisual(product)}"></div>
          <strong>${escapeHtml(productText.name)}</strong>
          <small>${escapeHtml(product.id)} - ${escapeHtml(localizedCraftName(product.craft))}</small>
          <small>${escapeHtml(weaver.name)} - ${inr(product.price)}</small>
          <div class="tag-row">
            <span class="tag">${escapeHtml(product.gi)}</span>
            <span class="tag">${Number(product.premium)}% ${escapeHtml(textFor("premium"))}</span>
            <span class="tag">${Number(product.scans || 0)} ${escapeHtml(textFor("scans"))}</span>
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
      const weaverText = localizedWeaver(weaver);
      const linkedProducts = state.products.filter((product) => product.weaverId === weaver.id);
      const avgPremium = linkedProducts.length
        ? Math.round(
            linkedProducts.reduce((sum, product) => sum + Number(product.premium || 0), 0) /
              linkedProducts.length,
          )
        : 0;
      const projectedIncome = Math.round(
        Number(weaver.currentIncome || 18000) * (1 + avgPremium / 100),
      );
      return `
        <article class="weaver-card ${weaver.id === selectedWeaverId ? "active" : ""}" data-weaver="${escapeHtml(weaver.id)}">
          <strong>${escapeHtml(weaver.name)}</strong>
          <small>${escapeHtml(weaver.role)} - ${escapeHtml(weaver.village)}, ${escapeHtml(weaver.state)}</small>
          <p>${escapeHtml(weaver.story)}</p>
          <div class="tag-row">
            <span class="tag">${escapeHtml(weaverText.craft)}</span>
            <span class="tag">${linkedProducts.length} ${escapeHtml(textFor("products"))}</span>
            <span class="tag">${inr(projectedIncome)}/mo ${escapeHtml(textFor("projected"))}</span>
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
    $("#fraudQueue").innerHTML =
      `<div class="queue-item"><strong>${escapeHtml(textFor("noSuspicious"))}</strong><small>${escapeHtml(textFor("fraudClear"))}</small></div>`;
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
  $("#riskBadge").textContent = `${risk.level.toUpperCase()} ${textFor("risk")} - ${risk.score}/99`;
  $("#riskBadge").className = `badge risk-${risk.level}`;
  $("#riskModel").innerHTML = `
    <article>
      <strong>${risk.score}/99</strong>
      <span>${escapeHtml(textFor("counterfeitRisk"))}</span>
    </article>
    <article>
      <strong>${escapeHtml(product.certId)}</strong>
      <span>${escapeHtml(textFor("certificateObserved"))}</span>
    </article>
    <article>
      <strong>${Number(product.scans || 0).toLocaleString("en-IN")}</strong>
      <span>${escapeHtml(textFor("totalScanSignals"))}</span>
    </article>
    <article>
      <strong>${escapeHtml(risk.reasons.join(" | "))}</strong>
      <span>${escapeHtml(textFor("modelExplanation"))}</span>
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
    current.premiumValue += Math.round(
      Number(product.price || 0) * (Number(product.premium || 0) / 100),
    );
    current.weavers.add(weaver.id);
    clusters.set(weaver.cluster, current);
  });

  const rows = Array.from(clusters.values()).sort((a, b) => b.premiumValue - a.premiumValue);
  $("#clusterMap").innerHTML = rows
    .map(
      (row, index) => `
        <article class="cluster-node" style="--node:${Math.min(92, 30 + row.products * 11 + index * 4)}%">
          <strong>${escapeHtml(row.cluster)}</strong>
          <span>${escapeHtml(row.state)} - ${row.products} ${escapeHtml(textFor("products"))} - ${row.scans.toLocaleString("en-IN")} ${escapeHtml(textFor("scans"))}</span>
          <small>${inr(row.premiumValue)} ${escapeHtml(textFor("premium"))}</small>
        </article>
      `,
    )
    .join("");

  const premiumTotal = rows.reduce((sum, row) => sum + row.premiumValue, 0);
  const totalDays = state.products.reduce((sum, product) => sum + Number(product.days || 0), 0);
  const totalScans = state.products.reduce((sum, product) => sum + Number(product.scans || 0), 0);
  $("#impactMetrics").innerHTML = `
    <article><strong>${inr(premiumTotal)}</strong><span>${escapeHtml(textFor("valueProtected"))}</span></article>
    <article><strong>${totalDays.toLocaleString("en-IN")} days</strong><span>${escapeHtml(textFor("visibleLabor"))}</span></article>
    <article><strong>${totalScans.toLocaleString("en-IN")}</strong><span>${escapeHtml(textFor("scanTouchpoints"))}</span></article>
  `;
  $("#readinessScore").innerHTML = `
    <div class="score-ring">94</div>
    <article><strong>${escapeHtml(textFor("prototypeDepth"))}</strong><span>${escapeHtml(textFor("prototypeDepthBody"))}</span></article>
    <article><strong>${escapeHtml(textFor("scalability"))}</strong><span>${escapeHtml(textFor("scalabilityBody"))}</span></article>
    <article><strong>${escapeHtml(textFor("judgeClarity"))}</strong><span>${escapeHtml(textFor("judgeClarityBody"))}</span></article>
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
          <span>${escapeHtml(textFor("hash"))} ${escapeHtml(short(block.hash))}</span>
          <span>${escapeHtml(textFor("previous"))} ${escapeHtml(short(block.previousHash))}</span>
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
  state.products.forEach((product) =>
    craftCounts.set(product.craft, (craftCounts.get(product.craft) || 0) + 1),
  );
  const craftRows = Array.from(craftCounts.entries()).sort((a, b) => b[1] - a[1]);
  const maxCraft = Math.max(...craftRows.map((item) => item[1]), 1);
  $("#craftChart").innerHTML = craftRows
    .map(
      ([craft, count], index) => `
        <div class="bar-row">
          <strong>${escapeHtml(localizedCraftName(craft))}</strong>
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
          <strong>${escapeHtml(localizedCraftName(product.craft))}</strong>
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
  $$(".view").forEach((section) =>
    section.classList.toggle("active", section.id === `view-${view}`),
  );
  $$("[data-nav]").forEach((button) =>
    button.classList.toggle("active", button.dataset.nav === view),
  );
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
  const story = textFor("generatedStory", {
    name: data.name,
    craft,
    category: String(data.category || "textile").toLowerCase(),
    material,
    days,
    technique,
    gi,
  });
  form.elements.story.value = story;
}

function captureWeaverStory() {
  const storyField = $("#weaverForm").elements.story;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    storyField.value = textFor("voiceUnsupported");
    return;
  }
  const recognizer = new SpeechRecognition();
  recognizer.lang = languageMeta[getLanguage()].speech;
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
  const productText = localizedProduct(product);
  const { weaver, localizedStory } = impactForProduct(product);
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(
    `${productText.name}. ${textFor("wovenBy", { weaver: weaver.name, place: `${weaver.village}, ${weaver.state}` })} ${productText.story} ${localizedStory}`,
  );
  utterance.lang = languageMeta[getLanguage()].speech;
  speechSynthesis.speak(utterance);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;
  let refreshed = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshed) return;
    refreshed = true;
    window.location.reload();
  });
  navigator.serviceWorker
    .register("sw.js")
    .then((registration) => registration.update())
    .catch(() => {
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
    localStorage.setItem("tantritrace.language", selectedLanguage);
    renderAll();
    verifyChainIntegrity();
  });
  $("#resetDemo").addEventListener("click", async () => {
    if (remoteMode) {
      try {
        const payload = await apiFetch("/reset", { method: "POST", body: "{}" });
        if (applyRemoteState(payload.state)) {
          setScanStatus("ready", "status");
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
    setScanStatus("ready", "status");
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
