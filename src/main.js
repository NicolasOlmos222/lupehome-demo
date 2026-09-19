import { STORE_INFO, FABRICS, PRODUCTS, FAQS } from './data/products.js';
import { formatCurrency, buildWhatsAppLink } from './utils/whatsapp.js';

// Application State
const state = {
  currentView: 'home', // 'home' | 'catalogo' | 'telas'
  currentCategory: 'all',
  searchQuery: '',
  paymentMethod: 'efectivo', // 'efectivo' | 'tarjeta'
  activeFabricId: 'pana-velvet',
  activeFabricColorIndex: 0,

  // Active customizer modal state
  activeProduct: null,
  customizer: {
    variantIndex: 0,
    fabricId: 'pana-velvet',
    colorIndex: 2, // Default to a stylish warm neutral (e.g. Visón)
    legs: 'Madera lustrada',
    hasTachas: false,
    hasPuffAddon: false,
    customNotes: '',
    selectedColorName: null,
    selectedColorImage: null
  }
};

// Reusable Product Card Generator
function renderProductCard(product) {
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
              title="${c.name}">
            </button>
          `).join('')}
        </div>
      </div>

      <div class="product-body">
        <span class="product-category-tag">${product.category}</span>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-dimensions">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 6H3M21 12H3M21 18H3"/></svg>
          <span>Desde ${defaultVariant.sizeLabel}</span>
        </div>
        <p class="product-desc">${product.description}</p>
        
        <div class="product-price-section">
          <div>
            <div class="price-label">Precio ${state.paymentMethod === 'efectivo' ? 'Efectivo / Transf.' : 'Tarjeta'}:</div>
            <div class="price-value">${formatCurrency(price)}</div>
          </div>
          <div class="price-sub">
            ${state.paymentMethod === 'efectivo' ? '🔥 15% OFF Incluido' : 'Hasta 6 cuotas'}
          </div>
        </div>

        <div class="product-actions">
          <button class="btn-customize" data-customize-id="${product.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span>Personalizar y Cotizar</span>
          </button>
          
          <a href="https://wa.me/${STORE_INFO.phone}?text=Hola%20Lupe%20Home!%20Quiero%20consultar%20por%20el%20modelo%20${encodeURIComponent(product.name)}" 
            target="_blank" 
            rel="noopener" 
            class="btn-quick-wpp" 
            title="Consulta Rápida por WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

// Attach Event Listeners to Product Cards
function attachProductCardEvents(container) {
  if (!container) return;

  // Color switcher dots
  container.querySelectorAll('.card-color-dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const pId = dot.getAttribute('data-color-dot-product');
      const imgPath = dot.getAttribute('data-color-img');
      const targetImg = document.getElementById(`card-img-${pId}`);
      if (targetImg && imgPath) {
        targetImg.classList.add('fading');
        setTimeout(() => {
          targetImg.src = imgPath;
          targetImg.classList.remove('fading');
        }, 180);
      }
      container.querySelectorAll(`.card-color-dot[data-color-dot-product="${pId}"]`).forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // Customize Buttons
  container.querySelectorAll('[data-customize-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      openCustomizer(btn.getAttribute('data-customize-id'));
    });
  });
}

// Shared Footer
function renderFooter() {
  return `
    <footer class="footer" id="contacto">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="brand-logo">
              <span class="logo-title">LUPE</span>
              <span class="logo-sub">H O M E</span>
            </div>
            <p>Fabricación propia de sofás, esquineros y respaldos de sommier a medida. Estructuras macizas, espumas de alta densidad y telas seleccionadas.</p>
          </div>

          <div>
            <h4 class="footer-heading">Categorías</h4>
            <ul class="footer-links">
              <li><a href="#catalogo?cat=sofas">Sofás & Rinconeros</a></li>
              <li><a href="#catalogo?cat=individuales">Sillones Individuales</a></li>
              <li><a href="#catalogo?cat=respaldos">Respaldos de Cama</a></li>
              <li><a href="#telas">Muestrario de Telas</a></li>
            </ul>
          </div>

          <div>
            <h4 class="footer-heading">Información</h4>
            <ul class="footer-links">
              <li><a href="#inicio#faq">Preguntas Frecuentes</a></li>
              <li><a href="#inicio#faq">Plazos de Fabricación</a></li>
              <li><a href="#inicio#faq">Envíos a Todo el País</a></li>
              <li><a href="#inicio#faq">Medios de Pago</a></li>
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
}

// -------------------------------------------------------------
// VISTA 1: INICIO (HOME)
// -------------------------------------------------------------
function renderHomeView() {
  const topProducts = PRODUCTS.slice(0, 3); // 3 best-sellers for curated teaser

  return `
    <div class="view-container">
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
                <span>Explorar Catálogo Completo</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#telas" class="btn-secondary">
                <span>Ver Muestrario de Telas</span>
              </a>
            </div>

            <div class="hero-stats">
              <div class="stat-item">
                <h4>+10</h4>
                <p>Modelos Curados</p>
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
              <p>Estructuras reforzadas, encastradas y encoladas con garantía de fábrica.</p>
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-icon">✨</div>
            <div class="feature-text">
              <h4>Fabricación a Medida</h4>
              <p>Largas opciones de medidas, esquineros reversibles y patas de aluminio o madera.</p>
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-icon">🎨</div>
            <div class="feature-text">
              <h4>+40 Colores y Telas</h4>
              <p>Panas antimanchas, linos pesados, telas pet-friendly y cueros nobuk.</p>
            </div>
          </div>
          <div class="feature-box">
            <div class="feature-icon">🚚</div>
            <div class="feature-text">
              <h4>Envíos a Todo el País</h4>
              <p>Despacho seguro y embalaje especial o retiro en Showroom San Francisco.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CATEGORIES SHOWCASE (Direct access to Catalog) -->
      <section class="section" id="lineas">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">NUESTRAS LÍNEAS</span>
            <h2 class="section-title">Encontrá el Estilo Ideal</h2>
            <p class="section-desc">Hacé clic en una línea para ingresar al catálogo filtrado por esa categoría.</p>
          </div>

          <div class="categories-grid">
            <a href="#catalogo?cat=sofas" class="category-card" data-category="sofas">
              <img src="./images/products/sofa-rocco-arena.webp" alt="Sofás y Rinconeros Lupe Home" />
              <div class="category-overlay">
                <h3>Sofás & Rinconeros</h3>
                <p>Modelos Zaro, Rocco, Sofá Cama 2 en 1 y esquineros a medida.</p>
                <span class="category-btn">Ver Sofás &rarr;</span>
              </div>
            </a>

            <a href="#catalogo?cat=individuales" class="category-card" data-category="individuales">
              <img src="./images/products/individual-perla-marfil.webp" alt="Sillones Individuales Lupe Home" />
              <div class="category-overlay">
                <h3>Sillones Individuales</h3>
                <p>Poltronas Perla, Jota con tachas y sillones de lectura Benetton.</p>
                <span class="category-btn">Ver Individuales &rarr;</span>
              </div>
            </a>

            <a href="#catalogo?cat=respaldos" class="category-card" data-category="respaldos">
              <img src="./images/products/respaldo-bastones-gris.webp" alt="Respaldos de Sommier Lupe Home" />
              <div class="category-overlay">
                <h3>Respaldos de Cama</h3>
                <p>Diseños lisos, con tachas simples/dobles y bastones desde 1,00m a 2,00m.</p>
                <span class="category-btn">Ver Respaldos &rarr;</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- FEATURED BEST-SELLERS TEASER -->
      <section class="home-featured-section">
        <div class="container">
          <div class="section-header">
            <span class="section-subtitle">SELECCIÓN EXCLUSIVA</span>
            <h2 class="section-title">Modelos Más Elegidos</h2>
            <p class="section-desc">Estructura reforzada en saligna maciza, espumas alta densidad y personalización en vivo.</p>
          </div>

          <div class="products-grid" id="home-featured-grid">
            ${topProducts.map(renderProductCard).join('')}
          </div>

          <div class="home-featured-footer">
            <a href="#catalogo" class="btn-view-full-catalog">
              <span>Ver Todos los Modelos en el Catálogo Completo</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- HOME FABRICS TEASER BANNER -->
      <section class="home-fabrics-teaser">
        <div class="container">
          <div class="home-fabrics-teaser-card">
            <div class="h-fabrics-text">
              <span class="section-subtitle">MUESTRARIO OFICIAL DE FÁBRICA</span>
              <h3>Telas y Texturas de Primera Línea</h3>
              <p>Contamos con más de 40 tonos en Pana Velvet antimanchas, Floyd con hilado rústico, Mercury con tecnología antidesgarro pet-friendly y Cuerotex lavable.</p>
              <a href="#telas" class="btn-explore-fabrics">
                <span>Ingresar al Showroom de Telas</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            <div class="h-fabrics-pills-preview">
              <div class="h-fabric-pill-item">
                <h5>Pana Velvet</h5>
                <span>Grupo A • Suavidad Terciopelo</span>
              </div>
              <div class="h-fabric-pill-item">
                <h5>Floyd</h5>
                <span>Grupo A • Trama Rústica</span>
              </div>
              <div class="h-fabric-pill-item">
                <h5>Mercury</h5>
                <span>Grupo B • Antidesgarro Pet-Friendly</span>
              </div>
              <div class="h-fabric-pill-item">
                <h5>Cuerotex</h5>
                <span>Grupo B • Cuero Nobuk Lavable</span>
              </div>
            </div>
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

      <!-- VALUE PROPOSAL BANNER -->
      <div class="container">
        <section class="pitch-banner">
          <div class="pitch-content">
            <span class="pitch-badge">FABRICACIÓN NACIONAL A MEDIDA</span>
            <h2>Transformá tu living con un sofá hecho exactamente para vos</h2>
            <p>Conocé la diferencia de comprar directo a fábrica: saligna maciza seleccionada, rellenos de vellón siliconado y personalización absoluta con atención humana por WhatsApp.</p>
            <div class="pitch-benefits">
              <div class="pitch-benefit-item"><span class="check">✓</span> 15% OFF abonando en Efectivo o Transferencia bancaria</div>
              <div class="pitch-benefit-item"><span class="check">✓</span> Embalaje reforzado y envíos garantizados a cualquier punto del país</div>
              <div class="pitch-benefit-item"><span class="check">✓</span> Garantía estructural directa de fábrica Lupe Home</div>
            </div>
          </div>
          <div style="text-align: center;">
            <a href="https://wa.me/${STORE_INFO.phone}?text=Hola%20Lupe%20Home!%20Quiero%20asesoramiento%20personalizado" 
              target="_blank" 
              rel="noopener" 
              class="btn-primary" 
              style="padding: 16px 36px; font-size: 1.05rem; background: #FFFFFF; color: var(--color-primary);">
              <span>Hablar con un Asesor por WhatsApp</span>
            </a>
          </div>
        </section>
      </div>

      ${renderFooter()}
    </div>
  `;
}

// -------------------------------------------------------------
// VISTA 2: CATÁLOGO COMPLETO (PÁGINA DEDICADA)
// -------------------------------------------------------------
function renderCatalogView() {
  return `
    <div class="view-container">
      <!-- Page Header with Breadcrumbs -->
      <div class="page-header-banner">
        <div class="container">
          <nav class="breadcrumbs">
            <a href="#inicio">Inicio</a>
            <span class="separator">/</span>
            <span>Catálogo Completo</span>
          </nav>
          <div class="page-header-content">
            <div class="page-header-text">
              <h1>Catálogo de Sofás, Sillones y Respaldos</h1>
              <p>Elegí tu modelo, configurá las medidas exactas y cambiá los colores con renderizado en tiempo real. Todos los pedidos se coordinan y finalizan directamente por WhatsApp.</p>
            </div>
            <div class="page-header-badge">
              🏷️ 10 Modelos Curados Disponibles
            </div>
          </div>
        </div>
      </div>

      <!-- Catalog Section -->
      <section class="section catalog-section" id="catalogo">
        <div class="container">
          <!-- Controls Bar -->
          <div class="catalog-controls">
            <!-- Category Filter Tabs -->
            <div class="filter-tabs" id="category-filter-tabs">
              <button class="filter-tab ${state.currentCategory === 'all' ? 'active' : ''}" data-cat="all">
                Todos (10)
              </button>
              <button class="filter-tab ${state.currentCategory === 'sofas' ? 'active' : ''}" data-cat="sofas">
                Sofás & Rinconeros
              </button>
              <button class="filter-tab ${state.currentCategory === 'individuales' ? 'active' : ''}" data-cat="individuales">
                Sillones Individuales
              </button>
              <button class="filter-tab ${state.currentCategory === 'respaldos' ? 'active' : ''}" data-cat="respaldos">
                Respaldos de Cama
              </button>
            </div>

            <!-- Search & Payment Switch -->
            <div class="catalog-actions-right">
              <div class="search-box">
                <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input type="text" id="catalog-search-input" placeholder="Buscar modelo o medida..." value="${state.searchQuery}" />
              </div>

              <div class="payment-switch-container">
                <button class="payment-switch-btn ${state.paymentMethod === 'efectivo' ? 'active' : ''}" id="btn-pay-cash">
                  Efectivo <span class="discount-pill">15% OFF</span>
                </button>
                <button class="payment-switch-btn ${state.paymentMethod === 'tarjeta' ? 'active' : ''}" id="btn-pay-card">
                  Tarjeta
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

      <!-- Custom Size Banner -->
      <div class="container" style="margin-bottom: 60px;">
        <div style="background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-lg); padding: 32px 40px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 24px; box-shadow: var(--shadow-sm);">
          <div>
            <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 6px;">¿Buscás una medida especial o rinconero a medida?</h4>
            <p style="color: var(--color-text-muted); font-size: 0.92rem;">Fabricamos en medidas personalizadas al milímetro según las dimensiones de tu living.</p>
          </div>
          <a href="https://wa.me/${STORE_INFO.phone}?text=Hola%20Lupe%20Home!%20Quiero%20consultar%20por%20un%20sill%C3%B3n%20con%20medidas%20especiales" 
            target="_blank" 
            rel="noopener" 
            class="btn-primary" 
            style="padding: 12px 28px;">
            <span>Pedir Asesoramiento a Medida</span>
          </a>
        </div>
      </div>

      ${renderFooter()}
    </div>
  `;
}

// -------------------------------------------------------------
// VISTA 3: SHOWROOM DE TELAS & TEXTURAS (PÁGINA DEDICADA)
// -------------------------------------------------------------
function renderFabricsView() {
  return `
    <div class="view-container">
      <!-- Page Header with Breadcrumbs -->
      <div class="page-header-banner">
        <div class="container">
          <nav class="breadcrumbs">
            <a href="#inicio">Inicio</a>
            <span class="separator">/</span>
            <span>Muestrario de Telas</span>
          </nav>
          <div class="page-header-content">
            <div class="page-header-text">
              <h1>Showroom de Telas & Texturas de Primera Línea</h1>
              <p>Muestrarios oficiales de fábrica con textura en alta resolución sin filtros. Conocé las características táctiles, propiedades de resistencia y la paleta completa de cada línea.</p>
            </div>
            <div class="page-header-badge">
              🧵 4 Líneas • +40 Tonos Oficiales
            </div>
          </div>
        </div>
      </div>

      <!-- Fabric Studio Section -->
      <section class="section fabrics-section" id="telas" style="padding-top: 40px;">
        <div class="container">
          <div id="fabrics-studio-mount">
            <!-- Injected by renderFabricsStudio() -->
          </div>

          <!-- Group A vs Group B Explanatory Card -->
          <div class="fabric-guide-wrapper">
            <div class="section-header" style="text-align: left; margin-bottom: 20px; max-width: 100%;">
              <span class="section-subtitle">GUÍA DE ELECCIÓN</span>
              <h3 class="fabric-guide-title">¿Cómo elegir la tela ideal para tu hogar?</h3>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">Todas nuestras telas cuentan con tratamiento antimanchas y garantía de confección.</p>
            </div>

            <div class="fabric-groups-guide-grid">
              <div class="fabric-guide-card group-a">
                <div class="fabric-guide-card-header">
                  <h4>Grupo A (Incluido en precio base)</h4>
                  <span class="guide-badge a">Sin Adicional</span>
                </div>
                <p class="guide-card-desc">
                  Incluye las líneas <strong>Pana Velvet</strong> y <strong>Floyd</strong>. Ideales si buscás calidez aterciopelada o textura tipo lino rústico con excelente comportamiento antimanchas y estética moderna.
                </p>
                <div class="guide-card-features">
                  <span>✓ Máxima suavidad</span>
                  <span>✓ Lavable c/ agua y jabón</span>
                  <span>✓ Alta durabilidad</span>
                </div>
              </div>

              <div class="fabric-guide-card group-b">
                <div class="fabric-guide-card-header">
                  <h4>Grupo B (+10% Adicional)</h4>
                  <span class="guide-badge b">Gama Técnica</span>
                </div>
                <p class="guide-card-desc">
                  Incluye <strong>Mercury</strong> (antidesgarro especial para uñas de perros y gatos) y <strong>Cuerotex</strong> (aspecto cuero nobuk ultra soft con repelencia absoluta y limpieza con paño húmedo).
                </p>
                <div class="guide-card-features b">
                  <span>✓ Pet Friendly antidesgarro</span>
                  <span>✓ Barrera líquida total</span>
                  <span>✓ Acabado Nobuk Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${renderFooter()}
    </div>
  `;
}

// -------------------------------------------------------------
// RENDER FABRICS STUDIO (Interactive Spotlight Component)
// -------------------------------------------------------------
function renderFabricsStudio() {
  const mount = document.getElementById('fabrics-studio-mount');
  if (!mount) return;

  const activeFabric = FABRICS.find(f => f.id === state.activeFabricId) || FABRICS[0];
  const activeColor = activeFabric.colors[state.activeFabricColorIndex] || activeFabric.colors[0];

  mount.innerHTML = `
    <!-- Top 4 Fabric Tabs -->
    <div class="fabrics-nav-tabs" role="tablist">
      ${FABRICS.map(fabric => `
        <button class="fabric-tab-btn ${fabric.id === activeFabric.id ? 'active' : ''}" data-fabric-id="${fabric.id}">
          <div class="f-tab-top">
            <span class="f-tab-title">${fabric.name}</span>
            <span class="f-tab-badge ${fabric.group === 'B' ? 'b' : ''}">${fabric.groupLabel}</span>
          </div>
          <span class="f-tab-subtitle">${fabric.tagline || fabric.features}</span>
        </button>
      `).join('')}
    </div>

    <!-- Active Fabric Spotlight Card -->
    <div class="fabric-spotlight-card">
      <!-- Left Visual Column (Cropped high-res, zoom on hover) -->
      <div class="fabric-spotlight-visual">
        <div class="fabric-hero-img-wrap" title="Pasá el cursor para apreciar la textura">
          <img src="${activeFabric.sampleImage}" alt="Muestrario de ${activeFabric.name} Lupe Home" id="fabric-spotlight-img" />
          <div class="f-floating-badge-top ${activeFabric.group === 'B' ? 'b' : ''}">
            ${activeFabric.groupLabel}
          </div>
          <div class="f-floating-badge-colors">
            🎨 ${activeFabric.colors.length} Colores Oficiales
          </div>
          <div class="f-zoom-hint">
            <span>🔍 Pasá el mouse sobre la foto para apreciar textura y acabado</span>
            <span>Muestrario real</span>
          </div>
        </div>
      </div>

      <!-- Right Info & Interactive Palette Column -->
      <div class="fabric-spotlight-info">
        <div class="fabric-header-block">
          <span class="fabric-group-pill">${activeFabric.groupLabel}</span>
          <h3 class="fabric-main-title">${activeFabric.name}</h3>
          <p class="fabric-tagline">${activeFabric.tagline}</p>
        </div>

        <!-- 4 Key Specs -->
        <div class="fabric-specs-grid">
          ${(activeFabric.specs || []).map(spec => `
            <div class="fabric-spec-item">
              <span class="f-spec-label">${spec.label}</span>
              <span class="f-spec-val">${spec.value}</span>
            </div>
          `).join('')}
        </div>

        <!-- Interactive Color Swatches Board -->
        <div class="fabric-palette-box">
          <div class="f-palette-header">
            <span class="f-palette-title">Paleta de Colores en Stock (${activeFabric.colors.length} Tonos)</span>
            <span class="f-palette-sub">Tocá un color para ver detalle</span>
          </div>

          <div class="fabric-interactive-swatches">
            ${activeFabric.colors.map((c, idx) => `
              <button class="fabric-swatch-dot ${idx === state.activeFabricColorIndex ? 'active' : ''}"
                style="background-color: ${c.hex};"
                data-color-idx="${idx}"
                title="${c.name} - Muestrario Lupe Home">
              </button>
            `).join('')}
          </div>

          <div class="fabric-active-color-card">
            <div class="f-color-left">
              <span class="f-large-swatch" style="background-color: ${activeColor.hex};"></span>
              <div class="f-color-meta">
                <h5>Color Seleccionado: ${activeColor.name}</h5>
                <p>Muestrario oficial ${activeFabric.name} • Disponible para confección a medida</p>
              </div>
            </div>
            <span class="f-color-tag">En Stock</span>
          </div>
        </div>

        <!-- Actions -->
        <div class="fabric-spotlight-actions">
          <a href="#catalogo" class="btn-fabric-filter" id="btn-view-sofas-fabric">
            <span>Ver Catálogo Completo</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="https://wa.me/${STORE_INFO.phone}?text=Hola%20Lupe%20Home!%20Quiero%20consultar%20por%20muestras%20de%20la%20tela%20${encodeURIComponent(activeFabric.name)}%20en%20color%20${encodeURIComponent(activeColor.name)}"
            target="_blank" rel="noopener" class="btn-fabric-wpp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Pedir Muestras Físicas</span>
          </a>
        </div>
      </div>
    </div>
  `;

  // Attach tab events
  mount.querySelectorAll('.fabric-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const fid = btn.getAttribute('data-fabric-id');
      if (fid && fid !== state.activeFabricId) {
        state.activeFabricId = fid;
        state.activeFabricColorIndex = 0;
        renderFabricsStudio();
      }
    });
  });

  // Attach color swatch events
  mount.querySelectorAll('.fabric-swatch-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-color-idx'), 10);
      if (!isNaN(idx)) {
        state.activeFabricColorIndex = idx;
        renderFabricsStudio();
      }
    });
  });
}

// -------------------------------------------------------------
// RENDER PRODUCTS GRID (For Catalog View)
// -------------------------------------------------------------
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
        renderProductsGrid();
      });
    }
    return;
  }

  grid.innerHTML = filtered.map(renderProductCard).join('');
  attachProductCardEvents(grid);
}

// -------------------------------------------------------------
// CUSTOMIZER MODAL CONTROLLER
// -------------------------------------------------------------
function openCustomizer(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.activeProduct = product;
  state.customizer.variantIndex = product.defaultVariantIndex || 0;
  state.customizer.fabricId = 'pana-velvet';
  state.customizer.colorIndex = 0;
  state.customizer.legs = product.hasLegsOption ? 'Madera lustrada' : 'Estándar';
  state.customizer.hasTachas = false;
  state.customizer.hasPuffAddon = false;
  state.customizer.customNotes = '';
  state.customizer.selectedColorName = product.colorOptions ? product.colorOptions[0].name : null;
  state.customizer.selectedColorImage = product.colorOptions ? product.colorOptions[0].image : null;

  renderCustomizerModal();

  const backdrop = document.getElementById('customizer-modal-backdrop');
  if (backdrop) {
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeCustomizer() {
  const backdrop = document.getElementById('customizer-modal-backdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  state.activeProduct = null;
}

function renderCustomizerModal() {
  const modal = document.getElementById('customizer-modal');
  if (!modal || !state.activeProduct) return;

  const product = state.activeProduct;
  const currentVariant = product.variants[state.customizer.variantIndex];
  const currentFabric = FABRICS.find(f => f.id === state.customizer.fabricId) || FABRICS[0];
  const currentColor = currentFabric.colors[state.customizer.colorIndex] || currentFabric.colors[0];

  const basePrice = state.paymentMethod === 'efectivo' ? currentVariant.cashPrice : currentVariant.cardPrice;
  const fabricSurcharge = (basePrice * currentFabric.surchargePercent) / 100;
  const puffAddonPrice = state.customizer.hasPuffAddon ? (state.paymentMethod === 'efectivo' ? 130000 : 155000) : 0;
  const tachasAddonPrice = state.customizer.hasTachas ? (state.paymentMethod === 'efectivo' ? 25000 : 30000) : 0;
  const finalPrice = basePrice + fabricSurcharge + puffAddonPrice + tachasAddonPrice;

  let previewImage = product.image;
  if (state.customizer.selectedColorImage) {
    previewImage = state.customizer.selectedColorImage;
  } else if (currentVariant.image) {
    previewImage = currentVariant.image;
  }

  const activeColorName = state.customizer.selectedColorName || currentColor.name;
  const activeColorHex = currentColor.hex;

  const wppMessage = `Hola Lupe Home! Quiero encargar / consultar por este sofá personalizado:
• Modelo: ${product.name}
• Medida / Versión: ${currentVariant.sizeLabel}
• Línea de Tela: ${currentFabric.name} (${currentFabric.groupLabel})
• Color elegido: ${activeColorName}
• Patas: ${state.customizer.legs}
${state.customizer.hasTachas ? '• Tachas decorativas: Sí' : ''}
${state.customizer.hasPuffAddon ? '• Puff móvil: Sí (0,70 x 0,70 m)' : ''}
• Medio de Pago: ${state.paymentMethod === 'efectivo' ? 'Efectivo / Transferencia (15% OFF)' : 'Tarjeta de Crédito'}
• Total Cotizado: ${formatCurrency(finalPrice)}

¿Tienen disponibilidad y cómo coordinamos el anticipo y envío?`;

  const wppLink = `https://wa.me/${STORE_INFO.phone}?text=${encodeURIComponent(wppMessage)}`;

  modal.innerHTML = `
    <button class="modal-close-btn" id="modal-close-btn" aria-label="Cerrar modal">&times;</button>
    <div class="customizer-layout">
      <!-- LEFT PREVIEW -->
      <div class="customizer-preview">
        <div>
          <div class="preview-header">
            <span class="product-category-tag">${product.category}</span>
            <h3>${product.name}</h3>
            <p class="preview-tagline">${product.description}</p>
          </div>
          
          <div class="preview-image-box">
            <img src="${previewImage}" alt="${product.name}" id="modal-preview-img" />
            <div class="swatch-color-pill">
              <span class="swatch-circle-indicator" style="background-color: ${activeColorHex};"></span>
              <span>${activeColorName}</span>
            </div>
          </div>
        </div>

        <div class="specs-summary-card">
          <div class="spec-row">
            <span class="spec-label">Medida:</span>
            <span class="spec-value">${currentVariant.sizeLabel}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Tela:</span>
            <span class="spec-value">${currentFabric.name} (${currentFabric.groupLabel})</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Color:</span>
            <span class="spec-value">${activeColorName}</span>
          </div>
          ${product.hasLegsOption ? `
            <div class="spec-row">
              <span class="spec-label">Patas:</span>
              <span class="spec-value">${state.customizer.legs}</span>
            </div>
          ` : ''}
          <div class="spec-row">
            <span class="spec-label">Estructura:</span>
            <span class="spec-value">Saligna Maciza Encastrada</span>
          </div>
        </div>
      </div>

      <!-- RIGHT FORM -->
      <div class="customizer-form">
        <!-- STEP 1: SIZE / VARIANT -->
        <div class="form-step-title">
          <span>1. Seleccioná Medida / Versión</span>
        </div>
        <div class="variants-selector">
          ${product.variants.map((v, idx) => {
            const vPrice = state.paymentMethod === 'efectivo' ? v.cashPrice : v.cardPrice;
            return `
              <button class="variant-option-btn ${state.customizer.variantIndex === idx ? 'selected' : ''}" 
                data-variant-idx="${idx}" 
                type="button">
                <span class="variant-name">${v.sizeLabel}</span>
                <span class="variant-price">${formatCurrency(vPrice)}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- STEP 2: FABRIC GROUP -->
        <div class="form-step-title">
          <span>2. Línea de Tela</span>
        </div>
        <div class="fabric-type-selector">
          <button class="fabric-type-btn ${currentFabric.group === 'A' ? 'selected' : ''}" data-fabric-group="A" type="button">
            <span class="f-title">Grupo A (Precio Base)</span>
            <span class="f-tag">Pana Velvet o Floyd</span>
          </button>
          <button class="fabric-type-btn ${currentFabric.group === 'B' ? 'selected' : ''}" data-fabric-group="B" type="button">
            <span class="f-title">Grupo B (+10%)</span>
            <span class="f-tag">Mercury Antidesgarro o Cuerotex</span>
          </button>
        </div>

        <div class="fabric-specific-selector">
          ${FABRICS.filter(f => f.group === currentFabric.group).map(f => `
            <button class="fabric-chip-btn ${f.id === currentFabric.id ? 'selected' : ''}" data-fabric-id="${f.id}" type="button">
              ${f.name}
            </button>
          `).join('')}
        </div>

        <!-- STEP 3: COLOR SELECTION -->
        <div class="form-step-title">
          <span>3. Elegí el Color</span>
        </div>

        ${product.colorOptions && product.colorOptions.length > 0 ? `
          <div style="font-size: 0.82rem; font-weight: 600; color: var(--color-primary); margin-bottom: 8px;">
            Renderizados IA en tiempo real:
          </div>
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
      if (state.currentView === 'catalogo') renderProductsGrid();
    });
    modalPayCard.addEventListener('click', () => {
      state.paymentMethod = 'tarjeta';
      renderCustomizerModal();
      if (state.currentView === 'catalogo') renderProductsGrid();
    });
  }
}

// -------------------------------------------------------------
// MAIN APP RENDERER & ROUTER
// -------------------------------------------------------------
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Sync navbar active link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    const navKey = link.getAttribute('data-nav');
    if (
      (state.currentView === 'home' && (navKey === 'inicio' || navKey === 'hero')) ||
      (state.currentView === 'catalogo' && navKey === 'catalogo') ||
      (state.currentView === 'telas' && navKey === 'telas')
    ) {
      link.classList.add('active');
    }
  });

  // Render view template
  if (state.currentView === 'catalogo') {
    app.innerHTML = renderCatalogView();
    renderProductsGrid();
    attachCatalogEventListeners();
  } else if (state.currentView === 'telas') {
    app.innerHTML = renderFabricsView();
    renderFabricsStudio();
  } else {
    // Default: Home View
    app.innerHTML = renderHomeView();
    const homeFeaturedGrid = document.getElementById('home-featured-grid');
    if (homeFeaturedGrid) {
      attachProductCardEvents(homeFeaturedGrid);
    }
    attachHomeEventListeners();
  }

  attachGlobalEventListeners();
}

// Event Listeners for Home View
function attachHomeEventListeners() {
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
}

// Event Listeners for Catalog View
function attachCatalogEventListeners() {
  // Category filter tabs
  document.querySelectorAll('#category-filter-tabs .filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      state.currentCategory = tab.getAttribute('data-cat');
      document.querySelectorAll('#category-filter-tabs .filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderProductsGrid();
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

  // Payment method switchers
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
}

// Event Listeners for Modal & Navigation
function attachGlobalEventListeners() {
  // Modal Backdrop click to close
  const backdrop = document.getElementById('customizer-modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeCustomizer();
      }
    });
  }

  // Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinksMenu = document.getElementById('nav-links-menu');
  if (mobileBtn && navLinksMenu) {
    mobileBtn.onclick = (e) => {
      e.stopPropagation();
      mobileBtn.classList.toggle('open');
      navLinksMenu.classList.toggle('open');
    };

    // Close menu when clicking outside or on a link
    navLinksMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileBtn.classList.remove('open');
        navLinksMenu.classList.remove('open');
      });
    });
  }

  // Keyboard Escape to close modal or mobile menu
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCustomizer();
      if (mobileBtn && navLinksMenu) {
        mobileBtn.classList.remove('open');
        navLinksMenu.classList.remove('open');
      }
    }
  });
}

// Handle Client-Side Hash Routing
function handleRouting() {
  const hash = window.location.hash.toLowerCase().replace('#', '');

  if (hash.startsWith('catalogo')) {
    state.currentView = 'catalogo';
    // Check if category is specified in hash e.g. #catalogo?cat=sofas
    const queryString = hash.includes('?') ? hash.split('?')[1] : '';
    const params = new URLSearchParams(queryString);
    if (params.has('cat')) {
      state.currentCategory = params.get('cat');
    }
  } else if (hash.startsWith('telas')) {
    state.currentView = 'telas';
  } else if (hash.includes('faq')) {
    state.currentView = 'home';
    renderApp();
    setTimeout(() => {
      const faqEl = document.getElementById('faq');
      if (faqEl) faqEl.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    return;
  } else {
    state.currentView = 'home';
  }

  renderApp();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// Router Event Listeners
window.addEventListener('hashchange', handleRouting);

document.addEventListener('DOMContentLoaded', () => {
  handleRouting();
});
