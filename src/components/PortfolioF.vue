<template>
  <section id="portfolio" class="portfolio">
    <div class="contenido-seccion">
      <header class="cabecera">
        <h2>{{ $t('portfolio.title') }}</h2>
        <p class="subtitulo">{{ $t('portfolio.subtitle', { n: projects.length }) }}</p>
      </header>

      <!-- ===================== DESTACADOS ===================== -->
      <h3 class="sub"><i class="fa-solid fa-star" aria-hidden="true"></i>{{ $t('portfolio.featured') }}</h3>
      <div class="destacados">
        <article
          v-for="p in featured"
          :id="`proj-${p.id}`"
          :key="p.id"
          class="dest"
          :class="[`cat-${p.category}`, { flash: flashId === p.id }]"
        >
          <div class="dest-media">
            <img v-if="p.image" :src="p.image" :alt="l(p.title)" loading="lazy" />
            <i v-else :class="catIcon(p.category)" aria-hidden="true"></i>
          </div>
          <div class="dest-body">
            <div class="badges">
              <span v-if="p.type" class="badge" :style="{ '--c': projectTypes[p.type].color }">{{ l(projectTypes[p.type]) }}</span>
              <span class="badge badge-cat">{{ l(catLabel(p.category)) }}</span>
              <span class="anio">{{ p.year }}</span>
            </div>
            <h4>{{ l(p.title) }}</h4>
            <p v-if="p.org" class="org">{{ p.org }}</p>
            <p class="resumen">{{ l(p.summary) }}</p>
            <ul v-if="p.highlights" class="highlights">
              <li v-for="(h, i) in l(p.highlights)" :key="i">
                <i class="fa-solid fa-check" aria-hidden="true"></i>{{ h }}
              </li>
            </ul>
            <ul class="tags">
              <li v-for="t in p.tech" :key="t">{{ t }}</li>
            </ul>
            <div class="links">
              <a v-for="lk in p.links || []" :key="lk.url" :href="lk.url" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github" aria-hidden="true"></i> {{ lk.label }}
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- ===================== EXPLORADOR ===================== -->
      <h3 id="portfolio-explorar" class="sub">
        <i class="fa-solid fa-compass" aria-hidden="true"></i>{{ $t('portfolio.explore') }}
      </h3>

      <div class="toolbar">
        <div class="busqueda">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
          <input
            v-model.trim="query"
            type="search"
            :placeholder="$t('portfolio.search')"
            :aria-label="$t('portfolio.search')"
          />
        </div>
        <div class="filtros" role="tablist" :aria-label="$t('portfolio.filterAria')">
          <button
            v-for="c in categoriesWithCount"
            :key="c.id"
            role="tab"
            class="filtro"
            :class="{ activo: category === c.id }"
            :aria-selected="category === c.id"
            @click="setCategory(c.id)"
          >
            <i :class="c.icon" aria-hidden="true"></i>
            {{ l(c.label) }}
            <small>{{ c.count }}</small>
          </button>
        </div>
      </div>

      <!-- Filtro por tecnología (viene de Habilidades) -->
      <div v-if="techFilter" class="tech-activo">
        {{ $t('portfolio.usingTech') }} <strong>{{ techFilter.label }}</strong>
        <button type="button" :aria-label="$t('portfolio.clearFilter')" @click="clearTech">
          <i class="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>
      </div>

      <p class="resultado">
        {{ sinFiltros ? $t('portfolio.resultsRest', { n: filtered.length }) : $t('portfolio.results', { n: filtered.length }) }}
      </p>

      <TransitionGroup name="card" tag="div" class="galeria">
        <article
          v-for="p in visible"
          :id="`proj-list-${p.id}`"
          :key="p.id"
          class="card"
          :class="[`cat-${p.category}`, { flash: flashId === p.id }]"
        >
          <div class="card-media">
            <img v-if="p.image" :src="p.image" :alt="l(p.title)" loading="lazy" />
            <i v-else :class="catIcon(p.category)" aria-hidden="true"></i>
            <span v-if="p.type" class="badge badge-flotante" :style="{ '--c': projectTypes[p.type].color }">{{
              l(projectTypes[p.type])
            }}</span>
          </div>
          <div class="card-body">
            <div class="meta">
              <span>{{ p.org || l(catLabel(p.category)) }}</span>
              <span>{{ p.year }}</span>
            </div>
            <h4>{{ l(p.title) }}</h4>
            <p class="resumen">{{ l(p.summary) }}</p>
            <ul class="tags">
              <li v-for="t in p.tech.slice(0, 5)" :key="t">{{ t }}</li>
              <li v-if="p.tech.length > 5" class="mas">+{{ p.tech.length - 5 }}</li>
            </ul>
            <div v-if="p.links?.length || p.model3d" class="links">
              <a v-for="lk in p.links || []" :key="lk.url" :href="lk.url" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github" aria-hidden="true"></i> {{ lk.label }}
              </a>
              <button v-if="p.model3d" type="button" @click="openViewer(p)">
                <i class="fa-solid fa-cube" aria-hidden="true"></i> {{ $t('portfolio.view3d') }}
              </button>
            </div>
          </div>
        </article>
      </TransitionGroup>

      <p v-if="!filtered.length" class="vacio">
        <i class="fa-solid fa-folder-open" aria-hidden="true"></i> {{ $t('portfolio.empty') }}
      </p>

      <div class="acciones-final">
        <button v-if="filtered.length > PAGE" type="button" class="btn-ghost" @click="showAll = !showAll">
          {{ showAll ? $t('portfolio.showLess') : $t('portfolio.showMore', { n: filtered.length - PAGE }) }}
        </button>
        <a :href="GITHUB_PROFILE + '?tab=repositories'" target="_blank" rel="noopener noreferrer" class="btn-github">
          <i class="fa-brands fa-github" aria-hidden="true"></i> {{ $t('portfolio.allOnGithub') }}
        </a>
      </div>

      <!-- Visor 3D -->
      <div v-if="viewer" ref="viewerRef" class="viewer">
        <div class="viewer-header">
          <h4>{{ $t('portfolio.viewer3d', { name: l(viewer.title) }) }}</h4>
          <button class="close-btn" :aria-label="$t('portfolio.close')" @click="viewer = null">✕</button>
        </div>
        <model-viewer
          :src="viewerSrc"
          camera-controls
          autoplay
          exposure="1"
          ar
          shadow-intensity="0.6"
          :poster="viewer.image"
          style="width: 100%; flex: 1; background: #0c101b"
          @error="viewerSrc = '/img/models/desk_lamp.glb'"
        ></model-viewer>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { projects, projectCategories, projectTypes, GITHUB_PROFILE } from 'src/data/projects'
import { useLocalized } from 'src/composables/useLocalized'
import { usePortfolioFilter } from 'src/composables/usePortfolioFilter'

const { l } = useLocalized()
const { techFilter, focusId, clearTech } = usePortfolioFilter()
const PAGE = 9

const byYear = (a, b) => (b.year || 0) - (a.year || 0)
const featured = projects.filter((p) => p.featured).sort(byYear)

const category = ref('all')
const query = ref('')
const showAll = ref(false)
const flashId = ref(null)

function norm(s) {
  return String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

// Sin filtros, la lista muestra "el resto" (los destacados ya están arriba)
const sinFiltros = computed(() => category.value === 'all' && !query.value && !techFilter.value)

const base = computed(() => {
  let list = [...projects].sort(byYear)
  if (techFilter.value) {
    const m = techFilter.value.match.map((x) => x.toLowerCase())
    list = list.filter((p) => p.tech.some((t) => m.includes(t.toLowerCase())))
  }
  if (query.value) {
    const q = norm(query.value)
    list = list.filter((p) =>
      norm([p.title.es, p.title.en, p.summary.es, p.summary.en, p.org, ...p.tech].join(' ')).includes(q),
    )
  }
  return list
})

const filtered = computed(() => {
  if (sinFiltros.value) return base.value.filter((p) => !p.featured)
  return category.value === 'all' ? base.value : base.value.filter((p) => p.category === category.value)
})
const visible = computed(() => (showAll.value ? filtered.value : filtered.value.slice(0, PAGE)))

const categoriesWithCount = computed(() =>
  projectCategories
    .map((c) => ({
      ...c,
      count: c.id === 'all' ? base.value.length : base.value.filter((p) => p.category === c.id).length,
    }))
    .filter((c) => c.id === 'all' || c.count > 0),
)

function setCategory(id) {
  category.value = id
  showAll.value = false
}

// Al cambiar el filtro de tecnología desde Habilidades: ver todo
watch(techFilter, () => {
  category.value = 'all'
  showAll.value = true
})

// Saltar a un proyecto (desde Trayectoria → Logros)
watch(focusId, async (id) => {
  if (!id) return
  category.value = 'all'
  query.value = ''
  showAll.value = true
  await nextTick()
  const el = document.getElementById(`proj-${id}`) || document.getElementById(`proj-list-${id}`)
  el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  flashId.value = id
  setTimeout(() => (flashId.value = null), 2200)
})

const catMap = Object.fromEntries(projectCategories.map((c) => [c.id, c]))
function catIcon(id) {
  return catMap[id]?.icon || 'fa-solid fa-folder'
}
function catLabel(id) {
  return catMap[id]?.label || id
}

// Visor 3D
const viewer = ref(null)
const viewerSrc = ref('')
const viewerRef = ref(null)
async function openViewer(p) {
  viewerSrc.value = p.model3d
  viewer.value = p
  await nextTick()
  viewerRef.value?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style scoped>
.portfolio {
  --accent: #00bfff;
  background-color: #0c101b;
  color: #e6f1ff;
  padding: 70px 20px;
}
.contenido-seccion {
  max-width: 1100px;
  margin: auto;
}
.cabecera {
  text-align: center;
  margin-bottom: 36px;
}
h2 {
  font-size: 48px;
  font-family: 'Righteous', sans-serif;
  color: var(--accent);
  letter-spacing: 2px;
  margin: 0 0 8px;
}
.subtitulo {
  color: #aab3c5;
  margin: 0;
}
.sub {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  font-family: 'Righteous', sans-serif;
  color: var(--accent);
  margin: 0 0 18px;
}
.sub i {
  font-size: 20px;
}
#portfolio-explorar {
  scroll-margin-top: 90px;
}
.sub + .toolbar,
.destacados + .sub {
  margin-top: 0;
}
.destacados {
  margin-bottom: 56px;
}

/* Colores por categoría */
.cat-ai {
  --cat: #a78bfa;
}
.cat-data {
  --cat: #f59e0b;
}
.cat-robotics {
  --cat: #22c55e;
}
.cat-web {
  --cat: #00bfff;
}
.cat-mobile {
  --cat: #ec4899;
}
.cat-db {
  --cat: #f97316;
}
.cat-other {
  --cat: #94a3b8;
}
.cat-creative {
  --cat: #f43f5e;
}

/* ---------- Destacados ---------- */
.destacados {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}
.dest {
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  overflow: hidden;
  background: #101624;
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition:
    transform 0.25s,
    border-color 0.25s,
    box-shadow 0.25s;
}
.dest:hover {
  transform: translateY(-4px);
  border-color: var(--cat);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45);
}
.dest-media {
  height: 110px;
  display: grid;
  place-items: center;
  font-size: 46px;
  color: var(--cat);
  background:
    radial-gradient(circle at 20% 30%, color-mix(in srgb, var(--cat) 35%, transparent), transparent 60%),
    radial-gradient(circle at 85% 80%, color-mix(in srgb, var(--cat) 20%, transparent), transparent 55%),
    #141c2e;
}
.dest-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dest-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 18px 20px 20px;
}
.dest h4 {
  margin: 10px 0 2px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
}
.org {
  margin: 0 0 8px;
  font-size: 13px;
  color: var(--cat);
  font-weight: 600;
}
.resumen {
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.55;
  color: #c9d3e3;
}
.highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 14px;
  display: grid;
  gap: 6px;
}
.highlights li {
  font-size: 13px;
  line-height: 1.45;
}
.highlights i {
  color: var(--cat);
  margin-right: 8px;
}

/* Badges */
.badges {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}
.badge {
  --c: #00bfff;
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: var(--c);
  background: color-mix(in srgb, var(--c) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--c) 50%, transparent);
}
.badge-cat {
  --c: var(--cat);
}
.anio {
  margin-left: auto;
  font-size: 12px;
  color: #aab3c5;
  font-weight: 600;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  padding: 0;
  margin: 0 0 14px;
}
.tags li {
  padding: 3px 9px;
  border-radius: 999px;
  font-size: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.tags .mas {
  color: #aab3c5;
}
.links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}
.links a,
.links button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;
  background: #1b2333;
  border: 1px solid rgba(255, 255, 255, 0.12);
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;
}
.links a:hover,
.links button:hover {
  background: #242e44;
  border-color: var(--cat, #00bfff);
}

/* ---------- Explorador ---------- */
.toolbar {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 14px;
}
.busqueda {
  position: relative;
  max-width: 420px;
}
.busqueda i {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7a93;
}
.busqueda input {
  width: 100%;
  padding: 11px 14px 11px 40px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: #101624;
  color: #fff;
  font: inherit;
  font-size: 14px;
}
.busqueda input:focus {
  outline: none;
  border-color: #1e90ff;
}
.filtros {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.filtro {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 13px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #101624;
  color: #aab3c5;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
}
.filtro:hover {
  color: #fff;
  border-color: #1e90ff;
}
.filtro.activo {
  background: #1e90ff;
  border-color: #1e90ff;
  color: #fff;
  font-weight: 600;
}
.filtro small {
  font-size: 11px;
  padding: 0 6px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
}
.tech-activo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  padding: 6px 8px 6px 14px;
  border-radius: 999px;
  background: rgba(0, 191, 255, 0.12);
  border: 1px solid rgba(0, 191, 255, 0.45);
  font-size: 14px;
}
.tech-activo button {
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  cursor: pointer;
}
.resultado {
  margin: 0 0 14px;
  font-size: 13px;
  color: #6b7a93;
}

.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
}
.card {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background: #101624;
  border: 1px solid rgba(255, 255, 255, 0.07);
  transition:
    transform 0.25s,
    border-color 0.25s;
}
.card:hover {
  transform: translateY(-3px);
  border-color: var(--cat);
}
.card-media {
  position: relative;
  height: 120px;
  display: grid;
  place-items: center;
  font-size: 36px;
  color: var(--cat);
  background:
    radial-gradient(circle at 25% 25%, color-mix(in srgb, var(--cat) 28%, transparent), transparent 60%),
    #141c2e;
  overflow: hidden;
}
.card-media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}
.card:hover .card-media img {
  transform: scale(1.05);
}
.badge-flotante {
  position: absolute;
  top: 10px;
  left: 10px;
  backdrop-filter: blur(6px);
  background: rgba(12, 16, 27, 0.75);
}
.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 14px 16px 16px;
}
.meta {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  font-size: 12px;
  color: #aab3c5;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
.meta span:first-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card h4 {
  margin: 6px 0 6px;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.3;
}
.card .resumen {
  font-size: 13px;
  color: #aab3c5;
}

/* Resaltado al saltar desde Trayectoria */
.flash {
  animation: flash 2.2s ease;
}
@keyframes flash {
  0%,
  40% {
    box-shadow:
      0 0 0 3px #fbbf24,
      0 0 30px rgba(251, 191, 36, 0.5);
  }
  100% {
    box-shadow: none;
  }
}

.vacio {
  text-align: center;
  color: #aab3c5;
  padding: 30px 0;
}
.acciones-final {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 28px;
}
.btn-ghost,
.btn-github {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 999px;
  font: inherit;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}
.btn-ghost {
  background: transparent;
  border: 2px solid #1e90ff;
  color: #fff;
}
.btn-github {
  background: #1e90ff;
  border: 2px solid #1e90ff;
  color: #fff;
}

/* Visor 3D */
.viewer {
  display: flex;
  flex-direction: column;
  height: min(600px, 70vh);
  margin-top: 28px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.viewer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: #101624;
}
.viewer-header h4 {
  margin: 0;
}
.close-btn {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
}

.card-enter-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}
.card-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.card-leave-active {
  display: none;
}

@media (max-width: 800px) {
  .destacados {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  h2 {
    font-size: 36px;
  }
  .galeria {
    grid-template-columns: 1fr;
  }
}
</style>
