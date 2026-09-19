import { STORE_INFO, FABRICS, PRODUCTS, FAQS } from './data/products.js';
import { formatCurrency, buildWhatsAppLink } from './utils/whatsapp.js';

// Application State
const state = {
  currentCategory: 'all',
  searchQuery: '',
  paymentMethod: 'efectivo', // 'efectivo' | 'tarjeta'

  // Active customizer modal state
  activeProduct: null,
  customizer: {
    variantIndex: 0,
    fabricId: 'pana-velvet',
    colorIndex: 2, // Default to a stylish warm neutral (e.g. Visón)
    legs: 'Madera lustrada',
    hasTachas: false,
    hasPuffAddon: false,
    customNotes: ''
  }
};

// Render Main App
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- HERO SECTION -->
    <section class="hero-section" id="hero">
      <div class="container hero-grid">
        <div class="hero-content">
          
          <h1 class="hero-title">
            Diseño, confort y <em>personalidad</em> para tu hogar.
          </h1>
          <p class="hero-desc">
            Fabricamos sofás, esquineros y respaldos de calidad premium a medida. Estructura maciza en madera saligna, espumas de alta densidad y más de 40 tonalidades exclusivas.
          </p>
          <div class="hero-ctas">
            <a href="#catalogo" class="btn-primary" id="btn-hero-catalog">
              <span>Explorar Catálogo Interactivo</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <button class="btn-secondary" id="btn-hero-customize-featured">
              <span>Personalizar Sofá Zaro</span>
            </button>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <h4>+30</h4>
              <p>Modelos y Versiones</p>
            </div>
            <div class="stat-item">
              <h4>100%</h4>
              <p>Madera Saligna Maciza</p>
            </div>
            <div class="stat-item">
              <h4>4</h4>
              <p>Líneas de Telas Premium</p>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-image-wrapper">
            <img src="./images/products/sofa-zaro-vison.webp" alt="Sofá Zaro Lupe Home - Renderizado de Interior" />
          </div>
          <div class="hero-floating-card">
            <div class="floating-icon">🛋️</div>
            <div class="floating-info">
              <h5>Atención Directa por WhatsApp</h5>
              <p>Asesoramiento personalizado y envíos a todo el país</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURES BAR -->
    <div class="features-bar">
      <div class="container features-grid">
        <div class="feature-box">
          <div class="feature-icon">🪵</div>
          <div class="feature-text">
            <h4>Madera Saligna Maciza</h4>
            <p>Estructuras reforzadas de máxima durabilidad que no ceden con el tiempo.</p>
          </div>
        </div>
        <div class="feature-box">
          <div class="feature-icon">☁️</div>
          <div class="feature-text">
            <h4>Espuma Alta Densidad</h4>
            <p>Poliéster 26/28 kg/m³ para un descanso mullido pero con soporte indeformable.</p>
          </div>
        </div>
        <div class="feature-box">
          <div class="feature-icon">🎨</div>
          <div class="feature-text">
            <h4>Telas Antimanchas</h4>
            <p>Pana Velvet, Floyd, Mercury antidesgarro y Cuerotex nobuk lavable.</p>
          </div>
        </div>
        <div class="feature-box">
          <div class="feature-icon">🚚</div>
          <div class="feature-text">
            <h4>Envíos a Todo el País</h4>
            <p>Despachamos tu pedido embalado con máxima protección hasta tu localidad.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- CATEGORIES QUICK ACCESS -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">NUESTRAS COLECCIONES</span>
          <h2 class="section-title">Elegí la categoría para tu espacio</h2>
          <p class="section-desc">Seleccioná una línea para ver todos los modelos disponibles, medidas exactas y opciones de personalización.</p>
        </div>

        <div class="categories-grid">
          <!-- Sofas -->
          <div class="category-card" data-category="sofas">
            <img src="./images/products/sofa-rocco-arena.webp" alt="Sofás y Rinconeros Lupe Home" />
            <div class="category-overlay">
              <h3>Sofás & Rinconeros</h3>
              <p>Modelos Zaro, Rocco, Sofá Cama 2 en 1 y esquineros a medida.</p>
              <span class="category-btn">
                <span>Ver Modelos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>

          <!-- Individuales -->
          <div class="category-card" data-category="individuales">
            <img src="./images/products/individual-perla-marfil.webp" alt="Sillones Individuales Lupe Home" />
            <div class="category-overlay">
              <h3>Sillones Individuales</h3>
              <p>Poltronas Perla, Jota con tachas y sillones de lectura Benetton.</p>
              <span class="category-btn">
                <span>Ver Modelos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>

          <!-- Respaldos -->
          <div class="category-card" data-category="respaldos">
            <img src="./images/products/respaldo-bastones-gris.webp" alt="Respaldos de Sommier Lupe Home" />
            <div class="category-overlay">
              <h3>Respaldos de Cama</h3>
              <p>Diseños lisos, con tachas simples/dobles y bastones desde 1,00m a 2,00m.</p>
              <span class="category-btn">
                <span>Ver Modelos</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTERACTIVE CATALOG -->
    <section class="section catalog-section" id="catalogo">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">CATÁLOGO VIRTUAL INTERACTIVO</span>
          <h2 class="section-title">Encontrá y configurá tu modelo ideal</h2>
          <p class="section-desc">Hacé clic en <strong>Personalizar y Cotizar</strong> en cualquier producto para cambiar la tela, tono y adicionales con recálculo automático y pedido directo por WhatsApp.</p>
        </div>

        <!-- Controls: Filters, Search, Payment Switch -->
        <div class="catalog-controls">
          <div class="filter-tabs" id="category-filter-tabs">
            <button class="filter-tab ${state.currentCategory === 'all' ? 'active' : ''}" data-cat="all">
              Todos (${PRODUCTS.length})
            </button>
            <button class="filter-tab ${state.currentCategory === 'sofas' ? 'active' : ''}" data-cat="sofas">
              Sofás & Rinconeros (${PRODUCTS.filter(p => p.category === 'sofas').length})
            </button>
            <button class="filter-tab ${state.currentCategory === 'individuales' ? 'active' : ''}" data-cat="individuales">
              Individuales (${PRODUCTS.filter(p => p.category === 'individuales').length})
            </button>
            <button class="filter-tab ${state.currentCategory === 'respaldos' ? 'active' : ''}" data-cat="respaldos">
              Respaldos (${PRODUCTS.filter(p => p.category === 'respaldos').length})
            </button>
          </div>

          <div class="catalog-actions-right">
            <!-- Search -->
            <div class="search-box">
              <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" id="catalog-search-input" placeholder="Buscar por nombre o medida..." value="${state.searchQuery}" />
            </div>

            <!-- Payment Switcher -->
            <div class="payment-switch-container">
              <button class="payment-switch-btn ${state.paymentMethod === 'efectivo' ? 'active' : ''}" id="btn-pay-cash">
                <span>Efectivo / Transf.</span>
                <span class="discount-pill">Mejor Precio</span>
              </button>
              <button class="payment-switch-btn ${state.paymentMethod === 'tarjeta' ? 'active' : ''}" id="btn-pay-card">
                <span>Tarjeta</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Products Grid Container -->
        <div class="products-grid" id="products-grid">
          <!-- Injected by renderProductsGrid() -->
        </div>
      </div>
    </section>

    <!-- FABRICS SHOWCASE SECTION -->
    <section class="section fabrics-section" id="telas">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">MUESTRARIO EXCLUSIVO</span>
          <h2 class="section-title">Telas y Texturas de Primera Línea</h2>
          <p class="section-desc">Dividimos nuestras telas en Grupo A (incluido en el valor de lista) y Grupo B (+10% con propiedades antidesgarro y cueros lavables).</p>
        </div>

        <div class="fabrics-grid">
          ${FABRICS.map(fabric => `
            <div class="fabric-card">
              <div class="fabric-img-wrap">
                <img src="${fabric.sampleImage}" alt="${fabric.name} Lupe Home" />
                <span class="fabric-badge ${fabric.group === 'B' ? 'b' : ''}">
                  ${fabric.groupLabel}
                </span>
              </div>
              <div class="fabric-content">
                <h3>${fabric.name}</h3>
                <p>${fabric.features}</p>
                <div class="fabric-colors-summary">
                  ${fabric.colors.map(c => `
                    <span class="mini-swatch" style="background-color: ${c.hex};" title="${c.name}"></span>
                  `).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="section faq-section" id="faq">
      <div class="container">
        <div class="section-header">
          <span class="section-subtitle">RESOLVÉ TUS DUDAS</span>
          <h2 class="section-title">Preguntas Frecuentes</h2>
          <p class="section-desc">Todo lo que necesitás saber sobre tiempos de fabricación, envíos a todo el país y medios de pago.</p>
        </div>

        <div class="faq-list">
          ${FAQS.map((faq, i) => `
            <div class="faq-item ${i === 0 ? 'open' : ''}">
              <button class="faq-question">
                <span>${faq.q}</span>
                <span class="faq-icon">+</span>
              </button>
              <div class="faq-answer">
                <p style="white-space: pre-line;">${faq.a}</p>
              </div>
            </div>
          `).join('')}
        </div>

      
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer" id="contacto">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <span class="logo-title">LUPE</span>
            <span style="display: block; font-size: 0.75rem; letter-spacing: 4px; color: var(--color-accent); font-weight: 700; margin-top: 4px;">H O M E</span>
            <p>
              Diseñamos y fabricamos muebles que inspiran y transforman tus espacios cotidianos. Hecho en Argentina con pasión y materiales de primera calidad.
            </p>
          </div>

          <div>
            <h4 class="footer-heading">Categorías</h4>
            <ul class="footer-links">
              <li><a href="#catalogo" data-category-link="sofas">Sofás & Rinconeros</a></li>
              <li><a href="#catalogo" data-category-link="individuales">Sillones Individuales</a></li>
              <li><a href="#catalogo" data-category-link="respaldos">Respaldos de Cama</a></li>
              <li><a href="#telas">Muestrario de Telas</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Información</h4>
            <ul class="footer-links">
              <li><a href="#faq">Preguntas Frecuentes</a></li>
              <li><a href="#faq">Plazos de Fabricación</a></li>
              <li><a href="#faq">Envíos a Todo el País</a></li>
              <li><a href="#catalogo">Medios de Pago</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Contacto & Showroom</h4>
            <div class="footer-contact-info">
              <p>📍 San Francisco, Córdoba, Argentina</p>
              <p>📱 WhatsApp: <a href="https://wa.me/${STORE_INFO.phone}" target="_blank" rel="noopener" style="color: #FFFFFF; font-weight: 600;">${STORE_INFO.phoneDisplay}</a></p>
              <p>📸 Instagram: <a href="${STORE_INFO.instagramUrl}" target="_blank" rel="noopener" style="color: #F8D98C; font-weight: 600;">@${STORE_INFO.instagram}</a></p>
              <p style="font-size: 0.8rem; color: #888;">Lunes a Sábados con cita previa o atención online 24/7.</p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 Lupe Home. Todos los derechos reservados.</p>
          <p>Demo interactiva desarrollada por Impulso Creativo.</p>
        </div>
      </div>
    </footer>
  `;

  renderProductsGrid();
  attachEventListeners();
}

// Render filtered products grid
function renderProductsGrid() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesCat = state.currentCategory === 'all' || p.category === state.currentCategory;
    const query = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !query ||
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.variants.some(v => v.sizeLabel.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No encontramos modelos que coincidan</h3>
        <p style="color: var(--color-text-muted); margin-bottom: 20px;">Probá buscando con otro término o limpiando los filtros.</p>
        <button class="btn-primary" id="btn-clear-search">Ver Todos los Productos</button>
      </div>
    `;
    const clearBtn = document.getElementById('btn-clear-search');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.currentCategory = 'all';
        state.searchQuery = '';
        renderApp();
      });
    }
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const defaultVariant = product.variants[product.defaultVariantIndex || 0];
    const price = state.paymentMethod === 'efectivo' ? defaultVariant.cashPrice : defaultVariant.cardPrice;
    const colorOpts = product.colorOptions || [
      { name: "Tono Estándar", hex: "#9E8F7F", image: product.image },
      { name: "Grafito", hex: "#4B525B", image: product.image },
      { name: "Ocre / Arena", hex: "#DE9B35", image: product.image }
    ];
    const activeImg = colorOpts[0].image;

    return `
      <div class="product-card" data-product-id="${product.id}">
        <div class="product-image-container">
          <img src="${activeImg}" alt="${product.name}" id="card-img-${product.id}" loading="lazy" />
          ${product.badge ? `<span class="product-badge ${product.badge === 'Más Elegido' || product.badge === 'Top Ventas' ? 'gold' : ''}">${product.badge}</span>` : ''}
          
          <!-- Color Switcher Dots -->
          <div class="card-color-selector" title="Hacé clic para cambiar el color">
            <span class="card-color-label">Color:</span>
            ${colorOpts.map((c, cIdx) => `
              <button class="card-color-dot ${cIdx === 0 ? 'active' : ''}" 
                data-color-dot-product="${product.id}"
                data-color-img="${c.image}"
                data-color-name="${c.name}"
                style="background-color: ${c.hex};" 
                title="Ver en ${c.name}">
              </button>
            `).join('')}
          </div>
        </div>

        <div class="product-body">
          <span class="product-category-tag">${product.categoryLabel}</span>
          <h3 class="product-title">${product.name}</h3>
          
          <div class="product-dimensions">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 3H3v18h18V3z"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
            <span>${defaultVariant.sizeLabel}</span>
          </div>

          <p class="product-desc">${product.description}</p>

          <div class="product-price-section">
            <div>
              <span class="price-label">Precio ${state.paymentMethod === 'efectivo' ? 'Efectivo / Transf.' : 'con Tarjeta'}:</span>
              <div class="price-value">${formatCurrency(price)}</div>
            </div>
            ${state.paymentMethod === 'efectivo' ? `
              <span class="price-sub">Mejor Precio Contado</span>
            ` : `
              <span class="price-sub">Hasta en cuotas</span>
            `}
          </div>

          <div class="product-actions">
            <button class="btn-customize" data-open-customizer="${product.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
              <span>Personalizar y Cotizar</span>
            </button>
            <button class="btn-quick-wpp" data-quick-wpp="${product.id}" title="Consultar rápido por WhatsApp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Attach color dot click handlers
  grid.querySelectorAll('[data-color-dot-product]').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = dot.getAttribute('data-color-dot-product');
      const imgUrl = dot.getAttribute('data-color-img');
      const cardImg = document.getElementById(`card-img-${pId}`);
      if (cardImg && imgUrl) {
        cardImg.classList.add('fading');
        setTimeout(() => {
          cardImg.src = imgUrl;
          cardImg.classList.remove('fading');
        }, 150);
      }
      // Update active dot in this card
      const parent = dot.closest('.card-color-selector');
      if (parent) {
        parent.querySelectorAll('.card-color-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
      }
    });
  });

  // Attach card event listeners
  grid.querySelectorAll('[data-open-customizer]').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-open-customizer');
      openCustomizer(productId);
    });
  });

  grid.querySelectorAll('[data-quick-wpp]').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-quick-wpp');
      const product = PRODUCTS.find(p => p.id === productId);
      if (product) {
        const variant = product.variants[product.defaultVariantIndex || 0];
        const price = state.paymentMethod === 'efectivo' ? variant.cashPrice : variant.cardPrice;
        const link = buildWhatsAppLink({
          product,
          variant,
          fabric: FABRICS[0],
          color: FABRICS[0].colors[0],
          legs: product.hasLegsOption ? 'Madera lustrada' : null,
          paymentMethod: state.paymentMethod,
          finalPrice: price
        });
        window.open(link, '_blank');
      }
    });
  });
}

// Open and populate Customizer Modal
function openCustomizer(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const colorOpts = product.colorOptions || [];
  const defaultColorName = colorOpts.length > 0 ? colorOpts[0].name : 'Visón';
  const defaultColorImg = colorOpts.length > 0 ? colorOpts[0].image : product.image;

  state.activeProduct = product;
  state.customizer = {
    variantIndex: product.defaultVariantIndex || 0,
    fabricId: 'pana-velvet',
    colorIndex: 2, // Visón
    selectedColorName: defaultColorName,
    selectedColorImage: defaultColorImg,
    legs: 'Madera lustrada',
    hasTachas: false,
    hasPuffAddon: false,
    customNotes: ''
  };

  renderCustomizerModal();

  const backdrop = document.getElementById('customizer-modal-backdrop');
  if (backdrop) {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCustomizer() {
  const backdrop = document.getElementById('customizer-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
  state.activeProduct = null;
}

// Calculate dynamic price based on customizer options
function calculateFinalPrice() {
  if (!state.activeProduct) return 0;
  const variant = state.activeProduct.variants[state.customizer.variantIndex];
  if (!variant) return 0;

  const basePrice = state.paymentMethod === 'efectivo' ? variant.cashPrice : variant.cardPrice;
  const currentFabric = FABRICS.find(f => f.id === state.customizer.fabricId);
  const surcharge = (currentFabric?.surchargePercent || 0) / 100;

  let total = basePrice * (1 + surcharge);

  // Optional standalone puff addon if checked and product allows it
  if (state.customizer.hasPuffAddon && state.activeProduct.hasPuffOption && !variant.sizeLabel.toLowerCase().includes('puff')) {
    total += state.paymentMethod === 'efectivo' ? 130000 : 155000;
  }

  return Math.round(total);
}

// Render content of Customizer Modal
function renderCustomizerModal() {
  const modal = document.getElementById('customizer-modal');
  if (!modal || !state.activeProduct) return;

  const product = state.activeProduct;
  const currentVariant = product.variants[state.customizer.variantIndex] || product.variants[0];
  const currentFabric = FABRICS.find(f => f.id === state.customizer.fabricId) || FABRICS[0];
  const currentColor = currentFabric.colors[state.customizer.colorIndex] || currentFabric.colors[0];
  const activeColorName = state.customizer.selectedColorName || currentColor.name;
  const previewImage = state.customizer.selectedColorImage || currentVariant.image || product.image;
  const finalPrice = calculateFinalPrice();

  // WhatsApp Order Link
  const wppLink = buildWhatsAppLink({
    product,
    variant: currentVariant,
    fabric: currentFabric,
    color: { name: activeColorName, hex: currentColor.hex },
    legs: product.hasLegsOption ? state.customizer.legs : null,
    tachas: product.hasTachasOption ? state.customizer.hasTachas : undefined,
    puffAddon: state.customizer.hasPuffAddon,
    paymentMethod: state.paymentMethod,
    finalPrice,
    customNotes: state.customizer.customNotes
  });

  modal.innerHTML = `
    <button class="modal-close-btn" id="modal-close-btn" aria-label="Cerrar ventana">&times;</button>

    <div class="customizer-layout">
      <!-- LEFT PREVIEW COLUMN -->
      <div class="customizer-preview">
        <div class="preview-header">
          <span style="font-size: 0.78rem; font-weight: 700; color: var(--color-accent); text-transform: uppercase;">
            ${product.categoryLabel}
          </span>
          <h3>${product.name}</h3>
          <p class="preview-tagline">${product.tagline || product.description}</p>
        </div>

        <div class="preview-image-box">
          <img src="${previewImage}" alt="${product.name}" id="customizer-preview-img" style="transition: opacity 0.25s ease;" />
          <div class="swatch-color-pill">
            <span class="swatch-circle-indicator" style="background-color: ${currentColor.hex};"></span>
            <span>${currentFabric.name} - ${activeColorName}</span>
          </div>
        </div>

        <div class="specs-summary-card">
          <div class="spec-row">
            <span class="spec-label">Medida seleccionada:</span>
            <span class="spec-value">${currentVariant.sizeLabel}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Tapicería:</span>
            <span class="spec-value">${currentFabric.name} (${currentFabric.groupLabel})</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Tono de color:</span>
            <span class="spec-value">${currentColor.name}</span>
          </div>
          ${product.hasLegsOption ? `
            <div class="spec-row">
              <span class="spec-label">Tipo de patas:</span>
              <span class="spec-value">${state.customizer.legs}</span>
            </div>
          ` : ''}
          <div class="spec-row">
            <span class="spec-label">Estructura & Relleno:</span>
            <span class="spec-value">Saligna Maciza / Espuma 26-28</span>
          </div>
        </div>
      </div>

      <!-- RIGHT FORM OPTIONS COLUMN -->
      <div class="customizer-form">
        <!-- STEP 1: VARIANT / SIZES -->
        <div class="form-step-title">
          <span>1. Medida / Versión</span>
        </div>
        <div class="variants-selector">
          ${product.variants.map((v, idx) => `
            <button class="variant-option-btn ${state.customizer.variantIndex === idx ? 'selected' : ''}" data-variant-idx="${idx}">
              <span class="variant-name">${v.sizeLabel}</span>
              <span class="variant-price">
                ${formatCurrency(state.paymentMethod === 'efectivo' ? v.cashPrice : v.cardPrice)}
              </span>
            </button>
          `).join('')}
        </div>

        <!-- STEP 2: FABRIC TYPE -->
        <div class="form-step-title">
          <span>2. Selección de Tela (${currentFabric.groupLabel})</span>
        </div>
        
        <div class="fabric-type-selector">
          <button class="fabric-type-btn ${currentFabric.group === 'A' ? 'selected' : ''}" data-fabric-group="A">
            <span class="f-title">Grupo A (Precio Base)</span>
            <span class="f-tag">Pana Velvet • Floyd</span>
          </button>
          <button class="fabric-type-btn ${currentFabric.group === 'B' ? 'selected' : ''}" data-fabric-group="B">
            <span class="f-title">Grupo B (+10%)</span>
            <span class="f-tag">Mercury Pet-Friendly • Cuerotex</span>
          </button>
        </div>

        <div class="fabric-specific-selector">
          ${FABRICS.filter(f => f.group === currentFabric.group).map(f => `
            <button class="fabric-chip-btn ${f.id === currentFabric.id ? 'selected' : ''}" data-fabric-id="${f.id}">
              ${f.name}
            </button>
          `).join('')}
        </div>

        <!-- STEP 3: COLOR SWATCHES -->
        <div class="form-step-title" style="margin-top: 10px;">
          <span>3. Color con Previsualización Real: <strong>${activeColorName}</strong></span>
        </div>

        ${(product.colorOptions && product.colorOptions.length > 0) ? `
          <div class="color-presets-row">
            ${product.colorOptions.map((c, cIdx) => `
              <button class="color-preset-card ${activeColorName === c.name ? 'active' : ''}" 
                data-preset-idx="${cIdx}"
                data-preset-name="${c.name}"
                data-preset-img="${c.image}"
                data-preset-hex="${c.hex}"
                type="button">
                <span class="preset-dot" style="background-color: ${c.hex};"></span>
                <div class="preset-info">
                  <span class="preset-name">${c.name}</span>
                  <span class="preset-sub">Vista Render IA</span>
                </div>
              </button>
            `).join('')}
          </div>
        ` : ''}

        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 8px;">
          Otras tonalidades disponibles en tela ${currentFabric.name}:
        </div>
        <div class="color-swatches-grid">
          ${currentFabric.colors.map((color, idx) => `
            <button class="swatch-btn ${state.customizer.colorIndex === idx ? 'selected' : ''}" 
              data-color-idx="${idx}" 
              style="background-color: ${color.hex};" 
              title="${color.name}">
            </button>
          `).join('')}
        </div>

        <!-- STEP 4: LEGS & ADDONS -->
        ${(product.hasLegsOption || product.hasTachasOption || (product.hasPuffOption && !currentVariant.sizeLabel.toLowerCase().includes('puff'))) ? `
          <div class="form-step-title">
            <span>4. Opcionales & Acabados</span>
          </div>
          <div class="addons-grid">
            ${product.hasLegsOption ? `
              <div class="addon-toggle-box ${state.customizer.legs === 'Madera lustrada' ? 'selected' : ''}" id="toggle-legs">
                <input type="radio" name="legs" value="Madera lustrada" ${state.customizer.legs === 'Madera lustrada' ? 'checked' : ''} />
                <div class="addon-text">
                  <h6>Patas de Madera</h6>
                  <p>Lustrada maciza (estándar)</p>
                </div>
              </div>
              <div class="addon-toggle-box ${state.customizer.legs === 'Aluminio cromado' ? 'selected' : ''}" id="toggle-legs-alu">
                <input type="radio" name="legs" value="Aluminio cromado" ${state.customizer.legs === 'Aluminio cromado' ? 'checked' : ''} />
                <div class="addon-text">
                  <h6>Patas de Aluminio</h6>
                  <p>Cromado brillante pulido</p>
                </div>
              </div>
            ` : ''}

            ${product.hasTachasOption ? `
              <label class="addon-toggle-box ${state.customizer.hasTachas ? 'selected' : ''}" style="grid-column: span 2;">
                <input type="checkbox" id="check-tachas" ${state.customizer.hasTachas ? 'checked' : ''} />
                <div class="addon-text">
                  <h6>Agregar Tachas Decorativas</h6>
                  <p>Detalle artesanal metálico en respaldo / apoyabrazos</p>
                </div>
              </label>
            ` : ''}

            ${(product.hasPuffOption && !currentVariant.sizeLabel.toLowerCase().includes('puff')) ? `
              <label class="addon-toggle-box ${state.customizer.hasPuffAddon ? 'selected' : ''}" style="grid-column: span 2;">
                <input type="checkbox" id="check-puff-addon" ${state.customizer.hasPuffAddon ? 'checked' : ''} />
                <div class="addon-text">
                  <h6>Sumar Puff Móvil (0,70 x 0,70 m)</h6>
                  <p>Convierte tu sofá lineal en esquinero (+ $130.000 ef / $155.000 tj)</p>
                </div>
              </label>
            ` : ''}
          </div>
        ` : ''}

        <!-- MODAL FOOTER WITH DYNAMIC PRICE & WHATSAPP REDIRECT -->
        <div class="customizer-footer">
          <div class="price-breakdown-box">
            <div class="total-price-display">
              <span class="t-label">Cotización Estimada (${state.paymentMethod === 'efectivo' ? 'Efectivo / Transf.' : 'Tarjeta'}):</span>
              <span class="t-amount">${formatCurrency(finalPrice)}</span>
              ${currentFabric.group === 'B' ? `<span class="t-note">+10% adicional por tela Grupo B incluido</span>` : ''}
            </div>

            <div class="payment-switch-container">
              <button class="payment-switch-btn ${state.paymentMethod === 'efectivo' ? 'active' : ''}" id="modal-pay-cash">
                Efectivo
              </button>
              <button class="payment-switch-btn ${state.paymentMethod === 'tarjeta' ? 'active' : ''}" id="modal-pay-card">
                Tarjeta
              </button>
            </div>
          </div>

          <a href="${wppLink}" target="_blank" rel="noopener" class="btn-submit-wpp" id="btn-modal-wpp-checkout">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Pedir Cotización por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach modal internal interactions
  modal.querySelector('#modal-close-btn').addEventListener('click', closeCustomizer);

  // Variant selector
  modal.querySelectorAll('[data-variant-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.customizer.variantIndex = parseInt(btn.getAttribute('data-variant-idx'), 10);
      renderCustomizerModal();
    });
  });

  // Fabric group selector
  modal.querySelectorAll('[data-fabric-group]').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.getAttribute('data-fabric-group');
      const targetFabric = FABRICS.find(f => f.group === group);
      if (targetFabric) {
        state.customizer.fabricId = targetFabric.id;
        state.customizer.colorIndex = 0;
        renderCustomizerModal();
      }
    });
  });

  // Fabric chip selector
  modal.querySelectorAll('[data-fabric-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.customizer.fabricId = btn.getAttribute('data-fabric-id');
      state.customizer.colorIndex = 0;
      renderCustomizerModal();
    });
  });

  // AI Color Presets with instant render update
  modal.querySelectorAll('[data-preset-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pName = btn.getAttribute('data-preset-name');
      const pImg = btn.getAttribute('data-preset-img');
      state.customizer.selectedColorName = pName;
      state.customizer.selectedColorImage = pImg;
      renderCustomizerModal();
    });
  });

  // Swatch color selector
  modal.querySelectorAll('[data-color-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-color-idx'), 10);
      state.customizer.colorIndex = idx;
      const c = currentFabric.colors[idx];
      if (c) {
        state.customizer.selectedColorName = c.name;
        const match = product.colorOptions?.find(co => co.name.toLowerCase().includes(c.name.toLowerCase()));
        if (match) {
          state.customizer.selectedColorImage = match.image;
        }
      }
      renderCustomizerModal();
    });
  });

  // Legs selector
  const toggleLegs = modal.querySelector('#toggle-legs');
  const toggleLegsAlu = modal.querySelector('#toggle-legs-alu');
  if (toggleLegs) {
    toggleLegs.addEventListener('click', () => {
      state.customizer.legs = 'Madera lustrada';
      renderCustomizerModal();
    });
  }
  if (toggleLegsAlu) {
    toggleLegsAlu.addEventListener('click', () => {
      state.customizer.legs = 'Aluminio cromado';
      renderCustomizerModal();
    });
  }

  // Tachas toggle
  const checkTachas = modal.querySelector('#check-tachas');
  if (checkTachas) {
    checkTachas.addEventListener('change', (e) => {
      state.customizer.hasTachas = e.target.checked;
      renderCustomizerModal();
    });
  }

  // Puff addon toggle
  const checkPuff = modal.querySelector('#check-puff-addon');
  if (checkPuff) {
    checkPuff.addEventListener('change', (e) => {
      state.customizer.hasPuffAddon = e.target.checked;
      renderCustomizerModal();
    });
  }

  // Modal payment toggle
  const modalPayCash = modal.querySelector('#modal-pay-cash');
  const modalPayCard = modal.querySelector('#modal-pay-card');
  if (modalPayCash && modalPayCard) {
    modalPayCash.addEventListener('click', () => {
      state.paymentMethod = 'efectivo';
      renderCustomizerModal();
      renderProductsGrid();
    });
    modalPayCard.addEventListener('click', () => {
      state.paymentMethod = 'tarjeta';
      renderCustomizerModal();
      renderProductsGrid();
    });
  }
}

// Global Event Listeners
function attachEventListeners() {
  // Category Quick Cards
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      if (cat) {
        state.currentCategory = cat;
        renderApp();
        const catalogEl = document.getElementById('catalogo');
        if (catalogEl) {
          catalogEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Hero Buttons
  const heroCustomBtn = document.getElementById('btn-hero-customize-featured');
  if (heroCustomBtn) {
    heroCustomBtn.addEventListener('click', () => {
      openCustomizer('sofa-zaro');
    });
  }

  // Category Filter Tabs
  document.querySelectorAll('#category-filter-tabs .filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.currentCategory = tab.getAttribute('data-cat');
      renderApp();
    });
  });

  // Search input
  const searchInput = document.getElementById('catalog-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderProductsGrid();
    });
  }

  // Payment Switchers
  const btnCash = document.getElementById('btn-pay-cash');
  const btnCard = document.getElementById('btn-pay-card');
  if (btnCash && btnCard) {
    btnCash.addEventListener('click', () => {
      state.paymentMethod = 'efectivo';
      btnCash.classList.add('active');
      btnCard.classList.remove('active');
      renderProductsGrid();
    });
    btnCard.addEventListener('click', () => {
      state.paymentMethod = 'tarjeta';
      btnCard.classList.add('active');
      btnCash.classList.remove('active');
      renderProductsGrid();
    });
  }

  // FAQ Accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
        if (!wasOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // Modal Backdrop click to close
  const backdrop = document.getElementById('customizer-modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeCustomizer();
      }
    });
  }

  // Keyboard Escape to close modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCustomizer();
    }
  });

  // Navigation Links Active State on Scroll
  window.addEventListener('scroll', () => {
    const sections = ['hero', 'catalogo', 'telas', 'faq', 'contacto'];
    const scrollPosition = window.scrollY + 120;

    sections.forEach(secId => {
      const el = document.getElementById(secId);
      const link = document.querySelector(`.nav-link[data-nav="${secId}"]`);
      if (el && link) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  // Footer Category links
  document.querySelectorAll('[data-category-link]').forEach(link => {
    link.addEventListener('click', (e) => {
      const cat = link.getAttribute('data-category-link');
      if (cat) {
        state.currentCategory = cat;
        renderApp();
      }
    });
  });
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});
