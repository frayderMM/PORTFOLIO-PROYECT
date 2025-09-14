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
          <h3>{{ $t('sobreMi.personal.title') }}</h3>
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
              >mezamorvelifrayder2005@gmail.com
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

            <!-- Otros (incluye MUSICA con gif below + audio) -->
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
      <a href="/doc/cv.pdf" download class="boton-descarga">
        {{ $t('sobreMi.downloadCv') }}
        <i class="fa-solid fa-download" aria-hidden="true"></i>
        <span class="overlay"></span>
      </a>
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
  { icon: 'fa-solid fa-car', key: 'AUTOS', label: t('sobreMi.interests.cars') },
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
  AUTOS: { gifMode: null, audio: false },
  ANIME: { gifMode: null, audio: false },
}

// Estado multimedia
const currentAudio = ref(null)
const currentGif = ref(null)
const gifVisible = ref(false)
const gifIndex = ref(null)

// Saber si el modo actual es "below" (gif debajo)
const isGifBelow = computed(() => {
  const cfg = interestConfig[activeInterest.value]
  return cfg?.gifMode === 'below'
})

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
  if (cfg.audio) {
    stopAudio()
    currentAudio.value = new Audio(`/audio/${activeInterest.value.toLowerCase()}/${index}.mp3`)
    currentAudio.value.volume = 0.5
    currentAudio.value.play().catch((err) => console.warn('Error al reproducir audio:', err))
  }

  // Gif debajo
  if (cfg.gifMode === 'below') {
    currentGif.value = `/img/gifs/${activeInterest.value.toLowerCase()}/${index}.gif`
    gifVisible.value = true
  }

  // Gif overlay
  if (cfg.gifMode === 'overlay') {
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
</style>
