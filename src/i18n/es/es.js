export default {
  hello: 'Hola Mundo',
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    skills: 'Habilidades',
    curriculum: 'Currículum',
    portfolio: 'Portafolio',
    contact: 'Contacto',
  },
  inicio: {
    career1: 'Ingeniero de Software',
    career2: 'Desarrollador Full Stack',
    career3: 'Apasionado por el UI/UX',
    career4: 'Futuro Científico/a de Datos e IA',
  },

  sobreMi: {
    title: 'Sobre mí',
    intro: {
      helloSpan: 'Hola, soy {name}',
      text: 'Soy un apasionado desarrollador de software.',
    },
    personal: {
      title: 'Datos personales',
      birthday: 'Cumpleaños:',
      phone: 'Teléfono:',
      email: 'Correo:',
      website: 'Sitio web:',
      address: 'Dirección:',
      role: 'Rol:',
      roleValue: 'Ingeniero de Software',
    },
    interests: {
      title: 'Intereses',
      games: 'Juegos',
      music: 'Música',
      travel: 'Viajes',
      mma: 'MMA',
      sport: 'Deporte',
      books: 'Libros',
      cars: 'Autos',
      anime: 'Anime',
    },
    galleryTitle: 'Galería de {label}',
    downloadCv: 'Descargar CV',
  },
  skills: {
    title: 'Habilidades',
    techTitle: 'Habilidades Técnicas',
    profTitle: 'Habilidades Profesionales',
    panel: {
      titleFallback: 'Detalle',
      closeAria: 'Cerrar',
      notFound1: 'No encontré un componente para',
      notFound2: 'Crea',
      pathPrefix: 'src/components/TechnicalSkills/',
      pathSuffix: '.vue',
    },
    prof: {
      items: {
        communication: 'Comunicación',
        creativity: 'Creatividad',
        team_leadership: 'Líder de equipo',
        teamwork: 'Trabajo en equipo',
        adaptability: 'Adaptabilidad',
      },
    },
  },

  curriculum: {
    title: 'Currículum',
    education: 'Educación',
    experience: 'Experiencia',
  },
  curriculumEdu: {
    courseLabel: 'Curso {n}',
    noDescription: 'Descripción no disponible.',
    cycle: 'Ciclo',
    prev: 'Anterior',
    next: 'Siguiente',
    close: 'Cerrar',
    courses: {
      // Ciclo 1
      lectura_redaccion: {
        name: 'Lectura y Redacción',
        desc: 'Aprende a escribir ensayos, artículos y textos argumentativos de forma clara y coherente.',
      },
      pre_calculo: {
        name: 'Pre Cálculo',
        desc: 'Fundamentos matemáticos esenciales para cursar cálculo diferencial e integral.',
      },
      administracion_general: {
        name: 'Administración General',
        desc: 'Introduce los principios básicos de la administración en organizaciones modernas.',
      },
      globalizacion_realidad_nacional: {
        name: 'Globalización y Realidad Nacional',
        desc: 'Analiza los efectos de la globalización en el contexto político, económico y social del país.',
      },
      estrategias_aprendizaje: {
        name: 'Estrategias de Aprendizaje',
        desc: 'Desarrolla técnicas efectivas para mejorar el rendimiento académico y personal.',
      },
      habilidades_actitudinales: {
        name: 'Habilidades Actitudinales',
        desc: 'Fortalece habilidades blandas como trabajo en equipo, liderazgo y comunicación asertiva.',
      },
      basic_english: {
        name: 'Basic English (*)',
        desc: 'Curso básico de inglés enfocado en comprensión oral y escrita en situaciones cotidianas.',
      },

      // Ciclo 2
      comunicacion_literatura_i: {
        name: 'Comunicación y literatura I',
        desc: 'Explora géneros literarios y técnicas de análisis crítico de textos.',
      },
      calculo_i: {
        name: 'Cálculo I',
        desc: 'Estudia límites, derivadas y aplicaciones básicas del cálculo diferencial.',
      },
      contabilidad_general: {
        name: 'Contabilidad General',
        desc: 'Aprende los principios fundamentales de la contabilidad financiera.',
      },
      estadistica_probabilidades: {
        name: 'Estadística y Probabilidades',
        desc: 'Introduce conceptos de estadística descriptiva y teoría de probabilidades.',
      },
      fisica_i: {
        name: 'Física I',
        desc: 'Estudia mecánica clásica y leyes fundamentales del movimiento.',
      },
      fundamentos_programacion: {
        name: 'Fundamentos de Programación',
        desc: 'Aprende lógica computacional y programación estructurada con un lenguaje de alto nivel.',
      },
      intermediate_english_i: {
        name: 'Intermediate English I',
        desc: 'Curso intermedio de inglés con énfasis en lectura, vocabulario y conversación.',
      },

      // Ciclo 3
      comunicacion_literatura_ii: {
        name: 'Comunicación y literatura II',
        desc: 'Analiza textos complejos y desarrolla habilidades avanzadas de escritura crítica.',
      },
      calculo_ii: {
        name: 'Cálculo II',
        desc: 'Introduce el cálculo integral, técnicas de integración y sus aplicaciones.',
      },
      base_datos: {
        name: 'Base de Datos',
        desc: 'Diseña e implementa bases de datos relacionales utilizando SQL.',
      },
      intro_ciencia_datos: {
        name: 'Introducción a la Ciencia de Datos',
        desc: 'Explora los fundamentos y aplicaciones de la ciencia de datos.',
      },
      fundamentos_logica: {
        name: 'Fundamentos de lógica',
        desc: 'Estudia lógica proposicional, lógica de predicados y razonamiento lógico.',
      },
      algoritmos_estructura_datos: {
        name: 'Algoritmos y estructura de datos',
        desc: 'Aprende a diseñar algoritmos eficientes y a utilizar estructuras de datos fundamentales.',
      },
      intermediate_english_ii: {
        name: 'Intermediate English II',
        desc: 'Refuerza habilidades intermedias del idioma inglés con enfoque comunicativo.',
      },

      // Ciclo 4
      marketing_ingenieria: {
        name: 'Marketing para Ingeniería',
        desc: 'Comprende el rol del marketing en el desarrollo de productos tecnológicos.',
      },
      costos_presupuestos: {
        name: 'Costos y Presupuestos',
        desc: 'Calcula y controla los costos en proyectos empresariales y tecnológicos.',
      },
      algebra_lineal_i: {
        name: 'Álgebra lineal I',
        desc: 'Introduce matrices, vectores, transformaciones lineales y sistemas de ecuaciones.',
      },
      estadistica_inferencial: {
        name: 'Estadística Inferencial',
        desc: 'Métodos para inferir conclusiones a partir de datos muestrales.',
      },
      arquitectura_computador_i: {
        name: 'Arquitectura del computador I',
        desc: 'Estructura interna y funcionamiento del hardware computacional.',
      },
      programacion_oo: {
        name: 'Programación Orientada a Objetos',
        desc: 'Diseña software modular aplicando principios de orientación a objetos.',
      },
      intermediate_english_iii: {
        name: 'Intermediate English III',
        desc: 'Cierre del nivel intermedio de inglés con énfasis en escritura y presentación.',
      },

      // Ciclo 5
      investigacion_operativa_i: {
        name: 'Investigación operativa I',
        desc: 'Modela y resuelve problemas de optimización con programación lineal.',
      },
      matematica_discreta: {
        name: 'Matemática Discreta',
        desc: 'Estudia grafos, conjuntos y estructuras discretas.',
      },
      ingenieria_software_i: {
        name: 'Ingeniería de software I',
        desc: 'Ciclo de vida del software y metodologías ágiles.',
      },
      analisis_multivariado_i: {
        name: 'Análisis Multivariado I',
        desc: 'Técnicas estadísticas para datos con múltiples variables.',
      },
      sistemas_operativos_i: {
        name: 'Sistemas operativos I',
        desc: 'Procesos, memoria, archivos y sistemas multitarea.',
      },
      analisis_diseno_algoritmos: {
        name: 'Análisis y Diseño de Algoritmos',
        desc: 'Desarrollo de algoritmos eficientes y análisis de complejidad.',
      },

      // Ciclo 6
      metodologia_investigacion: {
        name: 'Metodología de la Investigación',
        desc: 'Diseño de proyectos de investigación científica.',
      },
      gestion_financiera: {
        name: 'Gestión Financiera',
        desc: 'Decisiones financieras basadas en riesgo y rentabilidad.',
      },
      inteligencia_artificial: {
        name: 'Inteligencia Artificial',
        desc: 'Machine learning, lógica difusa y redes neuronales (introducción).',
      },
      analisis_multivariado_ii: {
        name: 'Análisis Multivariado II',
        desc: 'Métodos multivariantes avanzados para datos complejos.',
      },
      redes_comunicaciones: {
        name: 'Redes de Comunicaciones',
        desc: 'Protocolos, arquitecturas y funcionamiento de redes.',
      },
      ingenieria_procesos_negocio: {
        name: 'Ingeniería de Procesos de Negocios',
        desc: 'Modelado y optimización de procesos empresariales.',
      },

      // Ciclo 7
      planeacion_estrategica: {
        name: 'Planeación Estratégica',
        desc: 'Estrategias organizacionales alineadas con misión y visión.',
      },
      ia_avanzada: {
        name: 'Inteligencia Artificial Avanzada',
        desc: 'Deep learning y algoritmos avanzados.',
      },
      computacion_grafica: {
        name: 'Computación Gráfica',
        desc: 'Gráficos 2D/3D y sus fundamentos.',
      },
      mineria_datos: {
        name: 'Minería de Datos',
        desc: 'Descubrimiento de patrones en grandes volúmenes de datos.',
      },
      robotica: {
        name: 'Robótica',
        desc: 'Diseño, programación y control de robots.',
      },
      computacion_paralela: {
        name: 'Computación paralela',
        desc: 'Arquitecturas y algoritmos para procesamiento simultáneo.',
      },

      // Ciclo 8
      gestion_innovacion_etica: {
        name: 'Gestión y Desarrollo de la Innovación y Ética',
        desc: 'Innovación tecnológica bajo principios éticos y sostenibles.',
      },
      entrepreneurship: {
        name: 'Entrepreneurship',
        desc: 'Competencias para emprender proyectos tecnológicos.',
      },
      desarrollo_web: {
        name: 'Desarrollo de Aplicaciones web',
        desc: 'Aplicaciones web dinámicas con frameworks modernos.',
      },
      mineria_datos_avanzada: {
        name: 'Minería de Datos Avanzada',
        desc: 'Algoritmos avanzados aplicados a problemas específicos.',
      },
      diseno_evaluacion_proyectos: {
        name: 'Diseño y evaluación de proyectos',
        desc: 'Diseño y evaluación técnica y financiera de proyectos.',
      },
      big_data_analytics: {
        name: 'Big Data Analytics',
        desc: 'Análisis de grandes volúmenes de datos para insights estratégicos.',
      },
      electivo_especialidad_i: {
        name: 'Electivo de especialidad I',
        desc: 'Profundización en un área de especialización.',
      },

      // Ciclo 9
      inteligencia_negocios: {
        name: 'Inteligencia De Negocios',
        desc: 'De datos a conocimiento para decisiones empresariales.',
      },
      computacion_nube: {
        name: 'Computación en la nube',
        desc: 'Servicios cloud para desarrollo y despliegue de aplicaciones.',
      },
      tesis_i: {
        name: 'Trabajo de Tesis I',
        desc: 'Planteamiento del problema y metodología.',
      },
      desarrollo_moviles: {
        name: 'Desarrollo de Aplicaciones Móviles',
        desc: 'Apps para Android/iOS con herramientas modernas.',
      },
      analitica_web: {
        name: 'Analítica de la web',
        desc: 'Medición y análisis del comportamiento de usuarios.',
      },
      project_management: {
        name: 'Project Management',
        desc: 'Metodologías de gestión como PMBOK y Scrum.',
      },
      electivo_especialidad_ii: {
        name: 'Electivo de especialidad II',
        desc: 'Segundo curso electivo en línea específica.',
      },

      // Ciclo 10
      knowledge_management: {
        name: 'Knowledge Management',
        desc: 'Gestión del conocimiento para innovación y aprendizaje.',
      },
      sgsi: {
        name: 'Sistemas de Gestión de Seguridad de Información',
        desc: 'Implementación de seguridad de la información basada en normas.',
      },
      sistemas_informacion_gerencial: {
        name: 'Sistemas de Información Gerencial',
        desc: 'Sistemas que apoyan la gestión y decisiones.',
      },
      it_management: {
        name: 'Information Technology Management',
        desc: 'Administración de recursos tecnológicos alineados al negocio.',
      },
      enterprise_architecture_management: {
        name: 'Enterprise Architecture Management',
        desc: 'Arquitecturas empresariales integrando procesos y sistemas.',
      },
      electivo_especialidad_iii: {
        name: 'Electivo de especialidad III',
        desc: 'Curso avanzado de especialización.',
      },
      tesis_ii: {
        name: 'Trabajo de Tesis II',
        desc: 'Desarrollo, resultados y sustentación final.',
      },
    },
  },
  curriculumExp: {
    prev: 'Anterior',
    next: 'Siguiente',
    items: {
      promcoser_platform: {
        title: 'Plataforma Web PROMCOSER',
        company: 'PROMCOSER',
        date: '2024',
        desc: 'Gestión de personal, maquinaria y clientes, con digitalización del "Parte Diario" y reportes interactivos. Tecnologías: Visual Studio, Quasar, SQL Server, Git/GitHub.',
      },
      minsur_website_redesign: {
        title: 'Rediseño Web',
        company: 'Minsur',
        date: '2025',
        desc: 'Sitio oficial con Quasar (Vue) y .NET Core, diseño responsivo e integración de APIs.',
      },
      inventory_system: {
        title: 'Sistema de Inventario',
        company: 'Ferretería',
        date: '2024',
        desc: 'Python y SQL Server con API SUNAT para validación de datos en tiempo real.',
      },
      crypto_software: {
        title: 'Software de Criptografía',
        company: 'Proyecto personal',
        date: '2025',
        desc: 'Java con 5 algoritmos (CSRD, NSRPQ, Transposición Columnar, Vigenère y XOR), en ejecución serial y paralela.',
      },
      excel_vba_books: {
        title: 'Macro Excel VBA – Libros Electrónicos',
        company: 'Cooperativa Cafetalera Inkawasi',
        date: '2024',
        desc: 'Automatización para generar TXT del Registro de Activos Fijos y envío a SUNAT vía PLE.',
      },
      sales_dashboard: {
        title: 'Dashboard de Ventas',
        company: 'Cooperativa Cafetalera Inkawasi',
        date: '2025',
        desc: 'Control y análisis de ventas por lote en Excel.',
      },
      personal_portfolio: {
        title: 'Portafolio Personal',
        company: 'Proyecto personal',
        date: '2025',
        desc: 'Sitio web en Vue/Quasar, HTML, CSS y JS, publicado en Netlify.',
      },
    },
  },
  contact: {
    title: 'CONTACTO',
    placeholders: {
      name: 'Tu Nombre',
      phone: 'Número telefónico',
      email: 'Dirección de correo',
      subject: 'Tema',
      message: 'Mensaje',
    },
    button: {
      send: 'Enviar Mensaje',
      sending: 'Enviando…',
    },
    toast: {
      success: '✅ ¡Mensaje enviado correctamente!',
    },
    errors: {
      nameRequired: 'Ingresa tu nombre.',
      phoneRequired: 'Ingresa tu número.',
      emailInvalid: 'Correo no válido.',
      subjectRequired: 'Ingresa el tema.',
      messageRequired: 'Escribe tu mensaje.',
    },
    map: {
      title: 'Mapa de ubicación',
      openBtn: 'Abrir en Google Maps',
      openInline: 'Abrir en Google Maps',
    },
    info: {
      address: 'La Molina, Lima, Perú',
      callMe: 'Llámame: {phone}',
      emailMe: 'Email: {email}',
    },
  },

  footer: {
    goTop: 'Ir al inicio',
    socialNav: 'Redes sociales',
    socials: {
      facebook: 'Facebook',
      x: 'X (Twitter)',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    copyrightPrefix: '© {year} {name}',
  },
}
