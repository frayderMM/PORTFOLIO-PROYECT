<template>
  <div class="tech-detail">
    <header class="header">
      <i class="devicon-python-plain colored icon icon-large"></i>
      <div class="titles">
        <h3 class="title">Python – Data Science, AI & Backend Development</h3>
        <div class="chips">
          <q-chip color="primary" text-color="white" dense square>3 años</q-chip>
          <q-chip color="secondary" text-color="white" dense square>Nivel: Avanzado</q-chip>
        </div>
      </div>
    </header>

    <section class="card">
      <h4>Conocimientos previos y fundamentos</h4>
      <ul>
        <li>Programación estructurada y modular</li>
        <li>Programación Orientada a Objetos en Python</li>
        <li>Manejo de estructuras de datos (listas, diccionarios, sets)</li>
        <li>Manejo de archivos (CSV, JSON, imágenes)</li>
        <li>Entornos virtuales y gestión de dependencias</li>
        <li>Buenas prácticas de código y organización de proyectos</li>
      </ul>
    </section>

    <section class="card">
      <h4>Competencias técnicas</h4>
      <ul>
        <li>Análisis, limpieza y transformación de datos (EDA)</li>
        <li>Desarrollo de APIs REST con FastAPI</li>
        <li>Machine Learning supervisado y no supervisado</li>
        <li>Deep Learning con redes neuronales convolucionales (CNN)</li>
        <li>Visión por computadora</li>
        <li>Feature Engineering</li>
        <li>Evaluación y validación de modelos</li>
        <li>Procesamiento de grandes volúmenes de datos</li>
      </ul>
    </section>

    <section class="card">
      <h4>Herramientas y librerías</h4>
      <ul>
        <li>Pandas, NumPy</li>
        <li>Scikit-learn</li>
        <li>TensorFlow / Keras</li>
        <li>PyTorch</li>
        <li>OpenCV</li>
        <li>PySpark</li>
        <li>FastAPI, Pydantic</li>
      </ul>
    </section>

    <section class="card projects-section">
      <h4>Proyectos en Python</h4>

      <div class="project-item">
        <h5>🔹 SaborPeruNet – Clasificación de Platos Peruanos</h5>
        <p>
          Modelo de Deep Learning basado en CNN (MobileNetV2 + módulos tipo Fire) para clasificar
          más de 50 platos peruanos a partir de imágenes, con preprocesamiento, entrenamiento y
          evaluación de métricas.
        </p>
        <div class="grid">
          <div>
            <strong>Trabajo realizado:</strong>
            <ul>
              <li>Diseño e implementación de arquitectura CNN (MobileNetV2 + Fire modules)</li>
              <li>Preprocesamiento y aumentación de imágenes</li>
              <li>Entrenamiento y ajuste de hiperparámetros</li>
              <li>Evaluación de métricas (accuracy, precision, recall, F1)</li>
              <li>Validación cruzada del modelo</li>
              <li>Generación de reportes de desempeño</li>
            </ul>
          </div>
          <div>
            <strong>Tecnologías:</strong>
            <div class="tech-cloud" aria-label="Nube de tecnologías">
              <div class="tech-item" title="Python">
                <i class="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div class="tech-item" title="TensorFlow">
                <i class="devicon-tensorflow-original colored"></i>
                <span>TensorFlow</span>
              </div>
              <div class="tech-item" title="Keras">
                <i class="fas fa-brain"></i>
                <span>Keras</span>
              </div>
              <div class="tech-item" title="OpenCV">
                <i class="fas fa-image"></i>
                <span>OpenCV</span>
              </div>
              <div class="tech-item" title="NumPy">
                <i class="fas fa-cube"></i>
                <span>NumPy</span>
              </div>
              <div class="tech-item" title="Pandas">
                <i class="devicon-pandas-original colored"></i>
                <span>Pandas</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="project-item">
        <h5>🔹 Detección de Objetos con YOLOv8</h5>
        <p>
          Sistema de visión por computadora para detección automática de objetos en imágenes, con
          entrenamiento, validación y medición de mAP, aplicado a escenarios reales.
        </p>
        <div class="grid">
          <div>
            <strong>Trabajo realizado:</strong>
            <ul>
              <li>Implementación de YOLOv8 para detección de objetos</li>
              <li>Preparación y anotación de datasets</li>
              <li>Entrenamiento y validación del modelo</li>
              <li>Medición de métricas (mAP, precision, recall)</li>
              <li>Inferencia en tiempo real</li>
              <li>Optimización para despliegue</li>
            </ul>
          </div>
          <div>
            <strong>Tecnologías:</strong>
            <div class="tech-cloud" aria-label="Nube de tecnologías">
              <div class="tech-item" title="Python">
                <i class="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div class="tech-item" title="YOLOv8">
                <i class="fas fa-crosshairs"></i>
                <span>YOLOv8</span>
              </div>
              <div class="tech-item" title="PyTorch">
                <i class="devicon-pytorch-original colored"></i>
                <span>PyTorch</span>
              </div>
              <div class="tech-item" title="OpenCV">
                <i class="fas fa-image"></i>
                <span>OpenCV</span>
              </div>
              <div class="tech-item" title="NumPy">
                <i class="fas fa-cube"></i>
                <span>NumPy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="project-item">
        <h5>🔹 RetailPlus – Sistema de Recomendación</h5>
        <p>
          Implementación de un sistema de recomendación usando ALS y modelos baseline, con
          arquitectura de datos Medallion (Bronze–Silver–Gold) y evaluación comparativa mediante
          RMSE.
        </p>
        <div class="grid">
          <div>
            <strong>Trabajo realizado:</strong>
            <ul>
              <li>Diseño de arquitectura Medallion (Bronze–Silver–Gold)</li>
              <li>Implementación de algoritmo ALS (Alternating Least Squares)</li>
              <li>Desarrollo de modelos baseline para comparación</li>
              <li>Evaluación mediante métricas RMSE y MAE</li>
              <li>Análisis comparativo de rendimiento</li>
              <li>Optimización de recomendaciones</li>
            </ul>
          </div>
          <div>
            <strong>Tecnologías:</strong>
            <div class="tech-cloud" aria-label="Nube de tecnologías">
              <div class="tech-item" title="Python">
                <i class="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div class="tech-item" title="PySpark">
                <i class="devicon-apachespark-original colored"></i>
                <span>PySpark</span>
              </div>
              <div class="tech-item" title="Scikit-learn">
                <i class="fas fa-chart-line"></i>
                <span>Scikit-learn</span>
              </div>
              <div class="tech-item" title="Pandas">
                <i class="devicon-pandas-original colored"></i>
                <span>Pandas</span>
              </div>
              <div class="tech-item" title="SQL">
                <i class="fas fa-database"></i>
                <span>SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="project-item">
        <h5>🔹 APIs Backend con FastAPI</h5>
        <p>
          Desarrollo de servicios REST para aplicaciones web y móviles, incluyendo endpoints CRUD,
          manejo de archivos y validación de datos.
        </p>
        <div class="grid">
          <div>
            <strong>Trabajo realizado:</strong>
            <ul>
              <li>Diseño e implementación de APIs REST con FastAPI</li>
              <li>Desarrollo de endpoints CRUD completos</li>
              <li>Validación de datos con Pydantic</li>
              <li>Manejo de archivos y uploads</li>
              <li>Autenticación y autorización</li>
              <li>Documentación automática (Swagger/OpenAPI)</li>
            </ul>
          </div>
          <div>
            <strong>Tecnologías:</strong>
            <div class="tech-cloud" aria-label="Nube de tecnologías">
              <div class="tech-item" title="Python">
                <i class="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div class="tech-item" title="FastAPI">
                <i class="fas fa-rocket"></i>
                <span>FastAPI</span>
              </div>
              <div class="tech-item" title="Pydantic">
                <i class="fas fa-check-circle"></i>
                <span>Pydantic</span>
              </div>
              <div class="tech-item" title="SQLAlchemy">
                <i class="fas fa-database"></i>
                <span>SQLAlchemy</span>
              </div>
              <div class="tech-item" title="PostgreSQL">
                <i class="devicon-postgresql-plain colored"></i>
                <span>PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="project-item">
        <h5>🔹 Análisis y Visualización de Datos</h5>
        <p>
          Proyectos de análisis exploratorio de datos, generación de insights y visualización
          mediante gráficos y reportes.
        </p>
        <div class="grid">
          <div>
            <strong>Trabajo realizado:</strong>
            <ul>
              <li>Análisis exploratorio de datos (EDA)</li>
              <li>Limpieza y transformación de datos</li>
              <li>Identificación de patrones e insights</li>
              <li>Creación de visualizaciones interactivas</li>
              <li>Generación de reportes ejecutivos</li>
              <li>Estadística descriptiva e inferencial</li>
            </ul>
          </div>
          <div>
            <strong>Tecnologías:</strong>
            <div class="tech-cloud" aria-label="Nube de tecnologías">
              <div class="tech-item" title="Python">
                <i class="devicon-python-plain colored"></i>
                <span>Python</span>
              </div>
              <div class="tech-item" title="Pandas">
                <i class="devicon-pandas-original colored"></i>
                <span>Pandas</span>
              </div>
              <div class="tech-item" title="Matplotlib">
                <i class="fas fa-chart-bar"></i>
                <span>Matplotlib</span>
              </div>
              <div class="tech-item" title="Seaborn">
                <i class="fas fa-chart-area"></i>
                <span>Seaborn</span>
              </div>
              <div class="tech-item" title="Plotly">
                <i class="fas fa-chart-pie"></i>
                <span>Plotly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
defineOptions({ name: 'TechPython' })
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
  filter: drop-shadow(0 4px 10px rgba(30, 144, 255, 0.6))
    drop-shadow(0 0 20px rgba(30, 144, 255, 0.4)) drop-shadow(0 0 30px rgba(30, 144, 255, 0.2));
  animation: glow-python 2s ease-in-out infinite;
}
@keyframes glow-python {
  0%,
  100% {
    filter: drop-shadow(0 4px 10px rgba(30, 144, 255, 0.6))
      drop-shadow(0 0 20px rgba(30, 144, 255, 0.4)) drop-shadow(0 0 30px rgba(30, 144, 255, 0.2));
  }
  50% {
    filter: drop-shadow(0 4px 15px rgba(30, 144, 255, 0.8))
      drop-shadow(0 0 30px rgba(30, 144, 255, 0.6)) drop-shadow(0 0 40px rgba(30, 144, 255, 0.4));
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

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
}

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
