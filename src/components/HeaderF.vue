<script setup>
import { ref, nextTick, computed } from 'vue'
import { useLang } from 'src/composables/useLang'
import NotasSecretas from './NotasSecretas.vue'

const menuVisible = ref(false)
const notasAbiertas = ref(false)
const { locale, toggleLanguage } = useLang()

const languageLabel = computed(() => {
  return locale.value === 'es' ? 'Español' : 'English'
})

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
        <a href="#">FRAYDER</a>
        <!-- Botón secreto: abre mis notas (protegidas con clave) -->
        <button type="button" class="punto-secreto" aria-label="Notas" @click="notasAbiertas = true"></button>
      </div>
      <NotasSecretas :abierto="notasAbiertas" @cerrar="notasAbiertas = false" />

      <nav :class="{ responsive: menuVisible }" id="nav">
        <ul>
          <li>
            <a href="#inicio" @click.prevent="scrollTo('inicio')">{{ $t('nav.home') }}</a>
          </li>
          <li>
            <a href="#sobremi" @click.prevent="scrollTo('sobremi')">{{ $t('nav.about') }}</a>
          </li>
          <li>
            <a href="#skills" @click.prevent="scrollTo('skills')">{{ $t('nav.skills') }}</a>
          </li>
          <li>
            <a href="#curriculum" @click.prevent="scrollTo('curriculum')">{{
              $t('nav.curriculum')
            }}</a>
          </li>
          <li>
            <a href="#portfolio" @click.prevent="scrollTo('portfolio')">{{
              $t('nav.portfolio')
            }}</a>
          </li>
          <li>
            <a href="#contacto" @click.prevent="scrollTo('contacto')">{{ $t('nav.contact') }}</a>
          </li>

          <!-- Botón único global -->
          <li>
            <button class="cyber-btn" @click="toggleLanguage" aria-label="Cambiar idioma">
              🌐 {{ languageLabel }}
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

.logo {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Punto casi invisible: solo yo sé que está ahí */
.punto-secreto {
  width: 7px;
  height: 7px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #1e90ff;
  opacity: 0.12;
  cursor: default;
  align-self: flex-end;
  margin-bottom: 9px;
  transition: opacity 0.3s;
}
.punto-secreto:hover,
.punto-secreto:focus-visible {
  opacity: 0.5;
  outline: none;
}

.logo a {
  font-family: 'Righteous', sans-serif;
  font-size: 36px;
  color: #1e90ff;
  text-decoration: none;
}

nav ul {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 12px;
}

nav ul li a,
nav ul li button {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 4px;
  transition: color 0.25s ease;
  background: none;
  border: none;
  cursor: pointer;
}

nav ul li a:hover,
nav ul li a:focus-visible,
nav ul li button:hover,
nav ul li button:focus-visible {
  color: #1e90ff;
  outline: none;
}

.nav-responsive {
  background-color: #1e90ff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  display: none;
}

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
    width: 200px;
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

.cyber-btn {
  position: relative;
  padding: 10px 18px;
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
    color 0.25s ease,
    box-shadow 0.25s ease;
  box-shadow: 0 0 8px rgba(0, 191, 255, 0.4);
  animation: neon-blink 2.5s infinite alternate;
}

.cyber-btn:hover {
  background: #00eaff;
  color: #0c101b;
  transform: translateY(-1px);
  box-shadow:
    0 0 12px #00eaff,
    0 0 24px #00bfff;
}

.cyber-btn:active {
  transform: translateY(0);
  box-shadow: 0 0 6px #00bfff;
}

.cyber-btn:focus-visible {
  outline: none;
  box-shadow:
    0 0 0 2px #0c101b,
    0 0 0 6px rgba(0, 191, 255, 0.55);
}

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

@media (max-width: 768px) {
  .cyber-btn {
    width: calc(100% - 24px);
    margin: 6px 12px 10px;
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cyber-btn {
    animation: none;
    transition: none;
  }
}
</style>
