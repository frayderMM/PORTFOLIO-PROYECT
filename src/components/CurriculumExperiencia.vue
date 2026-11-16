<template>
  <ol class="timeline">
    <li v-for="(e, i) in experience" :key="i" class="evento" :class="{ actual: !e.end && e.start.includes('-') }">
      <span class="punto" aria-hidden="true"></span>
      <article class="card">
        <div class="cabecera">
          <img v-if="e.logo" class="logo" :src="e.logo" alt="" />
          <span v-else class="logo logo-icono" aria-hidden="true"><i class="fa-solid fa-briefcase"></i></span>
          <div class="titulos">
            <h4>{{ l(e.role) }}</h4>
            <span class="org">{{ l(e.org) }}</span>
          </div>
          <span v-if="!e.end && e.start.includes('-')" class="badge-actual">{{ $t('trayectoria.current') }}</span>
        </div>
        <p class="fecha">
          <i class="fa-regular fa-calendar" aria-hidden="true"></i>
          {{ periodo(e) }}
        </p>
        <p class="desc">{{ l(e.desc) }}</p>
        <ul v-if="e.tech?.length" class="tags">
          <li v-for="t in e.tech" :key="t">{{ t }}</li>
        </ul>
      </article>
    </li>
  </ol>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { experience } from 'src/data/trayectoria'
import { useLocalized } from 'src/composables/useLocalized'

const { l } = useLocalized()
const { t, locale } = useI18n()

function mesAnio(ym) {
  const [y, m] = ym.split('-').map(Number)
  return new Date(y, m - 1, 1).toLocaleDateString(locale.value === 'es' ? 'es-PE' : 'en-US', {
    month: 'short',
    year: 'numeric',
  })
}

// "abr. 2026 – actualidad · 8 meses" | "2024 – 2025" | "2025"
function periodo(e) {
  if (!e.start.includes('-')) return e.end ? `${e.start} – ${e.end}` : e.start
  const inicio = mesAnio(e.start)
  if (e.end) return `${inicio} – ${mesAnio(e.end)}`
  const [y, m] = e.start.split('-').map(Number)
  const hoy = new Date()
  const total = (hoy.getFullYear() - y) * 12 + (hoy.getMonth() + 1 - m) + 1
  const anios = Math.floor(total / 12)
  const meses = total % 12
  const partes = []
  if (anios) partes.push(`${anios} ${t(anios === 1 ? 'hero.profiles.year' : 'hero.profiles.years')}`)
  if (meses) partes.push(`${meses} ${t(meses === 1 ? 'hero.profiles.month' : 'hero.profiles.months')}`)
  return `${inicio} – ${t('hero.profiles.present')} · ${partes.join(' ')}`
}
</script>

<style scoped>
.timeline {
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0 0 0 34px;
  text-align: left;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(#00bfff, rgba(0, 191, 255, 0.08));
}
.evento {
  position: relative;
  margin-bottom: 18px;
}
.punto {
  position: absolute;
  left: -30px;
  top: 22px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #0c101b;
  border: 3px solid #00bfff;
}
.evento.actual .punto {
  background: #00bfff;
  box-shadow: 0 0 0 5px rgba(0, 191, 255, 0.2);
  animation: latido 2s ease-out infinite;
}
@keyframes latido {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 191, 255, 0.6);
  }
  100% {
    box-shadow: 0 0 0 12px rgba(0, 191, 255, 0);
  }
}

.card {
  padding: 18px 20px;
  border-radius: 16px;
  background: #101624;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-left: 4px solid #00bfff;
  transition: border-color 0.2s;
}
.card:hover {
  border-color: rgba(0, 191, 255, 0.45);
}
.cabecera {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  object-fit: contain;
}
.logo-icono {
  display: grid;
  place-items: center;
  background: rgba(0, 191, 255, 0.12);
  color: #00bfff;
}
.titulos {
  flex: 1;
  min-width: 0;
}
h4 {
  margin: 0;
  font-size: 18px;
  font-family: 'Righteous', sans-serif;
  font-weight: 400;
  color: #00bfff;
  line-height: 1.25;
}
.org {
  font-weight: 600;
  font-size: 14px;
}
.badge-actual {
  flex-shrink: 0;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(34, 197, 94, 0.15);
  border: 1px solid rgba(34, 197, 94, 0.5);
  color: #4ade80;
  font-size: 12px;
  font-weight: 600;
}
.fecha {
  margin: 10px 0 6px;
  font-size: 13px;
  color: #aab3c5;
}
.fecha i {
  margin-right: 6px;
}
.desc {
  margin: 0 0 10px;
  font-size: 15px;
  line-height: 1.55;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.tags li {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 12px;
  background: rgba(0, 191, 255, 0.1);
  border: 1px solid rgba(0, 191, 255, 0.3);
}

@media (max-width: 600px) {
  .cabecera {
    flex-wrap: wrap;
  }
}
@media (prefers-reduced-motion: reduce) {
  .evento.actual .punto {
    animation: none;
  }
}
</style>
