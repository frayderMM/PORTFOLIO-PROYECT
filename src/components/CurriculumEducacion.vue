<template>
  <div class="void">
    <div class="crop">
      <ul id="card-list" :style="{ '--count': cursos.length }">
        <li v-for="(curso, index) in cursos" :key="index" :style="getAnimationDelay(index)">
          <div class="card" :style="getAnimationDelay(index)" @click="seleccionarCurso(curso)">
            <span class="model-name">Curso {{ index + 1 }}</span>
            <span>{{ curso }}</span>
            <span class="seleccion-icono">✔</span>
            <!-- icono de selección -->
          </div>
        </li>
      </ul>
      <div class="last-circle"></div>
      <div class="second-circle"></div>
    </div>
    <div class="mask">
      <div v-if="cursoSeleccionado" class="contenido-curso">
        <div class="contenido-header">
          <h2>{{ cursoSeleccionado }}</h2>
          <button class="cerrar" @click="cursoSeleccionado = null">✕</button>
        </div>
        <p>{{ descripcionesCurso[cursoSeleccionado] || 'Descripción no disponible.' }}</p>
      </div>
    </div>

    <div class="center-circle">
      <div class="circle-label">Ciclo</div>
      <div class="carousel-controls">
        <span class="arrow" @click="cambiarCiclo(-1)">‹</span>
        <span>{{ cicloActual }}</span>
        <span class="arrow" @click="cambiarCiclo(1)">›</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cicloActual = ref(1)
const descripcionesCurso = {
  // Ciclo 1
  'Lectura y Redacción':
    'Aprende a escribir ensayos, artículos y textos argumentativos de forma clara y coherente.',
  'Pre Cálculo': 'Fundamentos matemáticos esenciales para cursar cálculo diferencial e integral.',
  'Administración General':
    'Introduce los principios básicos de la administración en organizaciones modernas.',
  'Globalización y Realidad Nacional':
    'Analiza los efectos de la globalización en el contexto político, económico y social del país.',
  'Estrategias de Aprendizaje':
    'Desarrolla técnicas efectivas para mejorar el rendimiento académico y personal.',
  'Habilidades Actitudinales':
    'Fortalece habilidades blandas como trabajo en equipo, liderazgo y comunicación asertiva.',
  'Basic English (*)':
    'Curso básico de inglés enfocado en comprensión oral y escrita en situaciones cotidianas.',

  // Ciclo 2
  'Comunicación y literatura I':
    'Explora géneros literarios y técnicas de análisis crítico de textos.',
  'Cálculo I': 'Estudia límites, derivadas y aplicaciones básicas del cálculo diferencial.',
  'Contabilidad General': 'Aprende los principios fundamentales de la contabilidad financiera.',
  'Estadística y Probabilidades':
    'Introduce conceptos de estadística descriptiva y teoría de probabilidades.',
  'Física I': 'Estudia mecánica clásica y leyes fundamentales del movimiento.',
  'Fundamentos de Programación':
    'Aprende lógica computacional y programación estructurada con un lenguaje de alto nivel.',
  'Intermediate English I':
    'Curso intermedio de inglés con énfasis en lectura, vocabulario y conversación.',

  // Ciclo 3
  'Comunicación y literatura II':
    'Analiza textos complejos y desarrolla habilidades avanzadas de escritura crítica.',
  'Cálculo II': 'Introduce el cálculo integral, técnicas de integración y sus aplicaciones.',
  'Base de Datos': 'Diseña e implementa bases de datos relacionales utilizando SQL.',
  'Introducción a la Ciencia de Datos':
    'Explora los fundamentos y aplicaciones de la ciencia de datos.',
  'Fundamentos de lógica':
    'Estudia lógica proposicional, lógica de predicados y razonamiento lógico.',
  'Algoritmos y estructura de datos':
    'Aprende a diseñar algoritmos eficientes y a utilizar estructuras de datos fundamentales.',
  'Intermediate English II':
    'Refuerza habilidades intermedias del idioma inglés con enfoque comunicativo.',

  // Ciclo 4
  'Marketing para Ingeniería':
    'Comprende el rol del marketing en el desarrollo de productos tecnológicos.',
  'Costos y Presupuestos':
    'Aprende a calcular y controlar los costos en proyectos empresariales y tecnológicos.',
  'Álgebra lineal I':
    'Introduce matrices, vectores, transformaciones lineales y sistemas de ecuaciones.',
  'Estadística Inferencial':
    'Estudia métodos para inferir conclusiones a partir de datos muestrales.',
  'Arquitectura del computador I':
    'Conoce la estructura interna y funcionamiento del hardware computacional.',
  'Programación Orientada a Objetos':
    'Diseña software modular aplicando principios de orientación a objetos.',
  'Intermediate English III':
    'Curso final intermedio de inglés con énfasis en escritura académica y presentación oral.',

  // Ciclo 5
  'Investigación operativa I':
    'Modela y resuelve problemas de optimización aplicando programación lineal.',
  'Matemática Discreta':
    'Estudia estructuras matemáticas como grafos, conjuntos y funciones discretas.',
  'Ingeniería de software I':
    'Introduce el ciclo de vida del software y metodologías de desarrollo ágil.',
  'Análisis Multivariado I': 'Aplica técnicas estadísticas a datos con múltiples variables.',
  'Sistemas operativos I':
    'Explora conceptos como procesos, memoria, archivos y sistemas multitarea.',
  'Análisis y Diseño de Algoritmos':
    'Desarrolla algoritmos eficientes y analiza su complejidad computacional.',

  // Ciclo 6
  'Metodología de la Investigación':
    'Diseña proyectos de investigación científica con enfoque académico y técnico.',
  'Gestión Financiera':
    'Analiza decisiones financieras en empresas basadas en riesgos y rentabilidad.',
  'Inteligencia Artificial':
    'Introduce técnicas como machine learning, lógica difusa y redes neuronales.',
  'Análisis Multivariado II':
    'Profundiza en métodos multivariantes para análisis de datos complejos.',
  'Redes de Comunicaciones':
    'Estudia protocolos, arquitecturas y funcionamiento de redes de datos.',
  'Ingeniería de Procesos de Negocios':
    'Optimiza procesos empresariales mediante técnicas de modelado y rediseño.',

  // Ciclo 7
  'Planeación Estratégica':
    'Define estrategias organizacionales alineadas con la misión y visión empresarial.',
  'Inteligencia Artificial Avanzada':
    'Explora técnicas avanzadas como deep learning y algoritmos genéticos.',
  'Computación Gráfica': 'Genera e interpreta gráficos computacionales en 2D y 3D.',
  'Minería de Datos': 'Descubre patrones útiles en grandes volúmenes de datos.',
  Robótica: 'Diseña, programa y controla robots aplicando sensores y actuadores.',
  'Computación paralela':
    'Estudia arquitecturas y algoritmos para procesamiento simultáneo de datos.',

  // Ciclo 8
  'Gestión y Desarrollo de la Innovación y Ética':
    'Promueve la innovación tecnológica bajo principios éticos y sostenibles.',
  Entrepreneurship: 'Desarrolla competencias para emprender proyectos tecnológicos y de negocio.',
  'Desarrollo de Aplicaciones web':
    'Crea aplicaciones web dinámicas utilizando frameworks modernos.',
  'Minería de Datos Avanzada':
    'Aplica minería de datos a problemas específicos con algoritmos avanzados.',
  'Diseño y evaluación de proyectos':
    'Diseña y evalúa proyectos tecnológicos desde el punto de vista técnico y financiero.',
  'Big Data Analytics': 'Analiza grandes volúmenes de datos para obtener información estratégica.',
  'Electivo de especialidad I':
    'Curso electivo que permite profundizar en un área de especialización técnica.',

  // Ciclo 9
  'Inteligencia De Negocios':
    'Convierte datos en conocimiento para la toma de decisiones empresariales.',
  'Computación en la nube': 'Utiliza servicios cloud para desarrollo y despliegue de aplicaciones.',
  'Trabajo de Tesis I':
    'Primera fase del desarrollo de tesis de grado, centrada en planteamiento del problema y metodología.',
  'Desarrollo de Aplicaciones Móviles':
    'Diseña apps para Android y/o iOS utilizando herramientas modernas.',
  'Analítica de la web':
    'Mide y analiza el comportamiento de usuarios en sitios y plataformas digitales.',
  'Project Management': 'Aplica metodologías de gestión de proyectos como PMBOK y Scrum.',
  'Electivo de especialidad II':
    'Segundo curso electivo enfocado en una línea profesional específica.',

  // Ciclo 10
  'Knowledge Management':
    'Gestiona el conocimiento organizacional para fomentar la innovación y aprendizaje.',
  'Sistemas de Gestión de Seguridad de Información':
    'Implementa sistemas de seguridad de la información basados en normas ISO.',
  'Sistemas de Información Gerencial':
    'Estudia sistemas que apoyan la gestión y toma de decisiones empresariales.',
  'Information Technology Management':
    'Administra recursos tecnológicos en alineación con los objetivos del negocio.',
  'Enterprise Architecture Management':
    'Diseña arquitecturas empresariales que integran procesos, sistemas y tecnologías.',
  'Electivo de especialidad III': 'Curso avanzado para fortalecer la especialización elegida.',
  'Trabajo de Tesis II':
    'Etapa final de la tesis enfocada en desarrollo, resultados y sustentación.',
}

const cursosPorCiclo = {
  1: [
    'Lectura y Redacción',
    'Pre Cálculo',
    'Administración General',
    'Globalización y Realidad Nacional',
    'Estrategias de Aprendizaje',
    'Habilidades Actitudinales',
    'Basic English (*)',
  ],
  2: [
    'Comunicación y literatura I',
    'Cálculo I',
    'Contabilidad General',
    'Estadística y Probabilidades',
    'Física I',
    'Fundamentos de Programación',
    'Intermediate English I',
  ],
  3: [
    'Comunicación y literatura II',
    'Cálculo II',
    'Base de Datos',
    'Introducción a la Ciencia de Datos',
    'Fundamentos de lógica',
    'Algoritmos y estructura de datos',
    'Intermediate English II',
  ],
  4: [
    'Marketing para Ingeniería',
    'Costos y Presupuestos',
    'Álgebra lineal I',
    'Estadística Inferencial',
    'Arquitectura del computador I',
    'Programación Orientada a Objetos',
    'Intermediate English III',
  ],
  5: [
    'Investigación operativa I',
    'Matemática Discreta',
    'Ingeniería de software I',
    'Análisis Multivariado I',
    'Sistemas operativos I',
    'Análisis y Diseño de Algoritmos',
  ],
  6: [
    'Metodología de la Investigación',
    'Gestión Financiera',
    'Inteligencia Artificial',
    'Análisis Multivariado II',
    'Redes de Comunicaciones',
    'Ingeniería de Procesos de Negocios',
  ],
  7: [
    'Planeación Estratégica',
    'Inteligencia Artificial Avanzada',
    'Computación Gráfica',
    'Minería de Datos',
    'Robótica',
    'Computación paralela',
  ],
  8: [
    'Gestión y Desarrollo de la Innovación y Ética',
    'Entrepreneurship',
    'Desarrollo de Aplicaciones web',
    'Minería de Datos Avanzada',
    'Diseño y evaluación de proyectos',
    'Big Data Analytics',
    'Electivo de especialidad I',
  ],
  9: [
    'Inteligencia De Negocios',
    'Computación en la nube',
    'Trabajo de Tesis I',
    'Desarrollo de Aplicaciones Móviles',
    'Analítica de la web',
    'Project Management',
    'Electivo de especialidad II',
  ],
  10: [
    'Knowledge Management',
    'Sistemas de Gestión de Seguridad de Información',
    'Sistemas de Información Gerencial',
    'Information Technology Management',
    'Enterprise Architecture Management',
    'Electivo de especialidad III',
    'Trabajo de Tesis II',
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
const cursoSeleccionado = ref(null)

function seleccionarCurso(nombreCurso) {
  cursoSeleccionado.value = nombreCurso
}
</script>

<!-- 🌐 Variables globales visibles en todo el DOM -->
<style>
:root {
  --rotate-speed: 40;
  --easeInOutSine: cubic-bezier(0.37, 0, 0.63, 1);
  --easing: cubic-bezier(0, 0.37, 1, 0.63);
}
</style>

<!-- 🎨 Estilos del componente con scope -->

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
  /* background: linear-gradient(to bottom, rgba(12, 16, 27, 0.95), rgba(0, 191, 255, 0.05)); */
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
  /* border-right: 1px solid rgba(0, 191, 255, 0.2); */
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
  color: #00ff88; /* verde de selección */
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
