<template>
  <section id="skills" class="skills">
    <div class="contenido-seccion">
      <header class="cabecera">
        <h2>{{ $t('skills.title') }}</h2>
        <p class="subtitulo">{{ $t('skills.subtitle') }}</p>
      </header>

      <!-- Resumen en cifras -->
      <ul class="stats">
        <li v-for="s in stats" :key="s.key">
          <i :class="s.icon" aria-hidden="true"></i>
          <strong>{{ s.value }}</strong>
          <span>{{ $t(`skills.stats.${s.key}`) }}</span>
        </li>
      </ul>

      <!-- Todas las tecnologías -->
      <LangTicker class="ticker" :items="allTechItems" />

      <!-- ===================== STACK TÉCNICO ===================== -->
      <h3 class="sub">
        <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
        {{ $t('skills.techTitle') }}
      </h3>

      <div class="tabs" role="tablist" :aria-label="$t('skills.techTitle')">
        <button
          v-for="cat in skillCategories"
          :id="`tab-${cat.id}`"
          :key="cat.id"
          role="tab"
          class="tab"
          :class="{ activo: activeCat === cat.id }"
          :aria-selected="activeCat === cat.id"
          :aria-controls="`panel-${cat.id}`"
          @click="selectCat(cat.id)"
        >
          <i :class="cat.icon" aria-hidden="true"></i>
          <span>{{ l(cat.label) }}</span>
          <small>{{ cat.skills.length }}</small>
        </button>
      </div>

      <Transition name="fade" mode="out-in">
        <div
          :id="`panel-${current.id}`"
          :key="current.id"
          class="panel"
          role="tabpanel"
          :aria-labelledby="`tab-${current.id}`"
        >
          <!-- Lenguajes: anillos (clic = detalle) -->
          <template v-if="current.id === 'languages'">
            <p class="hint">
              <i class="fa-solid fa-hand-pointer" aria-hidden="true"></i>
              {{ $t('skills.langHint') }}
            </p>
            <LanguageSkills :skills="current.skills" @select="openSkill" />
          </template>

          <!-- Data & IA: árbol jerárquico + tarjetas -->
          <DataAiTree v-if="current.id === 'ai'" :skills="current.skills" class="arbol" />

          <div v-if="current.id !== 'languages'" class="grid">
            <article v-for="s in current.skills" :key="s.name" class="skill">
              <div class="skill-top">
                <span class="skill-icono"><i :class="s.icon" aria-hidden="true"></i></span>
                <h4>{{ s.label ? l(s.label) : s.name }}</h4>
              </div>

              <div v-if="levelOf(s.percent)" class="nivel" :title="s.percent">
                <span class="barras" aria-hidden="true">
                  <i v-for="n in 4" :key="n" :class="{ on: n <= levelOf(s.percent) }"></i>
                </span>
                <span class="nivel-txt">{{ $t(`skills.levels.${levelOf(s.percent)}`) }}</span>
              </div>
              <div v-else class="nivel nivel-vacio">
                <span class="nivel-txt">{{ $t('skills.levels.practice') }}</span>
              </div>

              <div class="skill-acciones">
                <button
                  v-if="evidence(s) > 0"
                  type="button"
                  class="evidencia"
                  :title="$t('skills.filterHint')"
                  @click="filterByTech(s.label ? l(s.label) : s.name, matchesOf(s))"
                >
                  <i class="fa-solid fa-folder-open" aria-hidden="true"></i>
                  {{ $t(evidence(s) === 1 ? 'skills.evidenceOne' : 'skills.evidence', { n: evidence(s) }) }}
                </button>
                <button
                  v-if="hasDetail(s.name)"
                  type="button"
                  class="detalle"
                  @click="openSkill(s.name)"
                >
                  {{ $t('skills.viewDetail') }}
                  <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          </div>
        </div>
      </Transition>

      <!-- Panel de detalle (componentes de src/components/TechnicalSkills) -->
      <Transition name="fade">
        <div v-if="activeComponent || lastTriedSlug" ref="skillPanel" class="skill-panel">
          <div class="skill-panel-header">
            <h4 class="skill-panel-title">
              {{ activeSkillName || $t('skills.panel.titleFallback') }}
            </h4>
            <button class="skill-panel-close" :aria-label="$t('skills.panel.closeAria')" @click="closeSkill">
              ×
            </button>
          </div>
          <div class="skill-panel-body">
            <component :is="activeComponent" v-if="activeComponent" />
            <div v-else class="skill-panel-fallback">
              <p>
                {{ $t('skills.panel.notFound1') }} <strong>{{ lastTriedSlug }}</strong>.
              </p>
            </div>
          </div>
        </div>
      </Transition>

      <!-- ===================== PROFESIONALES ===================== -->
      <h3 class="sub">
        <i class="fa-solid fa-people-group" aria-hidden="true"></i>
        {{ $t('skills.profTitle') }}
      </h3>
      <div class="grid prof">
        <article v-for="s in professionalSkills" :key="s.id" class="skill">
          <div class="skill-top">
            <span class="skill-icono"><i :class="s.icon" aria-hidden="true"></i></span>
            <h4>{{ $t(`skills.prof.items.${s.id}`) }}</h4>
          </div>
          <div class="nivel" :title="s.percent">
            <span class="barras" aria-hidden="true">
              <i v-for="n in 4" :key="n" :class="{ on: n <= levelOf(s.percent) }"></i>
            </span>
            <span class="nivel-txt">{{ $t(`skills.levels.${levelOf(s.percent)}`) }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, defineAsyncComponent, nextTick } from 'vue'
import LanguageSkills from './LanguageSkills.vue'
import LangTicker from './LangTicker.vue'
import DataAiTree from './DataAiTree.vue'
import { skillCategories, professionalSkills, levelOf } from 'src/data/skills'
import { projects } from 'src/data/projects'
import { certificationsTotal } from 'src/data/trayectoria'
import { useLocalized } from 'src/composables/useLocalized'
import { usePortfolioFilter } from 'src/composables/usePortfolioFilter'

const { l } = useLocalized()
const { filterByTech } = usePortfolioFilter()

// ---------- Pestañas ----------
const activeCat = ref(skillCategories[0].id)
const current = computed(() => skillCategories.find((c) => c.id === activeCat.value))
function selectCat(id) {
  activeCat.value = id
  closeSkill()
}

// ---------- Cifras ----------
const allSkills = skillCategories.flatMap((c) => c.skills)
const stats = [
  { key: 'languages', icon: 'fa-solid fa-code', value: skillCategories[0].skills.length },
  { key: 'technologies', icon: 'fa-solid fa-microchip', value: new Set(allSkills.map((s) => s.name)).size },
  { key: 'projects', icon: 'fa-solid fa-folder-open', value: projects.length },
  { key: 'certifications', icon: 'fa-solid fa-certificate', value: certificationsTotal },
]

const allTechItems = computed(() => {
  const seen = new Set()
  return allSkills.filter((s) => !seen.has(s.name) && seen.add(s.name)).map((s) => ({ name: s.name, icon: s.icon }))
})

// ---------- Evidencia: proyectos que usan cada skill ----------
function matchesOf(s) {
  return s.match ?? [s.name]
}
function evidence(s) {
  const m = matchesOf(s).map((x) => x.toLowerCase())
  return projects.filter((p) => p.tech?.some((t) => m.includes(t.toLowerCase()))).length
}

// ---------- Detalle técnico (carga dinámica) ----------
const skillModules = import.meta.glob('./TechnicalSkills/*.vue')
const availableSlugs = new Set(
  Object.keys(skillModules).map((k) => k.replace('./TechnicalSkills/', '').replace('.vue', '')),
)

const skillPanel = ref(null)
const activeSkillName = ref('')
const activeComponent = ref(null)
const lastTriedSlug = ref('')

function toSlug(name) {
  if (name === 'C++') return 'cplusplus'
  if (name === 'Android (Kotlin)') return 'kotlin'
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, '_')
    .replace(/[^\w]/g, '')
}
function hasDetail(name) {
  return availableSlugs.has(toSlug(name))
}
async function openSkill(name) {
  const slug = toSlug(name)
  lastTriedSlug.value = slug
  activeSkillName.value = name
  const key = Object.keys(skillModules).find((k) => k.endsWith(`/${slug}.vue`))
  activeComponent.value = key ? defineAsyncComponent(skillModules[key]) : null
  await nextTick()
  skillPanel.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
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
  padding: 70px 20px;
}
.contenido-seccion {
  max-width: 1100px;
  margin: auto;
}

.cabecera {
  text-align: center;
  margin-bottom: 28px;
}
h2 {
  font-size: 48px;
  font-family: 'Righteous', sans-serif;
  margin: 0 0 8px;
}
.subtitulo {
  margin: 0 auto;
  max-width: 620px;
  color: #aab3c5;
  font-size: 16px;
}

/* Cifras */
.stats {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
.stats li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 18px 10px;
  border-radius: 16px;
  background: #101624;
  border: 1px solid rgba(0, 191, 255, 0.15);
}
.stats i {
  color: #00bfff;
  font-size: 20px;
  margin-bottom: 4px;
}
.stats strong {
  font-family: 'Righteous', sans-serif;
  font-size: 34px;
  line-height: 1;
}
.stats span {
  color: #aab3c5;
  font-size: 13px;
  text-align: center;
}
.ticker {
  margin-bottom: 40px;
}

.sub {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  font-family: 'Righteous', sans-serif;
  margin: 0 0 18px;
  color: #00bfff;
}
.sub i {
  font-size: 20px;
}

/* Pestañas */
.tabs {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding-bottom: 6px;
  margin-bottom: 20px;
  scrollbar-width: thin;
  scrollbar-color: #1e90ff transparent;
}
.tab {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #101624;
  color: #aab3c5;
  font: inherit;
  font-size: 14px;
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s,
    border-color 0.2s;
}
.tab:hover {
  color: #fff;
  border-color: #1e90ff;
}
.tab.activo {
  background: #1e90ff;
  border-color: #1e90ff;
  color: #fff;
  font-weight: 600;
}
.tab small {
  font-size: 11px;
  padding: 1px 7px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
}

.panel {
  min-height: 200px;
}
.hint {
  color: #aab3c5;
  font-size: 14px;
  margin: 0 0 10px;
}
.hint i {
  color: #00bfff;
  margin-right: 6px;
}
.arbol {
  margin-bottom: 24px;
}

/* Tarjetas de skill */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 14px;
}
.skill {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  border-radius: 14px;
  background: #101624;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.skill:hover {
  border-color: rgba(0, 191, 255, 0.45);
  transform: translateY(-2px);
}
.skill-top {
  display: flex;
  align-items: center;
  gap: 12px;
}
.skill-icono {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(30, 144, 255, 0.12);
  color: #1e90ff;
  font-size: 20px;
}
.skill h4 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.3;
}

.nivel {
  display: flex;
  align-items: center;
  gap: 10px;
}
.barras {
  display: flex;
  gap: 4px;
}
.barras i {
  width: 22px;
  height: 6px;
  border-radius: 3px;
  background: #252a3a;
}
.barras i.on {
  background: linear-gradient(90deg, #1e90ff, #00bfff);
}
.nivel-txt {
  font-size: 12px;
  color: #aab3c5;
}
.nivel-vacio .nivel-txt {
  font-style: italic;
}

.skill-acciones {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}
.evidencia,
.detalle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  border-radius: 999px;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
}
.evidencia {
  background: rgba(0, 191, 255, 0.12);
  border: 1px solid rgba(0, 191, 255, 0.4);
  color: #e6f1ff;
}
.evidencia:hover {
  background: rgba(0, 191, 255, 0.25);
}
.detalle {
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
}
.detalle:hover {
  background: rgba(255, 255, 255, 0.08);
}

.prof {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
/* Separación antes de "Habilidades profesionales" */
.sub:not(:first-of-type) {
  margin-top: 48px;
}

/* Panel de detalle */
.skill-panel {
  margin-top: 24px;
  border: 1px solid #1e90ff33;
  background: #0e1422;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  overflow: hidden;
}
.skill-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
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
  color: #fff;
  font-size: 26px;
  cursor: pointer;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

@media (max-width: 700px) {
  h2 {
    font-size: 36px;
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
