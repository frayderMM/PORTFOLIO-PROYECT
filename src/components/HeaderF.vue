<script setup>
import { ref, nextTick } from 'vue'
import { useLang } from 'src/composables/useLang'

const menuVisible = ref(false)
const { code, toggleLanguage } = useLang()

function toggleMenu() {
  menuVisible.value = !menuVisible.value
}

function scrollTo(id) {
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    menuVisible.value = false
  })
}
</script>

<template>
  <div class="contenedor-header">
    <header>
      <div class="logo">
        <a href="#">ALIMAC</a>
      </div>

      <nav :class="{ responsive: menuVisible }" id="nav">
        <ul>
          <li>
            <a @click="scrollTo('inicio')">{{ $t('nav.home') }}</a>
          </li>
          <li>
            <a @click="scrollTo('sobremi')">{{ $t('nav.about') }}</a>
          </li>
          <li>
            <a @click="scrollTo('skills')">{{ $t('nav.skills') }}</a>
          </li>
          <li>
            <a @click="scrollTo('curriculum')">{{ $t('nav.curriculum') }}</a>
          </li>
          <li>
            <a @click="scrollTo('portfolio')">{{ $t('nav.portfolio') }}</a>
          </li>
          <li>
            <a @click="scrollTo('contacto')">{{ $t('nav.contact') }}</a>
          </li>

          <!-- Botón único global -->
          <li>
            <button class="cyber-btn" @click="toggleLanguage" aria-label="Cambiar idioma">
              🌐 {{ code.toUpperCase() }}
            </button>
          </li>
        </ul>
      </nav>

      <div class="nav-responsive" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
    </header>
  </div>
</template>

<style scoped>
.contenedor-header {
  background: #0c101b;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}

header {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.logo a {
  font-family: 'Righteous', sans-serif;
  font-size: 36px;
  color: #1e90ff;
  text-decoration: none;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 3px;
  transition: color 0.3s;
  cursor: pointer;
}

nav ul li a:hover {
  color: #1e90ff;
}

.nav-responsive {
  background-color: #1e90ff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
}

/* Responsive */
@media screen and (max-width: 768px) {
  nav {
    display: none;
  }

  .nav-responsive {
    display: block;
  }

  nav.responsive {
    display: block;
    position: absolute;
    right: 0;
    top: 75px;
    background-color: #252a2e;
    width: 180px;
  }

  nav.responsive ul {
    display: block;
  }

  nav.responsive ul li {
    border-bottom: 1px solid #fff;
    padding: 10px 0;
    text-align: center;
  }
}
</style>

<style scoped>
.contenedor-header {
  background: #0c101b;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}

header {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.logo a {
  font-family: 'Righteous', sans-serif;
  font-size: 36px;
  color: #1e90ff;
  text-decoration: none;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 3px;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #1e90ff;
}

.nav-responsive {
  background-color: #1e90ff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
}

/* Responsive */
@media screen and (max-width: 768px) {
  nav {
    display: none;
  }

  .nav-responsive {
    display: block;
  }

  nav.responsive {
    display: block;
    position: absolute;
    right: 0;
    top: 75px;
    background-color: #252a2e;
    width: 180px;
  }

  nav.responsive ul {
    display: block;
  }

  nav.responsive ul li {
    border-bottom: 1px solid #fff;
    padding: 10px 0;
    text-align: center;
  }
}

/* ===== Botón de idioma estilo "cybor" ===== */
.cyber-btn {
  position: relative;
  padding: 10px 22px;
  border: 2px solid #00bfff;
  border-radius: 10px;
  background: transparent;
  color: #00eaff;
  font-size: 12px;
  font-family:
    'Share Tech Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  overflow: hidden;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease;
  box-shadow:
    0 0 8px rgba(0, 191, 255, 0.45),
    inset 0 0 6px rgba(0, 191, 255, 0.25);
}

/* glow/hover */
.cyber-btn:hover {
  color: #0c101b;
  background: #00eaff;
  border-color: #00eaff;
  box-shadow:
    0 0 12px #00eaff,
    0 0 24px #00bfff,
    inset 0 0 8px #0c101b;
  transform: translateY(-1px);
}

/* efecto scanline futurista */
.cyber-btn::before {
  content: '';
  position: absolute;
  top: -60%;
  left: -60%;
  width: 220%;
  height: 220%;
  background: linear-gradient(
    120deg,
    transparent 0%,
    rgba(0, 234, 255, 0.35) 50%,
    transparent 100%
  );
  transform: rotate(25deg) translateX(-100%);
  pointer-events: none;
  animation: cyber-scan 2.2s linear infinite;
}

@keyframes cyber-scan {
  0% {
    transform: rotate(25deg) translateX(-100%);
  }
  100% {
    transform: rotate(25deg) translateX(100%);
  }
}

/* click */
.cyber-btn:active {
  transform: translateY(0);
  box-shadow:
    0 0 6px #00bfff,
    inset 0 0 8px #00bfff;
}

/* accesibilidad: foco visible */
.cyber-btn:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px #0c101b,
    0 0 0 6px rgba(0, 191, 255, 0.55);
}

/* botón bien integrado en menú responsive */
@media (max-width: 768px) {
  .cyber-btn {
    width: calc(100% - 24px);
    margin: 6px 12px 10px;
    font-size: 13px;
    padding: 10px 14px;
  }
}

/* respeta usuarios con reducción de movimiento */
@media (prefers-reduced-motion: reduce) {
  .cyber-btn,
  .cyber-btn::before {
    animation: none;
    transition: none;
  }
}
/* ===== Botón de idioma estilo "cyber neon" ===== */
.cyber-btn {
  position: relative;
  padding: 10px 20px;
  border: 2px solid #00bfff;
  border-radius: 12px;
  background: #0c101b;
  color: #00eaff;
  font-size: 13px;
  font-family: 'Share Tech Mono', monospace;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    background 0.25s ease,
    color 0.25s ease;
  box-shadow: 0 0 8px rgba(0, 191, 255, 0.4);
  animation: neon-blink 2.5s infinite alternate;
}

/* Hover */
.cyber-btn:hover {
  background: #00eaff;
  color: #0c101b;
  transform: translateY(-1px);
  box-shadow:
    0 0 12px #00eaff,
    0 0 24px #00bfff;
}

/* Click */
.cyber-btn:active {
  transform: translateY(0);
  box-shadow: 0 0 6px #00bfff;
}

/* Focus accesible */
.cyber-btn:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px #0c101b,
    0 0 0 6px rgba(0, 191, 255, 0.7);
}

/* 🔥 Animación parpadeo suave */
@keyframes neon-blink {
  0%,
  100% {
    box-shadow:
      0 0 8px rgba(0, 191, 255, 0.4),
      0 0 16px rgba(0, 191, 255, 0.2);
    opacity: 1;
  }
  50% {
    box-shadow:
      0 0 4px rgba(0, 191, 255, 0.2),
      0 0 8px rgba(0, 191, 255, 0.1);
    opacity: 0.85;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .cyber-btn {
    width: calc(100% - 24px);
    margin: 6px 12px 10px;
    font-size: 12px;
  }
}
header {
  max-width: 1100px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
