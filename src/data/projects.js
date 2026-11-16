/**
 * PROYECTOS
 * ---------------------------------------------------------------
 * Para agregar un proyecto: copia un objeto y edítalo.
 *
 *  id         único, sin espacios
 *  title      { es, en }
 *  summary    { es, en }  1–2 líneas
 *  highlights { es: [], en: [] }  (opcional) logros/cifras, se muestran en los destacados
 *  category   'ai' | 'robotics' | 'web' | 'mobile' | 'data' | 'db' | 'creative' | 'other'
 *  type       'work' | 'thesis' | 'hackathon' | 'academic' | 'personal'
 *  org        empresa, curso o contexto (opcional)
 *  year       número (para ordenar)
 *  tech       tecnologías (se cruzan con Habilidades para contar evidencia)
 *  featured   true = aparece en "Destacados"
 *  image      ruta en /public (opcional; si no, se usa un fondo con ícono)
 *  links      [{ label, url }]  (GitHub, demo, etc.)
 *  model3d    ruta .glb (opcional; abre el visor 3D)
 */
const GH = 'https://github.com/frayderMM/'

export const projects = [
  // ======================= IA & CIENCIA DE DATOS =======================
  {
    id: 'erg-tea',
    title: {
      es: 'Detección de TEA con Deep Learning explicable (Tesis)',
      en: 'Explainable Deep Learning for Autism Detection (Thesis)',
    },
    summary: {
      es: 'Detección de Trastorno del Espectro Autista a partir de señales de electrorretinograma (ERG) del dataset LEOPs.',
      en: 'Autism Spectrum Disorder detection from electroretinogram (ERG) signals of the LEOPs dataset.',
    },
    highlights: {
      es: [
        'Compara 1D-CNN, ResNet1D, Transformer y ML clásico',
        'Validación por participante, sin data leakage',
        'Explicabilidad con Integrated Gradients y SHAP',
      ],
      en: [
        'Compares 1D-CNN, ResNet1D, Transformer and classic ML',
        'Participant-level validation, no data leakage',
        'Explainability with Integrated Gradients and SHAP',
      ],
    },
    category: 'ai',
    type: 'thesis',
    org: 'Universidad ESAN',
    year: 2026,
    tech: ['Python', 'PyTorch', 'Deep Learning', 'Time Series', 'Transformers', 'SHAP'],
    featured: true,
    links: [{ label: 'GitHub', url: GH + 'erg-tea' }],
  },
  {
    id: 'cad-inen',
    title: {
      es: 'CAD-INEN: IA para análisis mamográfico',
      en: 'CAD-INEN: AI for Mammography Analysis',
    },
    summary: {
      es: 'Sistema de apoyo al análisis de mamografías para el INEN: API clínica, interfaz web y modelos de clasificación, detección y segmentación.',
      en: 'Mammography analysis support system for INEN: clinical API, web interface and classification, detection and segmentation models.',
    },
    highlights: {
      es: [
        'Clasificación EfficientNet-B3 + CBAM, detección YOLOv8, segmentación U-Net',
        'API REST con FastAPI, PostgreSQL, DICOM y roles con JWT',
        'Frontend, backend y sitio web del proyecto',
      ],
      en: [
        'EfficientNet-B3 + CBAM classification, YOLOv8 detection, U-Net segmentation',
        'FastAPI REST API with PostgreSQL, DICOM and JWT roles',
        'Frontend, backend and project website',
      ],
    },
    category: 'ai',
    type: 'academic',
    org: 'ESAN × INEN · Capstone',
    year: 2026,
    tech: ['Python', 'PyTorch', 'Computer Vision', 'YOLOv8', 'FastAPI', 'PostgreSQL', 'JWT', 'Docker'],
    featured: true,
    links: [
      { label: 'Backend', url: GH + 'backend_inen_class_mammography' },
      { label: 'Frontend', url: GH + 'frontend_inen_class_mammography' },
      { label: 'Web', url: GH + 'mamadetect-ai-web' },
      { label: 'Modelos', url: GH + 'proyectoINEN-clasificaciondemamorgrafias' },
    ],
  },
  {
    id: 'observatorio-electoral',
    title: {
      es: 'Observatorio Web Electoral Perú 2026',
      en: 'Peru 2026 Electoral Web Observatory',
    },
    summary: {
      es: 'Scraping y análisis de tópicos políticos en diarios, YouTube, Reddit y X durante la segunda vuelta 2026, con dashboard en tiempo real.',
      en: 'Scraping and political topic analysis across newspapers, YouTube, Reddit and X during the 2026 runoff, with a real-time dashboard.',
    },
    highlights: {
      es: ['3 781 documentos de 4 plataformas', '8 tópicos con TF-IDF + NMF', 'Dashboard con FastAPI + WebSockets'],
      en: ['3,781 documents from 4 platforms', '8 topics with TF-IDF + NMF', 'Dashboard with FastAPI + WebSockets'],
    },
    category: 'ai',
    type: 'academic',
    org: 'Analítica de la Web · ESAN',
    year: 2026,
    tech: ['Python', 'NLP', 'Web Scraping', 'FastAPI', 'WebSockets'],
    featured: true,
    links: [{ label: 'GitHub', url: GH + 'proyecto-analitica-web-topicos-postura-politica' }],
  },
  {
    id: 'politica-x',
    title: {
      es: 'Postura política e influencia digital en X',
      en: 'Political Stance & Digital Influence on X',
    },
    summary: {
      es: 'Sentimiento (RoBERTuito), postura política (BETO), tópicos (BERTopic) e influencia (PageRank, HITS, Louvain) en tweets de la elección 2026.',
      en: 'Sentiment (RoBERTuito), stance (BETO), topics (BERTopic) and influence (PageRank, HITS, Louvain) on 2026 election tweets.',
    },
    category: 'ai',
    type: 'academic',
    org: 'Analítica de la Web · ESAN',
    year: 2026,
    tech: ['Python', 'NLP', 'Transformers', 'Streamlit'],
    links: [{ label: 'GitHub', url: GH + 'politica-x-2026' }],
  },
  {
    id: 'ethereum',
    title: { es: 'Pronóstico del precio de Ethereum', en: 'Ethereum Price Forecasting' },
    summary: {
      es: 'Box-Jenkins, ML supervisado, H2O (Isolation Forest) y redes recurrentes para pronosticar ETH-USD y recomendar comprar, mantener o cubrir riesgo.',
      en: 'Box-Jenkins, supervised ML, H2O (Isolation Forest) and RNNs to forecast ETH-USD and recommend buy, hold or hedge.',
    },
    category: 'ai',
    type: 'academic',
    org: 'Minería de Datos Avanzado · ESAN',
    year: 2026,
    tech: ['Python', 'Machine Learning', 'Time Series', 'Deep Learning', 'H2O'],
    links: [{ label: 'GitHub', url: GH + 'ethereum-price-forecasting-ml' }],
  },
  {
    id: 'senti',
    title: { es: 'SENTI: alertas ante emergencias naturales', en: 'SENTI: Natural Disaster Alerts' },
    summary: {
      es: 'Plataforma peruana que integra fuentes oficiales y reportes ciudadanos para dar alertas claras, planes familiares y rutas de menor riesgo, incluso con baja conectividad.',
      en: 'Peruvian platform combining official sources and citizen reports into clear alerts, family plans and safer routes, even with poor connectivity.',
    },
    category: 'ai',
    type: 'personal',
    year: 2026,
    tech: ['Python'],
    featured: true,
    links: [{ label: 'GitHub', url: GH + 'PANDAX-SENTI' }],
  },
  {
    id: 'fingerprint',
    title: { es: 'Restauración de huellas dactilares', en: 'Fingerprint Restoration' },
    summary: {
      es: 'Autoencoder que reconstruye huellas dañadas, con backend FastAPI y frontend web para subir imágenes.',
      en: 'Autoencoder that reconstructs damaged fingerprints, with a FastAPI backend and a web frontend.',
    },
    category: 'ai',
    type: 'academic',
    year: 2026,
    tech: ['Python', 'Deep Learning', 'Computer Vision', 'FastAPI'],
    links: [{ label: 'GitHub', url: GH + 'fingerprintRestoration' }],
  },
  {
    id: 'maskrcnn',
    title: { es: 'Modelos Mask R-CNN', en: 'Mask R-CNN Models' },
    summary: {
      es: 'Notebooks de experimentación con Mask R-CNN para segmentación de instancias.',
      en: 'Experiment notebooks with Mask R-CNN for instance segmentation.',
    },
    category: 'ai',
    type: 'academic',
    year: 2026,
    tech: ['Python', 'Computer Vision', 'Deep Learning'],
    links: [{ label: 'GitHub', url: GH + 'MasckCNNmodels' }],
  },
  {
    id: 'rag-esan',
    title: { es: 'Chatbot RAG ESAN', en: 'ESAN RAG Chatbot' },
    summary: {
      es: 'Chatbot con Retrieval-Augmented Generation sobre información de la universidad.',
      en: 'Retrieval-Augmented Generation chatbot over university information.',
    },
    category: 'ai',
    type: 'academic',
    year: 2026,
    tech: ['NLP', 'LLM', 'RAG'],
    links: [{ label: 'GitHub', url: GH + 'RAG-ESAN_chatbot' }],
  },
  {
    id: 'sentia',
    title: { es: 'SentIA: salud mental con IA', en: 'SentIA: Mental Health Insight with AI' },
    summary: {
      es: 'Analiza textos para detectar señales de ansiedad, depresión o estrés y sugerir recursos. Proyecto final del curso Building AI.',
      en: 'Analyzes text to detect signs of anxiety, depression or distress and suggest resources. Building AI course final project.',
    },
    category: 'ai',
    type: 'academic',
    org: 'Building AI',
    year: 2025,
    tech: ['NLP', 'Machine Learning'],
    links: [{ label: 'GitHub', url: GH + 'AI-final-project-on-mental-health' }],
  },

  // ======================= DATOS & BI =======================
  {
    id: 'datathon-sunass',
    title: { es: 'Datathon SUNASS', en: 'SUNASS Datathon' },
    summary: {
      es: 'Análisis de datos y prototipo web desarrollados para la Datathon de SUNASS.',
      en: 'Data analysis and web prototype built for the SUNASS Datathon.',
    },
    category: 'data',
    type: 'hackathon',
    org: 'SUNASS',
    year: 2026,
    tech: ['Python', 'Data Mining'],
    links: [
      { label: 'Análisis', url: GH + 'datathonSunass' },
      { label: 'Web', url: GH + 'sistemasolSUNASS' },
    ],
  },
  {
    id: 'cafe-ancestral',
    title: { es: 'Café Ancestral: BI y web corporativa', en: 'Café Ancestral: BI & Corporate Website' },
    summary: {
      es: 'Solución BI completa para una cadena de café peruano: web, base transaccional, Data Warehouse y dashboards en Power BI.',
      en: 'End-to-end BI for a Peruvian coffee chain: website, transactional DB, Data Warehouse and Power BI dashboards.',
    },
    category: 'data',
    type: 'academic',
    org: 'Business Intelligence · ESAN',
    year: 2026,
    tech: ['Power BI', 'Data Warehousing', 'ETL Pipelines', 'HTML', 'CSS'],
    links: [{ label: 'GitHub', url: GH + 'Cafe_Ancestral_webpage' }],
  },
  {
    id: 'sales_dashboard',
    title: { es: 'Dashboard de Ventas', en: 'Sales Dashboard' },
    summary: {
      es: 'Control y análisis de ventas por lote en Excel.',
      en: 'Batch-level sales tracking and analysis in Excel.',
    },
    category: 'data',
    type: 'work',
    org: 'Cooperativa Cafetalera Inkawasi',
    year: 2025,
    tech: ['Excel Avanzado (VBA)'],
  },
  {
    id: 'excel_vba_books',
    title: { es: 'Macro VBA – Libros Electrónicos', en: 'VBA Macro – Electronic Books' },
    summary: {
      es: 'Genera el TXT del Registro de Activos Fijos para su envío a SUNAT vía PLE.',
      en: 'Generates the Fixed Assets Register TXT for submission to SUNAT via PLE.',
    },
    category: 'data',
    type: 'work',
    org: 'Cooperativa Cafetalera Inkawasi',
    year: 2024,
    tech: ['Excel Avanzado (VBA)'],
  },

  // ======================= ROBÓTICA =======================
  {
    id: 'capytown-granprix',
    title: { es: 'Gran Prix CapyTown: robot autónomo', en: 'CapyTown Grand Prix: Autonomous Robot' },
    summary: {
      es: 'Navegación autónoma de un Yahboom ROSMASTER R2 en un laberinto de 6×4 celdas, siguiendo la pared derecha con LiDAR.',
      en: 'Autonomous navigation of a Yahboom ROSMASTER R2 through a 6×4-cell maze using right-wall following with LiDAR.',
    },
    highlights: {
      es: ['ROS 2 Humble sobre Raspberry Pi 5', 'LiDAR MS200 y chasis Ackermann', 'Censo de cajas y navegación de pasillo'],
      en: ['ROS 2 Humble on Raspberry Pi 5', 'MS200 LiDAR and Ackermann chassis', 'Box census and corridor navigation'],
    },
    category: 'robotics',
    type: 'academic',
    org: 'Robótica Móvil · ESAN × INEN',
    year: 2026,
    tech: ['Python', 'ROS 2', 'LiDAR', 'Raspberry Pi'],
    featured: true,
    links: [
      { label: 'Reto final', url: GH + 'Reto-Final-ROBOTICA-Yahboom-ROSMASTER-' },
      { label: 'Censo LiDAR', url: GH + 'capytown-reto33' },
      { label: 'Pasillo', url: GH + 'RecorrerJironLidar' },
    ],
  },
  {
    id: 'micromouse',
    title: { es: 'Simulador Micromouse', en: 'Micromouse Simulator' },
    summary: {
      es: 'Estrategia de dos intentos: exploración con flood fill y LiDAR simulado, luego speed run por la ruta óptima con BFS.',
      en: 'Two-run strategy: flood-fill exploration with simulated LiDAR, then a BFS speed run along the optimal route.',
    },
    category: 'robotics',
    type: 'academic',
    year: 2026,
    tech: ['Python', 'Algoritmos'],
    links: [{ label: 'GitHub', url: GH + 'mouse-runner-robotica' }],
  },
  {
    id: 'line-detector',
    title: { es: 'Detector de líneas RosCar', en: 'RosCar Line Detector' },
    summary: {
      es: 'Detección de líneas para un robot RosCar con Raspberry Pi.',
      en: 'Line detection for a Raspberry Pi RosCar robot.',
    },
    category: 'robotics',
    type: 'academic',
    year: 2026,
    tech: ['Python', 'Computer Vision', 'ROS 2', 'Raspberry Pi'],
    links: [{ label: 'GitHub', url: GH + 'Line_Detector_RosCar_Pi_R2' }],
  },

  // ======================= WEB =======================
  {
    id: 'oncoruta',
    title: { es: 'OncoRuta Mujer IA', en: 'OncoRuta Mujer IA' },
    summary: {
      es: 'MVP que guía a pacientes con sospecha de cáncer de mama o cérvix en su proceso dentro del INEN, con panel de seguimiento para el personal.',
      en: 'MVP guiding patients with suspected breast or cervical cancer through their INEN process, with a tracking panel for staff.',
    },
    highlights: {
      es: ['Hackatón Transformagob 2026 · Reto INEN', 'Semáforo de riesgo operativo para el personal', 'React 18 + TypeScript + Tailwind'],
      en: ['Transformagob 2026 Hackathon · INEN challenge', 'Operational risk traffic light for staff', 'React 18 + TypeScript + Tailwind'],
    },
    category: 'web',
    type: 'hackathon',
    org: 'Transformagob 2026',
    year: 2026,
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    links: [{ label: 'GitHub', url: GH + 'Oncoruta_Transformagob' }],
  },
  {
    id: 'sistema-oracle',
    title: { es: 'Sistema Campus Edutiva', en: 'Campus Edutiva System' },
    summary: {
      es: 'Reportería web que compara Homologación, Edutiva y datos de Campus/Oracle para detectar cursos, profesores o aperturas pendientes.',
      en: 'Web reporting that compares Homologation, Edutiva and Campus/Oracle data to spot missing courses, professors or openings.',
    },
    category: 'web',
    year: 2026,
    tech: ['JavaScript', 'Oracle Database'],
    links: [{ label: 'GitHub', url: GH + 'sistema_oracle' }],
  },
  {
    id: 'promcoser_platform',
    title: { es: 'Plataforma Web PROMCOSER', en: 'PROMCOSER Web Platform' },
    summary: {
      es: 'Gestión de personal, maquinaria y clientes, con el "Parte Diario" digitalizado y reportes interactivos.',
      en: 'Staff, machinery and client management, with a digitized "Daily Report" and interactive reports.',
    },
    category: 'web',
    type: 'work',
    org: 'PROMCOSER',
    year: 2024,
    tech: ['Quasar', 'Vue.js', 'SQL Server', 'Git & GitHub'],
  },
  {
    id: 'minsur_website_redesign',
    title: { es: 'Rediseño Web Minsur', en: 'Minsur Website Redesign' },
    summary: {
      es: 'Sitio oficial con Quasar (Vue) y .NET Core, diseño responsivo e integración de APIs.',
      en: 'Official website with Quasar (Vue) and .NET Core, responsive design and API integration.',
    },
    category: 'web',
    type: 'work',
    org: 'Minsur',
    year: 2025,
    tech: ['Quasar', 'Vue.js', 'ASP.NET Core', 'REST APIs'],
  },
  {
    id: 'inventory_system',
    title: { es: 'Sistema de Inventario', en: 'Inventory System' },
    summary: {
      es: 'Inventario con validación de datos en tiempo real vía API SUNAT.',
      en: 'Inventory with real-time data validation through the SUNAT API.',
    },
    category: 'web',
    type: 'work',
    org: 'Ferretería',
    year: 2024,
    tech: ['Python', 'SQL Server', 'REST APIs'],
  },
  {
    id: 'network_calculator',
    title: { es: 'Calculadora de Redes', en: 'Network Calculator' },
    summary: {
      es: 'Subneteo con VLSM y CIDR, con exportación a CSV y Excel.',
      en: 'Subnetting with VLSM and CIDR, with CSV and Excel export.',
    },
    category: 'web',
    type: 'academic',
    year: 2025,
    image: '/img/Portfolio/redes.png',
    tech: ['Vue.js', 'Quasar', 'JavaScript'],
    links: [{ label: 'GitHub', url: GH + 'SUBNET' }],
  },
  {
    id: 'lunchtime',
    title: { es: 'LunchTime', en: 'LunchTime' },
    summary: {
      es: 'Selector de horario de almuerzo para equipos con Flask y SQLite: elección por persona, resumen del equipo y horario más popular.',
      en: 'Team lunch-time picker with Flask and SQLite: per-person choice, team overview and most popular slot.',
    },
    category: 'web',
    type: 'academic',
    year: 2026,
    tech: ['Python', 'Flask'],
    links: [{ label: 'GitHub', url: GH + 'Class_vide_coding_lunch-time-selector' }],
  },
  {
    id: 'personal_portfolio',
    title: { es: 'Portafolio Personal', en: 'Personal Portfolio' },
    summary: {
      es: 'Este sitio: Vue 3 + Quasar, bilingüe, con datos en vivo de GitHub.',
      en: 'This site: Vue 3 + Quasar, bilingual, with live GitHub data.',
    },
    category: 'web',
    type: 'personal',
    year: 2025,
    tech: ['Vue.js', 'Quasar', 'JavaScript', 'HTML', 'CSS'],
    links: [{ label: 'GitHub', url: GH + 'PORTFOLIO-PROYECT' }],
  },

  // ======================= MÓVIL =======================
  {
    id: 'sla-tracker',
    title: { es: 'SLA Tracker (TCS – ESAN)', en: 'SLA Tracker (TCS – ESAN)' },
    summary: {
      es: 'App móvil para monitorear y predecir el cumplimiento de SLA, con su API.',
      en: 'Mobile app to monitor and predict SLA compliance, with its API.',
    },
    category: 'mobile',
    type: 'academic',
    org: 'TCS × ESAN',
    year: 2025,
    tech: ['Kotlin', 'Android (Kotlin)', 'C#', 'REST APIs'],
    links: [
      { label: 'App', url: GH + 'SLATrackerAPP' },
      { label: 'API', url: GH + 'sla_api' },
    ],
  },
  {
    id: 'sabor-esan',
    title: { es: 'SaborESAN', en: 'SaborESAN' },
    summary: {
      es: 'Plataforma de reconocimiento de comida: app Android, interfaz web y API.',
      en: 'Food recognition platform: Android app, web interface and API.',
    },
    category: 'mobile',
    type: 'academic',
    year: 2025,
    tech: ['Kotlin', 'Android (Kotlin)', 'TypeScript', 'Python'],
    links: [
      { label: 'App', url: GH + 'SaborEsanAPP' },
      { label: 'Web', url: GH + 'saborEsanWEB' },
      { label: 'API', url: GH + 'saborperu-api' },
    ],
  },
  {
    id: 'zapp',
    title: { es: 'zAPP: trueque digital', en: 'zAPP: Digital Bartering' },
    summary: {
      es: 'Los usuarios publican productos o servicios, los valoran en créditos internos y los intercambian sin dinero.',
      en: 'Users post goods or services, value them in internal credits and trade them without money.',
    },
    category: 'mobile',
    type: 'academic',
    year: 2025,
    tech: ['Kotlin', 'Android (Kotlin)', 'Jetpack Compose'],
    links: [{ label: 'GitHub', url: GH + 'zAPP' }],
  },
  {
    id: 'fake-esan-app',
    title: { es: 'Réplica de la app ESAN', en: 'ESAN App Replica' },
    summary: {
      es: 'Réplica académica de la aplicación móvil de la Universidad ESAN.',
      en: 'Academic replica of Universidad ESAN’s mobile app.',
    },
    category: 'mobile',
    type: 'academic',
    year: 2026,
    tech: ['Kotlin', 'Android (Kotlin)', 'Jetpack Compose'],
    links: [{ label: 'GitHub', url: GH + 'FAKE_ESAN_APP' }],
  },

  // ======================= BASES DE DATOS =======================
  {
    id: 'db-chamba',
    title: { es: 'Chamba DB', en: 'Chamba DB' },
    summary: {
      es: 'Base de datos de una red social de empleo para trabajos operativos: postulaciones, chat, reputación y ofertas geolocalizadas.',
      en: 'Database for a job network for operational work: applications, chat, reputation and geolocated offers.',
    },
    category: 'db',
    type: 'academic',
    year: 2025,
    tech: ['SQL Server'],
    links: [{ label: 'GitHub', url: GH + 'DB-chamba' }],
  },
  {
    id: 'db-logistica',
    title: { es: 'Logística & Ruteo DB', en: 'Logistics & Routing DB' },
    summary: {
      es: 'Envíos, centros de distribución y rutas con esquema OLAP, ETL incremental e índices columnstore.',
      en: 'Shipments, distribution centers and routes with an OLAP schema, incremental ETL and columnstore indexes.',
    },
    category: 'db',
    type: 'academic',
    year: 2025,
    tech: ['SQL Server', 'Data Warehousing', 'ETL Pipelines'],
    links: [{ label: 'GitHub', url: GH + 'logistica-db' }],
  },
  {
    id: 'db-clinica',
    title: { es: 'Clínica San Martín DB', en: 'San Martín Clinic DB' },
    summary: {
      es: 'Pacientes, citas, historias clínicas y medicamentos, con particionado por fechas, procedimientos de facturación y seguridad por roles.',
      en: 'Patients, appointments, medical records and drugs, with date partitioning, billing procedures and role-based security.',
    },
    category: 'db',
    type: 'academic',
    year: 2025,
    tech: ['MySQL'],
    links: [{ label: 'GitHub', url: GH + 'clinicaSanMartin-db' }],
  },
  {
    id: 'db-tienda',
    title: { es: 'Tienda Online DB', en: 'Online Store DB' },
    summary: {
      es: 'E-commerce en 3FN: catálogo, inventario, pedidos, pagos y auditoría, con vistas materializadas para KPIs.',
      en: '3NF e-commerce: catalog, inventory, orders, payments and auditing, with materialized views for KPIs.',
    },
    category: 'db',
    type: 'academic',
    year: 2025,
    tech: ['PostgreSQL'],
    links: [{ label: 'GitHub', url: GH + 'tiendaOnline' }],
  },

  // ======================= OTROS =======================
  {
    id: 'crypto_software',
    title: { es: 'Software de Criptografía', en: 'Cryptography Software' },
    summary: {
      es: '5 algoritmos (CSRD, NSRPQ, Transposición Columnar, Vigenère y XOR) en ejecución serial y paralela.',
      en: '5 algorithms (CSRD, NSRPQ, Columnar Transposition, Vigenère and XOR) running serially and in parallel.',
    },
    category: 'other',
    type: 'personal',
    year: 2025,
    tech: ['Java'],
    links: [{ label: 'GitHub', url: GH + 'Paralela' }],
  },
  {
    id: 'inventario-pyqt',
    title: { es: 'Inventario y ventas (PyQt)', en: 'Inventory & Sales (PyQt)' },
    summary: {
      es: 'Aplicación de escritorio para inventario y ventas de una farmacia, con base de datos.',
      en: 'Desktop app for pharmacy inventory and sales, with a database.',
    },
    category: 'other',
    type: 'academic',
    org: 'Análisis y Diseño de Algoritmos',
    year: 2024,
    tech: ['Python'],
    links: [{ label: 'GitHub', url: GH + 'Proyecto-Final-ADA' }],
  },
  {
    id: 'grafos',
    title: { es: 'Proyecto de Grafos', en: 'Graph Theory Project' },
    summary: {
      es: 'Implementación de algoritmos de grafos para Matemática Discreta.',
      en: 'Graph algorithm implementations for Discrete Mathematics.',
    },
    category: 'other',
    type: 'academic',
    org: 'Matemática Discreta',
    year: 2024,
    tech: ['Python', 'Algoritmos'],
    links: [{ label: 'GitHub', url: GH + 'MATE-DISCRETA-PROYECTO-GRAFOS' }],
  },

  // ======================= CREATIVO =======================
  {
    id: 'animation_3d',
    title: { es: 'Animación 3D', en: '3D Animation' },
    summary: {
      es: 'Personaje animado en 3D. Ábrelo en el visor para explorarlo.',
      en: 'Animated 3D character. Open it in the viewer to explore it.',
    },
    category: 'creative',
    type: 'personal',
    year: 2024,
    image: '/img/Portfolio/Af.jpg',
    tech: ['Modelado 3D', 'Animación'],
    model3d: '/img/models/orco.glb',
  },
  {
    id: 'parametric',
    title: { es: 'Modelado Paramétrico', en: 'Parametric Modeling' },
    summary: { es: 'Modelado 3D paramétrico.', en: 'Parametric 3D modeling.' },
    category: 'creative',
    type: 'personal',
    year: 2024,
    image: '/img/Portfolio/360.webp',
    tech: ['Modelado 3D'],
  },
  {
    id: 'video',
    title: { es: 'Edición de Video', en: 'Video Editing' },
    summary: { es: 'Edición de video y fotografía.', en: 'Video editing and photography.' },
    category: 'creative',
    type: 'personal',
    year: 2024,
    image: '/img/Portfolio/fil.jpg',
    tech: ['Edición de video', 'Fotografía'],
  },
  {
    id: 'design',
    title: { es: 'Diseño Creativo', en: 'Creative Design' },
    summary: { es: 'Diseño gráfico y fotografía.', en: 'Graphic design and photography.' },
    category: 'creative',
    type: 'personal',
    year: 2024,
    image: '/img/p4.jpg',
    tech: ['Diseño', 'Fotografía'],
  },
]

export const projectCategories = [
  { id: 'all', icon: 'fa-solid fa-layer-group', label: { es: 'Todos', en: 'All' } },
  { id: 'ai', icon: 'fa-solid fa-brain', label: { es: 'IA & Data Science', en: 'AI & Data Science' } },
  { id: 'data', icon: 'fa-solid fa-chart-pie', label: { es: 'Datos & BI', en: 'Data & BI' } },
  { id: 'robotics', icon: 'fa-solid fa-robot', label: { es: 'Robótica', en: 'Robotics' } },
  { id: 'web', icon: 'fa-solid fa-code', label: { es: 'Web', en: 'Web' } },
  { id: 'mobile', icon: 'fa-solid fa-mobile-screen', label: { es: 'Móvil', en: 'Mobile' } },
  { id: 'db', icon: 'fa-solid fa-database', label: { es: 'Bases de datos', en: 'Databases' } },
  { id: 'other', icon: 'fa-solid fa-microchip', label: { es: 'Otros', en: 'Other' } },
  { id: 'creative', icon: 'fa-solid fa-palette', label: { es: 'Creativo', en: 'Creative' } },
]

export const projectTypes = {
  work: { es: 'Trabajo', en: 'Work', color: '#22c55e' },
  thesis: { es: 'Tesis', en: 'Thesis', color: '#f59e0b' },
  hackathon: { es: 'Hackatón', en: 'Hackathon', color: '#ec4899' },
  academic: { es: 'Académico', en: 'Academic', color: '#00bfff' },
  personal: { es: 'Personal', en: 'Personal', color: '#a78bfa' },
}

export const GITHUB_PROFILE = 'https://github.com/frayderMM'
