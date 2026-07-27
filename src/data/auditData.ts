import { AuditArea, ActionItem, KeywordSearchLoss, BeforeAfterFeature, FunnelStep } from '../types';

export const COMPANY_INFO = {
  name: "Viña Casa Toscana",
  handle: "@vinacasatoscana",
  instagramUrl: "https://www.instagram.com/vinacasatoscana/",
  location: "San Javier de Loncomilla, Región del Maule, Chile",
  region: "Valle del Loncomilla / Maule",
  websiteStatus: "SIN PÁGINA WEB (Crítico)",
  primaryProducts: ["Vinos Finos / Artesanales", "Tours Enoturísticos", "Catas de Vino", "Gastronomía / Restaurant de Viña"],
  overallHealthScore: 28, // Out of 100
  estimatedMonthlyLossCLP: 6850000, // Estimated lost revenue per month ($6.85M CLP)
};

export const KEYWORD_SEARCH_LOSSES: KeywordSearchLoss[] = [
  {
    keyword: "viñedos en San Javier Maule",
    monthlySearchesMaule: 1250,
    intentLevel: "Muy Alta (Compra/Reserva)",
    lostLeadsPerMonth: 75,
    potentialRevenueCLP: 1100000,
    searchEngine: "Google Search",
  },
  {
    keyword: "dónde comprar vino en San Javier",
    monthlySearchesMaule: 980,
    intentLevel: "Muy Alta (Compra/Reserva)",
    lostLeadsPerMonth: 60,
    potentialRevenueCLP: 920000,
    searchEngine: "Google Search",
  },
  {
    keyword: "tour de viña San Javier Loncomilla",
    monthlySearchesMaule: 1100,
    intentLevel: "Muy Alta (Compra/Reserva)",
    lostLeadsPerMonth: 65,
    potentialRevenueCLP: 1050000,
    searchEngine: "Google Maps",
  },
  {
    keyword: "viñedos artesanales en San Javier Maule",
    monthlySearchesMaule: 850,
    intentLevel: "Muy Alta (Compra/Reserva)",
    lostLeadsPerMonth: 50,
    potentialRevenueCLP: 800000,
    searchEngine: "Google Maps",
  },
  {
    keyword: "viñas artesanales Valle del Maule",
    monthlySearchesMaule: 920,
    intentLevel: "Muy Alta (Compra/Reserva)",
    lostLeadsPerMonth: 55,
    potentialRevenueCLP: 850000,
    searchEngine: "IA (ChatGPT/Gemini)",
  },
  {
    keyword: "restaurant en viña Maule",
    monthlySearchesMaule: 1600,
    intentLevel: "Muy Alta (Compra/Reserva)",
    lostLeadsPerMonth: 90,
    potentialRevenueCLP: 1200000,
    searchEngine: "Google Search",
  },
  {
    keyword: "catas de vino San Javier",
    monthlySearchesMaule: 580,
    intentLevel: "Alta (Exploración)",
    lostLeadsPerMonth: 32,
    potentialRevenueCLP: 480000,
    searchEngine: "Google Maps",
  },
  {
    keyword: "dónde comer en viñedos Valle del Maule",
    monthlySearchesMaule: 820,
    intentLevel: "Alta (Exploración)",
    lostLeadsPerMonth: 40,
    potentialRevenueCLP: 450000,
    searchEngine: "IA (ChatGPT/Gemini)",
  },
];

export const AUDIT_AREAS: AuditArea[] = [
  {
    id: "traffic-leak",
    name: "Fuga de Tráfico Local y Búsquedas de Alto Valor",
    category: "Captación de Demanda Activa",
    status: "rojo",
    score: 10,
    problemSummary: "Pérdida masiva del 92% de los turistas y compradores que buscan activamente viñedos, tours, gastronomía y vinos en San Javier de Loncomilla.",
    impactDescription: "Cada día, decenas de usuarios en Google Search, Google Maps, ChatGPT y Perplexity buscan panoramas en San Javier. Al no tener Página Web convertible a WhatsApp ni Ficha SEO Local optimizada, estos clientes terminan en la competencia.",
    keyMetrics: [
      { label: "Captura de Búsquedas Locales", current: "< 3%", potential: "65%" },
      { label: "Leads Perdidos / Mes", current: "~ 467 leads", potential: "0 fuga" },
      { label: "Ingresos Desperdiciados", current: "$6.85M CLP/mes", potential: "$0 fuga" },
    ],
    recommendation: "Implementar ecosistema integrado: Página Web convertible a WhatsApp + Ficha Negocio Google + Google Maps + Posicionamiento SEO, AEO y GEO."
  },
  {
    id: "web-funnel",
    name: "Página Web Convertible a WhatsApp & Embudo de Conversión",
    category: "Infraestructura Digital de Ventas",
    status: "rojo",
    score: 0,
    problemSummary: "Inexistencia total de Página Web convertible a WhatsApp para venta directa de vinos ni reserva de tours o restaurant.",
    impactDescription: "Depender únicamente de un perfil de Instagram provoca fuga inmediata del 80% del tráfico frío que busca comprar en línea, reservar formalmente o pedir información por WhatsApp.",
    keyMetrics: [
      { label: "Páginas de Conversión", current: "0 disponibles", potential: "Web convertible a WhatsApp" },
      { label: "Tasa de Conversión Tráfico a Lead", current: "0.5% (Solo DM)", potential: "8.5% (Vía WhatsApp)" },
      { label: "Atención y Pedidos por WhatsApp", current: "Manual e Incompleto", potential: "100% Optimizado" },
    ],
    recommendation: "Lanzar Página Web Convertible a WhatsApp de Alta Conversión con catálogo interactivo, formulario de reservas dinámico e integración directa a WhatsApp."
  },
  {
    id: "seo-geo-aeo",
    name: "Posicionamiento SEO, GEO (AI Search) & AEO (Answer Engines)",
    category: "Orgánico & Visibilidad de IA",
    status: "rojo",
    score: 15,
    problemSummary: "Sin presencia en motores de búsqueda tradicionales ni recomendación por asistentes de IA (ChatGPT, Gemini, Perplexity, Copilot).",
    impactDescription: "Cuando un turista pregunta a ChatGPT '¿Qué viñas visitar en San Javier Maule para un tour con almuerzo?', Viña Casa Toscana no aparece porque no posee Schema markup ni dominio web con autoridad.",
    keyMetrics: [
      { label: "Aparición en ChatGPT/Gemini", current: "Inexistente", potential: "Recomendado #1" },
      { label: "Aparición en Google Maps Top 3", current: "Sin optimizar", potential: "Top 3 Local" },
      { label: "Palabras Clave Indexadas", current: "0 palabras", potential: "45+ en Pos. 1-5" },
    ],
    recommendation: "Configurar Rich Snippets (Schema WineMaker/Restaurant), geolocalización SEO Maule y contenido estructurado optimizado para motores de respuesta AEO."
  },
  {
    id: "meta-ads",
    name: "Estrategia Meta Ads (Instagram & Facebook Ads)",
    category: "Acelerador Opcional de Tráfico",
    status: "amarillo",
    score: 35,
    isOptional: true,
    optionalBadgeText: "Opcional / Acelerador",
    problemSummary: "Uso esporádico del botón 'Promocionar publicación' en Instagram sin dirección hacia una Página Web convertible.",
    impactDescription: "Módulo Opcional: Al promocionar directamente en Instagram sin contar primero con la Página Web convertible indispensable, el costo por lead se encarece. Este módulo se puede activar opcionalmente como Fase 2 para escalar público de Santiago.",
    keyMetrics: [
      { label: "Carácter de la Oferta", current: "Módulo Opcional", potential: "Acelerador de Fase 2" },
      { label: "Estructura de Campañas Meta", current: "Sin Embudo", potential: "Campaña Web + WhatsApp" },
      { label: "Retorno de Inversión (ROAS)", current: "Sin medir", potential: "4.2x - 6.5x" },
    ],
    recommendation: "Opcional: Desplegar campañas pagadas de Meta Ads como acelerador opcional una vez instalada la Página Web + Google Maps principal."
  },
  {
    id: "google-business",
    name: "Ficha Negocio Google & Google Maps",
    category: "Posicionamiento Geoespacial",
    status: "amarillo",
    score: 40,
    problemSummary: "Ficha de negocio incompleta, sin catálogo de vinos actualizado, sin enlace directo a WhatsApp ni flujo automático de reseñas.",
    impactDescription: "El 70% de los viajeros de la Ruta 5 Sur que se desvían hacia San Javier usan Google Maps en tiempo real. Si ven una ficha sin menú, sin web o sin reservas instantáneas, siguen de largo.",
    keyMetrics: [
      { label: "Aparición en Búsquedas de Ruta", current: "Baja", potential: "Dominante en Maule" },
      { label: "Enlace Directo a WhatsApp", current: "Incompleto", potential: "100% Optimizado" },
      { label: "Generación de Reseñas 5 Estrellas", current: "Manual", potential: "Flujo Post-Visita" },
    ],
    recommendation: "Optimizar la Ficha Negocio Google y Google Maps con palabras clave GEO (San Javier Maule), fotos de alta calidad, catálogo interactivo de vinos y botón a WhatsApp."
  },
  {
    id: "ai-whatsapp",
    name: "Sistema de Atención por DM / Aceleración en WhatsApp",
    category: "Atención & Cierre Comercial",
    status: "rojo",
    score: 20,
    isOptional: true,
    optionalBadgeText: "Opcional / Acelerador",
    problemSummary: "Respuestas manuales diferidas por Instagram DM. Este módulo de aceleración de respuesta en DM/WhatsApp se ofrece de forma opcional complementaria.",
    impactDescription: "Módulo Opcional: El 60% de las consultas sobre tours y precios de cajas de vino ocurren fuera de horario. Este módulo acelera las respuestas y canaliza DMs a WhatsApp como opción complementaria a la web.",
    keyMetrics: [
      { label: "Carácter de la Oferta", current: "Módulo Opcional", potential: "Acelerador Complementario" },
      { label: "Tiempo de Respuesta Promedio", current: "2 - 6 Horas", potential: "Inmediato por WhatsApp" },
      { label: "Cierre de Ventas Directo", current: "Muy Bajo", potential: "Convertible a WhatsApp" },
    ],
    recommendation: "Opcional: Implementar este módulo de aceleración de respuesta por DM/WhatsApp como complemento opcional al sistema web principal."
  }
];

export const TEN_IMMEDIATE_ACTIONS: ActionItem[] = [
  {
    id: 1,
    title: "Crear Dominio y Lanzar Página Web Convertible a WhatsApp",
    category: "Infraestructura Digital",
    priority: "Crítica",
    timeframe: "Días 1 a 3",
    impactROI: "Impacto Máximo (+350% Conversión)",
    problemSolved: "Elimina la dependencia exclusiva de Instagram y permite canalizar reservas de tours y pedidos de cajas de vino directamente a WhatsApp.",
    implementationSteps: [
      "Registrar dominio oficial (ej. vinacasatoscana.cl).",
      "Crear Página Web convertible a WhatsApp enfocada en Venta Directa de Cajas de Vino (Despacho a todo Chile).",
      "Añadir sección de Reservas de Tours Enoturísticos + Restaurant en San Javier.",
      "Conectar botones flotantes directos a WhatsApp para consultas y compras rápidas."
    ],
    toolsRequired: ["Vite / React / Tailwind", "WhatsApp Direct Integration", "Web Hosted Domain"],
    isCompleted: false,
  },
  {
    id: 2,
    title: "Optimizar Canal Directo de Ventas en WhatsApp",
    category: "Atención & Ventas",
    priority: "Crítica",
    timeframe: "Días 2 a 4",
    impactROI: "Cierre Inmediato (Cero leads perdidos)",
    problemSolved: "Resuelve la lentitud de respuesta en DMs de Instagram unificando la captación en WhatsApp.",
    implementationSteps: [
      "Configurar WhatsApp Business con respuestas rápidas y menú interactivo de la viña.",
      "Cargar catálogo con valores de cajas de vino, menú del restaurant y agenda de tours.",
      "Configurar mensajes automáticos de bienvenida con ubicación GPS de San Javier."
    ],
    toolsRequired: ["WhatsApp Business", "Catálogo Interactivo de Vinos"],
    isCompleted: false,
  },
  {
    id: 3,
    title: "Optimizar Ficha Negocio Google & Google Maps con SEO Local",
    category: "GEO & Captación Local",
    priority: "Crítica",
    timeframe: "Días 3 a 5",
    impactROI: "Captura de Turistas en Ruta (+200% Visitas)",
    problemSolved: "Recupera las búsquedas directas en Google de turistas que buscan 'viñedos en San Javier' o 'dónde almorzar en el Maule'.",
    implementationSteps: [
      "Reclamar y verificar Ficha Negocio Google en la ubicación exacta de San Javier de Loncomilla.",
      "Añadir etiquetas SEO: 'Viñedo en San Javier', 'Catas de Vino Maule', 'Restaurant Enoturístico'.",
      "Subir imágenes profesionales del viñedo, barricas, platos y botellas de vino.",
      "Añadir enlace directo a la Página Web convertible a WhatsApp."
    ],
    toolsRequired: ["Google Business Profile Console", "Geolocalización GPS San Javier"],
    isCompleted: false,
  },
  {
    id: 4,
    title: "Implementar Posicionamiento SEO, GEO y AEO (Optimización Búsquedas & IA)",
    category: "Visibilidad Orgánica",
    priority: "Alta",
    timeframe: "Semana 1",
    impactROI: "Posicionamiento Gratuito de Alto Valor",
    problemSolved: "Asegura que cuando alguien busque en Google o le pregunte a ChatGPT por recomendaciones en San Javier, Viña Casa Toscana sea la opción destacada.",
    implementationSteps: [
      "Insertar microdatos de Schema.org (Winery, Restaurant, LocalBusiness) en el código de la web.",
      "Redactar contenido estructurado respondiendo preguntas frecuentes de turistas en el Maule.",
      "Indexar la web en Google Search Console.",
      "Crear backlinks en directorios turísticos del Valle del Maule."
    ],
    toolsRequired: ["Schema.org Markup", "Google Search Console", "Contenido GEO"],
    isCompleted: false,
  },
  {
    id: 5,
    title: "[OPCIONAL] Lanzar Campaña Meta Ads Dirigida a Página Web Convertible a WhatsApp",
    category: "Acelerador Opcional de Tráfico",
    priority: "Media",
    timeframe: "Semana 2",
    impactROI: "Generación de Leads Calificados (4x a 6x ROAS)",
    problemSolved: "Atrae turistas de alto poder adquisitivo de Santiago y ciudades principales del Maule/Biobío para escapadas de fin de semana.",
    implementationSteps: [
      "Crear anuncios atractivos resaltando la experiencia toscana y vinos finos en San Javier.",
      "Segmentar por intereses: Amantes del vino, enoturismo, escapadas de fin de semana, gastronomía.",
      "Configurar Pixel de Meta para medir clics y visitas a la web y WhatsApp.",
      "Crear anuncios de retargeting para usuarios interesados."
    ],
    toolsRequired: ["Meta Ads Manager", "Meta Pixel", "Contenido Publicitario"],
    isCompleted: false,
  },
  {
    id: 6,
    title: "Sistemas de Packs & Membresía 'Club del Vino Casa Toscana'",
    category: "Monetización & Recurrencia",
    priority: "Alta",
    timeframe: "Semana 2",
    impactROI: "Aumento de Ticket Promedio (+45%)",
    problemSolved: "Aumenta el valor de vida del cliente (LTV) permitiendo que quienes hicieron el tour sigan comprando vino mes a mes por WhatsApp.",
    implementationSteps: [
      "Estructurar 3 packs de vino (Reserva, Gran Reserva, Edición Limitada Toscana).",
      "Ofrecer suscripción semestral con beneficios exclusivos para clientes.",
      "Implementar cupón de descuento en la web para compras directas a WhatsApp."
    ],
    toolsRequired: ["Catálogo Digital", "WhatsApp Sales Funnel"],
    isCompleted: false,
  },
  {
    id: 7,
    title: "Implementar Sistema Automático de Captura de Reseñas 5 Estrellas",
    category: "Reputación & Prueba Social",
    priority: "Media",
    timeframe: "Semana 2 a 3",
    impactROI: "Aumento de Confianza y Conversión (+60%)",
    problemSolved: "Construye la mayor cantidad de reseñas positivas en Google Maps para superar a la competencia en el Maule.",
    implementationSteps: [
      "Imprimir códigos QR físicos en las mesas del restaurant y la sala de catas.",
      "Enviar enlace directo por WhatsApp post-visita solicitando opinión en Google Maps.",
      "Fidelizar a clientes satisfechos."
    ],
    toolsRequired: ["QR Code Generator", "Google Maps Review Link"],
    isCompleted: false,
  },
  {
    id: 8,
    title: "Diseñar Secuencia de Mensajes WhatsApp Post-Visita",
    category: "Fidelización de Clientes",
    priority: "Media",
    timeframe: "Semana 3",
    impactROI: "Ventas Recurrentes en Fechas Clave (Fiestas Patrias, Navidad, Regalos)",
    problemSolved: "Evita perder contacto con los turistas que ya visitaron la viña.",
    implementationSteps: [
      "Crear base de datos de contacto de todos los visitantes y compradores.",
      "Enviar ofertas exclusivas de vendimia, lanzamientos de cepas y cajas de regalo por WhatsApp.",
      "Recordatorios para fechas especiales con ofertas de vino."
    ],
    toolsRequired: ["Base de Datos de Clientes", "WhatsApp Broadcast List"],
    isCompleted: false,
  },
  {
    id: 9,
    title: "Integrar Catálogo Interactivo en Instagram & Facebook",
    category: "Redes Sociales Convertibles",
    priority: "Media",
    timeframe: "Semana 3",
    impactROI: "Conversión Directa desde Redes",
    problemSolved: "Facilita que los seguidores de Instagram consulten vinos y reserven tours con un clic en la bio.",
    implementationSteps: [
      "Añadir enlace principal en la bio de Instagram dirigido a la Página Web convertible a WhatsApp.",
      "Etiquetar botellas de vino en reels y publicaciones de @vinacasatoscana.",
      "Facilitar el contacto directo por WhatsApp desde cada publicación."
    ],
    toolsRequired: ["Meta Commerce Manager", "Instagram Bio Link"],
    isCompleted: false,
  },
  {
    id: 10,
    title: "Panel de Analítica Integrado y Control de Ventas",
    category: "Control & Crecimiento",
    priority: "Alta",
    timeframe: "Semana 4",
    impactROI: "Optimización Continua del Presupuesto",
    problemSolved: "Proporciona visibilidad total sobre qué anuncio, palabra clave o canal genera más consultas reales.",
    implementationSteps: [
      "Configurar Google Analytics 4 (GA4) con eventos de clic a WhatsApp.",
      "Monitorear consultas semanales y origen de los clientes.",
      "Evaluar posicionamiento de palabras clave en San Javier y Maule."
    ],
    toolsRequired: ["Google Analytics 4", "Meta Ads Dashboard"],
    isCompleted: false,
  }
];

export const BEFORE_AFTER_COMPARISON: BeforeAfterFeature[] = [
  {
    area: "Atención al Cliente y Consultas",
    beforeState: "Respuesta manual por DM de Instagram o WhatsApp personal. Demoras de 3 a 12 horas. Pérdida de clientes nocturnos.",
    afterState: "Página Web convertible a WhatsApp que permite consultas inmediatas y catálogo a la mano de forma fluida.",
    metricChange: "Respuesta Rápida e Incremento de Consultas",
    iconName: "Globe"
  },
  {
    area: "Captación de Tráfico Orgánico",
    beforeState: "Inexistente en Google Search, Google Maps, ChatGPT y Perplexity por no contar con sitio web ni marcado Schema.",
    afterState: "Posicionamiento Top 3 en Ficha Negocio Google y Google Maps para San Javier / Maule. Recomendado por Búsquedas e IA.",
    metricChange: "De 0 a +347 Leads Locales Calificados/Mes",
    iconName: "Search"
  },
  {
    area: "Infraestructura Digital de Ventas",
    beforeState: "Dependencia total de Instagram. Sin catálogo web oficial ni enlace estructurado a WhatsApp.",
    afterState: "Página Web convertible a WhatsApp con catálogo interactivo y formulario directo para pedidos y reservas.",
    metricChange: "Canal de Venta Directo a WhatsApp",
    iconName: "Globe"
  },
  {
    area: "Publicidad Pagada (Meta Ads)",
    beforeState: "Promocionar botón en Instagram sin píxel de seguimiento ni dirección hacia la web.",
    afterState: "Anuncios en Meta Ads dirigidos a Página Web convertible a WhatsApp para captar visitantes de Santiago, Talca y Concepción.",
    metricChange: "ROAS de 4.2x a 6.5x en Campañas",
    iconName: "TrendingUp"
  },
  {
    area: "Base de Datos y Fidelización",
    beforeState: "Sin registro de clientes. Cada venta es aislada y no hay seguimiento posterior para recompras de cajas.",
    afterState: "Registro organizado de contactos de WhatsApp para campañas de recomendación y recompra de cajas de vino.",
    metricChange: "Aumento de Recompras por WhatsApp",
    iconName: "Users"
  }
];

export const PROPOSED_FUNNEL_STEPS: FunnelStep[] = [
  {
    stepNumber: 1,
    name: "Captación de Tráfico Calificado",
    channel: "Meta Ads + Ficha Negocio Google + Maps + Búsquedas SEO/GEO",
    description: "Anuncios atractivos en redes + posicionamiento destacado en Google Maps San Javier para personas buscando panoramas y vinos en el Maule.",
    conversionRole: "Atraer usuarios con alta intención de visita o compra de vinos finos.",
    keyAssets: ["Anuncios Geo-segmentados", "Ficha Negocio Google + Google Maps", "Posicionamiento SEO/GEO/AEO"]
  },
  {
    stepNumber: 2,
    name: "Página Web Convertible a WhatsApp",
    channel: "Sitio Web Oficial (vinacasatoscana.cl)",
    description: "Página ultra-rápida optimizada para móviles con fotos reales del viñedo, catálogo de vinos, opciones de tour/restaurant y botones directos a WhatsApp.",
    conversionRole: "Presentar la experiencia, eliminar objeciones y facilitar el contacto con 1 clic.",
    keyAssets: ["Página Web Convertible", "Catálogo Interactivo", "Botones Directos a WhatsApp"]
  },
  {
    stepNumber: 3,
    name: "Conversión Directa en WhatsApp",
    channel: "WhatsApp Business Viña Casa Toscana",
    description: "El cliente llega a WhatsApp con el pedido o consulta seleccionada de la web para confirmar fechas de tour o cotización de cajas de vino.",
    conversionRole: "Cerrar la venta o reserva de manera directa y personalizada.",
    keyAssets: ["Respuestas Rápidas WhatsApp", "Catálogo de Productos", "Atención Organizada"]
  },
  {
    stepNumber: 4,
    name: "Confirmación de Pedido / Reserva",
    channel: "WhatsApp Directo",
    description: "Confirmación del pago del tour o despacho de cajas de vino con envío de comprobante y ubicación GPS de San Javier.",
    conversionRole: "Asegurar el compromiso del cliente y entrega del producto o servicio.",
    keyAssets: ["Confirmación por WhatsApp", "Ubicación GPS San Javier"]
  },
  {
    stepNumber: 5,
    name: "Fidelización & Reseña en Google Maps",
    channel: "WhatsApp Post-Visita",
    description: "Post-visita, se envía un mensaje de agradecimiento solicitando una opinión en la Ficha Negocio Google y recomendando ofertas de vino.",
    conversionRole: "Generar reputación en Google Maps y recompras recurrentes de cajas de vino.",
    keyAssets: ["Enlace de Reseña Google Maps", "Ofertas Exclusivas por WhatsApp"]
  }
];

