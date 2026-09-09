// ==========================================================================
// Lee An-cheng (李安成) Curatorial Proposals Presentation Application
// Multilingual Engine & Interactive Demos
// ==========================================================================

let currentLang = 'en';

const TRANSLATIONS = {
  en: {
    nav_title: "Lee An-cheng",
    nav_sub: "Curatorial Platform & Proposals",
    nav_proposals: "3 Proposals",
    nav_matrix: "Comparison Matrix",
    nav_demos: "Interactive Demos",
    nav_collection: "52 Masterworks Archive",
    nav_decision: "Decision Guide",
    lang_btn_text: "繁體中文",

    hero_tag: "Strategic Curatorial Proposal & Platform Roadmap",
    hero_title: "Curating Modern Ink Master Lee An-cheng",
    hero_chinese: "李安成 典藏策展平台規劃",
    hero_subtitle: "Three logical architectural proposals for cataloging, preserving, and curating 52 modern ink masterpieces held across 3 estate custodians for international museum exhibitions in France, Europe, and worldwide.",
    
    metric_artworks_num: "52",
    metric_artworks_label: "Master Artworks",
    metric_artworks_desc: "1979–2000s ink and wash on Xuan paper spanning early to late monumental periods.",
    metric_custodians_num: "3",
    metric_custodians_label: "Estate Custodians",
    metric_custodians_desc: "Private physical collection distributed among 3 family owners & relatives.",
    metric_standards_num: "Trilingual",
    metric_standards_label: "Taiwan & Global Standards",
    metric_standards_desc: "Fully bilingual (ZH/EN) with export to France Joconde, USA CDWA, and Europe LIDO.",
    metric_roadmap_num: "3 Tiers",
    metric_roadmap_label: "Modular Architecture",
    metric_roadmap_desc: "From a sleek digital monograph to an institutional museum collection & 3D gallery suite.",

    p_tab_all: "View All 3 Proposals",
    p_tab_1: "1. Presentation Site",
    p_tab_2: "2. Dynamic CMS",
    p_tab_3: "3. Full Museum Platform",

    p1_badge: "Proposal 1",
    p1_title: "Digital Monograph & Aesthetic Showcase",
    p1_summary: "A pure, high-performance visual exhibition website focused on the aesthetic legacy of Lee An-cheng. Zero backoffice, no database, and $0/mo hosting maintenance.",
    p1_cost: "Hosting: $0 / mo",
    p1_timeline: "Timeline: 3–4 Weeks",

    p2_badge: "Proposal 2",
    p2_title: "Dynamic Exhibition Portal & Showcase CMS",
    p2_summary: "An interactive public frontend backed by a bilingual Admin Portal (CMS) that enables family editors to reorder featured works, curate digital rooms, and publish essays.",
    p2_cost: "Hosting: ~$30–$60 / mo",
    p2_timeline: "Timeline: 8–10 Weeks",

    p3_badge: "Proposal 3",
    p3_title: "Full Museum-Grade Curating & Art CRM Suite",
    p3_summary: "The ultimate institutional solution: 52-Piece Inventory TMS, Epigraphy & Seal Matrix, 3-Custodian Logistics CRM, Automated France/USA/EU Export Engine, and 3D Virtual Gallery.",
    p3_cost: "Hosting: ~$120–$250 / mo",
    p3_timeline: "Timeline: 16–20 Weeks",

    matrix_tag: "Comprehensive Evaluation",
    matrix_title: "Side-by-Side Feature Comparison Matrix",
    matrix_desc: "Compare capabilities across user experience, curatorial backend, logistics tracking, and international museum interoperability.",

    demos_tag: "Live Interactive Concept Demos",
    demos_title: "Experience the Curatorial Innovations",
    demos_desc: "Explore live interactive simulations inspired by world-class museum standards (James Turrell, Rijksmuseum, TeamLab, and French Ministry of Culture).",

    gallery_tag: "Complete Physical Inventory",
    gallery_title: "52 Masterworks Collection Explorer",
    gallery_desc: "Interactive preview of the 52 physical artworks currently archived across the 3 family custodians.",

    filter_all: "All (52)",
    filter_1970s: "1970s Formative",
    filter_1980s: "1980s Transitions",
    filter_1990s: "1990s Abstraction",
    filter_2000s: "2000s Monumental",
    filter_c1: "Custodian 1",
    filter_c2: "Custodian 2",
    filter_c3: "Custodian 3",

    search_placeholder: "Search by ID, title, or era...",
    modal_close: "Close",
    modal_custodian: "Current Custodian",
    modal_dimensions: "Dimensions",
    modal_medium: "Medium",
    modal_mounting: "Mounting Format",
    modal_seal: "Seal Impression",
    modal_condition: "Condition Status",
    modal_era: "Era / Minguo Year"
  },
  zh: {
    nav_title: "李安成",
    nav_sub: "藝術典藏策展平台規劃案",
    nav_proposals: "三大方案",
    nav_matrix: "功能對照表",
    nav_demos: "互動技術演示",
    nav_collection: "52幅典藏畫作庫",
    nav_decision: "決策指引",
    lang_btn_text: "English",

    hero_tag: "戰略策展方案與平台規劃架構",
    hero_title: "現代水墨名家 李安成",
    hero_chinese: "李安成 典藏策展平台規劃",
    hero_subtitle: "為典藏於3位家族保管人的52幅現代水墨代表作，量身打造三大邏輯規劃方案：從沉浸式數位畫廊到接軌法國、歐洲及美國博物館的典藏管理與物流系統。",
    
    metric_artworks_num: "52",
    metric_artworks_label: "現存代表作",
    metric_artworks_desc: "涵蓋1979至2000年代水墨宣紙作品，紀錄從流動筆意到沉雄墨韻之完整歷程。",
    metric_custodians_num: "3",
    metric_custodians_label: "家族保管人",
    metric_custodians_desc: "實體原作目前分別由3位親友及家族成員妥善保存保管。",
    metric_standards_num: "雙語/跨國",
    metric_standards_label: "臺灣與國際標準",
    metric_standards_desc: "前後台全繁中/英文雙語架構，支持一鍵導出法國 Joconde 及美國 CDWA 規範。",
    metric_roadmap_num: "3大架構",
    metric_roadmap_label: "模組化方案",
    metric_roadmap_desc: "從輕量美學專題網站，到具備3D展廳與國際外銷物流的博物館級管理平台。",

    p_tab_all: "瀏覽全部三大方案",
    p_tab_1: "方案一：純展示網站",
    p_tab_2: "方案二：動態策展CMS",
    p_tab_3: "方案三：完整博物館CRM",

    p1_badge: "方案一",
    p1_title: "美學專題數位畫廊 (純前台無後台)",
    p1_summary: "專注於李安成水墨藝術美學展示的高效能靜態網站。無需資料庫與後台，零伺服器維護成本，適合快速向國際策展人呈現精選風采。",
    p1_cost: "主機維護費：$0 / 月",
    p1_timeline: "建置週期：3–4 週",

    p2_badge: "方案二",
    p2_title: "動態策展門戶與前台配置後台 (CMS)",
    p2_summary: "沉浸式前台搭配雙語管理後台，家族成員與策展人員可隨時自訂精選作品、調整展廳排序、發布學術專文與展覽新聞。",
    p2_cost: "主機維護費：約 $30–$60 / 月",
    p2_timeline: "建置週期：8–10 週",

    p3_badge: "方案三",
    p3_title: "博物館級藏品管理 (TMS) 與保管人物流 CRM 平台",
    p3_summary: "全面旗艦級解決方案：52幅原作精準款識印譜管理、3位保管人物流追蹤、跨國博物館標準（法國 Joconde / 美國 CDWA）一鍵導出及 3D 虛擬展廳。",
    p3_cost: "主機維護費：約 $120–$250 / 月",
    p3_timeline: "建置週期：16–20 週",

    matrix_tag: "全方位方案評估",
    matrix_title: "三大方案功能規格對照表",
    matrix_desc: "橫向對比前端視覺體驗、後台管理維護、藏品款識資料庫、保管人物流追蹤及國際展覽標準導出能力。",

    demos_tag: "前沿技術互動演示",
    demos_title: "體驗策展技術與創新功能",
    demos_desc: "親自操作借鑒自 James Turrell、荷蘭國家博物館、TeamLab 及法國文化部規範的互動原型。",

    gallery_tag: "實體典藏完整清單",
    gallery_title: "52幅典藏畫作互動預覽庫",
    gallery_desc: "互動式檢索目前由3位家族保管人妥善典藏的52幅珍貴水墨真跡。",

    filter_all: "全部 (52幅)",
    filter_1970s: "1970年代 早期基隆",
    filter_1980s: "1980年代 水墨轉折",
    filter_1990s: "1990年代 抽象氣韻",
    filter_2000s: "2000年代 沉雄墨光",
    filter_c1: "保管人 1",
    filter_c2: "保管人 2",
    filter_c3: "保管人 3",

    search_placeholder: "搜尋編號、題名或年份...",
    modal_close: "關閉",
    modal_custodian: "現前保管人",
    modal_dimensions: "作品尺寸",
    modal_medium: "材質媒材",
    modal_mounting: "裝裱形制",
    modal_seal: "鈐印記錄",
    modal_condition: "保存現況",
    modal_era: "創作年代 / 民國紀年"
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initProposalTabs();
  initInteractiveDemos();
  initPaintingsGallery();
  initDecisionHelper();
  applyTranslations();
});

// 1. Language Switcher Engine
function initLanguageSwitcher() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      applyTranslations();
      renderPaintingsGrid();
      updateDemoContent();
    });
  }
}

function applyTranslations() {
  const dict = TRANSLATIONS[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const langBtn = document.getElementById('lang-toggle-btn');
  if (langBtn) {
    langBtn.innerHTML = `🌐 ${dict.lang_btn_text}`;
  }

  const searchInput = document.getElementById('gallery-search');
  if (searchInput) {
    searchInput.placeholder = dict.search_placeholder;
  }
}

// 2. Proposal Navigation & Filter Tabs
function initProposalTabs() {
  const tabs = document.querySelectorAll('.p-tab-btn');
  const cards = document.querySelectorAll('.proposal-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-target');
      if (target === 'all') {
        cards.forEach(card => card.style.display = 'flex');
      } else {
        cards.forEach(card => {
          if (card.getAttribute('data-proposal') === target) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }
    });
  });
}

// 3. Interactive Demos
function initInteractiveDemos() {
  // Demo Tabs
  const demoTabs = document.querySelectorAll('.demo-tab-btn');
  const demoPanels = document.querySelectorAll('.demo-panel');

  demoTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      demoTabs.forEach(b => b.classList.remove('active'));
      demoPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panelId = btn.getAttribute('data-panel');
      const targetPanel = document.getElementById(panelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });

  // Demo 1: Atmospheric Scroll Simulator
  const atmosSlider = document.getElementById('atmos-slider');
  const atmosBox = document.getElementById('atmos-box');
  const atmosLabel = document.getElementById('atmos-era-label');
  const atmosImg = document.getElementById('atmos-preview-img');

  if (atmosSlider && atmosBox) {
    atmosSlider.addEventListener('input', (e) => {
      const val = parseInt(e.target.value);
      // Interpolate background color from parchment (#f8f6f0) to deep ink (#0d0f14)
      const ratio = val / 100;
      const r = Math.round(248 - (248 - 13) * ratio);
      const g = Math.round(246 - (246 - 15) * ratio);
      const b = Math.round(240 - (240 - 20) * ratio);
      atmosBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      atmosBox.style.color = ratio > 0.5 ? '#f4f6f8' : '#1a1c20';

      if (ratio < 0.33) {
        atmosLabel.textContent = currentLang === 'en' ? "Early 1979–1985: Airy Luminous Ink (Keelung Period)" : "1979–1985 早期基隆：清透墨色與空靈流動";
        if (window.PAINTINGS_DATA && window.PAINTINGS_DATA[11]) atmosImg.src = window.PAINTINGS_DATA[11].image;
      } else if (ratio < 0.66) {
        atmosLabel.textContent = currentLang === 'en' ? "1990s: Structural Abstraction & Vitality" : "1990年代 水墨轉折：結構抽象與縱橫氣韻";
        if (window.PAINTINGS_DATA && window.PAINTINGS_DATA[21]) atmosImg.src = window.PAINTINGS_DATA[21].image;
      } else {
        atmosLabel.textContent = currentLang === 'en' ? "Post-2000s: Dense Black Ink & Penetrating Light" : "2000年代 沉雄墨光：重墨層積與光影穿透";
        if (window.PAINTINGS_DATA && window.PAINTINGS_DATA[0]) atmosImg.src = window.PAINTINGS_DATA[0].image;
      }
    });
  }

  // Demo 3: Seal Inspector Tool
  const sealBox = document.getElementById('demo-seal-box');
  const sealZoomImg = document.getElementById('inspector-zoom-img');
  const sealOutput = document.getElementById('seal-annotation-output');

  if (sealBox && sealZoomImg) {
    sealBox.addEventListener('click', () => {
      sealZoomImg.style.transform = sealZoomImg.style.transform === 'scale(2.4)' ? 'scale(1)' : 'scale(2.4)';
      sealZoomImg.style.transformOrigin = 'bottom right';
      if (sealOutput) {
        sealOutput.innerHTML = currentLang === 'en' ? 
          `<strong>Seal Identified:</strong> Artist Name Relief Seal (朱文「李安成」)<br><strong>Coordinates:</strong> [x: 0.88, y: 0.91, w: 0.06, h: 0.06]<br><strong>Status:</strong> Authenticated against Master Seal Matrix S-01` :
          `<strong>辨識印鑑：</strong>藝術家朱文姓名印「李安成」<br><strong>歸一化座標：</strong>[x: 0.88, y: 0.91, 寬: 0.06, 高: 0.06]<br><strong>驗證狀態：</strong>已比對權威印譜 S-01 真跡確認`;
      }
    });
  }

  // Demo 4: Crosswalk Tabs
  const xwalkBtns = document.querySelectorAll('.xwalk-tab-btn');
  const xwalkCode = document.getElementById('xwalk-code-display');

  const CROSSWALK_SAMPLES = {
    france: `<!-- France Ministère de la Culture: Base Joconde Export Sample -->
<RECORD>
  <AUTR>LEE An-cheng (李安成, 1959-2015)</AUTR>
  <TITR>Rythme de l'encre (墨韻山水)</TITR>
  <DENO>Peinture / Rouleau vertical (立軸)</DENO>
  <TECH>Encre de Chine sur papier de riz Xuan (水墨宣紙)</TECH>
  <DIM>H. 136.5 cm ; L. 68.0 cm (Montage: 210.0 x 80.5 cm)</DIM>
  <PERI>4e quart 20e siècle (1985 / 民國74年 / 乙丑年)</PERI>
  <INS>Sceau de l'artiste en bas à droite (朱文印)</INS>
  <STAT>Propriété privée / Collection successorale</STAT>
  <CUSTODIAN_ID>CUST-01 (Taiwan)</CUSTODIAN_ID>
</RECORD>`,
    usa: `<!-- USA Getty CDWA Lite / VRA Core 4.0 XML Export Sample -->
<cdwalite:cdwaliteWrap xmlns:cdwalite="http://www.getty.edu/CDWA/CDWALite">
  <cdwalite:cdwalite>
    <cdwalite:objectWorkType>hanging scrolls (AAT: 300015012)</cdwalite:objectWorkType>
    <cdwalite:titleWrap>
      <cdwalite:titleSet>
        <cdwalite:title xml:lang="zh-Hant">墨韻山水</cdwalite:title>
        <cdwalite:title xml:lang="en">Landscape Rhythm</cdwalite:title>
      </cdwalite:titleSet>
    </cdwalite:titleWrap>
    <cdwalite:indexingCreatorSet>
      <cdwalite:nameActorSet>
        <cdwalite:nameActor>Lee An-cheng (李安成)</cdwalite:nameActor>
      </cdwalite:nameActorSet>
    </cdwalite:indexingCreatorSet>
    <cdwalite:indexingMaterialsTechSet>
      <cdwalite:termMaterialsTech>Chinese ink on Xuan paper (AAT: 300053271)</cdwalite:termMaterialsTech>
    </cdwalite:indexingMaterialsTechSet>
    <cdwalite:indexingDatesSet>
      <cdwalite:dateSet>
        <cdwalite:earliestDate>1985</cdwalite:earliestDate>
        <cdwalite:latestDate>1985</cdwalite:latestDate>
      </cdwalite:dateSet>
    </cdwalite:indexingDatesSet>
  </cdwalite:cdwalite>
</cdwalite:cdwaliteWrap>`,
    taiwan: `// Taiwan Cultural Memory Bank 2.0 (國家文化記憶庫) JSON-LD Export
{
  "@context": "https://opendata.culture.tw/schema/v2/culturalArtifact.jsonld",
  "id": "LAC-PTG-1985-012",
  "name": "墨韻山水 (Landscape Rhythm)",
  "creator": {
    "name": "李安成",
    "name_en": "Lee An-cheng",
    "authority_uri": "https://ncl.edu.tw/authority/LAC1959"
  },
  "temporal": {
    "gregorian_year": 1985,
    "minguo_year": "民國74年",
    "ganzhi_lunar": "乙丑年"
  },
  "medium": "水墨",
  "support": "宣紙",
  "mounting_format": "立軸",
  "dimensions": {
    "image_h_cm": 136.5,
    "image_w_cm": 68.0,
    "mounted_h_cm": 210.0,
    "mounted_w_cm": 80.5
  },
  "custodian": "家族保管人 1 (Custodian 1)"
}`
  };

  xwalkBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      xwalkBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.getAttribute('data-format');
      if (xwalkCode && CROSSWALK_SAMPLES[target]) {
        xwalkCode.textContent = CROSSWALK_SAMPLES[target];
      }
    });
  });
}

function updateDemoContent() {
  const atmosSlider = document.getElementById('atmos-slider');
  if (atmosSlider) {
    atmosSlider.dispatchEvent(new Event('input'));
  }
}

// 4. Paintings Collection Explorer Grid & Modal
let currentEraFilter = 'all';
let currentCustodianFilter = 'all';
let searchQuery = '';

function initPaintingsGallery() {
  const filterBtns = document.querySelectorAll('.gallery-filters .filter-btn');
  const searchInput = document.getElementById('gallery-search');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterType = btn.getAttribute('data-filter');
      if (filterType.startsWith('c')) {
        currentCustodianFilter = filterType;
        currentEraFilter = 'all';
      } else {
        currentEraFilter = filterType;
        currentCustodianFilter = 'all';
      }
      renderPaintingsGrid();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase();
      renderPaintingsGrid();
    });
  }

  renderPaintingsGrid();
}

function renderPaintingsGrid() {
  const grid = document.getElementById('paintings-grid');
  if (!grid || !window.PAINTINGS_DATA) return;

  const filtered = window.PAINTINGS_DATA.filter(item => {
    // Era filter
    if (currentEraFilter !== 'all' && item.era_tag !== currentEraFilter) {
      return false;
    }
    // Custodian filter
    if (currentCustodianFilter === 'c1' && !item.custodian.includes('1')) return false;
    if (currentCustodianFilter === 'c2' && !item.custodian.includes('2')) return false;
    if (currentCustodianFilter === 'c3' && !item.custodian.includes('3')) return false;

    // Search query
    if (searchQuery) {
      const matchId = item.id.toLowerCase().includes(searchQuery);
      const matchTitleEn = item.title_en.toLowerCase().includes(searchQuery);
      const matchTitleZh = item.title_zh.toLowerCase().includes(searchQuery);
      const matchYear = item.year.toLowerCase().includes(searchQuery);
      if (!matchId && !matchTitleEn && !matchTitleZh && !matchYear) return false;
    }

    return true;
  });

  grid.innerHTML = filtered.map(item => {
    const title = currentLang === 'en' ? item.title_en : item.title_zh;
    const period = currentLang === 'en' ? item.period_en : item.period_zh;
    const custodian = currentLang === 'en' ? item.custodian : item.custodian_zh;
    const cClass = item.custodian.includes('1') ? 'c1' : (item.custodian.includes('2') ? 'c2' : 'c3');

    return `
      <div class="painting-card" onclick="openPaintingModal('${item.id}')">
        <div class="painting-img-wrap">
          <span class="custodian-tag ${cClass}">${custodian}</span>
          <img src="${item.image}" alt="${title}" loading="lazy" />
        </div>
        <div class="painting-info">
          <span class="painting-id">${item.id} • ${item.year}</span>
          <h4 class="painting-title">${title}</h4>
          <span class="painting-sub">${period}</span>
        </div>
      </div>
    `;
  }).join('');
}

// Modal inspection
window.openPaintingModal = function(id) {
  const item = window.PAINTINGS_DATA.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('painting-modal');
  const dict = TRANSLATIONS[currentLang];

  document.getElementById('modal-img').src = item.image;
  document.getElementById('modal-id-badge').textContent = `${item.id} (${item.year})`;
  document.getElementById('modal-title').textContent = currentLang === 'en' ? item.title_en : item.title_zh;
  document.getElementById('modal-period').textContent = currentLang === 'en' ? item.period_en : item.period_zh;
  
  document.getElementById('modal-meta-custodian').textContent = currentLang === 'en' ? `${item.custodian} (${item.location_en})` : `${item.custodian_zh} (${item.location_zh})`;
  document.getElementById('modal-meta-dimensions').textContent = currentLang === 'en' ? `${item.dimensions} | ${item.dimensions_full}` : `${item.dimensions} | ${item.dimensions_full_zh}`;
  document.getElementById('modal-meta-medium').textContent = currentLang === 'en' ? item.medium_en : item.medium_zh;
  document.getElementById('modal-meta-mounting').textContent = currentLang === 'en' ? item.mounting_en : item.mounting_zh;
  document.getElementById('modal-meta-seal').textContent = currentLang === 'en' ? item.seal_en : item.seal_zh;
  document.getElementById('modal-meta-condition').textContent = currentLang === 'en' ? item.condition_en : item.condition_zh;
  document.getElementById('modal-meta-era').textContent = `${item.year} (${item.year_minguo})`;

  modal.classList.add('active');
};

window.closePaintingModal = function() {
  const modal = document.getElementById('painting-modal');
  if (modal) modal.classList.remove('active');
};

// 5. Decision Recommendation Wizard
function initDecisionHelper() {
  const options = document.querySelectorAll('.quiz-option');
  const resultCard = document.getElementById('quiz-result');

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');

      const val = opt.getAttribute('data-choice');
      if (!resultCard) return;

      if (val === 'p1') {
        resultCard.innerHTML = currentLang === 'en' ? 
          `<strong>Recommended: Proposal 1 (Digital Monograph)</strong><br>Best for a rapid, elegant tribute site with zero recurring costs and no administrative overhead.` :
          `<strong>建議選擇：方案一（美學專題數位畫廊）</strong><br>最適合快速打造高格調的美學網站，零維護成本且無需管理後台。`;
      } else if (val === 'p2') {
        resultCard.innerHTML = currentLang === 'en' ? 
          `<strong>Recommended: Proposal 2 (Dynamic Showcase CMS)</strong><br>Best for estates that want full control over exhibition narratives, featured works, and essay publishing without technical barriers.` :
          `<strong>建議選擇：方案二（動態策展門戶與後台）</strong><br>最適合希望自主掌握展廳作品排序、靈活發布專題策展文章與新聞的家族團隊。`;
      } else {
        resultCard.innerHTML = currentLang === 'en' ? 
          `<strong>Recommended: Proposal 3 (Full Museum & CRM Suite)</strong><br>Best for preparing international museum loans in France/USA, managing custodian logistics, epigraphy seal verification, and creating 3D virtual spaces.` :
          `<strong>建議選擇：方案三（博物館級藏品管理與物流CRM平台）</strong><br>最適合為未來法國及國際巡迴展覽做足準備、完整管理3位保管人物流、鈐印款識並建置3D展廳之旗艦方案。`;
      }
      resultCard.style.display = 'block';
    });
  });
}
