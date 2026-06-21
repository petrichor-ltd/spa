const modalContent = {
  "timeline-beautician": {
    kicker: "專業歷程",
    title: "第一線美容師",
    body: "我從服務現場開始，理解手感、信任、諮詢與顧客關係。所有後來的品牌系統，都來自第一線累積出的真實問題。"
  },
  "timeline-educator": {
    kicker: "專業歷程",
    title: "教育講師",
    body: "我把技術、服務流程、溝通與情緒管理整理成能被學會、被複製、被傳承的課程，培育更多美業人才。"
  },
  "timeline-founder": {
    kicker: "專業歷程",
    title: "創業者",
    body: "我走過多店經營與品牌發展，知道一間店要穩定獲利，不能只靠技術，也需要定位、制度、產品與會員經營。"
  },
  "timeline-consultant": {
    kicker: "專業歷程",
    title: "國際顧問",
    body: "我以SPA產業顧問、品牌顧問與自然療法教育經驗，協助店家建立標準化管理、國際視野與服務美學。"
  },
  "timeline-chair": {
    kicker: "專業歷程",
    title: "台灣SPA協會理事長",
    body: "我推動美業教育、SPA專業標準、產業交流與人才培育，讓台灣美業能往更健康、更永續的方向前進。"
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
    body: "美業菁英星光大道。這本書整理美學職人創業與經營的真心話，陪伴美容人看見自己的方向。"
  },
  "book-success": {
    kicker: "實體書",
    title: "美容成功心法",
    body: "從美容經營、顧客關係到成功心法，給想把一門手藝做成事業的美容職人。"
  },
  "book-nature": {
    kicker: "實體書",
    title: "自然療法導師",
    body: "以自然療法與SPA教育為核心，連結身體照護、療癒觀念與專業培訓。"
  },
  "book-mask": {
    kicker: "實體書",
    title: "四季面膜",
    body: "以四季植物與天然材料為靈感，整理肌膚保養與DIY面膜配方。"
  },
  "book-cotton": {
    kicker: "電子書",
    title: "奶奶的魔法棉花棒",
    body: "從生活小物出發，讓親子、家庭與創意在簡單材料中發光。"
  },
  "book-spa": {
    kicker: "電子書",
    title: "Spa境界",
    body: "從身心療癒到品牌經營，談國際SPA的視野、標準化管理與服務美學。"
  },
  "book-ai": {
    kicker: "電子書",
    title: "AI也在學做人",
    body: "我把AI視為理解顧客、陪伴團隊與創造美業新工具的助手，科技應該服務人，而不是取代人。"
  },
  "book-code": {
    kicker: "電子書",
    title: "人生密碼",
    body: "透過生命方向、關係、工作與財運的探索，協助人看懂自己，也看懂選擇。"
  },
  "book-meridian": {
    kicker: "電子書",
    title: "經絡，藏著你的情緒",
    body: "透過經絡、五行與情緒語言，讀懂壓力如何在身體留下訊號，並找回身心平衡。"
  },
  "book-massage": {
    kicker: "實體書",
    title: "自我按摩",
    body: "把自然按摩與自我照護整理成日常可實踐的方法，讓疲憊的身體重新鬆開。"
  },
  "service-startup": {
    kicker: "服務與專長",
    title: "SPA創業顧問",
    body: "店面規劃、課程設計、獲利模式、會員制度，從0開始建立自己的SPA品牌。"
  },
  "service-business": {
    kicker: "服務與專長",
    title: "美業經營輔導",
    body: "提升來客數、提高回購率、打造穩定現金流，並建立能長久運作的團隊制度。"
  },
  "service-ai": {
    kicker: "服務與專長",
    title: "AI美業應用",
    body: "AI遊戲導客、AI票券、AI預約、AI一頁式網站與AI短影音行銷，讓美業工具更有效率。"
  },
  "service-brand": {
    kicker: "服務與專長",
    title: "品牌與產品開發",
    body: "美容產品OEM、品牌包裝設計、教育訓練課程開發、市場定位分析與國際飯店SPA規劃。"
  },
  "service-lucky": {
    kicker: "服務與專長",
    title: "幸運竹SPA與美萌台灣地圖",
    body: "我以幸運竹SPA串聯自然植物、芳療與身心療癒，也以mmap.tw串聯全台美業名店、教育、導客與AI行銷。"
  }
};

const dialog = document.querySelector("[data-dialog]");
const dialogKicker = document.querySelector("[data-dialog-kicker]");
const dialogTitle = document.querySelector("[data-dialog-title]");
const dialogBody = document.querySelector("[data-dialog-body]");
const dialogAction = document.querySelector("[data-dialog-action]");
const closeDialogButton = document.querySelector("[data-close-dialog]");
const toast = document.querySelector("[data-toast]");
const progress = document.querySelector("[data-progress]");
const backTop = document.querySelector("[data-back-top]");
let toastTimer;

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
};

const openDialog = (key) => {
  const content = modalContent[key];
  if (!content || !dialog) return;

  dialogKicker.textContent = content.kicker;
  dialogTitle.textContent = content.title;
  dialogBody.textContent = content.body;
  dialogAction.href = "#contact";
  dialog.showModal();
  document.body.classList.add("modal-open");
};

const closeDialog = () => {
  if (!dialog?.open) return;
  dialog.close();
  document.body.classList.remove("modal-open");
};

document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => document.body.classList.add("is-loaded"));
});

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
  { threshold: 0.16 }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

document.querySelectorAll("a[href^='#']").forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const hash = anchor.getAttribute("href");
    const target = hash ? document.querySelector(hash) : null;
    if (!target) return;
    event.preventDefault();
    if (dialog?.open) closeDialog();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (hash === "#contact") showToast("已前往聯絡區。");
  });
});

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => openDialog(button.dataset.modal));
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

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeDialog();
});

dialog?.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDialog();
});

window.addEventListener(
  "scroll",
  () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (progress) progress.style.width = `${ratio * 100}%`;
    backTop?.classList.toggle("is-visible", window.scrollY > 560);
  },
  { passive: true }
);
