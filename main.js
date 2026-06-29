const siteFontFaces = [
  '400 1em "Iansui Site"',
  '400 1em "Noto Sans TC Site"',
  '700 1em "Noto Sans TC Site"'
];

if (document.fonts) {
  Promise.all(siteFontFaces.map((font) => document.fonts.load(font)))
    .then(() => {
      document.documentElement.classList.add("fonts-ready");
    })
    .catch(() => {
      document.documentElement.classList.add("fonts-fallback");
    });
}

const modalContent = {
  "timeline-beautician": {
    kicker: "專業歷程",
    title: "第一線美容師",
    body: "我從服務現場開始，理解手感、信任、諮詢與顧客關係。所有後來的品牌系統，都來自第一線累積出的真實問題。",
    points: ["我最早學會的是聽懂顧客身體與情緒真正想說的話。", "這段經驗讓我後來設計課程、制度與品牌時，永遠回到服務現場。", "美業的專業不是只有技術，而是能被顧客信任的完整照顧。"]
  },
  "timeline-educator": {
    kicker: "專業歷程",
    title: "教育講師",
    body: "我把技術、服務流程、溝通與情緒管理整理成能被學會、被複製、被傳承的課程，培育更多美業人才。",
    points: ["把經驗變成方法，是我投入教育後最重要的工作。", "我希望美容師不只學會操作，也能理解顧客、管理流程、建立專業自信。", "當技術能被整理、被說清楚，下一代就能少走很多路。"]
  },
  "timeline-founder": {
    kicker: "專業歷程",
    title: "創業者",
    body: "我走過多店經營與品牌發展，知道一間店要穩定獲利，不能只靠技術，也需要定位、制度、產品與會員經營。",
    points: ["創業讓我看見美業經營的真實壓力：客源、現金流、團隊、會員、產品都要一起穩。", "我把店務、課程、產品與會員制度整合成能落地的經營架構。", "這些經驗後來成為我協助店家轉型與開店的核心基礎。"]
  },
  "timeline-consultant": {
    kicker: "專業歷程",
    title: "國際顧問",
    body: "我以SPA產業顧問、品牌顧問與自然療法教育經驗，協助店家建立標準化管理、國際視野與服務美學。",
    points: ["SPA不是單一療程，而是空間、儀式、身心照護與顧客體驗的整合。", "我協助品牌把國際視野轉譯成台灣店家真正能執行的流程。", "標準化不是把服務變冷，而是讓溫度能穩定地被交付。"]
  },
  "timeline-chair": {
    kicker: "專業歷程",
    title: "台灣SPA協會理事長",
    body: "我推動美業教育、SPA專業標準、產業交流與人才培育，讓台灣美業能往更健康、更永續的方向前進。",
    points: ["我看見的不是一間店，而是整個美業產業如何被信任、被尊重、被傳承。", "協會工作讓我能把教育、標準、交流與下一代人才培育放在同一張藍圖裡。", "我的任務，是讓認真的美容人有更清楚的路，也讓產業有更高的天花板。"]
  },
  "authority-industry": {
    kicker: "理事長背景",
    title: "產業推動",
    body: "以台灣SPA協會理事長的身份，我推動的不只是美容技術，而是產業標準、專業倫理、教育交流與服務品質。",
    points: ["讓SPA服務從個人經驗走向更清楚的專業標準。", "串聯店家、講師、品牌與產業資源，形成可互相支持的生態。", "把台灣美業的溫度與細膩，整理成能被市場理解的專業價值。"]
  },
  "authority-talent": {
    kicker: "理事長背景",
    title: "人才培育",
    body: "我把40年第一線實戰、教育培訓與創業經驗，整理成美容師、講師與經營者能接得住、用得上的方法。",
    points: ["培育會操作的人，也培育懂顧客、懂經營、懂品牌的人。", "協助下一代美容人建立專業自信與長期職涯方向。", "讓傳承不只是口號，而是課程、流程、工具與陪伴。"]
  },
  "authority-future": {
    kicker: "理事長背景",
    title: "未來整合",
    body: "美業的下一階段，會是美學、自然療法、品牌經營與AI工具的整合。我希望科技服務人，也讓美容人的專業更被看見。",
    points: ["把AI導入導客、預約、票券、內容與會員互動，提升經營效率。", "把自然療法與身心照護放回美業服務核心，保留人的溫度。", "用品牌、教育與科技，替下一代美容人建立更大的舞台。"]
  },
  "belief-see": {
    kicker: "我的核心信念",
    title: "看見每一個人",
    body: "美業的起點不是產品，而是看見顧客真正的需求。先理解人，服務才有溫度。"
  },
  "belief-care": {
    kicker: "我的核心信念",
    title: "陪伴與療癒",
    body: "在美的過程中，我希望每一次接觸都能陪伴身心一起鬆動，讓人重新感覺到自己。"
  },
  "belief-integrate": {
    kicker: "我的核心信念",
    title: "專業與整合",
    body: "我結合美學、自然療法、科技與經營智慧，讓美業不只是服務，而是一套能長久運作的專業系統。"
  },
  "belief-inherit": {
    kicker: "我的核心信念",
    title: "傳承與共好",
    body: "我把40年走過的路整理出來，交給下一代美容師，讓認真努力的人少走冤枉路。"
  },
  "book-aesthetic": {
    kicker: "實體書",
    title: "打造美學視角",
    body: "美業菁英星光大道。這本書整理美學職人創業與經營的真心話，陪伴美容人看見自己的方向。",
    points: ["從美學職人的創業現場出發，建立品牌定位與專業視角。", "適合正在經營美容、美體、SPA與服務型品牌的創業者閱讀。", "我希望讀者不只學技術，也能建立看待顧客、空間與服務價值的眼光。"],
    actionLabel: "洽詢完整資料"
  },
  "book-success": {
    kicker: "實體書",
    title: "美容成功心法",
    body: "從美容經營、顧客關係到成功心法，給想把一門手藝做成事業的美容職人。",
    points: ["整理美容店經營會遇到的客源、回購、服務流程與現金流問題。", "把第一線技術轉化為可被顧客信任、可被團隊複製的事業系統。", "給正在卡關的美容師一套重新檢視事業體質的方法。"],
    actionLabel: "洽詢完整資料"
  },
  "book-nature": {
    kicker: "實體書",
    title: "自然療法導師",
    body: "以自然療法與SPA教育為核心，連結身體照護、療癒觀念與專業培訓。",
    points: ["把自然療法、身體覺察與SPA照護放進同一套學習脈絡。", "適合想深化專業療癒語言與諮詢能力的美容師、芳療師與講師。", "從身體訊號出發，讓服務不只是操作，而是理解與陪伴。"],
    actionLabel: "洽詢完整資料"
  },
  "book-mask": {
    kicker: "實體書",
    title: "四季面膜",
    body: "以四季植物與天然材料為靈感，整理肌膚保養與DIY面膜配方。",
    points: ["以春夏秋冬的肌膚狀態切入，搭配天然植物與生活材料。", "內容包含面膜製作方法、臉部DIY水療與居家保養觀念。", "適合想把保養課程生活化、教學化的美容教育者。"],
    link: "https://books.google.com/books/about/%E5%9B%9B%E5%AD%A3%E9%9D%A2%E8%86%9CDIY.html?id=RsKwYgEACAAJ",
    actionLabel: "查看 Google Books"
  },
  "book-cotton": {
    kicker: "電子書",
    title: "奶奶的魔法棉花棒",
    body: "從生活小物出發，讓親子、家庭與創意在簡單材料中發光。",
    points: ["以棉花棒這種日常材料，打開親子手作與創意啟發。", "保留生活記憶與手作溫度，也延伸出教學活動的可能。", "適合親子、美感教育與社群活動內容設計。"],
    actionLabel: "洽詢完整資料"
  },
  "book-spa": {
    kicker: "電子書",
    title: "Spa境界",
    body: "從身心療癒到品牌經營，談國際SPA的視野、標準化管理與服務美學。",
    points: ["整理SPA服務的專業語言、空間感、儀式感與顧客體驗。", "協助經營者理解國際SPA視野與在地品牌落地之間的轉譯。", "適合正在規劃SPA品牌、課程或門店升級的人。"],
    link: "#book-shop",
    actionLabel: "前往選購"
  },
  "book-ai": {
    kicker: "電子書",
    title: "AI也在學做人",
    body: "我把AI視為理解顧客、陪伴團隊與創造美業新工具的助手，科技應該服務人，而不是取代人。",
    points: ["從美業現場的導客、預約、行銷與教育需求談AI應用。", "提醒科技不是冷冰冰的替代，而是幫助服務者更理解人。", "適合想把AI導入門店流程、內容經營與會員互動的團隊。"],
    link: "#book-shop",
    actionLabel: "前往選購"
  },
  "book-code": {
    kicker: "電子書",
    title: "人生密碼",
    body: "透過生命方向、關係、工作與財運的探索，協助人看懂自己，也看懂選擇。",
    points: ["從生命方向、關係、工作與財運切入，協助讀者整理內在秩序。", "把抽象的人生課題轉成可以被理解、被選擇、被調整的線索。", "適合想進一步理解自我定位與生活決策的人。"],
    link: "#book-shop",
    actionLabel: "前往選購"
  },
  "book-meridian": {
    kicker: "電子書",
    title: "經絡，藏著你的情緒",
    body: "透過經絡、五行與情緒語言，讀懂壓力如何在身體留下訊號，並找回身心平衡。",
    points: ["從經絡與情緒的互動，理解壓力如何反映在身體上。", "協助美容師在服務前後，更細緻地讀懂顧客狀態。", "適合想把身心平衡、經絡照護與諮詢能力整合進服務的人。"],
    link: "#book-shop",
    actionLabel: "前往選購"
  },
  "service-startup": {
    kicker: "服務與專長",
    title: "我想開SPA店",
    body: "我以SPA創業顧問的角度，協助你從店面規劃、課程設計、獲利模式、會員制度開始，建立自己的SPA品牌。",
    points: ["準備開店、轉型SPA或想把技術變成品牌的人。", "協助梳理店面規劃、課程設計、獲利模式與會員制度。", "先從定位、客層、服務菜單與營收模型建立清楚藍圖。"]
  },
  "service-business": {
    kicker: "服務與專長",
    title: "我想提升回購",
    body: "我協助你重新整理顧客旅程、回購設計、現金流與團隊制度，讓美業經營從辛苦接案走向穩定循環。",
    points: ["已有門店但來客、回購或團隊管理不穩定的經營者。", "協助調整顧客旅程、回購設計、現金流與團隊流程。", "先盤點客源、會員資料、服務動線與營收瓶頸。"]
  },
  "service-ai": {
    kicker: "服務與專長",
    title: "我想導入AI",
    body: "我把AI遊戲導客、AI票券、AI預約、AI一頁式網站與AI短影音行銷，整理成美業團隊能理解、能執行、能驗證的工具流程。",
    points: ["想把AI導入預約、票券、導客、內容與會員互動的美業團隊。", "協助建立AI遊戲導客、票券、預約、一頁式網站與短影音流程。", "先選一個最能帶來營收的流程，做小型可驗證版本。"]
  },
  "service-brand": {
    kicker: "服務與專長",
    title: "我想做品牌產品",
    body: "我協助美容產品OEM、品牌包裝設計、教育訓練課程開發、市場定位分析與國際飯店SPA規劃，把專業變成可被市場理解的品牌。",
    points: ["想開發產品、包裝品牌或建立教育課程的美業品牌。", "協助美容產品OEM、品牌包裝、教育訓練與國際SPA規劃。", "先整理品牌定位、產品線、價格帶與課程架構。"]
  },
  "service-lucky": {
    kicker: "服務與專長",
    title: "我想加入美業聯盟",
    body: "我以幸運竹SPA串聯自然植物、芳療與身心療癒，也以mmap.tw串聯全台美業名店、教育、導客與AI行銷。",
    points: ["希望加入美業聯盟、擴大曝光與共同導客的店家。", "透過幸運竹SPA與美萌台灣地圖串聯名店、教育、採購與AI行銷。", "先從品牌資料、服務特色與可合作資源建立聯盟入口。"]
  }
};

const dialog = document.querySelector("[data-dialog]");
const dialogKicker = document.querySelector("[data-dialog-kicker]");
const dialogTitle = document.querySelector("[data-dialog-title]");
const dialogBody = document.querySelector("[data-dialog-body]");
const dialogDetails = document.querySelector("[data-dialog-details]");
const dialogPoints = document.querySelector("[data-dialog-points]");
const dialogAction = document.querySelector("[data-dialog-action]");
const closeDialogButton = document.querySelector("[data-close-dialog]");
const previewDialog = document.querySelector("[data-preview-dialog]");
const previewTitle = document.querySelector("[data-preview-title]");
const previewPages = document.querySelector("[data-preview-pages]");
const previewOpen = document.querySelector("[data-preview-open]");
const closePreviewButton = document.querySelector("[data-close-preview]");
const checkoutDialog = document.querySelector("[data-checkout-dialog]");
const checkoutConfirmBooks = document.querySelector("[data-checkout-confirm-books]");
const checkoutConfirmAmount = document.querySelector("[data-checkout-confirm-amount]");
const checkoutManualAmount = document.querySelector("[data-checkout-manual-amount]");
const checkoutProceedButton = document.querySelector("[data-checkout-proceed]");
const toast = document.querySelector(".toast[data-toast]");
const progress = document.querySelector("[data-progress]");
const backTop = document.querySelector("[data-back-top]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const mobileCartBar = document.querySelector("[data-mobile-cart]");
const mobileCartCount = document.querySelector("[data-mobile-cart-count]");
const mobileCartTotal = document.querySelector("[data-mobile-cart-total]");
const mobileCheckoutButton = document.querySelector("[data-mobile-checkout]");
const bookShopSection = document.querySelector("[data-book-shop]");
const navSections = Array.from(document.querySelectorAll("[data-nav-section]"));
const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
let toastTimer;
let isBookShopInView = false;
const themeStorageKey = "spa-theme-v2";
const payuniFallbackPaymentUrl = "https://api.payuni.com.tw/api/uop/receive_info/2/1/BNNL27809884/GLeUenL68pDHZWBUlFdV";
const payuniSigningEndpoint = document.querySelector("[data-book-shop]")?.dataset.paymentEndpoint?.trim() || "";

const shopBooks = [
  {
    id: "spa",
    title: "SPA 境界",
    image: "img/S__21012499.jpg",
    modal: "book-spa",
    preview: "preview-books/spa-preview.pdf",
    previewPages: [
      { page: 3, src: "preview-pages/spa/page-03.webp" },
      { page: 8, src: "preview-pages/spa/page-08.webp" },
      { page: 9, src: "preview-pages/spa/page-09.webp" }
    ]
  },
  {
    id: "ai",
    title: "AI 也在學做人",
    image: "img/S__21012500.jpg",
    modal: "book-ai",
    preview: "preview-books/ai-preview.pdf",
    previewPages: [
      { page: 2, src: "preview-pages/ai/page-02.webp" },
      { page: 3, src: "preview-pages/ai/page-03.webp" },
      { page: 4, src: "preview-pages/ai/page-04.webp" }
    ]
  },
  {
    id: "code",
    title: "人生密碼",
    image: "img/S__21012501.jpg",
    modal: "book-code",
    preview: "preview-books/life-code-preview.pdf",
    previewPages: [
      { page: 2, src: "preview-pages/life-code/page-02.webp" },
      { page: 3, src: "preview-pages/life-code/page-03.webp" },
      { page: 4, src: "preview-pages/life-code/page-04.webp" }
    ]
  },
  {
    id: "meridian",
    title: "經絡藏著你的情緒",
    image: "img/S__21012502.jpg",
    modal: "book-meridian",
    preview: "preview-books/meridian-preview.pdf",
    previewPages: [
      { page: 2, src: "preview-pages/meridian/page-02.webp" },
      { page: 3, src: "preview-pages/meridian/page-03.webp" },
      { page: 4, src: "preview-pages/meridian/page-04.webp" }
    ]
  }
];
const shopBookMap = new Map(shopBooks.map((book) => [book.id, book]));
const selectedShopBookIds = new Set();
let pendingCheckoutOrder = null;

const getStoredTheme = () => {
  try {
    return localStorage.getItem(themeStorageKey);
  } catch {
    return null;
  }
};

const setStoredTheme = (theme) => {
  try {
    localStorage.setItem(themeStorageKey, theme);
  } catch {
    // Storage can be unavailable in local file contexts; the current page still updates.
  }
};

const applyTheme = (theme) => {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextTheme === "dark" ? "#0f1914" : "#fffaf2");
  if (!themeToggle) return;
  themeToggle.setAttribute("aria-pressed", String(nextTheme === "dark"));
  themeToggle.setAttribute("aria-label", nextTheme === "dark" ? "切換為淺色模式" : "切換為深色模式");
  const icon = themeToggle.querySelector("span");
  if (icon) icon.textContent = nextTheme === "dark" ? "☀" : "◐";
};

const setMenuOpen = (isOpen) => {
  if (!menuToggle || !siteNav) return;
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "關閉導覽選單" : "開啟導覽選單");
  siteNav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
};

const updateActiveNavigation = () => {
  const probe = window.scrollY + Math.min(240, window.innerHeight * 0.32);
  let activeId = "";
  navSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    if (sectionTop <= probe) activeId = section.id;
  });
  navLinks.forEach((link) => {
    const isActive = Boolean(activeId) && link.getAttribute("href") === `#${activeId}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
};

applyTheme(getStoredTheme() || "light");

const showToast = (message, duration = 1800) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), duration);
};

const syncModalOpenState = () => {
  document.body.classList.toggle("modal-open", Boolean(dialog?.open || previewDialog?.open || checkoutDialog?.open));
};

const setCheckoutStatus = (message, state = "idle") => {
  const status = document.querySelector("[data-checkout-status]");
  if (!status) return;
  status.textContent = message;
  status.dataset.state = state;
};

const bookDetailLabels = ["核心主題", "適合讀者", "我想傳達的價值"];
const serviceDetailLabels = ["適合誰", "我能協助你完成什麼", "立即能開始的方向"];

const getDetailLabels = (content) => {
  if (!content?.points?.length) return null;
  if (content.kicker === "服務與專長") return serviceDetailLabels;
  if (content.kicker?.includes("書")) return bookDetailLabels;
  return null;
};

const renderDialogDetails = (labels, points = []) => {
  if (!dialogDetails) return;
  dialogDetails.textContent = "";
  if (!labels?.length || !points.length) {
    dialogDetails.hidden = true;
    return;
  }

  labels.forEach((label, index) => {
    const group = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = points[index] || "";
    group.append(term, description);
    dialogDetails.append(group);
  });
  dialogDetails.hidden = false;
};

const openDialog = (key) => {
  const content = modalContent[key];
  if (!content || !dialog) return;

  dialogKicker.textContent = content.kicker;
  dialogTitle.textContent = content.title;
  dialogBody.textContent = content.body;
  const detailLabels = getDetailLabels(content);
  renderDialogDetails(detailLabels, content.points);
  if (dialogPoints) {
    dialogPoints.textContent = "";
    const points = detailLabels ? [] : content.points || [];
    points.forEach((point) => {
      const item = document.createElement("li");
      item.textContent = point;
      dialogPoints.append(item);
    });
  }
  dialogAction.textContent = content.actionLabel || "聯絡王燕呢顧問";
  dialogAction.href = content.link || "#contact";
  if (content.link && !content.link.startsWith("#")) {
    dialogAction.target = "_blank";
    dialogAction.rel = "noreferrer";
  } else {
    dialogAction.removeAttribute("target");
    dialogAction.removeAttribute("rel");
  }
  dialog.showModal();
  syncModalOpenState();
};

const closeDialog = () => {
  if (!dialog?.open) return;
  dialog.close();
  syncModalOpenState();
};

const openPreview = (id) => {
  const book = shopBookMap.get(id);
  if (!book?.preview || !book.previewPages?.length || !previewDialog || !previewTitle || !previewPages || !previewOpen) return;
  if (dialog?.open) closeDialog();
  previewTitle.textContent = book.title;
  previewPages.textContent = "";
  book.previewPages.forEach((page, index) => {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");
    figure.className = "preview-page";
    image.src = page.src;
    image.alt = `${book.title} 原書第 ${page.page} 頁`;
    image.width = 910;
    image.height = 1287;
    image.loading = index === 0 ? "eager" : "lazy";
    image.decoding = "async";
    caption.textContent = `原書第 ${page.page} 頁`;
    figure.append(image, caption);
    previewPages.append(figure);
  });
  previewPages.scrollTop = 0;
  previewOpen.href = book.preview;
  previewOpen.setAttribute("download", `${book.id}-preview.pdf`);
  previewOpen.setAttribute("aria-label", `下載 ${book.title} 試閱 PDF`);
  previewDialog.showModal();
  syncModalOpenState();
};

const closePreview = () => {
  if (!previewDialog?.open) return;
  previewDialog.close();
  if (previewPages) previewPages.textContent = "";
  syncModalOpenState();
};

const closeCheckoutDialog = () => {
  if (!checkoutDialog?.open) return;
  checkoutDialog.close();
  syncModalOpenState();
};

const getShopSelection = () => Array.from(selectedShopBookIds).map((id) => shopBookMap.get(id)).filter(Boolean);

const getShopPrice = (count) => {
  if (count === 2) return 300;
  if (count === 4) return 500;
  return 0;
};

const getShopHint = (count) => {
  if (count === 0) return "選滿 2 本即可結帳。";
  if (count === 1) return "再加入 1 本，即可用 NT$300 結帳。";
  if (count === 2) return "兩本優惠已成立，可直接結帳。";
  if (count === 3) return "再加入 1 本，即可升級四本 NT$500。";
  return "四本優惠已成立，可直接結帳。";
};

const renderMobileCart = (books, amount) => {
  if (!mobileCartBar || !mobileCartCount || !mobileCartTotal || !mobileCheckoutButton) return;
  const hasBooks = books.length > 0;
  mobileCartBar.hidden = !hasBooks;
  mobileCartBar.classList.toggle("is-visible", hasBooks && isBookShopInView);
  mobileCartCount.textContent = `${books.length} 本電子書`;
  mobileCartTotal.textContent = amount ? `NT$${amount}` : getShopHint(books.length);
  mobileCheckoutButton.disabled = amount === 0;
  mobileCheckoutButton.textContent = amount ? `確認訂單・NT$${amount}` : "尚未符合優惠";
};

const buildShopOrder = () => {
  const books = getShopSelection();
  const amount = getShopPrice(books.length);
  return {
    amount,
    count: books.length,
    promotion: books.length === 4 ? "ebook_4_for_500" : "ebook_2_for_300",
    books: books.map((book) => ({ id: book.id, title: book.title })),
    description: books.map((book) => book.title).join("、"),
    createdAt: new Date().toISOString()
  };
};

const buildFallbackPaymentUrl = (order) => {
  const url = new URL(payuniFallbackPaymentUrl);
  url.searchParams.set("amount", String(order.amount));
  url.searchParams.set("items", order.description);
  url.searchParams.set("package", order.promotion);
  url.searchParams.set("source", "wang-yanni-ebook-shop");
  return url.toString();
};

const submitSignedPayuniForm = ({ action, method = "POST", fields = {} }) => {
  if (!action || !fields || typeof fields !== "object") return false;
  const form = document.createElement("form");
  form.method = method;
  form.action = action;
  form.hidden = true;
  Object.entries(fields).forEach(([name, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = String(value);
    form.append(input);
  });
  document.body.append(form);
  form.submit();
  return true;
};

const requestSignedCheckout = async (order) => {
  if (!payuniSigningEndpoint) return null;
  const response = await fetch(payuniSigningEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  });
  if (!response.ok) throw new Error("Payment signing failed");
  return response.json();
};

const renderShopCart = () => {
  const cartItems = document.querySelector("[data-cart-items]");
  const cartEmpty = document.querySelector("[data-cart-empty]");
  const cartCount = document.querySelector("[data-cart-count]");
  const cartTotal = document.querySelector("[data-cart-total]");
  const cartHint = document.querySelector("[data-cart-hint]");
  const checkoutButton = document.querySelector("[data-checkout-button]");
  const checkoutStatus = document.querySelector("[data-checkout-status]");
  if (!cartItems || !cartEmpty || !cartCount || !cartTotal || !cartHint || !checkoutButton || !checkoutStatus) return;

  const books = getShopSelection();
  const amount = getShopPrice(books.length);
  cartItems.textContent = "";
  cartEmpty.hidden = books.length > 0;

  books.forEach((book) => {
    const item = document.createElement("div");
    item.className = "cart-item";
    item.innerHTML = `
      <img src="${book.image}" alt="" loading="lazy" />
      <span>${book.title}</span>
      <button type="button" data-remove-book="${book.id}" aria-label="移除 ${book.title}">移除</button>
    `;
    cartItems.append(item);
  });

  cartCount.textContent = `${books.length} 本`;
  cartTotal.textContent = amount ? `NT$${amount}` : "NT$0";
  cartHint.textContent = getShopHint(books.length);
  checkoutButton.disabled = amount === 0;
  checkoutButton.textContent = amount ? `確認訂單・NT$${amount}` : "確認訂單並前往付款";
  checkoutButton.dataset.checkoutAmount = amount ? String(amount) : "";
  checkoutStatus.dataset.state = amount && !payuniSigningEndpoint ? "warning" : "idle";
  checkoutStatus.textContent = amount && !payuniSigningEndpoint
    ? `付款頁若未自動帶入，請手動輸入 NT$${amount}；付款後請回 LINE 傳送核對資料。`
    : "付款頁若未自動帶入金額，結帳前會再次顯示正確金額。";

  renderMobileCart(books, amount);

  document.querySelectorAll("[data-shop-source]").forEach((source) => {
    const id = source.getAttribute("data-shop-source");
    const isSelected = selectedShopBookIds.has(id);
    source.classList.toggle("is-selected", isSelected);
  });

  document.querySelectorAll("[data-add-book]").forEach((button) => {
    const id = button.getAttribute("data-add-book");
    const isSelected = selectedShopBookIds.has(id);
    button.textContent = isSelected ? "已加入" : "加入";
    button.disabled = isSelected;
  });
};

const addShopBook = (id) => {
  if (!shopBookMap.has(id)) return;
  if (selectedShopBookIds.has(id)) {
    showToast("這本書已在選購區。");
    return;
  }
  if (selectedShopBookIds.size >= 4) {
    showToast("四本優惠已選滿。");
    return;
  }
  selectedShopBookIds.add(id);
  renderShopCart();
  showToast("已加入選購區。");
};

const removeShopBook = (id) => {
  selectedShopBookIds.delete(id);
  renderShopCart();
  showToast("已從選購區移除。");
};

const openCheckoutDialog = (order) => {
  if (!checkoutDialog || !checkoutConfirmBooks || !checkoutConfirmAmount || !checkoutManualAmount || !checkoutProceedButton) return;
  pendingCheckoutOrder = order;
  checkoutConfirmBooks.textContent = "";
  order.books.forEach((book) => {
    const item = document.createElement("li");
    item.textContent = book.title;
    checkoutConfirmBooks.append(item);
  });
  const formattedAmount = `NT$${order.amount}`;
  checkoutConfirmAmount.textContent = formattedAmount;
  checkoutManualAmount.textContent = formattedAmount;
  checkoutProceedButton.disabled = false;
  checkoutProceedButton.textContent = "確認，前往付款頁";
  checkoutDialog.showModal();
  syncModalOpenState();
};

const beginCheckout = async (order, checkoutButton) => {
  if (!order?.amount || !checkoutProceedButton) return;
  checkoutProceedButton.disabled = true;
  checkoutProceedButton.textContent = "正在前往付款頁…";
  checkoutButton.disabled = true;
  checkoutButton.classList.add("is-loading");
  try {
    if (!payuniSigningEndpoint) {
      const message = `付款頁若未自動帶入，請手動輸入 NT$${order.amount}。`;
      setCheckoutStatus(message, "warning");
      showToast(message, 2600);
      window.location.href = buildFallbackPaymentUrl(order);
      return;
    }
    setCheckoutStatus("正在建立付款資料，請稍候。", "loading");
    const signed = await requestSignedCheckout(order);
    if (signed?.fields && submitSignedPayuniForm(signed)) return;
    if (signed?.url) {
      window.location.href = signed.url;
      return;
    }
    throw new Error("Payment signing response is incomplete");
  } catch {
    const message = payuniSigningEndpoint
      ? "付款資料建立失敗，請稍後再試。"
      : "無法開啟一般收款頁，請稍後再試。";
    setCheckoutStatus(message, "warning");
    showToast(message, 5200);
    checkoutButton.disabled = false;
    checkoutButton.classList.remove("is-loading");
    checkoutProceedButton.disabled = false;
    checkoutProceedButton.textContent = "確認，前往付款頁";
  }
};

const initBookShop = () => {
  const dropzone = document.querySelector("[data-cart-dropzone]");
  const checkoutButton = document.querySelector("[data-checkout-button]");
  if (!dropzone || !checkoutButton) return;

  document.querySelectorAll("[data-shop-source]").forEach((source) => {
    source.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (event.target.closest("button, a")) return;
      event.preventDefault();
      addShopBook(source.getAttribute("data-shop-source"));
    });
  });

  document.querySelectorAll("[data-add-book]").forEach((button) => {
    button.addEventListener("click", () => addShopBook(button.getAttribute("data-add-book")));
  });

  dropzone.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-book]");
    if (!removeButton) return;
    removeShopBook(removeButton.getAttribute("data-remove-book"));
  });

  const requestCheckout = () => {
    const order = buildShopOrder();
    if (!order.amount) {
      setCheckoutStatus("請選擇 2 本或 4 本電子書後再結帳。", "warning");
      showToast("請選擇 2 本或 4 本電子書後再結帳。", 3200);
      return;
    }
    openCheckoutDialog(order);
  };

  checkoutButton.addEventListener("click", requestCheckout);
  mobileCheckoutButton?.addEventListener("click", requestCheckout);

  checkoutProceedButton?.addEventListener("click", () => beginCheckout(pendingCheckoutOrder, checkoutButton));

  renderShopCart();
};

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.body.classList.add("is-loaded");
    updateActiveNavigation();
  });
  initBookShop();
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = entry.target.getAttribute("data-delay");
        if (delay) entry.target.style.setProperty("--delay", `${delay}ms`);
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

  if (bookShopSection) {
    const shopObserver = new IntersectionObserver(
      ([entry]) => {
        isBookShopInView = entry.isIntersecting;
        const books = getShopSelection();
        renderMobileCart(books, getShopPrice(books.length));
      },
      { rootMargin: "-8% 0px -8%", threshold: 0.01 }
    );
    shopObserver.observe(bookShopSection);
  }
} else {
  document.querySelectorAll(".reveal").forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const hash = anchor.getAttribute("href");
    if (!hash?.startsWith("#") || hash === "#") return;
    let target;
    try {
      target = document.querySelector(hash);
    } catch {
      return;
    }
    if (!target) return;
    event.preventDefault();
    if (dialog?.open) closeDialog();
    setMenuOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (hash === "#contact") showToast("已前往聯絡區。");
  });
});

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => openDialog(button.dataset.modal));
});

document.querySelectorAll("[data-preview-book]").forEach((button) => {
  button.addEventListener("click", () => openPreview(button.dataset.previewBook));
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  setStoredTheme(nextTheme);
  showToast(nextTheme === "dark" ? "已切換為深色模式。" : "已切換為淺色模式。");
});

menuToggle?.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

backTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("已回到頁面頂端。");
});

document.querySelectorAll("a[data-toast]").forEach((link) => {
  link.addEventListener("click", () => {
    showToast(link.dataset.toast || "正在開啟聯絡方式");
  });
});

closeDialogButton?.addEventListener("click", closeDialog);
closePreviewButton?.addEventListener("click", closePreview);
document.querySelectorAll("[data-close-checkout]").forEach((button) => button.addEventListener("click", closeCheckoutDialog));

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});

dialog?.addEventListener("close", () => {
  syncModalOpenState();
});

previewDialog?.addEventListener("click", (event) => {
  if (event.target === previewDialog) closePreview();
});

previewDialog?.addEventListener("close", () => {
  if (previewPages) previewPages.textContent = "";
  syncModalOpenState();
});

checkoutDialog?.addEventListener("click", (event) => {
  if (event.target === checkoutDialog) closeCheckoutDialog();
});

checkoutDialog?.addEventListener("close", () => {
  syncModalOpenState();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  setMenuOpen(false);
  closeDialog();
  closePreview();
  closeCheckoutDialog();
});

window.addEventListener(
  "scroll",
  () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    backTop?.classList.toggle("is-visible", window.scrollY > 560);
    updateActiveNavigation();
  },
  { passive: true }
);
