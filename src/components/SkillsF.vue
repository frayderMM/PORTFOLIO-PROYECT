<template>
  <section id="skills" class="skills" ref="skillsSection">
    <div class="contenido-seccion">
      <!-- 🔹 Título principal -->
      <h2>{{ $t('skills.title') }}</h2>

      <!-- 🔹 Technical Skills -->
      <div class="bloque">
        <h3>{{ $t('skills.techTitle') }}</h3>
        <!-- 🔹 Marquee con todas las tecnologías usadas -->
        <LangTicker class="mb-12" :items="allTechItems" />
        <!-- 🔹 Technical Skills by Category -->
        <div
          v-for="(category, idx) in skillCategories"
          :key="'cat-' + idx"
          class="skill-category"
          @mouseenter="handleMouseEnter(idx)"
          @mouseleave="handleMouseLeave"
        >
          <button class="category-toggle" @click="toggleCategory(idx)">
            <h4 class="category-title" :class="{ expanded: expandedCategories[idx] }">
              {{ category.name }}
            </h4>
            <i class="fas fa-chevron-down" :class="{ 'rotate-180': expandedCategories[idx] }"></i>
          </button>
          <transition name="collapse">
            <div v-show="isCategoryVisible(idx)" class="grid-skills">
              <!-- Nueva presentación solo para Lenguajes de Programación -->
              <LanguageSkills
                v-if="idx === 0"
                :skills="category.skills"
                @select="openSkill($event, idx)"
              />
              <!-- Árbol jerárquico para Data Science & AI -->
              <DataAiTree v-else-if="idx === 1" :skills="category.skills" />

              <!-- Resto de categorías mantienen estilo actual -->
              <template v-else>
                <div
                  class="skill"
                  :class="{ clickable: hasDetail(s.name), 'no-detail': !hasDetail(s.name) }"
                  v-for="(s, i) in category.skills"
                  :key="'t-' + idx + '-' + i"
                  @click="hasDetail(s.name) && openSkill(s.name, idx)"
                >
                  <span>
                    <i :class="s.icon" class="icono-skill heartbeat"></i>
                    {{ s.name }}
                  </span>
                  <div class="barra-skill">
                    <div class="progreso" :style="{ width: visible ? s.percent : '0%' }">
                      <span>{{ s.percent }}</span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
          </transition>

          <!-- 🔹 Panel dinámico debajo de la categoría activa -->
          <transition name="fade">
            <div
              v-if="(activeComponent || lastTriedSlug) && idx === activeCategoryIdx"
              id="skill-panel"
              ref="skillPanel"
              class="skill-panel"
            >
              <div class="skill-panel-header">
                <h4 class="skill-panel-title">
                  {{ activeSkillName || $t('skills.panel.titleFallback') }}
                </h4>
                <button
                  class="skill-panel-close"
                  @click="closeSkill"
                  :aria-label="$t('skills.panel.closeAria')"
                >
                  ×
                </button>
              </div>

              <div class="skill-panel-body">
                <component v-if="activeComponent" :is="activeComponent" />
                <div v-else class="skill-panel-fallback">
                  <p>
                    {{ $t('skills.panel.notFound1') }}
                    <strong>{{ lastTriedSlug }}</strong
                    >.
                    {{ $t('skills.panel.notFound2') }}
                    <code
                      >{{ $t('skills.panel.pathPrefix') }}{{ lastTriedSlug
                      }}{{ $t('skills.panel.pathSuffix') }}</code
                    >.
                  </p>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- 🔹 Professional Skills -->
      <div class="bloque">
        <h3>{{ $t('skills.profTitle') }}</h3>
        <div class="grid-skills-1col">
          <div class="skill" v-for="(s, i) in professionalSkills" :key="'p-' + i">
            <span>
              <i :class="s.icon" class="icono-skill heartbeat"></i>
              {{ $t(`skills.prof.items.${s.id}`) }}
            </span>
            <div class="barra-skill">
              <div class="progreso" :style="{ width: visible ? s.percent : '0%' }">
                <span>{{ s.percent }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, defineAsyncComponent } from 'vue'
import LanguageSkills from './LanguageSkills.vue'
import LangTicker from './LangTicker.vue'
import DataAiTree from './DataAiTree.vue'

const visible = ref(false)
const skillsSection = ref(null)
const skillPanel = ref(null)
const expandedCategories = ref({})
const hoveredCategory = ref(null)

// 🔹 Technical Skills organized by category
const skillCategories = [
  {
    name: '👨‍💻 Programming Languages',
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
    name: '📊 Data Science & Artificial Intelligence',
    skills: [
      { name: 'Machine Learning', percent: '88%', icon: 'fas fa-brain' },
      { name: 'Deep Learning', percent: '83%', icon: 'fas fa-network-wired' },
      { name: 'Time Series', percent: '78%', icon: 'fas fa-chart-line' },
      { name: 'Recommendation Systems', percent: '75%', icon: 'fas fa-star' },
      { name: 'Computer Vision', percent: '80%', icon: 'fas fa-image' },
      { name: 'Natural Language Processing', percent: '82%', icon: 'fas fa-language' },
      { name: 'Data Mining', percent: '80%', icon: 'fas fa-database' },
    ],
  },
  {
    name: '⚡ Data Engineering & Big Data',
    skills: [
      { name: 'Apache Spark', percent: '75%', icon: 'fas fa-fire' },
      { name: 'PySpark', percent: '70%', icon: 'fas fa-database' },
      { name: 'ETL Pipelines', percent: '80%', icon: 'fas fa-project-diagram' },
      { name: 'Delta Lake', percent: '72%', icon: 'fas fa-database' },
      { name: 'Medallion Architecture', percent: '78%', icon: 'fas fa-layer-group' },
      { name: 'Data Warehousing', percent: '80%', icon: 'fas fa-warehouse' },
    ],
  },
  {
    name: '🗄️ Databases',
    skills: [
      { name: 'PostgreSQL', percent: '87%', icon: 'fas fa-database' },
      { name: 'SQL Server', percent: '85%', icon: 'fas fa-database' },
      { name: 'MySQL', percent: '85%', icon: 'fas fa-database' },
      { name: 'MongoDB', percent: '78%', icon: 'fas fa-database' },
    ],
  },
  {
    name: '☁️ Cloud AWS',
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
    name: '🔧 Backend Development',
    skills: [
      { name: 'FastAPI', percent: '80%', icon: 'fas fa-server' },
      { name: 'ASP.NET Core', percent: '70%', icon: 'fas fa-code' },
      { name: 'REST APIs', percent: '80%', icon: 'fas fa-server' },
      { name: 'JWT Authentication', percent: '82%', icon: 'fas fa-lock' },
    ],
  },
  {
    name: '🌐 Web & Mobile Development',
    skills: [
      { name: 'HTML', percent: '85%', icon: 'fab fa-html5' },
      { name: 'CSS', percent: '85%', icon: 'fab fa-css3' },
      { name: 'Vue.js', percent: '65%', icon: 'fab fa-vuejs' },
      { name: 'Quasar', percent: '70%', icon: 'fas fa-rocket' },
      { name: 'Android (Kotlin)', percent: '65%', icon: 'fab fa-android' },
      { name: 'Jetpack Compose', percent: '60%', icon: 'fas fa-mobile' },
      { name: 'Design Patterns', percent: '75%', icon: 'fas fa-sitemap' },
      { name: 'Figma', percent: '70%', icon: 'fas fa-paint-brush' },
    ],
  },
  {
    name: '📈 Analytics, DevOps & QA',
    skills: [
      { name: 'Power BI', percent: '80%', icon: 'fas fa-chart-bar' },
      { name: 'Excel Avanzado (VBA)', percent: '80%', icon: 'fas fa-file-excel' },
      { name: 'Git & GitHub', percent: '85%', icon: 'fab fa-git-alt' },
      { name: 'Linux', percent: '80%', icon: 'fab fa-linux' },
      { name: 'NGINX', percent: '75%', icon: 'fas fa-server' },
      { name: 'CI/CD', percent: '75%', icon: 'fas fa-cogs' },
      { name: 'Docker', percent: '75%', icon: 'fab fa-docker' },
      { name: 'Software Testing', percent: '78%', icon: 'fas fa-flask' },
      { name: 'API Testing', percent: '78%', icon: 'fas fa-server' },
    ],
  },
]

// 🔹 Professional Skills (con IDs para traducción)
const professionalSkills = [
  { id: 'communication', percent: '80%', icon: 'fas fa-comments' },
  { id: 'creativity', percent: '99%', icon: 'fas fa-lightbulb' },
  { id: 'team_leadership', percent: '94%', icon: 'fas fa-user-tie' },
  { id: 'teamwork', percent: '70%', icon: 'fas fa-users' },
  { id: 'adaptability', percent: '65%', icon: 'fas fa-sync-alt' },
]

// 🔹 Todas las tecnologías para el ticker (únicas, orden legible)
const allTechItems = computed(() => {
  const seen = new Set()
  const list = []
  for (const cat of skillCategories) {
    for (const s of cat.skills) {
      const key = s.name.trim()
      if (!seen.has(key)) {
        seen.add(key)
        list.push({ name: s.name, icon: s.icon })
      }
    }
  }
  return list
})

// Animación barras
function handleScroll() {
  const top = skillsSection.value?.getBoundingClientRect().top
  if (top && window.innerHeight - top >= 300) {
    visible.value = true
    window.removeEventListener('scroll', handleScroll)
  }
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

// ---- Carga dinámica de componentes para detalles técnicos
const skillModules = import.meta.glob('./TechnicalSkills/*.vue')
const availableSlugs = computed(
  () =>
    new Set(
      Object.keys(skillModules).map((key) =>
        key.replace('./TechnicalSkills/', '').replace('.vue', ''),
      ),
    ),
)

const activeSkillName = ref('')
const activeComponent = ref(null)
const lastTriedSlug = ref('')
const activeCategoryIdx = ref(-1)

function toSlug(name) {
  // Casos especiales
  if (name === 'C++') return 'cplusplus'
  if (name === 'Android (Kotlin)') return 'kotlin'

  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, '_')
    .replace(/[^\w]/g, '')
}

function resolveModuleBySlug(slug) {
  const matchKey = Object.keys(skillModules).find((k) => k.endsWith(`/${slug}.vue`))
  return matchKey ? skillModules[matchKey] : null
}

function openSkill(name, categoryIdx = null) {
  const slug = toSlug(name)
  lastTriedSlug.value = slug
  activeSkillName.value = name
  if (categoryIdx !== null && categoryIdx !== undefined) {
    activeCategoryIdx.value = categoryIdx
  }

  const loader = resolveModuleBySlug(slug)
  activeComponent.value = loader ? defineAsyncComponent(loader) : null

  // Eliminado desplazamiento automático hacia el panel
}

function hasDetail(name) {
  return availableSlugs.value.has(toSlug(name))
}

function closeSkill() {
  activeSkillName.value = ''
  activeComponent.value = null
  lastTriedSlug.value = ''
  activeCategoryIdx.value = -1
}

function toggleCategory(idx) {
  expandedCategories.value[idx] = !expandedCategories.value[idx]
  // Si se cierra la categoría que tiene el panel abierto, cerrar el panel
  if (!expandedCategories.value[idx] && idx === activeCategoryIdx.value) {
    closeSkill()
  }
}

function handleMouseEnter(idx) {
  hoveredCategory.value = idx
}

function handleMouseLeave() {
  hoveredCategory.value = null
}

function isCategoryVisible(idx) {
  return expandedCategories.value[idx] || hoveredCategory.value === idx
}

// Inicializar todas las categorías como contraídas
onMounted(() => {
  skillCategories.forEach((_, idx) => {
    expandedCategories.value[idx] = false
  })
})
</script>

<style scoped>
.skills {
  background-color: #0c101b;
  color: #fff;
  padding: 50px 20px;
}

.contenido-seccion {
  max-width: 1100px;
  margin: auto;
}

h2 {
  font-size: 48px;
  font-family: 'Righteous', sans-serif;
  text-align: center;
  padding-bottom: 30px;
}

.bloque {
  margin-bottom: 60px;
}

h3 {
  font-size: 28px;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 25px;
  text-align: center;
}

.skill-category {
  margin-bottom: 50px;
}

.category-toggle {
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  transition: all 0.3s ease;
}

.category-toggle:hover {
  transform: translateX(5px);
}

.category-toggle i {
  color: #00bfff;
  font-size: 18px;
  transition: transform 0.3s ease;
}

.category-toggle i.rotate-180 {
  transform: rotate(180deg);
}

.category-title {
  font-size: 22px;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 20px;
  color: #00bfff;
  text-align: left;
  padding-left: 12px;
  border-left: 3px solid #00bfff;
  margin: 0;
  margin-bottom: 25px;
  transition: all 0.3s ease;
  font-weight: 400;
}

.category-title.expanded {
  font-weight: 700;
  font-size: 23px;
  color: #00ffff;
  letter-spacing: 0.5px;
  text-shadow: 0 0 10px rgba(0, 191, 255, 0.5);
}

.grid-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px 40px;
  margin-top: 15px;
}
/* spacing for ticker */
.mb-12 {
  margin-bottom: 12px;
}

.grid-skills-1col {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
}

.skill > span {
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.icono-skill {
  margin-right: 8px;
  color: #1e90ff;
  font-size: 20px;
}

/* Barra de fondo */
.barra-skill {
  height: 8px;
  width: 100%;
  background-color: #252a2e;
  position: relative;
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: visible;
}

/* Progreso */
.progreso {
  background-color: #1e90ff;
  height: 100%;
  width: 0%;
  transition: width 2s ease;
  position: relative;
  border-radius: 4px;
}

/* Círculo con porcentaje */
.progreso span {
  position: absolute;
  right: 0;
  top: -17px;
  transform: translateX(50%);
  height: 40px;
  width: 40px;
  background-color: #1e90ff;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  color: white;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

/* Animación heartbeat */
@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  14% {
    transform: scale(1.3);
  }
  28% {
    transform: scale(1);
  }
  42% {
    transform: scale(1.3);
  }
  70% {
    transform: scale(1);
  }
}

.heartbeat {
  animation: heartbeat 1.5s infinite;
}
/* mismos estilos que ya tenías, más panel */
.clickable {
  cursor: pointer;
  transition: transform 0.15s;
}
.clickable:hover {
  transform: translateY(-2px);
}
.no-detail {
  cursor: not-allowed;
  opacity: 0.7;
}

.skill-panel {
  margin-top: 30px;
  border: 1px solid #1e90ff33;
  background: #0e1422;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}
.skill-panel-header {
  display: flex;
  justify-content: space-between;
  padding: 14px 16px;
  background: #11182a;
}
.skill-panel-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}
.skill-panel-close {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  max-height: 2000px;
  overflow: hidden;
}
.collapse-enter-from,
.collapse-leave-to {
  max-height: 0;
  opacity: 0;
  margin-top: 0 !important;
}
.collapse-enter-to,
.collapse-leave-from {
  opacity: 1;
}
</style>
