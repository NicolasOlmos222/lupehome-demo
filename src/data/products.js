export const STORE_INFO = {
  name: "Lupe Home",
  tagline: "Diseño & Fabricación de Sofás, Sillones y Respaldos a Medida",
  phone: "5493564561719",
  phoneDisplay: "3564 56-1719",
  instagram: "lupehomesf",
  instagramUrl: "https://www.instagram.com/lupehomesf/",
  location: "San Francisco, Córdoba, Argentina",
  leadTime: "Stock inmediato o 40 - 50 días hábiles a medida",
  shipping: "Envíos a todo el país",
  construction: "Estructura en madera saligna maciza y poliéster alta densidad (26/28 kg)"
};

export const FABRICS = [
  {
    id: "pana-velvet",
    name: "Pana Velvet",
    group: "A",
    groupLabel: "Grupo A (Precio Base)",
    surchargePercent: 0,
    features: "Tacto aterciopelado premium, tecnología antimanchas, lavable",
    sampleImage: "./images/fabrics/pana-velvet.webp",
    colors: [
      { name: "Marfil", hex: "#EAE5D9" },
      { name: "Sepia", hex: "#BFB19B" },
      { name: "Visón", hex: "#9E8F7F" },
      { name: "Tabaco", hex: "#634739" },
      { name: "Azafrán", hex: "#DE9B35" },
      { name: "Óxido", hex: "#B85429" },
      { name: "Castaño", hex: "#75453B" },
      { name: "Café", hex: "#422F26" },
      { name: "Verde", hex: "#5C6C52" },
      { name: "Vino", hex: "#6A2238" },
      { name: "Plata", hex: "#C6CED7" },
      { name: "Grafito", hex: "#4B525B" },
      { name: "Gris Pimienta", hex: "#6A6E75" },
      { name: "Índigo", hex: "#2A4568" },
      { name: "Negro", hex: "#1D1E22" }
    ]
  },
  {
    id: "floyd",
    name: "Floyd",
    group: "A",
    groupLabel: "Grupo A (Precio Base)",
    surchargePercent: 0,
    features: "Textura tejida moderna, alta durabilidad, antimanchas y lavable",
    sampleImage: "./images/fabrics/floyd.webp",
    colors: [
      { name: "Ivory", hex: "#EDE9E1" },
      { name: "Beige", hex: "#D4C5AF" },
      { name: "Stone", hex: "#ABA79F" },
      { name: "Visón", hex: "#8F8378" },
      { name: "Nut", hex: "#CBA39D" },
      { name: "Acqua Green", hex: "#A0B8B2" },
      { name: "Olive", hex: "#707A5E" },
      { name: "Forest", hex: "#244C3F" },
      { name: "Ocre", hex: "#B8702E" },
      { name: "Yellow", hex: "#E2A928" },
      { name: "Gold", hex: "#D49B28" },
      { name: "Sky", hex: "#7D9EB8" },
      { name: "Índigo", hex: "#253B5A" },
      { name: "Steel", hex: "#575D66" },
      { name: "Graphite", hex: "#2E3137" }
    ]
  },
  {
    id: "mercury",
    name: "Mercury",
    group: "B",
    groupLabel: "Grupo B (+10% Adicional)",
    surchargePercent: 10,
    features: "Antidesgarro reforzado (pet-friendly), antimanchas y lavable",
    sampleImage: "./images/fabrics/mercury.webp",
    colors: [
      { name: "Oyster", hex: "#DDD6CA" },
      { name: "Porcelain", hex: "#F2EDE4" },
      { name: "Ivory", hex: "#E8E2D5" },
      { name: "Yellow", hex: "#E2AA29" },
      { name: "Visón", hex: "#9C9185" },
      { name: "Pearl", hex: "#CCD1D8" },
      { name: "Indigo", hex: "#2E4A77" },
      { name: "Seal", hex: "#656D75" },
      { name: "Titanium", hex: "#4B5056" },
      { name: "Black", hex: "#1C1D21" }
    ]
  },
  {
    id: "cuerotex",
    name: "Cuerotex",
    group: "B",
    groupLabel: "Grupo B (+10% Adicional)",
    surchargePercent: 10,
    features: "Aspecto cuero nobuk ultra soft, lavable, máxima resistencia al uso",
    sampleImage: "./images/fabrics/cuerotex.webp",
    colors: [
      { name: "Chocolate", hex: "#3B2820" },
      { name: "Tostado", hex: "#664332" },
      { name: "Sand", hex: "#C2A78F" },
      { name: "Beige", hex: "#D7C6B2" },
      { name: "Bone", hex: "#ECE5D8" },
      { name: "Cemento", hex: "#A8A6A1" },
      { name: "Visón", hex: "#7F7268" },
      { name: "Elephant", hex: "#4F4B4A" },
      { name: "Suela", hex: "#C88A58" },
      { name: "Ocre", hex: "#BD7830" },
      { name: "Masala", hex: "#6C3742" },
      { name: "Hunter Green", hex: "#25473F" },
      { name: "Cobalto", hex: "#2B5B7E" },
      { name: "Stone", hex: "#8E9499" },
      { name: "Grey", hex: "#595E66" },
      { name: "Black", hex: "#151515" }
    ]
  }
];

export const PRODUCTS = [
  // --- SOFÁS Y RINCONEROS (4 Modelos Estrella) ---
  {
    id: "sofa-zaro",
    name: "Sofá Zaro",
    category: "sofas",
    categoryLabel: "Sofás & Rinconeros",
    badge: "Recomendado",
    tagline: "El equilibrio perfecto entre confort mullido y diseño contemporáneo",
    description: "Este modelo contiene todo lo que se ve en las imágenes (incluye almohadones cilíndricos y decorativos). Es un modelo súper cómodo, lo súper recomendamos para living principal.",
    image: "./images/products/sofa-zaro-vison.webp",
    colorOptions: [
      { name: "Visón / Arena", hex: "#9E8F7F", image: "./images/products/sofa-zaro-vison.webp" },
      { name: "Gris Grafito", hex: "#4B525B", image: "./images/products/sofa-zaro-grafito.webp" },
      { name: "Óxido Terracota", hex: "#BA552A", image: "./images/products/sofa-zaro-oxido.webp" }
    ],
    variants: [
      {
        sizeLabel: "2,10 x 1,00 m",
        cashPrice: 680000,
        cardPrice: 795000,
        image: "./images/products/sofa-zaro-vison.webp"
      },
      {
        sizeLabel: "2,10 x 1,00 m + Puff (0,70 x 0,70)",
        cashPrice: 810000,
        cardPrice: 950000,
        image: "./images/products/sofa-zaro-210-puff.webp"
      },
      {
        sizeLabel: "2,50 x 1,00 m (Extra Amplio)",
        cashPrice: 845000,
        cardPrice: 990000,
        image: "./images/products/sofa-zaro-250.webp"
      },
      {
        sizeLabel: "Rinconero 3,00 x 2,00 m (Incluye 6 almohadones)",
        cashPrice: 1230000,
        cardPrice: 1445000,
        image: "./images/products/rinconero-zaro-3x2.webp"
      }
    ],
    defaultVariantIndex: 0,
    hasLegsOption: true,
    hasPuffOption: true,
    hasTachasOption: false
  },
  {
    id: "sofa-rocco",
    name: "Sofá Rocco",
    category: "sofas",
    categoryLabel: "Sofás & Rinconeros",
    badge: "Más Elegido",
    tagline: "Líneas rectas elegantes, estructura robusta y máxima versatilidad",
    description: "Uno de los modelos más elegidos por nuestros clientes. Con opción de agregar puff móvil para convertirlo en rinconero a la izquierda o derecha según tu espacio.",
    image: "./images/products/sofa-rocco-arena.webp",
    colorOptions: [
      { name: "Beige Arena", hex: "#D6C5AF", image: "./images/products/sofa-rocco-arena.webp" },
      { name: "Azul Índigo", hex: "#2B4567", image: "./images/products/sofa-rocco-indigo.webp" },
      { name: "Verde Oliva", hex: "#5C6C52", image: "./images/products/sofa-rocco-oliva.webp" }
    ],
    variants: [
      {
        sizeLabel: "1,60 x 0,90 m",
        cashPrice: 545000,
        cardPrice: 640000,
        image: "./images/products/sofa-rocco-arena.webp"
      },
      {
        sizeLabel: "1,80 x 0,90 m",
        cashPrice: 545000,
        cardPrice: 640000,
        image: "./images/products/sofa-rocco-arena.webp"
      },
      {
        sizeLabel: "1,80 x 0,90 m + Puff (0,70 x 0,70)",
        cashPrice: 654000,
        cardPrice: 765000,
        image: "./images/products/sofa-rocco-180-puff.webp"
      },
      {
        sizeLabel: "2,00 x 0,90 m",
        cashPrice: 585000,
        cardPrice: 685000,
        image: "./images/products/sofa-rocco-arena.webp"
      },
      {
        sizeLabel: "2,00 x 1,60 m (con Puff incluido)",
        cashPrice: 694000,
        cardPrice: 810000,
        image: "./images/products/sofa-rocco-200-puff.webp"
      },
      {
        sizeLabel: "Mega Rinconero 3,30 x 1,95 m (Sofá 3,30x1 + Puff 0,95x0,95)",
        cashPrice: 1010000,
        cardPrice: 1185000,
        image: "./images/products/rinconero-rocco-330.webp"
      }
    ],
    defaultVariantIndex: 1,
    hasLegsOption: true,
    hasPuffOption: true,
    hasTachasOption: false
  },
  {
    id: "sofa-cama",
    name: "Sofá Cama Multifunción",
    category: "sofas",
    categoryLabel: "Sofás & Rinconeros",
    badge: "2 en 1",
    tagline: "El aliado perfecto para tu living y recibir visitas con total confort",
    description: "Sofá de día, cama de 1 o 2 plazas de noche. Mecanismo suave y colchón de espuma de alta densidad para un descanso reparador garantizado.",
    image: "./images/products/sofa-cama-gris.webp",
    colorOptions: [
      { name: "Gris Slate", hex: "#5A6472", image: "./images/products/sofa-cama-gris.webp" },
      { name: "Beige Tostado", hex: "#C2A78F", image: "./images/products/sofa-cama-beige.webp" },
      { name: "Verde Oliva", hex: "#4E5C48", image: "./images/products/sofa-cama-verde.webp" }
    ],
    variants: [
      {
        sizeLabel: "1 Plaza (Cerrado: 1x1 m | Abierto: 0,70 x 1,90 m)",
        cashPrice: 390000,
        cardPrice: 455000,
        image: "./images/products/sofa-cama-gris.webp"
      },
      {
        sizeLabel: "2 Plazas 1,60 x 1,00 m (Cama 1,40 x 1,90 m)",
        cashPrice: 590000,
        cardPrice: 690000,
        image: "./images/products/sofa-cama-gris.webp"
      },
      {
        sizeLabel: "2 Plazas 1,80 x 1,00 m (Cama 1,40 x 1,90 m)",
        cashPrice: 590000,
        cardPrice: 690000,
        image: "./images/products/sofa-cama-gris.webp"
      },
      {
        sizeLabel: "2 Plazas 1,80 x 1,70 m con Puff (0,70 x 0,70)",
        cashPrice: 689000,
        cardPrice: 820000,
        image: "./images/products/sofa-cama-beige.webp"
      }
    ],
    defaultVariantIndex: 1,
    hasLegsOption: true,
    hasPuffOption: true,
    hasTachasOption: false
  },
  {
    id: "sofa-paris",
    name: "Sofá París",
    category: "sofas",
    categoryLabel: "Sofás & Rinconeros",
    badge: "Minimalista",
    tagline: "Estilo sofisticado con asiento capitoné acolchado y patas elevadas",
    description: "Diseño esbelto y moderno, ideal para ambientes despejados. Disponible en versión sofá lineal o rinconero de 2,50 x 1,70 m.",
    image: "./images/products/paris-col1.webp",
    colorOptions: [
      { name: "Gris Carbón", hex: "#3D4045", image: "./images/products/paris-col1.webp" },
      { name: "Gris Plata", hex: "#B5BAC2", image: "./images/products/paris-col2.webp" }
    ],
    variants: [
      {
        sizeLabel: "1,80 x 0,90 m",
        cashPrice: 520000,
        cardPrice: 610000,
        image: "./images/products/paris-col1.webp"
      },
      {
        sizeLabel: "2,10 x 0,90 m",
        cashPrice: 560000,
        cardPrice: 655000,
        image: "./images/products/paris-col1.webp"
      },
      {
        sizeLabel: "Rinconero 2,50 x 1,70 m (Espacios amplios)",
        cashPrice: 780000,
        cardPrice: 915000,
        image: "./images/products/rinconero-paris-250.webp"
      }
    ],
    defaultVariantIndex: 1,
    hasLegsOption: true,
    hasPuffOption: true,
    hasTachasOption: false
  },

  // --- SILLONES INDIVIDUALES (3 Modelos Destacados) ---
  {
    id: "individual-perla",
    name: "Sillón Individual Perla",
    category: "individuales",
    categoryLabel: "Sillones Individuales",
    badge: "Top Ventas",
    tagline: "El individual más cómodo y también el más elegido por nuestros clientes",
    description: "Curvatura envolvente tipo poltrona club. Se adapta a cualquier rincón, dormitorio o living como pieza de destaque.",
    image: "./images/products/individual-perla-marfil.webp",
    colorOptions: [
      { name: "Marfil / Crudo", hex: "#EAE5D9", image: "./images/products/individual-perla-marfil.webp" },
      { name: "Ocre Mostaza", hex: "#DE9B35", image: "./images/products/individual-perla-ocre.webp" },
      { name: "Visón Taupe", hex: "#9E8F7F", image: "./images/products/individual-perla-vison.webp" }
    ],
    variants: [
      {
        sizeLabel: "Individual Standard",
        cashPrice: 160000,
        cardPrice: 185000,
        image: "./images/products/individual-perla-marfil.webp"
      }
    ],
    defaultVariantIndex: 0,
    hasLegsOption: true,
    hasPuffOption: false,
    hasTachasOption: false
  },
  {
    id: "individual-jota",
    name: "Sillón Individual Jota",
    category: "individuales",
    categoryLabel: "Sillones Individuales",
    badge: "Con Tachas",
    tagline: "Base circular capitoneada con tachas perimetrales y patas metálicas",
    description: "Sillón giratorio o fijo con base circular acolchada, delicado detalle de tachas plateadas en el contorno superior del respaldo.",
    image: "./images/products/jota-col1.webp",
    colorOptions: [
      { name: "Marfil Crema", hex: "#EDE8DD", image: "./images/products/jota-col1.webp" },
      { name: "Visón Topo", hex: "#8E8278", image: "./images/products/jota-col2.webp" },
      { name: "Grafito Oscuro", hex: "#4B525B", image: "./images/products/jota-col3.webp" }
    ],
    variants: [
      {
        sizeLabel: "Individual Circular con Tachas",
        cashPrice: 180000,
        cardPrice: 210000,
        image: "./images/products/jota-col1.webp"
      }
    ],
    defaultVariantIndex: 0,
    hasLegsOption: true,
    hasPuffOption: false,
    hasTachasOption: true
  },
  {
    id: "individual-benetton",
    name: "Sillón Individual Benetton",
    category: "individuales",
    categoryLabel: "Sillones Individuales",
    badge: "Lectura & Relax",
    tagline: "Respaldo alto anatómico y apoyabrazos confortables",
    description: "El clásico sillón de lectura contemporáneo. Soporte lumbar óptimo y apoyo de cabeza para relax total en dormitorios o escritorios.",
    image: "./images/products/benetton-col1.webp",
    colorOptions: [
      { name: "Castaño Café", hex: "#634739", image: "./images/products/benetton-col1.webp" },
      { name: "Grafito", hex: "#45484D", image: "./images/products/benetton-col2.webp" },
      { name: "Azul Petróleo", hex: "#294861", image: "./images/products/benetton-col3.webp" }
    ],
    variants: [
      {
        sizeLabel: "Individual Respaldo Alto",
        cashPrice: 205000,
        cardPrice: 240000,
        image: "./images/products/benetton-col1.webp"
      }
    ],
    defaultVariantIndex: 0,
    hasLegsOption: true,
    hasPuffOption: false,
    hasTachasOption: false
  },

  // --- RESPALDOS DE CAMA (3 Modelos Más Vendidos) ---
  {
    id: "respaldo-bastones-vert-horiz",
    name: "Respaldo Bastones (Vert. u Horiz.)",
    category: "respaldos",
    categoryLabel: "Respaldos de Cama",
    badge: "El Más Elegido",
    tagline: "El modelo más elegido por nuestros clientes, súper moderno",
    description: "Tapizado acolchado con paneles tipo bastones que aportan profundidad visual al dormitorio. Fabricado a la medida exacta de tu sommier (1.00m hasta 2.00m o especiales).",
    image: "./images/products/respaldo-bastones-gris.webp",
    colorOptions: [
      { name: "Gris Perla", hex: "#C6CED7", image: "./images/products/respaldo-bastones-gris.webp" },
      { name: "Beige Arena", hex: "#D4C5AF", image: "./images/products/respaldo-bastones-beige.webp" },
      { name: "Verde Forest", hex: "#244C3F", image: "./images/products/respaldo-bastones-verde.webp" }
    ],
    variants: [
      { sizeLabel: "1,00 m (1 Plaza / Sommier chico)", cashPrice: 154000, cardPrice: 180000, image: "./images/products/respaldo-bastones-gris.webp" },
      { sizeLabel: "1,40 m (2 Plazas estándar)", cashPrice: 185000, cardPrice: 215000, image: "./images/products/respaldo-bastones-gris.webp" },
      { sizeLabel: "1,60 m (Queen Size)", cashPrice: 207000, cardPrice: 240000, image: "./images/products/respaldo-bastones-gris.webp" },
      { sizeLabel: "1,80 m (King Size)", cashPrice: 218000, cardPrice: 255000, image: "./images/products/respaldo-bastones-gris.webp" },
      { sizeLabel: "2,00 m (Super King)", cashPrice: 229000, cardPrice: 265000, image: "./images/products/respaldo-bastones-gris.webp" }
    ],
    defaultVariantIndex: 1,
    hasLegsOption: false,
    hasPuffOption: false,
    hasTachasOption: false
  },
  {
    id: "respaldo-liso-con-tachas",
    name: "Respaldo Liso con Tachas",
    category: "respaldos",
    categoryLabel: "Respaldos de Cama",
    badge: "Tendencia",
    tagline: "Super moderno con marco perimetral de tachas metálicas",
    description: "Frente tapizado liso y pulcro delimitado por una hilera de tachas niqueladas u oxidadas. Dale un toque de hotel 5 estrellas a tu habitación.",
    image: "./images/products/respaldo-tachas-col1.webp",
    colorOptions: [
      { name: "Marfil Crudo", hex: "#EDE6DB", image: "./images/products/respaldo-tachas-col1.webp" },
      { name: "Visón Topo", hex: "#92867B", image: "./images/products/respaldo-tachas-col2.webp" },
      { name: "Castaño Café", hex: "#5E4337", image: "./images/products/respaldo-tachas-col3.webp" }
    ],
    variants: [
      { sizeLabel: "1,00 m (1 Plaza)", cashPrice: 154000, cardPrice: 180000, image: "./images/products/respaldo-tachas-col1.webp" },
      { sizeLabel: "1,40 m (2 Plazas)", cashPrice: 185000, cardPrice: 215000, image: "./images/products/respaldo-tachas-col1.webp" },
      { sizeLabel: "1,60 m (Queen Size)", cashPrice: 207000, cardPrice: 240000, image: "./images/products/respaldo-tachas-col1.webp" },
      { sizeLabel: "1,80 m (King Size)", cashPrice: 218000, cardPrice: 255000, image: "./images/products/respaldo-tachas-col1.webp" },
      { sizeLabel: "2,00 m (Super King)", cashPrice: 229000, cardPrice: 265000, image: "./images/products/respaldo-tachas-col1.webp" }
    ],
    defaultVariantIndex: 1,
    hasLegsOption: false,
    hasPuffOption: false,
    hasTachasOption: true
  },
  {
    id: "respaldo-doble-fila-tachas",
    name: "Respaldo Doble Fila de Tachas",
    category: "respaldos",
    categoryLabel: "Respaldos de Cama",
    badge: "Alta Gama",
    tagline: "Modelo súper tendencia con doble marco y gran prestancia",
    description: "Doble hilera de tachas colocadas artesanalmente una por una. Un diseño imponente que realza cualquier ambiente.",
    image: "./images/products/respaldo-doble-col1.webp",
    colorOptions: [
      { name: "Gris Carbón", hex: "#42454A", image: "./images/products/respaldo-doble-col1.webp" },
      { name: "Beige Lino", hex: "#D2C7B8", image: "./images/products/respaldo-doble-col2.webp" }
    ],
    variants: [
      { sizeLabel: "1,00 m (1 Plaza)", cashPrice: 154000, cardPrice: 180000, image: "./images/products/respaldo-doble-col1.webp" },
      { sizeLabel: "1,40 m (2 Plazas)", cashPrice: 185000, cardPrice: 215000, image: "./images/products/respaldo-doble-col1.webp" },
      { sizeLabel: "1,60 m (Queen Size)", cashPrice: 207000, cardPrice: 240000, image: "./images/products/respaldo-doble-col1.webp" },
      { sizeLabel: "1,80 m (King Size)", cashPrice: 218000, cardPrice: 255000, image: "./images/products/respaldo-doble-col1.webp" },
      { sizeLabel: "2,00 m (Super King)", cashPrice: 229000, cardPrice: 265000, image: "./images/products/respaldo-doble-col1.webp" }
    ],
    defaultVariantIndex: 1,
    hasLegsOption: false,
    hasPuffOption: false,
    hasTachasOption: true
  }
];

export const FAQS = [
  {
    q: "¿Tienen stock para entrega inmediata?",
    a: "¡Sí! Contamos con modelos en stock seleccionados para entrega inmediata en nuestro showroom. En caso de solicitar un producto personalizado o en una medida/tela específica que no esté en stock, el plazo de fabricación es de aproximadamente 40 a 50 días hábiles."
  },
  {
    q: "¿Cómo se diferencian las telas del Grupo A y Grupo B?",
    a: "Trabajamos con telas de altísima calidad divididas en dos grupos:\n• GRUPO A: Pana Velvet (antimanchas, lavable) y Floyd (antimanchas, lavable). Si elegís telas del Grupo A, el precio es el precio base que figura en el catálogo.\n• GRUPO B: Mercury (antidesgarro pet-friendly y antimanchas) y Cuerotex (nobuk soft lavable). Al pedir en telas del Grupo B, tiene un incremento del 10% sobre el precio de lista."
  },
  {
    q: "¿Qué materiales componen los sillones y respaldos?",
    a: "Todos nuestros productos se fabrican con estructura sólida en madera saligna maciza estacionada, uniones reforzadas y rellenos de espuma poliéster de alta densidad (26 a 28 kg/m³), garantizando confort prolongado y resistencia sin deformaciones."
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Realizamos envíos a todo el territorio argentino a través de expresos y transportes de confianza. El costo de envío corre por cuenta del cliente y coordinamos el despacho asegurando el correcto embalaje protector."
  },
  {
    q: "¿Qué tipo de patas incluyen los sofás?",
    a: "Todos nuestros modelos de sofá, rinconero o individual vienen por defecto con patas de madera maciza lustrada. Si preferís patas de aluminio cromado pulido, podés consultarnos directamente al cotizar."
  },
  {
    q: "¿Se puede sumar un puff a los sofás?",
    a: "¡Totalmente! A casi todos los sofás se les puede anexar un puff a juego (por ejemplo de 0,70 x 0,70 m o medidas especiales) para convertirlo en un cómodo rinconero o chaiselongue móvil."
  }
];
