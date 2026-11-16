/**
 * HABILIDADES
 * ---------------------------------------------------------------
 *  name     nombre visible (si existe src/components/TechnicalSkills/<nombre>.vue, se abre su detalle)
 *  percent  nivel autoevaluado (opcional). Se muestra como nivel: Experto / Avanzado / Intermedio / Básico
 *  icon     clase de Font Awesome o Devicon
 *  match    (opcional) nombres con los que aparece en `tech` de los proyectos, para contar evidencia
 *
 * La "evidencia" (cuántos proyectos usan cada skill) se calcula sola desde src/data/projects.js
 */
export const skillCategories = [
  {
    id: 'languages',
    icon: 'fa-solid fa-code',
    label: { es: 'Lenguajes', en: 'Languages' },
    skills: [
      { name: 'Python', percent: '90%', icon: 'fab fa-python' },
      { name: 'Java', percent: '70%', icon: 'fab fa-java' },
      { name: 'C#', percent: '65%', icon: 'devicon-csharp-plain colored' },
      { name: 'JavaScript', percent: '75%', icon: 'fab fa-js' },
      { name: 'C++', percent: '60%', icon: 'devicon-cplusplus-plain colored' },
      { name: 'Julia', percent: '50%', icon: 'devicon-julia-plain colored' },
      { name: 'Kotlin', percent: '60%', icon: 'devicon-kotlin-plain colored' },
    ],
  },
  {
    id: 'ai',
    icon: 'fa-solid fa-brain',
    label: { es: 'Data Science & IA', en: 'Data Science & AI' },
    skills: [
      { name: 'Machine Learning', percent: '88%', icon: 'fas fa-brain' },
      { name: 'Deep Learning', percent: '83%', icon: 'fas fa-network-wired' },
      { name: 'Time Series', percent: '78%', icon: 'fas fa-chart-line' },
      { name: 'Recommendation Systems', percent: '75%', icon: 'fas fa-star' },
      { name: 'Computer Vision', percent: '80%', icon: 'fas fa-image' },
      { name: 'Natural Language Processing', percent: '82%', icon: 'fas fa-language', match: ['NLP', 'Transformers', 'LLM', 'RAG'] },
      { name: 'Data Mining', percent: '80%', icon: 'fas fa-database' },
      { name: 'PyTorch', icon: 'fas fa-fire-flame-curved' },
      { name: 'YOLOv8', icon: 'fas fa-crosshairs' },
      { name: 'IA explicable (SHAP)', icon: 'fas fa-magnifying-glass-chart', match: ['SHAP'] },
      { name: 'H2O', icon: 'fas fa-droplet' },
    ],
  },
  {
    id: 'data-eng',
    icon: 'fa-solid fa-bolt',
    label: { es: 'Ingeniería de Datos', en: 'Data Engineering' },
    skills: [
      { name: 'Apache Spark', percent: '75%', icon: 'fas fa-fire' },
      { name: 'PySpark', percent: '70%', icon: 'fas fa-database' },
      { name: 'ETL Pipelines', percent: '80%', icon: 'fas fa-project-diagram' },
      { name: 'Delta Lake', percent: '72%', icon: 'fas fa-database' },
      { name: 'Medallion Architecture', percent: '78%', icon: 'fas fa-layer-group' },
      { name: 'Data Warehousing', percent: '80%', icon: 'fas fa-warehouse' },
      { name: 'Web Scraping', icon: 'fas fa-spider' },
    ],
  },
  {
    id: 'db',
    icon: 'fa-solid fa-database',
    label: { es: 'Bases de datos', en: 'Databases' },
    skills: [
      { name: 'PostgreSQL', percent: '87%', icon: 'devicon-postgresql-plain colored' },
      { name: 'SQL Server', percent: '85%', icon: 'devicon-microsoftsqlserver-plain colored' },
      { name: 'MySQL', percent: '85%', icon: 'devicon-mysql-plain colored' },
      { name: 'MongoDB', percent: '78%', icon: 'devicon-mongodb-plain colored' },
      { name: 'Oracle Database', icon: 'devicon-oracle-original colored' },
    ],
  },
  {
    id: 'cloud',
    icon: 'fa-solid fa-cloud',
    label: { es: 'Cloud AWS', en: 'AWS Cloud' },
    skills: [
      { name: 'EC2', percent: '75%', icon: 'fas fa-server' },
      { name: 'S3', percent: '80%', icon: 'fas fa-cloud' },
      { name: 'RDS', percent: '78%', icon: 'fas fa-database' },
      { name: 'Amplify', percent: '70%', icon: 'fas fa-cloud' },
      { name: 'CloudFront', percent: '72%', icon: 'fas fa-cloud' },
      { name: 'Scalable Architectures', percent: '75%', icon: 'fas fa-project-diagram' },
    ],
  },
  {
    id: 'backend',
    icon: 'fa-solid fa-server',
    label: { es: 'Backend', en: 'Backend' },
    skills: [
      { name: 'FastAPI', percent: '80%', icon: 'fas fa-bolt' },
      { name: 'ASP.NET Core', percent: '70%', icon: 'devicon-dotnetcore-plain colored' },
      { name: 'REST APIs', percent: '80%', icon: 'fas fa-server' },
      { name: 'JWT Authentication', percent: '82%', icon: 'fas fa-lock', match: ['JWT'] },
      { name: 'Flask', icon: 'devicon-flask-original' },
      { name: 'WebSockets', icon: 'fas fa-plug' },
    ],
  },
  {
    id: 'web',
    icon: 'fa-solid fa-mobile-screen',
    label: { es: 'Web & Móvil', en: 'Web & Mobile' },
    skills: [
      { name: 'HTML', percent: '85%', icon: 'fab fa-html5' },
      { name: 'CSS', percent: '85%', icon: 'fab fa-css3' },
      { name: 'Vue.js', percent: '65%', icon: 'fab fa-vuejs' },
      { name: 'Quasar', percent: '70%', icon: 'fas fa-rocket' },
      { name: 'React', icon: 'fab fa-react' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Tailwind CSS', icon: 'fas fa-wind' },
      { name: 'Android (Kotlin)', percent: '65%', icon: 'fab fa-android' },
      { name: 'Jetpack Compose', percent: '60%', icon: 'fas fa-mobile' },
      { name: 'Design Patterns', percent: '75%', icon: 'fas fa-sitemap' },
      { name: 'Figma', percent: '70%', icon: 'fab fa-figma' },
    ],
  },
  {
    id: 'robotics',
    icon: 'fa-solid fa-robot',
    label: { es: 'Robótica', en: 'Robotics' },
    skills: [
      { name: 'ROS 2', icon: 'fas fa-robot' },
      { name: 'LiDAR', icon: 'fas fa-satellite-dish' },
      { name: 'Raspberry Pi', icon: 'fab fa-raspberry-pi' },
      { name: 'Algoritmos', icon: 'fas fa-route', label: { es: 'Algoritmos de búsqueda (BFS, flood fill)', en: 'Search algorithms (BFS, flood fill)' } },
    ],
  },
  {
    id: 'devops',
    icon: 'fa-solid fa-chart-column',
    label: { es: 'Analítica, DevOps & QA', en: 'Analytics, DevOps & QA' },
    skills: [
      { name: 'Power BI', percent: '80%', icon: 'fas fa-chart-bar' },
      { name: 'Excel Avanzado (VBA)', percent: '80%', icon: 'fas fa-file-excel' },
      { name: 'Streamlit', icon: 'fas fa-chart-area' },
      { name: 'SAP Build', icon: 'fas fa-cubes' },
      { name: 'Git & GitHub', percent: '85%', icon: 'fab fa-git-alt' },
      { name: 'Linux', percent: '80%', icon: 'fab fa-linux' },
      { name: 'NGINX', percent: '75%', icon: 'fas fa-server' },
      { name: 'CI/CD', percent: '75%', icon: 'fas fa-cogs' },
      { name: 'Docker', percent: '75%', icon: 'fab fa-docker' },
      { name: 'Software Testing', percent: '78%', icon: 'fas fa-flask' },
      { name: 'API Testing', percent: '78%', icon: 'fas fa-vial' },
    ],
  },
]

// Habilidades profesionales (textos en i18n: skills.prof.items.<id>)
export const professionalSkills = [
  { id: 'communication', percent: '80%', icon: 'fas fa-comments' },
  { id: 'creativity', percent: '99%', icon: 'fas fa-lightbulb' },
  { id: 'team_leadership', percent: '94%', icon: 'fas fa-user-tie' },
  { id: 'teamwork', percent: '70%', icon: 'fas fa-users' },
  { id: 'adaptability', percent: '65%', icon: 'fas fa-sync-alt' },
]

export function toNumber(pct) {
  const n = Number(String(pct ?? '').replace('%', ''))
  return Number.isNaN(n) ? null : n
}

// Nivel a partir del porcentaje: 4 = Experto … 1 = Básico (null si no hay porcentaje)
export function levelOf(pct) {
  const v = toNumber(pct)
  if (v == null || pct == null) return null
  if (v >= 90) return 4
  if (v >= 75) return 3
  if (v >= 60) return 2
  return 1
}
