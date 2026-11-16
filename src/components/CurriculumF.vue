<template>
  <section id="curriculum" class="curriculum">
    <div class="contenido-seccion">
      <header class="cabecera">
        <h2>{{ $t('curriculum.title') }}</h2>
        <p class="subtitulo">{{ $t('trayectoria.subtitle') }}</p>
      </header>

      <!-- Índice de subsecciones -->
      <nav class="subnav" :aria-label="$t('curriculum.title')">
        <a v-for="s in subsecciones" :key="s.id" :href="`#${s.id}`" @click.prevent="ir(s.id)">
          <i :class="s.icon" aria-hidden="true"></i>
          {{ $t(s.label) }}
        </a>
      </nav>

      <!-- ============ EXPERIENCIA ============ -->
      <section id="tray-experiencia" class="bloque">
        <h3 class="sub"><i class="fa-solid fa-briefcase" aria-hidden="true"></i>{{ $t('curriculum.experience') }}</h3>
        <Experiencia />
      </section>

      <!-- ============ EDUCACIÓN ============ -->
      <section id="tray-educacion" class="bloque">
        <h3 class="sub"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i>{{ $t('curriculum.education') }}</h3>

        <article v-for="(ed, i) in education" :key="i" class="edu-card">
          <img :src="ed.logo" alt="" class="edu-logo" />
          <div>
            <h4>{{ ed.institution }}</h4>
            <p class="edu-grado">{{ l(ed.degree) }}</p>
            <p class="edu-periodo">
              <i class="fa-regular fa-calendar" aria-hidden="true"></i> {{ l(ed.period) }}
            </p>
            <p v-if="ed.note" class="edu-nota">
              <i class="fa-solid fa-book-open" aria-hidden="true"></i> {{ l(ed.note) }}
            </p>
          </div>
        </article>

        <p class="hint">
          <i class="fa-solid fa-hand-pointer" aria-hidden="true"></i> {{ $t('trayectoria.coursesHint') }}
        </p>
        <Educacion />
      </section>

      <!-- ============ CERTIFICACIONES ============ -->
      <section id="tray-certificaciones" class="bloque">
        <h3 class="sub">
          <i class="fa-solid fa-certificate" aria-hidden="true"></i>{{ $t('trayectoria.certifications') }}
          <small>({{ certificationsTotal }})</small>
        </h3>
        <div class="certs">
          <article v-for="c in certifications" :key="c.id" class="cert">
            <img :src="c.logo" alt="" class="cert-logo" />
            <h4>{{ c.name }}</h4>
            <p class="cert-meta">{{ c.issuer }} · {{ l(c.date) }}</p>
            <p class="cert-skills">💎 {{ l(c.skills) }}</p>
            <p class="cert-id">ID: {{ c.id }}</p>
          </article>
          <a class="cert cert-mas" :href="certificationsUrl" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin" aria-hidden="true"></i>
            <span>{{ $t('trayectoria.allCerts', { n: certificationsTotal }) }}</span>
            <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
          </a>
        </div>
      </section>

      <!-- ============ HACKATONES Y RETOS ============ -->
      <section id="tray-logros" class="bloque">
        <h3 class="sub"><i class="fa-solid fa-trophy" aria-hidden="true"></i>{{ $t('trayectoria.achievements') }}</h3>
        <div class="logros">
          <button
            v-for="(a, i) in achievements"
            :key="i"
            type="button"
            class="logro"
            :disabled="!a.project"
            @click="a.project && focusProject(a.project)"
          >
            <span class="logro-icono"><i :class="a.icon" aria-hidden="true"></i></span>
            <span class="logro-texto">
              <strong>{{ l(a.title) }}</strong>
              <span>{{ l(a.detail) }}</span>
            </span>
            <span class="logro-anio">{{ a.year }}</span>
            <span v-if="a.project" class="logro-ver">
              {{ $t('trayectoria.seeProject') }} <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import Educacion from './CurriculumEducacion.vue'
import Experiencia from './CurriculumExperiencia.vue'
import {
  education,
  certifications,
  certificationsTotal,
  certificationsUrl,
  achievements,
} from 'src/data/trayectoria'
import { useLocalized } from 'src/composables/useLocalized'
import { usePortfolioFilter } from 'src/composables/usePortfolioFilter'

const { l } = useLocalized()
const { focusProject } = usePortfolioFilter()

const subsecciones = [
  { id: 'tray-experiencia', icon: 'fa-solid fa-briefcase', label: 'curriculum.experience' },
  { id: 'tray-educacion', icon: 'fa-solid fa-graduation-cap', label: 'curriculum.education' },
  { id: 'tray-certificaciones', icon: 'fa-solid fa-certificate', label: 'trayectoria.certifications' },
  { id: 'tray-logros', icon: 'fa-solid fa-trophy', label: 'trayectoria.achievements' },
]

function ir(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.curriculum {
  background-color: #0c101b;
  padding: 70px 20px;
  color: white;
  font-family: 'Work Sans', sans-serif;
}
.contenido-seccion {
  max-width: 1100px;
  margin: 0 auto;
}
.cabecera {
  text-align: center;
  margin-bottom: 20px;
}
h2 {
  font-size: 48px;
  font-family: 'Righteous', sans-serif;
  margin: 0 0 8px;
}
.subtitulo {
  margin: 0 auto;
  max-width: 620px;
  color: #aab3c5;
}

/* Índice */
.subnav {
  position: sticky;
  top: 84px;
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px;
  margin: 0 auto 36px;
  width: fit-content;
  max-width: 100%;
  border-radius: 999px;
  background: rgba(16, 22, 36, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.subnav a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  border-radius: 999px;
  color: #c9d3e3;
  font-size: 14px;
  text-decoration: none;
  transition: background 0.2s;
}
.subnav a:hover {
  background: rgba(30, 144, 255, 0.2);
  color: #fff;
}
.subnav i {
  color: #00bfff;
}

.bloque {
  scroll-margin-top: 140px;
  margin-bottom: 56px;
}
.sub {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 26px;
  font-family: 'Righteous', sans-serif;
  color: #00bfff;
  margin: 0 0 20px;
}
.sub i {
  font-size: 20px;
}
.sub small {
  font-size: 16px;
  color: #aab3c5;
}
.hint {
  color: #aab3c5;
  font-size: 14px;
  text-align: center;
  margin: 24px 0 0;
}
.hint i {
  color: #00bfff;
  margin-right: 6px;
}

/* Educación */
.edu-card {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  padding: 20px;
  border-radius: 16px;
  background: #101624;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 4px solid #00bfff;
}
.edu-logo {
  width: 56px;
  height: 56px;
  border-radius: 10px;
}
.edu-card h4 {
  margin: 0 0 4px;
  font-size: 20px;
  font-family: 'Righteous', sans-serif;
  font-weight: 400;
}
.edu-card p {
  margin: 0 0 4px;
}
.edu-grado {
  font-weight: 600;
}
.edu-periodo,
.edu-nota {
  color: #aab3c5;
  font-size: 14px;
}
.edu-card i {
  margin-right: 4px;
  color: #00bfff;
}

/* Certificaciones */
.certs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
}
.cert {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px;
  border-radius: 16px;
  background: #101624;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.cert-logo {
  width: 52px;
  height: 34px;
  object-fit: contain;
  margin-bottom: 4px;
}
.cert h4 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.35;
}
.cert p {
  margin: 0;
  font-size: 13px;
}
.cert-meta {
  color: #00bfff;
  font-weight: 600;
}
.cert-skills {
  color: #c9d3e3;
}
.cert-id {
  color: #6b7a93;
  font-size: 11px !important;
  word-break: break-all;
}
.cert-mas {
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  border: 1px dashed rgba(0, 191, 255, 0.5);
  background: rgba(0, 191, 255, 0.05);
  font-weight: 600;
  transition: background 0.2s;
}
.cert-mas:hover {
  background: rgba(0, 191, 255, 0.12);
}
.cert-mas .fa-linkedin {
  font-size: 30px;
  color: #0a66c2;
}

/* Logros */
.logros {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 14px;
}
.logro {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-radius: 16px;
  background: #101624;
  border: 1px solid rgba(255, 255, 255, 0.06);
  color: #fff;
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition:
    border-color 0.2s,
    transform 0.2s;
}
.logro:hover:not(:disabled) {
  border-color: rgba(245, 158, 11, 0.6);
  transform: translateY(-2px);
}
.logro:disabled {
  cursor: default;
}
.logro-icono {
  flex-shrink: 0;
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  font-size: 20px;
}
.logro-texto {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.logro-texto strong {
  font-size: 15px;
}
.logro-texto span {
  font-size: 13px;
  color: #aab3c5;
}
.logro-anio {
  align-self: flex-start;
  font-size: 12px;
  font-weight: 700;
  color: #fbbf24;
}
.logro-ver {
  position: absolute;
  right: 16px;
  bottom: 10px;
  font-size: 11px;
  color: #00bfff;
  opacity: 0;
  transition: opacity 0.2s;
}
.logro:hover .logro-ver,
.logro:focus-visible .logro-ver {
  opacity: 1;
}

@media (max-width: 600px) {
  h2 {
    font-size: 36px;
  }
  .subnav {
    position: static;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    width: 100%;
    border-radius: 16px;
    scrollbar-width: none;
  }
  .subnav a {
    flex-shrink: 0;
  }
  .logros {
    grid-template-columns: 1fr;
  }
}
</style>
