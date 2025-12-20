<template>
  <div class="language-skills single-row">
    <div class="scroll-wrap">
      <div
        class="cards-row"
        role="list"
        ref="rowRef"
        @wheel.passive.prevent="onWheel"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseleave="onMouseUp"
        @mouseup="onMouseUp"
      >
        <div
          v-for="(s, i) in skills"
          :key="'lang-' + i"
          class="card item"
          role="listitem"
          @click="$emit('select', s.name)"
        >
          <div class="ring" :style="ringStyle(s.percent)">
            <div class="ring-inner">
              <i :class="s.icon" class="icon"></i>
              <div class="percent">{{ s.percent }}</div>
            </div>
          </div>
          <div class="label">{{ s.name }}</div>
          <div class="meta">
            <q-chip color="primary" text-color="white" dense square
              >{{ yearsFor(s.name) }} años</q-chip
            >
            <q-chip color="secondary" text-color="white" dense square>{{
              levelFor(s.percent)
            }}</q-chip>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  skills: { type: Array, default: () => [] },
})

function toNumber(pct) {
  const n = Number(String(pct).replace('%', ''))
  return isNaN(n) ? 0 : Math.max(0, Math.min(100, n))
}

function ringStyle(pct) {
  const v = toNumber(pct)
  const deg = (v / 100) * 360
  return {
    background: `conic-gradient(#1e90ff ${deg}deg, #182030 ${deg}deg)`,
  }
}

function yearsFor(name) {
  // Valor inventado para presentación; se puede ajustar luego
  const base = {
    Python: 3,
    Java: 1,
    'C#': 1,
    JavaScript: 3,
    'C++': 1,
    Julia: 0.5,
    Kotlin: 1,
  }
  return base[name] ?? 1
}

function levelFor(pct) {
  const v = toNumber(pct)
  if (v >= 90) return 'Experto'
  if (v >= 75) return 'Avanzado'
  if (v >= 60) return 'Intermedio'
  return 'Básico'
}

// -------- Scroll interactivo
const rowRef = ref(null)

function onWheel(e) {
  const el = rowRef.value
  if (!el) return
  // Convierte scroll vertical a horizontal para UX más natural
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    el.scrollLeft += e.deltaY
  }
}

let dragging = false
let startX = 0
let startLeft = 0
function onMouseDown(e) {
  const el = rowRef.value
  if (!el) return
  dragging = true
  startX = e.clientX
  startLeft = el.scrollLeft
  el.classList.add('dragging')
}
function onMouseMove(e) {
  if (!dragging) return
  const el = rowRef.value
  if (!el) return
  const dx = e.clientX - startX
  el.scrollLeft = startLeft - dx
}
function onMouseUp() {
  const el = rowRef.value
  if (!el) return
  dragging = false
  el.classList.remove('dragging')
}
</script>

<style scoped>
.language-skills.single-row {
  display: block;
  position: relative;
  padding: 12px 0;
}

.scroll-wrap {
  position: relative;
  padding: 0;
}

.cards-row {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 12px 4px 12px 4px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  cursor: grab;
  scroll-padding-left: 4px;
}
.cards-row::-webkit-scrollbar {
  height: 6px;
}
.cards-row::-webkit-scrollbar-track {
  background: rgba(17, 24, 42, 0.5);
  border-radius: 8px;
}
.cards-row::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, rgba(30, 144, 255, 0.6), rgba(100, 100, 255, 0.6));
  border-radius: 8px;
  transition: background 0.3s;
}
.cards-row::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(90deg, rgba(30, 144, 255, 0.8), rgba(100, 100, 255, 0.8));
}
.cards-row.dragging {
  cursor: grabbing;
  scroll-snap-type: none;
}

.card {
  background: rgba(17, 24, 42, 0.7);
  border: 1px solid rgba(30, 144, 255, 0.25);
  border-radius: 18px;
  padding: 20px 16px;
  display: grid;
  justify-items: center;
  gap: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  border-color: rgba(30, 144, 255, 0.4);
}

.item {
  min-width: 250px;
  scroll-snap-align: center;
  flex-shrink: 0;
}

.ring {
  width: clamp(100px, 11vw, 130px);
  height: clamp(100px, 11vw, 130px);
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: relative;
}
.ring-inner {
  width: clamp(80px, 9vw, 104px);
  height: clamp(80px, 9vw, 104px);
  border-radius: 50%;
  background: #0e1422;
  display: grid;
  place-items: center;
  gap: 6px;
}
.icon {
  font-size: clamp(24px, 2.8vw, 30px);
  color: #1e90ff;
  transition: transform 0.3s;
}
.card:hover .icon {
  transform: scale(1.1);
}
.percent {
  font-size: clamp(12px, 1.8vw, 14px);
  color: #cfe8ff;
  font-weight: 600;
}

.label {
  font-weight: 700;
  font-size: 16px;
  color: #e8f4ff;
  text-align: center;
  letter-spacing: 0.3px;
}

.meta {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}

@media (max-width: 640px) {
  .item {
    min-width: 200px;
  }
}
</style>
