/**
 * CURSOS de la carrera, por periodo (tomados del aula virtual de ESAN).
 * Las descripciones y temas se elaboraron a partir de los sílabos oficiales de cada curso.
 * Para agregar el siguiente ciclo: añade un objeto al final de `periodos`
 * y define sus cursos en `cursos`.
 *  enCurso: true  → ciclo actual
 *  ciclo: null    → periodo de verano
 *  temas          → (opcional) temas principales del curso
 */
export const periodos = [
  {
    periodo: '2022-2',
    ciclo: 1,
    cursos: [
      'lectura_redaccion',
      'pre_calculo',
      'administracion_general',
      'globalizacion_realidad_nacional',
      'estrategias_aprendizaje',
      'habilidades_actitudinales',
      'leveling_course',
    ],
  },
  {
    periodo: '2023-1',
    ciclo: 2,
    cursos: [
      'calculo_i',
      'comunicacion_literatura_i',
      'contabilidad_general',
      'estadistica_probabilidades',
      'fisica_i',
      'fundamentos_programacion',
    ],
  },
  {
    periodo: '2023-2',
    ciclo: 3,
    cursos: [
      'algoritmos_estructura_datos',
      'base_datos',
      'basic_english',
      'calculo_ii',
      'comunicacion_literatura_ii',
      'fundamentos_logica',
      'intro_ciencia_datos',
    ],
  },
  {
    periodo: '2024-1',
    ciclo: 4,
    cursos: [
      'algebra_lineal_i',
      'arquitectura_computador_i',
      'costos_presupuestos',
      'estadistica_inferencial',
      'intermediate_english_i',
      'marketing_ingenieria',
      'programacion_oo',
    ],
  },
  {
    periodo: '2024-2',
    ciclo: 5,
    cursos: [
      'analisis_multivariado_i',
      'analisis_diseno_algoritmos',
      'desarrollo_web',
      'ingenieria_software_i',
      'intermediate_english_ii',
      'investigacion_operativa_i',
      'matematica_discreta',
      'sistemas_operativos_i',
    ],
  },
  { periodo: '2025-0', ciclo: null, cursos: ['intermediate_english_iii'] },
  {
    periodo: '2025-1',
    ciclo: 6,
    cursos: [
      'analisis_multivariado_ii',
      'computacion_paralela',
      'gestion_financiera',
      'ingenieria_procesos_negocio',
      'inteligencia_artificial',
      'metodologia_investigacion',
      'planeacion_estrategica',
      'redes_comunicaciones',
    ],
  },
  {
    periodo: '2025-2',
    ciclo: 7,
    cursos: [
      'big_data_analytics',
      'computacion_nube',
      'computacion_grafica',
      'desarrollo_moviles',
      'machine_learning',
      'mineria_datos',
      'prueba_software',
    ],
  },
  {
    periodo: '2026-1',
    ciclo: 8,
    cursos: [
      'analitica_web',
      'capstone_project_i',
      'entrepreneurship',
      'etica_responsabilidad_ambiental',
      'inteligencia_negocios',
      'mineria_datos_avanzada',
      'robotica',
    ],
  },
  {
    periodo: '2026-2',
    ciclo: 9,
    enCurso: true,
    cursos: [
      'chatbots_rag',
      'iot',
      'productos_digitales',
      'vibe_coding',
      'ml_banca',
      'realidad_aumentada',
      'tesis_i',
    ],
  },
]

export const cursos = {
  lectura_redaccion: {
    name: { es: 'Lectura y Redacción', en: 'Reading and Writing' },
    desc: {
      es: 'Afianza la comprensión lectora y los principios de la redacción: estrategias de lectura reflexiva de textos expositivos, periodísticos, argumentativos y narrativos, y redacción de textos breves aplicando las reglas ortográficas.',
      en: 'Strengthens reading comprehension and writing principles: reflective reading strategies for expository, journalistic, argumentative and narrative texts, and writing short texts applying spelling rules.',
    },
    temas: {
      es: [
        'Comprensión lectora',
        'Tipos de texto',
        'Redacción de textos breves',
        'Acentuación y puntuación',
      ],
      en: [
        'Reading comprehension',
        'Text types',
        'Writing short texts',
        'Accentuation and punctuation',
      ],
    },
  },
  pre_calculo: {
    name: { es: 'Pre Cálculo', en: 'Pre-Calculus' },
    desc: {
      es: 'Consolida la base matemática para la carrera: revisión de álgebra, conjuntos numéricos, ecuaciones e inecuaciones e introducción a la geometría analítica, desarrollando el razonamiento lógico y el pensamiento crítico.',
      en: 'Strengthens the math foundation for the degree: algebra review, number sets, equations and inequalities and an introduction to analytic geometry, building logical reasoning and critical thinking.',
    },
    temas: {
      es: ['Álgebra', 'Conjuntos numéricos', 'Ecuaciones e inecuaciones', 'Geometría analítica'],
      en: ['Algebra', 'Number sets', 'Equations and inequalities', 'Analytic geometry'],
    },
  },
  administracion_general: {
    name: { es: 'Administración General', en: 'General Management' },
    desc: {
      es: 'Teorías y enfoques de la administración dentro de una visión sistémica y globalizada: funciones y roles del administrador, cultura organizacional, responsabilidad social, cambio, innovación y emprendimiento.',
      en: 'Management theories and approaches from a systemic, global view: the manager’s functions and roles, organizational culture, social responsibility, change, innovation and entrepreneurship.',
    },
    temas: {
      es: [
        'Teorías de la administración',
        'Funciones del administrador',
        'Cultura organizacional',
        'Responsabilidad social',
        'Innovación y emprendimiento',
      ],
      en: [
        'Management theories',
        'Manager functions',
        'Organizational culture',
        'Social responsibility',
        'Innovation and entrepreneurship',
      ],
    },
  },
  globalizacion_realidad_nacional: {
    name: { es: 'Globalización y Realidad Nacional', en: 'Globalization and National Reality' },
    desc: {
      es: 'Análisis de la diversidad geográfica, económica, social, cultural y política del Perú y sus vínculos con América Latina y el mundo, junto con un panorama de la geopolítica global desde 1945 hasta la actualidad.',
      en: 'Analysis of Peru’s geographic, economic, social, cultural and political diversity and its ties to Latin America and the world, along with an overview of global geopolitics from 1945 to the present.',
    },
    temas: {
      es: [
        'Geografía y ecorregiones del Perú',
        'Indicadores económicos',
        'Estado peruano',
        'Geopolítica desde 1945',
        'Calentamiento global',
      ],
      en: [
        'Peru’s geography and ecoregions',
        'Economic indicators',
        'The Peruvian State',
        'Geopolitics since 1945',
        'Global warming',
      ],
    },
  },
  estrategias_aprendizaje: {
    name: { es: 'Estrategias de Aprendizaje', en: 'Learning Strategies' },
    desc: {
      es: 'Técnicas para incorporarse a la vida universitaria y aprender mejor: gestión eficiente del tiempo, estrategias de estudio según el estilo de aprendizaje, comprensión lectora, memorización y presentaciones eficaces.',
      en: 'Techniques to adapt to university life and learn better: efficient time management, study strategies by learning style, reading comprehension, memorization and effective presentations.',
    },
    temas: {
      es: [
        'Estilos de aprendizaje',
        'Gestión del tiempo',
        'Comprensión lectora',
        'Técnicas de memorización',
        'Presentaciones eficaces',
      ],
      en: [
        'Learning styles',
        'Time management',
        'Reading comprehension',
        'Memorization techniques',
        'Effective presentations',
      ],
    },
  },
  habilidades_actitudinales: {
    name: { es: 'Habilidades Actitudinales', en: 'Attitudinal Skills' },
    desc: {
      es: 'Habilidades personales para adaptarse a la vida universitaria, en cuatro unidades: autoconocimiento, autorregulación emocional, comunicación efectiva y trabajo en equipo.',
      en: 'Personal skills to adapt to university life, in four units: self-knowledge, emotional self-regulation, effective communication and teamwork.',
    },
    temas: {
      es: ['Autoconocimiento', 'Autorregulación', 'Comunicación efectiva', 'Trabajo en equipo'],
      en: ['Self-knowledge', 'Self-regulation', 'Effective communication', 'Teamwork'],
    },
  },
  leveling_course: {
    name: { es: 'Leveling Course', en: 'Leveling Course' },
    desc: {
      es: 'Curso de nivelación de inglés, nivel A1 (usuario básico) del Marco Común Europeo, en modalidad síncrona y asíncrona, para desarrollar las cuatro destrezas lingüísticas.',
      en: 'English leveling course, A1 level (basic user) of the Common European Framework, in synchronous and asynchronous sessions, developing all four language skills.',
    },
    temas: {
      es: ['Nivel A1', 'Vocabulario básico', 'Gramática básica', 'Comprensión y expresión'],
      en: ['A1 level', 'Basic vocabulary', 'Basic grammar', 'Comprehension and expression'],
    },
  },
  calculo_i: {
    name: { es: 'Cálculo I', en: 'Calculus I' },
    desc: {
      es: 'Consolida las bases de Pre Cálculo con modelación matemática de situaciones reales: funciones de una variable, límites y cálculo diferencial, con aplicaciones en ingeniería, administración y economía.',
      en: 'Builds on Pre-Calculus with mathematical modeling of real situations: single-variable functions, limits and differential calculus, applied to engineering, management and economics.',
    },
    temas: {
      es: [
        'Funciones de una variable',
        'Límites y continuidad',
        'Derivadas',
        'Aplicaciones de la derivada',
        'Modelación matemática',
      ],
      en: [
        'Single-variable functions',
        'Limits and continuity',
        'Derivatives',
        'Applications of derivatives',
        'Mathematical modeling',
      ],
    },
  },
  comunicacion_literatura_i: {
    name: { es: 'Comunicación y Literatura I', en: 'Communication and Literature I' },
    desc: {
      es: 'Nociones de comunicación y lenguaje para expresarse con claridad: normas de acentuación y puntuación, análisis gramatical y lectura crítica de textos no literarios, cuentos y una novela.',
      en: 'Notions of communication and language to express oneself clearly: accentuation and punctuation rules, grammatical analysis and critical reading of non-literary texts, short stories and a novel.',
    },
    temas: {
      es: [
        'Proceso de comunicación',
        'Ortografía y puntuación',
        'Análisis gramatical',
        'Lectura crítica',
        'Cuento y novela',
      ],
      en: [
        'Communication process',
        'Spelling and punctuation',
        'Grammatical analysis',
        'Critical reading',
        'Short story and novel',
      ],
    },
  },
  contabilidad_general: {
    name: { es: 'Contabilidad General', en: 'Financial Accounting' },
    desc: {
      es: 'La contabilidad como herramienta de gestión: ciclo contable desde el registro de transacciones hasta la elaboración de los estados financieros, cuentas de balance y de resultados, principios contables y contabilidad digital.',
      en: 'Accounting as a management tool: the accounting cycle from recording transactions to preparing financial statements, balance sheet and income accounts, accounting principles and digital accounting.',
    },
    temas: {
      es: [
        'Ciclo contable',
        'Registro de transacciones',
        'Estados financieros',
        'Principios contables',
        'Contabilidad digital',
      ],
      en: [
        'Accounting cycle',
        'Recording transactions',
        'Financial statements',
        'Accounting principles',
        'Digital accounting',
      ],
    },
  },
  estadistica_probabilidades: {
    name: { es: 'Estadística y Probabilidades', en: 'Statistics and Probability' },
    desc: {
      es: 'Técnicas estadísticas para ordenar, resumir y analizar datos: organización tabular y gráfica, medidas de tendencia central y de variación, cálculo de probabilidades y variables aleatorias discretas.',
      en: 'Statistical techniques to organize, summarize and analyze data: tabular and graphical organization, measures of central tendency and variation, probability and discrete random variables.',
    },
    temas: {
      es: [
        'Estadística descriptiva',
        'Tendencia central',
        'Medidas de variación',
        'Probabilidades',
        'Variables aleatorias discretas',
      ],
      en: [
        'Descriptive statistics',
        'Central tendency',
        'Measures of variation',
        'Probability',
        'Discrete random variables',
      ],
    },
  },
  fisica_i: {
    name: { es: 'Física I', en: 'Physics I' },
    desc: {
      es: 'Fundamentos de la física clásica: álgebra de vectores, cinemática en una y dos dimensiones, leyes de Newton, movimiento circular, trabajo y energía, fuerzas conservativas y sistemas de partículas.',
      en: 'Foundations of classical physics: vector algebra, one- and two-dimensional kinematics, Newton’s laws, circular motion, work and energy, conservative forces and particle systems.',
    },
    temas: {
      es: ['Vectores', 'Cinemática', 'Leyes de Newton', 'Trabajo y energía', 'Movimiento circular'],
      en: ['Vectors', 'Kinematics', 'Newton’s laws', 'Work and energy', 'Circular motion'],
    },
  },
  fundamentos_programacion: {
    name: { es: 'Fundamentos de Programación', en: 'Programming Fundamentals' },
    desc: {
      es: 'Conceptos y herramientas básicas de programación y de la organización de una computadora: tipos de datos, algoritmos y estructuras de control, programación modular, arreglos, cadenas, registros y archivos, y principios de búsqueda y ordenamiento.',
      en: 'Basic programming concepts and tools and how a computer is organized: data types, algorithms and control structures, modular programming, arrays, strings, records and files, and searching and sorting principles.',
    },
    temas: {
      es: [
        'Algoritmos',
        'Estructuras de control',
        'Programación modular',
        'Arreglos y cadenas',
        'Búsqueda y ordenamiento',
      ],
      en: [
        'Algorithms',
        'Control structures',
        'Modular programming',
        'Arrays and strings',
        'Searching and sorting',
      ],
    },
  },
  algoritmos_estructura_datos: {
    name: { es: 'Algoritmos y Estructura de Datos', en: 'Algorithms and Data Structures' },
    desc: {
      es: 'Algoritmos y estructuras de datos para resolver problemas de programación: tipos abstractos de datos, punteros y referencias, listas, pilas, colas, tablas hash, árboles y grafos, algoritmos de ordenación y estructuras espaciales como B-tree y R-tree.',
      en: 'Algorithms and data structures to solve programming problems: abstract data types, pointers and references, lists, stacks, queues, hash tables, trees and graphs, sorting algorithms and spatial structures such as B-trees and R-trees.',
    },
    temas: {
      es: [
        'Tipos abstractos de datos',
        'Listas, pilas y colas',
        'Tablas hash',
        'Árboles y grafos',
        'Algoritmos de ordenación',
      ],
      en: [
        'Abstract data types',
        'Lists, stacks and queues',
        'Hash tables',
        'Trees and graphs',
        'Sorting algorithms',
      ],
    },
  },
  base_datos: {
    name: { es: 'Base de Datos', en: 'Databases' },
    desc: {
      es: 'Diseño lógico y físico de bases de datos a partir de requerimientos: modelos conceptuales y entidad-relación, normalización, sistemas de gestión de bases de datos, SQL para consultas y manipulación de datos, y seguridad e integridad.',
      en: 'Logical and physical database design from requirements: conceptual and entity-relationship models, normalization, database management systems, SQL for querying and manipulating data, and security and integrity.',
    },
    temas: {
      es: [
        'Modelo entidad-relación',
        'Normalización',
        'SQL',
        'Sistemas gestores de BD',
        'Seguridad e integridad',
      ],
      en: ['Entity-relationship model', 'Normalization', 'SQL', 'DBMS', 'Security and integrity'],
    },
  },
  basic_english: {
    name: { es: 'Basic English', en: 'Basic English' },
    desc: {
      es: 'Inglés de nivel A2 (usuario básico) en modalidad síncrona y asíncrona: desarrollo de las cuatro destrezas lingüísticas en contextos de inglés general, profesional y académico.',
      en: 'A2 level English (basic user) in synchronous and asynchronous sessions: developing all four language skills in general, professional and academic English contexts.',
    },
    temas: {
      es: [
        'Nivel A2',
        'Expresión oral y escrita',
        'Comprensión auditiva y lectora',
        'Vocabulario y gramática',
      ],
      en: ['A2 level', 'Speaking and writing', 'Listening and reading', 'Vocabulary and grammar'],
    },
  },
  calculo_ii: {
    name: { es: 'Cálculo II', en: 'Calculus II' },
    desc: {
      es: 'Profundiza el cálculo con modelación de situaciones reales: matrices y determinantes, funciones de varias variables, derivadas parciales, optimización y cálculo integral en una y dos variables, con aplicaciones a ingeniería, administración y economía.',
      en: 'Deepens calculus with real-world modeling: matrices and determinants, multivariable functions, partial derivatives, optimization and integral calculus in one and two variables, applied to engineering, management and economics.',
    },
    temas: {
      es: [
        'Funciones de varias variables',
        'Derivadas parciales',
        'Optimización',
        'Integrales',
        'Integrales dobles',
      ],
      en: [
        'Multivariable functions',
        'Partial derivatives',
        'Optimization',
        'Integrals',
        'Double integrals',
      ],
    },
  },
  comunicacion_literatura_ii: {
    name: { es: 'Comunicación y Literatura II', en: 'Communication and Literature II' },
    desc: {
      es: 'Fundamentos de la redacción académica y lectura crítica de textos informativos, argumentativos y poéticos, junto con un panorama de la poesía peruana del siglo XX.',
      en: 'Foundations of academic writing and critical reading of informative, argumentative and poetic texts, along with an overview of 20th-century Peruvian poetry.',
    },
    temas: {
      es: [
        'Redacción académica',
        'Textos argumentativos',
        'Lectura crítica',
        'Poesía peruana del siglo XX',
      ],
      en: [
        'Academic writing',
        'Argumentative texts',
        'Critical reading',
        '20th-century Peruvian poetry',
      ],
    },
  },
  fundamentos_logica: {
    name: { es: 'Fundamentos de Lógica', en: 'Logic Fundamentals' },
    desc: {
      es: 'Bases lógicas para la informática: lenguajes formales, lógica proposicional y de predicados, teoría de conjuntos y relaciones, álgebra booleana y mapas de Karnaugh, sistemas de numeración binaria y hexadecimal, e introducción a Arduino para implementar circuitos.',
      en: 'Logical foundations for computing: formal languages, propositional and predicate logic, set theory and relations, Boolean algebra and Karnaugh maps, binary and hexadecimal number systems, and an intro to Arduino to build circuits.',
    },
    temas: {
      es: [
        'Lógica proposicional y de predicados',
        'Teoría de conjuntos',
        'Álgebra booleana',
        'Mapas de Karnaugh',
        'Arduino',
      ],
      en: [
        'Propositional and predicate logic',
        'Set theory',
        'Boolean algebra',
        'Karnaugh maps',
        'Arduino',
      ],
    },
  },
  intro_ciencia_datos: {
    name: { es: 'Introducción a la Ciencia de Datos', en: 'Introduction to Data Science' },
    desc: {
      es: 'Introducción al impacto de la ciencia de datos: recolección de datos estructurados y no estructurados, análisis exploratorio y visual, diseños de muestreo (estratificado, por conglomerados, complejo), estimaciones y pruebas de hipótesis.',
      en: 'Introduction to the impact of data science: collecting structured and unstructured data, exploratory and visual analysis, sampling designs (stratified, cluster, complex), estimation and hypothesis testing.',
    },
    temas: {
      es: [
        'Ciclo de la ciencia de datos',
        'Análisis exploratorio',
        'Muestreo probabilístico',
        'Estimación',
        'Pruebas de hipótesis',
      ],
      en: [
        'Data science cycle',
        'Exploratory analysis',
        'Probability sampling',
        'Estimation',
        'Hypothesis testing',
      ],
    },
  },
  algebra_lineal_i: {
    name: { es: 'Álgebra Lineal I', en: 'Linear Algebra I' },
    desc: {
      es: 'Conceptos y principios del Álgebra Lineal y sus aplicaciones en ingeniería: sistemas de ecuaciones lineales, matrices, determinantes, espacios vectoriales, transformaciones lineales, valores y vectores propios, y formas cuadráticas.',
      en: 'Linear Algebra concepts and their engineering applications: systems of linear equations, matrices, determinants, vector spaces, linear transformations, eigenvalues and eigenvectors, and quadratic forms.',
    },
    temas: {
      es: [
        'Sistemas de ecuaciones lineales',
        'Matrices y determinantes',
        'Espacios vectoriales',
        'Transformaciones lineales',
        'Valores y vectores propios',
      ],
      en: [
        'Systems of linear equations',
        'Matrices and determinants',
        'Vector spaces',
        'Linear transformations',
        'Eigenvalues and eigenvectors',
      ],
    },
  },
  arquitectura_computador_i: {
    name: { es: 'Arquitectura del Computador I', en: 'Computer Architecture I' },
    desc: {
      es: 'Organización de las computadoras desde el punto de vista lógico: microprocesadores, ALU y unidad de control, lenguaje ensamblador y HDL, arquitecturas RISC-V y ARM, jerarquía de memoria y periféricos, diseñando un microprocesador para una aplicación real.',
      en: 'Computer organization from a logical point of view: microprocessors, ALU and control unit, assembly and HDL, RISC-V and ARM architectures, memory hierarchy and peripherals, designing a microprocessor for a real application.',
    },
    temas: {
      es: [
        'Lógica booleana y secuencial',
        'CPU: ALU y unidad de control',
        'Lenguaje ensamblador',
        'RISC-V y ARM',
        'Jerarquía de memoria',
      ],
      en: [
        'Boolean and sequential logic',
        'CPU: ALU and control unit',
        'Assembly language',
        'RISC-V and ARM',
        'Memory hierarchy',
      ],
    },
  },
  costos_presupuestos: {
    name: { es: 'Costos y Presupuestos', en: 'Costs and Budgets' },
    desc: {
      es: 'Herramientas para determinar costos en la organización y el proceso presupuestario: clasificación y componentes del costo, estado de costos de producción, costeo absorbente y variable, relación costo-volumen-utilidad y presupuestos.',
      en: 'Tools to determine costs within an organization and the budgeting process: cost classification and components, cost of goods manufactured, absorption and variable costing, cost-volume-profit analysis and budgets.',
    },
    temas: {
      es: [
        'Clasificación de costos',
        'Estado de costos de producción',
        'Costeo absorbente y variable',
        'Costo-volumen-utilidad',
        'Presupuestos',
      ],
      en: [
        'Cost classification',
        'Cost of goods manufactured',
        'Absorption and variable costing',
        'Cost-volume-profit',
        'Budgets',
      ],
    },
  },
  estadistica_inferencial: {
    name: { es: 'Estadística Inferencial', en: 'Inferential Statistics' },
    desc: {
      es: 'Técnicas de estadística inferencial para tomar decisiones con datos: variables aleatorias continuas, intervalos de confianza, pruebas de hipótesis, ANOVA, pruebas chi-cuadrado, métodos no paramétricos y regresión simple y múltiple.',
      en: 'Inferential statistics techniques for data-driven decisions: continuous random variables, confidence intervals, hypothesis testing, ANOVA, chi-square tests, non-parametric methods and simple and multiple regression.',
    },
    temas: {
      es: [
        'Intervalos de confianza',
        'Pruebas de hipótesis',
        'ANOVA',
        'Chi-cuadrado',
        'Regresión simple y múltiple',
      ],
      en: [
        'Confidence intervals',
        'Hypothesis testing',
        'ANOVA',
        'Chi-square',
        'Simple and multiple regression',
      ],
    },
  },
  intermediate_english_i: {
    name: { es: 'Intermediate English I', en: 'Intermediate English I' },
    desc: {
      es: 'Inglés de nivel B1 (usuario independiente) en modalidad síncrona y asíncrona: desarrollo de las cuatro destrezas para producir textos orales y escritos en contextos generales, profesionales y académicos.',
      en: 'B1 level English (independent user) in synchronous and asynchronous sessions: developing all four skills to produce spoken and written texts in general, professional and academic contexts.',
    },
    temas: {
      es: [
        'Nivel B1',
        'Expresión oral y escrita',
        'Comprensión auditiva y lectora',
        'Vocabulario y gramática',
      ],
      en: ['B1 level', 'Speaking and writing', 'Listening and reading', 'Vocabulary and grammar'],
    },
  },
  marketing_ingenieria: {
    name: { es: 'Marketing para Ingeniería', en: 'Marketing for Engineering' },
    desc: {
      es: 'Conceptos, técnicas y estrategias de marketing y su relación con la ingeniería: investigación de mercados, comportamiento del consumidor, segmentación y posicionamiento, marketing mix con CRM en SAP ERP, y marketing digital, analítica web y SEO.',
      en: 'Marketing concepts, techniques and strategies and their link to engineering: market research, consumer behavior, segmentation and positioning, marketing mix with CRM on SAP ERP, and digital marketing, web analytics and SEO.',
    },
    temas: {
      es: [
        'Investigación de mercados',
        'Comportamiento del consumidor',
        'Segmentación y posicionamiento',
        'CRM con SAP ERP',
        'Marketing digital y SEO',
      ],
      en: [
        'Market research',
        'Consumer behavior',
        'Segmentation and positioning',
        'CRM with SAP ERP',
        'Digital marketing and SEO',
      ],
    },
  },
  programacion_oo: {
    name: { es: 'Programación Orientada a Objetos', en: 'Object-Oriented Programming' },
    desc: {
      es: 'Principios de la programación orientada a objetos y conexión a bases de datos para desarrollar aplicaciones transaccionales: clases, métodos, constructores y sobrecarga, construcción de software por capas e introducción a la programación web.',
      en: 'Object-oriented programming principles and database connectivity to build transactional applications: classes, methods, constructors and overloading, layered software design and an introduction to web programming.',
    },
    temas: {
      es: [
        'Clases y objetos',
        'Constructores y sobrecarga',
        'Conexión a bases de datos',
        'Arquitectura por capas',
        'Introducción a la web',
      ],
      en: [
        'Classes and objects',
        'Constructors and overloading',
        'Database connectivity',
        'Layered architecture',
        'Intro to web',
      ],
    },
  },
  analisis_multivariado_i: {
    name: { es: 'Análisis Multivariado I', en: 'Multivariate Analysis I' },
    desc: {
      es: 'Herramientas estadísticas multivariantes para analizar datos empresariales con muchas variables usando R: exploración de datos, componentes principales, análisis factorial, clustering, análisis discriminante y regresión lineal múltiple.',
      en: 'Multivariate statistical tools to analyze business data with many variables in R: data exploration, principal components, factor analysis, clustering, discriminant analysis and multiple linear regression.',
    },
    temas: {
      es: [
        'Componentes principales (PCA)',
        'Análisis factorial',
        'Análisis clúster',
        'Análisis discriminante',
        'Regresión múltiple en R',
      ],
      en: [
        'Principal components (PCA)',
        'Factor analysis',
        'Cluster analysis',
        'Discriminant analysis',
        'Multiple regression in R',
      ],
    },
  },
  analisis_diseno_algoritmos: {
    name: { es: 'Análisis y Diseño de Algoritmos', en: 'Algorithm Analysis and Design' },
    desc: {
      es: 'Análisis y diseño eficiente de algoritmos: recursividad, búsqueda y ordenamiento, grafos y árboles equilibrados, notación asintótica, clases de complejidad P y NP, y estrategias algorítmicas basadas en procesos matemáticos.',
      en: 'Efficient algorithm analysis and design: recursion, searching and sorting, graphs and balanced trees, asymptotic notation, P and NP complexity classes, and math-based algorithmic strategies.',
    },
    temas: {
      es: [
        'Notación asintótica',
        'Recursividad',
        'Búsqueda y ordenamiento',
        'Grafos y árboles equilibrados',
        'Complejidad P y NP',
      ],
      en: [
        'Asymptotic notation',
        'Recursion',
        'Searching and sorting',
        'Graphs and balanced trees',
        'P and NP complexity',
      ],
    },
  },
  desarrollo_web: {
    name: { es: 'Desarrollo de Aplicaciones Web', en: 'Web Application Development' },
    desc: {
      es: 'Arquitectura cliente/servidor web y desarrollo de aplicaciones dinámicas: HTML5, AJAX, aplicaciones de página única (SPA), APIs REST, patrones de desarrollo, control de versiones y buenas prácticas de UI/UX para proyectos empresariales.',
      en: 'Web client/server architecture and dynamic application development: HTML5, AJAX, single-page applications (SPA), REST APIs, development patterns, version control and UI/UX best practices for business projects.',
    },
    temas: {
      es: [
        'Arquitectura cliente/servidor',
        'HTML5, CSS y JavaScript',
        'Aplicaciones SPA',
        'APIs REST y HTTP',
        'Control de versiones',
      ],
      en: [
        'Client/server architecture',
        'HTML5, CSS and JavaScript',
        'SPA applications',
        'REST APIs and HTTP',
        'Version control',
      ],
    },
  },
  ingenieria_software_i: {
    name: { es: 'Ingeniería de Software I', en: 'Software Engineering I' },
    desc: {
      es: 'Conceptos, principios y métodos de la Ingeniería de Software para construir productos de calidad de forma sistemática: ciclo de vida, análisis y especificación de requerimientos, diseño y comparación de metodologías ágiles, tradicionales e híbridas, con énfasis en Scrum.',
      en: 'Software Engineering concepts, principles and methods to build quality products systematically: life cycle, requirements analysis and specification, design, and comparing agile, traditional and hybrid methods, with a focus on Scrum.',
    },
    temas: {
      es: [
        'Ciclo de vida del software',
        'Requerimientos',
        'Técnicas de diseño',
        'Metodologías ágiles y tradicionales',
        'Scrum',
      ],
      en: [
        'Software life cycle',
        'Requirements',
        'Design techniques',
        'Agile and traditional methods',
        'Scrum',
      ],
    },
  },
  intermediate_english_ii: {
    name: { es: 'Intermediate English II', en: 'Intermediate English II' },
    desc: {
      es: 'Inglés de nivel B2 (usuario independiente): estructuras gramaticales intermedias y vocabulario para comunicarse en contextos profesionales, sociales y académicos, con habilidades del siglo XXI.',
      en: 'B2 level English (independent user): intermediate grammar structures and vocabulary to communicate in professional, social and academic contexts, with 21st-century skills.',
    },
    temas: {
      es: ['Nivel B2', 'Gramática intermedia', 'Argumentación', 'Comprensión y expresión'],
      en: ['B2 level', 'Intermediate grammar', 'Argumentation', 'Comprehension and expression'],
    },
  },
  investigacion_operativa_i: {
    name: { es: 'Investigación Operativa I', en: 'Operations Research I' },
    desc: {
      es: 'Instrumentos matemáticos para la toma de decisiones y la optimización de recursos: programación lineal y entera, método simplex, dualidad, análisis de sensibilidad y modelos de transporte, transbordo y asignación resueltos con software.',
      en: 'Mathematical tools for decision-making and resource optimization: linear and integer programming, the simplex method, duality, sensitivity analysis and transport, transshipment and assignment models solved with software.',
    },
    temas: {
      es: [
        'Programación lineal',
        'Método simplex',
        'Programación entera',
        'Análisis de sensibilidad',
        'Transporte y asignación',
      ],
      en: [
        'Linear programming',
        'Simplex method',
        'Integer programming',
        'Sensitivity analysis',
        'Transport and assignment',
      ],
    },
  },
  matematica_discreta: {
    name: { es: 'Matemática Discreta', en: 'Discrete Mathematics' },
    desc: {
      es: 'Matemática esencial para la informática: métodos de demostración, recurrencias, relaciones y funciones, teoría de grafos y árboles, modelos de redes, teoría de la codificación, álgebra booleana y máquinas de estado finito.',
      en: 'Core mathematics for computing: proof methods, recurrences, relations and functions, graph and tree theory, network models, coding theory, Boolean algebra and finite-state machines.',
    },
    temas: {
      es: [
        'Métodos de demostración',
        'Recurrencias',
        'Teoría de grafos y árboles',
        'Álgebra booleana',
        'Máquinas de estado finito',
      ],
      en: [
        'Proof methods',
        'Recurrences',
        'Graph and tree theory',
        'Boolean algebra',
        'Finite-state machines',
      ],
    },
  },
  sistemas_operativos_i: {
    name: { es: 'Sistemas Operativos I', en: 'Operating Systems I' },
    desc: {
      es: 'Fundamentos de operación, diseño y administración de sistemas operativos: arquitecturas, gestión de entrada/salida, interrupciones, memoria y sistemas de archivos, además de virtualización, contenedores, cloud computing y software libre.',
      en: 'Fundamentals of operating-system operation, design and administration: architectures, I/O management, interrupts, memory and file systems, plus virtualization, containers, cloud computing and open-source software.',
    },
    temas: {
      es: [
        'Arquitecturas de SO',
        'Gestión de memoria',
        'Sistemas de archivos',
        'Virtualización',
        'Contenedores',
      ],
      en: ['OS architectures', 'Memory management', 'File systems', 'Virtualization', 'Containers'],
    },
  },
  intermediate_english_iii: {
    name: { es: 'Intermediate English III', en: 'Intermediate English III' },
    desc: {
      es: 'Inglés de nivel B2+ (usuario competente): estructuras gramaticales avanzadas y vocabulario para comunicarse en contextos profesionales, sociales y académicos, desarrollando las cuatro destrezas.',
      en: 'B2+ level English (competent user): advanced grammar structures and vocabulary to communicate in professional, social and academic contexts, developing all four skills.',
    },
    temas: {
      es: [
        'Nivel B2+',
        'Gramática avanzada',
        'Comprensión lectora y auditiva',
        'Expresión oral y escrita',
      ],
      en: ['B2+ level', 'Advanced grammar', 'Reading and listening', 'Speaking and writing'],
    },
  },
  analisis_multivariado_ii: {
    name: { es: 'Análisis Multivariado II', en: 'Multivariate Analysis II' },
    desc: {
      es: 'Métodos multivariantes avanzados para datos complejos.',
      en: 'Advanced multivariate methods for complex datasets.',
    },
  },
  computacion_paralela: {
    name: { es: 'Computación Paralela', en: 'Parallel Computing' },
    desc: {
      es: 'Desarrollo de aplicaciones concurrentes, paralelas y distribuidas: exclusión mutua, sincronización en memoria compartida y diseño de programas para sistemas multiprocesador y clusters, con un proyecto final aplicado.',
      en: 'Building concurrent, parallel and distributed applications: mutual exclusion, shared-memory synchronization and program design for multiprocessor systems and clusters, with a final applied project.',
    },
    temas: {
      es: [
        'Concurrencia',
        'Exclusión mutua',
        'Sincronización',
        'Programación paralela',
        'Balanceo de carga en clusters',
      ],
      en: [
        'Concurrency',
        'Mutual exclusion',
        'Synchronization',
        'Parallel programming',
        'Cluster load balancing',
      ],
    },
  },
  gestion_financiera: {
    name: { es: 'Gestión Financiera', en: 'Financial Management' },
    desc: {
      es: 'Competencias de gestión financiera para evaluar negocios nuevos: matemática financiera, valor del dinero en el tiempo, tasas de interés, VAN y TIR, análisis de estados financieros y elaboración de presupuestos operativos y financieros.',
      en: 'Financial management skills to evaluate new businesses: financial math, time value of money, interest rates, NPV and IRR, financial statement analysis and building operating and financial budgets.',
    },
    temas: {
      es: [
        'Valor del dinero en el tiempo',
        'Tasas de interés',
        'VAN y TIR',
        'Estados financieros',
        'Presupuesto de capital',
      ],
      en: [
        'Time value of money',
        'Interest rates',
        'NPV and IRR',
        'Financial statements',
        'Capital budgeting',
      ],
    },
  },
  ingenieria_procesos_negocio: {
    name: { es: 'Ingeniería de Procesos de Negocios', en: 'Business Process Engineering' },
    desc: {
      es: 'Conceptos, metodologías y herramientas para analizar, diseñar, automatizar y simular procesos en la empresa: levantamiento de información, requerimientos, gobierno de procesos e indicadores de calidad y desempeño, con software especializado.',
      en: 'Concepts, methods and tools to analyze, design, automate and simulate business processes: information gathering, requirements, process governance and quality and performance indicators, using specialized software.',
    },
    temas: {
      es: [
        'Modelado de procesos (BPM)',
        'Levantamiento de requerimientos',
        'Automatización y simulación',
        'Gobierno de procesos',
        'Indicadores de desempeño',
      ],
      en: [
        'Process modeling (BPM)',
        'Requirements gathering',
        'Automation and simulation',
        'Process governance',
        'Performance indicators',
      ],
    },
  },
  inteligencia_artificial: {
    name: { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
    desc: {
      es: 'Conceptos y técnicas de inteligencia artificial aplicados a problemas reales: aprendizaje de máquina básico, aprendizaje profundo con imágenes y texto, algoritmos de búsqueda heurística y aprendizaje por refuerzo.',
      en: 'Artificial intelligence concepts and techniques applied to real problems: basic machine learning, deep learning with images and text, heuristic search algorithms and reinforcement learning.',
    },
    temas: {
      es: [
        'Aprendizaje supervisado',
        'Deep learning con imágenes y texto',
        'Búsqueda heurística',
        'Aprendizaje por refuerzo',
      ],
      en: [
        'Supervised learning',
        'Deep learning with images and text',
        'Heuristic search',
        'Reinforcement learning',
      ],
    },
  },
  metodologia_investigacion: {
    name: { es: 'Metodología de la Investigación', en: 'Research Methodology' },
    desc: {
      es: 'Proceso de investigación científica de principio a fin: planteamiento del problema, marco teórico, alcance, hipótesis, diseño, muestra, recolección y análisis de datos, y elaboración de un reporte de investigación en equipo.',
      en: 'The scientific research process end to end: problem statement, theoretical framework, scope, hypotheses, design, sampling, data collection and analysis, and writing a team research report.',
    },
    temas: {
      es: [
        'Planteamiento del problema',
        'Marco teórico',
        'Hipótesis y diseño',
        'Muestreo y recolección de datos',
        'Reporte de investigación',
      ],
      en: [
        'Problem statement',
        'Theoretical framework',
        'Hypotheses and design',
        'Sampling and data collection',
        'Research report',
      ],
    },
  },
  planeacion_estrategica: {
    name: { es: 'Planeación Estratégica', en: 'Strategic Planning' },
    desc: {
      es: 'Herramientas analíticas para el diseño estratégico y la creación de valor: misión y visión, análisis del entorno e interno, ventajas competitivas, formulación, implementación y evaluación de la estrategia, matrices estratégicas y Balanced Scorecard.',
      en: 'Analytical tools for strategic design and value creation: mission and vision, external and internal analysis, competitive advantage, strategy formulation, implementation and evaluation, strategic matrices and the Balanced Scorecard.',
    },
    temas: {
      es: [
        'Misión y visión',
        'Análisis externo e interno',
        'Ventaja competitiva',
        'Matrices estratégicas',
        'Balanced Scorecard',
      ],
      en: [
        'Mission and vision',
        'External and internal analysis',
        'Competitive advantage',
        'Strategic matrices',
        'Balanced Scorecard',
      ],
    },
  },
  redes_comunicaciones: {
    name: { es: 'Redes de Comunicaciones', en: 'Computer Networks' },
    desc: {
      es: 'Conocimientos, protocolos y estándares de redes de comunicaciones: transmisión de datos, redes LAN y WAN según los modelos OSI y TCP/IP, y diseño y administración de redes, con prácticas intensivas de laboratorio y simulación.',
      en: 'Knowledge, protocols and standards of communication networks: data transmission, LAN and WAN networks under the OSI and TCP/IP models, and network design and administration, with intensive lab and simulation practice.',
    },
    temas: {
      es: [
        'Modelos OSI y TCP/IP',
        'Redes LAN y WAN',
        'Protocolos de comunicación',
        'Diseño de redes',
        'Simulación de topologías',
      ],
      en: [
        'OSI and TCP/IP models',
        'LAN and WAN networks',
        'Communication protocols',
        'Network design',
        'Topology simulation',
      ],
    },
  },
  big_data_analytics: {
    name: { es: 'Big Data Analytics', en: 'Big Data Analytics' },
    desc: {
      es: 'Construcción de modelos de minería de datos y machine learning sobre grandes volúmenes de datos aplicados a finanzas y marketing: riesgo crediticio (PD, LGD, EAD), segmentación y campañas, siempre con validación de modelos.',
      en: 'Building data mining and machine learning models on large data volumes for finance and marketing: credit risk (PD, LGD, EAD), segmentation and campaigns, always with model validation.',
    },
    temas: {
      es: [
        'Tecnologías Big Data',
        'Riesgo crediticio: PD, LGD, EAD',
        'Árboles de decisión y redes neuronales',
        'Segmentación para marketing',
        'Validación de modelos',
      ],
      en: [
        'Big Data technologies',
        'Credit risk: PD, LGD, EAD',
        'Decision trees and neural networks',
        'Marketing segmentation',
        'Model validation',
      ],
    },
  },
  computacion_nube: {
    name: { es: 'Computación en la Nube', en: 'Cloud Computing' },
    desc: {
      es: 'Diseño e implementación de sistemas distribuidos en la nube: contenedores, autoescalamiento, almacenamiento distribuido, bases de datos SQL y NoSQL, balanceadores, redes y seguridad en AWS, Azure y GCP, con un proyecto cloud final.',
      en: 'Designing and deploying distributed systems in the cloud: containers, autoscaling, distributed storage, SQL and NoSQL databases, load balancers, networking and security on AWS, Azure and GCP, with a final cloud project.',
    },
    temas: {
      es: [
        'AWS, Azure y GCP',
        'Contenedores',
        'Autoescalamiento',
        'Bases de datos en la nube',
        'Arquitectura y costos cloud',
      ],
      en: [
        'AWS, Azure and GCP',
        'Containers',
        'Autoscaling',
        'Cloud databases',
        'Cloud architecture and costs',
      ],
    },
  },
  computacion_grafica: {
    name: { es: 'Computación Gráfica', en: 'Computer Graphics' },
    desc: {
      es: 'Sistemas gráficos y visión artificial: adquisición, transformación y análisis de imágenes por computadora, gráficos vectoriales y raster, transformaciones 2D y tratamiento de imágenes 3D, aplicando machine learning a problemas reales.',
      en: 'Graphics systems and computer vision: image acquisition, transformation and analysis, vector and raster graphics, 2D transformations and 3D image processing, applying machine learning to real problems.',
    },
    temas: {
      es: [
        'Visión artificial',
        'Procesamiento de imágenes',
        'Gráficos vectoriales y raster',
        'Transformaciones 2D',
        'Imágenes 3D',
      ],
      en: [
        'Computer vision',
        'Image processing',
        'Vector and raster graphics',
        '2D transformations',
        '3D images',
      ],
    },
  },
  desarrollo_moviles: {
    name: { es: 'Desarrollo de Aplicaciones Móviles', en: 'Mobile App Development' },
    desc: {
      es: 'Sistemas operativos móviles y estructura de la programación en dispositivos, con foco en frameworks para Android e iOS. El entregable es una aplicación documentada lista para publicarse en una tienda; incluye el proyecto de la alianza TCS–ESAN.',
      en: 'Mobile operating systems and how apps are structured, focusing on Android and iOS frameworks. The deliverable is a documented app ready for a store; it includes the TCS–ESAN partnership project.',
    },
    temas: {
      es: [
        'Sistemas operativos móviles',
        'Arquitectura Android',
        'Almacenamiento de datos',
        'Modelo de negocio de apps',
        'Publicación en tiendas',
      ],
      en: [
        'Mobile operating systems',
        'Android architecture',
        'Data storage',
        'App business models',
        'Store publishing',
      ],
    },
  },
  machine_learning: {
    name: { es: 'Machine Learning', en: 'Machine Learning' },
    desc: {
      es: 'Técnicas de Machine Learning para resolver problemas reales: aprendizaje supervisado y no supervisado, redes neuronales, algoritmos genéticos y deep learning, con un proyecto aplicado a negocios presentado en formato IEEE.',
      en: 'Machine Learning techniques to solve real problems: supervised and unsupervised learning, neural networks, genetic algorithms and deep learning, with a business-applied project presented in IEEE format.',
    },
    temas: {
      es: [
        'Aprendizaje supervisado',
        'Aprendizaje no supervisado',
        'Redes neuronales y deep learning',
        'Algoritmos genéticos',
        'Proyecto con informe IEEE',
      ],
      en: [
        'Supervised learning',
        'Unsupervised learning',
        'Neural networks and deep learning',
        'Genetic algorithms',
        'Project with IEEE report',
      ],
    },
  },
  mineria_datos: {
    name: { es: 'Minería de Datos', en: 'Data Mining' },
    desc: {
      es: 'Métodos de estadística e inteligencia artificial para reconocer patrones: descripción, exploración, preprocesamiento, validación y balanceo de datos, y modelos como KNN, Naive Bayes y SVM en Python, aplicados a la cadena de valor de una organización.',
      en: 'Statistical and AI methods to recognize patterns: data description, exploration, preprocessing, validation and balancing, and models such as KNN, Naive Bayes and SVM in Python, applied to an organization’s value chain.',
    },
    temas: {
      es: [
        'Preprocesamiento de datos',
        'Balanceo de clases',
        'KNN y Naive Bayes',
        'Máquinas de soporte vectorial',
        'Python',
      ],
      en: [
        'Data preprocessing',
        'Class balancing',
        'KNN and Naive Bayes',
        'Support vector machines',
        'Python',
      ],
    },
  },
  prueba_software: {
    name: { es: 'Prueba de Software', en: 'Software Testing' },
    desc: {
      es: 'Principios de las pruebas de software para asegurar estabilidad y confiabilidad: niveles, tipos y técnicas de prueba, diseño de casos con TDD y BDD, y automatización de pruebas en aplicaciones web, APIs y móviles, con enfoques Agile y DevOps.',
      en: 'Software testing principles to ensure stability and reliability: test levels, types and techniques, test-case design with TDD and BDD, and test automation for web, API and mobile apps, with Agile and DevOps approaches.',
    },
    temas: {
      es: [
        'Niveles y tipos de prueba',
        'TDD y BDD',
        'Pruebas unitarias y de rendimiento',
        'Automatización web, API y móvil',
        'Agile y DevOps',
      ],
      en: [
        'Test levels and types',
        'TDD and BDD',
        'Unit and performance testing',
        'Web, API and mobile automation',
        'Agile and DevOps',
      ],
    },
  },
  analitica_web: {
    name: { es: 'Analítica de la Web', en: 'Web Analytics' },
    desc: {
      es: 'Minería de datos aplicada a la Web y redes sociales: búsqueda, indexación y tratamiento de datos no estructurados, con técnicas de clasificación, clustering y redes neuronales para desarrollar estrategias e implementaciones de analítica web.',
      en: 'Data mining applied to the Web and social media: search, indexing and handling of unstructured data, using classification, clustering and neural networks to build web analytics strategies and implementations.',
    },
    temas: {
      es: [
        'Datos no estructurados',
        'Búsqueda e indexación',
        'Clasificación y clustering',
        'Analítica de redes sociales',
        'Redes neuronales',
      ],
      en: [
        'Unstructured data',
        'Search and indexing',
        'Classification and clustering',
        'Social media analytics',
        'Neural networks',
      ],
    },
  },
  capstone_project_i: {
    name: { es: 'Capstone Project I', en: 'Capstone Project I' },
    desc: {
      es: 'Taller grupal y multidisciplinario que aborda una problemática real de negocio con una solución basada en inteligencia artificial: captura de requerimientos, análisis y diseño del sistema, y entrega del Project Charter. En mi caso, el proyecto CAD-INEN de análisis de mamografías.',
      en: 'Multidisciplinary team workshop tackling a real business problem with an AI-based solution: requirements gathering, system analysis and design, and delivery of the Project Charter. In my case, the CAD-INEN mammography analysis project.',
    },
    temas: {
      es: [
        'Problemática real de negocio',
        'Requerimientos funcionales y no funcionales',
        'Modelado y arquitectura',
        'Project Charter',
        'Análisis de impactos',
      ],
      en: [
        'Real business problem',
        'Functional and non-functional requirements',
        'Modeling and architecture',
        'Project Charter',
        'Impact analysis',
      ],
    },
  },
  entrepreneurship: {
    name: { es: 'Entrepreneurship', en: 'Entrepreneurship' },
    desc: {
      es: 'Experiencia guiada del proceso de creación de una startup: conceptos, teorías y herramientas de emprendimiento aplicados en equipo para desarrollar el modelo de negocio de una idea y presentar un pitch final de financiamiento.',
      en: 'Guided experience of the startup creation process: entrepreneurship concepts, theories and tools applied in teams to build a business model for an idea and deliver a final funding pitch.',
    },
    temas: {
      es: [
        'Proceso de startup',
        'Modelo de negocio',
        'Oportunidad emprendedora',
        'Trabajo en equipo',
        'Pitch de financiamiento',
      ],
      en: [
        'Startup process',
        'Business model',
        'Entrepreneurial opportunity',
        'Teamwork',
        'Funding pitch',
      ],
    },
  },
  etica_responsabilidad_ambiental: {
    name: {
      es: 'Ética y Responsabilidad Ambiental',
      en: 'Ethics and Environmental Responsibility',
    },
    desc: {
      es: 'Integra principios éticos, compromiso social y preservación ambiental en la ingeniería de TI: análisis de dilemas éticos del desarrollo tecnológico (IA, algoritmos, privacidad de datos) y evaluación del impacto ambiental de las tecnologías de la información.',
      en: 'Brings together ethical principles, social commitment and environmental care in IT engineering: analysis of ethical dilemmas in technology (AI, algorithms, data privacy) and assessment of the environmental impact of IT.',
    },
    temas: {
      es: [
        'Ética profesional en TI',
        'Ética de la IA y los algoritmos',
        'Privacidad de datos',
        'Impacto ambiental de las TI',
        'Sostenibilidad',
      ],
      en: [
        'Professional ethics in IT',
        'AI and algorithm ethics',
        'Data privacy',
        'Environmental impact of IT',
        'Sustainability',
      ],
    },
  },
  inteligencia_negocios: {
    name: { es: 'Inteligencia de Negocios', en: 'Business Intelligence' },
    desc: {
      es: 'Criterios, herramientas y técnicas para analizar la información empresarial y apoyar decisiones operativas, tácticas y estratégicas: reporting, cuadros de mando, Data Warehouse, data mining y la implementación de un proyecto de inteligencia de negocios.',
      en: 'Criteria, tools and techniques to analyze business information and support operational, tactical and strategic decisions: reporting, scorecards, Data Warehouse, data mining and implementing a business intelligence project.',
    },
    temas: {
      es: [
        'Ciclo de vida de BI',
        'Data Warehouse',
        'Balanced Scorecard',
        'BI descriptiva y predictiva',
        'Proyecto de BI',
      ],
      en: [
        'BI life cycle',
        'Data Warehouse',
        'Balanced Scorecard',
        'Descriptive and predictive BI',
        'BI project',
      ],
    },
  },
  mineria_datos_avanzada: {
    name: { es: 'Minería de Datos Avanzado', en: 'Advanced Data Mining' },
    desc: {
      es: 'Modelos avanzados de minería de datos con Python en seis bloques: fundamentos, series de tiempo, machine learning avanzado, machine learning con computación en paralelo en H2O, deep learning y sistemas de recomendación.',
      en: 'Advanced data mining models in Python across six blocks: fundamentals, time series, advanced machine learning, parallel machine learning on H2O, deep learning and recommender systems.',
    },
    temas: {
      es: [
        'Series de tiempo',
        'Machine learning avanzado',
        'H2O',
        'Deep learning',
        'Sistemas de recomendación',
      ],
      en: [
        'Time series',
        'Advanced machine learning',
        'H2O',
        'Deep learning',
        'Recommender systems',
      ],
    },
  },
  robotica: {
    name: { es: 'Robótica', en: 'Robotics' },
    desc: {
      es: 'Robótica moderna teórica y práctica: álgebra lineal y cinemática de brazos robóticos, ROS 2, visión computacional y robótica móvil, programando robots reales de laboratorio como el ROSMASTER.',
      en: 'Modern robotics in theory and practice: linear algebra and robot-arm kinematics, ROS 2, computer vision and mobile robotics, programming real lab robots such as the ROSMASTER.',
    },
    temas: {
      es: [
        'ROS 2 (nodos, topics, servicios)',
        'Cinemática directa e inversa',
        'Denavit-Hartenberg y MoveIt2',
        'Visión computacional',
        'Robótica móvil',
      ],
      en: [
        'ROS 2 (nodes, topics, services)',
        'Forward and inverse kinematics',
        'Denavit-Hartenberg and MoveIt2',
        'Computer vision',
        'Mobile robotics',
      ],
    },
  },
  chatbots_rag: {
    name: {
      es: 'Chatbots RAG para Servicio al Cliente y Calidad de Servicio (QoS)',
      en: 'RAG Chatbots for Customer Service and Quality of Service (QoS)',
    },
    desc: {
      es: 'Curso intensivo sobre el diseño, implementación y evaluación de chatbots con Retrieval-Augmented Generation para servicio al cliente. Relaciona la arquitectura RAG con métricas de calidad de servicio y SLAs, y culmina en una propuesta aplicada en equipo que considera riesgos éticos y factibilidad técnica.',
      en: 'Intensive course on designing, building and evaluating Retrieval-Augmented Generation chatbots for customer service. It links RAG architecture with service-quality metrics and SLAs, ending in a team proposal that weighs ethical risks and technical feasibility.',
    },
    temas: {
      es: [
        'Modelos de lenguaje',
        'Arquitectura RAG',
        'Métricas QoS: AHT, FCR, CSAT, NPS, CES',
        'SLAs para chatbots',
        'Prototipo con datos abiertos',
      ],
      en: [
        'Language models',
        'RAG architecture',
        'QoS metrics: AHT, FCR, CSAT, NPS, CES',
        'Chatbot SLAs',
        'Open-data prototype',
      ],
    },
  },
  iot: {
    name: { es: 'Desarrollo de Soluciones de IoT', en: 'IoT Solutions Development' },
    desc: {
      es: 'Fundamentos teórico-prácticos para desarrollar soluciones de Internet de las Cosas de punta a punta: desde la lógica digital y los sistemas embebidos hasta la arquitectura IoT, integrando ingeniería, innovación y gestión de proyectos.',
      en: 'Theory and practice to build end-to-end Internet of Things solutions: from digital logic and embedded systems to IoT architecture, combining engineering, innovation and project management.',
    },
    temas: {
      es: [
        'Lógica digital y minimización',
        'Sistemas embebidos',
        'Microcontroladores ESP',
        'Comunicación inalámbrica',
        'Sensores, actuadores y plataformas IoT',
      ],
      en: [
        'Digital logic and minimization',
        'Embedded systems',
        'ESP microcontrollers',
        'Wireless communication',
        'Sensors, actuators and IoT platforms',
      ],
    },
  },
  productos_digitales: {
    name: {
      es: 'Diseño y Desarrollo de Productos Digitales',
      en: 'Digital Product Design and Development',
    },
    desc: {
      es: 'Desarrollo de productos digitales para resolver retos empresariales: identificación de problemas y dolores del cliente, definición de un producto mínimo viable (MVP), diseño de experiencia de usuario y métricas, con una visión estratégica basada en datos.',
      en: 'Building digital products to solve business challenges: identifying customer problems and pain points, defining a minimum viable product (MVP), user-experience design and metrics, with a data-driven strategic view.',
    },
    temas: {
      es: [
        'Descubrimiento del problema',
        'Producto mínimo viable (MVP)',
        'Experiencia de usuario (UX)',
        'Prototipado',
        'Métricas de producto',
      ],
      en: [
        'Problem discovery',
        'Minimum viable product (MVP)',
        'User experience (UX)',
        'Prototyping',
        'Product metrics',
      ],
    },
  },
  vibe_coding: {
    name: { es: 'Fundamentals of Vibe Coding', en: 'Fundamentals of Vibe Coding' },
    desc: {
      es: 'Introduce la programación colaborativa entre humanos e IA siguiendo el Vibe Unified Process (VUP): uso de herramientas de IA en requisitos, arquitectura, código, pruebas y despliegue, con énfasis en el prompting efectivo y la evaluación crítica del código generado.',
      en: 'Introduces human-AI collaborative programming using the Vibe Unified Process (VUP): applying AI tools to requirements, architecture, coding, testing and deployment, with a focus on effective prompting and critical review of generated code.',
    },
    temas: {
      es: [
        'Vibe Unified Process (VUP)',
        'Prompting y supervisión de IA',
        'IA en requisitos y arquitectura',
        'Pruebas y despliegue asistidos',
        'Evaluación crítica del código',
      ],
      en: [
        'Vibe Unified Process (VUP)',
        'Prompting and AI supervision',
        'AI for requirements and architecture',
        'AI-assisted testing and deployment',
        'Critical code review',
      ],
    },
  },
  ml_banca: {
    name: { es: 'Machine Learning Aplicado a la Banca', en: 'Machine Learning Applied to Banking' },
    desc: {
      es: 'Aplicación de Machine Learning en el sector bancario: análisis de datos y modelos predictivos para originación de crédito, segmentación de clientes, prevención de fraude y estimación de ingresos, incluyendo su construcción, validación y monitoreo con Python.',
      en: 'Machine Learning in banking: data analysis and predictive models for credit origination, customer segmentation, fraud prevention and income estimation, including building, validating and monitoring them in Python.',
    },
    temas: {
      es: [
        'Riesgo de crédito',
        'Segmentación de clientes',
        'Prevención de fraude',
        'Preprocesamiento y balanceo',
        'Validación y monitoreo de modelos',
      ],
      en: [
        'Credit risk',
        'Customer segmentation',
        'Fraud prevention',
        'Preprocessing and balancing',
        'Model validation and monitoring',
      ],
    },
  },
  realidad_aumentada: {
    name: { es: 'Programación para Realidad Aumentada', en: 'Augmented Reality Programming' },
    desc: {
      es: 'Diseño e implementación de aplicaciones de realidad aumentada: fundamentos de visión artificial, transformaciones geométricas 2D y 3D, y desarrollo con el motor Unity y C#.',
      en: 'Design and implementation of augmented reality apps: computer vision fundamentals, 2D and 3D geometric transformations, and development with the Unity engine and C#.',
    },
    temas: {
      es: [
        'Visión artificial para RA',
        'Transformaciones 2D y 3D',
        'Unity',
        'C#',
        'Aplicaciones de RA',
      ],
      en: ['Computer vision for AR', '2D and 3D transformations', 'Unity', 'C#', 'AR applications'],
    },
  },
  tesis_i: {
    name: { es: 'Trabajo de Tesis I', en: 'Thesis I' },
    desc: {
      es: 'Taller de investigación aplicada a la ingeniería para elaborar el plan de tesis: tema, problemática, marco teórico, objetivos, hipótesis, justificación y una primera propuesta de metodología y resultados esperados, citando con normas APA.',
      en: 'Engineering research workshop to build the thesis plan: topic, problem, theoretical framework, objectives, hypotheses, justification and a first proposal of methodology and expected results, cited in APA style.',
    },
    temas: {
      es: [
        'Plan de tesis',
        'Marco teórico y estado del arte',
        'Objetivos e hipótesis',
        'Metodología',
        'Normas APA',
      ],
      en: [
        'Thesis plan',
        'Theoretical framework and state of the art',
        'Objectives and hypotheses',
        'Methodology',
        'APA style',
      ],
    },
  },
}
