<template>
  <section class="bd-skill">
    <h5 class="bd-title">Proyectos de Base de Datos</h5>

    <div class="bd-list">
      <div class="bd-item" v-for="(p, i) in projects" :key="p.slug">
        <!-- Cabecera del ítem -->
        <button
          class="bd-header"
          @click="toggle(i)"
          :aria-expanded="openIndex === i"
          :aria-controls="`panel-${p.slug}`"
        >
          <div class="bd-header-left">
            <i class="fas fa-database bd-icon"></i>
            <div>
              <div class="bd-name">{{ p.name }}</div>
              <div class="bd-meta">{{ p.stack }}</div>
            </div>
          </div>
          <i
            class="fas"
            :class="openIndex === i ? 'fa-chevron-right rotate' : 'fa-chevron-right'"
          ></i>
        </button>

        <!-- Panel deslizante -->
        <transition name="slide-right">
          <div
            v-show="openIndex === i"
            class="bd-panel"
            :id="`panel-${p.slug}`"
            role="region"
            :aria-labelledby="`btn-${p.slug}`"
          >
            <div class="bd-content">
              <div class="bd-text">
                <p class="bd-desc">{{ p.description }}</p>
                <ul class="bd-bullets">
                  <li v-for="(b, bi) in p.highlights" :key="bi">
                    <i class="fas fa-check"></i> {{ b }}
                  </li>
                </ul>
              </div>

              <div class="bd-media">
                <!-- Diagrama solo cuando se presiona "Diagrama" -->
                <img
                  v-if="shownDiagramIndex === i && shownCodeIndex !== i"
                  class="bd-diagram"
                  :src="`/img/Skills/bd/${p.diagram}`"
                  :alt="`Diagrama ${p.name}`"
                  loading="lazy"
                  @click="zoomDiagram(`/img/Skills/bd/${p.diagram}`)"
                />

                <!-- Panel de código cuando se presiona "Code" -->
                <pre
                  v-if="shownCodeIndex === i"
                  class="bd-code"
                ><code>{{ codeContent }}</code></pre>
              </div>
            </div>

            <!-- Botones de acción -->
            <div class="bd-actions">
              <a
                class="bd-btn"
                :href="`/img/Skills/bd/${p.code}`"
                download
                target="_blank"
                rel="noopener"
                title="Descargar código SQL"
                @click.prevent="showCode(i)"
              >
                <i class="fas fa-code"></i> Code
              </a>

              <a
                class="bd-btn"
                :href="`/img/Skills/bd/${p.diagram}`"
                target="_blank"
                rel="noopener"
                title="Ver diagrama"
                @click.prevent="showDiagram(i)"
              >
                <i class="fas fa-project-diagram"></i> Diagrama
              </a>

              <a class="bd-btn" :href="p.repo" target="_blank" rel="noopener" title="Repositorio">
                <i class="fab fa-github"></i> Repositorio
              </a>

              <a class="bd-btn" :href="p.docs" target="_blank" rel="noopener" title="Documentación">
                <i class="fas fa-file-alt"></i> Documentación
              </a>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Modal de zoom -->
    <div v-if="zoomSrc" class="zoom-overlay" @click="zoomSrc = null">
      <img :src="zoomSrc" class="zoom-img" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const projects = [
  {
    slug: 'tienda_online',
    name: 'Tienda Online',
    stack: 'PostgreSQL · SQL · Diseño Normalizado',
    description:
      'Modelo de base de datos para e-commerce con manejo de inventario, órdenes, pagos y auditoría.',
    highlights: [
      'Esquema 3FN con claves compuestas',
      'Vistas materializadas para KPIs',
      'Índices parciales y multi-columna',
    ],
    diagram: 'tienda_online_diagrama.png',
    code: 'tienda_online.sql',
    repo: 'https://github.com/frayderMM/tiendaOnline/blob/main/TiendaOnlineDB.sql',
    docs: 'https://github.com/frayderMM/tiendaOnline/blob/main/README.md',
  },
  {
    slug: 'hospital',
    name: 'Gestión Hospitalaria',
    stack: 'MySQL · Stored Procedures · Seguridad',
    description: 'Sistema para pacientes, citas, historia clínica y trazabilidad de medicamentos.',
    highlights: [
      'Particionado por rango de fechas',
      'Procedimientos para facturación',
      'Políticas de acceso por rol',
    ],
    diagram: 'clinica_san_martin_diagrama.png',
    code: 'clinica_san_martin.sql',
    repo: 'https://github.com/frayderMM/clinicaSanMartin-db/blob/main/clinica_san_martin_db.sql',
    docs: 'https://github.com/frayderMM/clinicaSanMartin-db/blob/main/README.md',
  },
  {
    slug: 'logistica',
    name: 'Logística & Ruteo',
    stack: 'SQL Server · ETL · Reporting',
    description:
      'Modelo para envíos, centros de distribución y ruteo con soporte a métricas de desempeño.',
    highlights: [
      'Tablas de hechos y dimensiones (OLAP)',
      'ETL incremental con staging',
      'Índices columnstore para analytics',
    ],
    diagram: 'logistica_diagrama.png',
    code: 'logistica.sql',
    repo: 'https://github.com/frayderMM/logistica-db/blob/main/logistica_db.sql',
    docs: 'https://github.com/frayderMM/logistica-db/blob/main/README.md',
  },
  {
    slug: 'chamba',
    name: 'Chamba – Red de Empleo Inclusivo',
    stack: 'SQL Server · Normalización · Relaciones',
    description:
      'Base de datos para una app móvil que conecta a personas sin estudios formales con empresas que buscan trabajadores operativos o informales.',
    highlights: [
      'Diseño relacional escalable con claves externas',
      'Tablas normalizadas para usuarios, ofertas y postulaciones',
      'Mensajería interna y sistema de reputación',
    ],
    diagram: 'chamba_diagrama.png',
    code: 'chamba.sql',
    repo: 'https://github.com/frayderMM/tiendaOnline/blob/main/TiendaOnlineDB.sql',
    docs: 'https://github.com/frayderMM/DB-chamba/blob/main/README.md',
  },
]

const openIndex = ref(-1)
const shownDiagramIndex = ref(-1)
const shownCodeIndex = ref(-1)
const codeContent = ref('')
const zoomSrc = ref(null)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
  // Al cambiar de panel, ocultar imagen y código
  if (openIndex.value !== i) {
    shownDiagramIndex.value = -1
    shownCodeIndex.value = -1
    codeContent.value = ''
  }
}

function showDiagram(i) {
  shownCodeIndex.value = -1
  codeContent.value = ''
  shownDiagramIndex.value = i
}

async function showCode(i) {
  shownDiagramIndex.value = -1
  shownCodeIndex.value = i
  codeContent.value = 'Cargando…'
  try {
    const path = `/img/Skills/bd/${projects[i].code}`
    const res = await fetch(path)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    codeContent.value = await res.text()
  } catch (err) {
    codeContent.value = `No se pudo cargar el código (${err}).`
  }
}

function zoomDiagram(src) {
  zoomSrc.value = src
}
</script>

<style scoped>
/* (tus estilos existentes) */
.bd-skill {
  background: #0e1422;
  border: 1px solid #1e90ff22;
  border-radius: 12px;
  padding: 16px;
  color: #e6ecfb;
}

.bd-title {
  margin: 0 0 12px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}

.bd-list {
  display: grid;
  gap: 12px;
}

/* Cabecera del ítem */
.bd-item {
  background: #0c101b;
  border: 1px solid #1e90ff22;
  border-radius: 10px;
  overflow: hidden;
}

.bd-header {
  width: 100%;
  border: none;
  background: transparent;
  color: inherit;
  text-align: left;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.bd-header:hover {
  background: #10172a;
}

.bd-header-left {
  display: flex;
  gap: 12px;
  align-items: center;
}

.bd-icon {
  color: #1e90ff;
  font-size: 20px;
}

.bd-name {
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 2px;
}

.bd-meta {
  font-size: 12px;
  color: #a7b1c6;
}

.fa-chevron-right {
  transition: transform 0.25s ease;
}
.rotate {
  transform: rotate(90deg);
}

/* Panel deslizante a la derecha */
.bd-panel {
  padding: 0 0 14px 0;
  overflow: hidden;
}

/* Contenido interno que se desliza */
.bd-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 16px;
  padding: 0 16px 12px 16px;
}

.bd-text {
  align-self: center;
}
.bd-desc {
  margin: 0 0 8px;
  color: #d9e3ff;
}
.bd-bullets {
  margin: 0;
  padding-left: 18px;
}
.bd-bullets li {
  margin: 4px 0;
}
.bd-bullets i {
  color: #58a6ff;
  margin-right: 6px;
}

.bd-media {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Imagen */
.bd-diagram {
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid #1e90ff22;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  cursor: zoom-in;
}

/* Panel de código */
.bd-code {
  width: 100%;
  max-height: 420px;
  padding: 14px;
  background: #0a0f1a;
  border: 1px solid #1e90ff22;
  border-radius: 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  overflow: auto;
  white-space: pre;
  font-family:
    ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  font-size: 12.5px;
  line-height: 1.55;
}

/* Botones */
.bd-actions {
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, 1fr));
  gap: 10px;
  padding: 0 16px 16px 16px;
}

.bd-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  padding: 10px 12px;
  border: 1px solid #1e90ff44;
  border-radius: 10px;
  background: #0f1730;
  color: #e6ecfb;
  text-decoration: none;
  font-weight: 600;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    border-color 0.15s ease;
}
.bd-btn:hover {
  transform: translateY(-1px);
  border-color: #1e90ff88;
  box-shadow: 0 6px 16px rgba(30, 144, 255, 0.15);
}

/* Animación del panel: desliza hacia la derecha */
.slide-right-enter-active,
.slide-right-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}
.slide-right-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-16px);
}

/* Responsive */
@media (max-width: 860px) {
  .bd-content {
    grid-template-columns: 1fr;
  }
  .bd-actions {
    grid-template-columns: repeat(2, 1fr);
  }
}

.zoom-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.zoom-img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  cursor: zoom-out;
}
</style>
