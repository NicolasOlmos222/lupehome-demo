(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={name:`Lupe Home`,tagline:`Diseño & Fabricación de Sofás, Sillones y Respaldos a Medida`,phone:`5493564561719`,phoneDisplay:`3564 56-1719`,instagram:`lupehomesf`,instagramUrl:`https://www.instagram.com/lupehomesf/`,location:`San Francisco, Córdoba, Argentina`,leadTime:`Stock inmediato o 40 - 50 días hábiles a medida`,shipping:`Envíos a todo el país`,construction:`Estructura en madera saligna maciza y poliéster alta densidad (26/28 kg)`},t=[{id:`pana-velvet`,name:`Pana Velvet`,group:`A`,groupLabel:`Grupo A (Precio Base)`,surchargePercent:0,tagline:`Tacto aterciopelado de alta gama con brillo sutil y máximo confort`,features:`Tacto aterciopelado premium, tecnología antimanchas, lavable`,sampleImage:`./images/fabrics/pana-velvet.webp`,specs:[{label:`Tacto y Acabado`,value:`Aterciopelado plush ultra soft mate`},{label:`Protección`,value:`Tratamiento antimanchas con teflón`},{label:`Apto Mascotas`,value:`Excelente (el pelo se retira con facilidad)`},{label:`Limpieza`,value:`Paño húmedo con jabón blanco o neutro`}],colors:[{name:`Marfil`,hex:`#EAE5D9`},{name:`Sepia`,hex:`#BFB19B`},{name:`Visón`,hex:`#9E8F7F`},{name:`Tabaco`,hex:`#634739`},{name:`Azafrán`,hex:`#DE9B35`},{name:`Óxido`,hex:`#B85429`},{name:`Castaño`,hex:`#75453B`},{name:`Café`,hex:`#422F26`},{name:`Verde`,hex:`#5C6C52`},{name:`Vino`,hex:`#6A2238`},{name:`Plata`,hex:`#C6CED7`},{name:`Grafito`,hex:`#4B525B`},{name:`Gris Pimienta`,hex:`#6A6E75`},{name:`Índigo`,hex:`#2A4568`},{name:`Negro`,hex:`#1D1E22`}]},{id:`floyd`,name:`Floyd`,group:`A`,groupLabel:`Grupo A (Precio Base)`,surchargePercent:0,tagline:`Trama rústica tejida con hilado bicolor y estética nórdica contemporánea`,features:`Textura tejida moderna, alta durabilidad, antimanchas y lavable`,sampleImage:`./images/fabrics/floyd.webp`,specs:[{label:`Tacto y Acabado`,value:`Textura tejida tipo lino con cuerpo pesado`},{label:`Protección`,value:`Proceso hidrorrepelente antimanchas`},{label:`Resistencia`,value:`Uso diario familiar de alta fricción`},{label:`Limpieza`,value:`Paño húmedo o limpieza en seco`}],colors:[{name:`Ivory`,hex:`#EDE9E1`},{name:`Beige`,hex:`#D4C5AF`},{name:`Stone`,hex:`#ABA79F`},{name:`Visón`,hex:`#8F8378`},{name:`Nut`,hex:`#CBA39D`},{name:`Acqua Green`,hex:`#A0B8B2`},{name:`Olive`,hex:`#707A5E`},{name:`Forest`,hex:`#244C3F`},{name:`Ocre`,hex:`#B8702E`},{name:`Yellow`,hex:`#E2A928`},{name:`Gold`,hex:`#D49B28`},{name:`Sky`,hex:`#7D9EB8`},{name:`Índigo`,hex:`#253B5A`},{name:`Steel`,hex:`#575D66`},{name:`Graphite`,hex:`#2E3137`}]},{id:`mercury`,name:`Mercury`,group:`B`,groupLabel:`Grupo B (+10% Adicional)`,surchargePercent:10,tagline:`Tejido técnico antidesgarro con tecnología pet-friendly para hogares con mascotas`,features:`Antidesgarro reforzado (pet-friendly), antimanchas y lavable`,sampleImage:`./images/fabrics/mercury.webp`,specs:[{label:`Tacto y Acabado`,value:`Microfibra compacta con trama antidesgarro`},{label:`Pet Friendly`,value:`Hilos de alta resistencia a uñas de perros y gatos`},{label:`Protección`,value:`Barrera líquida de máxima absorción cero`},{label:`Limpieza`,value:`100% Lavable con agua y jabón neutro`}],colors:[{name:`Oyster`,hex:`#DDD6CA`},{name:`Porcelain`,hex:`#F2EDE4`},{name:`Ivory`,hex:`#E8E2D5`},{name:`Yellow`,hex:`#E2AA29`},{name:`Visón`,hex:`#9C9185`},{name:`Pearl`,hex:`#CCD1D8`},{name:`Indigo`,hex:`#2E4A77`},{name:`Seal`,hex:`#656D75`},{name:`Titanium`,hex:`#4B5056`},{name:`Black`,hex:`#1C1D21`}]},{id:`cuerotex`,name:`Cuerotex`,group:`B`,groupLabel:`Grupo B (+10% Adicional)`,surchargePercent:10,tagline:`Aspecto cuero nobuk ultra soft: elegancia atemporal y limpieza en un solo paso`,features:`Aspecto cuero nobuk ultra soft, lavable, máxima resistencia al uso`,sampleImage:`./images/fabrics/cuerotex.webp`,specs:[{label:`Tacto y Acabado`,value:`Sensación nobuk aterciopelado con cuerpo de cuero`},{label:`Impermeabilidad`,value:`Impermeable total a líquidos y derrames`},{label:`Resistencia`,value:`No se cuartea ni reseca con el tiempo`},{label:`Limpieza`,value:`Pasada de trapo húmedo y queda impecable`}],colors:[{name:`Chocolate`,hex:`#3B2820`},{name:`Tostado`,hex:`#664332`},{name:`Sand`,hex:`#C2A78F`},{name:`Beige`,hex:`#D7C6B2`},{name:`Bone`,hex:`#ECE5D8`},{name:`Cemento`,hex:`#A8A6A1`},{name:`Visón`,hex:`#7F7268`},{name:`Elephant`,hex:`#4F4B4A`},{name:`Suela`,hex:`#C88A58`},{name:`Ocre`,hex:`#BD7830`},{name:`Masala`,hex:`#6C3742`},{name:`Hunter Green`,hex:`#25473F`},{name:`Cobalto`,hex:`#2B5B7E`},{name:`Stone`,hex:`#8E9499`},{name:`Grey`,hex:`#595E66`},{name:`Black`,hex:`#151515`}]}],n=[{id:`sofa-zaro`,name:`Sofá Zaro`,category:`sofas`,categoryLabel:`Sofás & Rinconeros`,badge:`Recomendado`,tagline:`El equilibrio perfecto entre confort mullido y diseño contemporáneo`,description:`Este modelo contiene todo lo que se ve en las imágenes (incluye almohadones cilíndricos y decorativos). Es un modelo súper cómodo, lo súper recomendamos para living principal.`,image:`./images/products/sofa-zaro-vison.webp`,colorOptions:[{name:`Visón / Arena`,hex:`#9E8F7F`,image:`./images/products/sofa-zaro-vison.webp`},{name:`Gris Grafito`,hex:`#4B525B`,image:`./images/products/sofa-zaro-grafito.webp`},{name:`Óxido Terracota`,hex:`#BA552A`,image:`./images/products/sofa-zaro-oxido.webp`}],variants:[{sizeLabel:`2,10 x 1,00 m`,cashPrice:68e4,cardPrice:795e3,image:`./images/products/sofa-zaro-vison.webp`},{sizeLabel:`2,10 x 1,00 m + Puff (0,70 x 0,70)`,cashPrice:81e4,cardPrice:95e4,image:`./images/products/sofa-zaro-210-puff.webp`},{sizeLabel:`2,50 x 1,00 m (Extra Amplio)`,cashPrice:845e3,cardPrice:99e4,image:`./images/products/sofa-zaro-250.webp`},{sizeLabel:`Rinconero 3,00 x 2,00 m (Incluye 6 almohadones)`,cashPrice:123e4,cardPrice:1445e3,image:`./images/products/rinconero-zaro-3x2.webp`}],defaultVariantIndex:0,hasLegsOption:!0,hasPuffOption:!0,hasTachasOption:!1},{id:`sofa-rocco`,name:`Sofá Rocco`,category:`sofas`,categoryLabel:`Sofás & Rinconeros`,badge:`Más Elegido`,tagline:`Líneas rectas elegantes, estructura robusta y máxima versatilidad`,description:`Uno de los modelos más elegidos por nuestros clientes. Con opción de agregar puff móvil para convertirlo en rinconero a la izquierda o derecha según tu espacio.`,image:`./images/products/sofa-rocco-arena.webp`,colorOptions:[{name:`Beige Arena`,hex:`#D6C5AF`,image:`./images/products/sofa-rocco-arena.webp`},{name:`Azul Índigo`,hex:`#2B4567`,image:`./images/products/sofa-rocco-indigo.webp`},{name:`Verde Oliva`,hex:`#5C6C52`,image:`./images/products/sofa-rocco-oliva.webp`}],variants:[{sizeLabel:`1,60 x 0,90 m`,cashPrice:545e3,cardPrice:64e4,image:`./images/products/sofa-rocco-arena.webp`},{sizeLabel:`1,80 x 0,90 m`,cashPrice:545e3,cardPrice:64e4,image:`./images/products/sofa-rocco-arena.webp`},{sizeLabel:`1,80 x 0,90 m + Puff (0,70 x 0,70)`,cashPrice:654e3,cardPrice:765e3,image:`./images/products/sofa-rocco-180-puff.webp`},{sizeLabel:`2,00 x 0,90 m`,cashPrice:585e3,cardPrice:685e3,image:`./images/products/sofa-rocco-arena.webp`},{sizeLabel:`2,00 x 1,60 m (con Puff incluido)`,cashPrice:694e3,cardPrice:81e4,image:`./images/products/sofa-rocco-200-puff.webp`},{sizeLabel:`Mega Rinconero 3,30 x 1,95 m (Sofá 3,30x1 + Puff 0,95x0,95)`,cashPrice:101e4,cardPrice:1185e3,image:`./images/products/rinconero-rocco-330.webp`}],defaultVariantIndex:1,hasLegsOption:!0,hasPuffOption:!0,hasTachasOption:!1},{id:`sofa-cama`,name:`Sofá Cama Multifunción`,category:`sofas`,categoryLabel:`Sofás & Rinconeros`,badge:`2 en 1`,tagline:`El aliado perfecto para tu living y recibir visitas con total confort`,description:`Sofá de día, cama de 1 o 2 plazas de noche. Mecanismo suave y colchón de espuma de alta densidad para un descanso reparador garantizado.`,image:`./images/products/sofa-cama-gris.webp`,colorOptions:[{name:`Gris Slate`,hex:`#5A6472`,image:`./images/products/sofa-cama-gris.webp`},{name:`Beige Tostado`,hex:`#C2A78F`,image:`./images/products/sofa-cama-beige.webp`},{name:`Verde Oliva`,hex:`#4E5C48`,image:`./images/products/sofa-cama-verde.webp`}],variants:[{sizeLabel:`1 Plaza (Cerrado: 1x1 m | Abierto: 0,70 x 1,90 m)`,cashPrice:39e4,cardPrice:455e3,image:`./images/products/sofa-cama-gris.webp`},{sizeLabel:`2 Plazas 1,60 x 1,00 m (Cama 1,40 x 1,90 m)`,cashPrice:59e4,cardPrice:69e4,image:`./images/products/sofa-cama-gris.webp`},{sizeLabel:`2 Plazas 1,80 x 1,00 m (Cama 1,40 x 1,90 m)`,cashPrice:59e4,cardPrice:69e4,image:`./images/products/sofa-cama-gris.webp`},{sizeLabel:`2 Plazas 1,80 x 1,70 m con Puff (0,70 x 0,70)`,cashPrice:689e3,cardPrice:82e4,image:`./images/products/sofa-cama-beige.webp`}],defaultVariantIndex:1,hasLegsOption:!0,hasPuffOption:!0,hasTachasOption:!1},{id:`sofa-paris`,name:`Sofá París`,category:`sofas`,categoryLabel:`Sofás & Rinconeros`,badge:`Minimalista`,tagline:`Estilo sofisticado con asiento capitoné acolchado y patas elevadas`,description:`Diseño esbelto y moderno, ideal para ambientes despejados. Disponible en versión sofá lineal o rinconero de 2,50 x 1,70 m.`,image:`./images/products/paris-col1.webp`,colorOptions:[{name:`Gris Carbón`,hex:`#3D4045`,image:`./images/products/paris-col1.webp`},{name:`Gris Plata`,hex:`#B5BAC2`,image:`./images/products/paris-col2.webp`}],variants:[{sizeLabel:`1,80 x 0,90 m`,cashPrice:52e4,cardPrice:61e4,image:`./images/products/paris-col1.webp`},{sizeLabel:`2,10 x 0,90 m`,cashPrice:56e4,cardPrice:655e3,image:`./images/products/paris-col1.webp`},{sizeLabel:`Rinconero 2,50 x 1,70 m (Espacios amplios)`,cashPrice:78e4,cardPrice:915e3,image:`./images/products/rinconero-paris-250.webp`}],defaultVariantIndex:1,hasLegsOption:!0,hasPuffOption:!0,hasTachasOption:!1},{id:`individual-perla`,name:`Sillón Individual Perla`,category:`individuales`,categoryLabel:`Sillones Individuales`,badge:`Top Ventas`,tagline:`El individual más cómodo y también el más elegido por nuestros clientes`,description:`Curvatura envolvente tipo poltrona club. Se adapta a cualquier rincón, dormitorio o living como pieza de destaque.`,image:`./images/products/individual-perla-marfil.webp`,colorOptions:[{name:`Marfil / Crudo`,hex:`#EAE5D9`,image:`./images/products/individual-perla-marfil.webp`},{name:`Ocre Mostaza`,hex:`#DE9B35`,image:`./images/products/individual-perla-ocre.webp`},{name:`Visón Taupe`,hex:`#9E8F7F`,image:`./images/products/individual-perla-vison.webp`}],variants:[{sizeLabel:`Individual Standard`,cashPrice:16e4,cardPrice:185e3,image:`./images/products/individual-perla-marfil.webp`}],defaultVariantIndex:0,hasLegsOption:!0,hasPuffOption:!1,hasTachasOption:!1},{id:`individual-jota`,name:`Sillón Individual Jota`,category:`individuales`,categoryLabel:`Sillones Individuales`,badge:`Con Tachas`,tagline:`Base circular capitoneada con tachas perimetrales y patas metálicas`,description:`Sillón giratorio o fijo con base circular acolchada, delicado detalle de tachas plateadas en el contorno superior del respaldo.`,image:`./images/products/jota-col1.webp`,colorOptions:[{name:`Marfil Crema`,hex:`#EDE8DD`,image:`./images/products/jota-col1.webp`},{name:`Visón Topo`,hex:`#8E8278`,image:`./images/products/jota-col2.webp`},{name:`Grafito Oscuro`,hex:`#4B525B`,image:`./images/products/jota-col3.webp`}],variants:[{sizeLabel:`Individual Circular con Tachas`,cashPrice:18e4,cardPrice:21e4,image:`./images/products/jota-col1.webp`}],defaultVariantIndex:0,hasLegsOption:!0,hasPuffOption:!1,hasTachasOption:!0},{id:`individual-benetton`,name:`Sillón Individual Benetton`,category:`individuales`,categoryLabel:`Sillones Individuales`,badge:`Lectura & Relax`,tagline:`Respaldo alto anatómico y apoyabrazos confortables`,description:`El clásico sillón de lectura contemporáneo. Soporte lumbar óptimo y apoyo de cabeza para relax total en dormitorios o escritorios.`,image:`./images/products/benetton-col1.webp`,colorOptions:[{name:`Castaño Café`,hex:`#634739`,image:`./images/products/benetton-col1.webp`},{name:`Grafito`,hex:`#45484D`,image:`./images/products/benetton-col2.webp`},{name:`Azul Petróleo`,hex:`#294861`,image:`./images/products/benetton-col3.webp`}],variants:[{sizeLabel:`Individual Respaldo Alto`,cashPrice:205e3,cardPrice:24e4,image:`./images/products/benetton-col1.webp`}],defaultVariantIndex:0,hasLegsOption:!0,hasPuffOption:!1,hasTachasOption:!1},{id:`respaldo-bastones-vert-horiz`,name:`Respaldo Bastones (Vert. u Horiz.)`,category:`respaldos`,categoryLabel:`Respaldos de Cama`,badge:`El Más Elegido`,tagline:`El modelo más elegido por nuestros clientes, súper moderno`,description:`Tapizado acolchado con paneles tipo bastones que aportan profundidad visual al dormitorio. Fabricado a la medida exacta de tu sommier (1.00m hasta 2.00m o especiales).`,image:`./images/products/respaldo-bastones-gris.webp`,colorOptions:[{name:`Gris Perla`,hex:`#C6CED7`,image:`./images/products/respaldo-bastones-gris.webp`},{name:`Beige Arena`,hex:`#D4C5AF`,image:`./images/products/respaldo-bastones-beige.webp`},{name:`Verde Forest`,hex:`#244C3F`,image:`./images/products/respaldo-bastones-verde.webp`}],variants:[{sizeLabel:`1,00 m (1 Plaza / Sommier chico)`,cashPrice:154e3,cardPrice:18e4,image:`./images/products/respaldo-bastones-gris.webp`},{sizeLabel:`1,40 m (2 Plazas estándar)`,cashPrice:185e3,cardPrice:215e3,image:`./images/products/respaldo-bastones-gris.webp`},{sizeLabel:`1,60 m (Queen Size)`,cashPrice:207e3,cardPrice:24e4,image:`./images/products/respaldo-bastones-gris.webp`},{sizeLabel:`1,80 m (King Size)`,cashPrice:218e3,cardPrice:255e3,image:`./images/products/respaldo-bastones-gris.webp`},{sizeLabel:`2,00 m (Super King)`,cashPrice:229e3,cardPrice:265e3,image:`./images/products/respaldo-bastones-gris.webp`}],defaultVariantIndex:1,hasLegsOption:!1,hasPuffOption:!1,hasTachasOption:!1},{id:`respaldo-liso-con-tachas`,name:`Respaldo Liso con Tachas`,category:`respaldos`,categoryLabel:`Respaldos de Cama`,badge:`Tendencia`,tagline:`Super moderno con marco perimetral de tachas metálicas`,description:`Frente tapizado liso y pulcro delimitado por una hilera de tachas niqueladas u oxidadas. Dale un toque de hotel 5 estrellas a tu habitación.`,image:`./images/products/respaldo-tachas-col1.webp`,colorOptions:[{name:`Marfil Crudo`,hex:`#EDE6DB`,image:`./images/products/respaldo-tachas-col1.webp`},{name:`Visón Topo`,hex:`#92867B`,image:`./images/products/respaldo-tachas-col2.webp`},{name:`Castaño Café`,hex:`#5E4337`,image:`./images/products/respaldo-tachas-col3.webp`}],variants:[{sizeLabel:`1,00 m (1 Plaza)`,cashPrice:154e3,cardPrice:18e4,image:`./images/products/respaldo-tachas-col1.webp`},{sizeLabel:`1,40 m (2 Plazas)`,cashPrice:185e3,cardPrice:215e3,image:`./images/products/respaldo-tachas-col1.webp`},{sizeLabel:`1,60 m (Queen Size)`,cashPrice:207e3,cardPrice:24e4,image:`./images/products/respaldo-tachas-col1.webp`},{sizeLabel:`1,80 m (King Size)`,cashPrice:218e3,cardPrice:255e3,image:`./images/products/respaldo-tachas-col1.webp`},{sizeLabel:`2,00 m (Super King)`,cashPrice:229e3,cardPrice:265e3,image:`./images/products/respaldo-tachas-col1.webp`}],defaultVariantIndex:1,hasLegsOption:!1,hasPuffOption:!1,hasTachasOption:!0},{id:`respaldo-doble-fila-tachas`,name:`Respaldo Doble Fila de Tachas`,category:`respaldos`,categoryLabel:`Respaldos de Cama`,badge:`Alta Gama`,tagline:`Modelo súper tendencia con doble marco y gran prestancia`,description:`Doble hilera de tachas colocadas artesanalmente una por una. Un diseño imponente que realza cualquier ambiente.`,image:`./images/products/respaldo-doble-col1.webp`,colorOptions:[{name:`Gris Carbón`,hex:`#42454A`,image:`./images/products/respaldo-doble-col1.webp`},{name:`Beige Lino`,hex:`#D2C7B8`,image:`./images/products/respaldo-doble-col2.webp`}],variants:[{sizeLabel:`1,00 m (1 Plaza)`,cashPrice:154e3,cardPrice:18e4,image:`./images/products/respaldo-doble-col1.webp`},{sizeLabel:`1,40 m (2 Plazas)`,cashPrice:185e3,cardPrice:215e3,image:`./images/products/respaldo-doble-col1.webp`},{sizeLabel:`1,60 m (Queen Size)`,cashPrice:207e3,cardPrice:24e4,image:`./images/products/respaldo-doble-col1.webp`},{sizeLabel:`1,80 m (King Size)`,cashPrice:218e3,cardPrice:255e3,image:`./images/products/respaldo-doble-col1.webp`},{sizeLabel:`2,00 m (Super King)`,cashPrice:229e3,cardPrice:265e3,image:`./images/products/respaldo-doble-col1.webp`}],defaultVariantIndex:1,hasLegsOption:!1,hasPuffOption:!1,hasTachasOption:!0}],r=[{q:`¿Tienen stock para entrega inmediata?`,a:`¡Sí! Contamos con modelos en stock seleccionados para entrega inmediata en nuestro showroom. En caso de solicitar un producto personalizado o en una medida/tela específica que no esté en stock, el plazo de fabricación es de aproximadamente 40 a 50 días hábiles.`},{q:`¿Cómo se diferencian las telas del Grupo A y Grupo B?`,a:`Trabajamos con telas de altísima calidad divididas en dos grupos:
• GRUPO A: Pana Velvet (antimanchas, lavable) y Floyd (antimanchas, lavable). Si elegís telas del Grupo A, el precio es el precio base que figura en el catálogo.
• GRUPO B: Mercury (antidesgarro pet-friendly y antimanchas) y Cuerotex (nobuk soft lavable). Al pedir en telas del Grupo B, tiene un incremento del 10% sobre el precio de lista.`},{q:`¿Qué materiales componen los sillones y respaldos?`,a:`Todos nuestros productos se fabrican con estructura sólida en madera saligna maciza estacionada, uniones reforzadas y rellenos de espuma poliéster de alta densidad (26 a 28 kg/m³), garantizando confort prolongado y resistencia sin deformaciones.`},{q:`¿Hacen envíos a todo el país?`,a:`Realizamos envíos a todo el territorio argentino a través de expresos y transportes de confianza. El costo de envío corre por cuenta del cliente y coordinamos el despacho asegurando el correcto embalaje protector.`},{q:`¿Qué tipo de patas incluyen los sofás?`,a:`Todos nuestros modelos de sofá, rinconero o individual vienen por defecto con patas de madera maciza lustrada. Si preferís patas de aluminio cromado pulido, podés consultarnos directamente al cotizar.`},{q:`¿Se puede sumar un puff a los sofás?`,a:`¡Totalmente! A casi todos los sofás se les puede anexar un puff a juego (por ejemplo de 0,70 x 0,70 m o medidas especiales) para convertirlo en un cómodo rinconero o chaiselongue móvil.`}];function i(e){return new Intl.NumberFormat(`es-AR`,{style:`currency`,currency:`ARS`,maximumFractionDigits:0}).format(e)}var a={currentView:`home`,currentCategory:`all`,searchQuery:``,paymentMethod:`efectivo`,activeFabricId:`pana-velvet`,activeFabricColorIndex:0,activeProduct:null,customizer:{variantIndex:0,fabricId:`pana-velvet`,colorIndex:2,legs:`Madera lustrada`,hasTachas:!1,hasPuffAddon:!1,customNotes:``,selectedColorName:null,selectedColorImage:null}};function o(t){let n=t.variants[t.defaultVariantIndex||0],r=a.paymentMethod===`efectivo`?n.cashPrice:n.cardPrice,o=t.colorOptions||[{name:`Tono Estándar`,hex:`#9E8F7F`,image:t.image},{name:`Grafito`,hex:`#4B525B`,image:t.image},{name:`Ocre / Arena`,hex:`#DE9B35`,image:t.image}],s=o[0].image;return`
    <div class="product-card" data-product-id="${t.id}">
      <div class="product-image-container">
        <img src="${s}" alt="${t.name}" id="card-img-${t.id}" loading="lazy" />
        ${t.badge?`<span class="product-badge ${t.badge===`Más Elegido`||t.badge===`Top Ventas`?`gold`:``}">${t.badge}</span>`:``}
        
        <!-- Color Switcher Dots -->
        <div class="card-color-selector" title="Hacé clic para cambiar el color">
          <span class="card-color-label">Color:</span>
          ${o.map((e,n)=>`
            <button class="card-color-dot ${n===0?`active`:``}" 
              data-color-dot-product="${t.id}"
              data-color-img="${e.image}"
              data-color-name="${e.name}"
              style="background-color: ${e.hex};" 
              title="${e.name}">
            </button>
          `).join(``)}
        </div>
      </div>

      <div class="product-body">
        <span class="product-category-tag">${t.category}</span>
        <h3 class="product-title">${t.name}</h3>
        <div class="product-dimensions">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 6H3M21 12H3M21 18H3"/></svg>
          <span>Desde ${n.sizeLabel}</span>
        </div>
        <p class="product-desc">${t.description}</p>
        
        <div class="product-price-section">
          <div>
            <div class="price-label">Precio ${a.paymentMethod===`efectivo`?`Efectivo / Transf.`:`Tarjeta`}:</div>
            <div class="price-value">${i(r)}</div>
          </div>
          <div class="price-sub">
            ${a.paymentMethod===`efectivo`?`🔥 15% OFF Incluido`:`Hasta 6 cuotas`}
          </div>
        </div>

        <div class="product-actions">
          <button class="btn-customize" data-customize-id="${t.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span>Personalizar y Cotizar</span>
          </button>
          
          <a href="https://wa.me/${e.phone}?text=Hola%20Lupe%20Home!%20Quiero%20consultar%20por%20el%20modelo%20${encodeURIComponent(t.name)}" 
            target="_blank" 
            rel="noopener" 
            class="btn-quick-wpp" 
            title="Consulta Rápida por WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </a>
        </div>
      </div>
    </div>
  `}function s(e){e&&(e.querySelectorAll(`.card-color-dot`).forEach(t=>{t.addEventListener(`click`,n=>{n.stopPropagation();let r=t.getAttribute(`data-color-dot-product`),i=t.getAttribute(`data-color-img`),a=document.getElementById(`card-img-${r}`);a&&i&&(a.classList.add(`fading`),setTimeout(()=>{a.src=i,a.classList.remove(`fading`)},180)),e.querySelectorAll(`.card-color-dot[data-color-dot-product="${r}"]`).forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)})}),e.querySelectorAll(`[data-customize-id]`).forEach(e=>{e.addEventListener(`click`,()=>{m(e.getAttribute(`data-customize-id`))})}))}function c(){return`
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
              <p>📱 WhatsApp: <a href="https://wa.me/${e.phone}" target="_blank" rel="noopener" style="color: #FFFFFF; font-weight: 600;">${e.phoneDisplay}</a></p>
              <p>📸 Instagram: <a href="${e.instagramUrl}" target="_blank" rel="noopener" style="color: #F8D98C; font-weight: 600;">@${e.instagram}</a></p>
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
  `}function l(){return`
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
            ${n.slice(0,3).map(o).join(``)}
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
            ${r.map((e,t)=>`
              <div class="faq-item ${t===0?`open`:``}">
                <button class="faq-question">
                  <span>${e.q}</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-answer">
                  <p style="white-space: pre-line;">${e.a}</p>
                </div>
              </div>
            `).join(``)}
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
            <a href="https://wa.me/${e.phone}?text=Hola%20Lupe%20Home!%20Quiero%20asesoramiento%20personalizado" 
              target="_blank" 
              rel="noopener" 
              class="btn-primary" 
              style="padding: 16px 36px; font-size: 1.05rem; background: #FFFFFF; color: var(--color-primary);">
              <span>Hablar con un Asesor por WhatsApp</span>
            </a>
          </div>
        </section>
      </div>

      ${c()}
    </div>
  `}function u(){return`
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
              <button class="filter-tab ${a.currentCategory===`all`?`active`:``}" data-cat="all">
                Todos (10)
              </button>
              <button class="filter-tab ${a.currentCategory===`sofas`?`active`:``}" data-cat="sofas">
                Sofás & Rinconeros
              </button>
              <button class="filter-tab ${a.currentCategory===`individuales`?`active`:``}" data-cat="individuales">
                Sillones Individuales
              </button>
              <button class="filter-tab ${a.currentCategory===`respaldos`?`active`:``}" data-cat="respaldos">
                Respaldos de Cama
              </button>
            </div>

            <!-- Search & Payment Switch -->
            <div class="catalog-actions-right">
              <div class="search-box">
                <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input type="text" id="catalog-search-input" placeholder="Buscar modelo o medida..." value="${a.searchQuery}" />
              </div>

              <div class="payment-switch-container">
                <button class="payment-switch-btn ${a.paymentMethod===`efectivo`?`active`:``}" id="btn-pay-cash">
                  Efectivo <span class="discount-pill">15% OFF</span>
                </button>
                <button class="payment-switch-btn ${a.paymentMethod===`tarjeta`?`active`:``}" id="btn-pay-card">
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
          <a href="https://wa.me/${e.phone}?text=Hola%20Lupe%20Home!%20Quiero%20consultar%20por%20un%20sill%C3%B3n%20con%20medidas%20especiales" 
            target="_blank" 
            rel="noopener" 
            class="btn-primary" 
            style="padding: 12px 28px;">
            <span>Pedir Asesoramiento a Medida</span>
          </a>
        </div>
      </div>

      ${c()}
    </div>
  `}function d(){return`
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
          <div style="margin-top: 50px; background: #FFFFFF; border: 1px solid var(--color-border); border-radius: var(--radius-xl); padding: 36px 40px; box-shadow: var(--shadow-sm);">
            <div class="section-header" style="text-align: left; margin-bottom: 24px; max-width: 100%;">
              <span class="section-subtitle">GUÍA DE ELECCIÓN</span>
              <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-primary); margin-bottom: 8px;">¿Cómo elegir la tela ideal para tu hogar?</h3>
              <p style="color: var(--color-text-muted); font-size: 0.95rem;">Todas nuestras telas cuentan con tratamiento antimanchas y garantía de confección.</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px;">
              <div style="background: var(--color-bg); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 24px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary);">Grupo A (Incluido en precio base)</h4>
                  <span style="font-size: 0.75rem; font-weight: 700; padding: 4px 10px; background: #EAE5D9; border-radius: 999px;">Sin Adicional</span>
                </div>
                <p style="color: var(--color-text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 14px;">
                  Incluye las líneas <strong>Pana Velvet</strong> y <strong>Floyd</strong>. Ideales si buscás calidez aterciopelada o textura tipo lino rústico con excelente comportamiento antimanchas y estética moderna.
                </p>
                <div style="font-size: 0.82rem; font-weight: 600; color: var(--color-accent);">
                  ✓ Máxima suavidad • ✓ Lavable con agua y jabón • ✓ Alta durabilidad
                </div>
              </div>

              <div style="background: var(--color-accent-light); border: 1px solid rgba(184, 103, 59, 0.25); border-radius: var(--radius-md); padding: 24px;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                  <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--color-accent);">Grupo B (+10% Adicional)</h4>
                  <span style="font-size: 0.75rem; font-weight: 700; padding: 4px 10px; background: var(--color-accent); color: #FFFFFF; border-radius: 999px;">Gama Técnica</span>
                </div>
                <p style="color: var(--color-text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 14px;">
                  Incluye <strong>Mercury</strong> (antidesgarro especial para uñas de perros y gatos) y <strong>Cuerotex</strong> (aspecto cuero nobuk ultra soft con repelencia absoluta y limpieza con paño húmedo).
                </p>
                <div style="font-size: 0.82rem; font-weight: 600; color: var(--color-accent);">
                  ✓ Pet Friendly antidesgarro • ✓ Barrera líquida total • ✓ Acabado Nobuk Premium
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      ${c()}
    </div>
  `}function f(){let n=document.getElementById(`fabrics-studio-mount`);if(!n)return;let r=t.find(e=>e.id===a.activeFabricId)||t[0],i=r.colors[a.activeFabricColorIndex]||r.colors[0];n.innerHTML=`
    <!-- Top 4 Fabric Tabs -->
    <div class="fabrics-nav-tabs" role="tablist">
      ${t.map(e=>`
        <button class="fabric-tab-btn ${e.id===r.id?`active`:``}" data-fabric-id="${e.id}">
          <div class="f-tab-top">
            <span class="f-tab-title">${e.name}</span>
            <span class="f-tab-badge ${e.group===`B`?`b`:``}">${e.groupLabel}</span>
          </div>
          <span class="f-tab-subtitle">${e.tagline||e.features}</span>
        </button>
      `).join(``)}
    </div>

    <!-- Active Fabric Spotlight Card -->
    <div class="fabric-spotlight-card">
      <!-- Left Visual Column (Cropped high-res, zoom on hover) -->
      <div class="fabric-spotlight-visual">
        <div class="fabric-hero-img-wrap" title="Pasá el cursor para apreciar la textura">
          <img src="${r.sampleImage}" alt="Muestrario de ${r.name} Lupe Home" id="fabric-spotlight-img" />
          <div class="f-floating-badge-top ${r.group===`B`?`b`:``}">
            ${r.groupLabel}
          </div>
          <div class="f-floating-badge-colors">
            🎨 ${r.colors.length} Colores Oficiales
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
          <span class="fabric-group-pill">${r.groupLabel}</span>
          <h3 class="fabric-main-title">${r.name}</h3>
          <p class="fabric-tagline">${r.tagline}</p>
        </div>

        <!-- 4 Key Specs -->
        <div class="fabric-specs-grid">
          ${(r.specs||[]).map(e=>`
            <div class="fabric-spec-item">
              <span class="f-spec-label">${e.label}</span>
              <span class="f-spec-val">${e.value}</span>
            </div>
          `).join(``)}
        </div>

        <!-- Interactive Color Swatches Board -->
        <div class="fabric-palette-box">
          <div class="f-palette-header">
            <span class="f-palette-title">Paleta de Colores en Stock (${r.colors.length} Tonos)</span>
            <span class="f-palette-sub">Tocá un color para ver detalle</span>
          </div>

          <div class="fabric-interactive-swatches">
            ${r.colors.map((e,t)=>`
              <button class="fabric-swatch-dot ${t===a.activeFabricColorIndex?`active`:``}"
                style="background-color: ${e.hex};"
                data-color-idx="${t}"
                title="${e.name} - Muestrario Lupe Home">
              </button>
            `).join(``)}
          </div>

          <div class="fabric-active-color-card">
            <div class="f-color-left">
              <span class="f-large-swatch" style="background-color: ${i.hex};"></span>
              <div class="f-color-meta">
                <h5>Color Seleccionado: ${i.name}</h5>
                <p>Muestrario oficial ${r.name} • Disponible para confección a medida</p>
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
          <a href="https://wa.me/${e.phone}?text=Hola%20Lupe%20Home!%20Quiero%20consultar%20por%20muestras%20de%20la%20tela%20${encodeURIComponent(r.name)}%20en%20color%20${encodeURIComponent(i.name)}"
            target="_blank" rel="noopener" class="btn-fabric-wpp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Pedir Muestras Físicas</span>
          </a>
        </div>
      </div>
    </div>
  `,n.querySelectorAll(`.fabric-tab-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-fabric-id`);t&&t!==a.activeFabricId&&(a.activeFabricId=t,a.activeFabricColorIndex=0,f())})}),n.querySelectorAll(`.fabric-swatch-dot`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.getAttribute(`data-color-idx`),10);isNaN(t)||(a.activeFabricColorIndex=t,f())})})}function p(){let e=document.getElementById(`products-grid`);if(!e)return;let t=n.filter(e=>{let t=a.currentCategory===`all`||e.category===a.currentCategory,n=a.searchQuery.toLowerCase().trim(),r=!n||e.name.toLowerCase().includes(n)||e.description.toLowerCase().includes(n)||e.variants.some(e=>e.sizeLabel.toLowerCase().includes(n));return t&&r});if(t.length===0){e.innerHTML=`
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🔍</div>
        <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No encontramos modelos que coincidan</h3>
        <p style="color: var(--color-text-muted); margin-bottom: 20px;">Probá buscando con otro término o limpiando los filtros.</p>
        <button class="btn-primary" id="btn-clear-search">Ver Todos los Productos</button>
      </div>
    `;let t=document.getElementById(`btn-clear-search`);t&&t.addEventListener(`click`,()=>{a.currentCategory=`all`,a.searchQuery=``,p()});return}e.innerHTML=t.map(o).join(``),s(e)}function m(e){let t=n.find(t=>t.id===e);if(!t)return;a.activeProduct=t,a.customizer.variantIndex=t.defaultVariantIndex||0,a.customizer.fabricId=`pana-velvet`,a.customizer.colorIndex=0,a.customizer.legs=t.hasLegsOption?`Madera lustrada`:`Estándar`,a.customizer.hasTachas=!1,a.customizer.hasPuffAddon=!1,a.customizer.customNotes=``,a.customizer.selectedColorName=t.colorOptions?t.colorOptions[0].name:null,a.customizer.selectedColorImage=t.colorOptions?t.colorOptions[0].image:null,g();let r=document.getElementById(`customizer-modal-backdrop`);r&&(r.classList.add(`open`),r.setAttribute(`aria-hidden`,`false`),document.body.style.overflow=`hidden`)}function h(){let e=document.getElementById(`customizer-modal-backdrop`);e&&(e.classList.remove(`open`),e.setAttribute(`aria-hidden`,`true`),document.body.style.overflow=``),a.activeProduct=null}function g(){let n=document.getElementById(`customizer-modal`);if(!n||!a.activeProduct)return;let r=a.activeProduct,o=r.variants[a.customizer.variantIndex],s=t.find(e=>e.id===a.customizer.fabricId)||t[0],c=s.colors[a.customizer.colorIndex]||s.colors[0],l=a.paymentMethod===`efectivo`?o.cashPrice:o.cardPrice,u=l*s.surchargePercent/100,d=a.customizer.hasPuffAddon?a.paymentMethod===`efectivo`?13e4:155e3:0,f=a.customizer.hasTachas?a.paymentMethod===`efectivo`?25e3:3e4:0,m=l+u+d+f,_=r.image;a.customizer.selectedColorImage?_=a.customizer.selectedColorImage:o.image&&(_=o.image);let v=a.customizer.selectedColorName||c.name,y=c.hex,b=`Hola Lupe Home! Quiero encargar / consultar por este sofá personalizado:
• Modelo: ${r.name}
• Medida / Versión: ${o.sizeLabel}
• Línea de Tela: ${s.name} (${s.groupLabel})
• Color elegido: ${v}
• Patas: ${a.customizer.legs}
${a.customizer.hasTachas?`• Tachas decorativas: Sí`:``}
${a.customizer.hasPuffAddon?`• Puff móvil: Sí (0,70 x 0,70 m)`:``}
• Medio de Pago: ${a.paymentMethod===`efectivo`?`Efectivo / Transferencia (15% OFF)`:`Tarjeta de Crédito`}
• Total Cotizado: ${i(m)}

¿Tienen disponibilidad y cómo coordinamos el anticipo y envío?`,x=`https://wa.me/${e.phone}?text=${encodeURIComponent(b)}`;n.innerHTML=`
    <button class="modal-close-btn" id="modal-close-btn" aria-label="Cerrar modal">&times;</button>
    <div class="customizer-layout">
      <!-- LEFT PREVIEW -->
      <div class="customizer-preview">
        <div>
          <div class="preview-header">
            <span class="product-category-tag">${r.category}</span>
            <h3>${r.name}</h3>
            <p class="preview-tagline">${r.description}</p>
          </div>
          
          <div class="preview-image-box">
            <img src="${_}" alt="${r.name}" id="modal-preview-img" />
            <div class="swatch-color-pill">
              <span class="swatch-circle-indicator" style="background-color: ${y};"></span>
              <span>${v}</span>
            </div>
          </div>
        </div>

        <div class="specs-summary-card">
          <div class="spec-row">
            <span class="spec-label">Medida:</span>
            <span class="spec-value">${o.sizeLabel}</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Tela:</span>
            <span class="spec-value">${s.name} (${s.groupLabel})</span>
          </div>
          <div class="spec-row">
            <span class="spec-label">Color:</span>
            <span class="spec-value">${v}</span>
          </div>
          ${r.hasLegsOption?`
            <div class="spec-row">
              <span class="spec-label">Patas:</span>
              <span class="spec-value">${a.customizer.legs}</span>
            </div>
          `:``}
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
          ${r.variants.map((e,t)=>{let n=a.paymentMethod===`efectivo`?e.cashPrice:e.cardPrice;return`
              <button class="variant-option-btn ${a.customizer.variantIndex===t?`selected`:``}" 
                data-variant-idx="${t}" 
                type="button">
                <span class="variant-name">${e.sizeLabel}</span>
                <span class="variant-price">${i(n)}</span>
              </button>
            `}).join(``)}
        </div>

        <!-- STEP 2: FABRIC GROUP -->
        <div class="form-step-title">
          <span>2. Línea de Tela</span>
        </div>
        <div class="fabric-type-selector">
          <button class="fabric-type-btn ${s.group===`A`?`selected`:``}" data-fabric-group="A" type="button">
            <span class="f-title">Grupo A (Precio Base)</span>
            <span class="f-tag">Pana Velvet o Floyd</span>
          </button>
          <button class="fabric-type-btn ${s.group===`B`?`selected`:``}" data-fabric-group="B" type="button">
            <span class="f-title">Grupo B (+10%)</span>
            <span class="f-tag">Mercury Antidesgarro o Cuerotex</span>
          </button>
        </div>

        <div class="fabric-specific-selector">
          ${t.filter(e=>e.group===s.group).map(e=>`
            <button class="fabric-chip-btn ${e.id===s.id?`selected`:``}" data-fabric-id="${e.id}" type="button">
              ${e.name}
            </button>
          `).join(``)}
        </div>

        <!-- STEP 3: COLOR SELECTION -->
        <div class="form-step-title">
          <span>3. Elegí el Color</span>
        </div>

        ${r.colorOptions&&r.colorOptions.length>0?`
          <div style="font-size: 0.82rem; font-weight: 600; color: var(--color-primary); margin-bottom: 8px;">
            Renderizados IA en tiempo real:
          </div>
          <div class="color-presets-row">
            ${r.colorOptions.map((e,t)=>`
              <button class="color-preset-card ${v===e.name?`active`:``}" 
                data-preset-idx="${t}"
                data-preset-name="${e.name}"
                data-preset-img="${e.image}"
                data-preset-hex="${e.hex}"
                type="button">
                <span class="preset-dot" style="background-color: ${e.hex};"></span>
                <div class="preset-info">
                  <span class="preset-name">${e.name}</span>
                  <span class="preset-sub">Vista Render IA</span>
                </div>
              </button>
            `).join(``)}
          </div>
        `:``}

        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 8px;">
          Otras tonalidades disponibles en tela ${s.name}:
        </div>
        <div class="color-swatches-grid">
          ${s.colors.map((e,t)=>`
            <button class="swatch-btn ${a.customizer.colorIndex===t?`selected`:``}" 
              data-color-idx="${t}" 
              style="background-color: ${e.hex};" 
              title="${e.name}">
            </button>
          `).join(``)}
        </div>

        <!-- STEP 4: LEGS & ADDONS -->
        ${r.hasLegsOption||r.hasTachasOption||r.hasPuffOption&&!o.sizeLabel.toLowerCase().includes(`puff`)?`
          <div class="form-step-title">
            <span>4. Opcionales & Acabados</span>
          </div>
          <div class="addons-grid">
            ${r.hasLegsOption?`
              <div class="addon-toggle-box ${a.customizer.legs===`Madera lustrada`?`selected`:``}" id="toggle-legs">
                <input type="radio" name="legs" value="Madera lustrada" ${a.customizer.legs===`Madera lustrada`?`checked`:``} />
                <div class="addon-text">
                  <h6>Patas de Madera</h6>
                  <p>Lustrada maciza (estándar)</p>
                </div>
              </div>
              <div class="addon-toggle-box ${a.customizer.legs===`Aluminio cromado`?`selected`:``}" id="toggle-legs-alu">
                <input type="radio" name="legs" value="Aluminio cromado" ${a.customizer.legs===`Aluminio cromado`?`checked`:``} />
                <div class="addon-text">
                  <h6>Patas de Aluminio</h6>
                  <p>Cromado brillante pulido</p>
                </div>
              </div>
            `:``}

            ${r.hasTachasOption?`
              <label class="addon-toggle-box ${a.customizer.hasTachas?`selected`:``}" style="grid-column: span 2;">
                <input type="checkbox" id="check-tachas" ${a.customizer.hasTachas?`checked`:``} />
                <div class="addon-text">
                  <h6>Agregar Tachas Decorativas</h6>
                  <p>Detalle artesanal metálico en respaldo / apoyabrazos</p>
                </div>
              </label>
            `:``}

            ${r.hasPuffOption&&!o.sizeLabel.toLowerCase().includes(`puff`)?`
              <label class="addon-toggle-box ${a.customizer.hasPuffAddon?`selected`:``}" style="grid-column: span 2;">
                <input type="checkbox" id="check-puff-addon" ${a.customizer.hasPuffAddon?`checked`:``} />
                <div class="addon-text">
                  <h6>Sumar Puff Móvil (0,70 x 0,70 m)</h6>
                  <p>Convierte tu sofá lineal en esquinero (+ $130.000 ef / $155.000 tj)</p>
                </div>
              </label>
            `:``}
          </div>
        `:``}

        <!-- MODAL FOOTER WITH DYNAMIC PRICE & WHATSAPP REDIRECT -->
        <div class="customizer-footer">
          <div class="price-breakdown-box">
            <div class="total-price-display">
              <span class="t-label">Cotización Estimada (${a.paymentMethod===`efectivo`?`Efectivo / Transf.`:`Tarjeta`}):</span>
              <span class="t-amount">${i(m)}</span>
              ${s.group===`B`?`<span class="t-note">+10% adicional por tela Grupo B incluido</span>`:``}
            </div>

            <div class="payment-switch-container">
              <button class="payment-switch-btn ${a.paymentMethod===`efectivo`?`active`:``}" id="modal-pay-cash">
                Efectivo
              </button>
              <button class="payment-switch-btn ${a.paymentMethod===`tarjeta`?`active`:``}" id="modal-pay-card">
                Tarjeta
              </button>
            </div>
          </div>

          <a href="${x}" target="_blank" rel="noopener" class="btn-submit-wpp" id="btn-modal-wpp-checkout">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>Pedir Cotización por WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  `,n.querySelector(`#modal-close-btn`).addEventListener(`click`,h),n.querySelectorAll(`[data-variant-idx]`).forEach(e=>{e.addEventListener(`click`,()=>{a.customizer.variantIndex=parseInt(e.getAttribute(`data-variant-idx`),10),g()})}),n.querySelectorAll(`[data-fabric-group]`).forEach(e=>{e.addEventListener(`click`,()=>{let n=e.getAttribute(`data-fabric-group`),r=t.find(e=>e.group===n);r&&(a.customizer.fabricId=r.id,a.customizer.colorIndex=0,g())})}),n.querySelectorAll(`[data-fabric-id]`).forEach(e=>{e.addEventListener(`click`,()=>{a.customizer.fabricId=e.getAttribute(`data-fabric-id`),a.customizer.colorIndex=0,g()})}),n.querySelectorAll(`[data-preset-idx]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.getAttribute(`data-preset-name`),n=e.getAttribute(`data-preset-img`);a.customizer.selectedColorName=t,a.customizer.selectedColorImage=n,g()})}),n.querySelectorAll(`[data-color-idx]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.getAttribute(`data-color-idx`),10);a.customizer.colorIndex=t;let n=s.colors[t];if(n){a.customizer.selectedColorName=n.name;let e=r.colorOptions?.find(e=>e.name.toLowerCase().includes(n.name.toLowerCase()));e&&(a.customizer.selectedColorImage=e.image)}g()})});let S=n.querySelector(`#toggle-legs`),C=n.querySelector(`#toggle-legs-alu`);S&&S.addEventListener(`click`,()=>{a.customizer.legs=`Madera lustrada`,g()}),C&&C.addEventListener(`click`,()=>{a.customizer.legs=`Aluminio cromado`,g()});let w=n.querySelector(`#check-tachas`);w&&w.addEventListener(`change`,e=>{a.customizer.hasTachas=e.target.checked,g()});let T=n.querySelector(`#check-puff-addon`);T&&T.addEventListener(`change`,e=>{a.customizer.hasPuffAddon=e.target.checked,g()});let E=n.querySelector(`#modal-pay-cash`),D=n.querySelector(`#modal-pay-card`);E&&D&&(E.addEventListener(`click`,()=>{a.paymentMethod=`efectivo`,g(),a.currentView===`catalogo`&&p()}),D.addEventListener(`click`,()=>{a.paymentMethod=`tarjeta`,g(),a.currentView===`catalogo`&&p()}))}function _(){let e=document.getElementById(`app`);if(e){if(document.querySelectorAll(`.nav-link`).forEach(e=>{e.classList.remove(`active`);let t=e.getAttribute(`data-nav`);(a.currentView===`home`&&(t===`inicio`||t===`hero`)||a.currentView===`catalogo`&&t===`catalogo`||a.currentView===`telas`&&t===`telas`)&&e.classList.add(`active`)}),a.currentView===`catalogo`)e.innerHTML=u(),p(),y();else if(a.currentView===`telas`)e.innerHTML=d(),f();else{e.innerHTML=l();let t=document.getElementById(`home-featured-grid`);t&&s(t),v()}b()}}function v(){document.querySelectorAll(`.faq-item`).forEach(e=>{let t=e.querySelector(`.faq-question`);t&&t.addEventListener(`click`,()=>{let t=e.classList.contains(`open`);document.querySelectorAll(`.faq-item`).forEach(e=>e.classList.remove(`open`)),t||e.classList.add(`open`)})})}function y(){document.querySelectorAll(`#category-filter-tabs .filter-tab`).forEach(e=>{e.addEventListener(`click`,()=>{a.currentCategory=e.getAttribute(`data-cat`),document.querySelectorAll(`#category-filter-tabs .filter-tab`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),p()})});let e=document.getElementById(`catalog-search-input`);e&&e.addEventListener(`input`,e=>{a.searchQuery=e.target.value,p()});let t=document.getElementById(`btn-pay-cash`),n=document.getElementById(`btn-pay-card`);t&&n&&(t.addEventListener(`click`,()=>{a.paymentMethod=`efectivo`,t.classList.add(`active`),n.classList.remove(`active`),p()}),n.addEventListener(`click`,()=>{a.paymentMethod=`tarjeta`,n.classList.add(`active`),t.classList.remove(`active`),p()}))}function b(){let e=document.getElementById(`customizer-modal-backdrop`);e&&e.addEventListener(`click`,t=>{t.target===e&&h()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&h()})}function x(){let e=window.location.hash.toLowerCase().replace(`#`,``);if(e.startsWith(`catalogo`)){a.currentView=`catalogo`;let t=e.includes(`?`)?e.split(`?`)[1]:``,n=new URLSearchParams(t);n.has(`cat`)&&(a.currentCategory=n.get(`cat`))}else if(e.startsWith(`telas`))a.currentView=`telas`;else if(e.includes(`faq`)){a.currentView=`home`,_(),setTimeout(()=>{let e=document.getElementById(`faq`);e&&e.scrollIntoView({behavior:`smooth`})},150);return}else a.currentView=`home`;_(),window.scrollTo({top:0,behavior:`instant`})}window.addEventListener(`hashchange`,x),document.addEventListener(`DOMContentLoaded`,()=>{x()});