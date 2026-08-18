'use strict';

/* ============================== FLIP COUNTDOWN TRACKING ============================== */
const _flipPrev = { h: null, m: null, s: null };

/* ============================== DATA ============================== */

const PRODUCTS = [
  { id: 'p1', name: 'หูฟังไร้สายบลูทูธ ตัดเสียงรบกวน ANC', cat: 'อิเล็กทรอนิกส์', shop: 'TechHub Store', province: 'กรุงเทพฯ', price: 990, old: 1290, rating: 4.8, sold: 15600, stock: 340, flash: true },
  { id: 'p2', name: 'สมาร์ทวอทช์ จอ AMOLED วัดชีพจร กันน้ำ', cat: 'อิเล็กทรอนิกส์', shop: 'GadgetPro', province: 'จีน', price: 1590, old: 2190, rating: 4.7, sold: 6200, stock: 150, flash: true },
  { id: 'p3', name: 'รองเท้าผ้าใบวิ่ง น้ำหนักเบา ระบายอากาศ', cat: 'แฟชั่น', shop: 'UrbanStep', province: 'กรุงเทพฯ', price: 1190, old: 0, rating: 4.8, sold: 9400, stock: 280, flash: false },
  { id: 'p4', name: 'กระเป๋าเป้เดินทาง กันน้ำ ช่องใส่โน้ตบุ๊ก', cat: 'แฟชั่น', shop: 'TravelGear Co.', province: 'เกาหลีใต้', price: 890, old: 1190, rating: 4.9, sold: 3400, stock: 95, flash: true },
  { id: 'p5', name: 'เซ็ตดูแลผิวหน้า วิตามินซี กระจ่างใส', cat: 'ความงาม', shop: 'GlowLab', province: 'กรุงเทพฯ', price: 650, old: 890, rating: 4.6, sold: 7800, stock: 210, flash: true },
  { id: 'p6', name: 'น้ำหอมยูนิเซ็กซ์ กลิ่นซิตรัสสดชื่น 100 มล.', cat: 'ความงาม', shop: 'Aroma House', province: 'ฝรั่งเศส', price: 1290, old: 0, rating: 4.7, sold: 2100, stock: 60, flash: false },
  { id: 'p7', name: 'หม้อทอดไร้น้ำมัน ดิจิทัล ความจุ 5 ลิตร', cat: 'ของใช้ในบ้าน', shop: 'HomeEase', province: 'กรุงเทพฯ', price: 1990, old: 2590, rating: 4.8, sold: 4300, stock: 76, flash: true },
  { id: 'p8', name: 'ผ้าปูที่นอนไมโครไฟเบอร์ 4 ชิ้น', cat: 'ของใช้ในบ้าน', shop: 'CottonNest', province: 'เชียงใหม่', price: 590, old: 0, rating: 4.5, sold: 5100, stock: 320, flash: false },
  { id: 'p9', name: 'รถเข็นเด็กพับได้ น้ำหนักเบา', cat: 'แม่และเด็ก', shop: 'LittleOnes', province: 'กรุงเทพฯ', price: 3490, old: 4290, rating: 4.9, sold: 620, stock: 22, flash: true },
  { id: 'p10', name: 'ของเล่นเสริมพัฒนาการเด็ก ไม้แท้ปลอดสารพิษ', cat: 'แม่และเด็ก', shop: 'KidSmart', province: 'เยอรมนี', price: 450, old: 0, rating: 4.8, sold: 3300, stock: 180, flash: false },
  { id: 'p11', name: 'เสื่อโยคะกันลื่น หนาพิเศษ พร้อมสายรัด', cat: 'สุขภาพและกีฬา', shop: 'FitZone', province: 'กรุงเทพฯ', price: 390, old: 520, rating: 4.7, sold: 8900, stock: 400, flash: true },
  { id: 'p12', name: 'เวย์โปรตีน รสช็อกโกแลต 2 กิโลกรัม', cat: 'สุขภาพและกีฬา', shop: 'PowerNutrition', province: 'สหรัฐอเมริกา', price: 1450, old: 0, rating: 4.6, sold: 3900, stock: 140, flash: false },
  { id: 'p13', name: 'เมล็ดกาแฟอาราบิก้าคั่วกลาง ถุง 1 กิโลกรัม', cat: 'ของชำและเครื่องดื่ม', shop: 'Roast & Co.', province: 'เชียงราย', price: 280, old: 0, rating: 4.8, sold: 11200, stock: 500, flash: false },
  { id: 'p14', name: 'น้ำผึ้งแท้ 100% ขวด 1 กิโลกรัม', cat: 'ของชำและเครื่องดื่ม', shop: 'Golden Hive', province: 'เชียงใหม่', price: 320, old: 420, rating: 4.7, sold: 4100, stock: 260, flash: true },
  { id: 'p15', name: 'คีย์บอร์ดเกมมิ่งแมคคานิคอล RGB', cat: 'คอมพิวเตอร์และแก็ดเจ็ต', shop: 'GameGear', province: 'ไต้หวัน', price: 1690, old: 2290, rating: 4.9, sold: 2600, stock: 90, flash: true },
  { id: 'p16', name: 'พาวเวอร์แบงค์ 20000mAh ชาร์จเร็ว', cat: 'คอมพิวเตอร์และแก็ดเจ็ต', shop: 'ChargeIt', province: 'กรุงเทพฯ', price: 590, old: 0, rating: 4.6, sold: 9700, stock: 610, flash: false },
  { id: 'p17', name: 'กล้องติดรถยนต์ Full HD บันทึกวนอัตโนมัติ', cat: 'ยานยนต์', shop: 'AutoTech', province: 'กรุงเทพฯ', price: 1890, old: 2490, rating: 4.7, sold: 1800, stock: 55, flash: true },
  { id: 'p18', name: 'ชุดสีอะคริลิควาดภาพ 24 สี พร้อมพู่กัน', cat: 'หนังสือและงานอดิเรก', shop: 'ArtCraft Studio', province: 'กรุงเทพฯ', price: 420, old: 0, rating: 4.8, sold: 1500, stock: 130, flash: false }
];

// Snapshot of the original product names, taken before the AI content writer
// can ever overwrite p.name — re-opening the writer for an already-optimized
// product should always re-seed from the real product identity, not from
// whatever title a previous AI pass wrote, or regenerating stacks a fresh
// suffix onto the last one every time.
const ORIGINAL_PRODUCT_NAMES = Object.fromEntries(PRODUCTS.map(p => [p.id, p.name]));

const PRODUCT_QUERY = {
  p1: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb',
  p2: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
  p3: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
  p4: 'https://images.unsplash.com/photo-1509762774605-f07235a08f1f',
  p5: 'https://images.unsplash.com/photo-1580870069867-74c57ee1bb07',
  p6: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f',
  p7: 'https://images.unsplash.com/photo-1695089028114-ce28248f0ab9',
  p8: 'https://images.unsplash.com/photo-1601276174812-63280a55656e',
  p9: 'https://images.unsplash.com/photo-1714392512700-4cab9e51710b',
  p10: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d',
  p11: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0',
  p12: 'https://images.unsplash.com/photo-1693996046865-19217d179161',
  p13: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e',
  p14: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924',
  p15: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef',
  p16: 'https://images.unsplash.com/photo-1592318348310-f31b61a931c8',
  p17: 'https://images.unsplash.com/photo-1643686978109-499f1e9d4bd1',
  p18: 'https://images.unsplash.com/photo-1543237935-aa9ffc1c0bc0'
};

// Atomic Thai keywords per product for the AI assistant's search matching.
// Thai script has no spaces between words, so a typed query like
// "หูฟังไร้สายราคาไม่เกิน1500" can't be split into tokens the usual way —
// matching short curated keywords as substrings of the raw query (instead of
// splitting the query itself) sidesteps that and works regardless of spacing.
const AI_KEYWORDS = {
  p1: ['หูฟัง', 'บลูทูธ', 'ไร้สาย', 'ตัดเสียง'],
  p2: ['สมาร์ทวอทช์', 'นาฬิกา', 'วัดชีพจร'],
  p3: ['รองเท้า', 'ผ้าใบ', 'วิ่ง', 'สนีกเกอร์'],
  p4: ['กระเป๋าเป้', 'เป้', 'เดินทาง', 'backpack'],
  p5: ['สกินแคร์', 'บำรุงผิว', 'วิตามินซี', 'ผิวหน้า'],
  p6: ['น้ำหอม', 'ปาร์ฟูม'],
  p7: ['หม้อทอด', 'ทอดไร้น้ำมัน', 'แอร์ฟรายเออร์'],
  p8: ['ผ้าปูที่นอน', 'เครื่องนอน', 'ผ้าปู'],
  p9: ['รถเข็นเด็ก', 'รถเข็น', 'เด็กอ่อน'],
  p10: ['ของเล่น', 'เด็ก', 'ของขวัญ', 'ไม้'],
  p11: ['เสื่อโยคะ', 'โยคะ', 'ออกกำลังกาย'],
  p12: ['โปรตีน', 'เวย์', 'อาหารเสริม', 'ฟิตเนส'],
  p13: ['กาแฟ', 'เมล็ดกาแฟ'],
  p14: ['น้ำผึ้ง'],
  p15: ['คีย์บอร์ด', 'เกมมิ่ง', 'แมคคานิคอล'],
  p16: ['พาวเวอร์แบงค์', 'แบตสำรอง', 'ชาร์จ'],
  p17: ['กล้องติดรถ', 'กล้องหน้ารถ', 'แดชแคม'],
  p18: ['สีอะคริลิค', 'วาดภาพ', 'งานอดิเรก', 'ศิลปะ']
};

const CATS = [
  { n: 'อิเล็กทรอนิกส์', g: 'อ', i: 'smartphone' },
  { n: 'แฟชั่น', g: 'ฟ', i: 'shirt' },
  { n: 'ความงาม', g: 'ค', i: 'sparkles' },
  { n: 'ของใช้ในบ้าน', g: 'บ', i: 'home' },
  { n: 'แม่และเด็ก', g: 'ม', i: 'baby' },
  { n: 'สุขภาพและกีฬา', g: 'ส', i: 'dumbbell' },
  { n: 'ของชำและเครื่องดื่ม', g: 'ช', i: 'shopping-basket' },
  { n: 'คอมพิวเตอร์และแก็ดเจ็ต', g: 'ค', i: 'laptop' },
  { n: 'ยานยนต์', g: 'ย', i: 'car' },
  { n: 'หนังสือและงานอดิเรก', g: 'ห', i: 'book-open' }
];

const PROVINCES = ['ทั้งหมด', 'กรุงเทพฯ', 'จีน', 'เกาหลีใต้', 'เชียงใหม่', 'สหรัฐอเมริกา'];
const ALL_PROVINCES = ['กรุงเทพมหานคร', 'เชียงใหม่', 'ขอนแก่น', 'ภูเก็ต', 'นครราชสีมา', 'สงขลา', 'อุบลราชธานี'];

const HEROES = [
  { t: 'มหกรรมลดราคาส่งท้ายเดือน', s: 'ลดสูงสุด 70% ทุกหมวดหมู่ พร้อมส่งฟรีทั่วประเทศ', cta: 'ช้อปเลย' },
  { t: 'อิเล็กทรอนิกส์และแก็ดเจ็ตสุดฮอต', s: 'หูฟัง สมาร์ทวอทช์ และอุปกรณ์ไอทีลดพิเศษ', cta: 'ดูสินค้าไอที' },
  { t: 'แฟชั่นมาใหม่ทุกสัปดาห์', s: 'เสื้อผ้า รองเท้า กระเป๋า จากแบรนด์ทั่วโลก', cta: 'สำรวจแฟชั่น' },
  { t: 'ของใช้ในบ้าน ราคาโรงงาน', s: 'เครื่องใช้ไฟฟ้าและของแต่งบ้านคุณภาพดี', cta: 'ช้อปของแต่งบ้าน' },
  { t: 'บิวตี้ยอดนิยมจากทั่วโลก', s: 'สกินแคร์และเครื่องสำอางแท้ 100% การันตี', cta: 'เลือกซื้อความงาม' },
  { t: 'แม่และเด็ก ครบทุกความต้องการ', s: 'ของเล่น เสื้อผ้า และอุปกรณ์เด็กปลอดภัยได้มาตรฐาน', cta: 'ดูสินค้าแม่และเด็ก' }
];

/* ============================== STATE ============================== */

const orderId = 'OS' + Math.floor(2e7 + Math.random() * 8e7);
let flashEnd = Date.now() + 5 * 3600e3 + 23 * 60e3;
let qrEnd = 0;
let aicwGenerateTimer = null;

const state = {
  screen: 'home', pid: 'p1', cart: [], query: '', province: 'ทั้งหมด', cat: null,
  mode: 'retail', qty: 1, visible: 10, slide: 0, now: Date.now(),
  ship: 'flash', pay: 'promptpay', voucher: '', voucherOk: false,
  reviewFilter: 'ทั้งหมด', shipTo: 'กรุงเทพมหานคร', cookieOpen: true, menuOpen: false,
  quoteSent: false, addedToast: false, shop: null,
  vw: window.innerWidth,
  aiOpen: false, aiTyping: false, aiDraft: '',
  aiMessages: [{ role: 'bot', text: 'สวัสดีค่ะ ดิฉันเป็นผู้ช่วยช้อปปิ้ง AI ของ SME.GO บอกดิฉันได้เลยว่าคุณกำลังมองหาอะไร เช่น "หูฟังไร้สายราคาไม่เกิน 1,500" แล้วดิฉันจะช่วยหาสินค้าที่ใช่ให้ค่ะ' }],

  sellerSection: 'studio', sellerTab: 'todo', sellerOptimized: [],
  sellerStockLog: [], sellerInsightsRange: '7d',
  aicwOpen: false, aicwMode: 'edit', aicwPid: null, aicwKeywords: '',
  aicwGenerating: false, aicwDraft: null,
  aicwImages: [], aicwDragOver: false, aicwEnhancing: []
};

function setState(patch) {
  Object.assign(state, typeof patch === 'function' ? patch(state) : patch);
  render();
}

/* ============================== HELPERS ============================== */

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function baht(n) { return '฿' + Math.round(n).toLocaleString('en-US'); }
function compact(n) { return n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1) + ' พัน' : String(n); }
const STAR_PATH = 'M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L7.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L3.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z';
function starIcon(size) { return `<svg viewBox="0 0 24 24" class="star-ic${size === 'lg' ? ' star-ic-lg' : ''}" aria-hidden="true"><path d="${STAR_PATH}"/></svg>`; }
function starIconEmpty(size) { return `<svg viewBox="0 0 24 24" class="star-ic star-ic-empty${size === 'lg' ? ' star-ic-lg' : ''}" aria-hidden="true"><path d="${STAR_PATH}"/></svg>`; }
function starRow(str, size) { return str.split('').map(c => c === '☆' ? starIconEmpty(size) : starIcon(size)).join(''); }

// Sharp-edged filled sparkle glyph for the AI assistant — replaces lucide's
// "sparkles" outline (rounded stroke caps/joins read as soft); this one is a
// solid fill with crisp diamond points for a more modern AI-product look.
const AI_SPARK_PATH = 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 0 0 1.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z';
function aiSparkIcon() { return `<svg viewBox="0 0 24 24" class="pill-icon ai-spark-ic" aria-hidden="true"><path d="${AI_SPARK_PATH}"/></svg>`; }
function find(id) { return PRODUCTS.find(p => p.id === id) || PRODUCTS[0]; }
function pad(n) { return String(n).padStart(2, '0'); }
function unitPrice(p, qty, mode) {
  if (mode !== 'wholesale') return p.price;
  if (qty >= 50) return Math.round(p.price * 0.77);
  if (qty >= 10) return Math.round(p.price * 0.89);
  return p.price;
}
function go(screen) { setState({ screen, menuOpen: false }); window.scrollTo(0, 0); }

function addItem(p, qty, mode) {
  const key = p.id + ':' + mode;
  const cart = state.cart.slice();
  const i = cart.findIndex(c => c.key === key);
  if (i >= 0) cart[i] = { ...cart[i], qty: cart[i].qty + qty };
  else cart.push({ key, id: p.id, qty, mode });
  setState({ cart, addedToast: true });
  clearTimeout(addItem._t);
  addItem._t = setTimeout(() => setState({ addedToast: false }), 2200);
}

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1602078149001-aff343c2e189',
  'https://images.unsplash.com/photo-1707485122968-56916bd2c464',
  'https://images.unsplash.com/photo-1558769132-cb1aea458c5e',
  'https://images.unsplash.com/photo-1693578616322-c8abe6c7393d',
  'https://images.unsplash.com/photo-1587055682234-853183f4523c',
  'https://images.unsplash.com/photo-1509913265763-b64490c3c1b3'
];

const CAT_KEYWORDS = {
  'อิเล็กทรอนิกส์': 'electronics,gadgets',
  'แฟชั่น': 'fashion,clothing',
  'ความงาม': 'cosmetics,beauty,skincare',
  'ของใช้ในบ้าน': 'homeware,furniture',
  'แม่และเด็ก': 'baby,kids,products',
  'สุขภาพและกีฬา': 'fitness,sports,wellness',
  'ของชำและเครื่องดื่ม': 'grocery,food,drink',
  'คอมพิวเตอร์และแก็ดเจ็ต': 'computer,gadget,tech',
  'ยานยนต์': 'automotive,car,accessories',
  'หนังสือและงานอดิเรก': 'books,hobby,craft'
};
function catKeyword(cat) { return CAT_KEYWORDS[cat] || 'retail'; }
function productQuery(p) { return PRODUCT_QUERY[p.id] || catKeyword(p.cat); }

function hashSeed(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h % 100000;
}

function imgSlot(label, extraClass, tags, seed) {
  if (!tags) return `<div class="img-slot ${extraClass || ''}">${esc(label)}</div>`;
  let src;
  if (tags.indexOf('http') === 0) {
    src = `${tags}?auto=format&fit=crop&w=1200&h=1200&q=80`;
  } else {
    const lock = hashSeed(tags + '-' + String(seed || label));
    src = `https://loremflickr.com/1200/1200/${tags}?lock=${lock}`;
  }
  return `<img class="img-slot-photo ${extraClass || ''}" data-extra="${esc(extraClass || '')}" src="${src}" alt="${esc(label)}" loading="lazy">`;
}

function imgErrorFallback(e) {
  const img = e.target;
  if (!img || img.tagName !== 'IMG' || !img.classList.contains('img-slot-photo')) return;
  const div = document.createElement('div');
  div.className = 'img-slot ' + (img.dataset.extra || '');
  div.textContent = img.alt || '';
  img.replaceWith(div);
}

/* ============================== QR GRAPHIC ============================== */

function qrGraphicHtml() {
  const N = 25, seed = 7;
  const inBox = (r, c, r0, c0) => r >= r0 && r < r0 + 7 && c >= c0 && c < c0 + 7;
  const ring = (r, c, r0, c0) => {
    const dr = r - r0, dc = c - c0;
    const edge = dr === 0 || dr === 6 || dc === 0 || dc === 6;
    const core = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
    return edge || core;
  };
  const finder = (r, c) => {
    if (inBox(r, c, 0, 0)) return ring(r, c, 0, 0);
    if (inBox(r, c, 0, N - 7)) return ring(r, c, 0, N - 7);
    if (inBox(r, c, N - 7, 0)) return ring(r, c, N - 7, 0);
    return null;
  };
  let cells = '';
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      const f = finder(r, c);
      const on = f === null ? ((r * 7 + c * 13 + ((r * c * seed) % 5)) % 3 === 0) : f;
      cells += `<div style="background:${on ? '#1E293B' : 'transparent'}"></div>`;
    }
  }
  return `<div class="qr-grid" style="grid-template-columns:repeat(${N},1fr)">${cells}</div>`;
}

/* ============================== DERIVED VIEW MODEL ============================== */

function view() {
  const st = state;
  const vw = st.vw;
  const pdpWide = vw >= 1180;
  const feedCols = vw < 560 ? 2 : vw < 860 ? 3 : vw < 1120 ? 4 : 5;

  const card = p => {
    const hasDisc = !!p.old;
    return {
      ...p,
      slot: 'img-' + p.id, ph: p.cat,
      priceText: baht(p.price),
      oldText: hasDisc ? baht(p.old) : '',
      hasDisc,
      discText: hasDisc ? '-' + Math.round((1 - p.price / p.old) * 100) + '%' : '',
      soldText: 'ขายแล้ว ' + compact(p.sold),
      ratingText: p.rating.toFixed(1)
    };
  };

  const q = st.query.trim();
  let feedAll = PRODUCTS.filter(p => {
    if (st.cat && p.cat !== st.cat) return false;
    if (!q) return true;
    return (p.name + p.shop + p.province + p.cat).indexOf(q) >= 0;
  });
  const total = feedAll.length;
  const feed = feedAll.slice(0, st.visible).map(card);

  const remain = Math.max(0, flashEnd - st.now);
  const p = find(st.pid);
  const unit = unitPrice(p, st.qty, st.mode);
  const isWholesale = st.mode === 'wholesale';

  const cartItems = st.cart.map(c => {
    const prod = find(c.id);
    const u = unitPrice(prod, c.qty, c.mode);
    return {
      ...prod, key: c.key, qty: c.qty, mode: c.mode,
      unitText: baht(u) + ' / ชิ้น',
      modeText: c.mode === 'wholesale' ? 'ราคาขายส่ง (B2B)' : 'ราคาปลีก (B2C)',
      lineTotal: baht(u * c.qty),
      line: u * c.qty
    };
  });

  const shipFees = { post: 35, flash: 45, kerry: 60 };
  const subtotal = cartItems.reduce((a, b) => a + b.line, 0);
  const shipFee = cartItems.length ? shipFees[st.ship] : 0;
  const discount = st.voucherOk ? Math.round(subtotal * 0.1) : 0;
  const grand = subtotal + shipFee - discount;

  const groups = [];
  cartItems.forEach(it => {
    let g = groups.find(x => x.shop === it.shop);
    if (!g) { g = { shop: it.shop, province: it.province, items: [], voucherText: 'ส่งฟรีเมื่อซื้อครบ ฿500 จากร้านนี้' }; groups.push(g); }
    g.items.push(it);
  });

  const qrRemain = Math.max(0, qrEnd - st.now);

  return {
    st, vw, pdpWide, feedCols, feed, total, q, remain, p, unit, isWholesale,
    cartItems, subtotal, shipFee, discount, grand, groups, qrRemain, card
  };
}

/* ============================== AI SHOPPING ASSISTANT ============================== */

const AI_NAME = 'ผู้ช่วยช้อปปิ้ง AI';
const AI_SUGGESTIONS = [
  'หูฟังไร้สายราคาไม่เกิน 1,500',
  'ของขวัญให้เด็กอายุ 5 ขวบ',
  'สกินแคร์สำหรับผิวแพ้ง่าย',
  'รองเท้าผ้าใบผู้ชาย ลดราคา'
];

function aiParsePriceCeiling(q) {
  const hasCeilingWord = /ไม่เกิน|ต่ำกว่า|ถูกกว่า|งบ|under|below/i.test(q);
  if (!hasCeilingWord) return null;
  const m = q.replace(/,/g, '').match(/(\d{2,6})/);
  return m ? Number(m[1]) : null;
}

function aiFindCategory(q) {
  return CATS.find(c => q.indexOf(c.n) >= 0) || null;
}

function aiSearchProducts(query) {
  const q = query.trim().toLowerCase();
  const priceCeil = aiParsePriceCeiling(q);
  const cat = aiFindCategory(query);
  // Also fold in any English words the query itself contains — useful for
  // brand/model names typed in Latin script, which DO have real spaces.
  const englishTerms = q.replace(/[0-9,]/g, ' ').split(/\s+/).filter(t => /[a-z]/i.test(t) && t.length > 2);

  const withKeywordScore = PRODUCTS.map(p => {
    let keywordScore = 0;
    (AI_KEYWORDS[p.id] || []).forEach(kw => { if (q.indexOf(kw.toLowerCase()) >= 0) keywordScore += 3; });
    const hayEn = (p.name + ' ' + p.shop).toLowerCase();
    englishTerms.forEach(t => { if (hayEn.indexOf(t) >= 0) keywordScore += 2; });
    return { p, keywordScore };
  });

  // A specific item was named (e.g. "หูฟังไร้สาย") — relevance should win,
  // so don't dilute the list with unrelated items that merely fit the price
  // range. Only fall back to broad price/category browsing when nothing
  // matched a keyword at all (e.g. "มีอะไรราคาไม่เกิน 500 บ้าง").
  const hasKeywordMatch = withKeywordScore.some(x => x.keywordScore > 0);
  const pool = hasKeywordMatch ? withKeywordScore.filter(x => x.keywordScore > 0) : withKeywordScore;

  const scored = pool.map(({ p, keywordScore }) => {
    let score = keywordScore;
    if (cat && p.cat === cat.n) score += 3;
    if (priceCeil != null) {
      if (hasKeywordMatch) score += p.price <= priceCeil ? 1 : 0; // tie-break only
      else score += p.price <= priceCeil ? 2 : -6;
    } else if (!hasKeywordMatch && !cat) {
      score += 1; // plain browsing fallback so popular items still surface
    }
    return { p, score };
  }).filter(x => x.score > 0);

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 4).map(x => x.p);
}

function aiReply(query) {
  const results = aiSearchProducts(query);
  if (results.length) {
    return { text: 'นี่คือสินค้าที่คิดว่าน่าจะตรงกับที่คุณกำลังมองหาค่ะ 😊', products: results };
  }
  const popular = PRODUCTS.slice().sort((a, b) => b.sold - a.sold).slice(0, 4);
  return { text: 'ขอโทษด้วยค่ะ ไม่พบสินค้าที่ตรงกับคำค้นหานี้ ลองดูสินค้ายอดนิยมเหล่านี้แทนไหมคะ', products: popular };
}

function scrollAiToBottom() {
  const box = document.getElementById('aiMessages');
  if (box) box.scrollTop = box.scrollHeight;
}

function submitAiMessage(text) {
  const trimmed = (text || '').trim();
  if (!trimmed || state.aiTyping) return;
  setState(s => ({ aiMessages: s.aiMessages.concat([{ role: 'user', text: trimmed }]), aiTyping: true, aiDraft: '' }));
  scrollAiToBottom();
  clearTimeout(submitAiMessage._t);
  submitAiMessage._t = setTimeout(() => {
    const reply = aiReply(trimmed);
    setState(s => ({ aiMessages: s.aiMessages.concat([{ role: 'bot', text: reply.text, products: reply.products }]), aiTyping: false }));
    scrollAiToBottom();
  }, 700 + Math.random() * 500);
}

/* ============================== AI CONTENT WRITER (SELLER) ============================== */

const AICW_TITLE_SUFFIXES = ['คุณภาพพรีเมียม ส่งไว', 'ของแท้ 100% พร้อมส่ง', 'สินค้าขายดี การันตีคุณภาพ', 'ดีไซน์ทันสมัย ใช้งานได้จริง'];
const AICW_CAPTION_TEMPLATES = [
  '{kw} ที่ใครได้ลองก็ต้องรัก! คุณภาพเกินราคา พร้อมส่งตรงถึงมือคุณ',
  'อัพเกรดชีวิตประจำวันด้วย {kw} คุณภาพพรีเมียม ในราคาที่คุ้มค่าที่สุด!',
  '{kw} ตัวท็อปที่กำลังมาแรง! สั่งเลยวันนี้ ก่อนของหมด'
];
const AICW_BULLETS = ['วัสดุคุณภาพดี ทนทาน ใช้งานได้ยาวนาน', 'จัดส่งรวดเร็ว ภายใน 1-3 วันทำการ', 'รับประกันความพึงพอใจ คืนสินค้าได้ภายใน 7 วัน', 'ร้านค้ายืนยันตัวตนแล้ว มั่นใจได้ 100%'];

function aiGenerateContent(rawInput) {
  const kw = (rawInput || '').trim() || 'สินค้าคุณภาพ';
  const cat = aiFindCategory(kw);
  const seed = hashSeed(kw);

  const title = `${kw} ${AICW_TITLE_SUFFIXES[seed % AICW_TITLE_SUFFIXES.length]}`;
  const caption = AICW_CAPTION_TEMPLATES[seed % AICW_CAPTION_TEMPLATES.length].replace(/\{kw\}/g, kw);
  const intro = `พบกับ${kw} ที่ออกแบบมาเพื่อตอบโจทย์ทุกการใช้งาน${cat ? 'ในหมวด' + cat.n : ''} ด้วยวัสดุคุณภาพสูงและการผลิตที่ใส่ใจในทุกรายละเอียด`;
  const description = intro + '\n\n' + AICW_BULLETS.map(b => '✓ ' + b).join('\n');
  const keywords = Array.from(new Set(
    kw.split(/\s+/).filter(Boolean)
      .concat(cat ? [cat.n] : [])
      .concat(['ของแท้100%', 'ส่งไว', 'สินค้าคุณภาพ'])
  ));

  return { title, caption, description, keywords };
}

function handleAicwFiles(fileList) {
  const files = Array.from(fileList || []).filter(f => f.type.indexOf('image/') === 0);
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      setState(s => ({ aicwImages: s.aicwImages.concat([{ src: reader.result, name: file.name, existing: false, enhanced: false }]) }));
    };
    reader.readAsDataURL(file);
  });
}

function sellerAdjustStock(id, delta) {
  const p = find(id);
  const before = p.stock;
  p.stock = Math.max(0, p.stock + delta);
  const applied = p.stock - before;
  if (applied === 0) return;
  setState(s => ({ sellerStockLog: [{ name: p.name, delta: applied }].concat(s.sellerStockLog).slice(0, 20) }));
}

/* ============================== RENDER: HEADER ============================== */

function renderHeader(vm) {
  const st = vm.st;
  const cartCount = vm.cartItems.reduce((a, b) => a + b.qty, 0);
  const suggestions = vm.q ? PRODUCTS.filter(x => (x.name + x.shop).indexOf(vm.q) >= 0).slice(0, 4) : [];

  return `
  <div class="utility-bar">
    <div class="wrap">
      <div class="utility-left">
        <span class="gov-label">ดาวน์โหลดแอป SME.GO</span>
        <span class="utility-sep">|</span>
        <a href="#">ติดตามคำสั่งซื้อ</a>
        <a href="#">ศูนย์ช่วยเหลือ</a>
        <a href="#" data-action="goSeller" class="utility-ai-link">${aiSparkIcon()}ศูนย์ผู้ขาย</a>
      </div>
      <div class="utility-right">
        <span class="lang-active">TH</span>
        <span class="lang-inactive">EN</span>
      </div>
    </div>
  </div>

  <div class="site-header">
    <div class="header-row">
      <div class="brand" data-action="goHome">
        <img class="brand-mark" src="assets/logo.svg" alt="SME.GO">
      </div>

      <button class="menu-btn" data-action="toggleMenu">
        <span class="menu-icon"><span></span><span></span><span></span></span>
        หมวดหมู่
      </button>

      <div class="search-wrap">
        <input class="search-input" id="searchInput" value="${esc(st.query)}" placeholder="">
        <div class="search-typewriter" id="searchTypewriter" aria-hidden="true"><span id="twText"></span><span class="tw-cursor"></span></div>
        <div class="search-btn">ค้น</div>
        ${vm.q && st.screen === 'home' ? `
        <div class="suggest-panel">
          <div class="suggest-label">คำค้นหาแนะนำ</div>
          ${suggestions.map(s => `<div class="suggest-item" data-action="pickSuggestion" data-id="${s.id}">${esc(s.name)}</div>`).join('')}
        </div>` : ''}
      </div>

      <div class="action-hub">
        <div class="hub-icon">รายการ</div>
        <div class="hub-icon" data-action="goCart">
          ตะกร้า
          ${cartCount > 0 ? `<span class="hub-badge">${cartCount}</span>` : ''}
        </div>
        <div class="hub-sep"></div>
        <div class="hub-profile">
          <img class="hub-avatar" src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=facearea&facepad=2.5&w=128&h=128&q=80" alt="กัญญา">
          <div class="hub-name">กัญญา<div class="hub-verified">ยืนยันตัวตนแล้ว</div></div>
        </div>
      </div>
    </div>

    ${st.menuOpen ? `
    <div class="menu-panel">
      <div class="menu-grid">
        ${CATS.map(c => `
        <div class="menu-cell" data-action="pickCategory" data-cat="${esc(c.n)}">
          <div class="menu-glyph"><svg class="lucide-icon" data-lucide="${c.i}"></svg></div>
          <div class="menu-name">${esc(c.n)}</div>
        </div>`).join('')}
      </div>
    </div>` : ''}
  </div>`;
}

/* ============================== RENDER: HOME ============================== */

function renderHome(vm) {
  const st = vm.st;

  const cdH = Math.floor(vm.remain / 3600e3);
  const cdM = Math.floor(vm.remain / 60e3) % 60;
  const cdS = Math.floor(vm.remain / 1000) % 60;
  _flipPrev.h = cdH; _flipPrev.m = cdM; _flipPrev.s = cdS;

  const flashItems = PRODUCTS.filter(x => x.flash).map(x => {
    const c = vm.card(x);
    const pct = Math.max(8, Math.min(92, Math.round(100 - x.stock / 5)));
    return { ...c, stockPct: pct + '%', stockText: 'เหลือ ' + x.stock + ' ชิ้น' };
  });

  const champions = PRODUCTS.filter(x => st.province === 'ทั้งหมด' || x.province === st.province).slice(0, 4).map(x => ({
    shop: x.shop, province: x.province, level: 'Level 3',
    blurb: 'ร้านค้า' + x.cat + 'ยอดนิยม ได้รับคะแนนรีวิวสูงสุดจากผู้ซื้อ',
    ratingText: x.rating.toFixed(1), ordersText: compact(x.sold), logoQuery: productQuery(x)
  }));

  const feedTitle = st.cat ? 'หมวด ' + st.cat : (vm.q ? 'ผลการค้นหา "' + vm.q + '"' : 'แนะนำสำหรับคุณ');

  return `
  <div data-screen-label="Home">
    <div class="section">
      <div class="hero-grid">
        <div class="hero-main">
          <div class="hero-track" id="heroTrack" style="transform:translateX(-${st.slide * 100}%)">
            ${HEROES.map((h, i) => `
            <div class="hero-slide">
              ${imgSlot('แบนเนอร์แคมเปญ 1200×500', '', HERO_IMAGES[i], 'hero-banner-' + i)}
              <div class="hero-caption">
                <div class="hero-tag"><svg class="pill-icon" data-lucide="star"></svg>แนะนำ</div>
                <div class="hero-title">${esc(h.t)}</div>
                <div class="hero-sub">${esc(h.s)}</div>
                <button type="button" class="hero-cta">${esc(h.cta)}<svg class="pill-icon" data-lucide="arrow-right"></svg></button>
              </div>
            </div>`).join('')}
          </div>
          <button type="button" class="hero-arrow hero-arrow-left" data-action="prevSlide" aria-label="ก่อนหน้า"><svg class="pill-icon" data-lucide="chevron-left"></svg></button>
          <button type="button" class="hero-arrow hero-arrow-right" data-action="nextSlide" aria-label="ถัดไป"><svg class="pill-icon" data-lucide="chevron-right"></svg></button>
          <div class="hero-dots" id="heroDots">
            ${HEROES.map((h, i) => `<div class="hero-dot" data-action="pickSlide" data-slide="${i}" style="width:${i === st.slide ? '20px' : '7px'};background:${i === st.slide ? '#FFFFFF' : 'rgba(255,255,255,.5)'}"></div>`).join('')}
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="card cat-grid">
        ${CATS.map(c => `
        <div class="cat-cell${st.cat === c.n ? ' active' : ''}" data-action="pickCategory" data-cat="${esc(c.n)}">
          <div class="cat-glyph"><svg class="lucide-icon" data-lucide="${c.i}"></svg></div>
          <div class="cat-name">${esc(c.n)}</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="section">
      <div class="card" style="overflow:hidden">
        <div class="flash-head">
          <div class="flash-left">
            <span class="flash-badge"><svg class="pill-icon" data-lucide="zap"></svg>ดีลจำกัดเวลา</span>
            <div class="flash-title">แฟลชเซล ประจำวัน</div>
          </div>
          <div class="flash-right">
            <span class="flash-label">สิ้นสุดใน</span>
            <div class="countdown">
              <div class="count-box"><div class="count-num" id="cd-h">${pad(cdH)}</div><div class="count-unit">HRS</div></div>
              <div class="count-box"><div class="count-num" id="cd-m">${pad(cdM)}</div><div class="count-unit">MINS</div></div>
              <div class="count-box"><div class="count-num" id="cd-s">${pad(cdS)}</div><div class="count-unit">SECS</div></div>
            </div>
            <a href="#" class="flash-link">ดูทั้งหมด</a>
          </div>
        </div>
        <div class="flash-scroll">
          ${flashItems.map(p => `
          <div class="product-card flash-card" data-action="openProduct" data-id="${p.id}">
            <div class="disc-badge">${esc(p.discText)}</div>
            <div class="product-media">
              ${imgSlot(p.ph, '', productQuery(p), p.id)}
            </div>
            <div class="product-body">
              <div class="product-name">${esc(p.name)}</div>
              <div class="price-row">
                <span class="price-now">${p.priceText}</span>
                <span class="price-old">${p.oldText}</span>
              </div>
              <div class="stock-track"><div class="stock-fill" style="width:${p.stockPct}"></div></div>
              <div class="stock-text">${esc(p.stockText)}</div>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="section">
      <div class="card" style="padding:20px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap">
          <div>
            <div style="display:flex;align-items:center;gap:9px">
              <span class="verified-dot" style="width:22px;height:22px;font-size:12px">✓</span>
              <span style="font-size:19px;font-weight:600">ร้านค้าแนะนำ — ผู้ขายยอดนิยม</span>
            </div>
            <div style="font-size:13px;color:var(--slate-body);margin-top:5px">ร้านค้าที่ผ่านการยืนยันตัวตนและได้รับคะแนนรีวิวสูงสุดจากผู้ซื้อทั่วโลก</div>
          </div>
          <div class="chip-row">
            ${PROVINCES.map(n => `<div class="chip ${st.province === n ? 'active' : ''}" data-action="pickProvince" data-province="${esc(n)}">${esc(n)}</div>`).join('')}
          </div>
        </div>
        <div class="champ-grid">
          ${champions.map(m => `
          <div class="champ-card">
            <div class="champ-head">
              <div class="champ-logo">${imgSlot('โลโก้', '', m.logoQuery, m.shop)}</div>
              <div style="min-width:0">
                <div class="champ-name">${esc(m.shop)}</div>
                <div class="champ-province">${esc(m.province)}</div>
              </div>
            </div>
            <div class="verified-chip">✓ ผู้ขายยืนยันตัวตน · ${esc(m.level)}</div>
            <div class="champ-blurb">${esc(m.blurb)}</div>
            <div class="champ-stats">
              <span style="display:inline-flex;align-items:center;gap:3px">${starIcon()} ${m.ratingText}</span>
              <span>${m.ordersText} ออร์เดอร์</span>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>

    <div class="section" style="padding-bottom:40px">
      <div class="feed-head">
        <div class="feed-title">${esc(feedTitle)}</div>
        <div class="feed-count">${vm.total} รายการ</div>
      </div>
      <div class="feed-grid">
        ${vm.feed.map(p => `
        <div class="product-card feed-card" data-action="openProduct" data-id="${p.id}">
          ${p.hasDisc ? `<div class="disc-badge">${esc(p.discText)}</div>` : ''}
          <div class="product-media">
            ${imgSlot(p.ph, '', productQuery(p), p.id)}
          </div>
          <div class="product-body">
            <div class="verified-chip">✓ ผู้ขายยืนยันตัวตน</div>
            <div class="product-name">${esc(p.name)}</div>
            <div class="price-row">
              <span class="price-now">${p.priceText}</span>
              ${p.hasDisc ? `<span class="price-old">${p.oldText}</span>` : ''}
            </div>
            <div class="meta-row">
              ${starIcon()}${p.ratingText}
              <span class="meta-sep">|</span>
              <span>${esc(p.soldText)}</span>
            </div>
            <div class="province-text">${esc(p.province)}</div>
          </div>
        </div>`).join('')}
      </div>
      ${st.visible < vm.total ? `
      <div class="load-more-wrap">
        <button class="btn btn-outline solid-hover" data-action="loadMore">โหลดสินค้าเพิ่มเติม</button>
      </div>` : ''}
    </div>
  </div>`;
}

/* ============================== RENDER: PDP ============================== */

function renderPdp(vm) {
  const st = vm.st, p = vm.p, unit = vm.unit, isWholesale = vm.isWholesale;
  const reviewCount = Math.round(p.sold / 7);
  const hasDisc = isWholesale ? unit < p.price : !!p.old;
  const discText = isWholesale ? '-' + Math.round((1 - unit / p.price) * 100) + '%' : (p.old ? '-' + Math.round((1 - p.price / p.old) * 100) + '%' : '');
  const priceNote = isWholesale ? 'ราคาต่อหน่วยปรับอัตโนมัติตามจำนวนที่สั่ง · ยังไม่รวมภาษีมูลค่าเพิ่ม' : 'รวมภาษีมูลค่าเพิ่มแล้ว · จัดส่งจาก ' + p.province;
  const pdDesc = 'สินค้าคุณภาพจากผู้ขายที่ผ่านการยืนยันตัวตนแล้ว จัดส่งจาก' + p.province + ' พร้อมบรรจุภัณฑ์มาตรฐานและการรับประกันความพึงพอใจจากร้านค้า รองรับการสั่งซื้อทั้งแบบรายชิ้นและแบบขายส่งสำหรับองค์กร';

  const specs = [
    { k: 'หมวดหมู่', v: p.cat }, { k: 'จัดส่งจาก', v: p.province },
    { k: 'ระดับผู้ขาย', v: 'Level 3 — ร้านค้ายอดนิยม' }, { k: 'การรับประกัน', v: 'รับประกันสินค้าแท้ 100%' },
    { k: 'พร้อมส่ง', v: p.stock + ' ชิ้น' }, { k: 'รหัสสินค้า', v: p.id.toUpperCase() + '-2569' }
  ];

  const tiers = [
    { range: '1 – 9 ชิ้น', price: baht(p.price), save: '—', lo: 1, hi: 9 },
    { range: '10 – 49 ชิ้น', price: baht(Math.round(p.price * 0.89)), save: '11%', lo: 10, hi: 49 },
    { range: '50 ชิ้นขึ้นไป', price: baht(Math.round(p.price * 0.77)), save: '23%', lo: 50, hi: 1e9 }
  ];

  const ratingBars = [5, 4, 3, 2, 1].map((s, i) => ({ star: s, n: [820, 190, 42, 11, 4][i], pct: [82, 19, 5, 2, 1][i] + '%' }));
  const reviewChips = ['ทั้งหมด', '5 ดาว', 'มีรูปภาพ', 'ผู้ซื้อยืนยันแล้ว'];
  const reviews = [
    { avatar: 'https://images.unsplash.com/photo-1607569708758-0270aa4651bd', name: 'ณัฐพร ว.', stars: '★★★★★', date: '12 ส.ค. 2569', text: 'งานฝีมือประณีตมาก แพ็กมาอย่างดี ส่งถึงภายในสองวัน ตรงปกทุกอย่าง' },
    { avatar: 'https://images.unsplash.com/photo-1583264277168-58ceba4b84e7', name: 'สุริยา ก.', stars: '★★★★★', date: '8 ส.ค. 2569', text: 'สั่งซื้อแบบขายส่งไปทำของชำร่วยบริษัท ผู้ขายออกใบกำกับภาษีให้เรียบร้อย' },
    { avatar: 'https://images.unsplash.com/photo-1623717217554-72ca676de535', name: 'พิมพ์ชนก อ.', stars: '★★★★☆', date: '2 ส.ค. 2569', text: 'คุณภาพดีตามราคา อยากให้มีตัวเลือกสีเพิ่มอีกหน่อย' }
  ].filter(r => st.reviewFilter !== '5 ดาว' || r.stars.indexOf('☆') < 0);

  const carriers = [
    { name: 'ไปรษณีย์ไทย', eta: '3–4 วันทำการ', fee: baht(35) },
    { name: 'Flash Express', eta: '1–2 วันทำการ', fee: baht(45) },
    { name: 'Kerry Express', eta: '1 วันทำการ', fee: baht(60) }
  ];

  return `
  <div data-screen-label="Product detail" class="container" style="padding:16px 16px 40px">
    <div class="breadcrumb">
      <span class="crumb-link" data-action="goHome">หน้าแรก</span> / ${esc(p.cat)} / <span class="crumb-current">${esc(p.name)}</span>
    </div>

    <div class="pdp-grid">
      <div class="gallery-card" ${vm.pdpWide ? '' : 'style="max-width:440px"'}>
        <div class="gallery-main">${imgSlot('ภาพสินค้าหลัก 1:1', '', productQuery(p), p.id + '-main')}</div>
        <div class="gallery-thumbs">
          ${[0, 1, 2, 3, 4].map(i => `<div class="gallery-thumb ${i === 0 ? 'active' : ''}">${imgSlot('มุมที่ ' + (i + 1), '', productQuery(p), p.id + '-' + i)}</div>`).join('')}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="pdp-info-card">
          <div class="pdp-badges">
            <span class="badge-verified">✓ ผู้ขายยืนยันตัวตน</span>
            <span class="badge-cat">${esc(p.cat)}</span>
          </div>
          <h1 class="pdp-title">${esc(p.name)}</h1>
          <div class="pdp-meta">
            <span>${starIcon()} <b style="color:var(--slate-dark)">${p.rating.toFixed(1)}</b></span>
            <span class="meta-sep">|</span>
            <span>${reviewCount} รีวิว</span>
            <span class="meta-sep">|</span>
            <span>ขายแล้ว ${compact(p.sold)} ชิ้น</span>
          </div>

          <div class="mode-toggle">
            <div class="mode-btn ${!isWholesale ? 'active' : ''}" data-action="setRetail">ซื้อปลีก (B2C)</div>
            <div class="mode-btn ${isWholesale ? 'active' : ''}" data-action="setWholesale">ซื้อส่ง (B2B)</div>
          </div>

          <div class="price-box">
            <div style="display:flex;align-items:baseline;gap:12px;flex-wrap:wrap">
              <span class="price-big">${baht(unit)}</span>
              ${hasDisc ? `
              <span class="price-old" style="font-size:15px">${p.old ? baht(p.old) : baht(p.price)}</span>
              <span class="disc-pill">${discText}</span>` : ''}
            </div>
            <div class="price-note">${priceNote}</div>
          </div>

          ${isWholesale ? `
          <div style="margin-top:16px">
            <div style="font-size:15px;font-weight:500;margin-bottom:10px">ราคาขายส่งแบบขั้นบันได</div>
            <div class="tier-table">
              <div class="tier-head"><span>จำนวน</span><span>ราคาต่อหน่วย</span><span>ประหยัด</span></div>
              ${tiers.map(t => `
              <div class="tier-row ${st.qty >= t.lo && st.qty <= t.hi ? 'active' : ''}">
                <span style="color:#334155">${esc(t.range)}</span>
                <span style="font-weight:700;color:var(--slate-dark)">${t.price}</span>
                <span class="tier-save">${esc(t.save)}</span>
              </div>`).join('')}
            </div>
            <button class="btn btn-outline solid-hover btn-block" style="margin-top:12px" data-action="requestQuote">ขอใบเสนอราคา (สำหรับองค์กร)</button>
            ${st.quoteSent ? `<div class="notice-green">ส่งคำขอใบเสนอราคาแล้ว ผู้ขายจะติดต่อกลับภายใน 24 ชั่วโมง</div>` : ''}
          </div>` : ''}

          <div class="qty-row">
            <span style="font-size:13.5px;color:var(--slate-body)">จำนวน</span>
            <div class="qty-stepper">
              <div class="qty-btn" data-action="decQty">−</div>
              <div class="qty-val">${st.qty}</div>
              <div class="qty-btn" data-action="incQty">+</div>
            </div>
            <span style="font-size:12.5px;color:var(--slate-body)">คงเหลือ ${p.stock} ชิ้น</span>
            <span style="margin-left:auto;font-size:13.5px;color:var(--slate-body)">รวม <b class="num" style="font-size:17px;color:var(--slate-dark)">${baht(unit * st.qty)}</b></span>
          </div>

          <div class="cta-row">
            <button class="btn btn-outline" data-action="addToCart">เพิ่มลงตะกร้า</button>
            <button class="btn btn-primary" data-action="buyNow">ซื้อทันที</button>
          </div>
          ${st.addedToast ? `<div class="notice-green">เพิ่มสินค้าลงตะกร้าแล้ว</div>` : ''}
        </div>

        <div class="pdp-info-card">
          <div style="font-size:16px;font-weight:500;margin-bottom:12px">รายละเอียดสินค้า</div>
          <div class="spec-desc">${esc(pdDesc)}</div>
          <div class="spec-grid">
            ${specs.map(s => `<div class="spec-row"><span class="spec-key">${esc(s.k)}</span><span style="color:var(--slate-dark)">${esc(s.v)}</span></div>`).join('')}
          </div>
        </div>

        <div class="pdp-info-card">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap">
            <div style="font-size:16px;font-weight:500">รีวิวจากผู้ซื้อ</div>
            <div class="chip-row">
              ${reviewChips.map(l => `<div class="chip small ${st.reviewFilter === l ? 'active' : ''}" data-action="pickReviewFilter" data-filter="${esc(l)}">${esc(l)}</div>`).join('')}
            </div>
          </div>
          <div class="review-summary">
            <div style="text-align:center">
              <div class="review-score">${p.rating.toFixed(1)}</div>
              <div style="color:var(--amber-text);font-size:13px">${starRow('★★★★★', 'lg')}</div>
              <div style="font-size:11.5px;color:var(--slate-body);margin-top:3px">${reviewCount} รีวิว</div>
            </div>
            <div class="review-bars">
              ${ratingBars.map(b => `
              <div class="bar-row">
                <span style="width:28px;display:inline-flex;align-items:center;gap:2px">${b.star}${starIcon()}</span>
                <span class="bar-track"><span class="bar-fill" style="width:${b.pct}"></span></span>
                <span style="width:38px;text-align:right">${b.n}</span>
              </div>`).join('')}
            </div>
          </div>
          <div>
            ${reviews.map(r => `
            <div class="review-item">
              <img class="review-avatar" src="${esc(r.avatar)}?auto=format&fit=facearea&facepad=2.5&w=96&h=96&q=80" alt="${esc(r.name)}">
              <div style="flex:1">
                <div class="review-head">
                  <span style="font-size:13.5px;color:var(--slate-dark)">${esc(r.name)}</span>
                  <span style="color:var(--amber-text);font-size:12px">${starRow(r.stars)}</span>
                  <span class="review-verified">ผู้ซื้อที่ยืนยันแล้ว</span>
                  <span class="review-date">${esc(r.date)}</span>
                </div>
                <div class="review-text">${esc(r.text)}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>

      <div class="pdp-side-col">
        <div class="shop-card">
          <div class="shop-head">
            <div class="shop-logo">${imgSlot('โลโก้ร้าน', '', productQuery(p), p.shop)}</div>
            <div style="min-width:0">
              <div style="font-size:14.5px;font-weight:500;color:var(--slate-dark)">${esc(p.shop)}</div>
              <div style="font-size:11.5px;color:var(--slate-body)">${esc(p.province)}</div>
            </div>
          </div>
          <div class="shop-verify-box">
            <div class="shop-verify-title">✓ ร้านค้ายืนยันตัวตนแล้ว</div>
            <div class="num" style="font-size:11.5px;color:var(--slate-body);margin-top:5px">Reg. 0105558xxxxx · TSIC 47912</div>
            <div style="font-size:11.5px;color:var(--slate-body);margin-top:3px">ระดับผู้ขาย: Level 3 — ร้านค้ายอดนิยม</div>
          </div>
          <div class="shop-actions">
            <button class="shop-btn">แชทเลย</button>
            <button class="shop-btn" data-action="visitStore" data-shop="${esc(p.shop)}">เยี่ยมชมร้าน</button>
          </div>
        </div>

        <div class="shop-card ship-card">
          <div style="font-size:14.5px;font-weight:500;margin-bottom:10px">คำนวณค่าจัดส่ง</div>
          <select id="shipToSelect">
            ${ALL_PROVINCES.map(v => `<option value="${esc(v)}" ${st.shipTo === v ? 'selected' : ''}>${esc(v)}</option>`).join('')}
          </select>
          <div style="margin-top:11px;display:flex;flex-direction:column;gap:8px">
            ${carriers.map(c => `
            <div class="carrier-row">
              <div>
                <div style="color:var(--slate-dark)">${esc(c.name)}</div>
                <div style="font-size:11.5px;color:var(--slate-body)">${esc(c.eta)}</div>
              </div>
              <div class="num" style="font-weight:700;color:var(--slate-dark)">${c.fee}</div>
            </div>`).join('')}
          </div>
        </div>

        <div class="protection-box">
          <div class="protection-title">การคุ้มครองผู้ซื้อ</div>
          <div class="protection-text">เงินของคุณจะถูกพักไว้ในระบบคุ้มครองผู้ซื้อ จนกว่าคุณจะกดยืนยันรับสินค้า หรือระบบขนส่งยืนยันการส่งมอบ + 3 วัน</div>
        </div>
      </div>
    </div>
  </div>`;
}

/* ============================== RENDER: CART ============================== */

function renderCart(vm) {
  const cartEmpty = vm.cartItems.length === 0;
  return `
  <div data-screen-label="Cart" class="container" style="padding:22px 16px 40px">
    <h2 style="margin:0 0 16px;font-size:22px;font-weight:500">ตะกร้าสินค้า</h2>
    ${cartEmpty ? `
    <div class="empty-cart">
      <div style="font-size:16px;color:#334155">ยังไม่มีสินค้าในตะกร้า</div>
      <button class="btn btn-primary" style="margin-top:16px" data-action="goHome">เลือกซื้อสินค้า</button>
    </div>` : `
    <div class="side-grid">
      <div style="display:flex;flex-direction:column;gap:14px">
        ${vm.groups.map(g => `
        <div class="cart-group">
          <div class="cart-group-head">
            <span class="verified-dot">✓</span>
            <span style="font-size:14.5px;font-weight:500">${esc(g.shop)}</span>
            <span style="font-size:12px;color:var(--slate-body)">· ${esc(g.province)}</span>
          </div>
          ${g.items.map(it => `
          <div class="cart-item">
            <div class="cart-thumb">${imgSlot('สินค้า', '', productQuery(it), it.id)}</div>
            <div style="flex:1;min-width:0">
              <div style="font-size:14px;color:#334155;line-height:1.45">${esc(it.name)}</div>
              <div style="font-size:12px;color:var(--slate-body);margin-top:4px">${esc(it.modeText)}</div>
              <div class="cart-item-controls">
                <div class="qty-stepper">
                  <div class="qty-btn" data-action="cartDec" data-key="${esc(it.key)}">−</div>
                  <div class="qty-val" style="width:44px">${it.qty}</div>
                  <div class="qty-btn" data-action="cartInc" data-key="${esc(it.key)}">+</div>
                </div>
                <span class="cart-remove" data-action="cartRemove" data-key="${esc(it.key)}">ลบ</span>
              </div>
            </div>
            <div style="text-align:right;flex-shrink:0">
              <div class="cart-line-total">${it.lineTotal}</div>
              <div class="cart-unit">${it.unitText}</div>
            </div>
          </div>`).join('')}
          <div class="voucher-note">
            <span class="voucher-pill">คูปองร้านค้า</span>
            ${esc(g.voucherText)}
          </div>
        </div>`).join('')}
      </div>

      <div class="summary-card">
        <div class="summary-title">สรุปคำสั่งซื้อ</div>
        <div class="summary-rows">
          <div class="summary-row"><span class="summary-label">ยอดรวมสินค้า</span><span class="num" style="color:var(--slate-dark)">${baht(vm.subtotal)}</span></div>
          <div class="summary-row"><span class="summary-label">ค่าจัดส่ง</span><span class="num" style="color:var(--slate-dark)">${baht(vm.shipFee)}</span></div>
          <div class="summary-row"><span class="summary-label">ส่วนลดคูปองแพลตฟอร์ม</span><span class="num" style="color:var(--emerald-verified)">${vm.discount ? '−' + baht(vm.discount) : '฿0'}</span></div>
          <div class="summary-divider"></div>
          <div class="summary-total"><span class="summary-total-label">ยอดชำระทั้งหมด</span><span class="summary-total-value">${baht(vm.grand)}</span></div>
        </div>
        <button class="btn btn-primary btn-block" style="margin-top:16px;padding:13px" data-action="goCheckout">ดำเนินการชำระเงิน</button>
        <div class="summary-fineprint">คุ้มครองด้วยระบบรักษาความปลอดภัยการชำระเงิน · ชำระผ่าน PromptPay, บัตรเครดิต หรือ e-Wallet</div>
      </div>
    </div>`}
  </div>`;
}

/* ============================== RENDER: CHECKOUT ============================== */

function renderCheckout(vm) {
  const st = vm.st;
  const steps = [
    { n: '1', label: 'ตะกร้า' }, { n: '2', label: 'ชำระเงิน' }, { n: '3', label: 'สำเร็จ' }
  ];
  const idx = { cart: 0, checkout: 1, qr: 1, paid: 2 }[st.screen] ?? 1;

  const shipOptions = [
    { v: 'post', name: 'ไปรษณีย์ไทย — ลงทะเบียน', eta: 'ถึงภายใน 3–4 วันทำการ', fee: baht(35) },
    { v: 'flash', name: 'Flash Express', eta: 'ถึงภายใน 1–2 วันทำการ', fee: baht(45) },
    { v: 'kerry', name: 'Kerry Express — ด่วนพิเศษ', eta: 'ถึงภายในวันถัดไป', fee: baht(60) }
  ];
  const payOptions = [
    { v: 'promptpay', name: 'PromptPay QR', note: 'ยืนยันอัตโนมัติภายในไม่กี่วินาที', badge: true },
    { v: 'card', name: 'บัตรเครดิต / เดบิต', note: 'รองรับ Visa, Mastercard, JCB ผ่าน Omise', badge: false },
    { v: 'wallet', name: 'e-Wallet', note: 'TrueMoney Wallet, LINE Pay', badge: false },
    { v: 'bank', name: 'โอนผ่านบัญชีธนาคาร', note: 'ยืนยันภายใน 1–2 ชั่วโมงทำการ', badge: false }
  ];
  const payLabel = st.pay === 'promptpay' ? 'สร้าง QR PromptPay' : 'ยืนยันการชำระเงิน';

  return `
  <div data-screen-label="Checkout" class="container" style="padding:22px 16px 40px">
    <div class="steps-row">
      ${steps.map((s, i) => `
      <div class="step">
        <span class="step-num" style="background:${i <= idx ? 'var(--brand-blue)' : 'var(--border-subtle)'};color:${i <= idx ? '#fff' : 'var(--slate-body)'}">${s.n}</span>
        <span class="step-label" style="color:${i <= idx ? 'var(--slate-dark)' : 'var(--slate-body)'}">${s.label}</span>
        <span class="step-line"></span>
      </div>`).join('')}
    </div>

    <div class="side-grid">
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="summary-card">
          <div class="summary-title">ที่อยู่จัดส่ง</div>
          <div class="address-box">
            <div class="address-name">กัญญา ศรีสุวรรณ · <span class="num">081-234-5678</span></div>
            <div class="address-detail">88/12 ซอยสุขุมวิท 31 แขวงคลองตันเหนือ เขตวัฒนา ${esc(st.shipTo)} 10110</div>
            <div class="address-tags">
              <span class="tag-default">ค่าเริ่มต้น</span>
              <span class="tag-change">เปลี่ยนที่อยู่</span>
            </div>
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-title">รูปแบบการจัดส่ง</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${shipOptions.map(o => `
            <div class="option-row ${st.ship === o.v ? 'selected' : ''}" data-action="pickShip" data-ship="${o.v}">
              <span class="option-dot"><span class="option-dot-inner"></span></span>
              <div style="flex:1">
                <div class="option-name">${esc(o.name)}</div>
                <div class="option-sub">${esc(o.eta)}</div>
              </div>
              <div class="option-fee">${o.fee}</div>
            </div>`).join('')}
          </div>
        </div>

        <div class="summary-card">
          <div class="summary-title">วิธีการชำระเงิน</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${payOptions.map(o => `
            <div class="option-row ${st.pay === o.v ? 'selected' : ''}" data-action="pickPay" data-pay="${o.v}">
              <span class="option-dot"><span class="option-dot-inner"></span></span>
              <div style="flex:1">
                <div class="option-name">${esc(o.name)}</div>
                <div class="option-sub">${esc(o.note)}</div>
              </div>
              ${o.badge ? `<span class="option-badge">แนะนำ</span>` : ''}
            </div>`).join('')}
          </div>
        </div>
      </div>

      <div class="summary-card">
        <div class="summary-title">สรุปการชำระเงิน</div>
        <div class="voucher-form">
          <input id="voucherInput" value="${esc(st.voucher)}" placeholder="กรอกโค้ดส่วนลด">
          <button class="voucher-apply" data-action="applyVoucher">ใช้โค้ด</button>
        </div>
        <div class="summary-rows">
          <div class="summary-row"><span class="summary-label">ยอดรวมสินค้า (${vm.cartItems.reduce((a, b) => a + b.qty, 0)} ชิ้น)</span><span class="num">${baht(vm.subtotal)}</span></div>
          <div class="summary-row"><span class="summary-label">ค่าจัดส่ง</span><span class="num">${baht(vm.shipFee)}</span></div>
          <div class="summary-row"><span class="summary-label">ส่วนลด</span><span class="num" style="color:var(--emerald-verified)">${vm.discount ? '−' + baht(vm.discount) : '฿0'}</span></div>
          <div class="summary-divider"></div>
          <div class="summary-total"><span class="summary-total-label">ยอดชำระ</span><span class="summary-total-value">${baht(vm.grand)}</span></div>
        </div>
        <button class="btn btn-primary btn-block" style="margin-top:16px;padding:13px" data-action="payNow">${esc(payLabel)}</button>
        <div class="summary-fineprint">การกดชำระเงินถือว่าคุณยอมรับเงื่อนไขการใช้งานและนโยบายคุ้มครองข้อมูลส่วนบุคคล (PDPA)</div>
      </div>
    </div>
  </div>`;
}

/* ============================== RENDER: QR ============================== */

function renderQr(vm) {
  const qrRemain = vm.qrRemain;
  const qrCountdown = pad(Math.floor(qrRemain / 60e3)) + ':' + pad(Math.floor(qrRemain / 1000) % 60);
  return `
  <div data-screen-label="PromptPay QR" class="qr-screen">
    <div class="qr-card">
      <div class="qr-title">สแกนเพื่อชำระด้วย PromptPay</div>
      <div class="qr-sub">เปิดแอปธนาคารของคุณและสแกน QR ด้านล่าง</div>
      <div class="qr-graphic-wrap">${qrGraphicHtml()}</div>
      <div class="qr-total">${baht(vm.grand)}</div>
      <div class="qr-ref">Ref. ${orderId} · CRC verified</div>
      <div class="qr-status">
        <span class="qr-dot"></span>
        <span class="qr-status-text">กำลังรอการยืนยันการชำระเงิน · หมดอายุใน <b class="num" id="qrCountdownVal" style="color:var(--slate-dark)">${qrCountdown}</b></span>
      </div>
      <button class="btn btn-green btn-block" style="margin-top:16px;padding:13px" data-action="confirmPaid">จำลองการชำระเงินสำเร็จ</button>
      <div class="qr-back" data-action="goCart">ย้อนกลับไปแก้ไขคำสั่งซื้อ</div>
    </div>
  </div>`;
}

/* ============================== RENDER: STORE ============================== */

function renderStore(vm) {
  const st = vm.st;
  const shopName = st.shop || find(st.pid).shop;
  const own = PRODUCTS.filter(x => x.shop === shopName);
  const base = own[0] || PRODUCTS[0];
  const more = PRODUCTS.filter(x => x.cat === base.cat && x.shop !== shopName).slice(0, 4);

  const wrap = (x, key) => ({
    ...x, ph: x.cat,
    priceText: baht(x.price), oldText: x.old ? baht(x.old) : '', hasDisc: !!x.old,
    discText: x.old ? '-' + Math.round((1 - x.price / x.old) * 100) + '%' : '',
    soldText: 'ขายแล้ว ' + compact(x.sold), rating: x.rating.toFixed(1),
    province: x.province,
    open: () => { setState({ pid: x.id, qty: 1, mode: 'retail', quoteSent: false }); go('pdp'); }
  });

  const storeStats = [
    { k: 'คะแนนร้าน', v: base.rating.toFixed(1) },
    { k: 'ออร์เดอร์', v: compact(own.reduce((a, b) => a + b.sold, 0)) },
    { k: 'ตอบแชท', v: '98%' },
    { k: 'สินค้า', v: own.length }
  ];

  const storeProducts = own.map(wrap);
  const storeMore = more.map(wrap);

  const storeGrid = vm.vw < 560 ? 'repeat(2,minmax(0,1fr))' : vm.vw < 1000 ? 'repeat(3,minmax(0,1fr))' : 'repeat(4,minmax(0,1fr))';
  const storeHeadGrid = vm.vw < 1100 ? 'minmax(0,1fr)' : 'minmax(0,1fr) auto auto';
  const storeBodyGrid = vm.vw < 1000 ? 'minmax(0,1fr)' : '300px minmax(0,1fr)';

  return `
  <div data-screen-label="Store" style="max-width:1280px;margin:0 auto;padding:16px 16px 40px;width:100%">
    <div style="font-size:12.5px;color:var(--slate-body);margin-bottom:14px">
      <span data-action="goHome" style="cursor:pointer;color:var(--brand-blue)">หน้าแรก</span> / ร้านค้า / <span style="color:#334155">${esc(shopName)}</span>
    </div>

    <div class="store-header">
      <div class="store-cover">${imgSlot('ภาพปกร้าน 1280×360', '', 'https://images.unsplash.com/photo-1763824969015-e5d1d6755782', 'store-cover-' + base.id)}</div>
      <div class="store-head-content" style="display:grid;grid-template-columns:${storeHeadGrid};gap:20px;align-items:center">
        <div style="display:flex;align-items:center;gap:14px;min-width:0">
          <div class="store-logo-box">${imgSlot('โลโก้ร้าน', '', productQuery(base), 'logo-' + base.id)}</div>
          <div style="min-width:0">
            <div style="font-size:20px;font-weight:600;color:var(--slate-dark)">${esc(shopName)}</div>
            <div style="font-size:13px;color:var(--slate-body);margin-top:3px">${esc(base.province)} · เข้าร่วมแพลตฟอร์มปี 2565</div>
            <div style="display:inline-flex;align-items:center;gap:6px;margin-top:8px;background:#ECFDF5;border:1px solid #A7F3D0;color:#059669;font-size:12px;padding:4px 10px;border-radius:16px">✓ ผู้ขายยืนยันตัวตน · Level 3</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px">
          ${storeStats.map(s => `
          <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:14px;padding:11px 12px">
            <div style="font-family:'Space Grotesk','Anuphan',sans-serif;font-weight:700;font-size:17px;color:var(--slate-dark)">${esc(s.v)}</div>
            <div style="font-size:11.5px;color:var(--slate-body);margin-top:2px">${esc(s.k)}</div>
          </div>`).join('')}
        </div>
        <div style="display:flex;gap:9px;flex-wrap:wrap">
          <button class="btn btn-primary">ติดตามร้าน</button>
          <button class="btn btn-outline">แชทเลย</button>
        </div>
      </div>
    </div>

    <div class="store-body" style="display:grid;grid-template-columns:${storeBodyGrid};gap:16px;margin-top:16px;align-items:start">
      <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:16px">
        <div style="font-size:15px;font-weight:500;margin-bottom:10px">ข้อมูลร้านค้า</div>
        <div style="font-size:13px;color:var(--slate-body);line-height:1.75">ร้านค้าที่จำหน่าย${esc(base.cat)}คุณภาพดี จัดส่งจาก${esc(base.province)} ผ่านการยืนยันตัวตนแล้ว พร้อมรองรับคำสั่งซื้อทั้งแบบรายชิ้นและแบบขายส่งสำหรับองค์กร</div>
        <div style="margin-top:14px;display:flex;flex-direction:column;gap:0">
          ${[
            { k: 'เลขทะเบียนนิติบุคคล', v: '0105558xxxxx' },
            { k: 'รหัส TSIC', v: '47912' },
            { k: 'ระดับการยืนยัน', v: 'Level 3' },
            { k: 'มาตรฐานที่ได้รับ', v: 'รับประกันสินค้าแท้ 100%' },
            { k: 'เวลาจัดส่งโดยเฉลี่ย', v: 'ภายใน 1 วัน' }
          ].map(i => `
          <div style="display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-top:1px solid #E2E8F0;font-size:12.5px">
            <span style="color:var(--slate-body)">${esc(i.k)}</span>
            <span style="color:var(--slate-dark);text-align:right">${esc(i.v)}</span>
          </div>`).join('')}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:16px">
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:18px">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:14px">
            <div style="font-size:17px;font-weight:600">สินค้าของร้าน</div>
            <div style="font-size:12.5px;color:var(--slate-body);font-family:'Space Grotesk','Anuphan',sans-serif">${storeProducts.length} รายการ</div>
          </div>
          <div class="products-grid" style="display:grid;gap:14px;grid-template-columns:${storeGrid}">
            ${storeProducts.map(p => `
            <div class="product-card" data-action="openProduct" data-id="${p.id}">
              ${p.hasDisc ? `<div class="disc-badge">${esc(p.discText)}</div>` : ''}
              <div class="product-media">
                ${imgSlot(p.cat, '', productQuery(p), p.id + '-store')}
              </div>
              <div style="padding:11px 12px 13px;display:flex;flex-direction:column;gap:7px;flex:1">
                <div style="font-size:13.5px;color:#334155;line-height:1.4;height:38px;overflow:hidden">${esc(p.name)}</div>
                <div style="display:flex;align-items:baseline;gap:7px;margin-top:auto">
                  <span style="font-family:'Space Grotesk','Anuphan',sans-serif;font-weight:700;font-size:17px;color:var(--slate-dark)">${p.priceText}</span>
                  ${p.hasDisc ? `<span style="font-family:'Space Grotesk','Anuphan',sans-serif;font-size:12px;color:#94A3B8;text-decoration:line-through">${p.oldText}</span>` : ''}
                </div>
                <div style="display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--slate-body);font-family:'Space Grotesk','Anuphan',sans-serif">
                  ${starIcon()}${p.rating}
                  <span style="color:#CBD5E1">|</span>
                  <span>${p.soldText}</span>
                </div>
              </div>
            </div>`).join('')}
          </div>
        </div>

        ${storeMore.length > 0 ? `
        <div style="background:#FFFFFF;border:1px solid #E2E8F0;border-radius:16px;padding:18px">
          <div style="font-size:17px;font-weight:600;margin-bottom:14px">สินค้าอื่นในหมวด ${esc(base.cat)}</div>
          <div class="products-grid" style="display:grid;gap:14px;grid-template-columns:${storeGrid}">
            ${storeMore.map(p => `
            <div class="product-card" data-action="openProduct" data-id="${p.id}">
              <div class="product-media">
                ${imgSlot(p.cat, '', productQuery(p), p.id + '-more')}
              </div>
              <div style="padding:11px 12px 13px;display:flex;flex-direction:column;gap:6px;flex:1">
                <div style="font-size:13.5px;color:#334155;line-height:1.4;height:38px;overflow:hidden">${esc(p.name)}</div>
                <div style="font-family:'Space Grotesk','Anuphan',sans-serif;font-weight:700;font-size:16px;color:var(--slate-dark);margin-top:auto">${p.priceText}</div>
                <div style="font-size:11.5px;color:var(--slate-body)">${esc(p.shop)} · ${p.province}</div>
              </div>
            </div>`).join('')}
          </div>
        </div>` : ''}
      </div>
    </div>
  </div>`;
}

/* ============================== RENDER: PAID ============================== */

function renderPaid(vm) {
  const timeline = [
    { title: 'ชำระเงินสำเร็จ — เงินเข้าระบบ Escrow', time: 'วันนี้ 14:32 น.', dot: '#059669', ring: '#A7F3D0', fg: '#1E293B' },
    { title: 'ผู้ขายกำลังเตรียมพัสดุ', time: 'คาดการณ์ ภายใน 24 ชั่วโมง', dot: '#1D4ED8', ring: '#BFDBFE', fg: '#1E293B' },
    { title: 'ขนส่งรับพัสดุแล้ว', time: 'รอดำเนินการ', dot: '#CBD5E1', ring: '#E2E8F0', fg: '#475569' },
    { title: 'จัดส่งสำเร็จ — ปลดล็อกเงินให้ผู้ขาย', time: 'รอดำเนินการ', dot: '#CBD5E1', ring: '#E2E8F0', fg: '#475569' }
  ];
  return `
  <div data-screen-label="Order confirmed" style="max-width:760px;margin:0 auto;padding:40px 16px;width:100%">
    <div class="paid-card">
      <div class="paid-head">
        <div class="paid-check">✓</div>
        <div>
          <div class="paid-title">ชำระเงินสำเร็จ</div>
          <div class="paid-order">Order ${orderId} · ${baht(vm.grand)}</div>
        </div>
      </div>
      <div class="escrow-note">เงินของคุณถูกพักไว้ในระบบคุ้มครองผู้ซื้อ และจะโอนให้ผู้ขายหลังคุณยืนยันรับสินค้า หรือหลังระบบขนส่งยืนยันการส่งมอบ 3 วัน</div>
      <div class="timeline-title">สถานะการจัดส่ง</div>
      <div>
        ${timeline.map(t => `
        <div class="timeline-item">
          <div class="timeline-marker">
            <span class="timeline-dot" style="background:${t.dot};border-color:${t.ring}"></span>
            <span class="timeline-track"></span>
          </div>
          <div class="timeline-body">
            <div class="timeline-text" style="color:${t.fg}">${esc(t.title)}</div>
            <div class="timeline-time">${esc(t.time)}</div>
          </div>
        </div>`).join('')}
      </div>
      <div class="paid-actions">
        <button class="btn btn-outline solid-hover" data-action="goHome">เลือกซื้อสินค้าต่อ</button>
        <button class="btn btn-primary">ติดตามคำสั่งซื้อ</button>
      </div>
    </div>
  </div>`;
}

/* ============================== RENDER: SELLER CENTRE (AI STUDIO) ============================== */

const AIST_TODO_CHIPS = ['เพิ่มรูปภาพ', 'ปรับปรุงคำบรรยาย', 'เพิ่มโปรโมชัน', 'ปรับราคาส่วนลด'];

const SELLER_SECTIONS = [
  { key: 'studio', label: 'AI สตูดิโอสินค้า', icon: 'sparkles' },
  { key: 'stock', label: 'จัดการสต๊อก', icon: 'package' },
  { key: 'insights', label: 'ข้อมูลเชิงลึกธุรกิจ', icon: 'bar-chart-3' }
];

function renderSellerCentre(vm) {
  const st = vm.st;
  return `
  <div data-screen-label="Seller Centre" class="container" style="padding:16px 16px 40px">
    <div class="breadcrumb"><span class="crumb-link" data-action="goHome">หน้าแรก</span> / <span class="crumb-current">ศูนย์ผู้ขาย</span></div>

    <div class="aist-nav">
      ${SELLER_SECTIONS.map(s => `
      <button type="button" class="aist-nav-tab ${st.sellerSection === s.key ? 'active' : ''}" data-action="sellerSetSection" data-section="${s.key}">
        <svg class="pill-icon" data-lucide="${s.icon}"></svg>${esc(s.label)}
      </button>`).join('')}
    </div>

    ${st.sellerSection === 'stock' ? renderSellerStock(vm) : st.sellerSection === 'insights' ? renderSellerInsights(vm) : renderSellerStudio(vm)}
  </div>`;
}

function renderSellerStudio(vm) {
  const st = vm.st;
  const optimizedCount = st.sellerOptimized.length;
  const todoCount = PRODUCTS.length - optimizedCount;
  const visibility = optimizedCount * 120;
  const sales = optimizedCount * 3;

  const items = PRODUCTS.filter(p => st.sellerTab === 'done' ? st.sellerOptimized.includes(p.id) : !st.sellerOptimized.includes(p.id));

  return `
    <div class="aist-banner">
      <div class="aist-banner-top">
        <div>
          <div class="aist-banner-title">${aiSparkIcon()} สวัสดี ให้ <span class="aist-accent">SME.GO AI</span> ช่วยเพิ่มประสิทธิภาพให้คุณเลย!</div>
          <div class="aist-banner-sub">ช่วยให้สินค้าของคุณโดดเด่นยิ่งขึ้นด้วย AI ทั้งภาพและคำบรรยาย</div>
        </div>
        <button type="button" class="btn btn-primary" data-action="openAicwNew">+ เพิ่มสินค้าใหม่</button>
      </div>
      <div class="aist-stats">
        <div class="aist-stat"><div class="aist-stat-num">${optimizedCount}</div><div class="aist-stat-label">ปรับแต่งโดย AI แล้ว</div></div>
        <div class="aist-stat"><div class="aist-stat-num">${compact(visibility)}</div><div class="aist-stat-label">การมองเห็นที่เพิ่มขึ้น</div></div>
        <div class="aist-stat"><div class="aist-stat-num">${compact(sales)}</div><div class="aist-stat-label">ยอดขายที่เพิ่มขึ้น</div></div>
      </div>
    </div>

    <div class="aist-cards">
      <div class="aist-card">
        <div class="aist-card-badge">${aiSparkIcon()}เครื่องมือ AI ชั้นสูง</div>
        <div class="aist-card-head">
          <div class="aist-card-icon"><svg class="pill-icon" data-lucide="image"></svg></div>
          <div class="aist-card-title">ตกแต่งภาพสินค้า</div>
        </div>
        <div class="aist-card-sub">เพิ่มความโดดเด่นให้สินค้าของคุณด้วยพื้นหลังที่สวยงามจาก AI</div>
        <div class="aist-card-thumbs">
          ${PRODUCTS.slice(0, 4).map(p => `<div class="aist-thumb">${imgSlot(p.cat, '', productQuery(p), p.id + '-retouch')}</div>`).join('')}
        </div>
      </div>
      <div class="aist-card">
        <div class="aist-card-badge">${aiSparkIcon()}เครื่องมือ AI ชั้นสูง</div>
        <div class="aist-card-head">
          <div class="aist-card-icon"><svg class="pill-icon" data-lucide="pen-line"></svg></div>
          <div class="aist-card-title">AI ผู้ช่วยเขียนคอนเทนต์สินค้า</div>
        </div>
        <div class="aist-card-sub">ให้ AI ช่วยเขียนชื่อ แคปชัน และรายละเอียดสินค้าให้น่าสนใจยิ่งขึ้น</div>
        <div class="aist-caption-demo">
          <div class="aist-thumb aist-thumb-lg">${imgSlot(PRODUCTS[0].cat, '', productQuery(PRODUCTS[0]), PRODUCTS[0].id + '-caption')}</div>
          <div class="aist-caption-bubble">${aiSparkIcon()}"หูฟังที่ใครๆ ก็ต้องหลงรัก ตัดเสียงรบกวนสุดล้ำ ใส่สบายทั้งวัน"</div>
        </div>
      </div>
    </div>

    <div class="card" style="overflow:hidden;margin-top:20px">
      <div class="aist-table-head">
        <div class="chip-row">
          <div class="chip ${st.sellerTab === 'todo' ? 'active' : ''}" data-action="sellerPickTab" data-tab="todo">ที่ต้องเพิ่มประสิทธิภาพ (${todoCount})</div>
          <div class="chip ${st.sellerTab === 'done' ? 'active' : ''}" data-action="sellerPickTab" data-tab="done">ปรับแต่งโดย AI แล้ว (${optimizedCount})</div>
        </div>
      </div>
      <div class="aist-table">
        <div class="aist-row aist-row-head">
          <div>สินค้า</div><div>ประสิทธิภาพ</div><div>สิ่งที่ต้องทำ</div><div>ดำเนินการ</div>
        </div>
        ${items.length === 0 ? `<div class="aist-empty">ไม่มีรายการ</div>` : items.map(p => {
          const perf = p.rating >= 4.8 ? { label: 'ดีเยี่ยม', cls: 'good' } : p.rating >= 4.6 ? { label: 'ดี', cls: 'ok' } : { label: 'ควรปรับปรุง', cls: 'low' };
          const chip = AIST_TODO_CHIPS[hashSeed(p.id) % AIST_TODO_CHIPS.length];
          return `
          <div class="aist-row">
            <div class="aist-prod"><div class="aist-prod-thumb">${imgSlot(p.cat, '', productQuery(p), p.id + '-seller')}</div><div class="aist-prod-name">${esc(p.name)}</div></div>
            <div><span class="aist-perf aist-perf-${perf.cls}">${perf.label}</span></div>
            <div>${st.sellerTab === 'done' ? '<span style="color:var(--emerald-verified);font-size:12.5px">✓ ปรับปรุงแล้ว</span>' : `<span class="aist-todo-chip">${esc(chip)}</span>`}</div>
            <div class="aist-row-actions">
              ${st.sellerTab === 'todo' ? `<button type="button" class="btn-mini btn-mini-primary" data-action="sellerOptimize" data-id="${p.id}">ปรับแต่งด้วย AI</button>` : ''}
              <button type="button" class="btn-mini" data-action="openAicwEdit" data-id="${p.id}">เขียนคอนเทนต์ใหม่</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
  `;
}

const SELLER_STOCK_THRESHOLD = 60;

function renderSellerStock(vm) {
  const st = vm.st;
  const rows = PRODUCTS.map(p => {
    const dailyRate = Math.max(0.4, p.sold / 300);
    const daysLeft = Math.max(1, Math.round(p.stock / dailyRate));
    const reorderQty = Math.max(10, Math.round(dailyRate * 30));
    const status = p.stock === 0 ? { label: 'หมด', cls: 'low' } : p.stock < SELLER_STOCK_THRESHOLD ? { label: 'ใกล้หมด', cls: 'ok' } : { label: 'พร้อมขาย', cls: 'good' };
    return { p, daysLeft, reorderQty, status };
  });

  const showAddProduct = st.sellerShowAddProduct;

  return `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
      <div>
        <div class="aist-section-title" style="font-size:24px;margin-bottom:4px">จัดการสต๊อก</div>
        <div style="font-size:13px;color:var(--slate-body)">ติดตามสต๊อกสินค้าทั้งหมด พร้อมคำแนะนำการสั่งซื้อเพิ่มจาก AI</div>
      </div>
      <button class="btn btn-primary" data-action="sellerToggleAddProduct" style="min-width:140px">+ เพิ่มสินค้า</button>
    </div>

    ${showAddProduct ? `
    <div class="card" style="padding:28px;margin-bottom:24px">
      <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:20px;margin-bottom:24px">เพิ่มสินค้าใหม่</div>

      <div style="display:grid;grid-template-columns:180px 1fr 1fr 1fr;gap:20px;margin-bottom:24px">
        <!-- Product Image -->
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:8px;font-weight:600">Product Image</div>
          <div style="width:100%;aspect-ratio:1;border:2px dashed var(--border-subtle);border-radius:12px;display:flex;align-items:center;justify-content:center;background:var(--slate-lightest);cursor:pointer" data-action="sellerBrowseProductImage">
            <svg class="pill-icon" style="width:40px;height:40px;color:var(--slate-body)" data-lucide="image-plus"></svg>
          </div>
          <button class="btn" style="width:100%;margin-top:8px;background:var(--brand-blue);color:white;font-weight:600;padding:10px" data-action="sellerBrowseProductImage">+ Upload</button>
          <div style="font-size:11px;color:var(--slate-body);margin-top:8px">Max 5MB<br/>Ratio 1:1</div>
        </div>

        <!-- Product Name & SKU -->
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Product Name *</div>
          <input type="text" placeholder="Product Name" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;margin-bottom:16px" />

          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Unit</div>
          <select style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;background:white">
            <option>Please Select</option>
            <option>ชิ้น</option>
            <option>แกลลอน</option>
            <option>กล่อง</option>
          </select>
        </div>

        <!-- SKU & Brand -->
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">SKU</div>
          <input type="text" placeholder="Product Name" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;margin-bottom:16px" />

          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Brand</div>
          <select style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;background:white">
            <option>Please Select</option>
          </select>
        </div>

        <!-- Barcode & Category -->
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Barcode Type *</div>
          <select style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;background:white;margin-bottom:16px">
            <option>Code 128 (C128)</option>
            <option>Code 39</option>
            <option>EAN-13</option>
          </select>

          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Category</div>
          <select style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;background:white">
            <option>Please Select</option>
          </select>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-bottom:24px">
        <!-- Sub Category & Business Location & Alert Quantity -->
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Sub Category</div>
          <select style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;background:white">
            <option>Please Select</option>
          </select>
        </div>

        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Business Locations</div>
          <div style="padding:8px 12px;background:var(--slate-dark);color:white;border-radius:8px;font-size:13px;display:flex;align-items:center;gap:6px;width:fit-content">
            <span style="width:14px;height:14px;background:white;border-radius:2px"></span>
            Sadax (BL001)
          </div>
        </div>

        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Alert Quantity</div>
          <input type="number" placeholder="Alert Quantity" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px" />
        </div>
      </div>

      <!-- Product Description & Brochure -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Product Description</div>
          <textarea placeholder="Write description ..." style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;min-height:120px;font-family:inherit;resize:none"></textarea>
        </div>

        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Product Brochure</div>
          <div style="width:100%;padding:20px;border:2px dashed var(--border-subtle);border-radius:8px;text-align:center;cursor:pointer;background:var(--slate-lightest)">
            <div style="font-size:13px;color:var(--slate-body);margin-bottom:8px">Choose File</div>
            <div style="font-size:11px;color:var(--slate-body)">No file chosen</div>
          </div>
          <div style="font-size:11px;color:var(--slate-body);margin-top:8px">Max 5MB<br/>Allowed: .pdf, .csv, .zip, .doc, .docx, .jpeg</div>
        </div>
      </div>

      <!-- Checkboxes & Additional Fields -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">
        <div>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:12px">
            <input type="checkbox" checked />
            <span style="font-size:13px;color:var(--slate-dark);font-weight:600">Manage Stock?</span>
          </label>
          <div style="font-size:12px;color:var(--slate-body)">Enable stock management at product level</div>
        </div>

        <div>
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;margin-bottom:12px">
            <input type="checkbox" checked />
            <span style="font-size:13px;color:var(--slate-dark);font-weight:600">Enable Product description, IMEI or Serial Number</span>
          </label>
        </div>
      </div>

      <!-- Weight & Custom Fields -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:20px;margin-bottom:24px">
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Weight</div>
          <input type="text" placeholder="Weight" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px" />
        </div>
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Custom Field1</div>
          <input type="text" placeholder="Custom Field1" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px" />
        </div>
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Custom Field2</div>
          <input type="text" placeholder="Custom Field2" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px" />
        </div>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Custom Field3</div>
          <input type="text" placeholder="Custom Field3" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px" />
        </div>
        <div>
          <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Custom Field4</div>
          <input type="text" placeholder="Custom Field4" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px" />
        </div>
      </div>

      <div style="margin-bottom:24px">
        <div style="font-size:12px;color:var(--slate-body);margin-bottom:6px;font-weight:600">Service staff timer/Preparation time (in minutes)</div>
        <input type="number" placeholder="minutes" style="width:100%;padding:12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px" />
      </div>

      <div style="display:flex;gap:12px;justify-content:flex-end">
        <button class="btn" style="padding:12px 24px;border:1px solid var(--border-subtle);border-radius:8px;background:white;color:var(--slate-dark);font-weight:600" data-action="sellerToggleAddProduct">Cancel</button>
        <button class="btn btn-primary" style="padding:12px 24px;border-radius:8px;background:var(--brand-blue);color:white;font-weight:600" data-action="sellerSaveProduct">Save Product</button>
      </div>
    </div>` : ''}

    <div class="aist-section-head">
      <div class="aist-section-title">สต๊อกสินค้า</div>
      <div class="aist-section-sub">ติดตามและจัดการสต๊อกสินค้าทั้งหมดอย่างมีประสิทธิภาพ</div>
    </div>

    <!-- Filter Section -->
    <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;align-items:center">
      <div style="flex:1;min-width:200px">
        <input type="text" placeholder="🔍 ค้นหาสินค้า..." style="width:100%;padding:10px 12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px" data-action="filterStockSearch" />
      </div>
      <select style="padding:10px 12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;background:white;min-width:150px" data-action="filterStockStatus">
        <option value="">สถานะทั้งหมด</option>
        <option value="good">พร้อมขาย</option>
        <option value="ok">ใกล้หมด</option>
        <option value="low">หมด</option>
      </select>
      <select style="padding:10px 12px;border:1px solid var(--border-subtle);border-radius:8px;font-size:13px;background:white;min-width:150px" data-action="filterStockCategory">
        <option value="">หมวดหมู่ทั้งหมด</option>
        <option value="electronics">อิเล็กทรอนิกส์</option>
        <option value="fashion">แฟชั่น</option>
        <option value="home">บ้านและสวน</option>
      </select>
      <button style="padding:10px 16px;border:1px solid var(--border-subtle);border-radius:8px;background:white;color:var(--slate-dark);font-weight:600;cursor:pointer;font-size:13px" data-action="resetStockFilters">รีเซ็ต</button>
    </div>

    <div class="card" style="overflow:hidden;margin-top:0">
      <div class="aist-table">
        <div class="aist-row aist-row-head aist-stock-row">
          <div>สินค้า</div><div>คงเหลือ</div><div>สถานะ</div><div>คาดว่าจะหมดใน</div><div>คำแนะนำจาก AI</div><div>ปรับสต๊อก</div>
        </div>
        ${rows.map(r => `
        <div class="aist-row aist-stock-row">
          <div class="aist-prod"><div class="aist-prod-thumb">${imgSlot(r.p.cat, '', productQuery(r.p), r.p.id + '-stock')}</div><div class="aist-prod-name">${esc(r.p.name)}</div></div>
          <div class="num" style="font-weight:700;color:var(--slate-dark)">${r.p.stock} ชิ้น</div>
          <div><span class="aist-perf aist-perf-${r.status.cls}">${r.status.label}</span></div>
          <div>${r.p.stock === 0 ? '—' : `${r.daysLeft} วัน`}</div>
          <div class="aist-ai-suggest">${aiSparkIcon()}สั่งเพิ่ม ~${r.reorderQty} ชิ้น</div>
          <div class="qty-stepper aist-qty-stepper">
            <div class="qty-btn" data-action="sellerStockDec" data-id="${r.p.id}">−</div>
            <div class="qty-val" style="width:44px;font-size:13px">${r.p.stock}</div>
            <div class="qty-btn" data-action="sellerStockInc" data-id="${r.p.id}">+</div>
          </div>
        </div>`).join('')}
      </div>
    </div>

    ${st.sellerStockLog.length ? `
    <div class="card" style="padding:18px;margin-top:16px">
      <div style="font-weight:600;font-size:14px;margin-bottom:10px">ประวัติการปรับสต๊อก</div>
      ${st.sellerStockLog.slice(0, 8).map(l => `
      <div class="aist-log-row">
        <span>${esc(l.name)}</span>
        <span class="${l.delta > 0 ? 'aist-log-plus' : 'aist-log-minus'}">${l.delta > 0 ? '+' : ''}${l.delta} ชิ้น</span>
      </div>`).join('')}
    </div>` : ''}
  `;
}

function sellerTrendData(days, range) {
  // Scramble the index (rather than hashing 0,1,2,3... directly) — hashSeed's
  // simple polynomial hash maps adjacent small inputs to adjacent outputs,
  // which made consecutive days drift smoothly instead of looking like real
  // day-to-day sales swings.
  return Array.from({ length: days }, (_, i) => 45 + (hashSeed(range + '-trend-' + (i * 97 + 13)) % 55));
}

function compactBaht(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(n >= 1e7 ? 1 : 2) + ' ล้าน';
  if (n >= 1e3) return (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + ' พัน';
  return String(Math.round(n));
}

function renderSellerInsights(vm) {
  const st = vm.st;
  const totalOrders = PRODUCTS.reduce((a, p) => a + p.sold, 0);
  const totalRevenue = PRODUCTS.reduce((a, p) => a + p.price * p.sold, 0);
  const aov = Math.round(totalRevenue / totalOrders);
  const conversion = 3.4;
  const top = PRODUCTS.slice().sort((a, b) => b.sold - a.sold).slice(0, 5);
  const maxSold = top[0].sold;

  const days = st.sellerInsightsRange === '30d' ? 30 : 7;
  const data = sellerTrendData(days, st.sellerInsightsRange);
  const maxVal = Math.max(...data);
  const chartW = 560, chartH = 160, pad = 8;
  const stepX = (chartW - pad * 2) / (data.length - 1);
  const points = data.map((v, i) => `${(pad + i * stepX).toFixed(1)},${(chartH - pad - (v / maxVal) * (chartH - pad * 2)).toFixed(1)}`).join(' ');
  const areaPoints = `${pad},${chartH - pad} ${points} ${chartW - pad},${chartH - pad}`;

  const dailySales = st.sellerInsightsRange === '7d'
    ? [45, 52, 38, 65, 78, 52, 88]
    : [45, 52, 38, 65, 78, 52, 88, 42, 71, 65, 95, 82, 55, 68, 72, 85, 63, 48, 92, 78, 55, 88, 65, 72, 85, 95, 72, 68, 55, 92];

  const dailyRevenue = st.sellerInsightsRange === '7d'
    ? [2100, 2400, 1800, 3200, 3800, 2500, 4200]
    : [2100, 2400, 1800, 3200, 3800, 2500, 4200, 1900, 3300, 3100, 4500, 3900, 2600, 3200, 3400, 4100, 3000, 2300, 4400, 3700, 2600, 4200, 3100, 3400, 4100, 4600, 3400, 3200, 2600, 4400];

  const lastOrders = [
    { name: 'Savannah Nguyen', date: '07/05/2025', price: 25, category: 'Clothes', product: 'Lc Waikiki Jean cargo fille avec taille...', city: 'Rabat', status: 'completed' },
    { name: 'Jerome Bell', date: '07/05/2025', price: 25, category: 'Shoes', product: 'Lc Waikiki Jean cargo fille avec taille...', city: 'Rabat', status: 'pending' },
    { name: 'Darlene Robertson', date: '07/05/2025', price: 25, category: 'Clothes', product: 'Lc Waikiki Jean cargo fille avec taille...', city: 'Rabat', status: 'in_progress' },
    { name: 'Cody Fisher', date: '07/05/2025', price: 25, category: 'Clothes', product: 'Lc Waikiki Jean cargo fille avec taille...', city: 'Rabat', status: 'cancelled' },
  ];

  const statusTabs = ['all', 'completed', 'in_progress', 'pending', 'cancelled'];
  const statusLabels = { all: 'All tasks', completed: 'Completed', in_progress: 'In Progress', pending: 'Pending Approval', cancelled: 'Cancelled' };
  const statusThaiLabels = { all: 'ทั้งหมด', completed: 'เสร็จสิ้น', in_progress: 'อยู่ระหว่างดำเนินการ', pending: 'รอการอนุมัติ', cancelled: 'ยกเลิก' };
  const statusColors = { completed: '#10b981', pending: '#f59e0b', in_progress: '#06b6d4', cancelled: '#ef4444' };

  const currentTab = st.sellerSalesTab || 'all';
  const filteredOrders = currentTab === 'all' ? lastOrders : lastOrders.filter(o => o.status === currentTab);

  // Professional Bar Chart
  const barChartW = 380, barChartH = 220, barPadX = 40, barPadY = 30;
  const chartAreaW = barChartW - barPadX * 2, chartAreaH = barChartH - barPadY * 2;
  const maxSalesDay = Math.max(...dailySales);
  const barSpacing = chartAreaW / (dailySales.length + 1);
  const barWidth = barSpacing * 0.65;

  const barGridLines = Array.from({length: 5}, (_, i) => {
    const y = barPadY + (chartAreaH / 4) * i;
    const val = Math.round((maxSalesDay / 4) * (4 - i));
    return `<line x1="0" y1="${y}" x2="${barChartW}" y2="${y}" stroke="var(--slate-lightest)" stroke-width="1"/>`;
  }).join('');

  const barRects = dailySales.map((v, i) => {
    const x = barPadX + barSpacing * (i + 1) - barWidth / 2;
    const h = (v / maxSalesDay) * chartAreaH;
    const y = barPadY + chartAreaH - h;
    const isBlue = i % 2 === 0;
    return `<rect x="${x}" y="${y}" width="${barWidth}" height="${h}" fill="${isBlue ? 'var(--brand-blue)' : '#E0E9FF'}" rx="3" style="filter:drop-shadow(0 1px 2px rgba(0,0,0,0.05))"/>`;
  }).join('');

  const barSvg = `${barGridLines}${barRects}`;

  // Professional Line Chart with Gradient
  const lineChartW = 380, lineChartH = 220, linePadX = 40, linePadY = 30;
  const chartAreaLW = lineChartW - linePadX * 2, chartAreaLH = lineChartH - linePadY * 2;
  const maxRevenue = Math.max(...dailyRevenue);
  const minRevenue = Math.min(...dailyRevenue);
  const revRange = maxRevenue - minRevenue || maxRevenue;

  const lineGridLines = Array.from({length: 5}, (_, i) => {
    const y = linePadY + (chartAreaLH / 4) * i;
    return `<line x1="0" y1="${y}" x2="${lineChartW}" y2="${y}" stroke="var(--slate-lightest)" stroke-width="1"/>`;
  }).join('');

  const linePoints = dailyRevenue.map((v, i) => ({
    x: linePadX + (i / (dailyRevenue.length - 1)) * chartAreaLW,
    y: linePadY + chartAreaLH - ((v - minRevenue) / revRange) * chartAreaLH
  }));

  const linePath = linePoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${linePoints[linePoints.length - 1].x},${linePadY + chartAreaLH} L ${linePadX},${linePadY + chartAreaLH} Z`;

  const lineCircles = linePoints.map((p, i) => {
    if (i === 0 || i === linePoints.length - 1) return `<circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--brand-blue)" stroke="white" stroke-width="2"/>`;
    return '';
  }).join('');

  const lineSvg = `${lineGridLines}
    <defs><linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:var(--brand-blue);stop-opacity:0.15" />
      <stop offset="100%" style="stop-color:var(--brand-blue);stop-opacity:0.01" />
    </linearGradient></defs>
    <path d="${areaPath}" fill="url(#lineGradient)"/>
    <path d="${linePath}" fill="none" stroke="var(--brand-blue)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 1px 3px rgba(46,107,255,0.15))"/>
    ${lineCircles}`;

  return `
    <div class="aist-section-head" style="margin-bottom:28px">
      <div class="aist-section-title">${aiSparkIcon()}ข้อมูลเชิงลึกธุรกิจ</div>
    </div>

    <!-- KPI Cards Grid -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:24px">
      <div class="card" style="padding:20px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
          <div style="font-size:12px;color:var(--slate-body);font-weight:500">รายได้รวม</div>
          <svg class="pill-icon" style="width:16px;height:16px;color:var(--slate-light)" data-lucide="info"></svg>
        </div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:28px;color:var(--slate-dark);margin-bottom:8px">฿${compactBaht(totalRevenue)}</div>
        <div style="font-size:12px;color:#10b981;font-weight:500">+41% จากเดือนที่แล้ว</div>
      </div>

      <div class="card" style="padding:20px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
          <div style="font-size:12px;color:var(--slate-body);font-weight:500">ยอดขายรวม</div>
          <svg class="pill-icon" style="width:16px;height:16px;color:var(--slate-light)" data-lucide="info"></svg>
        </div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:28px;color:var(--slate-dark);margin-bottom:8px">${compact(totalOrders)}</div>
        <div style="font-size:12px;color:#10b981;font-weight:500">+41% จากเดือนที่แล้ว</div>
      </div>

      <div class="card" style="padding:20px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
          <div style="font-size:12px;color:var(--slate-body);font-weight:500">จำนวนออเดอร์</div>
          <svg class="pill-icon" style="width:16px;height:16px;color:var(--slate-light)" data-lucide="info"></svg>
        </div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:28px;color:var(--slate-dark);margin-bottom:8px">7,532</div>
        <div style="font-size:12px;color:#ef4444;font-weight:500">-50% จากเดือนที่แล้ว</div>
      </div>

      <div class="card" style="padding:20px">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px">
          <div style="font-size:12px;color:var(--slate-body);font-weight:500">กำไร</div>
          <svg class="pill-icon" style="width:16px;height:16px;color:var(--slate-light)" data-lucide="info"></svg>
        </div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:28px;color:var(--slate-dark);margin-bottom:8px">฿60,652</div>
        <div style="font-size:12px;color:#10b981;font-weight:500">+41% จากเดือนที่แล้ว</div>
      </div>
    </div>

    <!-- Two Column Charts -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px;margin-bottom:24px">
      <div class="card" style="padding:20px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;color:var(--slate-dark)">ยอดขายรวม</div>
          <svg class="pill-icon" style="width:16px;height:16px;color:var(--slate-light);cursor:pointer" data-lucide="calendar"></svg>
        </div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:20px;color:var(--slate-dark);margin-bottom:4px">1,525</div>
        <div style="font-size:12px;color:#10b981;margin-bottom:16px;font-weight:500">+20.1% จากเดือนที่แล้ว</div>
        <svg viewBox="0 0 ${barChartW} ${barChartH}" style="width:100%;height:200px;margin-top:12px;margin-left:-10px;margin-right:-10px">
          ${barSvg}
        </svg>
      </div>

      <div class="card" style="padding:20px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;color:var(--slate-dark)">รายได้รวม</div>
          <svg class="pill-icon" style="width:16px;height:16px;color:var(--slate-light);cursor:pointer" data-lucide="calendar"></svg>
        </div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:20px;color:var(--slate-dark);margin-bottom:4px">฿20,462.89</div>
        <div style="font-size:12px;color:#10b981;margin-bottom:16px;font-weight:500">+20.1% จากเดือนที่แล้ว</div>
        <svg viewBox="0 0 ${lineChartW} ${lineChartH}" style="width:100%;height:200px;margin-top:12px;margin-left:-10px;margin-right:-10px">
          ${lineSvg}
        </svg>
      </div>
    </div>

    <!-- Last Sales Section -->
    <div class="card" style="padding:0;overflow:hidden">
      <div style="padding:20px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--slate-light)">
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:16px;color:var(--slate-dark)">ยอดขายล่าสุด</div>
        <div style="display:flex;gap:8px;align-items:center">
          <span style="font-size:12px;color:var(--slate-body);cursor:pointer" data-action="sellerViewAllSales">ดูทั้งหมด</span>
          <svg class="pill-icon" style="width:14px;height:14px;color:var(--slate-light);cursor:pointer" data-lucide="calendar"></svg>
        </div>
      </div>

      <!-- Status Tabs -->
      <div style="display:flex;border-bottom:1px solid var(--slate-light);padding:0;overflow-x:auto">
        ${statusTabs.map(tab => `
        <button class="aist-status-tab ${currentTab === tab ? 'active' : ''}" data-action="sellerSetSalesTab" data-tab="${tab}" style="padding:12px 16px;font-size:13px;color:${currentTab === tab ? 'var(--brand-blue)' : 'var(--slate-body)'};border-bottom:${currentTab === tab ? '2px solid var(--brand-blue)' : 'none'};background:none;border:none;cursor:pointer;white-space:nowrap;font-weight:${currentTab === tab ? '600' : '500'}">
          ${statusLabels[tab]}${tab === 'pending' ? '<span style="margin-left:4px;background:var(--brand-blue);color:white;font-size:10px;padding:2px 6px;border-radius:10px;font-weight:700">2</span>' : ''}
        </button>`).join('')}
      </div>

      <!-- Sales Table -->
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="border-bottom:1px solid var(--slate-light);background:var(--slate-lightest)">
              <th style="padding:12px 16px;text-align:left;color:var(--slate-body);font-weight:500;font-size:11px">ชื่อลูกค้า</th>
              <th style="padding:12px 16px;text-align:left;color:var(--slate-body);font-weight:500;font-size:11px">วันที่</th>
              <th style="padding:12px 16px;text-align:left;color:var(--slate-body);font-weight:500;font-size:11px">ราคา</th>
              <th style="padding:12px 16px;text-align:left;color:var(--slate-body);font-weight:500;font-size:11px">หมวดหมู่</th>
              <th style="padding:12px 16px;text-align:left;color:var(--slate-body);font-weight:500;font-size:11px">สินค้า</th>
              <th style="padding:12px 16px;text-align:left;color:var(--slate-body);font-weight:500;font-size:11px">เมือง</th>
              <th style="padding:12px 16px;text-align:left;color:var(--slate-body);font-weight:500;font-size:11px">สถานะ</th>
              <th style="padding:12px 16px;text-align:center;color:var(--slate-body);font-weight:500;font-size:11px;width:40px"></th>
            </tr>
          </thead>
          <tbody>
            ${filteredOrders.map(order => `
            <tr style="border-bottom:1px solid var(--slate-light);hover:background-color:var(--slate-lightest)">
              <td style="padding:12px 16px;color:var(--slate-dark);font-weight:500">${esc(order.name)}</td>
              <td style="padding:12px 16px;color:var(--slate-body)">${order.date}</td>
              <td style="padding:12px 16px;color:var(--slate-dark);font-weight:500">฿${order.price.toFixed(2)}</td>
              <td style="padding:12px 16px;color:var(--slate-body)">${order.category}</td>
              <td style="padding:12px 16px;color:var(--slate-body);max-width:200px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${esc(order.product)}</td>
              <td style="padding:12px 16px;color:var(--slate-body)">${order.city}</td>
              <td style="padding:12px 16px">
                <span style="display:inline-block;padding:4px 10px;border-radius:12px;font-size:11px;font-weight:600;color:white;background-color:${statusColors[order.status] || 'var(--slate-light)'}">
                  ${order.status === 'completed' ? '✓ เสร็จสิ้น' : (order.status === 'pending' ? '⏱ รอการอนุมัติ' : (order.status === 'in_progress' ? '⟳ อยู่ระหว่างดำเนินการ' : '✕ ยกเลิก'))}
                </span>
              </td>
              <td style="padding:12px 16px;text-align:center;cursor:pointer">
                <svg class="pill-icon" style="width:16px;height:16px;color:var(--slate-light)" data-lucide="more-vertical"></svg>
              </td>
            </tr>`).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderAicwModal(st) {
  if (!st.aicwOpen) return '';
  const product = st.aicwMode === 'edit' && st.aicwPid ? find(st.aicwPid) : null;
  const draft = st.aicwDraft;

  return `
  <div class="aicw-overlay">
    <div class="aicw-modal" data-screen-label="AI content writer">
      <div class="aicw-head">
        <div class="aicw-head-info">
          <div class="ai-avatar-bot">${aiSparkIcon()}</div>
          <div>
            <div class="aicw-title">AI ผู้ช่วยเขียนคอนเทนต์สินค้า</div>
            <div class="aicw-sub">${product ? esc(product.name) : 'สินค้าใหม่'}</div>
          </div>
        </div>
        <button type="button" class="ai-chat-close" data-action="closeAicw" aria-label="ปิด"><svg class="pill-icon" data-lucide="x"></svg></button>
      </div>
      <div class="aicw-body">
        <label class="aicw-label">ภาพสินค้า</label>
        <div class="aicw-dropzone" data-action="aicwBrowse">
          <input id="aicwFileInput" type="file" accept="image/*" multiple style="display:none">
          <svg class="pill-icon" data-lucide="upload-cloud"></svg>
          <div class="aicw-dropzone-text"><b>ลากรูปภาพมาวางที่นี่</b> หรือคลิกเพื่อเลือกไฟล์</div>
          <div class="aicw-dropzone-hint">รองรับ JPG, PNG — เพิ่มได้หลายรูป</div>
        </div>
        ${st.aicwImages.length ? `
        <div class="aicw-image-grid">
          ${st.aicwImages.map((img, i) => `
          <div class="aicw-image-tile">
            <img src="${esc(img.src)}" alt="${esc(img.name)}">
            ${i === 0 ? '<span class="aicw-cover-badge">ภาพหลัก</span>' : ''}
            ${img.enhanced ? '<span class="aicw-enhanced-badge"><svg class="pill-icon" data-lucide="check"></svg>ปรับปรุงด้วย AI แล้ว</span>' : ''}
            ${st.aicwEnhancing.includes(i) ? '<div class="aicw-image-loading"><span class="ai-typing"><span></span><span></span><span></span></span></div>' : ''}
            <button type="button" class="aicw-image-remove" data-action="aicwRemoveImage" data-index="${i}" aria-label="ลบรูปภาพ"><svg class="pill-icon" data-lucide="x"></svg></button>
            <div class="aicw-image-actions">
              ${i !== 0 ? `<button type="button" class="aicw-image-btn" data-action="aicwSetCover" data-index="${i}">ตั้งเป็นภาพหลัก</button>` : ''}
              ${!img.enhanced && !st.aicwEnhancing.includes(i) ? `<button type="button" class="aicw-image-btn" data-action="aicwEnhanceImage" data-index="${i}">${aiSparkIcon()}แต่งภาพด้วย AI</button>` : ''}
            </div>
          </div>`).join('')}
        </div>` : ''}

        <label class="aicw-label" style="margin-top:18px">คำสำคัญของสินค้า</label>
        <div class="aicw-input-row">
          <input id="aicwKeywordsField" type="text" value="${esc(st.aicwKeywords)}" placeholder="เช่น หูฟังไร้สายตัดเสียงรบกวน">
          <button type="button" class="btn btn-primary" data-action="aicwGenerate" ${st.aicwGenerating ? 'disabled' : ''}>${st.aicwGenerating ? 'กำลังสร้าง...' : (draft ? 'สร้างใหม่อีกครั้ง' : 'สร้างคอนเทนต์ด้วย AI')}</button>
        </div>

        ${st.aicwGenerating ? `
        <div class="aicw-generating">
          <span class="ai-typing" style="padding:0"><span></span><span></span><span></span></span>
          กำลังให้ AI ช่วยคิดคอนเทนต์...
        </div>` : ''}

        ${draft && !st.aicwGenerating ? `
        <div class="aicw-draft">
          <div class="aicw-field">
            <label>ชื่อสินค้าที่แนะนำ</label>
            <input id="aicwTitleField" type="text" value="${esc(draft.title)}">
          </div>
          <div class="aicw-field">
            <label>แคปชันสั้น</label>
            <input id="aicwCaptionField" type="text" value="${esc(draft.caption)}">
          </div>
          <div class="aicw-field">
            <label>รายละเอียดสินค้า</label>
            <textarea id="aicwDescField" rows="5">${esc(draft.description)}</textarea>
          </div>
          <div class="aicw-field">
            <label>คำค้นหาที่แนะนำ</label>
            <div class="aicw-tags">${draft.keywords.map(k => `<span class="aicw-tag">#${esc(k)}</span>`).join('')}</div>
          </div>
        </div>
        <div class="aicw-actions">
          <button type="button" class="btn btn-outline" data-action="closeAicw">ยกเลิก</button>
          <button type="button" class="btn btn-primary" data-action="aicwApply">ใช้คอนเทนต์นี้</button>
        </div>` : ''}
      </div>
    </div>
  </div>`;
}

/* ============================== RENDER: FOOTER / COOKIE ============================== */

function renderFooter() {
  return `
  <div class="site-footer">
    <div class="footer-grid">
      <div>
        <div class="footer-brand-row">
          <img class="footer-mark" src="assets/logo.svg" alt="SME.GO">
          <div class="footer-title">มาร์เก็ตเพลสสินค้าครบวงจรระดับโลก</div>
        </div>
        <div class="footer-address">บริษัท เอสเอ็มอี โก จำกัด (มหาชน)<br>888 อาคารเอสเอ็มโก ถนนสุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110</div>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">สำหรับผู้ซื้อ</div>
        <a href="#">วิธีสั่งซื้อ</a><a href="#">การชำระเงิน</a><a href="#">ติดตามพัสดุ</a><a href="#">คืนสินค้าและคืนเงิน</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">สำหรับผู้ขาย</div>
        <a href="#">สมัครเป็นผู้ขาย</a><a href="#" data-action="goSeller">Seller Centre</a><a href="#">ค่าธรรมเนียม</a><a href="#">โปรแกรมพันธมิตร</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">นโยบาย</div>
        <a href="#">ข้อกำหนดการใช้งาน</a><a href="#">นโยบายความเป็นส่วนตัว (PDPA)</a><a href="#">นโยบายคุกกี้</a><a href="#">ติดต่อเรา</a>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-row">
        <span>© 2569 SME.GO. All rights reserved.</span>
        <span>ข้อมูลจัดเก็บในประเทศไทย · TLS 1.3 · AES-256</span>
      </div>
    </div>
  </div>`;
}

function renderCookie(st) {
  if (!st.cookieOpen) return '';
  return `
  <div class="cookie-banner">
    <div class="cookie-card">
      <div class="cookie-text">เว็บไซต์นี้ใช้คุกกี้เพื่อพัฒนาประสบการณ์การใช้งานตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA) คุณสามารถเลือกยินยอมได้</div>
      <div class="cookie-actions">
        <button class="cookie-secondary" data-action="closeCookie">ตั้งค่าคุกกี้</button>
        <button class="cookie-primary" data-action="closeCookie">ยอมรับทั้งหมด</button>
      </div>
    </div>
  </div>`;
}

/* ============================== RENDER: AI SHOPPING ASSISTANT ============================== */

function renderAiMessage(m) {
  if (m.role === 'user') {
    return `<div class="ai-msg ai-msg-user"><div class="ai-bubble">${esc(m.text)}</div></div>`;
  }
  return `
  <div class="ai-msg ai-msg-bot">
    <div class="ai-avatar-bot">${aiSparkIcon()}</div>
    <div class="ai-bubble-col">
      <div class="ai-bubble">${esc(m.text)}</div>
      ${m.products && m.products.length ? `
      <div class="ai-product-list">
        ${m.products.map(p => `
        <div class="ai-product-card" data-action="aiOpenProduct" data-id="${p.id}">
          <div class="ai-product-media">${imgSlot(p.cat, '', productQuery(p), p.id + '-ai')}</div>
          <div class="ai-product-info">
            <div class="ai-product-name">${esc(p.name)}</div>
            <div class="ai-product-price">${baht(p.price)}</div>
          </div>
        </div>`).join('')}
      </div>` : ''}
    </div>
  </div>`;
}

function renderAiTyping() {
  return `
  <div class="ai-msg ai-msg-bot">
    <div class="ai-avatar-bot">${aiSparkIcon()}</div>
    <div class="ai-bubble ai-typing"><span></span><span></span><span></span></div>
  </div>`;
}

function renderAiWidget(st) {
  const showSuggestions = st.aiMessages.length <= 1 && !st.aiTyping;
  return `
  <button type="button" class="ai-fab${st.aiOpen ? ' is-open' : ''}" data-action="toggleAiChat" aria-label="เปิดผู้ช่วยช้อปปิ้ง AI">
    ${st.aiOpen ? '<svg class="pill-icon" data-lucide="x"></svg>' : aiSparkIcon()}
  </button>
  ${st.aiOpen ? `
  <div class="ai-chat-panel" data-screen-label="AI shopping assistant">
    <div class="ai-chat-header">
      <div class="ai-chat-header-info">
        <div class="ai-avatar-bot">${aiSparkIcon()}</div>
        <div>
          <div class="ai-chat-title">${esc(AI_NAME)}</div>
          <div class="ai-chat-status"><span class="ai-status-dot"></span>ออนไลน์</div>
        </div>
      </div>
      <button type="button" class="ai-chat-close" data-action="toggleAiChat" aria-label="ปิดแชท"><svg class="pill-icon" data-lucide="x"></svg></button>
    </div>
    <div class="ai-chat-body" id="aiMessages">
      ${st.aiMessages.map(renderAiMessage).join('')}
      ${st.aiTyping ? renderAiTyping() : ''}
    </div>
    ${showSuggestions ? `
    <div class="ai-suggestions">
      ${AI_SUGGESTIONS.map(s => `<button type="button" class="ai-chip" data-action="aiSendChip" data-text="${esc(s)}">${esc(s)}</button>`).join('')}
    </div>` : ''}
    <div class="ai-input-row">
      <input id="aiInputField" type="text" placeholder="พิมพ์สิ่งที่คุณต้องการ..." value="${esc(st.aiDraft)}" autocomplete="off">
      <button type="button" class="ai-send-btn" data-action="aiSubmit" aria-label="ส่งข้อความ"><svg class="pill-icon" data-lucide="arrow-up"></svg></button>
    </div>
  </div>` : ''}`;
}

/* ============================== RENDER: RELATED IMAGES ============================== */

function renderRelatedImages(vm) {
  const p = vm.p;
  const pool = PRODUCTS.filter(x => !p || x.id !== p.id);
  const items = (p ? pool.filter(x => x.cat === p.cat).concat(pool) : pool).slice(0, 6);

  return `
  <div class="section" style="padding-bottom:32px">
    <div class="feed-head">
      <div class="feed-title">รูปภาพที่เกี่ยวข้อง</div>
    </div>
    <div class="related-grid">
      ${items.map(x => `
      <div class="related-thumb" data-action="openProduct" data-id="${x.id}">
        ${imgSlot(x.cat, '', productQuery(x), x.id)}
      </div>`).join('')}
    </div>
  </div>`;
}

/* ============================== MAIN RENDER ============================== */

function render() {
  const vm = view();
  const st = vm.st;

  let screenHtml = '';
  if (st.screen === 'home') screenHtml = renderHome(vm);
  else if (st.screen === 'pdp') screenHtml = renderPdp(vm);
  else if (st.screen === 'store') screenHtml = renderStore(vm);
  else if (st.screen === 'cart') screenHtml = renderCart(vm);
  else if (st.screen === 'checkout') screenHtml = renderCheckout(vm);
  else if (st.screen === 'qr') screenHtml = renderQr(vm);
  else if (st.screen === 'paid') screenHtml = renderPaid(vm);
  else if (st.screen === 'seller') screenHtml = renderSellerCentre(vm);

  document.getElementById('app').innerHTML = `
    ${renderHeader(vm)}
    <div style="flex:1">
      ${screenHtml}
      ${st.screen !== 'seller' ? renderRelatedImages(vm) : ''}
    </div>
    ${renderFooter()}
    ${renderCookie(st)}
    ${renderAiWidget(st)}
    ${renderAicwModal(st)}
  `;
  if (window.lucide) window.lucide.createIcons();
}

/* ============================== ACTIONS ============================== */

const ACTIONS = {
  goHome: () => { setState({ cat: null, query: '' }); go('home'); },
  goCart: () => go('cart'),
  goCheckout: () => go('checkout'),
  toggleMenu: () => setState(s => ({ menuOpen: !s.menuOpen })),
  closeCookie: () => setState({ cookieOpen: false }),

  pickSuggestion: (el) => {
    const id = el.dataset.id;
    setState({ pid: id, qty: 1, mode: 'retail', query: '' });
    go('pdp');
  },
  pickCategory: (el) => {
    const cat = el.dataset.cat;
    setState({ cat, query: '', visible: 10, menuOpen: false, screen: 'home' });
    window.scrollTo(0, 520);
  },
  pickSlide: (el) => goToSlide(Number(el.dataset.slide)),
  prevSlide: () => goToSlide((state.slide + HEROES.length - 1) % HEROES.length),
  nextSlide: () => goToSlide((state.slide + 1) % HEROES.length),
  pickProvince: (el) => setState({ province: el.dataset.province }),
  loadMore: () => setState(s => ({ visible: s.visible + 5 })),
  openProduct: (el) => {
    setState({ pid: el.dataset.id, qty: 1, mode: 'retail', quoteSent: false });
    go('pdp');
  },

  setRetail: () => setState({ mode: 'retail', qty: 1 }),
  setWholesale: () => setState({ mode: 'wholesale', qty: 10 }),
  requestQuote: () => setState({ quoteSent: true }),
  incQty: () => setState(s => ({ qty: Math.min(find(s.pid).stock, s.qty + 1) })),
  decQty: () => setState(s => ({ qty: Math.max(1, s.qty - 1) })),
  addToCart: () => addItem(find(state.pid), state.qty, state.mode),
  buyNow: () => { addItem(find(state.pid), state.qty, state.mode); go('cart'); },
  pickReviewFilter: (el) => setState({ reviewFilter: el.dataset.filter }),
  visitStore: (el) => { setState({ shop: el.dataset.shop }); go('store'); },

  cartInc: (el) => setState(s => ({ cart: s.cart.map(x => x.key === el.dataset.key ? { ...x, qty: x.qty + 1 } : x) })),
  cartDec: (el) => setState(s => ({ cart: s.cart.map(x => x.key === el.dataset.key ? { ...x, qty: Math.max(1, x.qty - 1) } : x) })),
  cartRemove: (el) => setState(s => ({ cart: s.cart.filter(x => x.key !== el.dataset.key) })),

  pickShip: (el) => setState({ ship: el.dataset.ship }),
  pickPay: (el) => setState({ pay: el.dataset.pay }),
  applyVoucher: () => setState({ voucherOk: true }),
  payNow: () => { qrEnd = Date.now() + 15 * 60e3; go(state.pay === 'promptpay' ? 'qr' : 'paid'); },
  confirmPaid: () => { setState({ cart: [] }); go('paid'); },

  toggleAiChat: () => setState(s => ({ aiOpen: !s.aiOpen })),
  aiSendChip: (el) => submitAiMessage(el.dataset.text),
  aiSubmit: () => submitAiMessage(state.aiDraft),
  aiOpenProduct: (el) => {
    setState({ pid: el.dataset.id, qty: 1, mode: 'retail', quoteSent: false, aiOpen: false });
    go('pdp');
  },

  goSeller: () => { setState({ sellerTab: 'todo', sellerSection: 'studio' }); go('seller'); },
  sellerSetSection: (el) => setState({ sellerSection: el.dataset.section }),
  sellerPickTab: (el) => setState({ sellerTab: el.dataset.tab }),
  sellerOptimize: (el) => setState(s => ({
    sellerOptimized: s.sellerOptimized.includes(el.dataset.id) ? s.sellerOptimized : s.sellerOptimized.concat([el.dataset.id])
  })),
  sellerStockInc: (el) => sellerAdjustStock(el.dataset.id, 1),
  sellerStockDec: (el) => sellerAdjustStock(el.dataset.id, -1),
  sellerSetRange: (el) => setState({ sellerInsightsRange: el.dataset.range }),
  sellerSetSalesTab: (el) => setState({ sellerSalesTab: el.dataset.tab }),
  sellerViewAllSales: () => setState({ sellerCurrentPage: 'sales' }),
  sellerToggleAddProduct: () => setState(s => ({ sellerShowAddProduct: !s.sellerShowAddProduct })),
  sellerBrowseProductImage: () => console.log('Browse product image'),
  sellerSaveProduct: () => alert('Product saved! (Demo mode - not persisted)'),
  filterStockSearch: (el) => setState({ stockSearchFilter: el.value }),
  filterStockStatus: (el) => setState({ stockStatusFilter: el.value }),
  filterStockCategory: (el) => setState({ stockCategoryFilter: el.value }),
  resetStockFilters: () => setState({ stockSearchFilter: '', stockStatusFilter: '', stockCategoryFilter: '' }),

  openAicwNew: () => setState({
    aicwOpen: true, aicwMode: 'new', aicwPid: null, aicwKeywords: '', aicwDraft: null, aicwGenerating: false,
    aicwImages: [], aicwEnhancing: []
  }),
  openAicwEdit: (el) => {
    const p = find(el.dataset.id);
    const existingSrc = productQuery(p);
    setState({
      aicwOpen: true, aicwMode: 'edit', aicwPid: el.dataset.id,
      aicwKeywords: ORIGINAL_PRODUCT_NAMES[el.dataset.id] || p.name,
      aicwDraft: null, aicwGenerating: false,
      aicwImages: existingSrc.indexOf('http') === 0 ? [{ src: existingSrc, name: 'ภาพสินค้าปัจจุบัน', existing: true, enhanced: false }] : [],
      aicwEnhancing: []
    });
  },
  closeAicw: () => { clearTimeout(aicwGenerateTimer); setState({ aicwOpen: false }); },
  aicwBrowse: () => { const el = document.getElementById('aicwFileInput'); if (el) el.click(); },
  aicwRemoveImage: (el) => {
    const idx = Number(el.dataset.index);
    setState(s => ({ aicwImages: s.aicwImages.filter((_, i) => i !== idx) }));
  },
  aicwSetCover: (el) => {
    const idx = Number(el.dataset.index);
    setState(s => {
      const imgs = s.aicwImages.slice();
      const chosen = imgs.splice(idx, 1)[0];
      imgs.unshift(chosen);
      return { aicwImages: imgs };
    });
  },
  aicwEnhanceImage: (el) => {
    const idx = Number(el.dataset.index);
    setState(s => ({ aicwEnhancing: s.aicwEnhancing.includes(idx) ? s.aicwEnhancing : s.aicwEnhancing.concat([idx]) }));
    setTimeout(() => {
      setState(s => {
        const imgs = s.aicwImages.slice();
        if (imgs[idx]) imgs[idx] = { ...imgs[idx], enhanced: true };
        return { aicwImages: imgs, aicwEnhancing: s.aicwEnhancing.filter(i => i !== idx) };
      });
    }, 1100 + Math.random() * 400);
  },
  aicwGenerate: () => {
    setState({ aicwGenerating: true, aicwDraft: null });
    clearTimeout(aicwGenerateTimer);
    aicwGenerateTimer = setTimeout(() => {
      setState({ aicwDraft: aiGenerateContent(state.aicwKeywords), aicwGenerating: false });
    }, 900 + Math.random() * 500);
  },
  aicwApply: () => {
    if (state.aicwMode === 'edit' && state.aicwPid && state.aicwDraft) {
      const p = find(state.aicwPid);
      p.name = state.aicwDraft.title;
      p.aiCaption = state.aicwDraft.caption;
      p.aiDescription = state.aicwDraft.description;
      if (!state.sellerOptimized.includes(p.id)) state.sellerOptimized.push(p.id);
    }
    setState({ aicwOpen: false });
  }
};

/* ============================== EVENT DELEGATION ============================== */

function initEvents() {
  const app = document.getElementById('app');

  app.addEventListener('click', (e) => {
    const el = e.target.closest('[data-action]');
    if (!el) return;
    const fn = ACTIONS[el.dataset.action];
    if (fn) fn(el);
  });

  app.addEventListener('input', (e) => {
    if (e.target.id === 'searchInput') {
      setState({ query: e.target.value, visible: 10, cat: null, screen: 'home' });
      const input = document.getElementById('searchInput');
      if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
    } else if (e.target.id === 'voucherInput') {
      state.voucher = e.target.value;
    } else if (e.target.id === 'aiInputField') {
      state.aiDraft = e.target.value;
    } else if (e.target.id === 'aicwKeywordsField') {
      state.aicwKeywords = e.target.value;
    } else if (e.target.id === 'aicwTitleField' && state.aicwDraft) {
      state.aicwDraft.title = e.target.value;
    } else if (e.target.id === 'aicwCaptionField' && state.aicwDraft) {
      state.aicwDraft.caption = e.target.value;
    } else if (e.target.id === 'aicwDescField' && state.aicwDraft) {
      state.aicwDraft.description = e.target.value;
    }
  });

  app.addEventListener('keydown', (e) => {
    if (e.target.id === 'aiInputField' && e.key === 'Enter') {
      e.preventDefault();
      submitAiMessage(e.target.value);
    }
  });

  app.addEventListener('change', (e) => {
    if (e.target.id === 'shipToSelect') setState({ shipTo: e.target.value });
    else if (e.target.id === 'aicwFileInput') {
      handleAicwFiles(e.target.files);
      e.target.value = '';
    }
  });

  // Drag-and-drop for the AI content writer's image dropzone. These are
  // transient hover visuals only, so they're toggled directly on the DOM
  // node instead of going through setState()/render() — a full rebuild on
  // every dragover would be wasteful and could interrupt the drag gesture.
  app.addEventListener('dragover', (e) => {
    const zone = e.target.closest('.aicw-dropzone');
    if (!zone) return;
    e.preventDefault();
    zone.classList.add('is-dragover');
  });
  app.addEventListener('dragleave', (e) => {
    const zone = e.target.closest('.aicw-dropzone');
    if (zone) zone.classList.remove('is-dragover');
  });
  app.addEventListener('drop', (e) => {
    const zone = e.target.closest('.aicw-dropzone');
    if (!zone) return;
    e.preventDefault();
    zone.classList.remove('is-dragover');
    handleAicwFiles(e.dataTransfer.files);
  });

  app.addEventListener('error', imgErrorFallback, true);
}

/* ============================== BOOT ============================== */

function goToSlide(index) {
  // Patch the track transform and dots in place instead of a full
  // setState()/render() — a full rebuild would swap in a brand-new
  // track element with the end transform already set, so the CSS
  // transition would have nothing to animate from and the slide
  // would just cut instead of sliding.
  state.slide = index;
  const track = document.getElementById('heroTrack');
  if (track) track.style.transform = `translateX(-${index * 100}%)`;
  const dots = document.getElementById('heroDots');
  if (dots) {
    dots.querySelectorAll('.hero-dot').forEach((d, i) => {
      d.style.width = i === index ? '20px' : '7px';
      d.style.background = i === index ? '#FFFFFF' : 'rgba(255,255,255,.5)';
    });
  }
}

function updateFlipDigit(id, text, changed) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  if (changed) {
    el.classList.remove('flip');
    void el.offsetWidth; // restart the animation
    el.classList.add('flip');
  }
}

function tickCountdowns() {
  // Patch just the countdown digits in place instead of doing a full
  // setState()/render() every second — a full innerHTML rebuild would
  // tear down and recreate every card each tick, which visibly breaks
  // (blinks) the :hover state of whatever card the pointer is over.
  const nowTs = Date.now();
  state.now = nowTs;

  if (state.screen === 'home') {
    const remain = Math.max(0, flashEnd - nowTs);
    const h = Math.floor(remain / 3600e3);
    const m = Math.floor(remain / 60e3) % 60;
    const s = Math.floor(remain / 1000) % 60;
    updateFlipDigit('cd-h', pad(h), _flipPrev.h !== null && _flipPrev.h !== h);
    updateFlipDigit('cd-m', pad(m), _flipPrev.m !== null && _flipPrev.m !== m);
    updateFlipDigit('cd-s', pad(s), _flipPrev.s !== null && _flipPrev.s !== s);
    _flipPrev.h = h; _flipPrev.m = m; _flipPrev.s = s;
  } else if (state.screen === 'qr') {
    const el = document.getElementById('qrCountdownVal');
    if (el) {
      const qrRemain = Math.max(0, qrEnd - nowTs);
      el.textContent = pad(Math.floor(qrRemain / 60e3)) + ':' + pad(Math.floor(qrRemain / 1000) % 60);
    }
  }
}

/* ============================== SEARCH TYPEWRITER ============================== */
// Self-scheduling loop that looks up the DOM by id on every tick instead of
// holding element references — a full render() rebuilds the header (and this
// element) on any state change, so a stale reference would silently stop
// updating. Querying fresh each tick keeps it working across re-renders.
const TYPEWRITER_PHRASES = ['หูฟังไร้สายบลูทูธ', 'รองเท้าผ้าใบ Nike', 'สกินแคร์วิตามินซี', 'กระเป๋าเป้เดินทาง', 'สมาร์ทวอทช์ AMOLED', 'เมล็ดกาแฟอาราบิก้า'];
let twPhrase = 0, twChar = 0, twDeleting = false;

function tickTypewriter() {
  const input = document.getElementById('searchInput');
  const textEl = document.getElementById('twText');
  const wrapEl = document.getElementById('searchTypewriter');
  if (!input || !textEl || !wrapEl) return;

  const active = document.activeElement === input || input.value;
  wrapEl.style.visibility = active ? 'hidden' : 'visible';
  if (active) { setTimeout(tickTypewriter, 300); return; }

  const phrase = TYPEWRITER_PHRASES[twPhrase];
  let delay = 70;
  if (!twDeleting) {
    twChar++;
    textEl.textContent = phrase.slice(0, twChar);
    if (twChar === phrase.length) { twDeleting = true; delay = 1400; }
  } else {
    twChar--;
    textEl.textContent = phrase.slice(0, twChar);
    delay = 35;
    if (twChar === 0) { twDeleting = false; twPhrase = (twPhrase + 1) % TYPEWRITER_PHRASES.length; delay = 400; }
  }
  setTimeout(tickTypewriter, delay);
}

function boot() {
  initEvents();
  render();
  setInterval(tickCountdowns, 1000);
  setInterval(() => { if (state.screen === 'home') goToSlide((state.slide + 1) % HEROES.length); }, 6000);
  window.addEventListener('resize', () => setState({ vw: window.innerWidth }));
  tickTypewriter();
}

document.addEventListener('DOMContentLoaded', boot);
