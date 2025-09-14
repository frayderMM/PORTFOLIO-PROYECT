export default {
  hello: 'Hello World',

  nav: {
    home: 'Home',
    about: 'About me',
    skills: 'Skills',
    curriculum: 'Resume',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  inicio: {
    career1: 'Software Engineer',
    career2: 'Full Stack Developer',
    career3: 'UI/UX Enthusiast',
    career4: 'Future Data Scientist',
  },

  sobreMi: {
    title: 'About Me',
    intro: {
      helloSpan: 'Hello, I’m {name}',
      text: 'I am a passionate software developer.',
    },
    personal: {
      title: 'Personal Information',
      birthday: 'Birthday:',
      phone: 'Phone:',
      email: 'Email:',
      website: 'Website:',
      address: 'Address:',
      role: 'Role:',
      roleValue: 'Software Engineer',
    },
    interests: {
      title: 'Interests',
      games: 'Games',
      music: 'Music',
      travel: 'Travel',
      mma: 'MMA',
      sport: 'Sport',
      books: 'Books',
      cars: 'Cars',
      anime: 'Anime',
    },
    galleryTitle: '{label} Gallery',
    downloadCv: 'Download CV',
  },

  skills: {
    title: 'Skills',
    techTitle: 'Technical Skills',
    profTitle: 'Professional Skills',
    panel: {
      titleFallback: 'Details',
      closeAria: 'Close',
      notFound1: 'I couldn’t find a component for',
      notFound2: 'Create',
      pathPrefix: 'src/components/TechnicalSkills/',
      pathSuffix: '.vue',
    },
    prof: {
      items: {
        communication: 'Communication',
        creativity: 'Creativity',
        team_leadership: 'Team Leadership',
        teamwork: 'Teamwork',
        adaptability: 'Adaptability',
      },
    },
  },

  curriculum: {
    title: 'Resume',
    education: 'Education',
    experience: 'Experience',
  },
  curriculumEdu: {
    courseLabel: 'Course {n}',
    noDescription: 'Description not available.',
    cycle: 'Term',
    prev: 'Previous',
    next: 'Next',
    close: 'Close',
    courses: {
      // Term 1
      lectura_redaccion: {
        name: 'Reading and Writing',
        desc: 'Learn to write essays, articles, and argumentative texts clearly and coherently.',
      },
      pre_calculo: {
        name: 'Pre-Calculus',
        desc: 'Essential math foundations for differential and integral calculus.',
      },
      administracion_general: {
        name: 'General Management',
        desc: 'Introduces the basic principles of management in modern organizations.',
      },
      globalizacion_realidad_nacional: {
        name: 'Globalization and National Reality',
        desc: 'Analyzes globalization effects in the country’s political, economic, and social context.',
      },
      estrategias_aprendizaje: {
        name: 'Learning Strategies',
        desc: 'Develop effective techniques to improve academic and personal performance.',
      },
      habilidades_actitudinales: {
        name: 'Attitudinal Skills',
        desc: 'Strengthen soft skills such as teamwork, leadership, and assertive communication.',
      },
      basic_english: {
        name: 'Basic English (*)',
        desc: 'Basic English focused on listening and reading in everyday situations.',
      },

      // Term 2
      comunicacion_literatura_i: {
        name: 'Communication and Literature I',
        desc: 'Explores literary genres and techniques for critical text analysis.',
      },
      calculo_i: {
        name: 'Calculus I',
        desc: 'Limits, derivatives, and basic applications of differential calculus.',
      },
      contabilidad_general: {
        name: 'Financial Accounting',
        desc: 'Fundamental principles of financial accounting.',
      },
      estadistica_probabilidades: {
        name: 'Statistics and Probability',
        desc: 'Descriptive statistics and probability theory.',
      },
      fisica_i: {
        name: 'Physics I',
        desc: 'Classical mechanics and fundamental laws of motion.',
      },
      fundamentos_programacion: {
        name: 'Programming Fundamentals',
        desc: 'Computational logic and structured programming with a high-level language.',
      },
      intermediate_english_i: {
        name: 'Intermediate English I',
        desc: 'Intermediate English emphasizing reading, vocabulary, and conversation.',
      },

      // Term 3
      comunicacion_literatura_ii: {
        name: 'Communication and Literature II',
        desc: 'Analyze complex texts and develop advanced critical writing skills.',
      },
      calculo_ii: {
        name: 'Calculus II',
        desc: 'Integral calculus, integration techniques, and applications.',
      },
      base_datos: {
        name: 'Databases',
        desc: 'Design and implement relational databases using SQL.',
      },
      intro_ciencia_datos: {
        name: 'Introduction to Data Science',
        desc: 'Foundations and applications of data science.',
      },
      fundamentos_logica: {
        name: 'Logic Fundamentals',
        desc: 'Propositional logic, predicate logic, and reasoning.',
      },
      algoritmos_estructura_datos: {
        name: 'Algorithms and Data Structures',
        desc: 'Design efficient algorithms and use fundamental data structures.',
      },
      intermediate_english_ii: {
        name: 'Intermediate English II',
        desc: 'Reinforces intermediate skills with a communicative approach.',
      },

      // Term 4
      marketing_ingenieria: {
        name: 'Marketing for Engineering',
        desc: 'The role of marketing in the development of technology products.',
      },
      costos_presupuestos: {
        name: 'Costs and Budgets',
        desc: 'Calculate and control costs in business and technology projects.',
      },
      algebra_lineal_i: {
        name: 'Linear Algebra I',
        desc: 'Matrices, vectors, linear transformations, and systems of equations.',
      },
      estadistica_inferencial: {
        name: 'Inferential Statistics',
        desc: 'Methods for drawing conclusions from sample data.',
      },
      arquitectura_computador_i: {
        name: 'Computer Architecture I',
        desc: 'Internal structure and operation of computer hardware.',
      },
      programacion_oo: {
        name: 'Object-Oriented Programming',
        desc: 'Modular software design applying OOP principles.',
      },
      intermediate_english_iii: {
        name: 'Intermediate English III',
        desc: 'Final intermediate English with emphasis on academic writing and presentation.',
      },

      // Term 5
      investigacion_operativa_i: {
        name: 'Operations Research I',
        desc: 'Model and solve optimization problems using linear programming.',
      },
      matematica_discreta: {
        name: 'Discrete Mathematics',
        desc: 'Graphs, sets, and discrete mathematical structures.',
      },
      ingenieria_software_i: {
        name: 'Software Engineering I',
        desc: 'Software lifecycle and agile methodologies.',
      },
      analisis_multivariado_i: {
        name: 'Multivariate Analysis I',
        desc: 'Statistical techniques for multivariate data.',
      },
      sistemas_operativos_i: {
        name: 'Operating Systems I',
        desc: 'Processes, memory, files, and multitasking systems.',
      },
      analisis_diseno_algoritmos: {
        name: 'Algorithm Analysis and Design',
        desc: 'Efficient algorithm development and complexity analysis.',
      },

      // Term 6
      metodologia_investigacion: {
        name: 'Research Methodology',
        desc: 'Design scientific research projects.',
      },
      gestion_financiera: {
        name: 'Financial Management',
        desc: 'Financial decisions based on risk and profitability.',
      },
      inteligencia_artificial: {
        name: 'Artificial Intelligence',
        desc: 'Intro to machine learning, fuzzy logic, and neural networks.',
      },
      analisis_multivariado_ii: {
        name: 'Multivariate Analysis II',
        desc: 'Advanced multivariate methods for complex datasets.',
      },
      redes_comunicaciones: {
        name: 'Computer Networks',
        desc: 'Protocols, architectures, and network operations.',
      },
      ingenieria_procesos_negocio: {
        name: 'Business Process Engineering',
        desc: 'Modeling and optimizing business processes.',
      },

      // Term 7
      planeacion_estrategica: {
        name: 'Strategic Planning',
        desc: 'Organizational strategies aligned with mission and vision.',
      },
      ia_avanzada: {
        name: 'Advanced Artificial Intelligence',
        desc: 'Advanced techniques such as deep learning and genetic algorithms.',
      },
      computacion_grafica: {
        name: 'Computer Graphics',
        desc: '2D/3D graphics and fundamentals.',
      },
      mineria_datos: {
        name: 'Data Mining',
        desc: 'Discover patterns in large data volumes.',
      },
      robotica: {
        name: 'Robotics',
        desc: 'Design, program, and control robots.',
      },
      computacion_paralela: {
        name: 'Parallel Computing',
        desc: 'Architectures and algorithms for simultaneous processing.',
      },

      // Term 8
      gestion_innovacion_etica: {
        name: 'Innovation Management and Ethics',
        desc: 'Technology innovation under ethical and sustainable principles.',
      },
      entrepreneurship: {
        name: 'Entrepreneurship',
        desc: 'Skills for launching technology and business projects.',
      },
      desarrollo_web: {
        name: 'Web Application Development',
        desc: 'Dynamic web apps using modern frameworks.',
      },
      mineria_datos_avanzada: {
        name: 'Advanced Data Mining',
        desc: 'Advanced algorithms applied to specific problems.',
      },
      diseno_evaluacion_proyectos: {
        name: 'Project Design and Evaluation',
        desc: 'Technical and financial project evaluation.',
      },
      big_data_analytics: {
        name: 'Big Data Analytics',
        desc: 'Analyze large datasets for strategic insights.',
      },
      electivo_especialidad_i: {
        name: 'Specialization Elective I',
        desc: 'Deepen in a specific technical area.',
      },

      // Term 9
      inteligencia_negocios: {
        name: 'Business Intelligence',
        desc: 'Turn data into knowledge for decision making.',
      },
      computacion_nube: {
        name: 'Cloud Computing',
        desc: 'Cloud services for development and deployment.',
      },
      tesis_i: {
        name: 'Thesis I',
        desc: 'Problem statement and methodology.',
      },
      desarrollo_moviles: {
        name: 'Mobile App Development',
        desc: 'Apps for Android/iOS with modern tools.',
      },
      analitica_web: {
        name: 'Web Analytics',
        desc: 'Measure and analyze user behavior.',
      },
      project_management: {
        name: 'Project Management',
        desc: 'Management methodologies such as PMBOK and Scrum.',
      },
      electivo_especialidad_ii: {
        name: 'Specialization Elective II',
        desc: 'Second elective course in a specific track.',
      },

      // Term 10
      knowledge_management: {
        name: 'Knowledge Management',
        desc: 'Manage organizational knowledge for innovation and learning.',
      },
      sgsi: {
        name: 'Information Security Management Systems',
        desc: 'Implement ISMS based on standards.',
      },
      sistemas_informacion_gerencial: {
        name: 'Management Information Systems',
        desc: 'Systems that support management and decisions.',
      },
      it_management: {
        name: 'Information Technology Management',
        desc: 'Manage technology resources aligned with business goals.',
      },
      enterprise_architecture_management: {
        name: 'Enterprise Architecture Management',
        desc: 'Design enterprise architectures integrating processes and systems.',
      },
      electivo_especialidad_iii: {
        name: 'Specialization Elective III',
        desc: 'Advanced course to strengthen specialization.',
      },
      tesis_ii: {
        name: 'Thesis II',
        desc: 'Development, results, and final defense.',
      },
    },
  },
  curriculumExp: {
    prev: 'Previous',
    next: 'Next',
    items: {
      promcoser_platform: {
        title: 'PROMCOSER Web Platform',
        company: 'PROMCOSER',
        date: '2024',
        desc: 'Personnel, machinery, and clients management, digitized Daily Log and interactive reports. Tech: Visual Studio, Quasar, SQL Server, Git/GitHub.',
      },
      minsur_website_redesign: {
        title: 'Website Redesign',
        company: 'Minsur',
        date: '2025',
        desc: 'Official site with Quasar (Vue) and .NET Core, responsive design and API integration.',
      },
      inventory_system: {
        title: 'Inventory System',
        company: 'Hardware Store',
        date: '2024',
        desc: 'Python and SQL Server with SUNAT API for real-time data validation.',
      },
      crypto_software: {
        title: 'Cryptography Software',
        company: 'Personal project',
        date: '2025',
        desc: 'Java with 5 algorithms (CSRD, NSRPQ, Columnar Transposition, Vigenère, and XOR), serial and parallel execution.',
      },
      excel_vba_books: {
        title: 'Excel VBA Macro – Electronic Books',
        company: 'Cooperativa Cafetalera Inkawasi',
        date: '2024',
        desc: 'Automation to generate TXT for Fixed Assets Register and submission to SUNAT via PLE.',
      },
      sales_dashboard: {
        title: 'Sales Dashboard',
        company: 'Cooperativa Cafetalera Inkawasi',
        date: '2025',
        desc: 'Batch-based sales control and analysis in Excel.',
      },
      personal_portfolio: {
        title: 'Personal Portfolio',
        company: 'Personal project',
        date: '2025',
        desc: 'Website in Vue/Quasar, HTML, CSS & JS, deployed on Netlify.',
      },
    },
  },
  contact: {
    title: 'CONTACT',
    placeholders: {
      name: 'Your Name',
      phone: 'Phone number',
      email: 'Email address',
      subject: 'Subject',
      message: 'Message',
    },
    button: {
      send: 'Send Message',
      sending: 'Sending…',
    },
    toast: {
      success: '✅ Message sent successfully!',
    },
    errors: {
      nameRequired: 'Please enter your name.',
      phoneRequired: 'Please enter your phone number.',
      emailInvalid: 'Invalid email address.',
      subjectRequired: 'Please enter a subject.',
      messageRequired: 'Please write your message.',
    },
    map: {
      title: 'Location map',
      openBtn: 'Open in Google Maps',
      openInline: 'Open in Google Maps',
    },
    info: {
      address: 'La Molina, Lima, Peru',
      callMe: 'Call me: {phone}',
      emailMe: 'Email: {email}',
    },
  },

  footer: {
    goTop: 'Back to top',
    socialNav: 'Social networks',
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
