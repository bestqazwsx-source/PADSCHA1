/* ═══════════════════════════════════════════════
   PADSCHA – Application Logic
   ═══════════════════════════════════════════════ */

(() => {
  "use strict";

  const products = window.PADSCHA_PRODUCTS || [];
  const contact = window.PADSCHA_CONTACT || {};

  /* ── Translations ── */
  const translations = {
    th: {
      'nav-collection': 'คอลเลกชัน',
      'nav-standards': 'มาตรฐาน',
      'nav-bespoke': 'เครื่องประดับ',
      'hero-kicker': 'BANGKOK PRIVATE GEMSTONE SALON',
      'hero-h1': 'พัดพารัดชา พิสูจน์ความแท้<br>ก่อนสัมผัสความงาม',
      'hero-lead': 'Padscha คัดสรรเฉพาะพัดพารัดชาระดับพรีเมียม พร้อมใบเซอร์จากสถาบันอัญมณีระดับสากล ระบุสถานะพร้อมจำหน่ายชัดเจน เปิดเผยประวัติการเผา และวิดีโอหลายสภาพแสงก่อนทุกการตัดสินใจ',
      'hero-btn-collection': 'ดูคอลเลกชัน',
      'hero-btn-book': 'นัดชมส่วนตัว',
      'hero-disclaimer': 'ทุกรายการควรยืนยันด้วยวิดีโอแสงธรรมชาติ รายละเอียดใบเซอร์ และข้อมูลการเผาก่อนทำการจอง',
      'featured-kicker': 'พลอยแนะนำประจำสัปดาห์',
      'featured-desc': 'มีใบเซอร์รับรอง · ยืนยันจากรายงานแล็บ · สอบถามราคา',
      'sidebar-cert-title': 'ใบเซอร์',
      'sidebar-cert-body': 'ทุกรายการพรีเมียมมาพร้อมใบรับรองจากสถาบันอัญมณีระดับสากลหรือเอกสารที่ตรวจสอบได้',
      'sidebar-treat-title': 'ประวัติการเผา',
      'sidebar-treat-body': 'ระบุชัดว่าผ่านการเผา (Heated) หรือไม่ผ่านการเผา (Unheated) ก่อนทำการจอง',
      'sidebar-status-title': 'สถานะ',
      'sidebar-status-body': 'แสดงสถานะพร้อมจำหน่าย สำรองแล้ว และจำหน่ายแล้วให้ทราบก่อนสอบถาม',
      'catalog-kicker': 'PREMIUM PADPARADSCHA',
      'catalog-h2': 'เลือกพัดพารัดชาพร้อมหลักฐานรับรอง',
      'catalog-desc': 'รวบรวมเฉพาะพัดพารัดชาคุณภาพสูง พร้อมสถานะที่ชัดเจน ขอดูวิดีโอ ใบเซอร์ และข้อมูลการเผาได้ผ่าน LINE ก่อนตัดสินใจทุกครั้ง',
      'catalog-btn-book': 'นัดชมส่วนตัว',
      'filter-label-category': 'ประเภทพลอย',
      'filter-label-availability': 'สถานะ',
      'filter-label-sort': 'จัดเรียง',
      'filter-tab-all-cat': 'ทั้งหมด',
      'filter-tab-padparadscha': 'Padparadscha Sapphire',
      'filter-tab-jewelry': 'เครื่องประดับ',
      'filter-tab-all-status': 'พลอยที่มีอยู่ขณะนี้',
      'filter-tab-available': 'พร้อมจำหน่าย',
      'filter-tab-reserved': 'ปิดจอง',
      'sort-featured': 'Padscha แนะนำ',
      'sort-available-first': 'พร้อมจำหน่ายก่อน',
      'sort-carat-desc': 'น้ำหนักมาก → น้อย',
      'standards-kicker': 'มาตรฐาน PADSCHA',
      'standards-h2': 'ทุกเม็ดพลอยควรมาพร้อมความโปร่งใส',
      'standards-lead': 'อัญมณีคุณภาพสูงต้องมาพร้อมสีที่ดูได้จริง ใบเซอร์ที่ตรวจสอบได้ และข้อมูลการเผาครบถ้วน ก่อนที่ผู้ซื้อจะตัดสินใจจอง',
      'std-01-title': 'ใบรับรองคุณภาพ',
      'std-01-body': 'แสดงใบรับรองจากห้องแล็บอัญมณีหรือเอกสารที่ตรวจสอบได้ทุกครั้งที่มี',
      'std-02-title': 'เปิดเผยประวัติการเผา',
      'std-02-body': 'Heated หรือ Unheated ระบุตามเอกสารจริงเท่านั้น ไม่คาดเดา',
      'std-03-title': 'สอบถามตรงรายการ',
      'std-03-body': 'ทุกการกดสอบถามจะระบุรหัสพลอยที่สนใจไปยังทีมงานโดยตรง เพื่อตอบกลับได้ทันที',
      'bespoke-kicker': 'งานสั่งทำพิเศษ',
      'bespoke-h2': 'สั่งทำเครื่องประดับพัดพารัดชาในแบบของคุณ',
      'bespoke-lead': 'เลือกพลอยที่ใช่ก่อน แล้วให้ช่างฝีมือของเราออกแบบตัวเรือนให้เข้ากับสไตล์ของคุณ งานสั่งทำทุกชิ้นเริ่มจากอัญมณีที่คุณเลือกเอง',
      'bespoke-btn': 'เริ่มปรึกษาได้เลย',
      'process-kicker': 'ขั้นตอนการสอบถาม',
      'process-h2': 'สอบถามง่าย ไม่ต้องตัดสินใจซื้อทันที',
      'process-01-title': 'เลือกพลอยที่สนใจ',
      'process-01-body': 'เรียกดูแคตตาล็อกและตรวจสอบสถานะพลอยก่อนสอบถาม',
      'process-02-title': 'ขอดูหลักฐานจริง',
      'process-02-body': 'ติดต่อผ่าน LINE เพื่อขอรูป วิดีโอ ใบเซอร์ และข้อมูลการเผา',
      'process-03-title': 'จองหรือสำรอง',
      'process-03-body': 'ทีมงานดูแลเป็นรายบุคคล พร้อมเงื่อนไขการจองและการรับประกันที่ชัดเจน',
      'contact-kicker': 'ติดต่อ PADSCHA',
      'contact-h2': 'สอบถามพัดพารัดชาแซฟไฟร์',
      'contact-body': 'ติดต่อทีมงานผ่านช่องทางที่สะดวก เพื่อรับคำแนะนำและเลือกชมพลอยส่วนตัว',
      'cert-badges-label': 'ใบรับรองวิชาชีพ · AIGS',
      'cert-1': 'Synthetic & Treated Gem Identification',
      'cert-2': 'Gem Identification',
      'cert-3': 'Diamond Grading & Pricing',
      'cert-4': 'Colored Stone Grading & Pricing',
      'dialog-lbl-status': 'สถานะ',
      'dialog-lbl-price': 'ราคา',
      'dialog-lbl-carat': 'น้ำหนัก',
      'dialog-lbl-size': 'ขนาด',
      'dialog-lbl-color': 'โทนสี',
      'dialog-lbl-cut': 'รูปทรง',
      'dialog-lbl-origin': 'แหล่งกำเนิด',
      'dialog-lbl-treatment': 'การเผา',
      'dialog-lbl-cert': 'ใบเซอร์',
      'dialog-lbl-thainame': 'ชื่อภาษาไทย',
      'dialog-btn-line': 'สอบถามผ่าน LINE',
      'dialog-btn-close': 'ปิด',
    },
    en: {
      'nav-collection': 'COLLECTION',
      'nav-standards': 'STANDARDS',
      'nav-bespoke': 'JEWELRY',
      'hero-kicker': 'BANGKOK PRIVATE GEMSTONE SALON',
      'hero-h1': 'Padparadscha — Proven authenticity, unparalleled beauty.',
      'hero-lead': 'Padscha focuses on premium padparadscha sapphires with international certificate support, clear availability status, treatment disclosure, and multi-light videos before every decision.',
      'hero-btn-collection': 'VIEW COLLECTION',
      'hero-btn-book': 'BOOK PRIVATE VIEWING',
      'hero-disclaimer': 'Every real listing should be confirmed with no-filter videos, certificate details, and treatment disclosure before reservation.',
      'featured-kicker': 'SELECTED THIS WEEK',
      'featured-desc': 'Certificate verified · To be confirmed from lab report · สอบถามราคา',
      'sidebar-cert-title': 'Certificate',
      'sidebar-cert-body': 'Premium listings need internationally recognized proof or verifiable documentation.',
      'sidebar-treat-title': 'Treatment',
      'sidebar-treat-body': 'Heated or unheated status must be disclosed before reservation.',
      'sidebar-status-title': 'Status',
      'sidebar-status-body': 'Available, reserved and sold states should be visible before inquiry.',
      'catalog-kicker': 'PREMIUM PADPARADSCHA',
      'catalog-h2': 'Choose padparadscha with proof.',
      'catalog-desc': 'This catalog focuses only on premium padparadscha sapphires, with clear availability status and LINE inquiry for videos, certificates, and treatment details before any decision.',
      'catalog-btn-book': 'Book private viewing',
      'filter-label-category': 'CATEGORY',
      'filter-label-availability': 'AVAILABILITY',
      'filter-label-sort': 'Sort',
      'filter-tab-all-cat': 'All',
      'filter-tab-padparadscha': 'Padparadscha Sapphire',
      'filter-tab-jewelry': 'Jewelry',
      'filter-tab-all-status': 'Current stones',
      'filter-tab-available': 'Available',
      'filter-tab-reserved': 'Reserved',
      'sort-featured': 'Padscha edit',
      'sort-available-first': 'Available first',
      'sort-carat-desc': 'Carat high → low',
      'standards-kicker': 'THE PADSCHA STANDARD',
      'standards-h2': 'Every stone deserves transparency.',
      'standards-lead': 'For premium gemstones, buyers need to see real color, real proof, real status, and speak with our team before reservation. This catalog is designed as an inquiry-first experience.',
      'std-01-title': 'Certified listings',
      'std-01-body': 'Show lab certificates or verified documentation when available.',
      'std-02-title': 'Treatment disclosure',
      'std-02-body': 'Heated or unheated — disclosed per documentation only.',
      'std-03-title': 'SKU inquiry',
      'std-03-body': 'Each inquiry button sends the exact SKU to our admin for immediate response.',
      'bespoke-kicker': 'BESPOKE SERVICE',
      'bespoke-h2': 'Commission your own padparadscha piece.',
      'bespoke-lead': 'Choose the stone first, then work with our artisans to design a setting that matches your vision. Every bespoke piece starts with the right gemstone.',
      'bespoke-btn': 'Start a consultation',
      'process-kicker': 'INQUIRY-FIRST FLOW',
      'process-h2': 'How to inquire — no cart needed.',
      'process-01-title': 'Choose your stone',
      'process-01-body': 'Browse the catalog and check availability status before making an inquiry.',
      'process-02-title': 'Request proof',
      'process-02-body': 'Contact via LINE for real photos, videos, certificates, and treatment disclosure.',
      'process-03-title': 'Book or reserve',
      'process-03-body': 'Our team handles each case personally with reservation terms and guarantees.',
      'contact-kicker': 'CONTACT PADSCHA',
      'contact-h2': 'Inquire about padparadscha sapphires',
      'contact-body': 'Reach out through any of our channels for personalized service and stone selection.',
      'cert-badges-label': 'Professional Credentials · AIGS',
      'cert-1': 'Synthetic & Treated Gem Identification',
      'cert-2': 'Gem Identification',
      'cert-3': 'Diamond Grading & Pricing',
      'cert-4': 'Colored Stone Grading & Pricing',
      'dialog-lbl-status': 'Status',
      'dialog-lbl-price': 'Price',
      'dialog-lbl-carat': 'Carat',
      'dialog-lbl-size': 'Size',
      'dialog-lbl-color': 'Color',
      'dialog-lbl-cut': 'Cut',
      'dialog-lbl-origin': 'Origin',
      'dialog-lbl-treatment': 'Treatment',
      'dialog-lbl-cert': 'Certificate',
      'dialog-lbl-thainame': 'Thai Name',
      'dialog-btn-line': 'Request via LINE',
      'dialog-btn-close': 'Close',
    }
  };

  let currentLang = localStorage.getItem('padscha-lang') || 'th';

  /* ── Currency ── */
  const rates = { THB: 1, USD: 35, EUR: 38 };
  const symbols = { THB: 'THB', USD: 'USD', EUR: 'EUR' };
  let currentCurrency = localStorage.getItem('padscha-currency') || 'THB';

  function t(key) {
    return translations[currentLang]?.[key] ?? translations.en?.[key] ?? key;
  }

  const statusRank = { Available: 0, Reserved: 1, Sold: 2 };

  function getStatusLabel(status) {
    const labels = {
      th: { Available: 'พร้อมจำหน่าย', Reserved: 'ปิดจอง', Sold: 'จำหน่ายแล้ว' },
      en: { Available: 'AVAILABLE', Reserved: 'RESERVED', Sold: 'SOLD' },
    };
    return labels[currentLang]?.[status] || status;
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ── LINE deep-link builder ── */
  function lineHref(product) {
    const message = product
      ? `สวัสดีครับ/ค่ะ สนใจ ${product.name} (${product.sku}) รบกวนขอรูป/วิดีโอจริง ใบเซอร์ และรายละเอียดเพิ่มเติมครับ/ค่ะ`
      : "สวัสดีครับ/ค่ะ สนใจสอบถามรายการพัดพารัดชาแซฟไฟร์ของ Padscha รบกวนแนะนำรายการที่พร้อมสอบถามครับ/ค่ะ";

    if (contact.lineOaId) {
      return `https://line.me/R/oaMessage/${encodeURIComponent(contact.lineOaId)}/?${encodeURIComponent(message)}`;
    }
    return `${contact.line}?text=${encodeURIComponent(message)}`;
  }

  /* ── Price formatter ── */
  function formatPrice(value) {
    if (value === null || value === undefined) return currentLang === 'th' ? 'สอบถามราคา' : 'Price on request';
    const converted = Math.round(value / rates[currentCurrency]);
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }).format(converted) + " " + symbols[currentCurrency];
  }

  /* ── Carat number extractor ── */
  function caratNumber(product) {
    const match = String(product.carat || "").match(/[0-9]+(?:\.[0-9]+)?/);
    return match ? Number(match[0]) : -1;
  }

  /* ── State ── */
  let activeCategory = document.querySelector('#categoryFilter .filter-tab.active')?.dataset.value ?? "all";
  let activeStatus = "all";
  let openSlug = null;

  /* ── Product Card HTML ── */
  function productCard(product) {
    const title = currentLang === 'th' ? (product.thaiName || product.name) : product.name;
    const certVal = currentLang === 'th' ? (product.certificateTh || product.certificate) : product.certificate;
    const cutVal = currentLang === 'th' ? (product.cutTh || product.cut) : product.cut;
    const lineLabel = currentLang === 'th' ? 'สอบถามผ่าน LINE' : 'Inquire via LINE';
    const detailLabel = currentLang === 'th' ? 'ดูรายละเอียด →' : 'View details →';
    const detailUrl = `product.html?slug=${product.slug}`;

    return `
      <article class="product-card" data-status="${product.status}">
        <a class="card-image-link" href="${detailUrl}">
          <div class="product-media">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            <span class="card-category-label">PADPARADSCHA SAPPHIRE</span>
            <span class="card-status-badge status-${product.status}">${getStatusLabel(product.status)}</span>
          </div>
        </a>
        <div class="product-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-spec">${product.carat} · ${cutVal}</p>
          <p class="card-cert">${certVal}</p>
          <p class="card-price">${formatPrice(product.price)}</p>
          <a class="btn-card-line" href="${contact.line}" target="_blank" rel="noreferrer">${lineLabel}</a>
          <a class="card-detail-link" href="${detailUrl}">${detailLabel}</a>
        </div>
      </article>
    `;
  }

  /* ── Render Products ── */
  function renderProducts() {
    const grid = $("#productGrid");
    if (!grid) return;

    const sort = $("#sortMode")?.value || "featured";

    let rows = [...products];

    if (activeCategory !== "all") {
      rows = rows.filter((p) => p.category === activeCategory);
    }

    if (activeStatus === "all") {
      rows = rows.filter((p) => p.status !== "Sold");
    } else {
      rows = rows.filter((p) => p.status === activeStatus);
    }

    rows.sort((a, b) => {
      if (sort === "available-first") return (statusRank[a.status] ?? 9) - (statusRank[b.status] ?? 9);
      if (sort === "carat-desc") return caratNumber(b) - caratNumber(a);
      return products.indexOf(a) - products.indexOf(b);
    });

    const countEl = $("#stoneCount");
    if (countEl) {
      countEl.textContent = currentLang === 'th'
        ? `แสดง ${rows.length} รายการปัจจุบัน`
        : `Showing ${rows.length} current stone${rows.length !== 1 ? "s" : ""}`;
    }

    grid.innerHTML = rows.length
      ? rows.map(productCard).join("")
      : `<div class="empty-state" style="grid-column:1/-1;padding:48px;text-align:center;border:1px dashed var(--line-medium);border-radius:4px;">
           <h3 style="font-family:var(--font-serif);font-size:1.5rem;margin-bottom:8px;">${currentLang === 'th' ? 'ไม่พบรายการ' : 'No stones found'}</h3>
           <p style="color:var(--muted);font-size:0.9rem;">${currentLang === 'th' ? 'ลองเลือกตัวกรองอื่น หรือติดต่อผ่าน LINE' : 'Try selecting a different filter option or contact us via LINE.'}</p>
         </div>`;

    requestAnimationFrame(() => {
      $$(".product-card", grid).forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
        setTimeout(() => {
          card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, i * 80);
      });
    });
  }

  /* ── Detail Dialog ── */
  function detailTemplate(product) {
    const story = currentLang === 'th' ? product.story : (product.storyEn || product.story);
    const colorVal = currentLang === 'th' ? (product.colorTh || product.color) : product.color;
    const cutVal = currentLang === 'th' ? (product.cutTh || product.cut) : product.cut;
    const originVal = currentLang === 'th' ? (product.originTh || product.origin) : product.origin;
    const treatmentVal = currentLang === 'th' ? (product.treatmentTh || product.treatment) : product.treatment;
    const certVal = currentLang === 'th' ? (product.certificateTh || product.certificate) : product.certificate;

    return `
      <div class="dialog-layout" data-slug="${product.slug}">
        <div class="dialog-media">
          <img src="${product.image}" alt="${product.name}" />
        </div>
        <div class="dialog-copy">
          <p class="kicker">${product.sku}</p>
          <h2 id="dialogTitle">${currentLang === 'th' ? (product.thaiName || product.name) : product.name}</h2>
          <p>${story}</p>
          <div class="detail-grid">
            <div><span>${t('dialog-lbl-status')}</span><strong>${getStatusLabel(product.status)}</strong></div>
            <div><span>${t('dialog-lbl-price')}</span><strong>${formatPrice(product.price)}</strong></div>
            <div><span>${t('dialog-lbl-carat')}</span><strong>${product.carat}</strong></div>
            <div><span>${t('dialog-lbl-size')}</span><strong>${product.size}</strong></div>
            <div><span>${t('dialog-lbl-color')}</span><strong>${colorVal}</strong></div>
            <div><span>${t('dialog-lbl-cut')}</span><strong>${cutVal}</strong></div>
            <div><span>${t('dialog-lbl-origin')}</span><strong>${originVal}</strong></div>
            <div><span>${t('dialog-lbl-treatment')}</span><strong>${treatmentVal}</strong></div>
            <div><span>${t('dialog-lbl-cert')}</span><strong>${certVal}</strong></div>
            <div><span>${t('dialog-lbl-thainame')}</span><strong>${product.thaiName}</strong></div>
          </div>
          <div class="dialog-actions">
            <a class="btn btn-dark" href="${lineHref(product)}" target="_blank" rel="noreferrer">${t('dialog-btn-line')}</a>
            <button class="btn btn-outline dialog-close-inline" type="button">${t('dialog-btn-close')}</button>
          </div>
        </div>
      </div>
    `;
  }

  function openDetail(slug) {
    const product = products.find((p) => p.slug === slug);
    const dialog = $("#productDialog");
    const content = $("#dialogContent");
    if (!product || !dialog || !content) return;

    openSlug = slug;
    content.innerHTML = detailTemplate(product);

    const scrollY = window.scrollY;
    document.body.dataset.scrollY = String(scrollY);
    document.body.style.top = `-${scrollY}px`;
    document.documentElement.classList.add("dialog-open");
    document.body.classList.add("dialog-open");
    dialog.showModal();
  }

  /* ── Apply Language ── */
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('padscha-lang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = translations[lang]?.[key];
      if (val !== undefined) el.innerHTML = val;
    });

    $$('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    renderProducts();

    if (openSlug) {
      const content = $("#dialogContent");
      const product = products.find(p => p.slug === openSlug);
      if (content && product) content.innerHTML = detailTemplate(product);
    }
  }

  /* ── Setup Contact Links ── */
  function setupContactLinks() {
    $$(".js-line-link").forEach((n) => (n.href = contact.line || "#"));
    $$(".js-line-label").forEach((n) => (n.textContent = contact.lineLabel || ""));
    $$(".js-instagram-link").forEach((n) => (n.href = contact.instagram || "#"));
    $$(".js-instagram-label").forEach((n) => (n.textContent = contact.instagramLabel || ""));
    $$(".js-facebook-link").forEach((n) => (n.href = contact.facebook || "#"));
    $$(".js-tiktok-link").forEach((n) => (n.href = contact.tiktok || "#"));
  }

  /* ── QR Code ── */
  function setupQRCode() {
    const container = $("#qr-line");
    if (!container || typeof QRCode === "undefined") return;
    new QRCode(container, {
      text: contact.line,
      width: 160,
      height: 160,
      colorDark: "#1a0a00",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
  }

  /* ── Filter Tab Logic ── */
  function setupFilterTabs() {
    const categoryTabs = $$("#categoryFilter .filter-tab");
    categoryTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        categoryTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        activeCategory = tab.dataset.value;
        renderProducts();
      });
    });

    const statusTabs = $$("#statusFilter .filter-tab");
    statusTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        statusTabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        activeStatus = tab.dataset.value;
        renderProducts();
      });
    });
  }

  /* ── Setup Events ── */
  function setupEvents() {
    const yearEl = $("#year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    $("#sortMode")?.addEventListener("change", renderProducts);

    document.addEventListener("click", (e) => {
      const detailBtn = e.target.closest("[data-detail]");
      if (detailBtn) openDetail(detailBtn.dataset.detail);
      if (e.target.closest(".dialog-close, .dialog-close-inline")) {
        $("#productDialog")?.close();
      }
    });

    const dialog = $("#productDialog");
    dialog?.addEventListener("close", () => {
      openSlug = null;
      const scrollY = Number(document.body.dataset.scrollY || "0");
      document.documentElement.classList.remove("dialog-open");
      document.body.classList.remove("dialog-open");
      document.body.style.top = "";
      delete document.body.dataset.scrollY;
      window.scrollTo(0, scrollY);
    });

    dialog?.addEventListener("click", (e) => {
      if (e.target.id === "productDialog") e.target.close();
    });

    const navToggle = $(".nav-toggle");
    const nav = $(".mobile-nav");
    navToggle?.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    nav?.addEventListener("click", (e) => {
      if (!e.target.closest("a")) return;
      nav.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });

    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        applyLang(btn.dataset.lang);
      });
    });

    const currencySelects = $$(".currency-select");
    currencySelects.forEach((sel) => {
      sel.value = currentCurrency;
      sel.addEventListener("change", () => {
        currentCurrency = sel.value;
        localStorage.setItem('padscha-currency', currentCurrency);
        currencySelects.forEach((s) => { s.value = currentCurrency; });
        renderProducts();
        if (openSlug) {
          const content = $("#dialogContent");
          const product = products.find(p => p.slug === openSlug);
          if (content && product) content.innerHTML = detailTemplate(product);
        }
      });
    });
  }

  /* ── Scroll-triggered Animations ── */
  function setupScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    $$(".scroll-reveal").forEach((el) => observer.observe(el));
  }

  /* ── Nav Section Show/Hide ── */
  function setupNavSections() {
    const sectionMap = {
      '#standard': '.standards-section',
    };
    const allSelectors = Object.values(sectionMap);

    function hideAll() {
      allSelectors.forEach(sel => document.querySelector(sel)?.classList.remove('active'));
    }

    function showSection(href) {
      hideAll();
      const el = document.querySelector(sectionMap[href]);
      if (!el) return;
      el.classList.add('active');
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
    }

    document.addEventListener('click', (e) => {
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (sectionMap[href]) {
        e.preventDefault();
        showSection(href);
      } else if (href === '#top') {
        hideAll();
      }
    });

    // Auto-open section when returning from product page
    const openSection = sessionStorage.getItem('openSection');
    if (openSection) {
      sessionStorage.removeItem('openSection');
      const hrefKey = '#' + openSection;
      if (sectionMap[hrefKey]) showSection(hrefKey);
    }
  }

  /* ── Initialize ── */
  setupContactLinks();
  setupQRCode();
  setupEvents();
  setupFilterTabs();
  setupNavSections();
  applyLang(currentLang);
  setupScrollReveal();

  /* ── Preloader ── */
  const preloader = $("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        preloader.classList.add("hidden");
        preloader.addEventListener("transitionend", () => preloader.remove(), {
          once: true,
        });
      }, 1500);
    });
  }
})();
