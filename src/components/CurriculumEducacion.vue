<template>
  <div class="void">
    <div class="crop">
      <ul id="card-list" :style="{ '--count': cursos.length }">
        <li v-for="(id, index) in cursos" :key="index" :style="getAnimationDelay(index)">
          <div class="card" :style="getAnimationDelay(index)" @click="seleccionarCurso(id)">
            <span class="model-name">{{ $t('curriculumEdu.courseLabel', { n: index + 1 }) }}</span>
            <span>{{ l(infoCursos[id]?.name) }}</span>
            <span class="seleccion-icono">✔</span>
          </div>
        </li>
      </ul>
      <div class="last-circle"></div>
      <div class="second-circle"></div>
    </div>

    <div class="mask">
      <Transition name="panel" mode="out-in">
        <!-- Resumen del ciclo (sin curso seleccionado) -->
        <div v-if="!cursoSeleccionado" :key="'ciclo-' + periodoActual.periodo" class="panel">
          <div class="panel-top">
            <span class="kicker">
              {{ periodoActual.ciclo ? `${$t('curriculumEdu.cycle')} ${periodoActual.ciclo}` : $t('curriculumEdu.summer') }}
            </span>
            <span v-if="periodoActual.enCurso" class="badge-curso">{{ $t('curriculumEdu.inProgress') }}</span>
          </div>
          <h3 class="panel-titulo">{{ periodoActual.periodo }}</h3>
          <p class="panel-sub">
            {{ $t('curriculumEdu.coursesCount', { n: cursos.length }) }} · {{ $t('curriculumEdu.selectHint') }}
          </p>

          <div class="lista-cursos">
            <button
              v-for="(id, i) in cursos"
              :key="id"
              type="button"
              class="item-curso"
              @click="seleccionarCurso(id)"
            >
              <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="nombre">{{ l(infoCursos[id]?.name) }}</span>
              <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>

          <div class="avance">
            <div class="avance-top">
              <span>{{ $t('curriculumEdu.progress') }}</span>
              <span>{{ $t('curriculumEdu.totalCourses', { n: totalCursos }) }}</span>
            </div>
            <div class="avance-barra" role="group" :aria-label="$t('curriculumEdu.progress')">
              <button
                v-for="(per, i) in periodos"
                :key="per.periodo"
                type="button"
                class="segmento"
                :class="{ actual: i === indice, encurso: per.enCurso, verano: !per.ciclo }"
                :title="per.periodo"
                :aria-label="per.periodo"
                :aria-current="i === indice ? 'true' : undefined"
                @click="irAPeriodo(i)"
              ></button>
            </div>
            <div class="avance-extremos">
              <span>{{ periodos[0].periodo }}</span>
              <span>{{ periodos[periodos.length - 1].periodo }}</span>
            </div>
          </div>
        </div>

        <!-- Detalle de un curso -->
        <div v-else :key="'curso-' + cursoSeleccionado" class="panel panel-curso">
          <div class="panel-top">
            <button type="button" class="volver" @click="cursoSeleccionado = null">
              <i class="fa-solid fa-arrow-left" aria-hidden="true"></i> {{ $t('curriculumEdu.back') }}
            </button>
            <button type="button" class="cerrar" :aria-label="$t('curriculumEdu.close')" @click="cursoSeleccionado = null">
              ✕
            </button>
          </div>
          <span class="kicker">
            {{ $t('curriculumEdu.courseOf', { n: posCurso + 1, total: cursos.length }) }} · {{ periodoActual.periodo }}
          </span>
          <h3 class="panel-titulo curso-titulo">{{ l(infoCursos[cursoSeleccionado]?.name) }}</h3>
          <p class="desc">
            {{ l(infoCursos[cursoSeleccionado]?.desc) || $t('curriculumEdu.noDescription') }}
          </p>
          <template v-if="infoCursos[cursoSeleccionado]?.temas">
            <h4 class="temas-titulo">{{ $t('curriculumEdu.topics') }}</h4>
            <div class="temas">
              <span v-for="t in l(infoCursos[cursoSeleccionado].temas)" :key="t" class="tema">{{ t }}</span>
            </div>
            <p class="fuente">
              <i class="fa-solid fa-file-lines" aria-hidden="true"></i> {{ $t('curriculumEdu.source') }}
            </p>
          </template>
          <div class="nav-cursos">
            <button type="button" :disabled="posCurso === 0" @click="moverCurso(-1)">
              <i class="fa-solid fa-chevron-left" aria-hidden="true"></i> {{ $t('curriculumEdu.prevCourse') }}
            </button>
            <button type="button" :disabled="posCurso === cursos.length - 1" @click="moverCurso(1)">
              {{ $t('curriculumEdu.nextCourse') }} <i class="fa-solid fa-chevron-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </Transition>
    </div>

    <div class="center-circle">
      <div class="circle-label">
        {{ periodoActual.ciclo ? `${$t('curriculumEdu.cycle')} ${periodoActual.ciclo}` : $t('curriculumEdu.summer') }}
      </div>
      <div class="carousel-controls">
        <button type="button" class="arrow" :aria-label="$t('curriculumEdu.prev')" @click="cambiarCiclo(-1)">
          ‹
        </button>
        <span class="periodo">{{ periodoActual.periodo }}</span>
        <button type="button" class="arrow" :aria-label="$t('curriculumEdu.next')" @click="cambiarCiclo(1)">
          ›
        </button>
      </div>
      <span v-if="periodoActual.enCurso" class="en-curso">{{ $t('curriculumEdu.inProgress') }}</span>
      <span class="contador">{{ indice + 1 }} / {{ periodos.length }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { periodos, cursos as infoCursos } from 'src/data/cursos'
import { useLocalized } from 'src/composables/useLocalized'

const { l } = useLocalized()

// Empieza en el ciclo actual (el último periodo)
const indice = ref(periodos.length - 1)
const cursoSeleccionado = ref(null)

const periodoActual = computed(() => periodos[indice.value])
const cursos = computed(() => periodoActual.value?.cursos || [])

function cambiarCiclo(direccion) {
  indice.value = (indice.value + direccion + periodos.length) % periodos.length
  cursoSeleccionado.value = null
}

function getAnimationDelay(index) {
  return {
    animationDelay: `calc((var(--rotate-speed)/var(--count)) * -${index}s)`,
  }
}

function seleccionarCurso(id) {
  cursoSeleccionado.value = id
}

const totalCursos = periodos.reduce((acc, p) => acc + p.cursos.length, 0)
const posCurso = computed(() => cursos.value.indexOf(cursoSeleccionado.value))

function moverCurso(delta) {
  const i = posCurso.value + delta
  if (i >= 0 && i < cursos.value.length) cursoSeleccionado.value = cursos.value[i]
}

function irAPeriodo(i) {
  indice.value = i
  cursoSeleccionado.value = null
}
</script>

<style>
:root {
  --rotate-speed: 40;
  --easeInOutSine: cubic-bezier(0.37, 0, 0.63, 1);
  --easing: cubic-bezier(0, 0.37, 1, 0.63);
}
</style>

<style scoped>
.void {
  width: 100%;
  max-width: 100%;
  margin: auto;
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(to top, #0c101b, #0c101b);
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  z-index: 1;
}

li {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 98%;
  animation: rotateCW calc(var(--rotate-speed) * 1s) var(--easing) infinite;
}

.card {
  width: 27%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 24px;
  gap: 8px;
  background: #0c101b;
  box-shadow:
    0px 4px 12px rgba(0, 191, 255, 0.2),
    0px 16px 32px rgba(0, 191, 255, 0.15);
  border-radius: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  animation: rotateCCW calc(var(--rotate-speed) * 1s) var(--easing) infinite;
  cursor: pointer;
}

.model-name {
  font-weight: 500;
  font-size: 18px;
  color: #00bfff;
}

@keyframes rotateCW {
  from {
    transform: translateY(-50%) rotate(-45deg);
  }
  to {
    transform: translateY(-50%) rotate(-315deg);
  }
}

@keyframes rotateCCW {
  from {
    transform: rotate(45deg);
  }
  to {
    transform: rotate(315deg);
  }
}

@keyframes pulseGlow {
  from {
    background-size: 60%;
  }
  to {
    background-size: 100%;
  }
}

.center-circle {
  position: absolute;
  width: 230px;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #0c101b;
  box-shadow:
    0px 18px 36px -18px rgba(0, 191, 255, 0.3),
    0px 30px 60px -12px rgba(0, 191, 255, 0.25);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #00bfff;
  text-align: center;
  z-index: 2;
}

.carousel-controls {
  display: flex;
  align-items: center;
  gap: 12px;
}

.arrow {
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;
  color: #00bfff;
  user-select: none;
  transition: color 0.2s;
}

.arrow:hover {
  color: #00a0d4;
}

.circle-label {
  font-size: 16px;
  margin-bottom: 4px;
}

.second-circle,
.last-circle {
  position: absolute;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow:
    0px 18px 36px -18px rgba(0, 191, 255, 0.2),
    0px 30px 60px -12px rgba(0, 191, 255, 0.1);
}

.second-circle {
  width: 40%;
  background: rgba(0, 191, 255, 0.2);
  opacity: 0.5;
}

.last-circle {
  width: 66%;
  background: rgba(0, 191, 255, 0.1);
  opacity: 0.25;
}

.crop {
  -webkit-mask-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1)
  );
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  animation: pulseGlow 5s linear infinite alternate;
  background-position: 100% 50%;
  background-repeat: no-repeat;
  background-image: radial-gradient(
    100% 50% at 100% 50%,
    rgba(0, 191, 255, 0.2) 0%,
    rgba(0, 191, 255, 0) 100%
  );
}

.mask:after {
  content: '';
  position: absolute;
  width: 1px;
  height: 100%;
  right: 0;
  background-image: linear-gradient(
    180deg,
    rgba(0, 191, 255, 0) 0%,
    #00bfff 50%,
    rgba(0, 191, 255, 0) 100%
  );
}






@keyframes slideFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.seleccion-icono {
  margin-left: auto;
  font-size: 18px;
  color: #00ff88;
  opacity: 0;
  transform: scale(0.8);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.card:hover .seleccion-icono {
  opacity: 1;
  transform: scale(1);
}
/* Periodo real (ej. 2026-2) y estado */
.arrow {
  background: none;
  border: none;
  padding: 0 4px;
  font-family: inherit;
}
.periodo {
  font-family: 'Righteous', sans-serif;
  font-size: 26px;
  color: #fff;
}
.en-curso {
  margin-top: 6px;
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 11px;
  color: #4ade80;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.5);
}
.contador {
  margin-top: 6px;
  font-size: 11px;
  font-weight: 400;
  color: #6b7a93;
}
/* ================= Panel izquierdo ================= */
.panel {
  position: absolute;
  top: 50%;
  left: 0;
  width: calc(100% - 150px);
  max-height: 88%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 20px;
  background: rgba(16, 22, 36, 0.85);
  border: 1px solid rgba(0, 191, 255, 0.18);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(8px);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #00bfff transparent;
  text-align: left;
  z-index: 3;
}
.panel-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.kicker {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #00bfff;
}
.badge-curso {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 700;
  color: #4ade80;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.5);
}
.panel-titulo {
  margin: 0;
  font-family: 'Righteous', sans-serif;
  font-size: 40px;
  line-height: 1.05;
  color: #fff;
}
.curso-titulo {
  font-size: 24px;
  line-height: 1.25;
}
.panel-sub {
  margin: 0 0 4px;
  font-size: 13px;
  color: #8b97ad;
}

/* Lista de cursos del ciclo */
.lista-cursos {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.item-curso {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(255, 255, 255, 0.03);
  color: #e6f1ff;
  font: inherit;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s,
    transform 0.2s;
}
.item-curso:hover,
.item-curso:focus-visible {
  background: rgba(0, 191, 255, 0.12);
  border-color: rgba(0, 191, 255, 0.5);
  transform: translateX(4px);
  outline: none;
}
.item-curso .num {
  flex-shrink: 0;
  font-family: 'Righteous', sans-serif;
  font-size: 13px;
  color: #00bfff;
}
.item-curso .nombre {
  flex: 1;
  line-height: 1.35;
}
.item-curso i {
  font-size: 11px;
  color: #4b5873;
  transition: color 0.2s;
}
.item-curso:hover i {
  color: #00bfff;
}

/* Avance de la carrera */
.avance {
  margin-top: 8px;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.avance-top,
.avance-extremos {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #8b97ad;
}
.avance-top {
  margin-bottom: 8px;
  font-weight: 600;
}
.avance-extremos {
  margin-top: 6px;
  font-size: 11px;
  color: #5d6a82;
}
.avance-barra {
  display: flex;
  gap: 4px;
}
.segmento {
  flex: 1;
  height: 8px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: linear-gradient(90deg, #1e90ff, #00bfff);
  opacity: 0.45;
  cursor: pointer;
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.segmento.verano {
  flex: 0.4;
}
.segmento.encurso {
  background: repeating-linear-gradient(45deg, #22c55e, #22c55e 4px, #15803d 4px, #15803d 8px);
}
.segmento:hover {
  opacity: 0.8;
}
.segmento.actual {
  opacity: 1;
  transform: scaleY(1.5);
  box-shadow: 0 0 10px rgba(0, 191, 255, 0.6);
}

/* Detalle del curso */
.volver,
.cerrar {
  background: none;
  border: none;
  color: #00bfff;
  font: inherit;
  cursor: pointer;
  transition: color 0.2s;
}
.volver {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  font-size: 13px;
  font-weight: 600;
}
.cerrar {
  font-size: 18px;
}
.volver:hover,
.cerrar:hover {
  color: #fff;
}
.desc {
  margin: 0;
  font-size: 15px;
  line-height: 1.65;
  color: #c9d3e3;
}
.temas-titulo {
  margin: 8px 0 0;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #00bfff;
}
.temas {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tema {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 12px;
  line-height: 1.4;
  color: #e6f1ff;
  background: rgba(0, 191, 255, 0.12);
  border: 1px solid rgba(0, 191, 255, 0.4);
}
.fuente {
  margin: 4px 0 0;
  font-size: 11px;
  color: #6b7a93;
}
.nav-cursos {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 8px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.nav-cursos button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 999px;
  border: 1px solid rgba(0, 191, 255, 0.4);
  background: none;
  color: #e6f1ff;
  font: inherit;
  font-size: 12px;
  cursor: pointer;
}
.nav-cursos button:hover:not(:disabled) {
  background: rgba(0, 191, 255, 0.15);
}
.nav-cursos button:disabled {
  opacity: 0.3;
  cursor: default;
}

/* Transición entre ciclo y curso */
.panel-enter-active,
.panel-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.panel-enter-from {
  opacity: 0;
  transform: translate(-16px, -50%);
}
.panel-leave-to {
  opacity: 0;
  transform: translate(16px, -50%);
}

/* Celular y tablet: el panel pasa debajo del círculo */
@media (max-width: 900px) {
  .void {
    aspect-ratio: auto;
    container-type: inline-size;
  }
  .center-circle {
    top: 50cqw;
    width: 160px;
  }
  .mask {
    position: relative;
    width: 100%;
    animation: none;
    background: none;
  }
  .mask:after {
    display: none;
  }
  .panel {
    position: relative;
    top: auto;
    width: 100%;
    max-height: none;
    transform: none;
  }
  .panel-enter-from,
  .panel-leave-to {
    transform: translateY(8px);
  }
  .panel-titulo {
    font-size: 32px;
  }
}
</style>
