<template>
  <div class="tech-detail">
    <header class="header">
      <i class="devicon-cplusplus-plain colored icon icon-large"></i>
      <div class="titles">
        <h3 class="title">C++ – Algoritmos & Estructuras de Datos</h3>
        <div class="chips">
          <q-chip color="primary" text-color="white" dense square>1 año</q-chip>
          <q-chip color="secondary" text-color="white" dense square>Nivel: Intermedio</q-chip>
        </div>
      </div>
    </header>

    <section class="card">
      <h4>Fundamentos del lenguaje</h4>
      <ul>
        <li>Sintaxis y tipos de datos</li>
        <li>Entrada y salida estándar</li>
        <li>Funciones y paso de parámetros</li>
        <li>Manejo de memoria</li>
        <li>Punteros y referencias</li>
      </ul>
    </section>

    <section class="card">
      <h4>Programación Orientada a Objetos</h4>
      <ul>
        <li>Clases y objetos</li>
        <li>Encapsulación</li>
        <li>Herencia</li>
        <li>Abstracción</li>
        <li>Diseño básico orientado a objetos</li>
      </ul>
    </section>

    <section class="card">
      <h4>Algoritmos</h4>
      <ul>
        <li>Diseño de algoritmos</li>
        <li>Análisis de complejidad (notación Big-O)</li>
        <li>Algoritmos recursivos</li>
        <li>Evaluación de eficiencia y rendimiento</li>
      </ul>
    </section>

    <section class="card">
      <h4>Algoritmos de ordenamiento</h4>
      <ul>
        <li>Ordenamiento básico</li>
        <li>Insertion Sort</li>
        <li>Merge Sort</li>
        <li>Quick Sort</li>
        <li>Comparación de desempeño entre algoritmos</li>
      </ul>
    </section>

    <section class="card">
      <h4>Algoritmos de búsqueda</h4>
      <ul>
        <li>Búsqueda en árboles</li>
        <li>Árboles binarios de búsqueda</li>
        <li>Tablas hash</li>
      </ul>
    </section>

    <section class="card">
      <h4>Estructuras de datos</h4>
      <ul>
        <li>Tipos Abstractos de Datos (TAD)</li>
        <li>Pilas y colas</li>
        <li>Listas enlazadas (simples y dobles)</li>
        <li>Árboles binarios</li>
        <li>Árboles balanceados</li>
        <li>Introducción a estructuras multidimensionales</li>
      </ul>
    </section>

    <section class="card">
      <h4>Cadenas y procesamiento de datos</h4>
      <ul>
        <li>Búsqueda y ordenamiento de cadenas</li>
        <li>Expresiones regulares</li>
        <li>Compresión de datos</li>
      </ul>
    </section>

    <section class="card">
      <h4>Herramientas</h4>
      <div class="tech-cloud" aria-label="Nube de tecnologías">
        <div class="tech-item" title="C++">
          <i class="devicon-cplusplus-plain colored"></i>
          <span>C++</span>
        </div>
        <div class="tech-item" title="Code::Blocks">
          <i class="fas fa-cube"></i>
          <span>Code::Blocks</span>
        </div>
        <div class="tech-item" title="LaTeX">
          <i class="fas fa-file-code"></i>
          <span>LaTeX</span>
        </div>
      </div>
    </section>

    <section class="card">
      <h4>Proyectos C++</h4>
      <p>Sin proyectos completados</p>
    </section>
  </div>
</template>

<script setup>
defineOptions({ name: 'TechCplusplus' })
</script>

<style scoped>
.tech-detail {
  padding: 16px;
  display: grid;
  gap: 16px;
}
.header {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid rgba(30, 144, 255, 0.25);
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(17, 24, 42, 0.65), rgba(17, 24, 42, 0.45));
}
.icon {
  font-size: 36px;
}
.icon-large {
  font-size: 64px;
  filter: drop-shadow(0 4px 10px rgba(30, 144, 255, 0.35));
}
.titles {
  display: grid;
  gap: 6px;
}
.title {
  font-size: 22px;
  letter-spacing: 0.3px;
}
.chips {
  display: flex;
  gap: 8px;
}
.card {
  border: 1px solid rgba(30, 144, 255, 0.15);
  border-radius: 12px;
  padding: 12px;
  background: rgba(14, 20, 34, 0.45);
}
.tech-detail h3 {
  margin: 0;
  font-size: 20px;
}
.tech-detail h4 {
  margin: 0 0 12px;
  font-size: 17px;
  font-weight: 600;
  color: #b8daff;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 4px rgba(30, 144, 255, 0.2);
}
.tech-detail h5 {
  margin: 6px 0;
  font-size: 15px;
}
.tech-detail ul {
  margin: 6px 0 0 18px;
}
.tech-cloud {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 16px;
  margin: 8px 0 12px;
}
.tech-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border: 1px solid rgba(30, 144, 255, 0.2);
  border-radius: 20px;
  background: rgba(17, 24, 42, 0.35);
}
.tech-item i {
  font-size: 22px;
}
.tech-item span {
  font-size: 13px;
  color: #d8ecff;
}
</style>
