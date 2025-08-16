<template>
  <div class="contenedor-header">
    <header>
      <div class="logo">
        <a href="#">ALIMAC</a>
      </div>
      <nav :class="{ responsive: menuVisible }" id="nav">
        <ul>
          <li><a @click="scrollTo('inicio')">INICIO</a></li>
          <li><a @click="scrollTo('sobremi')">SOBRE MI</a></li>
          <li><a @click="scrollTo('skills')">SKILLS</a></li>
          <li><a @click="scrollTo('skills')">SKILLS</a></li>
          <li><a @click="scrollTo('curriculum')">CURRICULUM</a></li>
          <li><a @click="scrollTo('portfolio')">PORTFOLIO</a></li>
          <li><a @click="scrollTo('contacto')">CONTACTO</a></li>
        </ul>
      </nav>
      <div class="nav-responsive" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const menuVisible = ref(false)

function toggleMenu() {
  menuVisible.value = !menuVisible.value
}

function scrollTo(id) {
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    menuVisible.value = false
  })
}
</script>

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
</style>
