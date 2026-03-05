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
    
    let config = { ...defaultConfig };
    let cartItems = [];
    let currentPage = 'home';
    let currentFilter = 'all';
    let isLoading = false;
    
    // Products data
    const products = [
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
    
    // =====================================================
    // DATA SDK INTEGRATION
    // =====================================================
    
    const dataHandler = {
      onDataChanged(data) {
        cartItems = data;
        updateCartUI();
        updateCartCount();
      }
    };
    
    async function initDataSdk() {
      if (window.dataSdk) {
        const result = await window.dataSdk.init(dataHandler);
        if (!result.isOk) {
          console.error('Failed to initialize Data SDK');
        }
      }
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
    }
    
    // =====================================================
    // NAVIGATION
    // =====================================================
    
    function navigateTo(page, data = null) {
      document.querySelectorAll('.page-section').forEach(section => {
        section.classList.add('hidden');
      });
      
      const targetSection = document.getElementById(`page-${page}`);
      if (targetSection) {
        targetSection.classList.remove('hidden');
        currentPage = page;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        if (page === 'shop') {
          renderProducts();
        } else if (page === 'product' && data) {
          renderProductDetail(data);
        } else if (page === 'cart') {
          renderCart();
        }
      }
    }
    
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.toggle('hidden');
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
            <svg viewBox="0 0 80 200" class="w-16 h-40 drop-shadow-xl">
              <defs>
                <linearGradient id="bottle-${product.id}" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:${getBottleColor(product.type, 0)}"/>
                  <stop offset="50%" style="stop-color:${getBottleColor(product.type, 1)}"/>
                  <stop offset="100%" style="stop-color:${getBottleColor(product.type, 0)}"/>
                </linearGradient>
                <linearGradient id="wine-${product.id}" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style="stop-color:${getWineColor(product.type, 0)}"/>
                  <stop offset="100%" style="stop-color:${getWineColor(product.type, 1)}"/>
                </linearGradient>
              </defs>
              <path d="M25 60 Q25 50 30 45 L30 25 Q30 20 35 20 L45 20 Q50 20 50 25 L50 45 Q55 50 55 60 L55 180 Q55 190 40 190 Q25 190 25 180 Z" fill="url(#bottle-${product.id})"/>
              <path d="M27 70 L53 70 L53 178 Q53 188 40 188 Q27 188 27 178 Z" fill="url(#wine-${product.id})"/>
              <rect x="28" y="100" width="24" height="50" fill="#f9f1e4" rx="2"/>
              <text x="40" y="125" text-anchor="middle" fill="${getBottleColor(product.type, 1)}" font-size="5" font-family="serif">MATSI</text>
              <rect x="33" y="8" width="14" height="14" fill="#d4bc9a" rx="2"/>
              <path d="M32 20 L32 28 Q32 32 40 32 Q48 32 48 28 L48 20" fill="#8b7355"/>
            </svg>
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
    }
    
    function getBottleColor(type, index) {
      const colors = {
        red: ['#3d1219', '#5a1f29'],
        white: ['#4a5d23', '#5d7a2e'],
        amber: ['#6b4423', '#8b5a2b'],
        rose: ['#8b4557', '#a55568']
      };
      return colors[type]?.[index] || colors.red[index];
    }
    
    function getWineColor(type, index) {
      const colors = {
        red: ['#722f37', '#5a1f29'],
        white: ['#e8d5a3', '#c9b896'],
        amber: ['#c9a227', '#a68b1f'],
        rose: ['#e8a0b0', '#d48a9a']
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
          <svg viewBox="0 0 80 200" class="w-32 h-80 drop-shadow-2xl">
            <defs>
              <linearGradient id="bottle-detail" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style="stop-color:${getBottleColor(product.type, 0)}"/>
                <stop offset="50%" style="stop-color:${getBottleColor(product.type, 1)}"/>
                <stop offset="100%" style="stop-color:${getBottleColor(product.type, 0)}"/>
              </linearGradient>
              <linearGradient id="wine-detail" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:${getWineColor(product.type, 0)}"/>
                <stop offset="100%" style="stop-color:${getWineColor(product.type, 1)}"/>
              </linearGradient>
            </defs>
            <path d="M25 60 Q25 50 30 45 L30 25 Q30 20 35 20 L45 20 Q50 20 50 25 L50 45 Q55 50 55 60 L55 180 Q55 190 40 190 Q25 190 25 180 Z" fill="url(#bottle-detail)"/>
            <path d="M27 70 L53 70 L53 178 Q53 188 40 188 Q27 188 27 178 Z" fill="url(#wine-detail)"/>
            <rect x="28" y="95" width="24" height="60" fill="#f9f1e4" rx="2"/>
            <text x="40" y="115" text-anchor="middle" fill="${getBottleColor(product.type, 1)}" font-size="5" font-family="serif">MATSI</text>
            <text x="40" y="125" text-anchor="middle" fill="${getBottleColor(product.type, 1)}" font-size="3" font-family="sans-serif">${product.year}</text>
            <rect x="33" y="8" width="14" height="14" fill="#d4bc9a" rx="2"/>
            <path d="M32 20 L32 28 Q32 32 40 32 Q48 32 48 28 L48 20" fill="#8b7355"/>
          </svg>
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
    }
    
    // =====================================================
    // CART FUNCTIONALITY
    // =====================================================
    
    async function addToCart(productId, productName, price) {
      if (isLoading) return;
      
      if (cartItems.length >= 999) {
        showToast('კალათა სავსეა (მაქსიმუმ 999 პროდუქტი)', 'error');
        return;
      }
      
      isLoading = true;
      
      const existingItem = cartItems.find(item => item.productId === productId);
      
      if (existingItem) {
        if (window.dataSdk) {
          const result = await window.dataSdk.update({
            ...existingItem,
            quantity: existingItem.quantity + 1
          });
          if (!result.isOk) {
            showToast('შეცდომა კალათის განახლებისას', 'error');
          } else {
            showToast(`${productName} დამატებულია კალათაში`, 'success');
          }
        }
      } else {
        if (window.dataSdk) {
          const result = await window.dataSdk.create({
            id: Date.now().toString(),
            productId,
            productName,
            quantity: 1,
            price,
            createdAt: new Date().toISOString()
          });
          if (!result.isOk) {
            showToast('შეცდომა კალათაში დამატებისას', 'error');
          } else {
            showToast(`${productName} დამატებულია კალათაში`, 'success');
          }
        }
      }
      
      isLoading = false;
    }
    
    async function updateQuantity(backendId, delta) {
      if (isLoading) return;
      
      const item = cartItems.find(i => i.__backendId === backendId);
      if (!item) return;
      
      isLoading = true;
      
      const newQuantity = item.quantity + delta;
      
      if (newQuantity <= 0) {
        if (window.dataSdk) {
          const result = await window.dataSdk.delete(item);
          if (!result.isOk) {
            showToast('შეცდომა წაშლისას', 'error');
          }
        }
      } else {
        if (window.dataSdk) {
          const result = await window.dataSdk.update({
            ...item,
            quantity: newQuantity
          });
          if (!result.isOk) {
            showToast('შეცდომა განახლებისას', 'error');
          }
        }
      }
      
      isLoading = false;
    }
    
    async function removeFromCart(backendId) {
      if (isLoading) return;
      
      const item = cartItems.find(i => i.__backendId === backendId);
      if (!item) return;
      
      isLoading = true;
      
      if (window.dataSdk) {
        const result = await window.dataSdk.delete(item);
        if (!result.isOk) {
          showToast('შეცდომა წაშლისას', 'error');
        } else {
          showToast('პროდუქტი წაიშალა კალათიდან', 'success');
        }
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
              მაღაზიაში გადასვლა
            </button>
          </div>
        `;
        return;
      }
      
      const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      
      container.innerHTML = `
        <div class="space-y-4 mb-8">
          ${cartItems.map(item => `
            <div class="bg-white rounded-2xl p-4 md:p-6 shadow-lg flex items-center gap-4">
              <div class="w-16 h-20 bg-wine-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 80 200" class="w-8 h-16">
                  <path d="M25 60 Q25 50 30 45 L30 25 Q30 20 35 20 L45 20 Q50 20 50 25 L50 45 Q55 50 55 60 L55 180 Q55 190 40 190 Q25 190 25 180 Z" fill="#5a1f29"/>
                </svg>
              </div>
              <div class="flex-grow min-w-0">
                <h3 class="font-display text-lg font-semibold text-wine-900 truncate">${item.productName}</h3>
                <p class="text-wine-600/70 text-sm">₾${item.price} თითოეული</p>
              </div>
              <div class="flex items-center gap-3">
                <button onclick="updateQuantity('${item.__backendId}', -1)" 
                        class="w-8 h-8 rounded-full bg-wine-100 text-wine-700 flex items-center justify-center hover:bg-wine-200 transition-colors">
                  −
                </button>
                <span class="font-semibold text-wine-900 w-8 text-center">${item.quantity}</span>
                <button onclick="updateQuantity('${item.__backendId}', 1)" 
                        class="w-8 h-8 rounded-full bg-wine-100 text-wine-700 flex items-center justify-center hover:bg-wine-200 transition-colors">
                  +
                </button>
              </div>
              <div class="text-right">
                <p class="font-display text-xl font-bold text-wine-800">₾${item.price * item.quantity}</p>
                <button onclick="removeFromCart('${item.__backendId}')" class="text-wine-400 hover:text-wine-600 text-sm transition-colors">
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
          <button onclick="handleCheckout()" class="btn-wine w-full py-4 bg-cream-50 text-wine-800 font-semibold rounded-xl hover:bg-cream-100 transition-all">
            შეკვეთის გაფორმება
          </button>
          <p class="text-cream-200/60 text-xs text-center mt-4">მიტანა თბილისში უფასოა ₾100+ შეკვეთაზე</p>
        </div>
      `;
    }
    
    function handleCheckout() {
      showToast('დემო რეჟიმი — შეკვეთა არ არის დამუშავებული', 'info');
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
    
    function handleContactSubmit(event) {
      event.preventDefault();
      
      const form = event.target;
      const name = form.querySelector('#name').value;
      
      showToast(`გმადლობთ, ${name}! შეტყობინება მიღებულია`, 'success');
      form.reset();
    }
    
    // =====================================================
    // 3D SCENE (Three.js)
    // =====================================================
    
    let scene, camera, renderer, bottle;
    let isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    function init3DScene() {
      const canvas = document.getElementById('wine-canvas');
      if (!canvas || isReducedMotion) return;
      
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
      // Initialize SDKs
      initElementSdk();
      await initDataSdk();
      
      // Apply initial config
      applyConfig();
      
      // Render initial shop products
      renderProducts();
      
      // Initialize 3D scene
      setTimeout(init3DScene, 100);
      
      // Hide loader
      setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
          loader.style.opacity = '0';
          loader.style.transition = 'opacity 0.5s ease';
          setTimeout(() => loader.remove(), 500);
        }
      }, 2000);
    }
    
    // Start app
    init();
