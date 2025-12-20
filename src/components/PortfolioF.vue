<template>
  <section id="portfolio" class="portfolio">
    <div class="contenido-seccion">
      <h2>PORTFOLIO</h2>
      <div class="galeria">
        <div class="proyecto" v-for="(proyecto, i) in proyectos" :key="i" @click="onCardClick(i)">
          <img :src="proyecto.imagen" :alt="proyecto.alt" />
          <div class="overlay">
            <h3>{{ proyecto.titulo }}</h3>
            <p>{{ proyecto.descripcion }}</p>
            <div v-if="proyecto.tecnologias?.length" class="tags">
              <span v-for="tech in proyecto.tecnologias" :key="tech" class="tag">{{ tech }}</span>
            </div>
            <a
              v-if="proyecto.link"
              class="cta"
              :href="proyecto.link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto
              <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- 3D Viewer below the portfolio gallery -->
      <div v-if="showViewer" ref="viewerRef" class="viewer-below">
        <div class="viewer-header">
          <h3>Vista 3D: Orco</h3>
          <button class="close-btn" @click="closeViewer" aria-label="Cerrar">✕</button>
        </div>
        <model-viewer
          :src="viewerUrl"
          camera-controls
          autoplay
          exposure="1"
          ar
          shadow-intensity="0.6"
          poster="/img/p1.jpg"
          style="width: 100%; height: 100%; background: #0c101b"
          @error="onViewerError"
        ></model-viewer>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const showViewer = ref(false)
const viewerUrl = ref('/img/models/orco.glb')
const viewerRef = ref(null)

function onCardClick(i) {
  // Only first card ('Animación') opens the 3D viewer
  if (i === 0) {
    viewerUrl.value = '/img/models/orco.glb'
    showViewer.value = true
    nextTick(() => {
      if (viewerRef.value) {
        viewerRef.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  }
}

function closeViewer() {
  showViewer.value = false
}

function onViewerError() {
  // Fallback to a known valid GLB if Orco fails to load
  viewerUrl.value = '/img/models/desk_lamp.glb'
}

const proyectos = [
  {
    imagen: '/img/p1.jpg',
    titulo: 'Animación',
    descripcion: 'Animación',
    alt: 'Proyecto 1',
  },
  {
    imagen: '/img/p2.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 2',
  },
  {
    imagen: '/img/p3.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 3',
  },
  {
    imagen: '/img/p4.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 4',
  },
  {
    imagen: '/img/p5.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 5',
  },
  {
    imagen: '/img/Portfolio/redes.png',
    titulo: 'Redes',
    descripcion: 'Subneteo con VLSM y CIDR',
    alt: 'Proyecto Calculadora IP',
    link: 'https://tusitio.com/calculadora-redes',
    tecnologias: ['Vue 3', 'JavaScript', 'CIDR', 'Subredes', 'CSV', 'Excel'],
  },
]
</script>

<style scoped>
.portfolio {
  --bg: #0c101b;
  --card: #0c101b;
  --text: #e6f1ff;
  --muted: #aab3c5;
  --accent: #00bfff;
  --accent-weak: rgba(0, 191, 255, 0.12);

  background-color: var(--bg);
  color: var(--text);
  padding: 60px 20px;
}

.contenido-seccion {
  max-width: 1100px;
  margin: auto;
}

h2 {
  font-size: 48px;
  font-family: 'Righteous', sans-serif;
  text-align: center;
  padding: 20px 0;
  color: var(--accent);
  letter-spacing: 2px;
}

.galeria {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.proyecto {
  position: relative;
  max-width: 340px;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  background-color: var(--card);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* Viewer shown below the gallery */
.viewer-below {
  position: relative;
  width: 100%;
  height: 600px; /* explicit height so model-viewer (height:100%) fills container */
  background: #0c101b;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  margin-top: 24px;
}

.viewer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.04);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(255, 255, 255, 0.08);
  color: #e6f1ff;
  border: none;
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.14);
}
.proyecto:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.proyecto img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.proyecto:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  text-align: center;
  background: linear-gradient(180deg, rgba(0, 191, 255, 0.85) 0%, rgba(16, 22, 36, 0.92) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  transition: opacity 0.4s ease;
  font-size: 18px;
  letter-spacing: 2px;
  opacity: 0;
  color: var(--text);
}

.overlay h3 {
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: bold;
  color: var(--text);
  transition: margin-bottom 0.4s ease;
}

.overlay p {
  font-size: 14px;
  color: var(--muted);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin: 10px 0 14px;
}

.tag {
  background: rgba(0, 191, 255, 0.18);
  color: var(--text);
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  border: 1px solid rgba(0, 191, 255, 0.45);
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  color: #0c101b;
  background: #00eaff;
  text-decoration: none;
  font-weight: 700;
  box-shadow: 0 6px 18px rgba(0, 191, 255, 0.35);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(0, 191, 255, 0.45);
}

.proyecto:hover .overlay {
  opacity: 1;
}

.proyecto:hover .overlay h3 {
  margin-bottom: 0;
}
</style>
