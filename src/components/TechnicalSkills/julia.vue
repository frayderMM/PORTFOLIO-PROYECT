<template>
  <div class="tech-detail">
    <header class="header">
      <i class="devicon-julia-plain colored icon icon-large"></i>
      <div class="titles">
        <h3 class="title">Julia – Scientific Computing & Data Analysis</h3>
        <div class="chips">
          <q-chip color="primary" text-color="white" dense square>Medio año</q-chip>
          <q-chip color="secondary" text-color="white" dense square
            >Nivel: Básico–Intermedio</q-chip
          >
        </div>
      </div>
    </header>

    <section class="card">
      <h4>Fundamentos del lenguaje</h4>
      <ul>
        <li>Sintaxis básica de Julia</li>
        <li>Tipos de datos</li>
        <li>Variables y control de flujo</li>
        <li>Funciones y módulos</li>
        <li>Manejo básico de paquetes</li>
      </ul>
    </section>

    <section class="card">
      <h4>Programación y rendimiento</h4>
      <ul>
        <li>Programación funcional básica</li>
        <li>Programación orientada a arrays</li>
        <li>Tipado dinámico con alto rendimiento</li>
        <li>Uso de broadcasting</li>
        <li>Manejo de memoria y rendimiento básico</li>
      </ul>
    </section>

    <section class="card">
      <h4>Cálculo numérico y científico</h4>
      <ul>
        <li>Operaciones matriciales</li>
        <li>Álgebra lineal</li>
        <li>Cálculo numérico</li>
        <li>Resolución de problemas matemáticos</li>
        <li>Manipulación de vectores y matrices</li>
      </ul>
    </section>

    <section class="card">
      <h4>Análisis de datos</h4>
      <ul>
        <li>Carga y manipulación de datos</li>
        <li>Operaciones estadísticas básicas</li>
        <li>Limpieza y transformación de datos</li>
      </ul>
    </section>

    <section class="card">
      <h4>Visualización</h4>
      <ul>
        <li>Gráficos básicos</li>
        <li>Visualización de resultados numéricos</li>
      </ul>
    </section>

    <section class="card">
      <h4>Herramientas y librerías</h4>
      <div class="tech-cloud" aria-label="Nube de tecnologías">
        <div class="tech-item" title="Julia">
          <i class="devicon-julia-plain colored"></i>
          <span>Julia</span>
        </div>
        <div class="tech-item" title="DataFrames.jl">
          <i class="fas fa-table"></i>
          <span>DataFrames.jl</span>
        </div>
        <div class="tech-item" title="LinearAlgebra">
          <i class="fas fa-calculator"></i>
          <span>LinearAlgebra</span>
        </div>
        <div class="tech-item" title="Statistics">
          <i class="fas fa-chart-bar"></i>
          <span>Statistics</span>
        </div>
        <div class="tech-item" title="Plots.jl">
          <i class="fas fa-chart-line"></i>
          <span>Plots.jl</span>
        </div>
      </div>
    </section>

    <section class="card">
      <h4>Proyectos Julia</h4>
      <p>Sin proyectos completados</p>
    </section>
  </div>
</template>

<script setup>
defineOptions({ name: 'TechJulia' })
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
