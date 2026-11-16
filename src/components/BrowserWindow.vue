<template>
  <div class="ventana" :style="{ '--accent': accent }">
    <!-- Barra superior estilo navegador -->
    <div class="barra">
      <span class="puntos" aria-hidden="true"><i></i><i></i><i></i></span>
      <div class="url">
        <i class="fa-solid fa-lock" aria-hidden="true"></i>
        <span>{{ url }}</span>
      </div>
      <a
        class="abrir"
        :href="href"
        target="_blank"
        rel="noopener noreferrer"
        :title="$t('hero.profiles.openReal')"
        :aria-label="`${$t('hero.profiles.openReal')}: ${url}`"
      >
        <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
      </a>
    </div>

    <!-- Contenido que se desplaza solo -->
    <div
      ref="scroller"
      class="contenido"
      @mouseenter="pausar"
      @mouseleave="reanudar"
      @touchstart.passive="pausar"
      @touchend.passive="reanudar"
    >
      <slot />
    </div>

    <!-- Barra de progreso del desplazamiento -->
    <div class="progreso" aria-hidden="true">
      <span :style="{ transform: `scaleX(${progreso})` }"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  url: { type: String, required: true },
  href: { type: String, required: true },
  accent: { type: String, default: '#00bfff' },
  delay: { type: Number, default: 900 }, // espera antes de empezar a bajar (ms)
  speed: { type: Number, default: 45 }, // px por segundo
})

const scroller = ref(null)
const progreso = ref(0)

let raf = null
let ultimo = 0
let pausado = false
let esperaHasta = 0
let posicion = 0 // posición con decimales (scrollTop redondea)
let timerReanudar = null

function frame(t) {
  raf = requestAnimationFrame(frame)
  const el = scroller.value
  if (!el) return

  const dt = ultimo ? (t - ultimo) / 1000 : 0
  ultimo = t
  const max = el.scrollHeight - el.clientHeight
  progreso.value = max > 0 ? el.scrollTop / max : 0

  if (pausado || t < esperaHasta || max <= 0) {
    posicion = el.scrollTop
    return
  }

  posicion = Math.min(posicion + props.speed * dt, max)
  el.scrollTop = posicion

  // Llegó al final: espera y vuelve arriba suavemente para repetir
  if (posicion >= max - 1) {
    esperaHasta = t + 2500
    setTimeout(() => {
      if (!scroller.value || pausado) return
      scroller.value.scrollTo({ top: 0, behavior: 'smooth' })
      posicion = 0
      esperaHasta = performance.now() + 1800
    }, 2500)
  }
}

function pausar() {
  pausado = true
  clearTimeout(timerReanudar)
}
function reanudar() {
  clearTimeout(timerReanudar)
  // Retoma 2.5 s después de que el usuario deja de interactuar
  timerReanudar = setTimeout(() => {
    pausado = false
    posicion = scroller.value?.scrollTop ?? 0
  }, 2500)
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  esperaHasta = performance.now() + props.delay
  raf = requestAnimationFrame(frame)
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  clearTimeout(timerReanudar)
})
</script>

<style scoped>
.ventana {
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
  background: #0c101b;
  border: 2px solid rgba(255, 255, 255, 0.85);
  box-shadow:
    0 24px 60px rgba(0, 0, 0, 0.55),
    0 0 0 1px rgba(0, 0, 0, 0.3);
}

.barra {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  background: #161b26;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.puntos {
  display: flex;
  gap: 6px;
}
.puntos i {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #ff5f57;
}
.puntos i:nth-child(2) {
  background: #febc2e;
}
.puntos i:nth-child(3) {
  background: #28c840;
}
.url {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  background: #0c101b;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #c9d3e3;
  font-size: 13px;
  font-family: 'Work Sans', sans-serif;
}
.url span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.url i {
  color: #28c840;
  font-size: 11px;
}
.abrir {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 8px;
  color: #fff;
  background: var(--accent);
  text-decoration: none;
  font-size: 13px;
  transition: transform 0.2s;
}
.abrir:hover {
  transform: scale(1.1);
}

.contenido {
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--accent) transparent;
}

.progreso {
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
}
.progreso span {
  display: block;
  height: 100%;
  background: var(--accent);
  transform-origin: left;
  transition: transform 0.1s linear;
}
</style>
