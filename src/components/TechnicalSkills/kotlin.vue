<template>
  <div class="tech-detail">
    <header class="header">
      <i class="devicon-kotlin-plain colored icon icon-large"></i>
      <div class="titles">
        <h3 class="title">Kotlin – Android Mobile Development</h3>
        <div class="chips">
          <q-chip color="primary" text-color="white" dense square>1 año</q-chip>
          <q-chip color="secondary" text-color="white" dense square>Nivel: Intermedio</q-chip>
        </div>
      </div>
    </header>

    <section class="card">
      <h4>Fundamentos del lenguaje y entorno</h4>
      <ul>
        <li>Sintaxis de Kotlin aplicada a Android</li>
        <li>Programación Orientada a Objetos</li>
        <li>Programación funcional básica</li>
        <li>Uso de Android Studio y Gradle</li>
        <li>Estructura de proyectos Android</li>
      </ul>
    </section>

    <section class="card">
      <h4>Arquitectura y componentes Android</h4>
      <ul>
        <li>Arquitectura de la plataforma Android</li>
        <li>Activities y ciclo de vida</li>
        <li>Fragments y navegación</li>
        <li>Android Manifest</li>
        <li>Intents explícitos e implícitos</li>
        <li>Intent Filters</li>
        <li>Manejo de permisos en tiempo de ejecución</li>
      </ul>
    </section>

    <section class="card">
      <h4>Interfaces de usuario (UI/UX)</h4>
      <ul>
        <li>Diseño de interfaces con buenas prácticas</li>
        <li>Material Design</li>
        <li>Themes y recursos (colores, estilos, strings)</li>
        <li>RecyclerView</li>
        <li>Vistas personalizadas</li>
        <li>
          Jetpack Compose
          <ul>
            <li>Composición y recomposición de UI</li>
            <li>Componentes declarativos</li>
          </ul>
        </li>
      </ul>
    </section>

    <section class="card">
      <h4>Manejo de datos y conectividad</h4>
      <ul>
        <li>Consumo de APIs REST</li>
        <li>Manejo de JSON</li>
        <li>Retrofit</li>
        <li>Procesamiento en segundo plano</li>
        <li>Manejo básico de almacenamiento local</li>
      </ul>
    </section>

    <section class="card">
      <h4>Buenas prácticas</h4>
      <ul>
        <li>Separación de responsabilidades</li>
        <li>Manejo de estados de UI</li>
        <li>Validaciones y manejo de errores</li>
        <li>Integración con backend</li>
      </ul>
    </section>

    <section class="card">
      <h4>Proyectos en Kotlin</h4>

      <h5>🔹 SaborPeruApp – Clasificación de Platos Peruanos (Android)</h5>
      <p>
        Aplicación móvil Android para la clasificación automática de platos peruanos a partir de
        imágenes, integrada con modelos de Machine Learning desarrollados en Python.
      </p>
      <div class="grid">
        <div>
          <strong>Funcionalidades implementadas:</strong>
          <ul>
            <li>Captura de imágenes con cámara del dispositivo</li>
            <li>Envío de imágenes al backend para clasificación</li>
            <li>Visualización de resultados y predicciones</li>
            <li>Interfaz de usuario intuitiva con Material Design</li>
            <li>Integración con API REST del modelo ML</li>
            <li>Manejo de estados y errores</li>
          </ul>
        </div>
        <div>
          <strong>Tecnologías:</strong>
          <div class="tech-cloud" aria-label="Tecnologías SaborPeruApp">
            <div class="tech-item" title="Kotlin">
              <i class="devicon-kotlin-plain colored"></i>
              <span>Kotlin</span>
            </div>
            <div class="tech-item" title="Android">
              <i class="devicon-android-plain colored"></i>
              <span>Android</span>
            </div>
            <div class="tech-item" title="Jetpack Compose">
              <i class="fas fa-mobile-alt"></i>
              <span>Jetpack Compose</span>
            </div>
            <div class="tech-item" title="Retrofit">
              <i class="fas fa-plug"></i>
              <span>Retrofit</span>
            </div>
            <div class="tech-item" title="APIs REST">
              <i class="fas fa-server"></i>
              <span>APIs REST</span>
            </div>
          </div>
        </div>
      </div>

      <h5 style="margin-top: 20px">🔹 Sistema de Gestión de SLA – TCS / ESAN (Android)</h5>
      <p>
        Aplicación móvil para la gestión y monitoreo de Service Level Agreements (SLA), integrada
        con un backend desarrollado en .NET.
      </p>
      <div class="grid">
        <div>
          <strong>Funcionalidades implementadas:</strong>
          <ul>
            <li>Autenticación de usuarios con JWT</li>
            <li>Dashboard de indicadores SLA</li>
            <li>Gestión de solicitudes y tickets</li>
            <li>Consumo de reportes y métricas</li>
            <li>Notificaciones y alertas</li>
            <li>Interfaz responsive con Jetpack Compose</li>
          </ul>
        </div>
        <div>
          <strong>Tecnologías:</strong>
          <div class="tech-cloud" aria-label="Tecnologías SLA Android">
            <div class="tech-item" title="Kotlin">
              <i class="devicon-kotlin-plain colored"></i>
              <span>Kotlin</span>
            </div>
            <div class="tech-item" title="Android">
              <i class="devicon-android-plain colored"></i>
              <span>Android</span>
            </div>
            <div class="tech-item" title="Jetpack Compose">
              <i class="fas fa-mobile-alt"></i>
              <span>Jetpack Compose</span>
            </div>
            <div class="tech-item" title="Retrofit">
              <i class="fas fa-plug"></i>
              <span>Retrofit</span>
            </div>
            <div class="tech-item" title="JWT">
              <i class="fas fa-key"></i>
              <span>JWT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOptions({ name: 'TechKotlin' })
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
.grid {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr;
}
@media (min-width: 700px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
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
