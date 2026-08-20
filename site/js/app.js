'use strict';

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

const HEROES = [
  { t: 'มหกรรมลดราคาส่งท้ายเดือน', s: 'ลดสูงสุด 70% ทุกหมวดหมู่ พร้อมส่งฟรีทั่วประเทศ', cta: 'ช้อปเลย', img: 'https://images.unsplash.com/photo-1602078149001-aff343c2e189' },
  { t: 'อิเล็กทรอนิกส์และแก็ดเจ็ตสุดฮอต', s: 'หูฟัง สมาร์ทวอทช์ และอุปกรณ์ไอทีลดพิเศษ', cta: 'ดูสินค้าไอที', img: 'https://images.unsplash.com/photo-1707485122968-56916bd2c464' },
  { t: 'แฟชั่นมาใหม่ทุกสัปดาห์', s: 'เสื้อผ้า รองเท้า กระเป๋า จากแบรนด์ทั่วโลก', cta: 'สำรวจแฟชั่น', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e' },
];

const NEWS_ITEMS = [
  { title: 'เทรนด์อิเล็กทรอนิกส์ 2024', desc: 'สินค้าไอทีที่จะมาแรงในปีนี้', tag: 'เทคโนโลยี', date: 'เมื่อ 2 วันที่แล้ว', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97' },
  { title: 'ไอเดียแต่งบ้านให้สวย', desc: 'เคล็ดลับตกแต่งบ้านด้วยเบิดจนน้อย', tag: 'ที่อยู่อาศัย', date: 'เมื่อ 4 วันที่แล้ว', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267' },
  { title: 'แฟชั่นที่สวมใส่ได้ทุกวัน', desc: 'คัดสรรชุดเสื้อผ้าคุณภาพดีไม่แพง', tag: 'แฟชั่น', date: 'เมื่อ 1 สัปดาห์ที่แล้ว', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae' },
];

/* ============================== STATE ============================== */

const state = {
  heroSlide: 0,
  categoryPage: 0,
  selectedCategory: null,
  vw: window.innerWidth
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

function imgUrl(tags, seed = 'default') {
  if (tags && tags.indexOf('http') === 0) {
    return `${tags}?auto=format&fit=crop&w=800&h=800&q=80`;
  }
  return `https://loremflickr.com/800/800/${tags || 'product'}?lock=${seed}`;
}

function starRating(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '✩' : '') + '☆'.repeat(empty);
}

/* ============================== RENDER FUNCTIONS ============================== */

function renderNavbar() {
  return `
    <nav class="navbar">
      <div class="container navbar-inner">
        <div class="navbar-logo">
          <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>
          SME.GO
        </div>
        <ul class="navbar-nav">
          <li><a href="#electronics">อิเล็กทรอนิกส์</a></li>
          <li><a href="#fashion">แฟชั่น</a></li>
          <li><a href="#beauty">ความงาม</a></li>
          <li><a href="#home">ของใช้ในบ้าน</a></li>
        </ul>
        <div class="navbar-icons">
          <svg class="navbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <svg class="navbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          <svg class="navbar-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
      </div>
    </nav>
  `;
}

function renderHero() {
  const hero = HEROES[state.heroSlide];
  const heroImg = PRODUCTS[state.heroSlide].price ? PRODUCT_QUERY[PRODUCTS[state.heroSlide].id] : hero.img;

  return `
    <section class="hero">
      <div class="container">
        <div class="hero-inner">
          <div class="hero-content">
            <h1 class="hero-title">${esc(hero.t)}</h1>
            <p class="hero-subtitle">${esc(hero.s)}</p>
            <button class="btn btn-primary btn-lg">${esc(hero.cta)}</button>
            <div class="hero-carousel-dots">
              ${HEROES.map((_, i) => `<div class="carousel-dot ${i === state.heroSlide ? 'active' : ''}" onclick="setState({ heroSlide: ${i} })"></div>`).join('')}
            </div>
          </div>
          <div class="hero-image">
            <img src="${imgUrl(heroImg)}" alt="${esc(hero.t)}" loading="eager">
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFeaturedProducts() {
  const featured = [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]];

  return `
    <section class="section">
      <div class="container">
        <div class="featured-row">
          <div class="featured-card black">
            <div class="featured-card-image">
              <img src="${imgUrl(PRODUCT_QUERY[featured[0].id])}" alt="${esc(featured[0].name)}" loading="lazy">
            </div>
            <div class="featured-card-content">
              <h3 class="featured-card-title">${esc(featured[0].name)}</h3>
              <p class="featured-card-desc">${baht(featured[0].price)}</p>
              <button class="btn btn-primary btn-sm">ซื้อเลย</button>
            </div>
          </div>

          <div class="featured-card black">
            <div class="featured-card-image">
              <img src="${imgUrl(PRODUCT_QUERY[featured[1].id])}" alt="${esc(featured[1].name)}" loading="lazy">
            </div>
            <div class="featured-card-content">
              <h3 class="featured-card-title">${esc(featured[1].name)}</h3>
              <p class="featured-card-desc">${baht(featured[1].price)}</p>
              <button class="btn btn-primary btn-sm">ซื้อเลย</button>
            </div>
          </div>

          <div class="featured-card yellow">
            <div class="featured-card-image">
              <img src="${imgUrl(PRODUCT_QUERY[featured[2].id])}" alt="${esc(featured[2].name)}" loading="lazy">
            </div>
            <div class="featured-card-content">
              <h3 class="featured-card-title">${esc(featured[2].name)}</h3>
              <p class="featured-card-desc">${baht(featured[2].price)}</p>
              <button class="btn btn-primary btn-sm">ซื้อเลย</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPromo() {
  return `
    <section class="section">
      <div class="container">
        <div class="promo-duo">
          <div class="promo-tile">
            <div class="promo-tile-content">
              <h2 class="promo-tile-title">หูฟังแต่งเสียง</h2>
              <p class="promo-tile-tagline">ลดพิเศษสำหรับสัปดาห์นี้</p>
              <button class="btn btn-primary btn-sm">ดูเพิ่มเติม</button>
            </div>
            <div class="promo-tile-image">
              <img src="${imgUrl(PRODUCT_QUERY.p1)}" alt="หูฟัง" loading="lazy">
            </div>
          </div>

          <div class="promo-tile">
            <div class="promo-tile-content">
              <h2 class="promo-tile-title">เทคโนโลยี ลดราคา</h2>
              <p class="promo-tile-tagline">สินค้าไอทีราคาพิเศษ</p>
              <button class="btn btn-primary btn-sm">ดูเพิ่มเติม</button>
            </div>
            <div class="promo-tile-image">
              <img src="${imgUrl(PRODUCT_QUERY.p15)}" alt="เทคโนโลยี" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderCategoryRail() {
  const catsPerPage = state.vw < 768 ? 3 : 6;
  const catPages = Math.ceil(CATS.length / catsPerPage);
  const startIdx = state.categoryPage * catsPerPage;
  const visibleCats = CATS.slice(startIdx, startIdx + catsPerPage);

  return `
    <section class="section">
      <div class="container">
        <div class="category-rail">
          <h2 class="category-rail-title">ช้อปตามหมวดหมู่</h2>
          <div class="category-scroll">
            ${CATS.map((cat, idx) => `
              <div class="category-item" onclick="setState({ selectedCategory: '${esc(cat.n)}' })">
                <div class="category-icon">
                  <img src="${imgUrl(cat.i, cat.n)}" alt="${esc(cat.n)}" loading="lazy">
                </div>
                <span class="category-label">${esc(cat.n)}</span>
              </div>
            `).join('')}
          </div>
          <div class="category-dots">
            ${Array(catPages).fill(0).map((_, i) => `
              <div class="dot ${i === state.categoryPage ? 'active' : ''}" onclick="setState({ categoryPage: ${i} })"></div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderBestSellers() {
  const allProducts = PRODUCTS;

  return `
    <section class="section">
      <div class="container">
        <div class="best-sellers">
          <h2 class="best-sellers-title">สินค้าขายดี</h2>
          <div class="filter-tabs">
            <button class="filter-tab active">ทุกหมวดหมู่</button>
            ${CATS.slice(0, 5).map(cat => `
              <button class="filter-tab" onclick="setState({ selectedCategory: '${esc(cat.n)}' })">${esc(cat.n)}</button>
            `).join('')}
          </div>
          <div class="product-grid">
            ${allProducts.map(p => `
              <div class="product-card">
                <div class="product-card-image">
                  <img src="${imgUrl(PRODUCT_QUERY[p.id])}" alt="${esc(p.name)}" loading="lazy">
                  ${p.flash ? `<div class="product-badge">-${Math.round((1 - p.price / (p.old || p.price * 1.5)) * 100)}%</div>` : ''}
                </div>
                <div class="product-card-content">
                  <h3 class="product-name">${esc(p.name)}</h3>
                  <div>
                    <span class="product-price">${baht(p.price)}</span>
                    ${p.old ? `<span class="product-price-original">${baht(p.old)}</span>` : ''}
                  </div>
                  <p class="text-sm text-muted">${esc(p.shop)} • ⭐ ${p.rating}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderNewsletter() {
  return `
    <section class="section">
      <div class="container">
        <div class="newsletter-banner">
          <div class="newsletter-image">
            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=600&fit=crop" alt="นิวส์เล็ตเตอร์" loading="lazy">
          </div>
          <div class="newsletter-content">
            <h2 class="newsletter-title">รับข่าวสารสินค้าใหม่</h2>
            <p class="newsletter-description">สมัครรับข้อมูลข่าวสารสินค้าใหม่ ลดราคา และข้อเสนอพิเศษโดยตรง</p>
            <form class="newsletter-form">
              <input type="email" class="newsletter-input" placeholder="อีเมลของคุณ" required>
              <button type="submit" class="btn btn-primary">สมัครสมาชิก</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderNews() {
  return `
    <section class="section">
      <div class="container">
        <div class="news-section">
          <h2 class="news-title">ข่าวสารและเทรนด์</h2>
          <div class="news-grid">
            ${NEWS_ITEMS.map(news => `
              <div class="news-card">
                <div class="news-card-image">
                  <img src="${news.img}?w=500&h=375&fit=crop" alt="${esc(news.title)}" loading="lazy">
                </div>
                <div class="news-card-meta">
                  <span class="news-card-tag">${esc(news.tag)}</span>
                  <span>${esc(news.date)}</span>
                </div>
                <h3 class="news-card-title">${esc(news.title)}</h3>
                <p class="text-sm text-muted">${esc(news.desc)}</p>
                <a href="#" class="news-card-link">อ่านเพิ่มเติม →</a>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-section">
          <h4 class="footer-title">เกี่ยวกับเรา</h4>
          <p class="footer-promo">SME.GO คือตลาดออนไลน์สำหรับผู้ประกอบการและลูกค้า บริการจัดส่งฟรีและคืนสินค้าง่าย</p>
          <div class="footer-newsletter">
            <input type="email" class="footer-email-input" placeholder="อีเมลของคุณ">
            <button class="btn btn-yellow btn-sm">สมัครสมาชิก</button>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">การซื้อขาย</h4>
          <div class="footer-links">
            <a href="#" class="footer-link">วิธีการซื้อ</a>
            <a href="#" class="footer-link">วิธีชำระเงิน</a>
            <a href="#" class="footer-link">การคืนสินค้า</a>
            <a href="#" class="footer-link">ติดตามคำสั่งซื้อ</a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">บริษัท</h4>
          <div class="footer-links">
            <a href="#" class="footer-link">เกี่ยวกับ SME.GO</a>
            <a href="#" class="footer-link">ติดต่อเรา</a>
            <a href="#" class="footer-link">นโยบายความเป็นส่วนตัว</a>
            <a href="#" class="footer-link">เงื่อนไขการใช้งาน</a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-title">ช่องทางชำระเงิน</h4>
          <div class="footer-badges">
            <div class="badge-group">
              <div class="badge">
                <span>💳 Visa</span>
              </div>
              <div class="badge">
                <span>💳 Mastercard</span>
              </div>
            </div>
            <div class="badge-group">
              <div class="badge">
                <span>✓ Verified</span>
              </div>
              <div class="badge">
                <span>🔒 Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function render() {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${renderNavbar()}
    ${renderHero()}
    ${renderFeaturedProducts()}
    ${renderPromo()}
    ${renderCategoryRail()}
    ${renderBestSellers()}
    ${renderNewsletter()}
    ${renderNews()}
    ${renderFooter()}
  `;
}

/* ============================== INITIALIZATION ============================== */

window.addEventListener('resize', () => {
  setState({ vw: window.innerWidth });
});

document.addEventListener('DOMContentLoaded', render);
