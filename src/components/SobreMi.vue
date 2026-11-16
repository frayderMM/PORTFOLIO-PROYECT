<template>
  <section id="sobremi" class="sobremi">
    <div class="contenido-seccion">
      <!-- Título -->
      <h2>{{ $t('sobreMi.title') }}</h2>

      <!-- Introducción -->
      <p>
        <span>{{ $t('sobreMi.intro.helloSpan', { name: 'Frayder Meza' }) }}</span>
        {{ $t('sobreMi.intro.text') }}
      </p>

      <div class="fila">
        <!-- Datos personales -->
        <div class="col">
          <div class="titulo-personal">
            <h3>{{ $t('sobreMi.personal.title') }}</h3>

            <div class="doc-buttons">
              <button @click="scrollToDoc('licencia')">🚗 Lic.</button>
            </div>
          </div>

          <ul>
            <li>
              <strong>{{ $t('sobreMi.personal.birthday') }}</strong
              >01-08-2005
            </li>
            <li>
              <strong>{{ $t('sobreMi.personal.phone') }}</strong
              >+51 925650163
            </li>
            <li>
              <strong>{{ $t('sobreMi.personal.email') }}</strong
              >mmfrayder@gmail.com
            </li>
            <li>
              <strong>{{ $t('sobreMi.personal.licencia') }}</strong
              ><span>{{ $t('sobreMi.personal.licenciaValue') }}</span>
            </li>
            <li>
              <strong>{{ $t('sobreMi.personal.website') }}</strong
              >www.mezafrayder.com
            </li>
            <li>
              <strong>{{ $t('sobreMi.personal.address') }}</strong
              >Lima - Perú
            </li>
            <li>
              <strong>{{ $t('sobreMi.personal.role') }}</strong>
              <span>{{ $t('sobreMi.personal.roleValue') }}</span>
            </li>
          </ul>
        </div>

        <!-- Intereses -->
        <div class="col">
          <h3>{{ $t('sobreMi.interests.title') }}</h3>
          <button class="audio-toggle" type="button" @click="toggleAudio">
            {{ audioEnabled ? '🔇 Desactivar audio' : '🔊 Activar audio' }}
          </button>
          <div class="contenedor-intereses">
            <div
              class="interes"
              v-for="(item, i) in intereses"
              :key="i"
              @click="toggleInteres(item.key)"
              :class="{ active: activeInterest === item.key }"
            >
              <i :class="item.icon" aria-hidden="true"></i>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Galería -->
      <div v-if="activeInterest" class="galeria">
        <h4>
          {{
            $t('sobreMi.galleryTitle', {
              label: intereses.find((i) => i.key === activeInterest)?.label || activeInterest,
            })
          }}
        </h4>

        <div class="imagenes">
          <template v-for="n in activeInterest === 'LIBROS' ? 8 : 4" :key="n">
            <!-- LIBROS (link a PDF) -->
            <a
              v-if="activeInterest === 'LIBROS'"
              :href="getLibroUrl(n)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="`/img/galeria/LIBROS/${n}.jpg`" :alt="`Libro ${n}`" class="img-libro" />
            </a>

            <!-- MMA (gif overlay al hover) -->
            <div v-else-if="activeInterest === 'MMA'" class="img-hover-wrapper">
              <img class="img-base" :src="getThumbSrc(activeInterest, n)" :alt="`MMA ${n}`" />
              <img
                class="img-hover"
                :class="{ show: gifIndex === n }"
                :src="`/img/gifs/mma/${n}.gif`"
                :alt="`GIF MMA ${n}`"
                @mouseenter="onThumbEnter(n)"
                @mouseleave="onThumbLeave"
              />
            </div>

            <!-- MUSICA: clic para reproducir / pausar. El primer cuadro invita a hacer clic -->
            <button
              v-else-if="activeInterest === 'MUSICA'"
              type="button"
              class="track"
              :class="{ playing: playingIndex === n, hint: n === 1 && !musicTouched }"
              :aria-pressed="playingIndex === n"
              :aria-label="
                playingIndex === n
                  ? $t('sobreMi.music.pause', { n })
                  : $t('sobreMi.music.play', { n })
              "
              @click="toggleTrack(n)"
            >
              <img :src="getThumbSrc(activeInterest, n)" alt="" />
              <span class="track-icon" aria-hidden="true">
                <i :class="playingIndex === n ? 'fa-solid fa-pause' : 'fa-solid fa-play'"></i>
              </span>
              <span v-if="playingIndex === n" class="eq" aria-hidden="true">
                <span></span><span></span><span></span>
              </span>
              <span v-if="n === 1 && !musicTouched" class="hint-badge" aria-hidden="true">
                <i class="fa-solid fa-hand-pointer"></i> {{ $t('sobreMi.music.hint') }}
              </span>
            </button>

            <!-- Otros -->
            <img
              v-else
              :src="getThumbSrc(activeInterest, n)"
              :alt="`${activeInterest} ${n}`"
              @mouseenter="onThumbEnter(n)"
              @mouseleave="onThumbLeave"
            />
          </template>
        </div>
      </div>

      <!-- GIF dinámico cuando el modo es 'below' (ej. MUSICA) -->
      <div class="gif-container" v-if="activeInterest && isGifBelow">
        <transition name="fade">
          <img v-if="gifVisible" :src="currentGif" alt="GIF" class="gif-animado" />
        </transition>
      </div>

      <!-- Botón descarga CV -->
      <a href="/doc/Cv_Frayder_Meza.pdf" download class="boton-descarga">
        {{ $t('sobreMi.downloadCv') }}
        <i class="fa-solid fa-download" aria-hidden="true"></i>
        <span class="overlay"></span>
      </a>
    </div>
    <!-- Documentos -->
    <div v-if="activeDoc" class="documentos">
      <!-- Licencia -->
      <div v-if="activeDoc === 'licencia'" id="licencia" class="doc-section">
        <h4>{{ $t('sobreMi.personal.licencia') }}</h4>
        <div class="doc-imgs">
          <img src="/img/documentos/licencia/01.png" alt="Licencia frontal" />
          <img src="/img/documentos/licencia/02.png" alt="Licencia posterior" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

/**
 * Intereses traducidos con `label`, pero cada uno con un `key` fijo.
 * Esto permite comparar por `key` (ej. 'MUSICA') sin importar el idioma.
 */
const intereses = computed(() => [
  { icon: 'fa-solid fa-gamepad', key: 'JUEGOS', label: t('sobreMi.interests.games') },
  { icon: 'fa-solid fa-headphones', key: 'MUSICA', label: t('sobreMi.interests.music') },
  { icon: 'fa-solid fa-plane', key: 'VIAJES', label: t('sobreMi.interests.travel') },
  { icon: 'fa-solid fa-hand-fist', key: 'MMA', label: t('sobreMi.interests.mma') },
  { icon: 'fa-solid fa-person-hiking', key: 'DEPORTE', label: t('sobreMi.interests.sport') },
  { icon: 'fa-solid fa-book', key: 'LIBROS', label: t('sobreMi.interests.books') },
  { icon: 'fa-solid fa-film', key: 'ANIMACION', label: t('sobreMi.interests.animation') },
  { icon: 'fa-solid fa-dragon', key: 'ANIME', label: t('sobreMi.interests.anime') },
])

// Interés activo
const activeInterest = ref('ANIME')

/**
 * Configuración por interés (para soportar gifs, audio, etc.)
 */
const interestConfig = {
  MUSICA: { gifMode: 'below', audio: true },
  MMA: { gifMode: 'overlay', audio: true },
  JUEGOS: { gifMode: null, audio: false },
  VIAJES: { gifMode: null, audio: false },
  DEPORTE: { gifMode: null, audio: false },
  LIBROS: { gifMode: null, audio: false },
  ANIMACION: { gifMode: null, audio: false },
  ANIME: { gifMode: null, audio: false },
}

// Estado multimedia
const currentAudio = ref(null)
const currentGif = ref(null)
const gifVisible = ref(false)
const gifIndex = ref(null)
const audioEnabled = ref(true)
const animationsEnabled = ref(true)

if (typeof window !== 'undefined') {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (prefersReduced.matches) {
    audioEnabled.value = false
    animationsEnabled.value = false
  }
}

// Saber si el modo actual es "below" (gif debajo)
const isGifBelow = computed(() => {
  const cfg = interestConfig[activeInterest.value]
  return cfg?.gifMode === 'below'
})

// 🎶 MUSICA: reproducción por clic
const playingIndex = ref(null)
const musicTouched = ref(false) // se apaga la invitación del primer cuadro tras el primer clic

function toggleTrack(n) {
  musicTouched.value = true

  // Clic sobre la que está sonando → pausar
  if (playingIndex.value === n) {
    stopAudio()
    gifVisible.value = false
    return
  }

  stopAudio()
  playingIndex.value = n

  if (audioEnabled.value) {
    const audio = new Audio(`/audio/musica/${n}.mp3`)
    audio.volume = 0.5
    audio.onended = () => {
      if (currentAudio.value === audio) {
        stopAudio()
        gifVisible.value = false
      }
    }
    currentAudio.value = audio
    audio.play().catch((err) => console.warn('Error al reproducir audio:', err))
  }

  if (animationsEnabled.value) {
    currentGif.value = `/img/gifs/musica/${n}.gif`
    gifVisible.value = true
  }
}

function toggleAudio() {
  audioEnabled.value = !audioEnabled.value
  if (!audioEnabled.value) stopAudio()
}

// Cambiar interés activo
function toggleInteres(key) {
  activeInterest.value = activeInterest.value === key ? null : key
  stopAudio()
  gifVisible.value = false
  currentGif.value = null
  gifIndex.value = null
}

// Al entrar con el mouse sobre una miniatura
function onThumbEnter(index) {
  const cfg = interestConfig[activeInterest.value]
  if (!cfg) return

  // MUSICA: reproducir audio + gif below
  if (cfg.audio && audioEnabled.value) {
    stopAudio()
    currentAudio.value = new Audio(`/audio/${activeInterest.value.toLowerCase()}/${index}.mp3`)
    currentAudio.value.volume = 0.5
    currentAudio.value.play().catch((err) => console.warn('Error al reproducir audio:', err))
  }

  // Gif debajo
  if (cfg.gifMode === 'below' && animationsEnabled.value) {
    currentGif.value = `/img/gifs/${activeInterest.value.toLowerCase()}/${index}.gif`
    gifVisible.value = true
  }

  // Gif overlay
  if (cfg.gifMode === 'overlay' && animationsEnabled.value) {
    gifIndex.value = index
  }
}

// Al salir de la miniatura
function onThumbLeave() {
  stopAudio()
  gifVisible.value = false
  gifIndex.value = null
}

// Detener audio
function stopAudio() {
  if (currentAudio.value) {
    currentAudio.value.pause()
    currentAudio.value.currentTime = 0
    currentAudio.value = null
  }
  playingIndex.value = null
}

// Ruta genérica para thumbnails
function getThumbSrc(key, n) {
  return `/img/galeria/${key}/${n}.jpg`
}

// Enlaces de libros (solo para LIBROS)
function getLibroUrl(n) {
  const links = {
    1: 'https://librerialatina.co/wp-content/uploads/2024/04/HABITOS-ATOMICOS-JAMES-CLEAR.pdf',
    2: 'https://rudyct.com/ai/Artificial%20Intelligence%20A%20Modern%20Approach,%203rd%20Edition%20by%20Stuart%20J.%20Russell,%20Peter%20Norvig-2016.pdf',
    3: 'https://anthology-of-data.science/resources/james2023islp.pdf',
    4: 'https://cpb-us-e1.wpmucdn.com/sites.psu.edu/dist/0/110933/files/2022/08/Christian-Alignment-Problem-Intro-and-Ch1.pdf',
    5: 'https://dn720002.ca.archive.org/0/items/quant_books/Quantitative%20Risk%20Management%20-%20A.%20J.%20McNeil%2C%20R.%20Frey.pdf',
    6: 'https://edu.anarcho-copy.org/Programming%20Languages/Python/Automate%20the%20Boring%20Stuff%20with%20Python.pdf',
    7: 'https://khwarizmi.org/wp-content/uploads/2021/04/Eric_Matthes_Python_Crash_Course_A_Hands.pdf',
    8: 'http://repo.darmajaya.ac.id/4546/1/The%20Strategy-Focused%20Organization_%20How%20Balanced%20Scorecard%20Companies%20Thrive%20in%20the%20New%20Business%20Environment%20%28%20PDFDrive%20%29.pdf',
  }
  return links[n] || '#'
}
const activeDoc = ref(null)
function scrollToDoc(id) {
  activeDoc.value = id

  setTimeout(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, 100)
}
</script>

<style scoped>
/* Sección principal */
.sobremi {
  background-color: #0c101b;
  color: #fff;
  padding: 50px 20px;
}

.contenido-seccion {
  max-width: 1100px;
  margin: auto;
}

/* Encabezado */
h2 {
  font-size: 48px;
  font-family: 'sans-serif';
  text-align: center;
  padding: 20px 0;
}

p {
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 20px;
}

p span {
  color: #00bfff;
  font-weight: bold;
}

/* Estructura columnas */
.fila {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.col {
  flex: 1;
  min-width: 300px;
}

/* Subtítulos */
h3 {
  font-size: 28px;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 25px;
}

/* Lista datos personales */
ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin: 12px 0;
}

ul li strong {
  display: inline-block;
  color: #00bfff;
  width: 130px;
}

ul li span {
  background-color: #00bfff;
  padding: 3px 8px;
  font-weight: bold;
  border-radius: 5px;
}

/* Intereses */
.contenedor-intereses {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.audio-toggle {
  margin-bottom: 12px;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid rgba(0, 191, 255, 0.5);
  background: #0c101b;
  color: #e6f1ff;
  cursor: pointer;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
}

.audio-toggle:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(0, 191, 255, 0.2);
}

.interes {
  width: 100px;
  height: 100px;
  background-color: #252a2e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
}

.interes:hover {
  background-color: #00bfff;
}

.interes i {
  font-size: 30px;
  margin-bottom: 10px;
}

/* Botón descarga CV */
.boton-descarga {
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #fff;
  display: block;
  margin: 20px auto;
  padding: 10px 22px;
  font-size: 16px;
  color: #fff;
  position: relative;
  z-index: 10;
  text-align: center;
  text-decoration: none;
  width: fit-content;
}

.boton-descarga .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: #00bfff;
  z-index: -1;
  transition: 1s;
}

.boton-descarga:hover .overlay {
  width: 100%;
}

/* Galería */
.galeria {
  margin-top: 20px;
  background-color: #252a2e;
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.galeria h4 {
  margin-bottom: 10px;
  font-family: 'Righteous', 'sans-serif';
  font-size: 22px;
  color: #1e90ff;
}

.imagenes {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.imagenes img {
  width: 250px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #070727;
  transition: transform 0.3s ease;
}

.imagenes img:hover {
  transform: scale(1.05);
}

/* Libros */
.img-libro {
  width: 120px !important;
  height: 200px !important;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #070727;
}

/* 🎮 MMA: reemplazo de imagen por gif con transición */
.img-hover-wrapper {
  position: relative;
  width: 250px;
  height: 100px;
}

.img-hover-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #070727;
  transition: opacity 0.4s ease-in-out;
}

.img-base {
  z-index: 1;
  opacity: 1;
}

.img-hover {
  z-index: 2;
  opacity: 0;
  pointer-events: auto;
}

.img-hover.show {
  opacity: 1;
}

/* 🎶 MUSICA: cuadros clicables */
.track {
  position: relative;
  width: 250px;
  height: 100px;
  padding: 0;
  border: 2px solid #070727;
  border-radius: 10px;
  background: none;
  cursor: pointer;
  overflow: visible;
  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}
.imagenes .track img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: none;
  border-radius: 8px;
  display: block;
  filter: brightness(0.75);
  transition: filter 0.25s ease;
}
.imagenes .track img:hover {
  transform: none;
}
.track:hover,
.track:focus-visible {
  transform: translateY(-3px);
  border-color: #1e90ff;
  outline: none;
}
.track:hover img,
.track.playing img {
  filter: brightness(1);
}
.track.playing {
  border-color: #00bfff;
  box-shadow: 0 0 18px rgba(0, 191, 255, 0.55);
}

/* Botón play/pausa centrado */
.track-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 42px;
  height: 42px;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(12, 16, 27, 0.75);
  border: 2px solid #00bfff;
  color: #fff;
  font-size: 15px;
  transition:
    transform 0.25s ease,
    background 0.25s ease;
}
.track-icon .fa-play {
  margin-left: 3px; /* centrado óptico del triángulo */
}
.track:hover .track-icon {
  transform: translate(-50%, -50%) scale(1.12);
  background: #00bfff;
}

/* Invitación en el primer cuadro: anillo que late + ícono que rebota + etiqueta */
.track.hint {
  border-color: #00bfff;
  animation: hint-ring 1.8s ease-out infinite;
}
.track.hint .track-icon {
  animation: hint-pop 1.8s ease-in-out infinite;
}
.hint-badge {
  position: absolute;
  top: -14px;
  right: -10px;
  z-index: 2;
  padding: 4px 10px;
  border-radius: 999px;
  background: #00bfff;
  color: #0c101b;
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  animation: hint-bounce 1.8s ease-in-out infinite;
  pointer-events: none;
}
@keyframes hint-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(0, 191, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 191, 255, 0);
  }
}
@keyframes hint-pop {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.18);
  }
}
@keyframes hint-bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* Ecualizador animado mientras suena */
.eq {
  position: absolute;
  right: 10px;
  bottom: 8px;
  display: flex;
  align-items: flex-end;
  gap: 3px;
  height: 16px;
}
.eq span {
  width: 4px;
  height: 100%;
  border-radius: 2px;
  background: #00eaff;
  transform-origin: bottom;
  animation: eq 0.9s ease-in-out infinite;
}
.eq span:nth-child(2) {
  animation-delay: -0.3s;
}
.eq span:nth-child(3) {
  animation-delay: -0.6s;
}
@keyframes eq {
  0%,
  100% {
    transform: scaleY(0.3);
  }
  50% {
    transform: scaleY(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .track.hint,
  .track.hint .track-icon,
  .hint-badge,
  .eq span {
    animation: none;
  }
}

/* 🎶 MUSICA: gif debajo */
.gif-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 150px;
  pointer-events: none;
}

.gif-animado {
  width: 200px;
  height: auto;
  border-radius: 10px;
}

/* Transiciones suaves */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.interes.active {
  color: #e0e0ff;
  border: 1px solid #e0e0ff;
  animation: pulse 0.6s steps(2, end) infinite;
  /* background-color: #090930; */
  box-shadow: 0 0 10px #00bfff;
}
@keyframes pulse {
  0%,
  100% {
    box-shadow:
      0 0 1px currentColor,
      0 0 8px currentColor,
      0 0 20px currentColor;
  }
  50% {
    box-shadow:
      0 0 3px currentColor,
      0 0 10px currentColor,
      0 0 30px currentColor;
  }
}

/* Título con botones */
.titulo-personal {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.doc-buttons {
  display: flex;
  gap: 10px;
}

.doc-buttons button {
  background: #00bfff;
  border: none;
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  transition: 0.2s;
}

.doc-buttons button:hover {
  transform: scale(1.05);
}

/* Sección documentos */
/* Sección documentos */
.documentos {
  margin-top: 60px;
  display: flex;
  justify-content: center;
}

/* contenedor del documento */
.doc-section {
  text-align: center;
  max-width: 900px;
  width: 100%;
}

/* titulo documento */
.doc-section h4 {
  font-size: 26px;
  margin-bottom: 25px;
  color: #00bfff;
  font-family: 'Righteous', sans-serif;
}

/* contenedor de imágenes */
.doc-imgs {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

/* tarjeta imagen */
.doc-imgs img {
  width: 340px;
  border-radius: 12px;
  border: 2px solid rgba(0, 191, 255, 0.4);
  background: #111827;
  padding: 6px;

  box-shadow:
    0 0 10px rgba(0, 191, 255, 0.3),
    0 10px 25px rgba(0, 0, 0, 0.6);

  transition: all 0.35s ease;
}

/* efecto hover */
.doc-imgs img:hover {
  transform: scale(1.05) translateY(-4px);

  border: 2px solid #00bfff;

  box-shadow:
    0 0 20px rgba(0, 191, 255, 0.8),
    0 20px 40px rgba(0, 0, 0, 0.8);
}
</style>
