<template>
  <div class="tech-detail">
    <h3>\# C# – Backend Development</h3>

    <section>
      <h4>Competencias técnicas</h4>
      <ul>
        <li>Programación Orientada a Objetos (clases, interfaces, herencia, abstracción)</li>
        <li>Desarrollo de APIs REST con ASP.NET Core</li>
        <li>Implementación de CRUD completo</li>
        <li>Entity Framework Core
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

    <section>
      <h4>Buenas prácticas aplicadas</h4>
      <ul>
        <li>Arquitectura en capas (Controller, Service, Repository)</li>
        <li>Optimización básica de consultas LINQ</li>
        <li>Manejo centralizado de errores y logging</li>
        <li>Integración con aplicaciones frontend y móviles</li>
      </ul>
    </section>

    <section>
      <h4>Enfoque de crecimiento</h4>
      <ul>
        <li>Testing con xUnit / NUnit</li>
        <li>Seguridad en APIs</li>
        <li>Despliegue en entornos cloud</li>
        <li>Mejora de rendimiento y escalabilidad</li>
      </ul>
    </section>

    <section>
      <h4>Proyecto en C#</h4>
      <h5>🔹 Sistema de Gestión de SLA – TCS (Tata Consultancy Services)</h5>
      <p>
        Desarrollo de un sistema backend para el seguimiento y control de <strong>Service Level Agreements (SLA)</strong>,
        orientado a la gestión de solicitudes y métricas de cumplimiento.
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
          <p>C# · .NET 9 · ASP.NET Core · Entity Framework Core · JWT · SQL Server / PostgreSQL · Git</p>
          <div class="links">
            <a href="https://github.com/frayderMM/sla_api.git" target="_blank" rel="noopener">GitHub</a>
            <a href="https://sla-api.onrender.com/swagger/index.html" target="_blank" rel="noopener">Swagger (Render)</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
defineOptions({ name: 'TechCsharp' })
</script>
<style scoped>
.tech-detail { padding: 16px; display: grid; gap: 14px; }
.tech-detail h3 { margin: 0; font-size: 20px; }
.tech-detail h4 { margin: 4px 0; font-size: 16px; color: #9fc5ff; }
.tech-detail h5 { margin: 6px 0; font-size: 15px; }
.tech-detail ul { margin: 6px 0 0 18px; }
.grid { display: grid; gap: 12px; grid-template-columns: 1fr; }
@media (min-width: 700px) { .grid { grid-template-columns: 1fr 1fr; } }
.links { display: flex; gap: 10px; margin-top: 8px; }
.links a { color: #1e90ff; text-decoration: none; }
.links a:hover { text-decoration: underline; }
</style>
