<template>
  <section id="skills" class="skills" ref="skillsSection">
    <div class="contenido-seccion">
      <h2>Skills</h2>

      <div class="bloque">
        <h3>Technical Skills</h3>
        <div class="grid-skills">
          <div
            class="skill clickable"
            v-for="(s, i) in orderedTechnicalSkills"
            :key="'t-' + i"
            @click="openSkill(s.name)"
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
        </div>
      </div>
      <!-- Panel dinámico -->
      <transition name="fade">
        <div v-if="activeComponent || lastTriedSlug" class="skill-panel">
          <div class="skill-panel-header">
            <h4 class="skill-panel-title">{{ activeSkillName || 'Detalle' }}</h4>
            <button class="skill-panel-close" @click="closeSkill" aria-label="Cerrar">×</button>
          </div>

          <div class="skill-panel-body">
            <component v-if="activeComponent" :is="activeComponent" />
            <div v-else class="skill-panel-fallback">
              <p>
                No encontré un componente para
                <strong>{{ lastTriedSlug }}</strong
                >. Crea <code>src/components/TechnicalSkills/{{ lastTriedSlug }}.vue</code>.
              </p>
            </div>
          </div>
        </div>
      </transition>

      <div class="bloque">
        <h3>Professional Skills</h3>
        <div class="grid-skills-1col">
          <div class="skill" v-for="(s, i) in professionalSkills" :key="'p-' + i">
            <span><i :class="s.icon" class="icono-skill heartbeat"></i> {{ s.name }}</span>
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

const visible = ref(false)
const skillsSection = ref(null)

const technicalSkills = [
  { name: 'Base de Datos', percent: '87%', icon: 'fas fa-database' },
  { name: 'Ciencia de Datos', percent: '90%', icon: 'fas fa-chart-line' },
  { name: 'Deep Learning', percent: '83%', icon: 'fas fa-brain' },
  { name: 'HTML & CSS', percent: '89%', icon: 'fab fa-html5' },
  { name: 'IA', percent: '88%', icon: 'fas fa-robot' },
  { name: 'Java', percent: '85%', icon: 'fab fa-java' },
  { name: 'JavaScript', percent: '75%', icon: 'fab fa-js' },
  { name: 'Julia', percent: '70%', icon: 'fas fa-code' },
  { name: 'Macros Excel', percent: '80%', icon: 'fas fa-file-excel' },
  { name: 'N8N', percent: '60%', icon: 'fas fa-network-wired' },
  { name: 'Python', percent: '95%', icon: 'fab fa-python' },
  { name: 'Vue.js', percent: '55%', icon: 'fab fa-vuejs' },
  { name: 'WordPress', percent: '81%', icon: 'fab fa-wordpress' },
]

const orderedTechnicalSkills = computed(() =>
  [...technicalSkills].sort((a, b) => a.name.localeCompare(b.name)),
)

const professionalSkills = [
  { name: 'Comunicación', percent: '80%', icon: 'fas fa-comments' },
  { name: 'Creatividad', percent: '99%', icon: 'fas fa-lightbulb' },
  { name: 'Líder de equipo', percent: '94%', icon: 'fas fa-user-tie' },
  { name: 'Trabajo en Equipo', percent: '70%', icon: 'fas fa-users' },
  { name: 'Adaptabilidad', percent: '65%', icon: 'fas fa-sync-alt' },
]

// animación barras
function handleScroll() {
  const top = skillsSection.value?.getBoundingClientRect().top
  if (top && window.innerHeight - top >= 300) {
    visible.value = true
    window.removeEventListener('scroll', handleScroll)
  }
}
onMounted(() => window.addEventListener('scroll', handleScroll))
onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

// ---- Carga dinámica de componentes
const skillModules = import.meta.glob('./TechnicalSkills/*.vue')

const activeSkillName = ref('')
const activeComponent = ref(null)
const lastTriedSlug = ref('')

function toSlug(name) {
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

function openSkill(name) {
  const slug = toSlug(name)
  lastTriedSlug.value = slug
  activeSkillName.value = name

  const loader = resolveModuleBySlug(slug)
  activeComponent.value = loader ? defineAsyncComponent(loader) : null
}

function closeSkill() {
  activeSkillName.value = ''
  activeComponent.value = null
  lastTriedSlug.value = ''
}
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

.grid-skills {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px 40px;
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
</style>
