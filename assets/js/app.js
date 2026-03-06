    // =====================================================
    // CONFIGURATION & STATE
    // =====================================================
    
    const defaultConfig = {
      hero_title: 'MATSI WINE',
      hero_subtitle: '8000 წლიანი მეღვინეობის ისტორია თანამედროვე ინტერპრეტაციაში — ყოველ ბოთლში ქართული მიწის სული',
      about_title: 'ჩვენი ისტორია',
      background_color: '#722f37',
      surface_color: '#fdf9f3',
      text_color: '#3d1219',
      primary_action_color: '#722f37',
      secondary_action_color: '#5a1f29'
    };
    const FIREBASE_CONFIG = {
      apiKey: 'AIzaSyBRT-iB1FF9I7Wn5FOOFvw-ER0PwsgGpb4',
      authDomain: 'matsiwine-cfaf4.firebaseapp.com',
      projectId: 'matsiwine-cfaf4',
      storageBucket: 'matsiwine-cfaf4.firebasestorage.app',
      messagingSenderId: '666163321',
      appId: '1:666163321:web:e98c31b468867184e91ca8',
      measurementId: 'G-2KY01LMQQZ'
    };
    const FIREBASE_STATE_COLLECTION = 'site';
    const FIREBASE_STATE_DOC = 'main';
    const DEFAULT_ORDER_EMAIL = 'matsiwine@gmail.com';
    const CART_STORAGE_KEY = 'matsi_cart_v1';
    const BANK_ACCOUNTS = [
      { bank: 'ბოგ', iban: 'GE35BG0000000537576314' },
      { bank: 'თბს', iban: 'GE25TB7332245064300052' }
    ];

    const defaultHomeContent = {
      hero_kicker: 'ქართული ღვინის ტრადიცია',
      hero_btn_primary: 'კოლექციის ნახვა',
      hero_btn_secondary: 'ჩვენი ისტორია',
      featured_kicker: 'გამორჩეული კოლექცია',
      featured_title: 'ჩვენი საუკეთესოები',
      featured_cta: 'სრული კატალოგი',
      card1_category: 'წითელი მშრალი',
      card1_title: 'საფერავი რეზერვი 2019',
      card1_desc: 'მუხის კასრში დაძველებული, ხავერდოვანი ტანინები',
      card1_price: '₾85',
      card1_btn: 'დამატება',
      card1_image: '',
      card2_category: 'ქვევრის ღვინო',
      card2_title: 'მწვანე ქვევრი 2021',
      card2_desc: 'ქვევრში დაყენებული, ქარვისფერი, მდიდარი არომატით',
      card2_price: '₾65',
      card2_btn: 'დამატება',
      card2_image: '',
      card3_category: 'ნახევრად ტკბილი',
      card3_title: 'კინძმარაული 2020',
      card3_desc: 'კლასიკური კახური, მაყვლისა და ალუბლის ნოტებით',
      card3_price: '₾55',
      card3_btn: 'დამატება',
      card3_image: '',
      story_kicker: 'ჩვენი ფილოსოფია',
      story_title: 'მიწიდან სუფრამდე',
      story_text: 'MATSI WINE — ეს არის ოჯახური მეღვინეობის თანამედროვე გაგრძელება. ჩვენ ვაერთიანებთ ქვევრის უძველეს ტრადიციას ევროპული მეღვინეობის თანამედროვე მიდგომებთან, რათა შევქმნათ ღვინო, რომელიც მოგვითხრობს ქართული მიწის ისტორიას.',
      story_btn: 'მეტის გაგება',
      stat1_value: '8000+',
      stat1_label: 'წლიანი ტრადიცია',
      stat1_image: '',
      stat2_value: '525',
      stat2_label: 'ქართული ჯიში',
      stat2_image: '',
      stat3_value: '100%',
      stat3_label: 'ორგანული',
      stat3_image: '',
      stat4_value: '🏆',
      stat4_label: 'საერთაშორისო ჯილდოები',
      stat4_image: ''
    };
    const defaultAboutContent = {
      about_kicker: 'ჩვენს შესახებ',
      about_title_edit: 'ჩვენი ისტორია',
      about_subtitle: 'MATSI WINE დაარსდა 2018 წელს კახეთში, სადაც ჩვენი ოჯახი თაობების მანძილზე ინახავდა მეღვინეობის საიდუმლოებებს',
      about_section1_title: 'ფესვები კახეთში',
      about_section1_text1: 'ჩვენი მეღვინეობა მდებარეობს კახეთის გულში — ალაზნის ველზე, სადაც უნიკალური მიკროკლიმატი და ნაყოფიერი ნიადაგი ქმნის იდეალურ პირობებს საუკეთესო ყურძნის მოსაყვანად.',
      about_section1_text2: 'ოჯახის მამულში დარგული ვაზები — საფერავი, მწვანე, რქაწითელი — 40 წელზე მეტია ხილს იძლევა და ყოველწლიურად გვაძლევს ღვინოს განსაკუთრებული ხასიათით.',
      about_photo1_label: 'ვენახის ფოტო',
      about_section2_title: 'ქვევრის ტრადიცია',
      about_section2_text1: 'ჩვენ ვიყენებთ ქვევრს — მიწაში ჩაფლულ თიხის ჭურჭელს, რომელშიც ღვინო ფერმენტირდება და მწიფდება ბუნებრივი ტემპერატურის კონტროლით. ეს მეთოდი UNESCO-ს მსოფლიო მემკვიდრეობის ნაწილია.',
      about_section2_text2: 'ქვევრის ღვინო გამოირჩევა ღრმა, კომპლექსური გემოთი და ხანგრძლივი დამთავრებით, რასაც ვერც ერთი თანამედროვე ტექნოლოგია ვერ იმეორებს.',
      about_photo2_label: 'ქვევრის ფოტო',
      about_section3_title: 'ჩვენი გუნდი',
      about_section3_text1: 'MATSI-ს გუნდში გაერთიანებულია სამი თაობა: ბაბუის ტრადიციული ცოდნა, მამის მეღვინეობის გამოცდილება და შვილების თანამედროვე ხედვა.',
      about_section3_text2: 'ჩვენ გვჯერა, რომ საუკეთესო ღვინო იბადება ოჯახურ გარემოში, სადაც ყოველი ბოთლი მზადდება სიყვარულით და პატივისცემით ტრადიციისადმი.',
      about_photo3_label: 'გუნდის ფოტო',
      about_values_title: 'ჩვენი ღირებულებები',
      about_value1_title: 'ბუნებრიობა',
      about_value1_text: '100% ორგანული მეურნეობა, ქიმიკატების გარეშე',
      about_value2_title: 'ტრადიცია',
      about_value2_text: '8000 წლიანი მემკვიდრეობის პატივისცემა',
      about_value3_title: 'ხარისხი',
      about_value3_text: 'ყოველ ბოთლში — მხოლოდ საუკეთესო'
    };
    
    let config = { ...defaultConfig };
    let homeContent = { ...defaultHomeContent };
    let aboutContent = { ...defaultAboutContent };
    let cartItems = [];
    let currentPage = 'home';
    let currentFilter = 'all';
    let isLoading = false;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let revealObserver = null;
    const defaultSiteMeta = {
      contact_email: 'info@matsiwine.ge',
      contact_phone: '+995 555 123 456',
      contact_address: 'კახეთი, თელავის რაიონი, სოფ. წინანდალი',
      instagram_link: 'https://instagram.com/matsi_wine_',
      order_notify_email: DEFAULT_ORDER_EMAIL,
      custom_label_price: 45,
      cloudinary_cloud_name: 'dlth7j0i6',
      cloudinary_upload_preset: 'matsi_labels_unsigned',
      logo_url: 'matsiwine.png',
      hero_bottle_url: 'bottle.png',
      sections: {
        home: true,
        shop: true,
        about: true,
        contact: true,
        designer: true,
        cart: true
      }
    };
    let siteMeta = JSON.parse(JSON.stringify(defaultSiteMeta));
    
    // Products data
    let products = [
      {
        id: 'saperavi-reserve',
        name: 'საფერავი რეზერვი',
        year: 2019,
        type: 'red',
        category: 'წითელი მშრალი',
        price: 85,
        grape: 'საფერავი',
        region: 'კახეთი',
        description: 'მუხის კასრში 18 თვით დაძველებული პრემიუმ საფერავი. ღრმა რუბინისფერი, შავი ხილის, ვანილის და შოკოლადის არომატით.',
        aroma: 'შავი ალუბალი, მაყვალი, ვანილი, შოკოლადი',
        taste: 'სრულსხეულიანი, ხავერდოვანი ტანინები, ხანგრძლივი დამთავრება',
        pairing: 'წითელი ხორცი, ხნული საჭმელი, მწიფე ყველი',
        alcohol: '14.5%',
        temperature: '16-18°C'
      },
      {
        id: 'mtsvane-qvevri',
        name: 'მწვანე ქვევრი',
        year: 2021,
        type: 'amber',
        category: 'ქვევრის ღვინო',
        price: 65,
        grape: 'მწვანე',
        region: 'კახეთი',
        description: 'ქვევრში 6 თვით კანზე დაყენებული ქარვისფერი ღვინო. უნიკალური ტექსტურა და კომპლექსური არომატი.',
        aroma: 'გამომშრალი გარგარი, თაფლი, ქარვა, თხილი',
        taste: 'მდიდარი, კრემისებრი, ოდნავ ტანინიანი',
        pairing: 'თეთრი ხორცი, საზესწაფო, ხაჭაპური',
        alcohol: '13%',
        temperature: '12-14°C'
      },
      {
        id: 'kindzmarauli',
        name: 'კინძმარაული',
        year: 2020,
        type: 'red',
        category: 'ნახევრად ტკბილი',
        price: 55,
        grape: 'საფერავი',
        region: 'კახეთი, კინძმარაული',
        description: 'კლასიკური კახური ნახევრადტკბილი ღვინო მიკროზონა კინძმარაულიდან.',
        aroma: 'მაყვალი, ალუბალი, ლურჯი ქლიავი',
        taste: 'ხავერდოვანი, ბალანსირებული სიტკბო, ხილიანი',
        pairing: 'დესერტი, ხილი, რბილი ყველი',
        alcohol: '12%',
        temperature: '14-16°C'
      },
      {
        id: 'rkatsiteli-classic',
        name: 'რქაწითელი კლასიკი',
        year: 2022,
        type: 'white',
        category: 'თეთრი მშრალი',
        price: 35,
        grape: 'რქაწითელი',
        region: 'კახეთი',
        description: 'ევროპული მეთოდით დაყენებული ხალისიანი თეთრი ღვინო.',
        aroma: 'ციტრუსი, მწვანე ვაშლი, ყვავილოვანი ნოტები',
        taste: 'ხალისიანი, სუფთა, მინერალური',
        pairing: 'თევზი, სალათები, მსუბუქი საჭმელები',
        alcohol: '12%',
        temperature: '8-10°C'
      },
      {
        id: 'saperavi-rose',
        name: 'საფერავი როზე',
        year: 2023,
        type: 'rose',
        category: 'ვარდისფერი მშრალი',
        price: 40,
        grape: 'საფერავი',
        region: 'კახეთი',
        description: 'ელეგანტური ვარდისფერი ღვინო მოკლე კანზე დაყოვნებით.',
        aroma: 'მარწყვი, ატამი, ვარდის ფურცელი',
        taste: 'გამაგრილებელი, ხილიანი, სუფთა დამთავრება',
        pairing: 'სალათები, ზღვის პროდუქტები, მსუბუქი წასახემსებელი',
        alcohol: '11.5%',
        temperature: '8-10°C'
      },
      {
        id: 'qvevri-rkatsiteli',
        name: 'რქაწითელი ქვევრი',
        year: 2021,
        type: 'amber',
        category: 'ქვევრის ღვინო',
        price: 70,
        grape: 'რქაწითელი',
        region: 'კახეთი',
        description: 'ტრადიციული ქვევრის ღვინო 6 თვიანი კანზე დაყოვნებით.',
        aroma: 'გამომშრალი ხილი, თხილი, სანელებლები',
        taste: 'სრულსხეულიანი, კომპლექსური, ტანინიანი',
        pairing: 'მწვადი, ხინკალი, ტრადიციული სამზარეულო',
        alcohol: '13.5%',
        temperature: '14-16°C'
      }
    ];
    const initialProducts = JSON.parse(JSON.stringify(products));
    const defaultConfigSnapshot = { ...defaultConfig };
    let firebasePublicReady = false;
    let firebaseStateRef = null;
    let firebaseStateUnsubscribe = null;
    let firebaseDb = null;
    let firebaseAuth = null;
    let firebaseAuthReadyPromise = null;
    let firebasePollIntervalId = null;
    let lastCloudVersion = 0;
    let localAdminVersion = 0;
    let checkoutFormVisible = false;

    function getCartItemKey(item) {
      return item?.__backendId || item?.id || item?.localId || item?.productId || '';
    }

    function loadCartFromLocal() {
      try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.map((item) => ({
          ...item,
          localId: item.localId || item.id || `${item.productId || 'item'}-${Date.now()}`
        }));
      } catch {
        return [];
      }
    }

    function saveCartToLocal() {
      try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
      } catch {
        // ignore
      }
    }

    function applyLiquidButtons(root = document) {
      const nodes = root.querySelectorAll('button, a.primary, a.ghost, .tab');
      nodes.forEach((el) => {
        if (el.dataset.noLiquid === '1') return;
        if (!el.classList.contains('matsi-liquid-btn')) {
          el.classList.add('matsi-liquid-btn');
        }
        if (el.dataset.liquidBound === '1') return;
        el.dataset.liquidBound = '1';
        const pressOn = () => el.classList.add('is-pressed');
        const pressOff = () => el.classList.remove('is-pressed');
        el.addEventListener('mousedown', pressOn);
        el.addEventListener('mouseup', pressOff);
        el.addEventListener('mouseleave', pressOff);
        el.addEventListener('touchstart', pressOn, { passive: true });
        el.addEventListener('touchend', pressOff);
        el.addEventListener('touchcancel', pressOff);
      });
    }
    
    // =====================================================
    // DATA SDK INTEGRATION
    // =====================================================
    
    const dataHandler = {
      onDataChanged(data) {
        cartItems = data;
        saveCartToLocal();
        updateCartUI();
        updateCartCount();
      }
    };
    
    async function initDataSdk() {
      if (window.dataSdk) {
        const result = await window.dataSdk.init(dataHandler);
        if (!result.isOk) {
          console.error('Failed to initialize Data SDK');
          cartItems = loadCartFromLocal();
          updateCartUI();
          updateCartCount();
        }
        return;
      }
      cartItems = loadCartFromLocal();
      updateCartUI();
      updateCartCount();
    }
    
    // =====================================================
    // ELEMENT SDK INTEGRATION
    // =====================================================
    
    function initElementSdk() {
      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange: async (newConfig) => {
            config = { ...defaultConfig, ...newConfig };
            applyConfig();
          },
          mapToCapabilities: (cfg) => ({
            recolorables: [
              {
                get: () => cfg.background_color || defaultConfig.background_color,
                set: (v) => { cfg.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
              },
              {
                get: () => cfg.surface_color || defaultConfig.surface_color,
                set: (v) => { cfg.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); }
              },
              {
                get: () => cfg.text_color || defaultConfig.text_color,
                set: (v) => { cfg.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
              },
              {
                get: () => cfg.primary_action_color || defaultConfig.primary_action_color,
                set: (v) => { cfg.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); }
              },
              {
                get: () => cfg.secondary_action_color || defaultConfig.secondary_action_color,
                set: (v) => { cfg.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); }
              }
            ],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
          }),
          mapToEditPanelValues: (cfg) => new Map([
            ['hero_title', cfg.hero_title || defaultConfig.hero_title],
            ['hero_subtitle', cfg.hero_subtitle || defaultConfig.hero_subtitle],
            ['about_title', cfg.about_title || defaultConfig.about_title]
          ])
        });
      }
    }
    
    function applyConfig() {
      const heroTitle = document.getElementById('hero-title');
      const heroSubtitle = document.getElementById('hero-subtitle');
      const aboutTitle = document.getElementById('about-title');
      
      if (heroTitle) {
        heroTitle.innerHTML = (config.hero_title || defaultConfig.hero_title).replace(/\s+/g, '<br/>');
      }
      if (heroSubtitle) {
        heroSubtitle.textContent = config.hero_subtitle || defaultConfig.hero_subtitle;
      }
      if (aboutTitle) {
        aboutTitle.textContent = config.about_title || defaultConfig.about_title;
      }

      document.documentElement.style.setProperty('--admin-primary', config.primary_action_color || defaultConfig.primary_action_color);
      document.documentElement.style.setProperty('--admin-text', config.text_color || defaultConfig.text_color);
      document.body.style.color = config.text_color || defaultConfig.text_color;
    }

    function applySiteMeta() {
      const contactEmailEl = document.getElementById('contact-email');
      const contactPhoneEl = document.getElementById('contact-phone');
      const contactAddressEl = document.getElementById('contact-address');
      const instagramEl = document.getElementById('social-instagram');
      const logo = siteMeta.logo_url || defaultSiteMeta.logo_url;
      const bottleImage = siteMeta.hero_bottle_url || defaultSiteMeta.hero_bottle_url;

      if (contactEmailEl) contactEmailEl.textContent = siteMeta.contact_email || defaultSiteMeta.contact_email;
      if (contactPhoneEl) contactPhoneEl.textContent = siteMeta.contact_phone || defaultSiteMeta.contact_phone;
      if (contactAddressEl) contactAddressEl.innerHTML = (siteMeta.contact_address || defaultSiteMeta.contact_address).replace(', ', '<br>');
      if (instagramEl && (siteMeta.instagram_link || '').trim()) instagramEl.href = siteMeta.instagram_link.trim();
      setImageSource('loader-logo-img', logo);
      setImageSource('header-logo-img', logo);
      setImageSource('footer-logo-img', logo);
      setImageSource('hero-bottle-img', bottleImage);
    }

    function setImageSource(id, src) {
      const element = document.getElementById(id);
      if (!element || !src) return;
      element.style.display = '';
      delete element.dataset.fallback;
      if (id === 'loader-logo-img' || id === 'header-logo-img' || id === 'footer-logo-img') {
        if (element.nextElementSibling) element.nextElementSibling.style.display = 'none';
      }
      if (id === 'hero-bottle-img') {
        const fallback = document.getElementById('hero-bottle-fallback');
        if (fallback) fallback.classList.add('hidden');
      }
      element.src = src;
    }

    function setTextById(id, value) {
      const element = document.getElementById(id);
      if (!element || value === undefined || value === null) return;
      element.textContent = String(value);
    }

    function setFeaturedCardImage(cardNumber, imageUrl) {
      const imageElement = document.getElementById(`home-card${cardNumber}-image`);
      const svgElement = document.getElementById(`home-card${cardNumber}-svg`);
      if (!imageElement || !svgElement) return;

      if (imageUrl && String(imageUrl).trim()) {
        imageElement.src = String(imageUrl).trim();
        imageElement.classList.remove('hidden');
        svgElement.classList.add('hidden');
      } else {
        imageElement.classList.add('hidden');
        imageElement.removeAttribute('src');
        svgElement.classList.remove('hidden');
      }
    }

    function setStatCardImage(cardNumber, imageUrl) {
      const imageElement = document.getElementById(`home-stat${cardNumber}-image`);
      if (!imageElement) return;

      if (imageUrl && String(imageUrl).trim()) {
        imageElement.src = String(imageUrl).trim();
        imageElement.classList.remove('hidden');
      } else {
        imageElement.classList.add('hidden');
        imageElement.removeAttribute('src');
      }
    }

    function applyHomeContent() {
      setTextById('home-hero-kicker', homeContent.hero_kicker);
      setTextById('home-hero-btn-primary', homeContent.hero_btn_primary);
      setTextById('home-hero-btn-secondary', homeContent.hero_btn_secondary);
      setTextById('home-featured-kicker', homeContent.featured_kicker);
      setTextById('home-featured-title', homeContent.featured_title);
      setTextById('home-featured-cta', homeContent.featured_cta);

      setTextById('home-card1-category', homeContent.card1_category);
      setTextById('home-card1-title', homeContent.card1_title);
      setTextById('home-card1-desc', homeContent.card1_desc);
      setTextById('home-card1-price', homeContent.card1_price);
      setTextById('home-card1-btn', homeContent.card1_btn);
      setFeaturedCardImage(1, homeContent.card1_image);

      setTextById('home-card2-category', homeContent.card2_category);
      setTextById('home-card2-title', homeContent.card2_title);
      setTextById('home-card2-desc', homeContent.card2_desc);
      setTextById('home-card2-price', homeContent.card2_price);
      setTextById('home-card2-btn', homeContent.card2_btn);
      setFeaturedCardImage(2, homeContent.card2_image);

      setTextById('home-card3-category', homeContent.card3_category);
      setTextById('home-card3-title', homeContent.card3_title);
      setTextById('home-card3-desc', homeContent.card3_desc);
      setTextById('home-card3-price', homeContent.card3_price);
      setTextById('home-card3-btn', homeContent.card3_btn);
      setFeaturedCardImage(3, homeContent.card3_image);

      setTextById('home-story-kicker', homeContent.story_kicker);
      setTextById('home-story-title', homeContent.story_title);
      setTextById('home-story-text', homeContent.story_text);
      setTextById('home-story-btn', homeContent.story_btn);

      setTextById('home-stat1-value', homeContent.stat1_value);
      setTextById('home-stat1-label', homeContent.stat1_label);
      setStatCardImage(1, homeContent.stat1_image);
      setTextById('home-stat2-value', homeContent.stat2_value);
      setTextById('home-stat2-label', homeContent.stat2_label);
      setStatCardImage(2, homeContent.stat2_image);
      setTextById('home-stat3-value', homeContent.stat3_value);
      setTextById('home-stat3-label', homeContent.stat3_label);
      setStatCardImage(3, homeContent.stat3_image);
      setTextById('home-stat4-value', homeContent.stat4_value);
      setTextById('home-stat4-label', homeContent.stat4_label);
      setStatCardImage(4, homeContent.stat4_image);
    }

    function applyAboutContent() {
      setTextById('about-kicker', aboutContent.about_kicker);
      setTextById('about-title', aboutContent.about_title_edit || config.about_title || defaultConfig.about_title);
      setTextById('about-subtitle', aboutContent.about_subtitle);
      setTextById('about-section1-title', aboutContent.about_section1_title);
      setTextById('about-section1-text1', aboutContent.about_section1_text1);
      setTextById('about-section1-text2', aboutContent.about_section1_text2);
      setTextById('about-photo1-label', aboutContent.about_photo1_label);
      setTextById('about-section2-title', aboutContent.about_section2_title);
      setTextById('about-section2-text1', aboutContent.about_section2_text1);
      setTextById('about-section2-text2', aboutContent.about_section2_text2);
      setTextById('about-photo2-label', aboutContent.about_photo2_label);
      setTextById('about-section3-title', aboutContent.about_section3_title);
      setTextById('about-section3-text1', aboutContent.about_section3_text1);
      setTextById('about-section3-text2', aboutContent.about_section3_text2);
      setTextById('about-photo3-label', aboutContent.about_photo3_label);
      setTextById('about-values-title', aboutContent.about_values_title);
      setTextById('about-value1-title', aboutContent.about_value1_title);
      setTextById('about-value1-text', aboutContent.about_value1_text);
      setTextById('about-value2-title', aboutContent.about_value2_title);
      setTextById('about-value2-text', aboutContent.about_value2_text);
      setTextById('about-value3-title', aboutContent.about_value3_title);
      setTextById('about-value3-text', aboutContent.about_value3_text);
    }
    
    // =====================================================
    // NAVIGATION
    // =====================================================
    
    function getPageFromLocation() {
      const allowedPages = ['home', 'shop', 'product', 'about', 'contact', 'designer', 'cart'];
      const hashPage = window.location.hash.replace('#', '').trim();
      if (allowedPages.includes(hashPage)) return hashPage;
      return null;
    }

    function navigateTo(page, data = null, updateHash = true) {
      if (siteMeta.sections && Object.prototype.hasOwnProperty.call(siteMeta.sections, page) && !siteMeta.sections[page]) {
        showToast('ეს სექცია დროებით გამორთულია ადმინიდან', 'info');
        page = 'home';
      }
      
      const targetSection = document.getElementById(`page-${page}`);
      if (targetSection) {
        document.querySelectorAll('.page-section').forEach(section => {
          if (section === targetSection) return;
          section.classList.add('hidden');
          section.classList.remove('page-transition');
          section.style.opacity = '';
          section.style.transform = '';
          section.style.filter = '';
        });

        targetSection.classList.remove('hidden');
        targetSection.classList.add('page-transition');
        targetSection.style.opacity = '0';
        targetSection.style.transform = 'translateY(14px)';
        targetSection.style.filter = 'blur(2px)';

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            targetSection.style.opacity = '1';
            targetSection.style.transform = 'translateY(0)';
            targetSection.style.filter = 'blur(0)';
          });
        });

        currentPage = page;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        if (page === 'shop') {
          renderProducts();
        } else if (page === 'product' && data) {
          renderProductDetail(data);
        } else if (page === 'cart') {
          renderCart();
        } else if (page === 'designer') {
          initDesigner();
        }

        if (updateHash) {
          const nextHash = `#${page}`;
          if (window.location.hash !== nextHash) {
            history.replaceState(null, '', nextHash);
          }
        }

        refreshMotionTargets(targetSection);
      }
    }
    
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
    }

    function initMotionEnhancements() {
      if (!prefersReducedMotion && 'IntersectionObserver' in window) {
        revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
      }

      initHeroParallax();
      refreshMotionTargets(document);
    }

    function refreshMotionTargets(scope = document) {
      if (!scope) return;

      const revealItems = scope.querySelectorAll ? scope.querySelectorAll('.reveal, .product-card, .bg-white.rounded-2xl, .bg-white.rounded-3xl') : [];
      revealItems.forEach((item) => {
        item.classList.add('reveal');
        if (prefersReducedMotion) {
          item.classList.add('is-visible');
          return;
        }

        if (revealObserver) {
          revealObserver.observe(item);
        } else {
          item.classList.add('is-visible');
        }
      });

      if (!prefersReducedMotion) {
        initCardTilt(scope);
      }
    }

    function initHeroParallax() {
      if (prefersReducedMotion) return;
      const hero = document.querySelector('#page-home .hero-bottle-wrap');
      const image = document.querySelector('#hero-bottle-img');
      if (!hero || !image) return;

      hero.addEventListener('pointermove', (event) => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        image.style.transform = `translate3d(${x * 8}px, ${y * 6}px, 0) rotateX(${y * -2.2}deg) rotateY(${x * 3.2}deg)`;
      });

      hero.addEventListener('pointerleave', () => {
        image.style.transform = '';
      });
    }

    function initCardTilt(scope = document) {
      const cards = scope.querySelectorAll ? scope.querySelectorAll('.product-card') : [];
      cards.forEach((card) => {
        if (card.dataset.tiltReady === '1') return;
        card.dataset.tiltReady = '1';

        card.addEventListener('pointermove', (event) => {
          const rect = card.getBoundingClientRect();
          const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
          card.style.transform = `translateY(-8px) rotateX(${y * -3}deg) rotateY(${x * 3}deg)`;
        });

        card.addEventListener('pointerleave', () => {
          card.style.transform = '';
        });
      });
    }
    
    // =====================================================
    // PRODUCTS
    // =====================================================
    
    function filterProducts(filter) {
      currentFilter = filter;
      
      document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === filter) {
          btn.classList.remove('bg-cream-200', 'text-wine-700');
          btn.classList.add('bg-wine-700', 'text-cream-50');
        } else {
          btn.classList.remove('bg-wine-700', 'text-cream-50');
          btn.classList.add('bg-cream-200', 'text-wine-700');
        }
      });
      
      renderProducts();
    }
    
    function renderProducts() {
      const grid = document.getElementById('products-grid');
      if (!grid) return;
      
      const filtered = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.type === currentFilter);
      
      grid.innerHTML = filtered.map(product => `
        <div class="product-card bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer" onclick="viewProduct('${product.id}')">
          <div class="aspect-[3/4] bg-gradient-to-br from-wine-100 to-cream-200 p-6 flex items-center justify-center relative overflow-hidden">
            <div class="glass-shimmer absolute inset-0"></div>
            ${getProductVisualMarkup(product, 'card')}
          </div>
          <div class="p-5">
            <p class="text-wine-500 text-xs font-medium mb-1">${product.category}</p>
            <h3 class="font-display text-lg font-semibold text-wine-900 mb-1">${product.name} ${product.year}</h3>
            <p class="text-wine-600/60 text-sm mb-3 line-clamp-2">${product.grape} • ${product.region}</p>
            <div class="flex items-center justify-between">
              <span class="font-display text-xl font-bold text-wine-800">₾${product.price}</span>
              <button onclick="event.stopPropagation(); addToCart('${product.id}', '${product.name} ${product.year}', ${product.price})" 
                      class="btn-wine px-3 py-1.5 bg-wine-700 text-cream-50 rounded-full text-xs font-medium hover:bg-wine-800">
                დამატება
              </button>
            </div>
          </div>
        </div>
      `).join('');
      applyLiquidButtons(grid);
      refreshMotionTargets(grid);
    }

    function getProductVisualMarkup(product, variant = 'card') {
      if (product.image_url) {
        const sizeClass = variant === 'detail' ? 'w-full h-full object-contain' : 'w-full h-full object-contain';
        return `<img src="${product.image_url}" alt="${escapeHtml(product.name || 'Wine')}" class="${sizeClass} drop-shadow-2xl">`;
      }

      const svgClass = variant === 'detail' ? 'w-32 h-80 drop-shadow-2xl' : 'w-16 h-40 drop-shadow-xl';
      return `
        <svg viewBox="0 0 80 200" class="${svgClass}">
          <defs>
            <linearGradient id="bottle-${product.id || 'fallback'}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style="stop-color:${getBottleColor(product.type, 0)}"/>
              <stop offset="50%" style="stop-color:${getBottleColor(product.type, 1)}"/>
              <stop offset="100%" style="stop-color:${getBottleColor(product.type, 0)}"/>
            </linearGradient>
            <linearGradient id="wine-${product.id || 'fallback'}" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:${getWineColor(product.type, 0)}"/>
              <stop offset="100%" style="stop-color:${getWineColor(product.type, 1)}"/>
            </linearGradient>
          </defs>
          <path d="M25 60 Q25 50 30 45 L30 25 Q30 20 35 20 L45 20 Q50 20 50 25 L50 45 Q55 50 55 60 L55 180 Q55 190 40 190 Q25 190 25 180 Z" fill="url(#bottle-${product.id || 'fallback'})"/>
          <path d="M27 70 L53 70 L53 178 Q53 188 40 188 Q27 188 27 178 Z" fill="url(#wine-${product.id || 'fallback'})"/>
          <rect x="28" y="100" width="24" height="50" fill="#f9f1e4" rx="2"/>
          <text x="40" y="125" text-anchor="middle" fill="${getBottleColor(product.type, 1)}" font-size="5" font-family="serif">MATSI</text>
          <rect x="33" y="8" width="14" height="14" fill="#d4bc9a" rx="2"/>
          <path d="M32 20 L32 28 Q32 32 40 32 Q48 32 48 28 L48 20" fill="#8b7355"/>
        </svg>
      `;
    }
    
    function getBottleColor(type, index) {
      const colors = {
        red: ['#3d1219', '#5a1f29'],
        white: ['#4a5d23', '#5d7a2e'],
        amber: ['#6b4423', '#8b5a2b'],
        rose: ['#8b4557', '#a55568'],
        chocolate: ['#4a2c1f', '#6b3f2a']
      };
      return colors[type]?.[index] || colors.red[index];
    }
    
    function getWineColor(type, index) {
      const colors = {
        red: ['#722f37', '#5a1f29'],
        white: ['#e8d5a3', '#c9b896'],
        amber: ['#c9a227', '#a68b1f'],
        rose: ['#e8a0b0', '#d48a9a'],
        chocolate: ['#5c3524', '#3f2418']
      };
      return colors[type]?.[index] || colors.red[index];
    }
    
    function viewProduct(productId) {
      const product = products.find(p => p.id === productId);
      if (product) {
        navigateTo('product', product);
      }
    }
    
    function renderProductDetail(product) {
      const container = document.getElementById('product-detail');
      if (!container) return;
      
      container.innerHTML = `
        <div class="bg-gradient-to-br from-wine-100 to-cream-200 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden">
          <div class="glass-shimmer absolute inset-0"></div>
          ${getProductVisualMarkup(product, 'detail')}
        </div>
        
        <div class="space-y-6">
          <div>
            <p class="text-wine-500 font-medium tracking-wide text-sm mb-2">${product.category}</p>
            <h1 class="font-display text-4xl md:text-5xl font-bold text-wine-900 mb-2">${product.name}</h1>
            <p class="text-wine-600 text-xl">${product.year} • ${product.grape}</p>
          </div>
          
          <p class="text-wine-600/80 text-lg leading-relaxed">${product.description}</p>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-cream-200 rounded-xl p-4">
              <p class="text-wine-500 text-xs font-medium mb-1">არომატი</p>
              <p class="text-wine-800 text-sm">${product.aroma}</p>
            </div>
            <div class="bg-cream-200 rounded-xl p-4">
              <p class="text-wine-500 text-xs font-medium mb-1">გემო</p>
              <p class="text-wine-800 text-sm">${product.taste}</p>
            </div>
            <div class="bg-cream-200 rounded-xl p-4">
              <p class="text-wine-500 text-xs font-medium mb-1">შეხამება</p>
              <p class="text-wine-800 text-sm">${product.pairing}</p>
            </div>
            <div class="bg-cream-200 rounded-xl p-4">
              <p class="text-wine-500 text-xs font-medium mb-1">დეტალები</p>
              <p class="text-wine-800 text-sm">${product.alcohol} • ${product.temperature}</p>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl p-6 shadow-lg">
            <div class="flex items-center justify-between mb-4">
              <span class="font-display text-4xl font-bold text-wine-800">₾${product.price}</span>
              <p class="text-wine-500 text-sm">${product.region}</p>
            </div>
            <button onclick="addToCart('${product.id}', '${product.name} ${product.year}', ${product.price})" 
                    class="btn-wine w-full py-4 bg-wine-700 text-cream-50 font-semibold rounded-xl hover:bg-wine-800 transition-all flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
              კალათაში დამატება
            </button>
          </div>
        </div>
      `;
      applyLiquidButtons(container);
      refreshMotionTargets(container);
    }
    
    // =====================================================
    // CART FUNCTIONALITY
    // =====================================================
    
    async function addToCart(productId, productName, price, meta = {}) {
      if (isLoading) return;
      
      if (cartItems.length >= 999) {
        showToast('კალათა სავსეა (მაქსიმუმ 999 პროდუქტი)', 'error');
        return;
      }
      
      isLoading = true;
      
      const existingItem = cartItems.find(item => item.productId === productId);
      
      if (existingItem) {
        if (window.dataSdk) {
          try {
            const result = await window.dataSdk.update({
              ...existingItem,
              quantity: existingItem.quantity + 1
            });
            if (!result.isOk) throw new Error('sdk update failed');
            showToast(`${productName} დამატებულია კალათაში`, 'success');
          } catch {
            existingItem.quantity += 1;
            saveCartToLocal();
            updateCartUI();
            updateCartCount();
            showToast(`${productName} დამატებულია კალათაში`, 'success');
          }
        } else {
          existingItem.quantity += 1;
          saveCartToLocal();
          updateCartUI();
          updateCartCount();
          showToast(`${productName} დამატებულია კალათაში`, 'success');
        }
      } else {
        const newItem = {
          id: Date.now().toString(),
          localId: `local-${Date.now()}`,
          productId,
          productName,
          quantity: 1,
          price,
          image_url: meta.image_url || '',
          item_type: meta.item_type || 'product',
          createdAt: new Date().toISOString()
        };
        if (window.dataSdk) {
          try {
            const result = await window.dataSdk.create(newItem);
            if (!result.isOk) throw new Error('sdk create failed');
            showToast(`${productName} დამატებულია კალათაში`, 'success');
          } catch {
            cartItems.push(newItem);
            saveCartToLocal();
            updateCartUI();
            updateCartCount();
            showToast(`${productName} დამატებულია კალათაში`, 'success');
          }
        } else {
          cartItems.push(newItem);
          saveCartToLocal();
          updateCartUI();
          updateCartCount();
          showToast(`${productName} დამატებულია კალათაში`, 'success');
        }
      }
      
      isLoading = false;
    }
    
    async function updateQuantity(itemKey, delta) {
      if (isLoading) return;
      
      const item = cartItems.find(i => getCartItemKey(i) === itemKey);
      if (!item) return;
      
      isLoading = true;
      
      const newQuantity = item.quantity + delta;
      
      if (newQuantity <= 0) {
        if (window.dataSdk) {
          try {
            const result = await window.dataSdk.delete(item);
            if (!result.isOk) throw new Error('sdk delete failed');
          } catch {
            cartItems = cartItems.filter((i) => getCartItemKey(i) !== itemKey);
            saveCartToLocal();
            updateCartUI();
            updateCartCount();
          }
        } else {
          cartItems = cartItems.filter((i) => getCartItemKey(i) !== itemKey);
          saveCartToLocal();
          updateCartUI();
          updateCartCount();
        }
      } else {
        if (window.dataSdk) {
          try {
            const result = await window.dataSdk.update({
              ...item,
              quantity: newQuantity
            });
            if (!result.isOk) throw new Error('sdk update failed');
          } catch {
            item.quantity = newQuantity;
            saveCartToLocal();
            updateCartUI();
            updateCartCount();
          }
        } else {
          item.quantity = newQuantity;
          saveCartToLocal();
          updateCartUI();
          updateCartCount();
        }
      }
      
      isLoading = false;
    }
    
    async function removeFromCart(itemKey) {
      if (isLoading) return;
      
      const item = cartItems.find(i => getCartItemKey(i) === itemKey);
      if (!item) return;
      
      isLoading = true;
      
      if (window.dataSdk) {
        try {
          const result = await window.dataSdk.delete(item);
          if (!result.isOk) throw new Error('sdk delete failed');
          showToast('პროდუქტი წაიშალა კალათიდან', 'success');
        } catch {
          cartItems = cartItems.filter((i) => getCartItemKey(i) !== itemKey);
          saveCartToLocal();
          updateCartUI();
          updateCartCount();
          showToast('პროდუქტი წაიშალა კალათიდან', 'success');
        }
      } else {
        cartItems = cartItems.filter((i) => getCartItemKey(i) !== itemKey);
        saveCartToLocal();
        updateCartUI();
        updateCartCount();
        showToast('პროდუქტი წაიშალა კალათიდან', 'success');
      }
      
      isLoading = false;
    }
    
    function updateCartUI() {
      if (currentPage === 'cart') {
        renderCart();
      }
    }
    
    function updateCartCount() {
      const countEl = document.getElementById('cart-count');
      const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
      
      if (totalItems > 0) {
        countEl.textContent = totalItems > 99 ? '99+' : totalItems;
        countEl.classList.remove('hidden');
      } else {
        countEl.classList.add('hidden');
      }
    }
    
    function renderCart() {
      const container = document.getElementById('cart-content');
      if (!container) return;
      
      if (cartItems.length === 0) {
        checkoutFormVisible = false;
        container.innerHTML = `
          <div class="text-center py-16">
            <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-wine-100 flex items-center justify-center">
              <svg class="w-12 h-12 text-wine-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
            </div>
            <h2 class="font-display text-2xl font-semibold text-wine-900 mb-2">კალათა ცარიელია</h2>
            <p class="text-wine-600/70 mb-8">აღმოაჩინეთ ჩვენი კოლექცია და შეარჩიეთ საყვარელი ღვინო</p>
            <button onclick="navigateTo('shop')" class="btn-wine px-8 py-4 bg-wine-700 text-cream-50 font-semibold rounded-full hover:bg-wine-800">
              პროდუქტებში გადასვლა
            </button>
          </div>
        `;
        applyLiquidButtons(container);
        refreshMotionTargets(container);
        return;
      }
      
      const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const orderRows = cartItems.map((item) => `
        <div class="py-2 border-b border-wine-200/70 text-sm">
          <div class="font-medium text-wine-900">${item.productName}</div>
          <div class="text-wine-600">₾${item.price} x ${item.quantity} = ₾${item.price * item.quantity}</div>
        </div>
      `).join('');
      const bankRows = BANK_ACCOUNTS.map((item, idx) => `
        <div class="bg-cream-100 rounded-xl p-3 flex items-start justify-between gap-3">
          <div class="flex items-start gap-2">
            <span class="w-7 h-7 rounded-full bg-white border border-wine-200 flex items-center justify-center flex-shrink-0">${getBankIconMarkup(item.bank)}</span>
            <div>
            <p class="text-xs text-wine-500">${item.bank}</p>
            <p id="checkout-iban-${idx}" class="font-mono text-sm text-wine-900 break-all">${item.iban}</p>
            </div>
          </div>
          <button type="button" onclick="copyCheckoutIban('${item.iban}')" class="px-3 py-1.5 rounded-lg bg-wine-700 text-cream-50 text-xs hover:bg-wine-800">კოპირება</button>
        </div>
      `).join('');
      
      container.innerHTML = `
        <div class="space-y-4 mb-8">
          ${cartItems.map(item => `
            <div class="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex items-center gap-4">
              <div class="w-16 h-20 bg-wine-100 rounded-xl flex items-center justify-center flex-shrink-0">
                ${item.image_url ? `<img src="${item.image_url}" alt="${escapeHtml(item.productName)}" class="w-full h-full object-cover rounded-xl">` : `
                <svg viewBox="0 0 80 200" class="w-8 h-16">
                  <path d="M25 60 Q25 50 30 45 L30 25 Q30 20 35 20 L45 20 Q50 20 50 25 L50 45 Q55 50 55 60 L55 180 Q55 190 40 190 Q25 190 25 180 Z" fill="#5a1f29"/>
                </svg>`}
              </div>
              <div class="flex-grow min-w-0">
                <h3 class="font-display text-lg font-semibold text-wine-900 truncate">${item.productName}</h3>
                <p class="text-wine-600/70 text-sm">₾${item.price} თითოეული</p>
              </div>
              <div class="flex items-center gap-3">
                <button onclick="updateQuantity('${getCartItemKey(item)}', -1)" 
                        class="w-8 h-8 rounded-full bg-wine-100 text-wine-700 flex items-center justify-center hover:bg-wine-200 transition-colors">
                  −
                </button>
                <span class="font-semibold text-wine-900 w-8 text-center">${item.quantity}</span>
                <button onclick="updateQuantity('${getCartItemKey(item)}', 1)" 
                        class="w-8 h-8 rounded-full bg-wine-100 text-wine-700 flex items-center justify-center hover:bg-wine-200 transition-colors">
                  +
                </button>
              </div>
              <div class="text-right">
                <p class="font-display text-xl font-bold text-wine-800">₾${item.price * item.quantity}</p>
                <button onclick="removeFromCart('${getCartItemKey(item)}')" class="text-wine-400 hover:text-wine-600 text-sm transition-colors">
                  წაშლა
                </button>
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="bg-wine-900 rounded-2xl p-6 md:p-8 text-cream-50">
          <div class="flex items-center justify-between mb-6">
            <span class="text-cream-200">ჯამი:</span>
            <span class="font-display text-3xl font-bold">₾${total}</span>
          </div>
          <button type="button" onclick="handleCheckout()" class="btn-wine w-full py-4 bg-cream-50 text-wine-800 font-semibold rounded-xl hover:bg-cream-100 transition-all">
            შეკვეთის გაფორმება
          </button>
          <p class="text-cream-200/60 text-xs text-center mt-4">მიტანა თბილისში უფასოა ₾100+ შეკვეთაზე</p>
        </div>

        ${checkoutFormVisible ? `
        <div class="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
          <h2 class="font-display text-3xl text-wine-900 mb-3">შეკვეთის ფორმა</h2>
          <p class="text-sm text-wine-600 mb-4">შეავსე მონაცემები, ატვირთე ქვითარი და გაგზავნე შეკვეთა.</p>
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-semibold text-wine-900 mb-2">შეკვეთილი პროდუქტები</h3>
              <div class="bg-cream-50 rounded-xl p-3 mb-3">${orderRows}</div>
              <p class="font-semibold text-wine-900">სულ გადასახდელი: ₾<span id="checkout-total">${total}</span></p>
            </div>
          </div>
          <form id="checkout-form" class="grid md:grid-cols-2 gap-4 mt-6" onsubmit="submitCheckoutOrder(event)">
            <div>
              <label class="block text-sm text-wine-700 mb-1">სახელი</label>
              <input required name="first_name" class="w-full px-3 py-2 rounded-lg border border-wine-200">
            </div>
            <div>
              <label class="block text-sm text-wine-700 mb-1">გვარი</label>
              <input required name="last_name" class="w-full px-3 py-2 rounded-lg border border-wine-200">
            </div>
            <div>
              <label class="block text-sm text-wine-700 mb-1">ტელეფონი</label>
              <input required name="phone" class="w-full px-3 py-2 rounded-lg border border-wine-200">
            </div>
            <div>
              <label class="block text-sm text-wine-700 mb-1">ელფოსტა</label>
              <input required type="email" name="email" class="w-full px-3 py-2 rounded-lg border border-wine-200">
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm text-wine-700 mb-1">მისამართი (სად იგზავნება)</label>
              <textarea required name="address" rows="2" class="w-full px-3 py-2 rounded-lg border border-wine-200"></textarea>
            </div>
            <div class="md:col-span-2">
              <h3 class="font-semibold text-wine-900 mb-2">ბანკის ანგარიშები</h3>
              <div class="space-y-2 mb-2">${bankRows}</div>
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm text-wine-700 mb-1">გადახდის ქვითარი</label>
              <input required type="file" accept="image/*,application/pdf" name="receipt" class="w-full px-3 py-2 rounded-lg border border-wine-200 bg-cream-50">
            </div>
            <div class="md:col-span-2 flex gap-3">
              <button type="submit" class="btn-wine px-6 py-3 bg-wine-700 text-cream-50 rounded-xl hover:bg-wine-800">შეკვეთის გაგზავნა</button>
              <button type="button" onclick="toggleCheckoutForm(false)" class="px-6 py-3 rounded-xl border border-wine-200 text-wine-700 hover:bg-cream-100">დახურვა</button>
            </div>
            <p id="checkout-status" class="md:col-span-2 text-sm text-wine-600"></p>
          </form>
        </div>
        ` : ''}
      `;
      applyLiquidButtons(container);
      refreshMotionTargets(container);
    }
    
    function handleCheckout() {
      if (!cartItems.length) {
        showToast('კალათა ცარიელია', 'info');
        return;
      }
      toggleCheckoutForm(true);
    }

    function toggleCheckoutForm(show) {
      checkoutFormVisible = !!show;
      renderCart();
    }

    function copyCheckoutIban(value) {
      navigator.clipboard.writeText(value).then(() => {
        showToast('IBAN დაკოპირდა', 'success');
      }).catch(() => {
        showToast('კოპირება ვერ მოხერხდა', 'error');
      });
    }

    function getBankIconMarkup(bank) {
      const iconPath = bank === 'ბოგ' ? 'bog.png' : 'tbc.png';
      const fallbackText = bank === 'ბოგ' ? 'ბ' : 'თ';
      return `<img src="${iconPath}" alt="${bank}" class="w-4 h-4 object-contain" onerror="this.outerHTML='<span class=&quot;text-[10px] font-bold text-wine-700&quot;>${fallbackText}</span>'">`;
    }

    async function clearCartAfterOrder() {
      if (window.dataSdk) {
        for (const item of [...cartItems]) {
          try {
            await window.dataSdk.delete(item);
          } catch {
            // ignore
          }
        }
      }
      cartItems = [];
      saveCartToLocal();
      updateCartCount();
      checkoutFormVisible = false;
      renderCart();
    }

    async function submitCheckoutOrder(event) {
      event.preventDefault();
      const form = event.target;
      const statusEl = document.getElementById('checkout-status');
      const submitBtn = form.querySelector('button[type="submit"]');
      const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

      const fd = new FormData(form);
      const receiptFile = fd.get('receipt');
      if (!(receiptFile instanceof File) || !receiptFile.size) {
        showToast('ატვირთე გადახდის ქვითარი', 'error');
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (statusEl) statusEl.textContent = 'ქვითარი იტვირთება...';

      try {
        const receiptUrl = await uploadFileToCloudinary(receiptFile, 'matsi-order-receipts');
        const orderId = `ORDER-${Date.now()}`;
        const nowText = new Date().toLocaleString('ka-GE');
        const itemsText = cartItems.map((item, index) =>
          `${index + 1}. ${item.productName} | qty:${item.quantity} | ₾${item.price * item.quantity} | ფოტო: ${item.image_url || '-'}`
        ).join('\n');

        if (statusEl) statusEl.textContent = 'მეილი იგზავნება...';
        await sendFormSubmitEmail({
          _subject: `Matsi Checkout | ${orderId} | ₾${total}`,
          first_name: (fd.get('first_name') || '').toString(),
          last_name: (fd.get('last_name') || '').toString(),
          phone: (fd.get('phone') || '').toString(),
          email: (fd.get('email') || '').toString(),
          address: (fd.get('address') || '').toString(),
          total: `₾${total}`,
          receipt_url: receiptUrl,
          message: `Order ID: ${orderId}
თარიღი: ${nowText}
სახელი: ${(fd.get('first_name') || '').toString()} ${(fd.get('last_name') || '').toString()}
ტელეფონი: ${(fd.get('phone') || '').toString()}
ელფოსტა: ${(fd.get('email') || '').toString()}
მისამართი: ${(fd.get('address') || '').toString()}
ჯამი: ₾${total}
ქვითარი: ${receiptUrl}

პროდუქტები:
${itemsText}`
        });

        showToast('შეკვეთა წარმატებით გაიგზავნა', 'success');
        if (statusEl) statusEl.textContent = 'წარმატებით გაიგზავნა.';
        await clearCartAfterOrder();
      } catch (error) {
        console.error(error);
        showToast('შეკვეთის გაგზავნა ვერ მოხერხდა', 'error');
        if (statusEl) statusEl.textContent = `შეცდომა: ${error.message}`;
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    }
    
    // =====================================================
    // TOAST NOTIFICATIONS
    // =====================================================
    
    function showToast(message, type = 'success') {
      const container = document.getElementById('toast-container');
      const id = Date.now();
      
      const colors = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        info: 'bg-wine-700'
      };
      
      const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
      };
      
      const toast = document.createElement('div');
      toast.id = `toast-${id}`;
      toast.className = `toast-enter flex items-center gap-3 px-4 py-3 ${colors[type]} text-white rounded-xl shadow-lg max-w-xs`;
      toast.innerHTML = `
        <span class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">${icons[type]}</span>
        <span class="text-sm font-medium">${message}</span>
      `;
      
      container.appendChild(toast);
      
      setTimeout(() => {
        toast.classList.remove('toast-enter');
        toast.classList.add('toast-exit');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }
    
    // =====================================================
    // CONTACT FORM
    // =====================================================
    
    async function handleContactSubmit(event) {
      event.preventDefault();

      const form = event.target;
      const name = (form.querySelector('#name')?.value || '').trim();
      const email = (form.querySelector('#email')?.value || '').trim();
      const replyTo = form.querySelector('input[name="_replyto"]');
      const subjectInput = form.querySelector('input[name="_subject"]');
      const submitButton = form.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.textContent : '';
      const contactId = `CNT-${Date.now()}`;
      const nowText = new Date().toLocaleString('ka-GE');

      if (replyTo) replyTo.value = email;
      if (subjectInput) {
        subjectInput.value = `Matsi Wine Contact | ${contactId} | ${nowText}`;
      }

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'იგზავნება...';
      }

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: {
            Accept: 'application/json'
          }
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === 'false' || result.success === false) {
          throw new Error(result.message || 'FormSubmit გაგზავნა ვერ მოხერხდა');
        }

        showToast(`გმადლობთ, ${name || 'მეგობარო'}! შეტყობინება მიღებულია`, 'success');
        form.reset();
      } catch (error) {
        console.error(error);
        showToast('გაგზავნა ვერ მოხერხდა, სცადეთ თავიდან', 'error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalButtonText;
        }
      }
    }

    // =====================================================
    // LABEL DESIGNER
    // =====================================================

    const designerState = {
      initialized: false,
      mode: 'select',
      drawArmed: false,
      color: '#722f37',
      size: 6,
      drawing: false,
      draggingPhoto: false,
      photoScale: 100,
      photoX: 0,
      photoY: 0,
      textLayers: [],
      selectedTextId: null,
      draggingTextId: null,
      dragOffset: { x: 0, y: 0 },
      textColor: '#3d1219',
      textSize: 28,
      drawHistory: [],
      drawHistoryIndex: -1
    };

    const designerRefs = {};
    let designerCtx = null;
    let designerCanvasRatio = 1;

    function initDesigner() {
      if (designerState.initialized) return;

      designerRefs.stage = document.getElementById('designer-stage');
      designerRefs.drawCanvas = document.getElementById('designer-draw-canvas');
      designerRefs.textLayer = document.getElementById('designer-text-layer');
      designerRefs.photo = document.getElementById('designer-photo');
      designerRefs.photoWrap = document.getElementById('designer-photo-wrap');
      designerRefs.upload = document.getElementById('designer-upload');
      designerRefs.mode = document.getElementById('designer-mode');
      designerRefs.color = document.getElementById('designer-color');
      designerRefs.size = document.getElementById('designer-size');
      designerRefs.clearDrawing = document.getElementById('designer-clear-drawing');
      designerRefs.undo = document.getElementById('designer-undo');
      designerRefs.redo = document.getElementById('designer-redo');
      designerRefs.reset = document.getElementById('designer-reset');
      designerRefs.photoScale = document.getElementById('designer-photo-scale');
      designerRefs.photoX = document.getElementById('designer-photo-x');
      designerRefs.photoY = document.getElementById('designer-photo-y');
      designerRefs.addText = document.getElementById('designer-add-text');
      designerRefs.editText = document.getElementById('designer-edit-text');
      designerRefs.deleteText = document.getElementById('designer-delete-text');
      designerRefs.lockText = document.getElementById('designer-lock-text');
      designerRefs.unlockText = document.getElementById('designer-unlock-text');
      designerRefs.frontText = document.getElementById('designer-front-text');
      designerRefs.backText = document.getElementById('designer-back-text');
      designerRefs.textColor = document.getElementById('designer-text-color');
      designerRefs.textSize = document.getElementById('designer-text-size');
      designerRefs.exportBtn = document.getElementById('designer-export');
      designerRefs.addToCartBtn = document.getElementById('designer-add-to-cart');
      designerRefs.toggleDraw = document.getElementById('designer-toggle-draw');
      designerRefs.drawStatus = document.getElementById('designer-draw-status');

      if (!designerRefs.stage || !designerRefs.drawCanvas) return;

      resizeDesignerCanvas();
      bindDesignerEvents();
      window.addEventListener('resize', resizeDesignerCanvas);
      setDesignerMode(designerState.mode);
      designerState.initialized = true;
    }

    function bindDesignerEvents() {
      designerRefs.mode.addEventListener('change', (event) => {
        setDesignerMode(event.target.value);
      });
      designerRefs.toggleDraw.addEventListener('click', toggleDesignerDrawArmed);

      designerRefs.color.addEventListener('input', (event) => {
        designerState.color = event.target.value;
      });

      designerRefs.size.addEventListener('input', (event) => {
        designerState.size = parseInt(event.target.value, 10);
      });

      designerRefs.textColor.addEventListener('input', (event) => {
        designerState.textColor = event.target.value;
        const layer = getSelectedTextLayer();
        if (layer) {
          layer.color = designerState.textColor;
          renderDesignerTextLayers();
        }
      });

      designerRefs.textSize.addEventListener('input', (event) => {
        designerState.textSize = parseInt(event.target.value, 10);
        const layer = getSelectedTextLayer();
        if (layer) {
          layer.size = designerState.textSize;
          renderDesignerTextLayers();
        }
      });

      designerRefs.upload.addEventListener('change', handleDesignerUpload);
      designerRefs.photoScale.addEventListener('input', handleDesignerPhotoTransform);
      designerRefs.photoX.addEventListener('input', handleDesignerPhotoTransform);
      designerRefs.photoY.addEventListener('input', handleDesignerPhotoTransform);

      designerRefs.clearDrawing.addEventListener('click', () => {
        clearDesignerDrawing();
        pushDesignerHistory();
        showToast('ნახატი გასუფთავდა', 'info');
      });
      designerRefs.undo.addEventListener('click', undoDesignerDrawing);
      designerRefs.redo.addEventListener('click', redoDesignerDrawing);

      designerRefs.reset.addEventListener('click', resetDesigner);
      designerRefs.addText.addEventListener('click', addDesignerText);
      designerRefs.editText.addEventListener('click', editSelectedDesignerText);
      designerRefs.deleteText.addEventListener('click', deleteSelectedDesignerText);
      designerRefs.lockText.addEventListener('click', () => toggleSelectedTextLock(true));
      designerRefs.unlockText.addEventListener('click', () => toggleSelectedTextLock(false));
      designerRefs.frontText.addEventListener('click', bringSelectedTextToFront);
      designerRefs.backText.addEventListener('click', sendSelectedTextToBack);
      designerRefs.exportBtn.addEventListener('click', exportDesignerPng);
      designerRefs.addToCartBtn.addEventListener('click', addDesignerToCart);

      designerRefs.drawCanvas.addEventListener('pointerdown', startDesignerDrawing);
      designerRefs.drawCanvas.addEventListener('pointermove', moveDesignerDrawing);
      designerRefs.drawCanvas.addEventListener('pointerup', endDesignerDrawing);
      designerRefs.drawCanvas.addEventListener('pointerleave', endDesignerDrawing);
      designerRefs.photoWrap.addEventListener('pointerdown', startDesignerPhotoDrag);

      designerRefs.textLayer.addEventListener('pointerdown', startDesignerTextDrag);
      window.addEventListener('pointermove', moveDesignerTextDrag);
      window.addEventListener('pointerup', endDesignerTextDrag);
      window.addEventListener('pointermove', moveDesignerPhotoDrag);
      window.addEventListener('pointerup', endDesignerPhotoDrag);
      designerRefs.stage.addEventListener('pointerdown', handleDesignerStagePointerDown);
      window.addEventListener('keydown', handleDesignerHotkeys);
    }

    function syncDesignerDrawUi() {
      if (!designerRefs.toggleDraw || !designerRefs.drawStatus) return;
      const canDraw = designerState.mode === 'draw' || designerState.mode === 'erase';
      if (!canDraw) {
        designerRefs.toggleDraw.disabled = true;
        designerRefs.toggleDraw.style.opacity = '0.6';
        designerRefs.toggleDraw.style.cursor = 'not-allowed';
        designerRefs.toggleDraw.textContent = 'ხატვა მიუწვდომელია';
        designerRefs.drawStatus.textContent = 'აირჩიე ხატვა ან საშლელი';
        designerRefs.drawStatus.className = 'px-3 py-1 rounded-full bg-cream-200 text-wine-800 text-xs';
        return;
      }

      designerRefs.toggleDraw.disabled = false;
      designerRefs.toggleDraw.style.opacity = '';
      designerRefs.toggleDraw.style.cursor = '';
      designerRefs.toggleDraw.textContent = designerState.drawArmed ? 'ხატვის გამორთვა' : 'ხატვის ჩართვა';
      designerRefs.drawStatus.textContent = designerState.drawArmed ? 'ხატვა ჩართულია' : 'ხატვა გამორთულია';
      designerRefs.drawStatus.className = designerState.drawArmed
        ? 'px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs'
        : 'px-3 py-1 rounded-full bg-cream-200 text-wine-800 text-xs';
    }

    function toggleDesignerDrawArmed() {
      const canDraw = designerState.mode === 'draw' || designerState.mode === 'erase';
      if (!canDraw) {
        showToast('ჯერ აირჩიე რეჟიმი: ხატვა ან საშლელი', 'info');
        return;
      }
      designerState.drawArmed = !designerState.drawArmed;
      syncDesignerDrawUi();
      showToast(designerState.drawArmed ? 'ხატვა ჩართულია' : 'ხატვა გამორთულია', 'info');
    }

    function resizeDesignerCanvas() {
      if (!designerRefs.stage || !designerRefs.drawCanvas) return;

      const rect = designerRefs.stage.getBoundingClientRect();
      const snapshot = designerRefs.drawCanvas.toDataURL ? designerRefs.drawCanvas.toDataURL() : null;
      designerCanvasRatio = Math.max(1, window.devicePixelRatio || 1);
      designerRefs.drawCanvas.width = Math.max(1, Math.floor(rect.width * designerCanvasRatio));
      designerRefs.drawCanvas.height = Math.max(1, Math.floor(rect.height * designerCanvasRatio));

      designerCtx = designerRefs.drawCanvas.getContext('2d');
      designerCtx.setTransform(designerCanvasRatio, 0, 0, designerCanvasRatio, 0, 0);
      designerCtx.lineJoin = 'round';
      designerCtx.lineCap = 'round';

      if (snapshot) {
        const img = new Image();
        img.onload = () => {
          designerCtx.clearRect(0, 0, rect.width, rect.height);
          designerCtx.drawImage(img, 0, 0, rect.width, rect.height);
        };
        img.src = snapshot;
      } else {
        pushDesignerHistory();
      }
    }

    function setDesignerMode(mode) {
      designerState.mode = mode;
      if (designerRefs.mode) designerRefs.mode.value = mode;

      const isSelect = mode === 'select';
      if (designerRefs.drawCanvas) designerRefs.drawCanvas.style.pointerEvents = isSelect ? 'none' : 'auto';
      if (designerRefs.textLayer) designerRefs.textLayer.style.pointerEvents = isSelect ? 'auto' : 'none';
      if (designerRefs.stage) designerRefs.stage.style.cursor = isSelect ? 'grab' : 'crosshair';
      if (isSelect) designerState.drawArmed = false;
      syncDesignerDrawUi();
    }

    function getDesignerPointer(event) {
      const rect = designerRefs.drawCanvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    }

    function startDesignerDrawing(event) {
      if (!designerCtx) return;
      if (designerState.mode === 'select') return;
      if (!designerState.drawArmed) {
        showToast('ხატვის დასაწყებად დააჭირე "ხატვის ჩართვა"', 'info');
        return;
      }
      if (event.button !== 0) return;
      event.preventDefault();
      designerState.drawing = true;
      const point = getDesignerPointer(event);
      designerCtx.beginPath();
      designerCtx.moveTo(point.x, point.y);
      designerRefs.drawCanvas.setPointerCapture(event.pointerId);
    }

    function moveDesignerDrawing(event) {
      if (!designerState.drawing) return;
      if (!designerCtx) return;
      const point = getDesignerPointer(event);
      designerCtx.lineWidth = designerState.size;
      if (designerState.mode === 'erase') {
        designerCtx.globalCompositeOperation = 'destination-out';
        designerCtx.strokeStyle = 'rgba(0,0,0,1)';
      } else {
        designerCtx.globalCompositeOperation = 'source-over';
        designerCtx.strokeStyle = designerState.color;
      }
      designerCtx.lineTo(point.x, point.y);
      designerCtx.stroke();
    }

    function endDesignerDrawing() {
      if (!designerState.drawing) return;
      designerState.drawing = false;
      designerCtx.closePath();
      designerCtx.globalCompositeOperation = 'source-over';
      pushDesignerHistory();
    }

    function clearDesignerDrawing() {
      if (!designerCtx || !designerRefs.stage) return;
      const rect = designerRefs.stage.getBoundingClientRect();
      designerCtx.clearRect(0, 0, rect.width, rect.height);
    }

    function pushDesignerHistory() {
      if (!designerRefs.drawCanvas || !designerCtx) return;
      const snapshot = designerRefs.drawCanvas.toDataURL('image/png');
      if (designerState.drawHistoryIndex >= 0 && designerState.drawHistory[designerState.drawHistoryIndex] === snapshot) {
        return;
      }
      designerState.drawHistory = designerState.drawHistory.slice(0, designerState.drawHistoryIndex + 1);
      designerState.drawHistory.push(snapshot);
      if (designerState.drawHistory.length > 40) {
        designerState.drawHistory.shift();
      }
      designerState.drawHistoryIndex = designerState.drawHistory.length - 1;
      syncDesignerHistoryButtons();
    }

    function applyDesignerCanvasSnapshot(snapshot) {
      if (!designerCtx || !designerRefs.stage) return;
      const rect = designerRefs.stage.getBoundingClientRect();
      designerCtx.clearRect(0, 0, rect.width, rect.height);
      if (!snapshot) return;
      const img = new Image();
      img.onload = () => {
        designerCtx.clearRect(0, 0, rect.width, rect.height);
        designerCtx.drawImage(img, 0, 0, rect.width, rect.height);
      };
      img.src = snapshot;
    }

    function syncDesignerHistoryButtons() {
      if (designerRefs.undo) designerRefs.undo.disabled = designerState.drawHistoryIndex <= 0;
      if (designerRefs.redo) designerRefs.redo.disabled = designerState.drawHistoryIndex >= designerState.drawHistory.length - 1;
    }

    function undoDesignerDrawing() {
      if (designerState.drawHistoryIndex <= 0) return;
      designerState.drawHistoryIndex -= 1;
      applyDesignerCanvasSnapshot(designerState.drawHistory[designerState.drawHistoryIndex]);
      syncDesignerHistoryButtons();
    }

    function redoDesignerDrawing() {
      if (designerState.drawHistoryIndex >= designerState.drawHistory.length - 1) return;
      designerState.drawHistoryIndex += 1;
      applyDesignerCanvasSnapshot(designerState.drawHistory[designerState.drawHistoryIndex]);
      syncDesignerHistoryButtons();
    }

    function handleDesignerUpload(event) {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        designerRefs.photo.src = reader.result;
        designerRefs.photo.classList.remove('hidden');
        updateDesignerPhotoTransform();
      };
      reader.readAsDataURL(file);
    }

    function handleDesignerPhotoTransform() {
      designerState.photoScale = parseInt(designerRefs.photoScale.value, 10);
      designerState.photoX = parseInt(designerRefs.photoX.value, 10);
      designerState.photoY = parseInt(designerRefs.photoY.value, 10);
      updateDesignerPhotoTransform();
    }

    function updateDesignerPhotoTransform() {
      designerRefs.photo.style.transform = `translate(${designerState.photoX}px, ${designerState.photoY}px) scale(${designerState.photoScale / 100})`;
    }

    function addDesignerText() {
      const text = prompt('შეიყვანე ტექსტი ეტიკეტისთვის:', 'MATSI WINE');
      if (!text) return;
      const id = `text-${Date.now()}`;
      designerState.textLayers.push({
        id,
        text,
        x: 120,
        y: 140,
        color: designerState.textColor,
        size: designerState.textSize,
        locked: false
      });
      designerState.selectedTextId = id;
      renderDesignerTextLayers();
    }

    function renderDesignerTextLayers() {
      designerRefs.textLayer.innerHTML = designerState.textLayers.map((layer) => `
        <div
          class="designer-text-item ${designerState.selectedTextId === layer.id ? 'selected' : ''} ${layer.locked ? 'locked' : ''}"
          data-text-id="${layer.id}"
          style="left:${layer.x}px; top:${layer.y}px; color:${layer.color}; font-size:${layer.size}px;"
        >${escapeHtml(layer.text)}</div>
      `).join('');
    }

    function escapeHtml(text) {
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    function startDesignerTextDrag(event) {
      const target = event.target.closest('.designer-text-item');
      if (!target) return;
      const id = target.dataset.textId;
      const layer = designerState.textLayers.find((item) => item.id === id);
      if (!layer) return;

      designerState.selectedTextId = id;
      renderDesignerTextLayers();

      if (designerState.mode !== 'select' || layer.locked) return;
      const rect = designerRefs.stage.getBoundingClientRect();
      designerState.draggingTextId = id;
      designerState.dragOffset = {
        x: event.clientX - rect.left - layer.x,
        y: event.clientY - rect.top - layer.y
      };
      event.preventDefault();
    }

    function handleDesignerStagePointerDown(event) {
      if (designerState.mode !== 'select') return;
      if (event.target.closest('.designer-text-item')) return;
      designerState.selectedTextId = null;
      renderDesignerTextLayers();
    }

    function moveDesignerTextDrag(event) {
      if (!designerState.draggingTextId) return;
      const layer = designerState.textLayers.find((item) => item.id === designerState.draggingTextId);
      if (!layer) return;
      const rect = designerRefs.stage.getBoundingClientRect();
      layer.x = Math.max(0, Math.min(rect.width - 20, event.clientX - rect.left - designerState.dragOffset.x));
      layer.y = Math.max(0, Math.min(rect.height - 20, event.clientY - rect.top - designerState.dragOffset.y));
      renderDesignerTextLayers();
    }

    function endDesignerTextDrag() {
      designerState.draggingTextId = null;
    }

    function startDesignerPhotoDrag(event) {
      if (designerState.mode !== 'select') return;
      if (designerRefs.photo.classList.contains('hidden')) return;
      if (event.target.closest('.designer-text-item')) return;
      designerState.draggingPhoto = true;
      designerState.dragOffset = { x: event.clientX, y: event.clientY };
      if (designerRefs.stage) designerRefs.stage.style.cursor = 'grabbing';
      event.preventDefault();
    }

    function moveDesignerPhotoDrag(event) {
      if (!designerState.draggingPhoto) return;
      const dx = event.clientX - designerState.dragOffset.x;
      const dy = event.clientY - designerState.dragOffset.y;
      designerState.dragOffset = { x: event.clientX, y: event.clientY };
      designerState.photoX += dx;
      designerState.photoY += dy;
      designerRefs.photoX.value = Math.max(-100, Math.min(100, Math.round(designerState.photoX)));
      designerRefs.photoY.value = Math.max(-100, Math.min(100, Math.round(designerState.photoY)));
      designerState.photoX = parseInt(designerRefs.photoX.value, 10);
      designerState.photoY = parseInt(designerRefs.photoY.value, 10);
      updateDesignerPhotoTransform();
    }

    function endDesignerPhotoDrag() {
      if (!designerState.draggingPhoto) return;
      designerState.draggingPhoto = false;
      if (designerRefs.stage) designerRefs.stage.style.cursor = 'grab';
    }

    function handleDesignerHotkeys(event) {
      if (currentPage !== 'designer') return;
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z') {
        event.preventDefault();
        if (event.shiftKey) {
          redoDesignerDrawing();
        } else {
          undoDesignerDrawing();
        }
      }
      if ((event.key === 'Delete' || event.key === 'Backspace') && designerState.selectedTextId) {
        const activeTag = (document.activeElement?.tagName || '').toLowerCase();
        if (!['input', 'textarea', 'select'].includes(activeTag)) {
          event.preventDefault();
          deleteSelectedDesignerText();
        }
      }
    }

    function getSelectedTextLayer() {
      return designerState.textLayers.find((item) => item.id === designerState.selectedTextId) || null;
    }

    function editSelectedDesignerText() {
      const layer = getSelectedTextLayer();
      if (!layer) {
        showToast('ჯერ აირჩიე ტექსტი', 'info');
        return;
      }
      const nextText = prompt('შეცვალე ტექსტი:', layer.text);
      if (!nextText) return;
      layer.text = nextText;
      renderDesignerTextLayers();
    }

    function deleteSelectedDesignerText() {
      if (!designerState.selectedTextId) {
        showToast('ჯერ აირჩიე ტექსტი', 'info');
        return;
      }
      designerState.textLayers = designerState.textLayers.filter((item) => item.id !== designerState.selectedTextId);
      designerState.selectedTextId = null;
      renderDesignerTextLayers();
    }

    function toggleSelectedTextLock(locked) {
      const layer = getSelectedTextLayer();
      if (!layer) {
        showToast('ჯერ აირჩიე ტექსტი', 'info');
        return;
      }
      layer.locked = locked;
      renderDesignerTextLayers();
    }

    function bringSelectedTextToFront() {
      const layer = getSelectedTextLayer();
      if (!layer) return;
      designerState.textLayers = designerState.textLayers.filter((item) => item.id !== layer.id);
      designerState.textLayers.push(layer);
      renderDesignerTextLayers();
    }

    function sendSelectedTextToBack() {
      const layer = getSelectedTextLayer();
      if (!layer) return;
      designerState.textLayers = designerState.textLayers.filter((item) => item.id !== layer.id);
      designerState.textLayers.unshift(layer);
      renderDesignerTextLayers();
    }

    function resetDesigner() {
      designerState.mode = 'select';
      designerState.drawArmed = false;
      designerState.color = '#722f37';
      designerState.size = 6;
      designerState.photoScale = 100;
      designerState.photoX = 0;
      designerState.photoY = 0;
      designerState.textLayers = [];
      designerState.selectedTextId = null;
      designerRefs.mode.value = 'select';
      designerRefs.color.value = '#722f37';
      designerRefs.size.value = '6';
      designerRefs.textColor.value = '#3d1219';
      designerRefs.textSize.value = '28';
      designerRefs.photoScale.value = '100';
      designerRefs.photoX.value = '0';
      designerRefs.photoY.value = '0';
      designerRefs.upload.value = '';
      designerRefs.photo.src = '';
      designerRefs.photo.classList.add('hidden');
      updateDesignerPhotoTransform();
      clearDesignerDrawing();
      designerState.drawHistory = [];
      designerState.drawHistoryIndex = -1;
      pushDesignerHistory();
      setDesignerMode('select');
      renderDesignerTextLayers();
      showToast('დიზაინერი განულდა', 'info');
    }

    function buildDesignerExportCanvas() {
      const rect = designerRefs.stage.getBoundingClientRect();
      const exportWidth = 1080;
      const exportHeight = 1440;
      const scale = exportWidth / rect.width;
      const canvas = document.createElement('canvas');
      canvas.width = exportWidth;
      canvas.height = exportHeight;
      const ctx = canvas.getContext('2d');

      const gradient = ctx.createLinearGradient(0, 0, 0, exportHeight);
      gradient.addColorStop(0, '#f7f1e5');
      gradient.addColorStop(1, '#eee2cc');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, exportWidth, exportHeight);

      if (designerRefs.photo && !designerRefs.photo.classList.contains('hidden')) {
        const img = designerRefs.photo;
        const drawW = exportWidth * (designerState.photoScale / 100);
        const drawH = exportHeight * (designerState.photoScale / 100);
        const drawX = designerState.photoX * scale + (exportWidth - drawW) / 2;
        const drawY = designerState.photoY * scale + (exportHeight - drawH) / 2;
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      }

      ctx.drawImage(designerRefs.drawCanvas, 0, 0, exportWidth, exportHeight);

      designerState.textLayers.forEach((layer) => {
        ctx.fillStyle = layer.color;
        ctx.font = `700 ${Math.round(layer.size * scale)}px "Cormorant Garamond", Georgia, serif`;
        ctx.textBaseline = 'top';
        ctx.fillText(layer.text, layer.x * scale, layer.y * scale);
      });

      return canvas;
    }

    function exportDesignerPng() {
      const canvas = buildDesignerExportCanvas();

      const link = document.createElement('a');
      link.download = `matsi-label-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      showToast('PNG ექსპორტი დასრულდა', 'success');
    }

    async function addDesignerToCart() {
      try {
        let imageUrl = '';
        const canvas = buildDesignerExportCanvas();
        const blob = await canvasToBlob(canvas);
        const fileName = `matsi-label-cart-${Date.now()}.png`;
        try {
          imageUrl = await uploadDesignerToCloudinary(blob, fileName);
        } catch {
          imageUrl = canvas.toDataURL('image/png');
        }

        await addToCart(
          `custom-label-${Date.now()}`,
          'პერსონალური ეტიკეტი',
          Number(siteMeta.custom_label_price || 45),
          { image_url: imageUrl, item_type: 'custom_label' }
        );
      } catch (error) {
        console.error(error);
        showToast('დიზაინის კალათაში დამატება ვერ მოხერხდა', 'error');
      }
    }

    function canvasToBlob(canvas) {
      return new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error('PNG გენერაცია ვერ შესრულდა'));
            return;
          }
          resolve(blob);
        }, 'image/png', 0.95);
      });
    }

    async function uploadDesignerToCloudinary(blob, fileName) {
      const cloudName = (siteMeta.cloudinary_cloud_name || '').trim();
      const uploadPreset = (siteMeta.cloudinary_upload_preset || '').trim();

      if (!cloudName || !uploadPreset) {
        throw new Error('Cloudinary პარამეტრები არ არის შევსებული ადმინში');
      }

      const formData = new FormData();
      formData.append('file', blob, fileName);
      formData.append('upload_preset', uploadPreset);
      formData.append('folder', 'matsi-label-orders');

      const response = await fetch(`https://api.cloudinary.com/v1_1/${encodeURIComponent(cloudName)}/image/upload`, {
        method: 'POST',
        body: formData
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.secure_url) {
        throw new Error(result.error?.message || 'Cloudinary ატვირთვა ვერ მოხერხდა');
      }

      return result.secure_url;
    }

    async function uploadFileToCloudinary(file, folder = 'matsi-orders') {
      const cloudName = (siteMeta.cloudinary_cloud_name || '').trim();
      const uploadPreset = (siteMeta.cloudinary_upload_preset || '').trim();
      if (!cloudName || !uploadPreset) throw new Error('Cloudinary პარამეტრები არ არის შევსებული ადმინში');

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', uploadPreset);
      formData.append('folder', folder);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${encodeURIComponent(cloudName)}/image/upload`, {
        method: 'POST',
        body: formData
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.secure_url) {
        throw new Error(result.error?.message || 'Cloudinary ატვირთვა ვერ მოხერხდა');
      }
      return result.secure_url;
    }

    async function sendFormSubmitEmail(payload) {
      const recipient = (siteMeta.order_notify_email || DEFAULT_ORDER_EMAIL || 'matsiwine@gmail.com').trim();
      const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`;
      const formData = new FormData();

      formData.append('_captcha', 'false');
      formData.append('_template', 'table');

      Object.entries(payload || {}).forEach(([key, value]) => {
        if (value === undefined || value === null) return;
        formData.append(key, String(value));
      });

      const replyEmail = (payload?.email || '').toString().trim();
      if (replyEmail && replyEmail !== '-') {
        formData.append('_replyto', replyEmail);
      }

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === 'false' || result.success === false) {
        throw new Error(result.message || 'მეილის გაგზავნა ვერ მოხერხდა');
      }
    }

    // =====================================================
    // ADMIN PANEL
    // =====================================================

    const ADMIN_STORAGE_KEY = 'matsi_admin_state_v2';
    const adminState = {
      initialized: false,
      editMode: false,
      selectedElement: null,
      selectedProductIndex: null,
      activeTab: 'content'
    };
    const adminRefs = {};

    function initPublicFirebaseState() {
      if (firebasePublicReady) return true;
      if (!window.firebase || !window.firebase.apps) return false;

      try {
        if (!window.firebase.apps.length) {
          window.firebase.initializeApp(FIREBASE_CONFIG);
        }
        if (window.firebase.auth) {
          firebaseAuth = window.firebase.auth();
        }
        firebaseDb = window.firebase.firestore();
        firebaseStateRef = firebaseDb.collection(FIREBASE_STATE_COLLECTION).doc(FIREBASE_STATE_DOC);
        firebasePublicReady = true;
        return true;
      } catch (error) {
        console.error('Firebase init failed:', error);
        return false;
      }
    }

    async function ensurePublicFirebaseAuth() {
      if (!firebaseAuth || !firebaseAuth.signInAnonymously) return;
      if (firebaseAuth.currentUser) return;
      if (!firebaseAuthReadyPromise) {
        firebaseAuthReadyPromise = firebaseAuth.signInAnonymously().catch((error) => {
          console.error('Anonymous auth failed:', error);
          firebaseAuthReadyPromise = null;
        });
      }
      await firebaseAuthReadyPromise;
    }

    function normalizeAdminPayload(data) {
      const payload = { ...(data || {}) };
      delete payload.updatedAt;
      payload.updatedAtClient = Number(payload.updatedAtClient || 0) || 0;
      return payload;
    }

    function getAdminPayloadVersion(data) {
      return Number(data?.updatedAtClient || 0) || 0;
    }

    function buildAdminPayload() {
      return {
        config,
        siteMeta,
        homeContent,
        aboutContent,
        products,
        contentEdits: collectAdminContentEdits(),
        updatedAtClient: Date.now()
      };
    }

    function applyAdminPayload(data, persistLocal = false) {
      const payload = normalizeAdminPayload(data);
      if (payload.config && typeof payload.config === 'object') {
        config = { ...defaultConfig, ...payload.config };
      }
      if (payload.siteMeta && typeof payload.siteMeta === 'object') {
        siteMeta = {
          ...defaultSiteMeta,
          ...payload.siteMeta,
          sections: {
            ...defaultSiteMeta.sections,
            ...(payload.siteMeta.sections || {})
          }
        };
        if (!siteMeta.cloudinary_cloud_name || !String(siteMeta.cloudinary_cloud_name).trim()) {
          siteMeta.cloudinary_cloud_name = defaultSiteMeta.cloudinary_cloud_name;
        }
        if (!siteMeta.cloudinary_upload_preset || !String(siteMeta.cloudinary_upload_preset).trim()) {
          siteMeta.cloudinary_upload_preset = defaultSiteMeta.cloudinary_upload_preset;
        }
      }
      if (payload.homeContent && typeof payload.homeContent === 'object') {
        homeContent = { ...defaultHomeContent, ...payload.homeContent };
      }
      if (payload.aboutContent && typeof payload.aboutContent === 'object') {
        aboutContent = { ...defaultAboutContent, ...payload.aboutContent };
      }
      if (Array.isArray(payload.products)) {
        products = payload.products;
      }
      applyConfig();
      applySiteMeta();
      applyHomeContent();
      applyAboutContent();
      applySectionVisibility();
      renderProducts();
      if (currentPage === 'shop') renderProducts();
      if (currentPage === 'cart') renderCart();
      applyAdminContentEdits(payload.contentEdits || {});
      renderAdminPanelValues();

      if (persistLocal) {
        const localPayload = {
          config,
          siteMeta,
          homeContent,
          aboutContent,
          products,
          contentEdits: payload.contentEdits || collectAdminContentEdits(),
          updatedAtClient: getAdminPayloadVersion(payload) || localAdminVersion || Date.now()
        };
        localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(localPayload));
        localAdminVersion = getAdminPayloadVersion(localPayload);
      }
    }

    function initAdminPanel() {
      if (adminState.initialized) return;

      adminRefs.tabButtons = Array.from(document.querySelectorAll('.admin-tab-btn'));
      adminRefs.panels = Array.from(document.querySelectorAll('.admin-panel'));

      adminRefs.toggleEdit = document.getElementById('admin-toggle-edit');
      adminRefs.applySelected = document.getElementById('admin-apply-selected');
      adminRefs.selectedText = document.getElementById('admin-selected-text');
      adminRefs.selectedClass = document.getElementById('admin-selected-class');
      adminRefs.selectedStyle = document.getElementById('admin-selected-style');

      adminRefs.heroTitle = document.getElementById('admin-hero-title');
      adminRefs.heroSubtitle = document.getElementById('admin-hero-subtitle');
      adminRefs.aboutTitle = document.getElementById('admin-about-title');
      adminRefs.contactEmail = document.getElementById('admin-contact-email');
      adminRefs.contactPhone = document.getElementById('admin-contact-phone');
      adminRefs.contactAddress = document.getElementById('admin-contact-address');
      adminRefs.instagramLink = document.getElementById('admin-instagram-link');
      adminRefs.applyContent = document.getElementById('admin-apply-content');

      adminRefs.primaryColor = document.getElementById('admin-primary-color');
      adminRefs.textColor = document.getElementById('admin-text-color');
      adminRefs.applyTheme = document.getElementById('admin-apply-theme');

      adminRefs.showHome = document.getElementById('admin-show-home');
      adminRefs.showShop = document.getElementById('admin-show-shop');
      adminRefs.showAbout = document.getElementById('admin-show-about');
      adminRefs.showContact = document.getElementById('admin-show-contact');
      adminRefs.showDesigner = document.getElementById('admin-show-designer');
      adminRefs.showCart = document.getElementById('admin-show-cart');
      adminRefs.applySections = document.getElementById('admin-apply-sections');

      adminRefs.productList = document.getElementById('admin-product-list');
      adminRefs.productName = document.getElementById('admin-product-name');
      adminRefs.productYear = document.getElementById('admin-product-year');
      adminRefs.productPrice = document.getElementById('admin-product-price');
      adminRefs.productType = document.getElementById('admin-product-type');
      adminRefs.productCategory = document.getElementById('admin-product-category');
      adminRefs.productGrape = document.getElementById('admin-product-grape');
      adminRefs.productRegion = document.getElementById('admin-product-region');
      adminRefs.productAlcohol = document.getElementById('admin-product-alcohol');
      adminRefs.productTemperature = document.getElementById('admin-product-temperature');
      adminRefs.productPairing = document.getElementById('admin-product-pairing');
      adminRefs.productDescription = document.getElementById('admin-product-description');
      adminRefs.productAroma = document.getElementById('admin-product-aroma');
      adminRefs.productTaste = document.getElementById('admin-product-taste');
      adminRefs.productAdd = document.getElementById('admin-product-add');
      adminRefs.productUpdate = document.getElementById('admin-product-update');
      adminRefs.productClear = document.getElementById('admin-product-clear');

      adminRefs.save = document.getElementById('admin-save');
      adminRefs.load = document.getElementById('admin-load');
      adminRefs.resetAll = document.getElementById('admin-reset-all');
      adminRefs.exportJson = document.getElementById('admin-export-json');
      adminRefs.importJson = document.getElementById('admin-import-json');

      if (!adminRefs.toggleEdit) return;

      adminRefs.tabButtons.forEach((button) => {
        button.addEventListener('click', () => setAdminTab(button.dataset.adminTab));
      });
      setAdminTab(adminState.activeTab);

      adminRefs.toggleEdit.addEventListener('click', toggleAdminEditMode);
      adminRefs.applySelected.addEventListener('click', applyAdminSelectedChanges);
      adminRefs.applyContent.addEventListener('click', applyAdminContentChanges);
      adminRefs.applyTheme.addEventListener('click', applyAdminThemeChanges);
      adminRefs.applySections.addEventListener('click', applyAdminSectionVisibilityChanges);
      adminRefs.productAdd.addEventListener('click', addAdminProduct);
      adminRefs.productUpdate.addEventListener('click', updateAdminProduct);
      adminRefs.productClear.addEventListener('click', clearAdminProductForm);
      adminRefs.save.addEventListener('click', saveAdminState);
      adminRefs.load.addEventListener('click', async () => {
        await loadAdminState();
        showToast('შენახული ვერსია ჩაიტვირთა', 'success');
      });
      adminRefs.resetAll.addEventListener('click', resetAdminState);
      adminRefs.exportJson.addEventListener('click', exportAdminJson);
      adminRefs.importJson.addEventListener('change', importAdminJson);

      adminRefs.productList.addEventListener('click', handleAdminProductListClick);
      document.addEventListener('click', handleAdminEditableClickCapture, true);

      renderAdminPanelValues();
      renderAdminProductList();
      adminState.initialized = true;
    }

    function setAdminTab(tab) {
      adminState.activeTab = tab;
      adminRefs.tabButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.adminTab === tab);
      });
      adminRefs.panels.forEach((panel) => {
        panel.classList.toggle('hidden', panel.id !== `admin-panel-${tab}`);
      });
    }

    function getAdminEditableElements() {
      const nodes = Array.from(document.querySelectorAll('#app h1, #app h2, #app h3, #app p, #app span, #app a, #app li, #app button'));
      let index = 0;
      return nodes.filter((el) => {
        if (el.closest('#page-admin')) return false;
        if (el.closest('#toast-container')) return false;
        if (el.id && (el.id.startsWith('admin-') || el.id.startsWith('designer-'))) return false;
        if (el.closest('#page-designer .space-y-4')) return false;
        if (!el.dataset.adminEditableId) {
          el.dataset.adminEditableId = `ae-${index}`;
        }
        index += 1;
        return true;
      });
    }

    function toggleAdminEditMode() {
      adminState.editMode = !adminState.editMode;
      const editableElements = getAdminEditableElements();
      editableElements.forEach((el) => {
        el.contentEditable = adminState.editMode ? 'true' : 'false';
        el.classList.toggle('admin-editable-target', adminState.editMode);
      });

      if (!adminState.editMode) {
        clearAdminSelectedElement();
      }

      adminRefs.toggleEdit.textContent = adminState.editMode ? 'Disable Edit Mode' : 'Enable Edit Mode';
      showToast(adminState.editMode ? 'Edit mode ჩართულია' : 'Edit mode გამორთულია', 'info');
    }

    function handleAdminEditableClickCapture(event) {
      if (!adminState.editMode) return;
      const target = event.target.closest('.admin-editable-target');
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      selectAdminElement(target);
    }

    function selectAdminElement(element) {
      clearAdminSelectedElement();
      adminState.selectedElement = element;
      element.classList.add('admin-selected-target');
      adminRefs.selectedText.value = element.innerHTML;
      adminRefs.selectedClass.value = element.className;
      adminRefs.selectedStyle.value = element.getAttribute('style') || '';
    }

    function clearAdminSelectedElement() {
      if (adminState.selectedElement) {
        adminState.selectedElement.classList.remove('admin-selected-target');
      }
      adminState.selectedElement = null;
      adminRefs.selectedText.value = '';
      adminRefs.selectedClass.value = '';
      adminRefs.selectedStyle.value = '';
    }

    function applyAdminSelectedChanges() {
      if (!adminState.selectedElement) {
        showToast('ჯერ აირჩიე ელემენტი', 'info');
        return;
      }
      adminState.selectedElement.innerHTML = adminRefs.selectedText.value;
      adminState.selectedElement.className = adminRefs.selectedClass.value;
      if (adminRefs.selectedStyle.value.trim()) {
        adminState.selectedElement.setAttribute('style', adminRefs.selectedStyle.value.trim());
      } else {
        adminState.selectedElement.removeAttribute('style');
      }
      adminState.selectedElement.classList.add('admin-selected-target');
      showToast('ელემენტი განახლდა', 'success');
    }

    function applyAdminThemeChanges() {
      config.primary_action_color = adminRefs.primaryColor.value || defaultConfig.primary_action_color;
      config.background_color = adminRefs.primaryColor.value || defaultConfig.background_color;
      config.text_color = adminRefs.textColor.value || defaultConfig.text_color;
      applyConfig();
      showToast('თემა განახლდა', 'success');
    }

    function applyAdminContentChanges() {
      config.hero_title = adminRefs.heroTitle.value || defaultConfig.hero_title;
      config.hero_subtitle = adminRefs.heroSubtitle.value || defaultConfig.hero_subtitle;
      config.about_title = adminRefs.aboutTitle.value || defaultConfig.about_title;
      siteMeta.contact_email = adminRefs.contactEmail.value || defaultSiteMeta.contact_email;
      siteMeta.contact_phone = adminRefs.contactPhone.value || defaultSiteMeta.contact_phone;
      siteMeta.contact_address = adminRefs.contactAddress.value || defaultSiteMeta.contact_address;
      siteMeta.instagram_link = adminRefs.instagramLink.value || defaultSiteMeta.instagram_link;
      applyConfig();
      applySiteMeta();
      showToast('კონტენტი განახლდა', 'success');
    }

    function applyAdminSectionVisibilityChanges() {
      siteMeta.sections.home = !!adminRefs.showHome.checked;
      siteMeta.sections.shop = !!adminRefs.showShop.checked;
      siteMeta.sections.about = !!adminRefs.showAbout.checked;
      siteMeta.sections.contact = !!adminRefs.showContact.checked;
      siteMeta.sections.designer = !!adminRefs.showDesigner.checked;
      siteMeta.sections.cart = !!adminRefs.showCart.checked;
      applySectionVisibility();
      showToast('სექციები განახლდა', 'success');
    }

    function applySectionVisibility() {
      const set = (page, visible) => {
        const section = document.getElementById(`page-${page}`);
        if (!section) return;
        section.dataset.adminVisible = visible ? '1' : '0';
      };
      const setNav = (page, visible) => {
        document.querySelectorAll(`[onclick*="navigateTo('${page}')"]`).forEach((el) => {
          if (el.closest('#page-admin')) return;
          el.style.display = visible ? '' : 'none';
        });
      };
      set('home', siteMeta.sections.home);
      set('shop', siteMeta.sections.shop);
      set('about', siteMeta.sections.about);
      set('contact', siteMeta.sections.contact);
      set('designer', siteMeta.sections.designer);
      set('cart', siteMeta.sections.cart);
      setNav('home', siteMeta.sections.home);
      setNav('shop', siteMeta.sections.shop);
      setNav('about', siteMeta.sections.about);
      setNav('contact', siteMeta.sections.contact);
      setNav('designer', siteMeta.sections.designer);
      setNav('cart', siteMeta.sections.cart);

      const hiddenPages = Object.keys(siteMeta.sections).filter((key) => !siteMeta.sections[key]);
      if (hiddenPages.includes(currentPage)) {
        navigateTo('home');
      }
    }

    function renderAdminPanelValues() {
      if (!adminRefs.heroTitle) return;
      adminRefs.heroTitle.value = config.hero_title || defaultConfig.hero_title;
      adminRefs.heroSubtitle.value = config.hero_subtitle || defaultConfig.hero_subtitle;
      adminRefs.aboutTitle.value = config.about_title || defaultConfig.about_title;
      adminRefs.contactEmail.value = siteMeta.contact_email || defaultSiteMeta.contact_email;
      adminRefs.contactPhone.value = siteMeta.contact_phone || defaultSiteMeta.contact_phone;
      adminRefs.contactAddress.value = siteMeta.contact_address || defaultSiteMeta.contact_address;
      adminRefs.instagramLink.value = siteMeta.instagram_link || defaultSiteMeta.instagram_link;
      adminRefs.primaryColor.value = config.primary_action_color || defaultConfig.primary_action_color;
      adminRefs.textColor.value = config.text_color || defaultConfig.text_color;
      adminRefs.showHome.checked = !!siteMeta.sections.home;
      adminRefs.showShop.checked = !!siteMeta.sections.shop;
      adminRefs.showAbout.checked = !!siteMeta.sections.about;
      adminRefs.showContact.checked = !!siteMeta.sections.contact;
      adminRefs.showDesigner.checked = !!siteMeta.sections.designer;
      adminRefs.showCart.checked = !!siteMeta.sections.cart;
      renderAdminProductList();
    }

    function readAdminProductForm() {
      return {
        id: `custom-${Date.now()}`,
        name: (adminRefs.productName.value || '').trim(),
        year: (adminRefs.productYear.value || '').toString().trim() ? parseInt(adminRefs.productYear.value, 10) : '',
        type: adminRefs.productType.value || 'red',
        category: (adminRefs.productCategory.value || '').trim(),
        price: parseFloat(adminRefs.productPrice.value || '0') || 0,
        grape: (adminRefs.productGrape.value || '').trim(),
        region: (adminRefs.productRegion.value || '').trim(),
        description: (adminRefs.productDescription.value || '').trim(),
        aroma: (adminRefs.productAroma.value || '').trim(),
        taste: (adminRefs.productTaste.value || '').trim(),
        pairing: (adminRefs.productPairing.value || '').trim(),
        alcohol: (adminRefs.productAlcohol.value || '').trim(),
        temperature: (adminRefs.productTemperature.value || '').trim()
      };
    }

    function fillAdminProductForm(product) {
      adminRefs.productName.value = product.name || '';
      adminRefs.productYear.value = product.year || '';
      adminRefs.productPrice.value = product.price || '';
      adminRefs.productType.value = product.type || 'red';
      adminRefs.productCategory.value = product.category || '';
      adminRefs.productGrape.value = product.grape || '';
      adminRefs.productRegion.value = product.region || '';
      adminRefs.productAlcohol.value = product.alcohol || '';
      adminRefs.productTemperature.value = product.temperature || '';
      adminRefs.productPairing.value = product.pairing || '';
      adminRefs.productDescription.value = product.description || '';
      adminRefs.productAroma.value = product.aroma || '';
      adminRefs.productTaste.value = product.taste || '';
    }

    function clearAdminProductForm() {
      [
        adminRefs.productName,
        adminRefs.productYear,
        adminRefs.productPrice,
        adminRefs.productCategory,
        adminRefs.productGrape,
        adminRefs.productRegion,
        adminRefs.productAlcohol,
        adminRefs.productTemperature,
        adminRefs.productPairing,
        adminRefs.productDescription,
        adminRefs.productAroma,
        adminRefs.productTaste
      ].forEach((input) => { input.value = ''; });
      adminRefs.productType.value = 'red';
      adminState.selectedProductIndex = null;
      renderAdminProductList();
    }

    function addAdminProduct() {
      const product = readAdminProductForm();
      if (!product.name) {
        showToast('სახელი აუცილებელია', 'error');
        return;
      }
      products.push(product);
      renderProducts();
      renderAdminProductList();
      clearAdminProductForm();
      showToast('პროდუქტი დაემატა', 'success');
    }

    function updateAdminProduct() {
      if (adminState.selectedProductIndex === null) {
        showToast('აირჩიე პროდუქტი სიიდან', 'info');
        return;
      }
      const existing = products[adminState.selectedProductIndex];
      const updated = readAdminProductForm();
      updated.id = existing.id;
      products[adminState.selectedProductIndex] = updated;
      renderProducts();
      renderAdminProductList();
      showToast('პროდუქტი განახლდა', 'success');
    }

    function deleteAdminProduct(index) {
      products.splice(index, 1);
      renderProducts();
      if (adminState.selectedProductIndex === index) {
        clearAdminProductForm();
      }
      renderAdminProductList();
      showToast('პროდუქტი წაიშალა', 'success');
    }

    function renderAdminProductList() {
      if (!adminRefs.productList) return;
      adminRefs.productList.innerHTML = products.map((product, index) => `
        <div class="admin-product-item ${adminState.selectedProductIndex === index ? 'active' : ''}">
          <div>
            <p class="text-sm font-semibold text-wine-900">${escapeHtml(product.name)} ${product.year || ''}</p>
            <p class="text-xs text-wine-600">₾${product.price} • ${escapeHtml(product.type || '')}</p>
          </div>
          <div class="flex items-center gap-2">
            <button data-admin-product-action="select" data-admin-product-index="${index}" class="px-3 py-1 rounded-full bg-cream-200 text-wine-800 text-xs">Edit</button>
            <button data-admin-product-action="delete" data-admin-product-index="${index}" class="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs">Delete</button>
          </div>
        </div>
      `).join('');
    }

    function handleAdminProductListClick(event) {
      const button = event.target.closest('[data-admin-product-action]');
      if (!button) return;
      const index = parseInt(button.dataset.adminProductIndex, 10);
      const action = button.dataset.adminProductAction;
      if (Number.isNaN(index)) return;

      if (action === 'select') {
        adminState.selectedProductIndex = index;
        fillAdminProductForm(products[index]);
        renderAdminProductList();
      } else if (action === 'delete') {
        deleteAdminProduct(index);
      }
    }

    function collectAdminContentEdits() {
      const edits = {};
      getAdminEditableElements().forEach((el) => {
        const id = el.dataset.adminEditableId;
        edits[id] = {
          html: el.innerHTML,
          className: el.className,
          style: el.getAttribute('style') || ''
        };
      });
      return edits;
    }

    function applyAdminContentEdits(edits = {}) {
      getAdminEditableElements().forEach((el) => {
        const id = el.dataset.adminEditableId;
        const value = edits[id];
        if (!value) return;
        if (typeof value.html === 'string') el.innerHTML = value.html;
        if (typeof value.className === 'string') el.className = value.className;
        if (value.style) el.setAttribute('style', value.style);
      });
    }

    function saveAdminState() {
      const payload = buildAdminPayload();
      localAdminVersion = payload.updatedAtClient;
      lastCloudVersion = Math.max(lastCloudVersion, localAdminVersion);
      localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(payload));
      if (initPublicFirebaseState() && firebaseStateRef) {
        ensurePublicFirebaseAuth().then(() => {
          firebaseStateRef.set({
            ...payload,
            updatedAt: window.firebase.firestore.FieldValue.serverTimestamp()
          }, { merge: true }).catch((error) => {
            console.error(error);
            showToast('Cloud შენახვა ვერ მოხერხდა', 'error');
          });
        });
      }
      showToast('ადმინ ცვლილებები შენახულია', 'success');
    }

    async function loadAdminState() {
      let localVersion = 0;
      const raw = localStorage.getItem(ADMIN_STORAGE_KEY);
      if (raw) {
        try {
          const data = JSON.parse(raw);
          localVersion = getAdminPayloadVersion(data);
          localAdminVersion = localVersion;
          lastCloudVersion = Math.max(lastCloudVersion, localVersion);
          applyAdminPayload(data);
        } catch (error) {
          console.error(error);
          showToast('შენახული მონაცემი დაზიანებულია', 'error');
        }
      }

      if (!initPublicFirebaseState() || !firebaseStateRef) return;

      try {
        await ensurePublicFirebaseAuth();
        const cloudSnap = await firebaseStateRef.get();
        if (cloudSnap.exists) {
          const data = cloudSnap.data();
          const cloudVersion = getAdminPayloadVersion(data);
          if (cloudVersion >= localVersion) {
            lastCloudVersion = cloudVersion;
            applyAdminPayload(data, true);
          }
        }
      } catch (error) {
        console.error(error);
      }

      if (!firebaseStateUnsubscribe) {
        await ensurePublicFirebaseAuth();
        firebaseStateUnsubscribe = firebaseStateRef.onSnapshot((snap) => {
          if (!snap.exists) return;
          const data = snap.data();
          const cloudVersion = getAdminPayloadVersion(data);
          if (cloudVersion < localAdminVersion) return;
          lastCloudVersion = cloudVersion;
          applyAdminPayload(data, true);
        }, (error) => {
          console.error(error);
        });
      }

      if (!firebasePollIntervalId) {
        firebasePollIntervalId = setInterval(async () => {
          try {
            if (!firebaseStateRef) return;
            await ensurePublicFirebaseAuth();
            const snap = await firebaseStateRef.get();
            if (!snap.exists) return;
            const data = snap.data();
            const cloudVersion = getAdminPayloadVersion(data);
            if (cloudVersion > lastCloudVersion) {
              lastCloudVersion = cloudVersion;
              applyAdminPayload(data, true);
            }
          } catch (error) {
            console.error(error);
          }
        }, 7000);
      }
    }

    function resetAdminState() {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      config = { ...defaultConfigSnapshot };
      siteMeta = JSON.parse(JSON.stringify(defaultSiteMeta));
      homeContent = { ...defaultHomeContent };
      aboutContent = { ...defaultAboutContent };
      products = JSON.parse(JSON.stringify(initialProducts));
      applyConfig();
      applySiteMeta();
      applyHomeContent();
      applyAboutContent();
      applySectionVisibility();
      renderProducts();
      clearAdminProductForm();
      renderAdminProductList();
      showToast('ყველაფერი დაბრუნდა საწყის ვერსიაზე', 'info');
    }

    function exportAdminJson() {
      const payload = {
        config,
        siteMeta,
        homeContent,
        products,
        contentEdits: collectAdminContentEdits()
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `matsi-admin-backup-${Date.now()}.json`;
      link.click();
      URL.revokeObjectURL(url);
    }

    function importAdminJson(event) {
      const file = event.target.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const parsed = JSON.parse(reader.result);
          localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(parsed));
          await loadAdminState();
          showToast('JSON იმპორტი შესრულდა', 'success');
        } catch (error) {
          console.error(error);
          showToast('არასწორი JSON ფაილი', 'error');
        }
      };
      reader.readAsText(file);
    }
    
    // =====================================================
    // 3D SCENE (Three.js)
    // =====================================================
    
    let scene, camera, renderer, bottle;
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let threeLoadPromise = null;
    let sceneInitialized = false;

    function hideLoader(delay = 300) {
      setTimeout(() => {
        const loader = document.getElementById('loader');
        if (!loader) return;
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.35s ease';
        setTimeout(() => loader.remove(), 350);
      }, delay);
    }

    function loadThreeJs() {
      if (window.THREE) return Promise.resolve(true);
      if (threeLoadPromise) return threeLoadPromise;

      threeLoadPromise = new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.async = true;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.head.appendChild(script);
      });

      return threeLoadPromise;
    }
    
    async function init3DScene() {
      const canvas = document.getElementById('wine-canvas');
      if (!canvas || isReducedMotion || sceneInitialized) return;
      const hasThree = await loadThreeJs();
      if (!hasThree || !window.THREE) return;
      sceneInitialized = true;
      
      scene = new THREE.Scene();
      
      camera = new THREE.PerspectiveCamera(45, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
      camera.position.z = 5;
      
      renderer = new THREE.WebGLRenderer({ 
        canvas, 
        alpha: true, 
        antialias: true 
      });
      renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      
      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      
      // Directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(2, 2, 2);
      scene.add(directionalLight);
      
      // Point light for wine glow
      const pointLight = new THREE.PointLight(0x722f37, 0.5, 10);
      pointLight.position.set(0, 0, 3);
      scene.add(pointLight);
      
      // Create bottle group
      bottle = new THREE.Group();
      
      // Bottle body (cylinder)
      const bodyGeometry = new THREE.CylinderGeometry(0.4, 0.45, 2.5, 32);
      const bodyMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x1a0a0a,
        metalness: 0.1,
        roughness: 0.2,
        transmission: 0.3,
        thickness: 0.5
      });
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
      body.position.y = -0.25;
      bottle.add(body);
      
      // Bottle neck
      const neckGeometry = new THREE.CylinderGeometry(0.15, 0.3, 0.8, 32);
      const neck = new THREE.Mesh(neckGeometry, bodyMaterial);
      neck.position.y = 1.4;
      bottle.add(neck);
      
      // Cork
      const corkGeometry = new THREE.CylinderGeometry(0.12, 0.14, 0.3, 16);
      const corkMaterial = new THREE.MeshStandardMaterial({
        color: 0xd4bc9a,
        roughness: 0.8
      });
      const cork = new THREE.Mesh(corkGeometry, corkMaterial);
      cork.position.y = 1.95;
      bottle.add(cork);
      
      // Wine inside (visible through glass)
      const wineGeometry = new THREE.CylinderGeometry(0.35, 0.4, 2, 32);
      const wineMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x722f37,
        metalness: 0,
        roughness: 0.3,
        transmission: 0.8
      });
      const wine = new THREE.Mesh(wineGeometry, wineMaterial);
      wine.position.y = -0.3;
      bottle.add(wine);
      
      // Label
      const labelGeometry = new THREE.PlaneGeometry(0.6, 0.8);
      const labelMaterial = new THREE.MeshStandardMaterial({
        color: 0xf9f1e4,
        roughness: 0.9
      });
      const label = new THREE.Mesh(labelGeometry, labelMaterial);
      label.position.set(0, -0.2, 0.41);
      bottle.add(label);
      
      bottle.position.set(1.5, 0, 0);
      bottle.rotation.y = -0.3;
      scene.add(bottle);
      
      animate3D();
      
      // Handle resize
      window.addEventListener('resize', () => {
        if (!canvas || !renderer || !camera) return;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
      });
    }
    
    function animate3D() {
      if (!bottle || !renderer || !scene || !camera) return;
      
      requestAnimationFrame(animate3D);
      
      // Gentle rotation
      bottle.rotation.y += 0.003;
      
      // Subtle floating motion
      bottle.position.y = Math.sin(Date.now() * 0.001) * 0.05;
      
      renderer.render(scene, camera);
    }
    
    // =====================================================
    // INITIALIZATION
    // =====================================================
    
    async function init() {
      loadAdminState().catch((error) => console.error(error));

      window.addEventListener('hashchange', () => {
        const hashPage = getPageFromLocation();
        if (hashPage && hashPage !== currentPage) {
          navigateTo(hashPage, null, false);
        }
      });

      // Render UI immediately
      applyConfig();
      applySiteMeta();
      applyHomeContent();
      applyAboutContent();
      applySectionVisibility();
      renderProducts();
      applyLiquidButtons(document);
      initMotionEnhancements();

      const initialPage = getPageFromLocation();
      if (initialPage && initialPage !== currentPage) {
        navigateTo(initialPage, null, false);
      } else {
        history.replaceState(null, '', '#home');
      }

      // Hide loader fast so first paint does not feel delayed
      hideLoader(250);

      // Initialize SDKs in background
      initElementSdk();
      const dataInitPromise = initDataSdk();

      // Defer heavy 3D work slightly to prioritize first content
      setTimeout(() => {
        init3DScene().catch(() => {});
      }, 400);

      // Do not block startup for a slow SDK init path
      await Promise.race([
        dataInitPromise,
        new Promise((resolve) => setTimeout(resolve, 1200))
      ]);
    }
    
    // Start app
    init();
