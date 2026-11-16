<template>
  <section id="inicio" style="scroll-margin-top: 100px" class="inicio">
    <!-- Fondo dinámico: una capa por imagen, se funden entre sí (crossfade) -->
    <div class="fondo" aria-hidden="true">
      <div
        v-for="(src, i) in cargadas"
        :key="src"
        class="fondo-img"
        :class="{
          activo: i === actual,
          previo: i === anterior,
          'zoom-out': i % 2 === 1,
        }"
        :style="{ backgroundImage: `url(${src})` }"
      ></div>
      <div class="fondo-overlay"></div>
    </div>

    <!-- Contenido encima -->
    <div class="contenido-banner">
      <!-- Botón: abre las ventanas de LinkedIn y GitHub -->
      <button
        type="button"
        class="btn-perfiles"
        :class="{ abierto: perfilesAbiertos }"
        :aria-expanded="perfilesAbiertos"
        :aria-label="perfilesAbiertos ? $t('hero.profiles.close') : $t('hero.profiles.open')"
        :title="perfilesAbiertos ? $t('hero.profiles.close') : $t('hero.profiles.open')"
        @click="perfilesAbiertos = !perfilesAbiertos"
      >
        <i
          :class="perfilesAbiertos ? 'fa-solid fa-xmark' : 'fa-solid fa-window-restore'"
          aria-hidden="true"
        ></i>
      </button>
      <div class="contenedor-img">
        <img src="/img/hero.jpg" alt="Foto de Frayder Meza" loading="lazy" />
      </div>
      <h1>Frayder Meza</h1>
      <h2>{{ $t('inicio.career1') }}</h2>
      <h2>{{ $t('inicio.career2') }}</h2>

      <div class="redes">
        <a
          href="https://web.facebook.com/profile.php?id=61559889902327"
          target="_blank"
          aria-label="Facebook"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://x.com/FrayderMeza" target="_blank" aria-label="Twitter">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.instagram.com/bray_aa_nn/" target="_blank" aria-label="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/frayder/" target="_blank" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/frayderMM" target="_blank" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>


    <Transition name="ventanas" :duration="650">
      <SocialWindows v-if="perfilesAbiertos" @close="perfilesAbiertos = false" />
    </Transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import SocialWindows from './SocialWindows.vue'

// Ventanas de LinkedIn y GitHub
const perfilesAbiertos = ref(false)
function onTecla(e) {
  if (e.key === 'Escape') perfilesAbiertos.value = false
}

// Tiempos de la animación (en ms)
const CADA_MS = 6000 // tiempo que se muestra cada imagen
const FADE_MS = 1600 // duración del fundido (debe coincidir con --fade en el CSS)

const imagenes = [
  '/img/esan.jpg',
  'https://wallpapers.com/images/hd/it-computer-code-64g46se08419uzzr.jpg',
  '/img/machuPichu.jpg',
  'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyVj9399TX5M/v1/-1x-1.webp',
  'https://portal.andina.pe/EDPfotografia2/Thumbnail/2011/09/24/000165838W.jpg',
]

// Solo entran al carrusel las imágenes que cargaron bien
// (si un enlace externo se cae, se salta en vez de mostrar un fondo vacío)
const cargadas = ref([imagenes[0]])
const actual = ref(0)
const anterior = ref(-1)

let timer = null
let limpieza = null
let ultimoCambio = 0

function preload(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = src
  })
}

function siguiente() {
  if (cargadas.value.length < 2) return
  // No cambiar si el fundido anterior no terminó
  if (Date.now() - ultimoCambio < FADE_MS) return
  ultimoCambio = Date.now()
  anterior.value = actual.value
  actual.value = (actual.value + 1) % cargadas.value.length
  // Al terminar el fundido, la capa saliente se apaga (queda oculta debajo).
  // Así, cuando le vuelva a tocar, entra desde opacidad 0 con su fundido completo.
  clearTimeout(limpieza)
  limpieza = setTimeout(() => (anterior.value = -1), FADE_MS + 50)
}

function iniciar() {
  detener()
  timer = setInterval(siguiente, CADA_MS)
}
function detener() {
  clearInterval(timer)
  timer = null
}

// Pausa cuando la pestaña no está visible (ahorra batería y evita saltos al volver)
function onVisibilidad() {
  if (document.hidden) detener()
  else if (!reducido) iniciar()
}

let reducido = false

onMounted(() => {
  reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Precarga el resto en orden y las agrega cuando están listas
  imagenes.slice(1).forEach(async (src) => {
    if (await preload(src)) cargadas.value.push(src)
  })

  document.addEventListener('visibilitychange', onVisibilidad)
  document.addEventListener('keydown', onTecla)
  if (!reducido) iniciar()
})

onBeforeUnmount(() => {
  detener()
  clearTimeout(limpieza)
  document.removeEventListener('visibilitychange', onVisibilidad)
  document.removeEventListener('keydown', onTecla)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Work+Sans:wght@100;300;400;600;800&display=swap');

.inicio {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
}

/* Fondo dinámico */
.fondo {
  --fade: 1600ms; /* = FADE_MS */
  --kenburns: 8000ms; /* un poco más que CADA_MS + fade para que nunca se detenga en pantalla */
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  background: #0c101b;
}

.fondo-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  z-index: 0;
  transition: opacity var(--fade) ease-in-out;
  will-change: opacity, transform;
}

/* La imagen saliente se queda debajo, opaca, mientras la nueva aparece encima:
   así no hay "parpadeo" oscuro entre imágenes */
.fondo-img.previo {
  opacity: 1;
  z-index: 1;
}
.fondo-img.activo {
  opacity: 1;
  z-index: 2;
}

/* Efecto Ken Burns: zoom lento. Como activo y previo comparten la misma animación,
   no se reinicia al cambiar de clase y el movimiento continúa durante el fundido */
.fondo-img.activo,
.fondo-img.previo {
  animation: zoom-in var(--kenburns) ease-out forwards;
}
.fondo-img.zoom-out.activo,
.fondo-img.zoom-out.previo {
  animation-name: zoom-out;
}

@keyframes zoom-in {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1) translate(-1%, -1%);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1.1) translate(1%, 1%);
  }
  to {
    transform: scale(1);
  }
}

/* Capa oscura fija para que el contenido siempre se lea igual */
.fondo-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  background: linear-gradient(to top, rgba(18, 24, 35, 0.45), rgba(10, 14, 25, 0.5));
}

@media (prefers-reduced-motion: reduce) {
  .fondo-img {
    transition: none;
  }
  .fondo-img.activo,
  .fondo-img.previo {
    animation: none;
  }
}

/* Botón de perfiles (LinkedIn + GitHub) */
.btn-perfiles {
  position: absolute;
  top: 18px;
  right: 18px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 2px solid #f0abfc;
  background: linear-gradient(135deg, #c026d3, #7c3aed);
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 0 0 0 rgba(192, 38, 211, 0.7);
  animation: perfiles-pulso 2s ease-out infinite;
  transition:
    transform 0.25s ease,
    background 0.25s ease;
}
.btn-perfiles:hover {
  transform: scale(1.12) rotate(-8deg);
}
.btn-perfiles:focus-visible {
  outline: 2px solid #f0abfc;
  outline-offset: 3px;
}
.btn-perfiles.abierto {
  animation: none;
  background: #1f1530;
  transform: rotate(90deg);
}
@keyframes perfiles-pulso {
  0% {
    box-shadow: 0 0 0 0 rgba(192, 38, 211, 0.7);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(192, 38, 211, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(192, 38, 211, 0);
  }
}
@media (prefers-reduced-motion: reduce) {
  .btn-perfiles {
    animation: none;
  }
}

/* Contenido encima */
.contenido-banner {
  position: relative;
  z-index: 1;
  padding: 20px;
  background-color: #0c101b;
  max-width: 350px;
  text-align: center;
  border-radius: 40px;
  transform: translateY(40px); /* baja ligeramente el bloque */
}

.contenedor-img img {
  margin-top: 40px;
  border: 10px solid #00bfff;
  display: block;
  width: 80%;
  margin: auto;
  border-radius: 100%;
  object-fit: cover;
}

h1 {
  margin-top: 10px;
  font-size: 42px;
  font-family: 'Righteous', sans-serif;
}

h2 {
  margin-top: -3em;
  font-size: 15px;
  font-weight: normal;
  font-family: 'Work Sans', sans-serif;
}

.redes {
  margin-top: -2em;
}

.redes a {
  color: #fff;
  display: inline-block;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 100%;
  width: 42px;
  height: 42px;
  line-height: 42px;
  margin: 20px 5px 0 5px;
  font-size: 20px;
  transition: 0.3s;
  text-align: center;
}

.redes a:hover {
  background-color: #3c3c3c;
  border-color: #3c3c3c;
}
</style>
