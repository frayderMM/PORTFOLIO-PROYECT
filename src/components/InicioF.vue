<template>
  <section id="inicio" style="scroll-margin-top: 100px" class="inicio" ref="hero">
    <!-- Fondo dinámico -->
    <div class="fondo"></div>

    <!-- Contenido encima -->
    <div class="contenido-banner">
      <div class="contenedor-img">
        <img src="/img/hero.jpg" alt="Foto de Frayder Meza" />
      </div>
      <h1>Frayder Meza</h1>
      <h2>{{ $t('inicio.career1') }}</h2>
      <h2>{{ $t('inicio.career2') }}</h2>
      <h2>{{ $t('inicio.career3') }}</h2>
      <h2>{{ $t('inicio.career4') }}</h2>

      <div class="redes">
        <a
          href="https://web.facebook.com/profile.php?id=61559889902327"
          target="_blank"
          aria-label="Facebook"
        >
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="https://x.com/FrayderMeza" target="_blank" aria-label="Twitter">
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://www.instagram.com/bray_aa_nn/" target="_blank" aria-label="Instagram">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/frayder/" target="_blank" aria-label="LinkedIn">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/frayderMM" target="_blank" aria-label="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const hero = ref(null)

const imagenes = [
  '/img/esan.jpg',
  'https://wallpapers.com/images/hd/it-computer-code-64g46se08419uzzr.jpg',
  '/img/machuPichu.jpg',
  'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iyVj9399TX5M/v1/-1x-1.webp',
  'https://portal.andina.pe/EDPfotografia2/Thumbnail/2011/09/24/000165838W.jpg',
]

function preload(src) {
  return new Promise((resolve) => {
    const i = new Image()
    i.onload = resolve
    i.onerror = resolve
    i.src = src
  })
}

onMounted(async () => {
  const section = hero.value
  const fondo = section.querySelector('.fondo')
  if (!fondo) return

  let index = 0
  const fadeMs = 700
  const everyMs = 4000

  // Estado inicial
  fondo.style.backgroundImage = `
    linear-gradient(to top, rgba(18,24,35,0.3), rgba(10,14,25,0.4)),
    url(${imagenes[index]})
  `

  // Preload de la próxima
  let next = (index + 1) % imagenes.length
  await preload(imagenes[next])

  const swap = async () => {
    // Fade out solo del fondo
    fondo.classList.add('is-fading')

    // Espera a que termine el fade-out
    await new Promise((resolve) => {
      const handler = (e) => {
        if (e.propertyName !== 'opacity') return
        fondo.removeEventListener('transitionend', handler)
        resolve()
      }
      fondo.addEventListener('transitionend', handler, { once: true })
      setTimeout(resolve, fadeMs + 50) // fallback
    })

    // Cambia la imagen
    index = next
    fondo.style.backgroundImage = `
      linear-gradient(to top, rgba(18,24,35,0.4), rgba(10,14,25,0.5)),
      url(${imagenes[index]})
    `

    // Prepara la próxima
    next = (index + 1) % imagenes.length
    preload(imagenes[next])

    // Forzar reflow y fade in
    void fondo.offsetWidth
    fondo.classList.remove('is-fading')
  }

  const timer = setInterval(swap, everyMs)
  onBeforeUnmount(() => clearInterval(timer))
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Work+Sans:wght@100;300;400;600;800&display=swap');

.inicio {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
}

/* Fondo dinámico */
.fondo {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: opacity 500ms ease-in-out;
  opacity: 1;
  z-index: 0;
}
.fondo.is-fading {
  opacity: 0;
}

/* Contenido encima */
.contenido-banner {
  position: relative;
  z-index: 1;
  padding: 20px;
  background-color: #0c101b;
  max-width: 350px;
  text-align: center;
  border-radius: 40px;
}

.contenedor-img img {
  margin-top: 40px;
  border: 10px solid #00bfff;
  display: block;
  width: 80%;
  margin: auto;
  border-radius: 100%;
  object-fit: cover;
}

h1 {
  margin-top: 10px;
  font-size: 42px;
  font-family: 'Righteous', sans-serif;
}

h2 {
  margin-top: -3.7em;
  font-size: 15px;
  font-weight: normal;
  font-family: 'Work Sans', sans-serif;
}

.redes {
  margin-top: -2em;
}

.redes a {
  color: #fff;
  display: inline-block;
  text-decoration: none;
  border: 1px solid #fff;
  border-radius: 100%;
  width: 42px;
  height: 42px;
  line-height: 42px;
  margin: 20px 5px 0 5px;
  font-size: 20px;
  transition: 0.3s;
  text-align: center;
}

.redes a:hover {
  background-color: #3c3c3c;
  border-color: #3c3c3c;
}
</style>
