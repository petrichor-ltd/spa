(() => {
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const isEnglish = requestedLanguage === "en";
  const locale = isEnglish ? "en" : "zh-Hant";

  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;

  const englishText = new Map(Object.entries({
    "跳至主要內容": "Skip to main content",
    "回到首頁": "Back to home",
    "志麗美容科技": "Zhili Beauty Technology",
    "美容教育 × SPA產業 × 身心平衡": "Beauty Education × SPA Industry × Wellbeing",
    "主要導覽": "Main navigation",
    "馬上鑽": "MAZUAN",
    "服務與專長": "Services & Expertise",
    "著作出版": "Publications",
    "專業歷程": "Professional Journey",
    "語言選擇": "Language selector",
    "購買馬上鑽": "Buy MAZUAN",
    "正在開啟嘖嘖購買頁": "Opening the Zeczec campaign",
    "切換深淺色模式": "Toggle color theme",
    "開啟導覽選單": "Open navigation menu",
    "關閉導覽選單": "Close navigation menu",

    "我把40年美業實戰，": "I have distilled 40 years of hands-on beauty-industry experience",
    "整理成下一代": "into a clearer path for",
    "美容人的路。": "the next generation.",
    "王燕呢": "Yanni Wang",
    "網站主要入口": "Primary website links",
    "認識馬上鑽": "Discover MAZUAN",
    "找顧問／合作": "Consulting & Partnerships",
    "專業，是我的起點；": "Expertise is where I begin;",
    "陪伴，是我的使命。": "support is my purpose.",
    "專業資歷": "Professional credentials",
    "台灣SPA協會": "Taiwan SPA Association",
    "理事長": "Chairperson",
    "志麗美容科技有限公司": "Zhili Beauty Technology Co., Ltd.",
    "董事長": "Chairperson",
    "幸運竹SPA": "Lucky Bamboo SPA",
    "創建者": "Founder",
    "往下閱讀": "Continue reading",

    "日常自我照顧工具": "EVERYDAY SELF-CARE TOOL",
    "馬上鑽｜四合一": "MAZUAN | 4 in 1",
    "不插電手持按摩工具": "NonElectric Handheld Massage Tool",
    "一支在手，四面靈活運用。無需插電或充電，依照身體部位與個人感受調整接觸面與力道，讓居家、辦公室或旅途中，都能隨時安排一段舒服的放鬆時間。": "Four useful surfaces in one handheld tool. With no plug or charging required, you can choose the contact surface and pressure that feel right for each area—at home, at work, or while traveling.",
    "馬上鑽產品特色": "MAZUAN product features",
    "四面一體": "Four surfaces in one",
    "以不同接觸面回應肩頸、手臂、腿部等日常放鬆需求。": "Choose a contact surface for everyday relaxation across the neck, shoulders, arms, and legs.",
    "完全不插電": "No electricity required",
    "不需電池、不必充電，拿起來就能使用。": "No batteries and no charging—simply pick it up and use it.",
    "輕巧好攜帶": "Compact and portable",
    "在家自用、家人互按，外出也能隨身帶著走。": "Easy to use yourself, share with family, or take with you when you travel.",
    "好上手、好清潔": "Easy to use and clean",
    "可依個人習慣搭配按摩油或乳霜，使用後擦拭清潔。": "Use with massage oil or lotion if preferred, then wipe clean after use.",
    "前往嘖嘖查看方案": "View options on Zeczec",
    "方案內容、售價與出貨資訊以嘖嘖專案頁為準。": "See the Zeczec campaign for current options, prices, and delivery details.",
    "安心提醒": "A note for safe use",
    "本產品為日常按摩放鬆工具，不是醫療器材，亦不能取代診斷或治療。請依自身感受輕柔使用；如有傷口、急性不適或特殊健康狀況，使用前請先諮詢專業醫療人員。": "This product is intended for everyday massage and relaxation. It is not a medical device and does not replace diagnosis or treatment. Use gentle pressure and stop if discomfort occurs. If you have an injury, acute symptoms, or a specific health condition, consult a qualified healthcare professional before use.",
    "家人使用馬上鑽四合一不插電手持按摩工具協助肩頸放鬆": "A family member using the MAZUAN 4 in 1 NonElectric Handheld Massage Tool for neck and shoulder relaxation",

    "產業高度": "Industry Leadership",
    "讓一個人的經驗，": "Turning one person’s experience",
    "成為一個產業的路。": "into a path for an industry.",
    "從第一線實務到產業高度，從人才培育到未來整合，以專業與溫度，推動美容產業持續進化。": "From frontline practice to industry leadership, and from talent development to future integration, I help the beauty industry evolve with expertise and care.",
    "產業推動": "Industry Development",
    "倡議專業標準與品牌價值，推動美容產業的升級與永續發展。": "Advancing professional standards and brand value to support a stronger, more sustainable beauty industry.",
    "人才培育": "Talent Development",
    "建立系統化教育與實戰訓練，陪伴下一代美容人穩健成長。": "Building structured education and practical training for the next generation of beauty professionals.",
    "未來整合": "Future Integration",
    "結合科技、健康與美學思維，整合資源，打造產業共好的未來。": "Bringing together technology, wellbeing, aesthetics, and shared resources for a better industry future.",

    "先看你": "Let’s begin with",
    "現在卡在哪一步。": "where you are stuck.",
    "每個品牌的階段不同，我提供專屬策略與陪伴，讓你走得更穩、更快一步。": "Every brand is at a different stage. I provide tailored strategy and support to help you move forward with clarity and confidence.",
    "預約免費諮詢": "Book a Free Consultation",
    "我想開SPA店": "I want to open a SPA",
    "建立可落地的開店計畫、課程與營運系統": "Build a practical launch plan, service menu, and operating system",
    "我想提升回購": "I want more repeat clients",
    "設計回購機制與會員經營，提升忠誠與業績": "Design retention and membership systems that strengthen loyalty and revenue",
    "我想把AI用進美業": "I want to use AI in beauty",
    "用AI優化流程與體驗，讓團隊更有效率": "Use AI to improve workflows, experiences, and team efficiency",
    "我想開發自有產品": "I want to develop a product",
    "打造專屬產品策略，創造品牌價值與利潤": "Create a focused product strategy that grows brand value and margin",
    "我想了解幸運竹SPA": "I want to learn about Lucky Bamboo SPA",
    "連結資源與人脈，擴大影響力與合作機會": "Connect resources and people to expand reach and collaboration",

    "把40年經驗，": "Bring 40 years of experience",
    "帶回你的日常。": "into your everyday life.",
    "從美業經營、AI應用到身心與家庭覺察；9 本精選電子書，任選 2 本 NT$300，或 4 本 NT$500。": "Explore beauty-business strategy, AI applications, wellbeing, and family awareness. Choose any 2 of 9 ebooks for NT$300, or any 4 for NT$500.",
    "選購電子書": "Shop Ebooks",
    "可選購電子書，共 9 本": "Nine ebooks available",
    "電子書": "Ebook",
    "電子書・林心樂": "Ebook · Hsin-Le Lin",
    "電子書・林鈺庭": "Ebook · Yu-Ting Lin",
    "SPA 境界": "SPA Horizons",
    "Spa境界": "SPA Horizons",
    "國際SPA視野、服務美學與品牌標準。": "International SPA perspectives, service aesthetics, and brand standards.",
    "AI 也在學做人": "AI Is Learning to Be Human",
    "AI也在學做人": "AI Is Learning to Be Human",
    "把AI變成美業經營與溫度服務的工具。": "Turn AI into a practical tool for beauty businesses and human-centered service.",
    "人生密碼": "Life Code",
    "從生命方向、關係與選擇看懂自己。": "Understand yourself through purpose, relationships, and choices.",
    "經絡藏著你的情緒": "Emotions Hidden in the Meridians",
    "經絡，藏著你的情緒": "Emotions Hidden in the Meridians",
    "讀懂經絡、情緒與身體壓力的訊號。": "Read the signals connecting meridians, emotions, and physical stress.",
    "AI 美業獲利術": "The AI Profit Playbook for Beauty Businesses",
    "從導客、成交、回購到內容行銷，讓 AI 成為美業獲利助手。": "Use AI to support lead generation, conversion, retention, and content marketing.",
    "新娘：從女兒到妻子": "The Bride: From Daughter to Wife",
    "婚前一年規劃肌膚、體態、芳療與幸福婚禮節奏。": "A year-long plan for skincare, body care, aromatherapy, and a joyful wedding rhythm.",
    "妳的臉，決定下一個 20 年！": "Your Face Shapes the Next 20 Years!",
    "每天 10 分鐘，從容顏看見健康、情緒與生命能量。": "Ten minutes a day to explore wellbeing, emotions, and vitality through the face.",
    "懂愛，家就有光": "When Love Is Understood, Home Shines",
    "從愛自己、親密關係到芳香療癒，讓愛在家庭重新流動。": "From self-love and intimacy to aromatic wellbeing—help love flow through the family again.",
    "喚醒生命的水": "Awaken the Water of Life",
    "以 Kneipp 五大自然療法，找回循環、睡眠與身心平衡。": "Rediscover rhythm and wellbeing through Kneipp’s five natural-health principles.",
    "試閱內容": "Preview",
    "加入選購": "Add",
    "已加入": "Added",
    "選購摘要": "Order summary",
    "尚未選書。請從書架任選 2 本或 4 本電子書。": "No books selected. Choose any 2 or 4 ebooks from the shelf.",
    "目前選購": "Selected",
    "優惠金額": "Bundle price",
    "0 本": "0 books",
    "選滿 2 本即可結帳。": "Choose 2 books to check out.",
    "確認訂單並前往付款": "Review order and continue to payment",
    "付款頁若未自動帶入金額，結帳前會再次顯示正確金額。": "If the amount is not filled in automatically, the correct total will be shown again before payment.",
    "購買與領書說明": "Purchase and ebook delivery instructions",
    "付款前先完成": "Before payment",
    "先加入官方 LINE，付款後更安心。": "Add the official LINE account before paying.",
    "付款完成後，將由官方 LINE 核對資料並提供電子書檔案。": "After payment, the official LINE account will verify your order and deliver the ebook files.",
    "點我加入官方 LINE": "Add the official LINE account",
    "掃描或點擊加入官方 LINE": "Scan or click to add the official LINE account",
    "官方 LINE QR Code": "Official LINE QR code",
    "掃描加入": "Scan to add",
    "付款後領書流程": "How ebook delivery works",
    "完成付款後，請主動私訊官方 LINE。": "After payment, send a message to the official LINE account.",
    "完成付款": "Complete payment",
    "若未帶入金額，請手動輸入 NT$300 或 NT$500。": "If no amount appears, enter NT$300 or NT$500 manually.",
    "傳送核對資料": "Send verification details",
    "姓名、付款時間、支付證明截圖與購買書名。": "Your name, payment time, payment screenshot, and selected book titles.",
    "收到電子書": "Receive your ebooks",
    "後台確認後，由官方 LINE 提供電子檔。": "Once verified, the ebook files will be sent through the official LINE account.",
    "其他著作": "Other Books",
    "實體書與更多出版作品": "Print books and more publications",
    "展開瀏覽": "Show titles",
    "打造美學視角": "Developing an Aesthetic Perspective",
    "美容成功心法": "Success Principles for Beauty Professionals",
    "自然療法導師": "A Guide to Naturopathy",
    "四季面膜": "Four-Season Facial Masks",
    "奶奶的魔法棉花棒": "Grandma’s Magic Cotton Swabs",
    "實體書": "Print book",
    "更多著作": "More works",

    "專業歷程與信念": "Professional Journey & Values",
    "40年美業路徑": "A 40-year journey in beauty",
    "與核心信念。": "and the values behind it.",
    "從第一線服務到產業推動，我始終相信：美容不只是技術，更是陪伴與力量。": "From frontline service to industry development, I have always believed that beauty is more than technique—it is support and empowerment.",
    "王燕呢顧問": "Consultant Yanni Wang",
    "王燕呢老師專業路徑": "Yanni Wang’s professional journey",
    "第一線美容師": "Frontline Beauty Professional",
    "從現場服務，累積實務經驗與客戶信任。": "Built hands-on experience and client trust through frontline service.",
    "教育講師": "Educator",
    "培育專業人才，傳遞正確觀念與標準知識。": "Developed professionals through sound principles and structured knowledge.",
    "品牌創業者": "Brand Entrepreneur",
    "建立美業與SPA品牌，落實理念與服務。": "Built beauty and SPA brands that turn values into consistent service.",
    "SPA顧問": "SPA Consultant",
    "整合教育、營運與品牌策略，陪伴業者升級。": "Integrated education, operations, and brand strategy to help businesses grow.",
    "台灣SPA協會理事長": "Chairperson, Taiwan SPA Association",
    "推動產業標準與共好，促進交流與接軌。": "Promotes professional standards, collaboration, and international exchange.",
    "核心信念": "Core values",
    "看見每一個人": "See Every Person",
    "理解情緒與需求，看見真正的你。": "Understand emotions and needs—and see the person behind them.",
    "陪伴與療癒": "Support & Wellbeing",
    "在美的過程中，陪伴身心一起成長。": "Support the body and mind throughout the beauty journey.",
    "專業與整合": "Expertise & Integration",
    "結合美學、自然療法、科技與經營智慧。": "Bring together aesthetics, natural approaches, technology, and business insight.",
    "傳承與共好": "Mentorship & Shared Growth",
    "成就年輕世代，創造美業新價值。": "Empower the next generation and create new value for the beauty industry.",

    "與我聯絡": "Get in Touch",
    "讓我們一起，": "Together, let’s build",
    "成就更美好的美業未來。": "a better future for beauty.",
    "從一個問題開始，找到下一步更清楚的方向。": "Start with one question and find a clearer next step.",
    "官方 LINE": "Official LINE",
    "加入好友，開始聯絡": "Add us and start a conversation",
    "手機可直接點擊，桌機可掃描 QR Code": "Tap on mobile or scan the QR code on desktop",
    "馬上鑽｜購買與方案": "MAZUAN | Options & Purchase",
    "前往嘖嘖專案頁": "Visit the Zeczec campaign",
    "查看最新方案、售價與出貨資訊": "See current options, prices, and delivery information",
    "聯絡方式": "Contact options",
    "產品方案與購買資訊": "Product options and purchase information",
    "電話": "Phone",
    "辦公室電話": "Office",
    "郵件": "Email",
    "電子郵件": "Email",
    "網站": "Website",
    "官方網站": "Official website",
    "協會": "Association",
    "線上資訊": "Online information",
    "© 2026 王燕呢顧問｜台灣SPA協會｜版權所有": "© 2026 Consultant Yanni Wang | Taiwan SPA Association | All rights reserved",
    "回到頂端": "Back to top",
    "確認訂單": "Review order",

    "關閉視窗": "Close dialog",
    "聯絡王燕呢顧問": "Contact Consultant Yanni Wang",
    "試閱書籍": "Book Preview",
    "精選文字內頁已依螢幕寬度顯示，可直接向下閱讀。": "Selected pages are fitted to your screen. Scroll down to continue reading.",
    "下載試閱 PDF": "Download preview PDF",
    "關閉試閱視窗": "Close book preview",
    "書籍試閱內頁": "Book preview pages",
    "關閉付款確認視窗": "Close payment confirmation",
    "結帳前最後確認": "Final check before payment",
    "確認書籍與付款金額": "Confirm books and payment amount",
    "本次選購": "Your selection",
    "應付金額": "Amount due",
    "請留意付款頁金額": "Check the amount on the payment page",
    "目前付款頁可能不會自動帶入金額，請手動輸入": "The payment page may not fill in the amount automatically. Please enter",
    "後再完成付款。": "before completing payment.",
    "付款後請回到官方 LINE": "Return to the official LINE account after payment",
    "主動傳送姓名、付款時間、支付證明截圖，並清楚說明購買了哪些書。": "Send your name, payment time, payment screenshot, and the titles you purchased.",
    "確認，前往付款頁": "Confirm and continue to payment",
    "尚未加入？先加入官方 LINE": "Not connected yet? Add the official LINE account",
    "返回修改": "Go back and edit",

    "核心主題": "Core topic",
    "適合讀者": "Who it is for",
    "我想傳達的價值": "Key takeaway",
    "適合誰": "Who it is for",
    "我能協助你完成什麼": "How I can help",
    "立即能開始的方向": "A practical first step",
    "洽詢完整資料": "Ask for full details",
    "查看 Google Books": "View on Google Books",
    "前往選購": "Shop now",

    "我從服務現場開始，理解手感、信任、諮詢與顧客關係。所有後來的品牌系統，都來自第一線累積出的真實問題。": "I began on the service floor, learning the importance of touch, trust, consultation, and client relationships. Every brand system I later developed grew from real frontline challenges.",
    "我最早學會的是聽懂顧客身體與情緒真正想說的話。": "My first lesson was learning to understand what a client’s body and emotions were truly communicating.",
    "這段經驗讓我後來設計課程、制度與品牌時，永遠回到服務現場。": "That experience keeps every course, system, and brand I design grounded in the service environment.",
    "美業的專業不是只有技術，而是能被顧客信任的完整照顧。": "Professional beauty service is more than technique; it is complete care that clients can trust.",
    "我把技術、服務流程、溝通與情緒管理整理成能被學會、被複製、被傳承的課程，培育更多美業人才。": "I organize technique, service flow, communication, and emotional management into teachable, repeatable courses that can be passed on.",
    "把經驗變成方法，是我投入教育後最重要的工作。": "Turning experience into practical methods has been my most important work as an educator.",
    "我希望美容師不只學會操作，也能理解顧客、管理流程、建立專業自信。": "I want beauty professionals to understand clients, manage workflows, and build confidence—not simply perform techniques.",
    "當技術能被整理、被說清楚，下一代就能少走很多路。": "When techniques are organized and explained clearly, the next generation can avoid unnecessary detours.",
    "創業者": "Entrepreneur",
    "我走過多店經營與品牌發展，知道一間店要穩定獲利，不能只靠技術，也需要定位、制度、產品與會員經營。": "Having managed multiple stores and developed brands, I know sustainable profitability requires positioning, systems, products, and membership strategy—not technique alone.",
    "創業讓我看見美業經營的真實壓力：客源、現金流、團隊、會員、產品都要一起穩。": "Entrepreneurship revealed the real pressures of a beauty business: customers, cash flow, team, members, and products must all become stable together.",
    "我把店務、課程、產品與會員制度整合成能落地的經營架構。": "I integrate store operations, services, products, and membership into a practical operating structure.",
    "這些經驗後來成為我協助店家轉型與開店的核心基礎。": "Those experiences became the foundation for helping businesses transform and launch new stores.",
    "國際顧問": "International Consultant",
    "我以SPA產業顧問、品牌顧問與自然療法教育經驗，協助店家建立標準化管理、國際視野與服務美學。": "Drawing on SPA consulting, brand strategy, and natural-wellbeing education, I help businesses develop standardized management, international perspective, and service aesthetics.",
    "SPA不是單一療程，而是空間、儀式、身心照護與顧客體驗的整合。": "A SPA is not a single treatment; it integrates space, ritual, holistic care, and customer experience.",
    "我協助品牌把國際視野轉譯成台灣店家真正能執行的流程。": "I help brands translate international perspectives into processes that Taiwanese businesses can truly execute.",
    "標準化不是把服務變冷，而是讓溫度能穩定地被交付。": "Standardization does not make service cold; it helps care and warmth be delivered consistently.",
    "我推動美業教育、SPA專業標準、產業交流與人才培育，讓台灣美業能往更健康、更永續的方向前進。": "I advance beauty education, SPA standards, industry exchange, and talent development so Taiwan’s beauty industry can move toward a healthier, more sustainable future.",
    "我看見的不是一間店，而是整個美業產業如何被信任、被尊重、被傳承。": "I look beyond a single store to how the entire beauty industry earns trust, respect, and continuity.",
    "協會工作讓我能把教育、標準、交流與下一代人才培育放在同一張藍圖裡。": "Association work lets me bring education, standards, exchange, and next-generation talent into one blueprint.",
    "我的任務，是讓認真的美容人有更清楚的路，也讓產業有更高的天花板。": "My mission is to give dedicated beauty professionals a clearer path and help the industry reach higher.",
    "理事長背景": "From the Chairperson",
    "以台灣SPA協會理事長的身份，我推動的不只是美容技術，而是產業標準、專業倫理、教育交流與服務品質。": "As Chairperson of the Taiwan SPA Association, I advance not only technique but also industry standards, professional ethics, education, exchange, and service quality.",
    "讓SPA服務從個人經驗走向更清楚的專業標準。": "Move SPA service from individual experience toward clearer professional standards.",
    "串聯店家、講師、品牌與產業資源，形成可互相支持的生態。": "Connect businesses, educators, brands, and industry resources into a mutually supportive ecosystem.",
    "把台灣美業的溫度與細膩，整理成能被市場理解的專業價值。": "Express the care and refinement of Taiwan’s beauty industry as professional value the market can understand.",
    "我把40年第一線實戰、教育培訓與創業經驗，整理成美容師、講師與經營者能接得住、用得上的方法。": "I turn forty years of frontline work, education, and entrepreneurship into methods beauty professionals, educators, and owners can use.",
    "培育會操作的人，也培育懂顧客、懂經營、懂品牌的人。": "Develop people who understand clients, operations, and brands—not only technique.",
    "協助下一代美容人建立專業自信與長期職涯方向。": "Help the next generation build professional confidence and long-term career direction.",
    "讓傳承不只是口號，而是課程、流程、工具與陪伴。": "Make mentorship tangible through courses, processes, tools, and support.",
    "美業的下一階段，會是美學、自然療法、品牌經營與AI工具的整合。我希望科技服務人，也讓美容人的專業更被看見。": "The beauty industry’s next stage will integrate aesthetics, natural approaches, brand operations, and AI. I want technology to serve people and make professional expertise more visible.",
    "把AI導入導客、預約、票券、內容與會員互動，提升經營效率。": "Use AI across lead generation, booking, vouchers, content, and member engagement to improve efficiency.",
    "把自然療法與身心照護放回美業服務核心，保留人的溫度。": "Keep natural approaches and holistic care at the heart of beauty service while preserving human warmth.",
    "用品牌、教育與科技，替下一代美容人建立更大的舞台。": "Use brands, education, and technology to create a larger stage for the next generation.",
    "我的核心信念": "My Core Values",
    "美業的起點不是產品，而是看見顧客真正的需求。先理解人，服務才有溫度。": "Beauty service begins not with a product, but with seeing what a client truly needs. Understanding the person is what gives service warmth.",
    "在美的過程中，我希望每一次接觸都能陪伴身心一起鬆動，讓人重新感覺到自己。": "I hope every beauty experience helps body and mind relax and lets each person reconnect with themselves.",
    "我結合美學、自然療法、科技與經營智慧，讓美業不只是服務，而是一套能長久運作的專業系統。": "I combine aesthetics, natural approaches, technology, and business insight so beauty becomes a sustainable professional system, not just a service.",
    "我把40年走過的路整理出來，交給下一代美容師，讓認真努力的人少走冤枉路。": "I organize the lessons of my forty-year journey for the next generation so dedicated professionals can avoid unnecessary detours.",

    "我以SPA創業顧問的角度，協助你從店面規劃、課程設計、獲利模式、會員制度開始，建立自己的SPA品牌。": "As a SPA startup consultant, I help you build your brand from store planning and service design to revenue models and membership systems.",
    "準備開店、轉型SPA或想把技術變成品牌的人。": "Professionals preparing to open a store, transition into SPA services, or turn a skill into a brand.",
    "協助梳理店面規劃、課程設計、獲利模式與會員制度。": "Clarify store planning, service design, revenue models, and membership systems.",
    "先從定位、客層、服務菜單與營收模型建立清楚藍圖。": "Start with a clear blueprint for positioning, audience, service menu, and revenue model.",
    "我協助你重新整理顧客旅程、回購設計、現金流與團隊制度，讓美業經營從辛苦接案走向穩定循環。": "I help you redesign the customer journey, retention system, cash flow, and team processes so the business can move from constant hustle to a stable cycle.",
    "已有門店但來客、回購或團隊管理不穩定的經營者。": "Owners with an existing store but inconsistent traffic, retention, or team management.",
    "協助調整顧客旅程、回購設計、現金流與團隊流程。": "Improve the customer journey, retention design, cash flow, and team workflows.",
    "先盤點客源、會員資料、服務動線與營收瓶頸。": "Begin by reviewing lead sources, member data, service flow, and revenue bottlenecks.",
    "我想導入AI": "I want to adopt AI",
    "我把AI遊戲導客、AI票券、AI預約、AI一頁式網站與AI短影音行銷，整理成美業團隊能理解、能執行、能驗證的工具流程。": "I turn AI lead-generation games, vouchers, booking, landing pages, and short-form video marketing into workflows that beauty teams can understand, execute, and test.",
    "想把AI導入預約、票券、導客、內容與會員互動的美業團隊。": "Beauty teams that want to use AI for booking, vouchers, lead generation, content, and member engagement.",
    "協助建立AI遊戲導客、票券、預約、一頁式網站與短影音流程。": "Build AI-supported lead-generation games, vouchers, booking, landing pages, and short-video workflows.",
    "先選一個最能帶來營收的流程，做小型可驗證版本。": "Choose one revenue-relevant workflow and create a small, testable version first.",
    "我想做品牌產品": "I want to build a branded product",
    "我協助美容產品OEM、品牌包裝設計、教育訓練課程開發、市場定位分析與國際飯店SPA規劃，把專業變成可被市場理解的品牌。": "I support beauty-product OEM, packaging, training development, market positioning, and international hotel SPA planning—turning expertise into a brand the market can understand.",
    "想開發產品、包裝品牌或建立教育課程的美業品牌。": "Beauty brands developing products, packaging, or educational programs.",
    "協助美容產品OEM、品牌包裝、教育訓練與國際SPA規劃。": "Support with beauty-product OEM, brand packaging, training, and international SPA planning.",
    "先整理品牌定位、產品線、價格帶與課程架構。": "Begin with brand positioning, product range, pricing, and curriculum structure.",
    "我以幸運竹SPA串聯自然植物、芳療與身心療癒，也以mmap.tw串聯全台美業名店、教育、導客與AI行銷。": "Through Lucky Bamboo SPA I connect botanicals, aromatherapy, and holistic wellbeing; through mmap.tw I connect leading beauty businesses across Taiwan with education, customer acquisition, and AI marketing.",
    "希望加入美業聯盟、擴大曝光與共同導客的店家。": "Businesses that want to join a beauty network, increase visibility, and share customer-acquisition opportunities.",
    "透過幸運竹SPA與美萌台灣地圖串聯名店、教育、採購與AI行銷。": "Connect leading businesses, education, purchasing, and AI marketing through Lucky Bamboo SPA and the Taiwan Beauty Map.",
    "先從品牌資料、服務特色與可合作資源建立聯盟入口。": "Start by organizing your brand profile, service strengths, and collaboration resources.",

    "美業菁英星光大道。這本書整理美學職人創業與經營的真心話，陪伴美容人看見自己的方向。": "This book gathers honest lessons from aesthetic professionals on entrepreneurship and operations, helping beauty professionals see their own direction.",
    "從美學職人的創業現場出發，建立品牌定位與專業視角。": "Build brand positioning and a professional perspective from real entrepreneurial experience.",
    "適合正在經營美容、美體、SPA與服務型品牌的創業者閱讀。": "For entrepreneurs running beauty, body-care, SPA, and service brands.",
    "我希望讀者不只學技術，也能建立看待顧客、空間與服務價值的眼光。": "A guide to seeing clients, spaces, and service value—not just learning technique.",
    "從美容經營、顧客關係到成功心法，給想把一門手藝做成事業的美容職人。": "From beauty-business operations and client relationships to the mindset needed to turn a craft into a business.",
    "整理美容店經營會遇到的客源、回購、服務流程與現金流問題。": "Addresses customer acquisition, retention, service workflows, and cash-flow challenges.",
    "把第一線技術轉化為可被顧客信任、可被團隊複製的事業系統。": "Turn frontline skill into a trusted business system that a team can consistently deliver.",
    "給正在卡關的美容師一套重新檢視事業體質的方法。": "A way for beauty professionals to reassess a business that feels stuck.",
    "以自然療法與SPA教育為核心，連結身體照護、療癒觀念與專業培訓。": "Connects body care, wellbeing concepts, and professional training through natural approaches and SPA education.",
    "把自然療法、身體覺察與SPA照護放進同一套學習脈絡。": "Brings natural approaches, body awareness, and SPA care into one learning path.",
    "適合想深化專業療癒語言與諮詢能力的美容師、芳療師與講師。": "For beauty professionals, aromatherapists, and educators developing their consultation language and skills.",
    "從身體訊號出發，讓服務不只是操作，而是理解與陪伴。": "Begin with the body’s signals so service becomes understanding and support, not just technique.",
    "以四季植物與天然材料為靈感，整理肌膚保養與DIY面膜配方。": "Seasonal botanicals and natural materials inspire these skincare ideas and DIY mask recipes.",
    "以春夏秋冬的肌膚狀態切入，搭配天然植物與生活材料。": "Approaches skin needs season by season using botanicals and familiar materials.",
    "內容包含面膜製作方法、臉部DIY水療與居家保養觀念。": "Includes mask-making, DIY facial hydrotherapy, and home skincare concepts.",
    "適合想把保養課程生活化、教學化的美容教育者。": "For beauty educators who want to make skincare practical and teachable.",
    "從生活小物出發，讓親子、家庭與創意在簡單材料中發光。": "Simple everyday materials become a starting point for family connection and creativity.",
    "以棉花棒這種日常材料，打開親子手作與創意啟發。": "Uses cotton swabs to inspire parent-child crafts and creative exploration.",
    "保留生活記憶與手作溫度，也延伸出教學活動的可能。": "Preserves everyday memories and handmade warmth while opening possibilities for teaching activities.",
    "適合親子、美感教育與社群活動內容設計。": "For parent-child activities, aesthetic education, and community program design.",
    "從身心療癒到品牌經營，談國際SPA的視野、標準化管理與服務美學。": "From holistic wellbeing to brand operations, this book explores international SPA perspectives, standardized management, and service aesthetics.",
    "整理SPA服務的專業語言、空間感、儀式感與顧客體驗。": "Organizes the professional language, atmosphere, rituals, and customer experience of SPA service.",
    "協助經營者理解國際SPA視野與在地品牌落地之間的轉譯。": "Helps operators translate international SPA perspectives into a locally relevant brand.",
    "適合正在規劃SPA品牌、課程或門店升級的人。": "For those planning a SPA brand, curriculum, or store upgrade.",
    "我把AI視為理解顧客、陪伴團隊與創造美業新工具的助手，科技應該服務人，而不是取代人。": "I see AI as an assistant for understanding customers, supporting teams, and creating new tools for beauty businesses. Technology should serve people, not replace them.",
    "從美業現場的導客、預約、行銷與教育需求談AI應用。": "Explores AI through real needs in lead generation, booking, marketing, and education.",
    "提醒科技不是冷冰冰的替代，而是幫助服務者更理解人。": "Technology is not a cold substitute; it can help service professionals understand people better.",
    "適合想把AI導入門店流程、內容經營與會員互動的團隊。": "For teams introducing AI into store operations, content, and member engagement.",
    "透過生命方向、關係、工作與財運的探索，協助人看懂自己，也看懂選擇。": "Explore life direction, relationships, work, and finances to understand yourself and your choices.",
    "從生命方向、關係、工作與財運切入，協助讀者整理內在秩序。": "Uses purpose, relationships, work, and finances to help readers restore inner order.",
    "把抽象的人生課題轉成可以被理解、被選擇、被調整的線索。": "Turns abstract life questions into clues that can be understood, chosen, and adjusted.",
    "適合想進一步理解自我定位與生活決策的人。": "For readers seeking greater clarity in identity and life decisions.",
    "透過經絡、五行與情緒語言，讀懂壓力如何在身體留下訊號，並找回身心平衡。": "Uses the language of meridians, the five elements, and emotion to explore how stress appears in the body and how to restore balance.",
    "從經絡與情緒的互動，理解壓力如何反映在身體上。": "Understand how stress can be reflected in the body through the interaction of meridians and emotions.",
    "協助美容師在服務前後，更細緻地讀懂顧客狀態。": "Helps beauty professionals read a client’s state more carefully before and after service.",
    "適合想把身心平衡、經絡照護與諮詢能力整合進服務的人。": "For those integrating wellbeing, meridian care, and consultation into service.",
    "把四十多年美業實戰轉成 AI 時代可落地的經營方法，從導客、成交到回購，讓一人工作室也能建立有效率的獲利系統。": "Turns more than forty years of beauty-industry experience into practical methods for the AI era, from customer acquisition and conversion to retention.",
    "以美業現場為核心，整理導客、會員經營、成交話術與內容行銷的 AI 應用。": "Practical AI applications for lead generation, membership, sales conversations, and content marketing.",
    "適合想節省行政與行銷時間、建立穩定顧客流程的美容師與經營者。": "For beauty professionals and owners who want to save administrative and marketing time and build a stable customer flow.",
    "AI 是放大專業的助手，讓經驗更快被整理、執行與驗證。": "AI can amplify expertise by helping experience become organized, executed, and tested more quickly.",
    "婚禮不只是一天的妝容，而是一場身、心、靈的成熟旅程；從婚前一年開始，循序準備最自在有力量的自己。": "A wedding is more than one day’s look—it is a journey of personal growth. Begin a year ahead and prepare at a comfortable, empowering pace.",
    "依婚前十二個月到七天，整理婚禮、肌膚、體態與生活節奏的準備重點。": "Organizes wedding, skincare, body-care, and lifestyle priorities from twelve months to seven days before the wedding.",
    "結合保養、美學、芳療與婚姻角色轉換，照顧外在也安定內在。": "Combines skincare, aesthetics, aromatherapy, and the transition into marriage to care for both appearance and inner steadiness.",
    "適合準新娘、陪伴女兒出嫁的家人，以及提供新娘服務的美業工作者。": "For brides-to-be, their families, and beauty professionals serving brides.",
    "林心樂老師從三十多年美業經驗出發，陪伴女性從一張臉看見健康、情緒、能量與人生，重新把照顧自己的主導權找回來。": "Drawing on more than thirty years in the beauty industry, Hsin-Le Lin helps women explore wellbeing, emotion, vitality, and life through the face—and reclaim ownership of self-care.",
    "以每天十分鐘的練習，從容顏、呼吸與情緒開始照顧自己。": "Begin caring for yourself through ten-minute daily practices involving the face, breath, and emotions.",
    "不追求快速變年輕，而是為未來二十年的健康、笑容與生命力累積改變。": "The goal is not instant youth, but lasting changes for the next twenty years of wellbeing, smiles, and vitality.",
    "適合總把工作與家人放在前面、想重新看見自己的女性讀者。": "For women who often put work and family first and want to see themselves again.",
    "林鈺庭老師把芳香療法、心理覺察與生命經驗帶進家庭關係，從愛自己開始，讓愛重新流動。": "Yu-Ting Lin brings aromatherapy, psychological awareness, and life experience into family relationships, beginning with self-love so love can flow again.",
    "理解依附、溝通與家庭角色，辨認關係裡反覆出現的情緒模式。": "Understand attachment, communication, and family roles, and recognize recurring emotional patterns.",
    "透過界線、內在小孩與芳香療癒，安放身體記憶與親密關係中的不安。": "Explore boundaries, the inner child, and aromatic wellbeing to settle embodied memories and relationship anxiety.",
    "適合想改善伴侶、親子與家庭互動，也想找回內在安定的讀者。": "For readers who want to improve partner, parent-child, and family interactions while finding inner steadiness.",
    "從德國 Kneipp 自然療法出發，連結水療、植物、運動、飲食與生活秩序，讓自然重新走進 SPA 實務與日常健康。": "Starting with Germany’s Kneipp approach, this book connects hydrotherapy, plants, movement, nutrition, and daily order to bring nature back into SPA practice and everyday wellbeing.",
    "認識 Kneipp 自然療法的歷史、精神，以及水療對循環、神經與睡眠的影響。": "Introduces the history and principles of the Kneipp approach and its perspective on hydrotherapy, circulation, the nervous system, and sleep.",
    "結合四十多年 SPA、水療與身心照護經驗，提供能融入生活的自然方法。": "Combines more than forty years of SPA, hydrotherapy, and holistic-care experience into natural practices for everyday life.",
    "適合 SPA 工作者、健康教育者，以及想找回身心節奏的讀者。": "For SPA professionals, wellbeing educators, and readers seeking a steadier body-mind rhythm.",

    "切換為淺色模式": "Switch to light mode",
    "切換為深色模式": "Switch to dark mode",
    "已切換為深色模式。": "Dark mode enabled.",
    "已切換為淺色模式。": "Light mode enabled.",
    "已前往聯絡區。": "Contact section opened.",
    "已回到頁面頂端。": "Back at the top.",
    "正在開啟聯絡方式": "Opening contact option",
    "正在撥打辦公室電話": "Calling the office",
    "正在開啟 Email": "Opening email",
    "正在開啟官方網站": "Opening the official website",
    "正在開啟台灣SPA協會網站": "Opening the Taiwan SPA Association website",
    "正在開啟官方 LINE": "Opening the official LINE account",
    "這本書已在選購區。": "This book is already selected.",
    "四本優惠已選滿。": "The four-book bundle is full.",
    "已加入選購區。": "Added to your selection.",
    "已從選購區移除。": "Removed from your selection.",
    "兩本優惠已成立，可直接結帳。": "Your two-book bundle is ready to check out.",
    "四本優惠已成立，可直接結帳。": "Your four-book bundle is ready to check out.",
    "再加入 1 本，即可用 NT$300 結帳。": "Add 1 more book to check out for NT$300.",
    "再加入 1 本，即可升級四本 NT$500。": "Add 1 more book to upgrade to 4 for NT$500.",
    "尚未符合優惠": "Bundle not ready",
    "請選擇 2 本或 4 本電子書後再結帳。": "Choose 2 or 4 ebooks before checking out.",
    "正在前往付款頁…": "Opening payment page…",
    "正在建立付款資料，請稍候。": "Preparing payment details…",
    "付款資料建立失敗，請稍後再試。": "Payment details could not be created. Please try again later.",
    "無法開啟一般收款頁，請稍後再試。": "The payment page could not be opened. Please try again later."
  }));

  const englishPatterns = [
    [/^(\d+) 本電子書$/, (_, count) => `${count} ebooks`],
    [/^(\d+) 本$/, (_, count) => `${count} books`],
    [/^原書第 (\d+) 頁$/, (_, page) => `Original page ${page}`],
    [/^(.+) 原書第 (\d+) 頁$/, (_, title, page) => `${translate(title)}, original page ${page}`],
    [/^下載 (.+) 試閱 PDF$/, (_, title) => `Download the ${translate(title)} preview PDF`],
    [/^移除 (.+)$/, (_, title) => `Remove ${translate(title)}`],
    [/^確認訂單・NT\$(\d+)$/, (_, amount) => `Review order · NT$${amount}`],
    [/^付款頁若未自動帶入，請手動輸入 NT\$(\d+)；付款後請回 LINE 傳送核對資料。$/, (_, amount) => `If the amount is not filled in automatically, enter NT$${amount}. Return to LINE after payment to send your order details.`],
    [/^付款頁若未自動帶入，請手動輸入 NT\$(\d+)。$/, (_, amount) => `If the amount is not filled in automatically, enter NT$${amount}.`],
    [/^(.+) 電子書封面$/, (_, title) => `${translate(title)} ebook cover`],
    [/^(.+)書封$/, (_, title) => `${translate(title)} book cover`]
  ];

  const translate = (value) => {
    if (!isEnglish || typeof value !== "string") return value;
    const direct = englishText.get(value);
    if (direct) return direct;
    for (const [pattern, replacement] of englishPatterns) {
      if (pattern.test(value)) return value.replace(pattern, replacement);
    }
    return value;
  };

  const translateTextNode = (node) => {
    if (!isEnglish || !node?.nodeValue) return;
    const match = node.nodeValue.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!match || !match[2]) return;
    const translated = translate(match[2]);
    if (translated !== match[2]) node.nodeValue = `${match[1]}${translated}${match[3]}`;
  };

  const translatableAttributes = ["aria-label", "alt", "data-toast", "title"];

  const translateElement = (element) => {
    if (!isEnglish || !(element instanceof Element)) return;
    translatableAttributes.forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      const value = element.getAttribute(attribute);
      const translated = translate(value);
      if (translated !== value) element.setAttribute(attribute, translated);
    });
  };

  const localizeTree = (root = document.body) => {
    if (!isEnglish || !root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;
    if (root.nodeType === Node.ELEMENT_NODE) translateElement(root);
    root.querySelectorAll?.("*").forEach(translateElement);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const tag = node.parentElement?.tagName;
        return tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT"
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    while (walker.nextNode()) translateTextNode(walker.currentNode);
  };

  const updateMetadata = () => {
    if (!isEnglish) return;
    const title = "MAZUAN | 4 in 1 NonElectric Handheld Massage Tool | Zhili Beauty Technology";
    const description = "Discover MAZUAN, a compact four-surface handheld massage tool that requires no electricity, plus SPA consulting, beauty education, and publications by Yanni Wang.";
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", "https://spa.petrichor.tw/?lang=en");
    document.querySelector('meta[property="og:site_name"]')?.setAttribute("content", "Zhili Beauty Technology");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "MAZUAN | 4 in 1 NonElectric Handheld Massage Tool");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Four useful surfaces, no electricity, and compact everyday portability. View current options on Zeczec.");
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", "https://spa.petrichor.tw/?lang=en");
    document.querySelector('meta[property="og:locale"]')?.setAttribute("content", "en_US");
    document.querySelector('meta[property="og:image:alt"]')?.setAttribute("content", "MAZUAN 4 in 1 NonElectric Handheld Massage Tool in use");
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", "MAZUAN | 4 in 1 NonElectric Handheld Massage Tool");
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", "Four useful surfaces, no electricity, and compact everyday portability. View current options on Zeczec.");
    document.querySelector('meta[name="twitter:image:alt"]')?.setAttribute("content", "MAZUAN 4 in 1 NonElectric Handheld Massage Tool in use");
  };

  const syncLanguageSwitcher = () => {
    const chineseLink = document.querySelector('[data-language="zh"]');
    const englishLink = document.querySelector('[data-language="en"]');
    chineseLink?.removeAttribute("aria-current");
    englishLink?.removeAttribute("aria-current");
    (isEnglish ? englishLink : chineseLink)?.setAttribute("aria-current", "page");
  };

  window.siteI18n = Object.freeze({ locale, isEnglish, t: translate, localize: localizeTree });

  updateMetadata();
  syncLanguageSwitcher();
  localizeTree(document.body);

  if (isEnglish && document.body) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") translateTextNode(mutation.target);
        if (mutation.type === "attributes") translateElement(mutation.target);
        mutation.addedNodes.forEach(localizeTree);
      });
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatableAttributes
    });
  }
})();
