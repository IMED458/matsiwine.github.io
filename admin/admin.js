const STORAGE_KEY = 'matsi_admin_state_v2';

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
    card2_category: 'ქვევრის ღვინო',
    card2_title: 'მწვანე ქვევრი 2021',
    card2_desc: 'ქვევრში დაყენებული, ქარვისფერი, მდიდარი არომატით',
    card2_price: '₾65',
    card2_btn: 'დამატება',
    card3_category: 'ნახევრად ტკბილი',
    card3_title: 'კინძმარაული 2020',
    card3_desc: 'კლასიკური კახური, მაყვლისა და ალუბლის ნოტებით',
    card3_price: '₾55',
    card3_btn: 'დამატება',
    story_kicker: 'ჩვენი ფილოსოფია',
    story_title: 'მიწიდან სუფრამდე',
    story_text: 'MATSI WINE — ეს არის ოჯახური მეღვინეობის თანამედროვე გაგრძელება. ჩვენ ვაერთიანებთ ქვევრის უძველეს ტრადიციას ევროპული მეღვინეობის თანამედროვე მიდგომებთან, რათა შევქმნათ ღვინო, რომელიც მოგვითხრობს ქართული მიწის ისტორიას.',
    story_btn: 'მეტის გაგება',
    stat1_value: '8000+',
    stat1_label: 'წლიანი ტრადიცია',
    stat2_value: '525',
    stat2_label: 'ქართული ჯიში',
    stat3_value: '100%',
    stat3_label: 'ორგანული',
    stat4_value: '🏆',
    stat4_label: 'საერთაშორისო ჯილდოები'
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
      image_url: ''
    }
  ],
  contentEdits: {}
};

let state = loadState();
let editingProductId = null;
let pendingImageDataUrl = null;

const tabs = Array.from(document.querySelectorAll('.tab'));
const panels = {
  settings: document.getElementById('tab-settings'),
  home: document.getElementById('tab-home'),
  sections: document.getElementById('tab-sections'),
  products: document.getElementById('tab-products'),
  raw: document.getElementById('tab-raw')
};

const settingsForm = document.getElementById('settings-form');
const settingsMsg = document.getElementById('settings-msg');
const sectionsForm = document.getElementById('sections-form');
const sectionsMsg = document.getElementById('sections-msg');
const homeForm = document.getElementById('home-form');
const homeMsg = document.getElementById('home-msg');
const productsForm = document.getElementById('products-form');
const productsMsg = document.getElementById('products-msg');
const itemsList = document.getElementById('items-list');
const productImageInput = document.getElementById('product_image');
const productImagePreview = document.getElementById('product-image-preview');
const rawJson = document.getElementById('raw-json');
const rawMsg = document.getElementById('raw-msg');

init();

function init() {
  bindTabs();
  bindForms();
  fillSettingsForm();
  fillHomeForm();
  fillSectionsForm();
  renderProductsList();
  refreshRawEditor();
}

function deepMerge(base, incoming) {
  const out = structuredClone(base);
  if (!incoming || typeof incoming !== 'object') return out;
  for (const k of Object.keys(incoming)) {
    if (incoming[k] && typeof incoming[k] === 'object' && !Array.isArray(incoming[k]) && out[k] && typeof out[k] === 'object') {
      out[k] = deepMerge(out[k], incoming[k]);
    } else {
      out[k] = incoming[k];
    }
  }
  return out;
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return structuredClone(defaultState);
  try {
    const parsed = JSON.parse(raw);
    const merged = deepMerge(defaultState, parsed);
    if (!Array.isArray(merged.products)) merged.products = structuredClone(defaultState.products);
    return merged;
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState(message = 'შენახულია') {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  settingsMsg.textContent = message;
  sectionsMsg.textContent = message;
  productsMsg.textContent = message;
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
    });
  });
}

function bindForms() {
  settingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
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

    saveState('ძირითადი პარამეტრები შენახულია');
  });

  sectionsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(sectionsForm);
    state.siteMeta.sections.home = !!fd.get('home');
    state.siteMeta.sections.shop = !!fd.get('shop');
    state.siteMeta.sections.about = !!fd.get('about');
    state.siteMeta.sections.contact = !!fd.get('contact');
    state.siteMeta.sections.designer = !!fd.get('designer');
    state.siteMeta.sections.cart = !!fd.get('cart');
    saveState('სექციების პარამეტრები შენახულია');
  });

  homeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(homeForm);
    for (const key of Object.keys(defaultState.homeContent)) {
      const field = `home_${key}`;
      const value = fd.get(field);
      if (value !== null) {
        state.homeContent[key] = value.toString();
      }
    }
    saveState('მთავარი გვერდის კონტენტი შენახულია');
    homeMsg.textContent = 'მთავარი გვერდის კონტენტი შენახულია';
  });

  productsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(productsForm);
    const product = {
      id: editingProductId || `custom-${Date.now()}`,
      name: (fd.get('name') || '').toString().trim(),
      year: parseInt(fd.get('year') || '0', 10) || new Date().getFullYear(),
      type: (fd.get('type') || 'red').toString(),
      category: (fd.get('category') || 'სპეციალური').toString(),
      price: parseFloat(fd.get('price') || '0') || 0,
      grape: (fd.get('grape') || 'საფერავი').toString(),
      region: (fd.get('region') || 'კახეთი').toString(),
      description: (fd.get('description') || '').toString(),
      aroma: (fd.get('aroma') || '').toString(),
      taste: (fd.get('taste') || '').toString(),
      pairing: (fd.get('pairing') || '').toString(),
      alcohol: (fd.get('alcohol') || '').toString(),
      temperature: (fd.get('temperature') || '').toString(),
      image_url: pendingImageDataUrl || getEditingImageUrl(editingProductId)
    };

    if (!product.name || product.price <= 0) {
      productsMsg.textContent = 'სახელი და ფასი აუცილებელია';
      return;
    }

    if (editingProductId) {
      const idx = state.products.findIndex((p) => p.id === editingProductId);
      if (idx >= 0) state.products[idx] = product;
    } else {
      state.products.push(product);
    }

    resetProductForm();
    renderProductsList();
    saveState('პროდუქტი შენახულია');
  });

  document.getElementById('products-reset').addEventListener('click', resetProductForm);

  productImageInput.addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    pendingImageDataUrl = await fileToDataUrl(file);
    productImagePreview.src = pendingImageDataUrl;
    productImagePreview.classList.remove('hidden');
  });

  document.getElementById('apply-raw').addEventListener('click', () => {
    try {
      const parsed = JSON.parse(rawJson.value);
      state = deepMerge(defaultState, parsed);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      fillSettingsForm();
      fillSectionsForm();
      renderProductsList();
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

function fillSettingsForm() {
  settingsForm.hero_title.value = state.config.hero_title || '';
  settingsForm.hero_subtitle.value = state.config.hero_subtitle || '';
  settingsForm.about_title.value = state.config.about_title || '';
  settingsForm.contact_email.value = state.siteMeta.contact_email || '';
  settingsForm.contact_phone.value = state.siteMeta.contact_phone || '';
  settingsForm.contact_address.value = state.siteMeta.contact_address || '';
  settingsForm.instagram_link.value = state.siteMeta.instagram_link || '';
  settingsForm.primary_color.value = state.config.primary_action_color || '#722f37';
  settingsForm.text_color.value = state.config.text_color || '#3d1219';
}

function fillHomeForm() {
  const hc = state.homeContent || {};
  for (const key of Object.keys(defaultState.homeContent)) {
    const input = homeForm.elements.namedItem(`home_${key}`);
    if (input) input.value = hc[key] ?? defaultState.homeContent[key];
  }
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
  pendingImageDataUrl = null;
  productImagePreview.src = '';
  productImagePreview.classList.add('hidden');
}

function getEditingImageUrl(id) {
  if (!id) return '';
  const p = state.products.find((item) => item.id === id);
  return p?.image_url || '';
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
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (btn.dataset.action === 'delete') {
        state.products = state.products.filter((p) => p.id !== id);
        if (editingProductId === id) resetProductForm();
        renderProductsList();
        saveState('პროდუქტი წაიშალა');
      } else {
        const p = state.products.find((item) => item.id === id);
        if (!p) return;
        editingProductId = p.id;
        pendingImageDataUrl = p.image_url || null;
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
          productImagePreview.src = p.image_url;
          productImagePreview.classList.remove('hidden');
        } else {
          productImagePreview.classList.add('hidden');
        }
        productsMsg.textContent = `Editing: ${p.name}`;
      }
    });
  });
}

function refreshRawEditor() {
  rawJson.value = JSON.stringify(state, null, 2);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function escapeHtml(value = '') {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
