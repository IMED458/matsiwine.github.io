const STORAGE_KEY = 'matsi_admin_state_v2';
const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyBRT-iB1FF9I7Wn5FOOFvw-ER0PwsgGpb4',
  authDomain: 'matsiwine-cfaf4.firebaseapp.com',
  projectId: 'matsiwine-cfaf4',
  storageBucket: 'matsiwine-cfaf4.firebasestorage.app',
  messagingSenderId: '666163321',
  appId: '1:666163321:web:e98c31b468867184e91ca8',
  measurementId: 'G-2KY01LMQQZ'
};

const SITE_DOC_PATH = { collection: 'site', doc: 'main' };
const STORAGE_ROOT = 'matsi-assets';

const defaultState = {
  config: {
    hero_title: 'MATSI WINE',
    hero_subtitle: '8000 წლიანი მეღვინეობის ისტორია თანამედროვე ინტერპრეტაციაში — ყოველ ბოთლში ქართული მიწის სული',
    about_title: 'ჩვენი ისტორია',
    background_color: '#722f37',
    surface_color: '#fdf9f3',
    text_color: '#3d1219',
    primary_action_color: '#722f37',
    secondary_action_color: '#5a1f29'
  },
  siteMeta: {
    contact_email: 'info@matsiwine.ge',
    contact_phone: '+995 555 123 456',
    contact_address: 'კახეთი, თელავის რაიონი, სოფ. წინანდალი',
    instagram_link: 'https://instagram.com/matsi_wine_',
    facebook_link: '',
    order_notify_email: 'matsiwine@gmail.com',
    custom_label_price: 45,
    cloudinary_cloud_name: 'dlth7j0i6',
    cloudinary_upload_preset: 'matsi_labels_unsigned',
    logo_url: 'matsiwine.png',
    hero_bottle_url: 'bottle.png',
    logo_path: '',
    hero_bottle_path: '',
    sections: {
      home: true,
      shop: true,
      about: true,
      contact: true,
      designer: true,
      cart: true
    }
  },
  homeContent: {
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
    card1_image_path: '',
    card2_category: 'ქვევრის ღვინო',
    card2_title: 'მწვანე ქვევრი 2021',
    card2_desc: 'ქვევრში დაყენებული, ქარვისფერი, მდიდარი არომატით',
    card2_price: '₾65',
    card2_btn: 'დამატება',
    card2_image: '',
    card2_image_path: '',
    card3_category: 'ნახევრად ტკბილი',
    card3_title: 'კინძმარაული 2020',
    card3_desc: 'კლასიკური კახური, მაყვლისა და ალუბლის ნოტებით',
    card3_price: '₾55',
    card3_btn: 'დამატება',
    card3_image: '',
    card3_image_path: '',
    story_kicker: 'ჩვენი ფილოსოფია',
    story_title: 'მიწიდან სუფრამდე',
    story_text: 'MATSI WINE — ეს არის ოჯახური მეღვინეობის თანამედროვე გაგრძელება. ჩვენ ვაერთიანებთ ქვევრის უძველეს ტრადიციას ევროპული მეღვინეობის თანამედროვე მიდგომებთან, რათა შევქმნათ ღვინო, რომელიც მოგვითხრობს ქართული მიწის ისტორიას.',
    story_btn: 'მეტის გაგება',
    stat1_value: '8000+',
    stat1_label: 'წლიანი ტრადიცია',
    stat1_image: '',
    stat1_image_path: '',
    stat2_value: '525',
    stat2_label: 'ქართული ჯიში',
    stat2_image: '',
    stat2_image_path: '',
    stat3_value: '100%',
    stat3_label: 'ორგანული',
    stat3_image: '',
    stat3_image_path: '',
    stat4_value: '🏆',
    stat4_label: 'საერთაშორისო ჯილდოები',
    stat4_image: '',
    stat4_image_path: ''
  },
  aboutContent: {
    about_kicker: 'ჩვენს შესახებ',
    about_title_edit: 'ჩვენი ისტორია',
    about_subtitle: 'MATSI WINE დაარსდა 2018 წელს კახეთში, სადაც ჩვენი ოჯახი თაობების მანძილზე ინახავდა მეღვინეობის საიდუმლოებებს',
    about_section1_title: 'ფესვები კახეთში',
    about_section1_text1: 'ჩვენი მეღვინეობა მდებარეობს კახეთის გულში — ალაზნის ველზე, სადაც უნიკალური მიკროკლიმატი და ნაყოფიერი ნიადაგი ქმნის იდეალურ პირობებს საუკეთესო ყურძნის მოსაყვანად.',
    about_section1_text2: 'ოჯახის მამულში დარგული ვაზები — საფერავი, მწვანე, რქაწითელი — 40 წელზე მეტია ხილს იძლევა და ყოველწლიურად გვაძლევს ღვინოს განსაკუთრებული ხასიათით.',
    about_photo1_label: 'ვენახის ფოტო',
    about_photo1_image: '',
    about_photo1_image_path: '',
    about_section2_title: 'ქვევრის ტრადიცია',
    about_section2_text1: 'ჩვენ ვიყენებთ ქვევრს — მიწაში ჩაფლულ თიხის ჭურჭელს, რომელშიც ღვინო ფერმენტირდება და მწიფდება ბუნებრივი ტემპერატურის კონტროლით. ეს მეთოდი UNESCO-ს მსოფლიო მემკვიდრეობის ნაწილია.',
    about_section2_text2: 'ქვევრის ღვინო გამოირჩევა ღრმა, კომპლექსური გემოთი და ხანგრძლივი დამთავრებით, რასაც ვერც ერთი თანამედროვე ტექნოლოგია ვერ იმეორებს.',
    about_photo2_label: 'ქვევრის ფოტო',
    about_photo2_image: '',
    about_photo2_image_path: '',
    about_section3_title: 'ჩვენი გუნდი',
    about_section3_text1: 'MATSI-ს გუნდში გაერთიანებულია სამი თაობა: ბაბუის ტრადიციული ცოდნა, მამის მეღვინეობის გამოცდილება და შვილების თანამედროვე ხედვა.',
    about_section3_text2: 'ჩვენ გვჯერა, რომ საუკეთესო ღვინო იბადება ოჯახურ გარემოში, სადაც ყოველი ბოთლი მზადდება სიყვარულით და პატივისცემით ტრადიციისადმი.',
    about_photo3_label: 'გუნდის ფოტო',
    about_photo3_image: '',
    about_photo3_image_path: '',
    about_values_title: 'ჩვენი ღირებულებები',
    about_value1_title: 'ბუნებრიობა',
    about_value1_text: '100% ორგანული მეურნეობა, ქიმიკატების გარეშე',
    about_value2_title: 'ტრადიცია',
    about_value2_text: '8000 წლიანი მემკვიდრეობის პატივისცემა',
    about_value3_title: 'ხარისხი',
    about_value3_text: 'ყოველ ბოთლში — მხოლოდ საუკეთესო'
  },
  products: [
    {
      id: 'saperavi-reserve',
      name: 'საფერავი რეზერვი',
      year: 2019,
      type: 'red',
      category: 'წითელი მშრალი',
      price: 85,
      grape: 'საფერავი',
      region: 'კახეთი',
      description: 'მუხის კასრში 18 თვით დაძველებული პრემიუმ საფერავი.',
      aroma: 'შავი ალუბალი, მაყვალი, ვანილი',
      taste: 'სრულსხეულიანი, ხავერდოვანი ტანინები',
      pairing: 'წითელი ხორცი, ყველი',
      alcohol: '14.5%',
      temperature: '16-18°C',
      image_url: '',
      image_path: ''
    }
  ],
  contentEdits: {}
};

let firebaseApp = null;
let auth = null;
let db = null;
let storage = null;
let docRef = null;
let unsubscribeState = null;

let state = loadStateFromLocal();
let editingProductId = null;
let pendingProductFile = null;
let pendingLogoFile = null;
let pendingBottleFile = null;
const pendingHomeCardFiles = {
  card1: null,
  card2: null,
  card3: null,
  stat1: null,
  stat2: null,
  stat3: null,
  stat4: null
};
const pendingAboutPhotoFiles = {
  photo1: null,
  photo2: null,
  photo3: null
};
let initialized = false;

const tabs = Array.from(document.querySelectorAll('.tab'));
const panels = {
  settings: document.getElementById('tab-settings'),
  home: document.getElementById('tab-home'),
  about: document.getElementById('tab-about'),
  sections: document.getElementById('tab-sections'),
  products: document.getElementById('tab-products'),
  raw: document.getElementById('tab-raw')
};

const authCard = document.getElementById('auth-card');
const adminMain = document.getElementById('admin-main');
const authMsg = document.getElementById('auth-msg');
const logoutBtn = document.getElementById('logout-btn');

const settingsForm = document.getElementById('settings-form');
const settingsMsg = document.getElementById('settings-msg');
const sectionsForm = document.getElementById('sections-form');
const sectionsMsg = document.getElementById('sections-msg');
const homeForm = document.getElementById('home-form');
const homeMsg = document.getElementById('home-msg');
const aboutForm = document.getElementById('about-form');
const aboutMsg = document.getElementById('about-msg');
const productsForm = document.getElementById('products-form');
const productsMsg = document.getElementById('products-msg');
const itemsList = document.getElementById('items-list');
const productImageInput = document.getElementById('product_image');
const productImagePreview = document.getElementById('product-image-preview');
const logoInput = document.getElementById('logo_upload');
const bottleInput = document.getElementById('bottle_upload');
const logoPreview = document.getElementById('logo-preview');
const bottlePreview = document.getElementById('bottle-preview');
const rawJson = document.getElementById('raw-json');
const rawMsg = document.getElementById('raw-msg');
const productsListPanel = document.getElementById('products-list-panel');
const homeCard1ImageFile = document.getElementById('home_card1_image_file');
const homeCard2ImageFile = document.getElementById('home_card2_image_file');
const homeCard3ImageFile = document.getElementById('home_card3_image_file');
const homeStat1ImageFile = document.getElementById('home_stat1_image_file');
const homeStat2ImageFile = document.getElementById('home_stat2_image_file');
const homeStat3ImageFile = document.getElementById('home_stat3_image_file');
const homeStat4ImageFile = document.getElementById('home_stat4_image_file');
const homeCard1ImagePreview = document.getElementById('home-card1-image-preview');
const homeCard2ImagePreview = document.getElementById('home-card2-image-preview');
const homeCard3ImagePreview = document.getElementById('home-card3-image-preview');
const homeStat1ImagePreview = document.getElementById('home-stat1-image-preview');
const homeStat2ImagePreview = document.getElementById('home-stat2-image-preview');
const homeStat3ImagePreview = document.getElementById('home-stat3-image-preview');
const homeStat4ImagePreview = document.getElementById('home-stat4-image-preview');
const aboutPhoto1ImageFile = document.getElementById('about_photo1_image_file');
const aboutPhoto2ImageFile = document.getElementById('about_photo2_image_file');
const aboutPhoto3ImageFile = document.getElementById('about_photo3_image_file');
const aboutPhoto1ImagePreview = document.getElementById('about-photo1-image-preview');
const aboutPhoto2ImagePreview = document.getElementById('about-photo2-image-preview');
const aboutPhoto3ImagePreview = document.getElementById('about-photo3-image-preview');
const saveStatus = document.getElementById('save-status');

boot();

function applyLiquidButtons(root = document) {
  const nodes = root.querySelectorAll('button, a.primary, a.ghost, .tab');
  nodes.forEach((el) => {
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

function boot() {
  try {
    initFirebase();
  } catch (error) {
    setAuthMessage(error.message);
  }

  bindAuth();
  onAuth();
}

function initFirebase() {
  if (!window.firebase) {
    throw new Error('Firebase SDK ვერ ჩაიტვირთა');
  }

  if (!window.firebase.apps.length) {
    firebaseApp = window.firebase.initializeApp(FIREBASE_CONFIG);
  } else {
    firebaseApp = window.firebase.app();
  }

  try {
    if (window.firebase.analytics) {
      window.firebase.analytics();
    }
  } catch {
    // optional
  }

  auth = window.firebase.auth();
  db = window.firebase.firestore();
  try {
    storage = window.firebase.storage();
  } catch {
    storage = null;
  }
  docRef = db.collection(SITE_DOC_PATH.collection).doc(SITE_DOC_PATH.doc);
}

function bindAuth() {
  const googleBtn = document.getElementById('google-login');
  const emailForm = document.getElementById('email-login-form');
  const signupBtn = document.getElementById('signup-btn');

  googleBtn?.addEventListener('click', async () => {
    try {
      setAuthMessage('ავტორიზაცია...');
      const provider = new window.firebase.auth.GoogleAuthProvider();
      await auth.signInWithPopup(provider);
      setAuthMessage('');
    } catch (error) {
      setAuthMessage(mapAuthError(error));
    }
  });

  emailForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;

    try {
      setAuthMessage('შესვლა...');
      await auth.signInWithEmailAndPassword(email, password);
      setAuthMessage('');
    } catch (error) {
      setAuthMessage(mapAuthError(error));
    }
  });

  signupBtn?.addEventListener('click', async () => {
    const email = document.getElementById('auth-email').value.trim();
    const password = document.getElementById('auth-password').value;
    if (!email || !password) {
      setAuthMessage('შეიყვანე email და password');
      return;
    }

    try {
      setAuthMessage('რეგისტრაცია...');
      await auth.createUserWithEmailAndPassword(email, password);
      setAuthMessage('მომხმარებელი შექმნილია');
    } catch (error) {
      setAuthMessage(mapAuthError(error));
    }
  });

  logoutBtn?.addEventListener('click', async () => {
    try {
      await auth.signOut();
    } catch {
      // noop
    }
  });
}

function onAuth() {
  if (!auth) return;

  auth.onAuthStateChanged(async (user) => {
    if (!user) {
      if (unsubscribeState) {
        unsubscribeState();
        unsubscribeState = null;
      }
      window.location.href = './login.html';
      return;
    }

    if (authCard) authCard.classList.add('hidden');
    adminMain.classList.remove('hidden');

    if (!initialized) {
      initAdminUi();
      initialized = true;
    }

    await loadCloudState(true);
    subscribeCloudState();
  });
}

function initAdminUi() {
  bindTabs();
  bindForms();
  fillSettingsForm();
  fillHomeForm();
  fillAboutForm();
  fillSectionsForm();
  renderProductsList();
  refreshRawEditor();
  applyLiquidButtons(document);
}

function deepMerge(base, incoming) {
  const out = structuredClone(base);
  if (!incoming || typeof incoming !== 'object') return out;

  for (const key of Object.keys(incoming)) {
    const incomingValue = incoming[key];
    if (
      incomingValue &&
      typeof incomingValue === 'object' &&
      !Array.isArray(incomingValue) &&
      out[key] &&
      typeof out[key] === 'object' &&
      !Array.isArray(out[key])
    ) {
      out[key] = deepMerge(out[key], incomingValue);
    } else {
      out[key] = incomingValue;
    }
  }

  return out;
}

function normalizeState(input) {
  const merged = deepMerge(defaultState, input || {});
  merged.updatedAtClient = Number(merged.updatedAtClient || 0) || 0;
  if (!merged.siteMeta) merged.siteMeta = structuredClone(defaultState.siteMeta);
  if (!merged.siteMeta.cloudinary_cloud_name || !String(merged.siteMeta.cloudinary_cloud_name).trim()) {
    merged.siteMeta.cloudinary_cloud_name = defaultState.siteMeta.cloudinary_cloud_name;
  }
  if (!merged.siteMeta.cloudinary_upload_preset || !String(merged.siteMeta.cloudinary_upload_preset).trim()) {
    merged.siteMeta.cloudinary_upload_preset = defaultState.siteMeta.cloudinary_upload_preset;
  }
  if (!Array.isArray(merged.products)) {
    merged.products = structuredClone(defaultState.products);
  }
  merged.products = merged.products.map((item) => ({
    ...item,
    image_url: item.image_url || '',
    image_path: item.image_path || ''
  }));
  return merged;
}

function sanitizeCloudData(raw) {
  if (!raw || typeof raw !== 'object') return {};
  const { updatedAt, ...rest } = raw;
  return rest;
}

function loadStateFromLocal() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    return normalizeState(JSON.parse(raw));
  } catch {
    return structuredClone(defaultState);
  }
}

function saveStateToLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getStateVersion(input = state) {
  return Number(input?.updatedAtClient || 0) || 0;
}

function stampStateVersion() {
  const version = Date.now();
  state.updatedAtClient = version;
  return version;
}

function setSaveStatus(message, isError = false) {
  if (!saveStatus) return;
  saveStatus.textContent = message;
  saveStatus.style.color = isError ? '#b91c1c' : '#14532d';
}

async function saveState(message = 'შენახულია') {
  const version = stampStateVersion();
  saveStateToLocal();
  const nowText = new Date().toLocaleString('ka-GE');
  settingsMsg.textContent = message;
  sectionsMsg.textContent = message;
  productsMsg.textContent = message;
  homeMsg.textContent = message;
  if (aboutMsg) aboutMsg.textContent = message;
  setSaveStatus(`✅ ${message} (${nowText})`);
  refreshRawEditor();

  if (!docRef) return;

  const payload = JSON.parse(JSON.stringify(state));
  payload.updatedAt = window.firebase.firestore.FieldValue.serverTimestamp();
  payload.updatedAtClient = version;
  try {
    await docRef.set(payload, { merge: true });
    setSaveStatus(`✅ მონაცემები შენახულია Firebase-ში (${nowText})`);
  } catch (error) {
    setSaveStatus(`⚠️ ლოკალურად შენახულია, Firebase sync ვერ შესრულდა: ${error.message}`, true);
    throw error;
  }
}

async function loadCloudState(applyToUi = false) {
  if (!docRef) return;
  const snap = await docRef.get();
  if (!snap.exists) {
    if (applyToUi) {
      applyState(normalizeState(state));
      saveStateToLocal();
    }
    return;
  }

  const cloudState = normalizeState(sanitizeCloudData(snap.data()));
  if (getStateVersion(cloudState) < getStateVersion(state)) {
    return;
  }
  applyState(cloudState);
}

function subscribeCloudState() {
  if (!docRef) return;
  if (unsubscribeState) unsubscribeState();

  unsubscribeState = docRef.onSnapshot((snap) => {
    if (!snap.exists) return;
    const cloudState = normalizeState(sanitizeCloudData(snap.data()));
    if (getStateVersion(cloudState) < getStateVersion(state)) return;
    applyState(cloudState);
  }, (error) => {
    setAuthMessage(`Sync error: ${error.message}`);
  });
}

function applyState(nextState) {
  state = normalizeState(nextState);
  saveStateToLocal();

  if (!initialized) return;

  fillSettingsForm();
  fillHomeForm();
  fillAboutForm();
  fillSectionsForm();
  renderProductsList();
  refreshRawEditor();
}

function bindTabs() {
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.dataset.tab;
      Object.keys(panels).forEach((panelKey) => {
        panels[panelKey].classList.toggle('hidden', panelKey !== key);
      });
      if (productsListPanel) {
        productsListPanel.classList.toggle('hidden', key !== 'products');
      }
    });
  });
  if (productsListPanel) productsListPanel.classList.add('hidden');
}

function bindForms() {
  settingsForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData(settingsForm);

      state.config.hero_title = fd.get('hero_title') || defaultState.config.hero_title;
      state.config.hero_subtitle = fd.get('hero_subtitle') || defaultState.config.hero_subtitle;
      state.config.about_title = fd.get('about_title') || defaultState.config.about_title;
      state.config.primary_action_color = fd.get('primary_color') || defaultState.config.primary_action_color;
      state.config.background_color = state.config.primary_action_color;
      state.config.text_color = fd.get('text_color') || defaultState.config.text_color;

      state.siteMeta.contact_email = fd.get('contact_email') || defaultState.siteMeta.contact_email;
      state.siteMeta.contact_phone = fd.get('contact_phone') || defaultState.siteMeta.contact_phone;
      state.siteMeta.contact_address = fd.get('contact_address') || defaultState.siteMeta.contact_address;
      state.siteMeta.instagram_link = fd.get('instagram_link') || defaultState.siteMeta.instagram_link;
      state.siteMeta.facebook_link = fd.get('facebook_link') || defaultState.siteMeta.facebook_link;
      state.siteMeta.order_notify_email = fd.get('order_notify_email') || defaultState.siteMeta.order_notify_email;
      state.siteMeta.custom_label_price = parseFloat(fd.get('custom_label_price') || `${defaultState.siteMeta.custom_label_price}`) || defaultState.siteMeta.custom_label_price;
      state.siteMeta.cloudinary_cloud_name = fd.get('cloudinary_cloud_name') || defaultState.siteMeta.cloudinary_cloud_name;
      state.siteMeta.cloudinary_upload_preset = fd.get('cloudinary_upload_preset') || defaultState.siteMeta.cloudinary_upload_preset;
      const logoUrlText = (fd.get('logo_url_text') || '').toString().trim();
      const bottleUrlText = (fd.get('hero_bottle_url_text') || '').toString().trim();
      if (logoUrlText) {
        state.siteMeta.logo_url = logoUrlText;
        state.siteMeta.logo_path = '';
      }
      if (bottleUrlText) {
        state.siteMeta.hero_bottle_url = bottleUrlText;
        state.siteMeta.hero_bottle_path = '';
      }

      if (pendingLogoFile) {
        if (state.siteMeta.logo_path) await safeDeleteFile(state.siteMeta.logo_path);
        const uploadedLogo = await uploadFile(pendingLogoFile, 'site/logo');
        state.siteMeta.logo_url = uploadedLogo.url;
        state.siteMeta.logo_path = uploadedLogo.path;
        pendingLogoFile = null;
      }

      if (pendingBottleFile) {
        if (state.siteMeta.hero_bottle_path) await safeDeleteFile(state.siteMeta.hero_bottle_path);
        const uploadedBottle = await uploadFile(pendingBottleFile, 'site/bottle');
        state.siteMeta.hero_bottle_url = uploadedBottle.url;
        state.siteMeta.hero_bottle_path = uploadedBottle.path;
        pendingBottleFile = null;
      }

      await saveState('ძირითადი პარამეტრები შენახულია');
      fillSettingsForm();
    } catch (error) {
      settingsMsg.textContent = error.message;
    }
  });

  sectionsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(sectionsForm);
    state.siteMeta.sections.home = !!fd.get('home');
    state.siteMeta.sections.shop = !!fd.get('shop');
    state.siteMeta.sections.about = !!fd.get('about');
    state.siteMeta.sections.contact = !!fd.get('contact');
    state.siteMeta.sections.designer = !!fd.get('designer');
    state.siteMeta.sections.cart = !!fd.get('cart');

    try {
      await saveState('სექციების პარამეტრები შენახულია');
    } catch (error) {
      sectionsMsg.textContent = error.message;
    }
  });

  homeForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fd = new FormData(homeForm);
    for (const key of Object.keys(defaultState.homeContent)) {
      if (key.endsWith('_image') || key.endsWith('_image_path')) continue;
      const field = `home_${key}`;
      const value = fd.get(field);
      if (value !== null) {
        state.homeContent[key] = value.toString();
      }
    }

    try {
      const imageConfigs = [
        { id: 'card1', imageKey: 'card1_image', pathKey: 'card1_image_path', urlField: 'home_card1_image_url', folder: 'home/cards' },
        { id: 'card2', imageKey: 'card2_image', pathKey: 'card2_image_path', urlField: 'home_card2_image_url', folder: 'home/cards' },
        { id: 'card3', imageKey: 'card3_image', pathKey: 'card3_image_path', urlField: 'home_card3_image_url', folder: 'home/cards' },
        { id: 'stat1', imageKey: 'stat1_image', pathKey: 'stat1_image_path', urlField: 'home_stat1_image_url', folder: 'home/stats' },
        { id: 'stat2', imageKey: 'stat2_image', pathKey: 'stat2_image_path', urlField: 'home_stat2_image_url', folder: 'home/stats' },
        { id: 'stat3', imageKey: 'stat3_image', pathKey: 'stat3_image_path', urlField: 'home_stat3_image_url', folder: 'home/stats' },
        { id: 'stat4', imageKey: 'stat4_image', pathKey: 'stat4_image_path', urlField: 'home_stat4_image_url', folder: 'home/stats' }
      ];

      for (const cfg of imageConfigs) {
        const manualUrl = (fd.get(cfg.urlField) || '').toString().trim();
        if (manualUrl) {
          if (state.homeContent[cfg.pathKey]) await safeDeleteFile(state.homeContent[cfg.pathKey]);
          state.homeContent[cfg.imageKey] = manualUrl;
          state.homeContent[cfg.pathKey] = '';
        }

        const pendingFile = pendingHomeCardFiles[cfg.id];
        if (pendingFile) {
          if (state.homeContent[cfg.pathKey]) await safeDeleteFile(state.homeContent[cfg.pathKey]);
          const uploaded = await uploadFile(pendingFile, cfg.folder);
          state.homeContent[cfg.imageKey] = uploaded.url;
          state.homeContent[cfg.pathKey] = uploaded.path;
          pendingHomeCardFiles[cfg.id] = null;
        }
      }

      await saveState('მთავარი გვერდის კონტენტი შენახულია');
      fillHomeForm();
    } catch (error) {
      homeMsg.textContent = error.message;
    }
  });

  if (aboutForm) {
    aboutForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(aboutForm);
      for (const key of Object.keys(defaultState.aboutContent)) {
        if (key.endsWith('_image') || key.endsWith('_image_path')) continue;
        const value = fd.get(key);
        if (value !== null) state.aboutContent[key] = value.toString();
      }
      try {
        const imageConfigs = [
          { id: 'photo1', imageKey: 'about_photo1_image', pathKey: 'about_photo1_image_path', urlField: 'about_photo1_image_url', folder: 'about/section1' },
          { id: 'photo2', imageKey: 'about_photo2_image', pathKey: 'about_photo2_image_path', urlField: 'about_photo2_image_url', folder: 'about/section2' },
          { id: 'photo3', imageKey: 'about_photo3_image', pathKey: 'about_photo3_image_path', urlField: 'about_photo3_image_url', folder: 'about/section3' }
        ];

        for (const cfg of imageConfigs) {
          const manualUrl = (fd.get(cfg.urlField) || '').toString().trim();
          if (manualUrl) {
            if (state.aboutContent[cfg.pathKey]) await safeDeleteFile(state.aboutContent[cfg.pathKey]);
            state.aboutContent[cfg.imageKey] = manualUrl;
            state.aboutContent[cfg.pathKey] = '';
          }

          const pendingFile = pendingAboutPhotoFiles[cfg.id];
          if (pendingFile) {
            if (state.aboutContent[cfg.pathKey]) await safeDeleteFile(state.aboutContent[cfg.pathKey]);
            const uploaded = await uploadFile(pendingFile, cfg.folder);
            state.aboutContent[cfg.imageKey] = uploaded.url;
            state.aboutContent[cfg.pathKey] = uploaded.path;
            pendingAboutPhotoFiles[cfg.id] = null;
          }
        }

        await saveState('About გვერდის კონტენტი შენახულია');
        fillAboutForm();
      } catch (error) {
        if (aboutMsg) aboutMsg.textContent = error.message;
      }
    });
  }

  productsForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData(productsForm);
      const existing = editingProductId
        ? state.products.find((item) => item.id === editingProductId) || null
        : null;

      const product = {
        id: editingProductId || `custom-${Date.now()}`,
        name: (fd.get('name') || '').toString().trim(),
        year: ((fd.get('year') || '').toString().trim() ? parseInt(fd.get('year'), 10) : ''),
        type: (fd.get('type') || 'red').toString(),
        category: (fd.get('category') || '').toString().trim(),
        price: parseFloat(fd.get('price') || '0') || 0,
        grape: (fd.get('grape') || '').toString().trim(),
        region: (fd.get('region') || '').toString().trim(),
        description: (fd.get('description') || '').toString().trim(),
        aroma: (fd.get('aroma') || '').toString().trim(),
        taste: (fd.get('taste') || '').toString().trim(),
        pairing: (fd.get('pairing') || '').toString().trim(),
        alcohol: (fd.get('alcohol') || '').toString().trim(),
        temperature: (fd.get('temperature') || '').toString().trim(),
        image_url: existing?.image_url || '',
        image_path: existing?.image_path || ''
      };

      if (!product.name) {
        productsMsg.textContent = 'სახელი აუცილებელია';
        return;
      }

      if (pendingProductFile) {
        if (existing?.image_path) await safeDeleteFile(existing.image_path);
        const uploadedProductImage = await uploadFile(pendingProductFile, 'products');
        product.image_url = uploadedProductImage.url;
        product.image_path = uploadedProductImage.path;
      }

      if (editingProductId) {
        const idx = state.products.findIndex((p) => p.id === editingProductId);
        if (idx >= 0) state.products[idx] = product;
      } else {
        state.products.push(product);
      }

      resetProductForm();
      renderProductsList();
      await saveState('პროდუქტი შენახულია');
    } catch (error) {
      productsMsg.textContent = error.message;
    }
  });

  document.getElementById('products-reset').addEventListener('click', resetProductForm);

  productImageInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    pendingProductFile = file;
    setPreview(productImagePreview, URL.createObjectURL(file));
  });

  logoInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    pendingLogoFile = file;
    setPreview(logoPreview, URL.createObjectURL(file));
  });

  bottleInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    pendingBottleFile = file;
    setPreview(bottlePreview, URL.createObjectURL(file));
  });

  const imageInputMaps = [
    { input: homeCard1ImageFile, key: 'card1', preview: homeCard1ImagePreview },
    { input: homeCard2ImageFile, key: 'card2', preview: homeCard2ImagePreview },
    { input: homeCard3ImageFile, key: 'card3', preview: homeCard3ImagePreview },
    { input: homeStat1ImageFile, key: 'stat1', preview: homeStat1ImagePreview },
    { input: homeStat2ImageFile, key: 'stat2', preview: homeStat2ImagePreview },
    { input: homeStat3ImageFile, key: 'stat3', preview: homeStat3ImagePreview },
    { input: homeStat4ImageFile, key: 'stat4', preview: homeStat4ImagePreview }
  ];

  imageInputMaps.forEach(({ input, key, preview }) => {
    input?.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      pendingHomeCardFiles[key] = file;
      if (preview) setPreview(preview, URL.createObjectURL(file));
    });
  });

  const aboutImageInputMaps = [
    { input: aboutPhoto1ImageFile, key: 'photo1', preview: aboutPhoto1ImagePreview },
    { input: aboutPhoto2ImageFile, key: 'photo2', preview: aboutPhoto2ImagePreview },
    { input: aboutPhoto3ImageFile, key: 'photo3', preview: aboutPhoto3ImagePreview }
  ];

  aboutImageInputMaps.forEach(({ input, key, preview }) => {
    input?.addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) return;
      pendingAboutPhotoFiles[key] = file;
      if (preview) setPreview(preview, URL.createObjectURL(file));
    });
  });

  document.getElementById('apply-raw').addEventListener('click', async () => {
    try {
      const parsed = JSON.parse(rawJson.value);
      applyState(normalizeState(parsed));
      await saveState('RAW JSON გამოყენებულია');
      rawMsg.textContent = 'RAW JSON გამოყენებულია';
    } catch {
      rawMsg.textContent = 'არასწორი JSON';
    }
  });

  document.getElementById('download-backup').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `matsi-admin-backup-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  });
}

function setPreview(element, src) {
  element.src = src;
  element.classList.remove('hidden');
}

function fillSettingsForm() {
  settingsForm.hero_title.value = state.config.hero_title || '';
  settingsForm.hero_subtitle.value = state.config.hero_subtitle || '';
  settingsForm.about_title.value = state.config.about_title || '';
  settingsForm.contact_email.value = state.siteMeta.contact_email || '';
  settingsForm.contact_phone.value = state.siteMeta.contact_phone || '';
  settingsForm.contact_address.value = state.siteMeta.contact_address || '';
  settingsForm.instagram_link.value = state.siteMeta.instagram_link || '';
  settingsForm.facebook_link.value = state.siteMeta.facebook_link || '';
  settingsForm.order_notify_email.value = state.siteMeta.order_notify_email || defaultState.siteMeta.order_notify_email;
  settingsForm.custom_label_price.value = state.siteMeta.custom_label_price || defaultState.siteMeta.custom_label_price;
  settingsForm.cloudinary_cloud_name.value = state.siteMeta.cloudinary_cloud_name || defaultState.siteMeta.cloudinary_cloud_name;
  settingsForm.cloudinary_upload_preset.value = state.siteMeta.cloudinary_upload_preset || defaultState.siteMeta.cloudinary_upload_preset;
  settingsForm.logo_url_text.value = state.siteMeta.logo_url || '';
  settingsForm.hero_bottle_url_text.value = state.siteMeta.hero_bottle_url || '';
  settingsForm.primary_color.value = state.config.primary_action_color || '#722f37';
  settingsForm.text_color.value = state.config.text_color || '#3d1219';

  if (state.siteMeta.logo_url) {
    setPreview(logoPreview, state.siteMeta.logo_url);
  } else {
    logoPreview.classList.add('hidden');
  }

  if (state.siteMeta.hero_bottle_url) {
    setPreview(bottlePreview, state.siteMeta.hero_bottle_url);
  } else {
    bottlePreview.classList.add('hidden');
  }
}

function fillHomeForm() {
  const hc = state.homeContent || {};
  for (const key of Object.keys(defaultState.homeContent)) {
    if (key.endsWith('_image') || key.endsWith('_image_path')) continue;
    const input = homeForm.elements.namedItem(`home_${key}`);
    if (input) input.value = hc[key] ?? defaultState.homeContent[key];
  }

  const urlMappings = [
    { field: 'home_card1_image_url', key: 'card1_image', preview: homeCard1ImagePreview },
    { field: 'home_card2_image_url', key: 'card2_image', preview: homeCard2ImagePreview },
    { field: 'home_card3_image_url', key: 'card3_image', preview: homeCard3ImagePreview },
    { field: 'home_stat1_image_url', key: 'stat1_image', preview: homeStat1ImagePreview },
    { field: 'home_stat2_image_url', key: 'stat2_image', preview: homeStat2ImagePreview },
    { field: 'home_stat3_image_url', key: 'stat3_image', preview: homeStat3ImagePreview },
    { field: 'home_stat4_image_url', key: 'stat4_image', preview: homeStat4ImagePreview }
  ];

  urlMappings.forEach(({ field, key, preview }) => {
    const input = homeForm.elements.namedItem(field);
    const imageUrl = hc[key] || '';
    if (input) input.value = imageUrl;
    if (preview) {
      if (imageUrl) {
        setPreview(preview, imageUrl);
      } else {
        preview.classList.add('hidden');
      }
    }
  });
}

function fillAboutForm() {
  if (!aboutForm) return;
  const ac = state.aboutContent || {};
  for (const key of Object.keys(defaultState.aboutContent)) {
    if (key.endsWith('_image') || key.endsWith('_image_path')) continue;
    const input = aboutForm.elements.namedItem(key);
    if (input) input.value = ac[key] ?? defaultState.aboutContent[key];
  }

  const urlMappings = [
    { field: 'about_photo1_image_url', key: 'about_photo1_image', preview: aboutPhoto1ImagePreview },
    { field: 'about_photo2_image_url', key: 'about_photo2_image', preview: aboutPhoto2ImagePreview },
    { field: 'about_photo3_image_url', key: 'about_photo3_image', preview: aboutPhoto3ImagePreview }
  ];

  urlMappings.forEach(({ field, key, preview }) => {
    const input = aboutForm.elements.namedItem(field);
    const imageUrl = ac[key] || '';
    if (input) input.value = imageUrl;
    if (!preview) return;
    if (imageUrl) {
      setPreview(preview, imageUrl);
    } else {
      preview.classList.add('hidden');
    }
  });
}

function fillSectionsForm() {
  const sections = state.siteMeta.sections || {};
  sectionsForm.home.checked = !!sections.home;
  sectionsForm.shop.checked = !!sections.shop;
  sectionsForm.about.checked = !!sections.about;
  sectionsForm.contact.checked = !!sections.contact;
  sectionsForm.designer.checked = !!sections.designer;
  sectionsForm.cart.checked = !!sections.cart;
}

function resetProductForm() {
  productsForm.reset();
  editingProductId = null;
  pendingProductFile = null;
  productImageInput.value = '';
  productImagePreview.src = '';
  productImagePreview.classList.add('hidden');
}

function renderProductsList() {
  itemsList.innerHTML = state.products.map((p) => {
    const thumb = p.image_url
      ? `<img class="thumb" src="${p.image_url}" alt="${escapeHtml(p.name)}">`
      : `<div class="thumb"></div>`;

    return `
      <article class="item">
        ${thumb}
        <div>
          <h3>${escapeHtml(p.name)} ${p.year || ''}</h3>
          <p>₾${p.price} • ${escapeHtml(p.type || '')}</p>
        </div>
        <div class="actions">
          <button class="ghost" data-action="edit" data-id="${p.id}" type="button">Edit</button>
          <button class="ghost" data-action="delete" data-id="${p.id}" type="button">Delete</button>
        </div>
      </article>
    `;
  }).join('');

  itemsList.querySelectorAll('button[data-action]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id;
      if (btn.dataset.action === 'delete') {
        const target = state.products.find((p) => p.id === id);
        if (target?.image_path) await safeDeleteFile(target.image_path);
        state.products = state.products.filter((p) => p.id !== id);
        if (editingProductId === id) resetProductForm();
        renderProductsList();
        await saveState('პროდუქტი წაიშალა');
      } else {
        const p = state.products.find((item) => item.id === id);
        if (!p) return;
        editingProductId = p.id;
        pendingProductFile = null;
        productsForm.name.value = p.name || '';
        productsForm.year.value = p.year || '';
        productsForm.price.value = p.price || '';
        productsForm.type.value = p.type || 'red';
        productsForm.category.value = p.category || '';
        productsForm.grape.value = p.grape || '';
        productsForm.region.value = p.region || '';
        productsForm.description.value = p.description || '';
        productsForm.aroma.value = p.aroma || '';
        productsForm.taste.value = p.taste || '';
        productsForm.pairing.value = p.pairing || '';
        productsForm.alcohol.value = p.alcohol || '';
        productsForm.temperature.value = p.temperature || '';
        if (p.image_url) {
          setPreview(productImagePreview, p.image_url);
        } else {
          productImagePreview.classList.add('hidden');
        }
        productsMsg.textContent = `Editing: ${p.name}`;
      }
    });
  });
  applyLiquidButtons(itemsList);
}

function refreshRawEditor() {
  rawJson.value = JSON.stringify(state, null, 2);
}

function mapAuthError(error) {
  if (!error?.code) return error?.message || 'ავტორიზაციის შეცდომა';
  const map = {
    'auth/invalid-email': 'არასწორი ელფოსტა',
    'auth/user-not-found': 'მომხმარებელი ვერ მოიძებნა',
    'auth/wrong-password': 'არასწორი პაროლი',
    'auth/invalid-credential': 'არასწორი მონაცემები',
    'auth/too-many-requests': 'ძალიან ბევრი მცდელობა. სცადე მოგვიანებით.',
    'auth/email-already-in-use': 'ეს ელფოსტა უკვე გამოყენებულია',
    'auth/weak-password': 'პაროლი ძალიან სუსტია (მინ. 6 სიმბოლო)'
  };
  return map[error.code] || error.message || 'ავტორიზაციის შეცდომა';
}

function setAuthMessage(message) {
  if (authMsg) authMsg.textContent = message || '';
}

async function uploadFile(file, folder) {
  const cloudName = (state.siteMeta.cloudinary_cloud_name || '').trim();
  const uploadPreset = (state.siteMeta.cloudinary_upload_preset || '').trim();

  if (!cloudName || !uploadPreset) {
    throw new Error('Cloudinary პარამეტრები შეავსე ადმინში (Cloud Name + Upload Preset)');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);
  formData.append('folder', `matsi-admin/${folder}`);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${encodeURIComponent(cloudName)}/image/upload`, {
    method: 'POST',
    body: formData
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.secure_url) {
    throw new Error(result.error?.message || 'Cloudinary ატვირთვა ვერ მოხერხდა');
  }

  return {
    url: result.secure_url,
    path: result.public_id ? `cloudinary:${result.public_id}` : ''
  };
}

async function safeDeleteFile(path) {
  if (!path) return;
  if (String(path).startsWith('cloudinary:')) return;
  if (!storage) return;
  try {
    await storage.ref(path).delete();
  } catch {
    // ignore delete errors
  }
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
