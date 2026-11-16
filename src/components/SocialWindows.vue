<template>
  <div class="ventanas" @click.self="$emit('close')">
    <button
      type="button"
      class="cerrar-movil"
      :aria-label="$t('hero.profiles.close')"
      @click="$emit('close')"
    >
      <i class="fa-solid fa-xmark" aria-hidden="true"></i>
    </button>

    <!-- ================= LINKEDIN (izquierda) ================= -->
    <BrowserWindow
      class="lado izq"
      :url="LINKEDIN_URL.replace('https://www.', '')"
      :href="LINKEDIN_URL"
      accent="#0a66c2"
      :delay="1100"
    >
      <div class="li">
        <!-- Tarjeta principal -->
        <section class="li-card li-top">
          <div class="li-banner">
            <img class="li-banner-img" src="/img/linkedin/banner.jpg" alt="" />
            <img class="li-avatar" src="/img/linkedin/avatar.png" alt="" />
          </div>

          <div class="li-info">
            <div class="li-principal">
              <h3>{{ linkedin.nombre }}</h3>
              <p class="li-titular">{{ linkedin.titular }}</p>
              <p class="li-ubicacion">
                {{ linkedin.ubicacion }} ·
                <a :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">{{
                  $t('hero.profiles.contactInfo')
                }}</a>
              </p>
              <a class="li-contactos" :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
                {{ $t('hero.profiles.contacts', { n: linkedin.contactos }) }}
              </a>
            </div>
            <ul class="li-orgs">
              <li v-for="(org, i) in linkedin.organizaciones" :key="i">
                <img :src="org.logo" alt="" />
                <span>{{ org.nombre }}</span>
              </li>
            </ul>
          </div>

          <div class="li-botones">
            <a :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer" class="li-btn primario">
              <i class="fa-solid fa-user-plus" aria-hidden="true"></i> {{ $t('hero.profiles.connect') }}
            </a>
            <a href="#contacto" class="li-btn" @click.prevent="irA('contacto')">
              {{ $t('hero.profiles.message') }}
            </a>
          </div>

          <div class="li-open">
            <strong>{{ $t('hero.profiles.openToWork') }}</strong>
            <span>{{ linkedin.ubicacion }}</span>
            <a :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">{{
              $t('hero.profiles.showDetails')
            }}</a>
          </div>
        </section>

        <!-- Experiencia -->
        <section class="li-card">
          <h4>{{ $t('hero.profiles.experience') }}</h4>
          <ul class="li-lista">
            <li v-for="(e, i) in linkedin.experiencia" :key="i">
              <img class="li-logo" :src="e.logo" alt="" />
              <div>
                <strong>{{ e.cargo }}</strong>
                <span>{{ e.empresa }}</span>
                <small
                  >{{ e.inicioTexto }} - {{ $t('hero.profiles.present') }} ·
                  {{ duracion(e.inicio) }}</small
                >
                <p>{{ e.descripcion }}</p>
              </div>
            </li>
          </ul>
        </section>

        <!-- Educación -->
        <section class="li-card">
          <h4>{{ $t('hero.profiles.education') }}</h4>
          <ul class="li-lista">
            <li v-for="(ed, i) in linkedin.educacion" :key="i">
              <img class="li-logo" :src="ed.logo" alt="" />
              <div>
                <strong>{{ ed.institucion }}</strong>
                <span>{{ ed.titulo }}</span>
                <small>{{ ed.periodo }}</small>
              </div>
            </li>
          </ul>
        </section>

        <!-- Licencias y certificaciones -->
        <section class="li-card">
          <h4>{{ $t('hero.profiles.certifications') }} ({{ linkedin.totalCertificaciones }})</h4>
          <ul class="li-lista">
            <li v-for="(c, i) in linkedin.certificaciones" :key="i">
              <img class="li-logo li-logo-sap" :src="c.logo" alt="" />
              <div>
                <strong>{{ c.nombre }}</strong>
                <span>{{ c.emisor }}</span>
                <small>{{ $t('hero.profiles.issued') }} {{ c.fecha }}</small>
                <small>{{ $t('hero.profiles.credentialId') }} {{ c.id }}</small>
                <a class="li-credencial" :href="CERTS_URL" target="_blank" rel="noopener noreferrer">
                  {{ $t('hero.profiles.showCredential') }}
                  <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
                <p class="li-aptitudes">💎 {{ c.aptitudes }}</p>
              </div>
            </li>
          </ul>
          <a class="li-mostrar-todo" :href="CERTS_URL" target="_blank" rel="noopener noreferrer">
            {{ $t('hero.profiles.showAllCerts', { n: linkedin.totalCertificaciones }) }}
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </section>

        <a class="li-ver-mas" :href="LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
          {{ $t('hero.profiles.seeFullLinkedin') }}
          <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    </BrowserWindow>

    <!-- ================= GITHUB (derecha) ================= -->
    <BrowserWindow
      class="lado der"
      :url="`github.com/${GITHUB_USER}`"
      :href="`https://github.com/${GITHUB_USER}`"
      accent="#2ea043"
      :delay="1500"
    >
      <div class="gh">
        <div v-if="cargando" class="gh-estado">
          <i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i>
          {{ $t('hero.profiles.loading') }}
        </div>

        <template v-else>
          <div class="gh-perfil">
            <img class="gh-avatar" :src="usuario?.avatar_url || '/img/hero.jpg'" alt="" />
            <div>
              <h3>{{ usuario?.name || 'Frayder Meza' }}</h3>
              <p class="gh-login">{{ GITHUB_USER }}</p>
            </div>
          </div>
          <p v-if="usuario?.bio" class="gh-bio">{{ usuario.bio }}</p>
          <p v-if="usuario" class="gh-stats">
            <i class="fa-solid fa-user-group" aria-hidden="true"></i>
            <strong>{{ usuario.followers }}</strong> {{ $t('hero.profiles.followers') }} ·
            <strong>{{ usuario.following }}</strong> {{ $t('hero.profiles.following') }} ·
            <i class="fa-solid fa-book-bookmark" aria-hidden="true"></i>
            <strong>{{ usuario.public_repos }}</strong> {{ $t('hero.profiles.repos') }}
          </p>

          <h4 class="gh-titulo">{{ $t('hero.profiles.repositories') }}</h4>

          <p v-if="error" class="gh-estado">
            {{ $t('hero.profiles.error') }}
          </p>

          <ul class="gh-repos">
            <li v-for="r in repos" :key="r.id">
              <a :href="r.html_url" target="_blank" rel="noopener noreferrer" class="gh-repo-nombre">
                <i class="fa-regular fa-folder" aria-hidden="true"></i> {{ r.name }}
              </a>
              <p v-if="r.description">{{ r.description }}</p>
              <div class="gh-meta">
                <span v-if="r.language">
                  <i class="lang-dot" :style="{ background: colorLenguaje(r.language) }"></i>
                  {{ r.language }}
                </span>
                <span v-if="r.stargazers_count">
                  <i class="fa-regular fa-star" aria-hidden="true"></i> {{ r.stargazers_count }}
                </span>
                <span>{{ $t('hero.profiles.updated') }} {{ fecha(r.pushed_at) }}</span>
              </div>
            </li>
          </ul>

          <a class="gh-ver-mas" :href="`https://github.com/${GITHUB_USER}?tab=repositories`" target="_blank" rel="noopener noreferrer">
            {{ $t('hero.profiles.seeAllRepos') }}
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </a>
        </template>
      </div>
    </BrowserWindow>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import BrowserWindow from './BrowserWindow.vue'

const emit = defineEmits(['close'])

const LINKEDIN_URL = 'https://www.linkedin.com/in/frayder/'
const CERTS_URL = 'https://www.linkedin.com/in/frayder/details/certifications/'
const GITHUB_USER = 'frayderMM'

// Datos de tu perfil de LinkedIn (cópialos de LinkedIn cuando lo actualices)
const linkedin = {
  nombre: 'Frayder MEZA MORVELI',
  titular: 'Practicante Pre profesional en Proyecto Transforma - Oracle en Universidad ESAN',
  ubicacion: 'Área metropolitana de Lima',
  contactos: 69,
  organizaciones: [
    { nombre: 'Universidad ESAN', logo: '/img/linkedin/esan.png' },
    { nombre: 'Universidad ESAN', logo: '/img/linkedin/esan.png' },
  ],
  experiencia: [
    {
      cargo: 'Practicante Pre profesional en Proyecto Transforma - Oracle',
      empresa: 'Universidad ESAN',
      logo: '/img/linkedin/esan.png',
      inicio: '2026-04', // año-mes: la duración se calcula sola
      inicioTexto: 'abr. de 2026',
      descripcion: 'Bases de Datos Oracle y Administración de base de datos de Oracle',
    },
  ],
  educacion: [
    {
      institucion: 'Universidad ESAN',
      titulo: 'Ingeniería, Programación informática, aplicaciones específicas /diseño web',
      periodo: '2022 – Actualidad',
      logo: '/img/linkedin/esan.png',
    },
  ],
  totalCertificaciones: 5,
  certificaciones: [
    {
      nombre: 'Creating Applications and Extensions using SAP Build Code – Record of Achievement',
      emisor: 'SAP',
      logo: '/img/linkedin/sap.png',
      fecha: 'ago. de 2025',
      id: 'beae7188-2e5a-49a7-80c1-6e91c52c8fc0',
      aptitudes: 'Configuración de entornos en SAP Build Code, Integración SAP y 3 aptitudes más',
    },
    {
      nombre: 'Develop and Automate with SAP Build – Record of Achievement',
      emisor: 'SAP',
      logo: '/img/linkedin/sap.png',
      fecha: 'ago. de 2025',
      id: 'c6c9775f-8ffd-4b3e-807f-80f46a0885a4',
      aptitudes:
        'Desarrollo de aplicaciones low-code/no-code, Configuración de entornos en SAP Build Code y 3 aptitudes más',
    },
  ],
}

const { locale, t } = useI18n()
const usuario = ref(null)
const repos = ref([])
const cargando = ref(true)
const error = ref(false)

function irA(id) {
  emit('close')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// Duración al estilo LinkedIn: "8 meses", "1 año 2 meses" (cuenta el mes actual)
function duracion(inicio) {
  const [a, m] = inicio.split('-').map(Number)
  const hoy = new Date()
  const total = (hoy.getFullYear() - a) * 12 + (hoy.getMonth() + 1 - m) + 1
  const anios = Math.floor(total / 12)
  const meses = total % 12
  const partes = []
  if (anios) partes.push(`${anios} ${t(anios === 1 ? 'hero.profiles.year' : 'hero.profiles.years')}`)
  if (meses) partes.push(`${meses} ${t(meses === 1 ? 'hero.profiles.month' : 'hero.profiles.months')}`)
  return partes.join(' ')
}

function fecha(iso) {
  return new Date(iso).toLocaleDateString(locale.value === 'es' ? 'es-PE' : 'en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const coloresLenguaje = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  Kotlin: '#A97BFF',
  'C#': '#178600',
  'C++': '#f34b7d',
  C: '#555555',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c',
  'Jupyter Notebook': '#DA5B0B',
  Julia: '#a270ba',
  TSQL: '#e38c00',
}
function colorLenguaje(l) {
  return coloresLenguaje[l] || '#8b949e'
}

// Datos públicos de GitHub. Se guardan 30 min en sessionStorage para no gastar
// el límite de la API (60 peticiones/hora por visitante).
const CACHE_KEY = 'gh-cache-v1'

async function cargarGithub() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (raw) {
      const c = JSON.parse(raw)
      if (Date.now() - c.t < 30 * 60 * 1000) {
        usuario.value = c.usuario
        repos.value = c.repos
        return
      }
    }
  } catch {
    // sin sessionStorage: se pide a la API
  }

  try {
    const base = `https://api.github.com/users/${GITHUB_USER}`
    const [u, r] = await Promise.all([
      fetch(base).then((res) => (res.ok ? res.json() : Promise.reject(res.status))),
      fetch(`${base}/repos?sort=pushed&per_page=12`).then((res) =>
        res.ok ? res.json() : Promise.reject(res.status),
      ),
    ])
    usuario.value = u
    repos.value = r.filter((x) => !x.fork)
    try {
      sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ t: Date.now(), usuario: u, repos: repos.value }),
      )
    } catch {
      // sin sessionStorage: no pasa nada
    }
  } catch {
    error.value = true
  }
}

onMounted(async () => {
  await cargarGithub()
  cargando.value = false
})
</script>

<style scoped>
/* Escritorio: una ventana a cada lado de la tarjeta central */
.ventanas {
  position: absolute;
  inset: 90px 32px 32px;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 420px 1fr;
  gap: 32px;
  align-items: center;
  pointer-events: none;
}
.lado {
  pointer-events: auto;
  height: min(600px, calc(100vh - 140px));
  max-width: 600px;
  width: 100%;
}
.izq {
  grid-column: 1;
  justify-self: end;
  transform-origin: right center;
}
.der {
  grid-column: 3;
  justify-self: start;
  transform-origin: left center;
}

/* Celular / tablet: no hay espacio a los lados → se muestran como panel encima */
@media (max-width: 1100px) {
  .ventanas {
    position: fixed;
    inset: 0;
    z-index: 200;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 72px 16px 16px;
    overflow-y: auto;
    background: rgba(5, 8, 15, 0.85);
    backdrop-filter: blur(6px);
    pointer-events: auto;
  }
  .lado {
    flex-shrink: 0;
    height: 70vh;
    max-width: 640px;
    margin: 0 auto;
  }
}

/* Botón cerrar: solo en celular, donde las ventanas tapan la pantalla */
.cerrar-movil {
  display: none;
}
@media (max-width: 1100px) {
  .cerrar-movil {
    display: grid;
    place-items: center;
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 1;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: #1e90ff;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
}

/* Animación de apertura: las ventanas salen desde la tarjeta hacia los lados */
.ventanas.ventanas-enter-active .lado,
.ventanas.ventanas-leave-active .lado {
  transition:
    transform 0.6s cubic-bezier(0.22, 1.2, 0.36, 1),
    opacity 0.45s ease;
}
.ventanas.ventanas-enter-active .der,
.ventanas.ventanas-leave-active .der {
  transition-delay: 0.08s;
}
.ventanas.ventanas-enter-from .izq,
.ventanas.ventanas-leave-to .izq {
  opacity: 0;
  transform: translateX(45%) scale(0.5);
}
.ventanas.ventanas-enter-from .der,
.ventanas.ventanas-leave-to .der {
  opacity: 0;
  transform: translateX(-45%) scale(0.5);
}
@media (max-width: 1100px) {
  .ventanas.ventanas-enter-active,
  .ventanas.ventanas-leave-active {
    transition: opacity 0.3s ease;
  }
  .ventanas.ventanas-enter-from,
  .ventanas.ventanas-leave-to {
    opacity: 0;
  }
  .ventanas.ventanas-enter-from .izq,
  .ventanas.ventanas-leave-to .izq,
  .ventanas.ventanas-enter-from .der,
  .ventanas.ventanas-leave-to .der {
    transform: translateY(30px);
  }
}

/* ---------- LinkedIn ---------- */
.li {
  background: #f4f2ee;
  color: rgba(0, 0, 0, 0.9);
  min-height: 100%;
  padding: 10px 10px 16px;
  font-family: -apple-system, 'Segoe UI', Roboto, 'Work Sans', sans-serif;
}
.li-card {
  background: #fff;
  border: 1px solid #dcdad5;
  border-radius: 10px;
  padding: 16px 18px;
  margin-bottom: 10px;
}
.li-card h4 {
  margin: 0 0 14px;
  font-size: 19px;
  font-weight: 600;
}

/* Portada + foto (posiciones tomadas de tu perfil real) */
.li-top {
  padding: 0 0 16px;
  overflow: hidden;
}
.li-banner {
  position: relative;
  aspect-ratio: 902 / 225;
  margin-bottom: 9%;
}
.li-banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.li-avatar {
  position: absolute;
  left: 3.4%;
  top: 44.9%;
  width: 22%;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
  background: #fff;
}
.li-info {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 0 18px;
}
.li-principal h3 {
  margin: 0 0 4px;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.25;
}
.li-titular {
  margin: 0 0 4px;
  font-size: 14px;
  line-height: 1.4;
}
.li-ubicacion {
  margin: 0 0 4px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.6);
}
.li-ubicacion a,
.li-contactos,
.li-open a {
  color: #0a66c2;
  font-weight: 600;
  text-decoration: none;
}
.li-contactos {
  font-size: 13px;
}
.li-orgs {
  list-style: none;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
}
.li-orgs li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 13px;
  font-weight: 600;
}
.li-orgs img {
  width: 30px;
  height: 30px;
  border-radius: 4px;
}
.li-botones {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 12px 18px 0;
}
.li-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid #0a66c2;
  color: #0a66c2;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}
.li-btn.primario {
  background: #0a66c2;
  color: #fff;
}
.li-open {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 14px 18px 0;
  padding: 10px 14px;
  border-radius: 8px;
  background: #dde7f1;
  font-size: 13px;
  max-width: 340px;
}

/* Listas: experiencia, educación, certificaciones */
.li-lista {
  list-style: none;
  margin: 0;
  padding: 0;
}
.li-lista li {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-top: 1px solid #e8e8e8;
}
.li-lista li:first-child {
  border-top: none;
  padding-top: 0;
}
.li-logo {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  object-fit: contain;
}
.li-logo-sap {
  width: 40px;
  height: 28px;
  margin: 2px 4px 0;
}
.li-lista strong,
.li-lista span,
.li-lista small {
  display: block;
}
.li-lista strong {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
}
.li-lista span {
  font-size: 14px;
}
.li-lista small {
  color: rgba(0, 0, 0, 0.6);
  font-size: 13px;
  line-height: 1.5;
}
.li-lista p {
  margin: 8px 0 0;
  font-size: 14px;
  line-height: 1.45;
}
.li-credencial {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
  padding: 5px 14px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 999px;
  color: rgba(0, 0, 0, 0.75);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.li-lista .li-aptitudes {
  font-size: 13px;
  font-weight: 600;
}
.li-mostrar-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 4px -18px -16px;
  padding: 12px;
  border-top: 1px solid #e8e8e8;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
}
.li-ver-mas {
  display: block;
  padding: 10px;
  text-align: center;
  border-radius: 999px;
  background: #0a66c2;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

@media (max-width: 520px) {
  .li-info {
    flex-direction: column;
    gap: 8px;
  }
}

/* ---------- GitHub ---------- */
.gh {
  background: #0d1117;
  color: #e6edf3;
  min-height: 100%;
  padding: 18px 18px 20px;
  font-family: -apple-system, 'Segoe UI', 'Work Sans', sans-serif;
}
.gh-estado {
  color: #8b949e;
  font-size: 14px;
  text-align: center;
  padding: 24px 0;
}
.gh-perfil {
  display: flex;
  align-items: center;
  gap: 14px;
}
.gh-avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 1px solid #30363d;
  object-fit: cover;
}
.gh-perfil h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
}
.gh-login {
  margin: 2px 0 0;
  color: #8b949e;
  font-size: 16px;
}
.gh-bio {
  margin: 14px 0 0;
  font-size: 14px;
  line-height: 1.5;
}
.gh-stats {
  margin: 10px 0 0;
  font-size: 13px;
  color: #8b949e;
}
.gh-stats strong {
  color: #e6edf3;
}
.gh-stats i {
  margin-right: 2px;
}
.gh-titulo {
  margin: 20px 0 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid #30363d;
  font-size: 16px;
  font-weight: 600;
}
.gh-repos {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}
.gh-repos li {
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 12px 14px;
}
.gh-repo-nombre {
  color: #4493f8;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  word-break: break-word;
}
.gh-repo-nombre:hover {
  text-decoration: underline;
}
.gh-repos p {
  margin: 6px 0 0;
  font-size: 13px;
  color: #8b949e;
  line-height: 1.45;
}
.gh-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 14px;
  margin-top: 8px;
  font-size: 12px;
  color: #8b949e;
}
.lang-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
  vertical-align: -1px;
}
.gh-ver-mas {
  display: block;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  margin: 14px 0 0;
  border: 1px solid #30363d;
  background: #21262d;
  color: #e6edf3;
}
</style>
