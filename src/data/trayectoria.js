/**
 * TRAYECTORIA: experiencia, educación, certificaciones y logros.
 * Para agregar algo nuevo, copia un objeto de la lista correspondiente.
 */

// Experiencia en ESAN (más reciente primero). Los trabajos externos están en projects.js con type: 'work'. `start`/`end` en formato 'AAAA-MM'; end: null = actualidad
export const experience = [
  {
    role: {
      es: 'Practicante Pre profesional en Proyecto Transforma – Oracle',
      en: 'Pre-professional Intern at Proyecto Transforma – Oracle',
    },
    org: 'Universidad ESAN',
    logo: '/img/linkedin/esan.png',
    start: '2026-04',
    end: null,
    desc: {
      es: 'Bases de datos Oracle y administración de bases de datos de Oracle.',
      en: 'Oracle databases and Oracle database administration.',
    },
    tech: ['Oracle Database'],
  },
]

export const education = [
  {
    institution: 'Universidad ESAN',
    logo: '/img/linkedin/esan.png',
    degree: {
      es: 'Ingeniería de Tecnologías de Información y Sistemas',
      en: 'Information Technology & Systems Engineering',
    },
    period: { es: '2022 – Actualidad', en: '2022 – Present' },
    note: {
      es: 'Tesis: detección de TEA con deep learning explicable a partir de señales ERG.',
      en: 'Thesis: explainable deep learning for autism detection from ERG signals.',
    },
  },
]

// `total` = número de certificaciones en LinkedIn (aunque aquí solo se listen algunas)
export const certificationsTotal = 5
export const certificationsUrl = 'https://www.linkedin.com/in/frayder/details/certifications/'
export const certifications = [
  {
    name: 'Creating Applications and Extensions using SAP Build Code – Record of Achievement',
    issuer: 'SAP',
    logo: '/img/linkedin/sap.png',
    date: { es: 'ago. 2025', en: 'Aug 2025' },
    id: 'beae7188-2e5a-49a7-80c1-6e91c52c8fc0',
    skills: {
      es: 'Configuración de entornos en SAP Build Code, Integración SAP',
      en: 'SAP Build Code environment setup, SAP Integration',
    },
  },
  {
    name: 'Develop and Automate with SAP Build – Record of Achievement',
    issuer: 'SAP',
    logo: '/img/linkedin/sap.png',
    date: { es: 'ago. 2025', en: 'Aug 2025' },
    id: 'c6c9775f-8ffd-4b3e-807f-80f46a0885a4',
    skills: {
      es: 'Desarrollo low-code/no-code, Configuración de entornos en SAP Build Code',
      en: 'Low-code/no-code development, SAP Build Code environment setup',
    },
  },
]

// Hackatones, retos y logros. `project` = id en projects.js (opcional, para enlazar)
export const achievements = [
  {
    icon: 'fa-solid fa-trophy',
    title: { es: 'Hackatón Transformagob 2026', en: 'Transformagob 2026 Hackathon' },
    detail: {
      es: 'Reto INEN · Desafío 14: OncoRuta Mujer IA',
      en: 'INEN challenge · Challenge 14: OncoRuta Mujer IA',
    },
    year: 2026,
    project: 'oncoruta',
  },
  {
    icon: 'fa-solid fa-droplet',
    title: { es: 'Datathon SUNASS', en: 'SUNASS Datathon' },
    detail: { es: 'Análisis de datos y prototipo web', en: 'Data analysis and web prototype' },
    year: 2026,
    project: 'datathon-sunass',
  },
  {
    icon: 'fa-solid fa-flag-checkered',
    title: { es: 'Gran Prix CapyTown', en: 'CapyTown Grand Prix' },
    detail: {
      es: 'Robótica Móvil ESAN × INEN: robot autónomo con ROS 2 y LiDAR',
      en: 'Mobile Robotics ESAN × INEN: autonomous robot with ROS 2 and LiDAR',
    },
    year: 2026,
    project: 'capytown-granprix',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: { es: 'Proyecto TCS × ESAN', en: 'TCS × ESAN Project' },
    detail: { es: 'SLA Tracker: app de monitoreo de SLA', en: 'SLA Tracker: SLA monitoring app' },
    year: 2025,
    project: 'sla-tracker',
  },
]
