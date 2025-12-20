<template>
  <div class="tech-detail">
    <header class="header">
      <i class="devicon-java-plain colored icon icon-large"></i>
      <div class="titles">
        <h3 class="title">Java – Desktop & Systems Development</h3>
        <div class="chips">
          <q-chip color="primary" text-color="white" dense square>1 año</q-chip>
          <q-chip color="secondary" text-color="white" dense square>Nivel: Intermedio</q-chip>
        </div>
      </div>
    </header>

    <section class="card">
      <h4>Competencias técnicas</h4>
      <ul>
        <li>
          Programación Orientada a Objetos en Java
          <ul>
            <li>Clases, objetos, encapsulación, herencia, polimorfismo e interfaces</li>
          </ul>
        </li>
        <li>Desarrollo de aplicaciones de escritorio con Java Swing</li>
        <li>Diseño de interfaces gráficas (event-driven)</li>
        <li>Manejo de excepciones y control de errores</li>
        <li>Uso de colecciones (List, Set, ArrayList, LinkedHashSet)</li>
        <li>Manipulación de archivos binarios y de texto</li>
        <li>
          Acceso a bases de datos mediante JDBC
          <ul>
            <li>Connection, Statement, ResultSet</li>
          </ul>
        </li>
        <li>Programación concurrente y multihilo</li>
        <li>Implementación de arquitecturas seriales y paralelas</li>
        <li>Control de versiones con Git y GitHub</li>
      </ul>
    </section>

    <section class="card">
      <h4>Criptografía y computación paralela</h4>
      <ul>
        <li>
          Implementación de algoritmos de cifrado:
          <ul>
            <li>XOR</li>
            <li>Vigenère (adaptado a binarios)</li>
            <li>Transposición columnar</li>
            <li>Algoritmos personalizados (CSRD, SRPQ)</li>
          </ul>
        </li>
        <li>
          Cifrado y descifrado de:
          <ul>
            <li>Documentos</li>
            <li>Imágenes</li>
            <li>Audio</li>
            <li>Video</li>
            <li>Archivos binarios</li>
          </ul>
        </li>
        <li>Comparación de rendimiento entre ejecución serial y paralela</li>
        <li>Uso de multithreading para optimización de tiempos de procesamiento</li>
        <li>Validación de integridad de datos (comparación byte a byte)</li>
      </ul>
    </section>

    <section class="card">
      <h4>Buenas prácticas aplicadas</h4>
      <ul>
        <li>Arquitectura modular</li>
        <li>Separación de responsabilidades</li>
        <li>Procesamiento por bloques</li>
        <li>Manejo seguro de claves</li>
        <li>Optimización básica de rendimiento</li>
        <li>Usabilidad (Drag & Drop, feedback visual)</li>
      </ul>
    </section>

    <section class="card projects-section">
      <h4>Proyectos en Java</h4>

      <div class="project-item">
        <h5>🔹 Aplicación de Escritorio de Cifrado de Archivos (Serial y Paralelo)</h5>
        <p>
          Aplicación desarrollada en Java para el cifrado y descifrado de archivos (documentos,
          imágenes, audio y video), integrando arquitecturas seriales y paralelas para mejorar el
          rendimiento en grandes volúmenes de datos.
        </p>
        <div class="grid">
          <div>
            <strong>Trabajo realizado:</strong>
            <ul>
              <li>
                Implementación de múltiples algoritmos de cifrado (XOR, Vigenère, Transposición,
                CSRD, SRPQ)
              </li>
              <li>Desarrollo de arquitecturas serial y paralela con multithreading</li>
              <li>Interfaz gráfica con Swing (Drag & Drop, feedback visual)</li>
              <li>Soporte para cifrado de documentos, imágenes, audio y video</li>
              <li>Sistema de validación de integridad (comparación byte a byte)</li>
              <li>Optimización de tiempos de procesamiento con concurrencia</li>
              <li>Procesamiento seguro por bloques con manejo de claves</li>
              <li>Comparación de rendimiento: ejecución serial vs paralela</li>
            </ul>
          </div>
          <div>
            <strong>Tecnologías:</strong>
            <div class="tech-cloud" aria-label="Nube de tecnologías">
              <div class="tech-item" title="Java">
                <i class="devicon-java-plain colored"></i>
                <span>Java</span>
              </div>
              <div class="tech-item" title="Swing">
                <i class="fas fa-window-maximize"></i>
                <span>Swing</span>
              </div>
              <div class="tech-item" title="Multithreading">
                <i class="fas fa-stream"></i>
                <span>Multithreading</span>
              </div>
              <div class="tech-item" title="Criptografía">
                <i class="fas fa-lock"></i>
                <span>Criptografía</span>
              </div>
              <div class="tech-item" title="JDBC">
                <i class="fas fa-database"></i>
                <span>JDBC</span>
              </div>
              <div class="tech-item" title="Git">
                <i class="devicon-git-plain colored"></i>
                <span>Git</span>
              </div>
              <div class="tech-item" title="NetBeans">
                <i class="fas fa-code"></i>
                <span>NetBeans</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="project-item">
        <h5>🔹 Sistema de Gestión de Productos y Ventas (POO)</h5>
        <p>
          Aplicación de escritorio desarrollada en Java para la gestión de productos y ventas de una
          empresa del sector comercial (mercado).
        </p>
        <div class="grid">
          <div>
            <strong>Trabajo realizado:</strong>
            <ul>
              <li>Gestión de productos (registro, actualización y eliminación)</li>
              <li>Módulo de ventas completo</li>
              <li>Conexión a base de datos relacional con JDBC</li>
              <li>Generación y gestión de reportes en PDF</li>
              <li>Manejo de errores y validaciones robustas</li>
              <li>Arquitectura basada en Programación Orientada a Objetos</li>
              <li>Separación lógica por módulos</li>
              <li>Aplicación de buenas prácticas en aplicaciones de escritorio</li>
            </ul>
          </div>
          <div>
            <strong>Tecnologías:</strong>
            <div class="tech-cloud" aria-label="Nube de tecnologías">
              <div class="tech-item" title="Java">
                <i class="devicon-java-plain colored"></i>
                <span>Java</span>
              </div>
              <div class="tech-item" title="NetBeans">
                <i class="fas fa-code"></i>
                <span>NetBeans</span>
              </div>
              <div class="tech-item" title="JDBC">
                <i class="fas fa-database"></i>
                <span>JDBC</span>
              </div>
              <div class="tech-item" title="SQL Server">
                <i class="devicon-microsoftsqlserver-plain colored"></i>
                <span>SQL Server</span>
              </div>
              <div class="tech-item" title="PDF">
                <i class="fas fa-file-pdf"></i>
                <span>PDF</span>
              </div>
              <div class="tech-item" title="POO">
                <i class="fas fa-cube"></i>
                <span>POO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
defineOptions({ name: 'TechJava' })
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
  filter: drop-shadow(0 4px 10px rgba(247, 153, 20, 0.6))
    drop-shadow(0 0 20px rgba(247, 153, 20, 0.4)) drop-shadow(0 0 30px rgba(247, 153, 20, 0.2));
  animation: glow-java 2s ease-in-out infinite;
}
@keyframes glow-java {
  0%,
  100% {
    filter: drop-shadow(0 4px 10px rgba(247, 153, 20, 0.6))
      drop-shadow(0 0 20px rgba(247, 153, 20, 0.4)) drop-shadow(0 0 30px rgba(247, 153, 20, 0.2));
  }
  50% {
    filter: drop-shadow(0 4px 15px rgba(247, 153, 20, 0.8))
      drop-shadow(0 0 30px rgba(247, 153, 20, 0.6)) drop-shadow(0 0 40px rgba(247, 153, 20, 0.4));
  }
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
.projects-section h4 {
  margin-bottom: 16px;
}
.project-item {
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid rgba(30, 144, 255, 0.2);
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(30, 144, 255, 0.03), rgba(30, 144, 255, 0.01));
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}
.project-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(30, 144, 255, 0.8), transparent);
  animation: slide-gradient 3s infinite;
}
@keyframes slide-gradient {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
.project-item:hover {
  border-color: rgba(30, 144, 255, 0.5);
  background: linear-gradient(135deg, rgba(30, 144, 255, 0.08), rgba(30, 144, 255, 0.03));
  box-shadow: 0 4px 16px rgba(30, 144, 255, 0.15);
}
.project-item h5 {
  color: #6ba3ff;
  margin: 12px 0 8px;
  font-size: 16px;
  font-weight: 600;
  text-shadow: 0 1px 3px rgba(30, 144, 255, 0.3);
}
.project-item p {
  color: #c0d8ff;
  margin: 8px 0 12px;
  line-height: 1.5;
  font-size: 14px;
}
</style>
