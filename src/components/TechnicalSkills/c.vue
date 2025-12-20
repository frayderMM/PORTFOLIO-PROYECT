<template>
  <div class="tech-detail">
    <header class="header">
      <i class="devicon-csharp-plain colored icon icon-large"></i>
      <div class="titles">
        <h3 class="title">C# – Backend Development</h3>
        <div class="chips">
          <q-chip color="primary" text-color="white" dense square>1 año</q-chip>
          <q-chip color="secondary" text-color="white" dense square>Nivel: Intermedio</q-chip>
        </div>
      </div>
    </header>

    <section class="card">
      <h4>Competencias técnicas</h4>
      <ul>
        <li>Programación Orientada a Objetos (clases, interfaces, herencia, abstracción)</li>
        <li>Desarrollo de APIs REST con ASP.NET Core</li>
        <li>Implementación de CRUD completo</li>
        <li>
          Entity Framework Core
          <ul>
            <li>Migraciones</li>
            <li>Relaciones entre entidades</li>
            <li>Consultas con LINQ</li>
          </ul>
        </li>
        <li>Uso de DTOs y separación de responsabilidades</li>
        <li>Validaciones y manejo de errores</li>
        <li>Autenticación y autorización con JWT</li>
        <li>Manejo de roles y permisos</li>
        <li>Procesamiento de archivos (Excel)</li>
        <li>Consumo de APIs REST</li>
        <li>Control de versiones con Git y GitHub</li>
      </ul>
    </section>

    <section class="card">
      <h4>Buenas prácticas aplicadas</h4>
      <ul>
        <li>Arquitectura en capas (Controller, Service, Repository)</li>
        <li>Optimización básica de consultas LINQ</li>
        <li>Manejo centralizado de errores y logging</li>
        <li>Integración con aplicaciones frontend y móviles</li>
      </ul>
    </section>

    <section class="card">
      <h4>Enfoque de crecimiento</h4>
      <ul>
        <li>Testing con xUnit / NUnit</li>
        <li>Seguridad en APIs</li>
        <li>Despliegue en entornos cloud</li>
        <li>Mejora de rendimiento y escalabilidad</li>
      </ul>
    </section>

    <section class="card">
      <h4>Proyecto en C#</h4>
      <h5>🔹 Sistema de Gestión de SLA – TCS (Tata Consultancy Services)</h5>
      <p>
        Desarrollo de un sistema backend para el seguimiento y control de
        <strong>Service Level Agreements (SLA)</strong>, orientado a la gestión de solicitudes y
        métricas de cumplimiento.
      </p>
      <div class="grid">
        <div>
          <strong>Trabajo realizado:</strong>
          <ul>
            <li>Desarrollo de API REST con <strong>.NET 9</strong></li>
            <li>Implementación de CRUD para solicitudes y SLA</li>
            <li>Manejo de usuarios, roles y permisos</li>
            <li>Autenticación y autorización con <strong>JWT</strong></li>
            <li>Separación de capas (Controller, Service, Repository)</li>
            <li>Uso de <strong>Entity Framework Core</strong> para persistencia de datos</li>
            <li>Manejo de validaciones y errores</li>
            <li>Integración con frontend y aplicación móvil</li>
          </ul>
        </div>
        <div>
          <strong>Tecnologías:</strong>
          <div class="tech-cloud" aria-label="Nube de tecnologías">
            <div class="tech-item" title="C#">
              <i class="devicon-csharp-plain colored"></i>
              <span>C#</span>
            </div>
            <div class="tech-item" title=".NET">
              <i class="devicon-dotnetcore-plain colored"></i>
              <span>.NET 9</span>
            </div>
            <div class="tech-item" title="ASP.NET Core">
              <i class="devicon-dotnetcore-plain colored"></i>
              <span>ASP.NET Core</span>
            </div>
            <div class="tech-item" title="Entity Framework Core">
              <i class="fas fa-database"></i>
              <span>EF Core</span>
            </div>
            <div class="tech-item" title="JWT">
              <i class="fas fa-key"></i>
              <span>JWT</span>
            </div>
            <div class="tech-item" title="SQL Server">
              <i class="devicon-microsoftsqlserver-plain colored"></i>
              <span>SQL Server</span>
            </div>
            <div class="tech-item" title="PostgreSQL">
              <i class="devicon-postgresql-plain colored"></i>
              <span>PostgreSQL</span>
            </div>
            <div class="tech-item" title="Git">
              <i class="devicon-git-plain colored"></i>
              <span>Git</span>
            </div>
          </div>
          <div class="links">
            <q-btn
              class="btn-animated github"
              color="primary"
              outline
              icon="fab fa-github"
              label="Repositorio"
              :href="links.github"
              target="_blank"
            />
            <q-btn
              class="btn-animated render"
              color="secondary"
              outline
              icon="fas fa-cloud"
              label="Render"
              :href="links.swagger"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
defineOptions({ name: 'TechC' })
const links = {
  github: 'https://github.com/frayderMM/sla_api.git',
  swagger: 'https://sla-api.onrender.com/swagger/index.html',
}
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
.links {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}
.btn-animated {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  animation: float 3.2s ease-in-out infinite;
  box-shadow:
    0 0 8px rgba(30, 144, 255, 0.3),
    0 0 16px rgba(30, 144, 255, 0.15);
  transition: all 0.3s ease;
}
.btn-animated.github {
  animation-delay: 0.2s;
  box-shadow:
    0 0 8px rgba(100, 100, 255, 0.35),
    0 0 16px rgba(100, 100, 255, 0.2),
    inset 0 0 12px rgba(100, 100, 255, 0.08);
}
.btn-animated.render {
  animation-delay: 0.6s;
  box-shadow:
    0 0 8px rgba(30, 200, 255, 0.4),
    0 0 16px rgba(30, 200, 255, 0.25),
    inset 0 0 12px rgba(30, 200, 255, 0.1);
}

/* Floating gentle animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

/* Finger tap ripple (papadeo) effect on hover */
.btn-animated::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(30, 144, 255, 0.35) 0%, rgba(30, 144, 255, 0) 60%);
  transform: translate(-50%, -50%);
  opacity: 0;
}
.btn-animated:hover::after {
  animation: ripple 0.8s ease-out forwards;
}
@keyframes ripple {
  0% {
    opacity: 0.9;
    width: 0;
    height: 0;
  }
  100% {
    opacity: 0;
    width: 220%;
    height: 220%;
  }
}

/* Fantastic sparkle trail on hover */
.btn-animated:hover {
  box-shadow:
    0 0 20px rgba(30, 144, 255, 0.6),
    0 0 32px rgba(30, 144, 255, 0.4),
    inset 0 0 18px rgba(30, 144, 255, 0.2);
  transform: translateY(-2px);
}
.btn-animated.github:hover {
  box-shadow:
    0 0 20px rgba(100, 100, 255, 0.7),
    0 0 32px rgba(100, 100, 255, 0.5),
    inset 0 0 18px rgba(100, 100, 255, 0.25);
}
.btn-animated.render:hover {
  box-shadow:
    0 0 20px rgba(30, 200, 255, 0.75),
    0 0 32px rgba(30, 200, 255, 0.55),
    inset 0 0 18px rgba(30, 200, 255, 0.3);
}
.btn-animated.github:hover {
  background-image: linear-gradient(135deg, rgba(24, 32, 48, 0.5), rgba(24, 32, 48, 0.3));
}
.btn-animated.render:hover {
  background-image: linear-gradient(135deg, rgba(30, 144, 255, 0.15), rgba(30, 144, 255, 0.05));
}

/* Sparkle elements */
.btn-animated .q-btn__content::before,
.btn-animated .q-btn__content::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(circle, #7fd3ff 0%, rgba(127, 211, 255, 0) 70%);
  border-radius: 50%;
  filter: blur(0.5px);
  opacity: 0;
}
.btn-animated:hover .q-btn__content::before {
  left: 15%;
  top: 20%;
  animation: sparkle 0.9s ease-in-out forwards;
}
.btn-animated:hover .q-btn__content::after {
  right: 12%;
  bottom: 18%;
  animation: sparkle 1.1s ease-in-out forwards;
}
@keyframes sparkle {
  0% {
    transform: scale(0.6);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
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
