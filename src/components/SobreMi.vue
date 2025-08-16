<template>
  <section id="sobremi" class="sobremi">
    <div class="contenido-seccion">
      <h2>Sobre Mí</h2>
      <p>
        <span>Hola, soy Frayder Meza.</span>
        Estudio Ingeniería en Tecnología de la Información y Sistemas en la Universidad ESAN...
      </p>

      <div class="fila">
        <!-- Datos personales -->
        <div class="col">
          <h3>Datos Personales</h3>
          <ul>
            <li><strong>Cumpleaños</strong>01-08-2005</li>
            <li><strong>Teléfono</strong>+51 925650163</li>
            <li><strong>Email</strong>mezamorvelifrayder2005@gmail.com</li>
            <li><strong>Website</strong>www.mezafrayder.com</li>
            <li><strong>Dirección</strong>Lima - Perú</li>
            <li><strong>Cargo</strong><span>FREELANCE</span></li>
          </ul>
        </div>

        <!-- Intereses -->
        <div class="col">
          <h3>Intereses</h3>
          <div class="contenedor-intereses">
            <div
              class="interes"
              v-for="(item, i) in intereses"
              :key="i"
              @click="toggleInteres(item.label)"
            >
              <i :class="item.icon"></i>
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Galería personalizada -->
      <div v-if="activeInterest" class="galeria">
        <h4>Galería: {{ activeInterest }}</h4>
        <div class="imagenes">
          <template v-for="n in activeInterest === 'LIBROS' ? 8 : 4" :key="n">
            <!-- LIBROS -->
            <a
              v-if="activeInterest === 'LIBROS'"
              :href="getLibroUrl(n)"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img :src="`/img/galeria/LIBROS/${n}.jpg`" :alt="`Libro ${n}`" class="img-libro" />
            </a>

            <!-- MUSICA -->
            <img
              v-else-if="activeInterest === 'MUSICA'"
              :src="`/img/galeria/MUSICA/${n}.jpg`"
              :alt="`Música ${n}`"
              @mouseenter="handleAudioPlay(n)"
              @mouseleave="stopAudio"
            />

            <!-- MMA -->
            <div v-else-if="activeInterest === 'MMA'" class="img-hover-wrapper">
              <img class="img-base" :src="`/img/galeria/MMA/${n}.jpg`" :alt="`MMA ${n}`" />
              <img
                class="img-hover"
                :class="{ show: gifIndex === n }"
                :src="`/img/gifs/mma/${n}.gif`"
                :alt="`GIF MMA ${n}`"
                @mouseenter="gifIndex = n"
                @mouseleave="gifIndex = null"
              />
            </div>

            <!-- Otros intereses -->
            <img v-else :src="`/img/galeria/${activeInterest}/${n}.jpg`" :alt="`Imagen ${n}`" />
          </template>
        </div>
      </div>

      <!-- GIF dinámico solo para MUSICA -->
      <div class="gif-container" v-if="activeInterest === 'MUSICA'">
        <transition name="fade">
          <img v-if="gifVisible" :src="currentGif" alt="GIF musical" class="gif-animado" />
        </transition>
      </div>

      <!-- Botón CV -->
      <a href="/doc/cv.pdf" download class="boton-descarga">
        Descargar CV <i class="fa-solid fa-download"></i>
        <span class="overlay"></span>
      </a>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

// Estado del interés activo
const activeInterest = ref(null)

// Para audio y gif dinámico en MUSICA
const currentAudio = ref(null)
const currentGif = ref(null)
const gifVisible = ref(false)

// Para gif directo sobre imagen en MMA
const gifIndex = ref(null)

// Lista de intereses
const intereses = [
  { icon: 'fa-solid fa-gamepad', label: 'JUEGOS' },
  { icon: 'fa-solid fa-headphones', label: 'MUSICA' },
  { icon: 'fa-solid fa-plane', label: 'VIAJES' },
  { icon: 'fa-solid fa-hand-fist', label: 'MMA' },
  { icon: 'fa-solid fa-person-hiking', label: 'DEPORTE' },
  { icon: 'fa-solid fa-book', label: 'LIBROS' },
  { icon: 'fa-solid fa-car', label: 'AUTOS' },
  { icon: 'fa-solid fa-dragon', label: 'ANIME' },
]

// Alternar interés activo
const toggleInteres = (label) => {
  // Si es el mismo, lo desactiva
  activeInterest.value = activeInterest.value === label ? null : label

  // Reiniciar estados
  stopAudio()
  currentGif.value = null
  gifVisible.value = false
  gifIndex.value = null
}

// Hover sobre imagen de MUSICA: mostrar gif y reproducir audio
const handleAudioPlay = (index) => {
  if (activeInterest.value === 'MUSICA') {
    stopAudio()

    // Mostrar gif debajo
    currentGif.value = `/img/gifs/musica/${index}.gif`
    gifVisible.value = true

    // Reproducir audio
    currentAudio.value = new Audio(`/audio/musica/${index}.mp3`)
    currentAudio.value.volume = 0.5
    currentAudio.value.play().catch((err) => {
      console.warn('Error al reproducir el audio:', err)
    })
  }
}

// Detener audio y ocultar gif musical
const stopAudio = () => {
  if (currentAudio.value) {
    currentAudio.value.pause()
    currentAudio.value.currentTime = 0
    currentAudio.value = null
  }
  gifVisible.value = false
}

// Obtener enlace PDF por número (solo LIBROS)
const getLibroUrl = (n) => {
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
</style>
