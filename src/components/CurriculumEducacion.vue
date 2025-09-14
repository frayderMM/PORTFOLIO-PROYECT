<template>
  <div class="void">
    <div class="crop">
      <ul id="card-list" :style="{ '--count': cursos.length }">
        <li v-for="(id, index) in cursos" :key="index" :style="getAnimationDelay(index)">
          <div class="card" :style="getAnimationDelay(index)" @click="seleccionarCurso(id)">
            <span class="model-name">{{ $t('curriculumEdu.courseLabel', { n: index + 1 }) }}</span>
            <span>{{ $t(`curriculumEdu.courses.${id}.name`) }}</span>
            <span class="seleccion-icono">✔</span>
          </div>
        </li>
      </ul>
      <div class="last-circle"></div>
      <div class="second-circle"></div>
    </div>

    <div class="mask">
      <div v-if="cursoSeleccionado" class="contenido-curso">
        <div class="contenido-header">
          <h2>{{ $t(`curriculumEdu.courses.${cursoSeleccionado}.name`) }}</h2>
          <button
            class="cerrar"
            @click="cursoSeleccionado = null"
            :aria-label="$t('curriculumEdu.close')"
          >
            ✕
          </button>
        </div>
        <p>
          {{
            $t(
              `curriculumEdu.courses.${cursoSeleccionado}.desc`,
              {},
              { default: $t('curriculumEdu.noDescription') },
            )
          }}
        </p>
      </div>
    </div>

    <div class="center-circle">
      <div class="circle-label">{{ $t('curriculumEdu.cycle') }}</div>
      <div class="carousel-controls">
        <span class="arrow" @click="cambiarCiclo(-1)" :aria-label="$t('curriculumEdu.prev')"
          >‹</span
        >
        <span>{{ cicloActual }}</span>
        <span class="arrow" @click="cambiarCiclo(1)" :aria-label="$t('curriculumEdu.next')">›</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()

const cicloActual = ref(1)
const cursoSeleccionado = ref(null)

// Mapa de cursos por ciclo usando IDs (slugs)
const cursosPorCiclo = {
  1: [
    'lectura_redaccion',
    'pre_calculo',
    'administracion_general',
    'globalizacion_realidad_nacional',
    'estrategias_aprendizaje',
    'habilidades_actitudinales',
    'basic_english',
  ],
  2: [
    'comunicacion_literatura_i',
    'calculo_i',
    'contabilidad_general',
    'estadistica_probabilidades',
    'fisica_i',
    'fundamentos_programacion',
    'intermediate_english_i',
  ],
  3: [
    'comunicacion_literatura_ii',
    'calculo_ii',
    'base_datos',
    'intro_ciencia_datos',
    'fundamentos_logica',
    'algoritmos_estructura_datos',
    'intermediate_english_ii',
  ],
  4: [
    'marketing_ingenieria',
    'costos_presupuestos',
    'algebra_lineal_i',
    'estadistica_inferencial',
    'arquitectura_computador_i',
    'programacion_oo',
    'intermediate_english_iii',
  ],
  5: [
    'investigacion_operativa_i',
    'matematica_discreta',
    'ingenieria_software_i',
    'analisis_multivariado_i',
    'sistemas_operativos_i',
    'analisis_diseno_algoritmos',
  ],
  6: [
    'metodologia_investigacion',
    'gestion_financiera',
    'inteligencia_artificial',
    'analisis_multivariado_ii',
    'redes_comunicaciones',
    'ingenieria_procesos_negocio',
  ],
  7: [
    'planeacion_estrategica',
    'ia_avanzada',
    'computacion_grafica',
    'mineria_datos',
    'robotica',
    'computacion_paralela',
  ],
  8: [
    'gestion_innovacion_etica',
    'entrepreneurship',
    'desarrollo_web',
    'mineria_datos_avanzada',
    'diseno_evaluacion_proyectos',
    'big_data_analytics',
    'electivo_especialidad_i',
  ],
  9: [
    'inteligencia_negocios',
    'computacion_nube',
    'tesis_i',
    'desarrollo_moviles',
    'analitica_web',
    'project_management',
    'electivo_especialidad_ii',
  ],
  10: [
    'knowledge_management',
    'sgsi',
    'sistemas_informacion_gerencial',
    'it_management',
    'enterprise_architecture_management',
    'electivo_especialidad_iii',
    'tesis_ii',
  ],
}

const cursos = computed(() => cursosPorCiclo[cicloActual.value] || [])

function cambiarCiclo(direccion) {
  cicloActual.value += direccion
  if (cicloActual.value < 1) cicloActual.value = 10
  if (cicloActual.value > 10) cicloActual.value = 1
}

function getAnimationDelay(index) {
  return {
    animationDelay: `calc((var(--rotate-speed)/var(--count)) * -${index}s)`,
  }
}

function seleccionarCurso(id) {
  cursoSeleccionado.value = id
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

.contenido-curso {
  position: absolute;
  top: 10%;
  left: 0;
  width: 98%;
  height: auto;
  max-height: 40%;
  padding: 20px 24px;
  box-sizing: border-box;
  color: #ffffff;
  font-family: inherit;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 12px;
  z-index: 1;
  pointer-events: auto;
  animation: slideFadeIn 0.5s ease-out forwards;
  backdrop-filter: blur(6px);
  overflow: hidden;
}

.contenido-curso h2 {
  font-size: 20px;
  color: #00bfff;
  margin: 0;
}

.contenido-curso p {
  font-size: 15px;
  line-height: 1.6;
  color: #ccc;
  margin: 0;
}

.cerrar {
  background: none;
  border: none;
  color: #00bfff;
  font-size: 20px;
  align-self: flex-end;
  cursor: pointer;
  transition: color 0.3s ease;
}

.cerrar:hover {
  color: #ffffff;
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
</style>
