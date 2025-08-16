<template>
  <section id="inicio" style="scroll-margin-top: 100px" class="inicio">
    <div class="contenido-banner">
      <div class="contenedor-img">
        <img src="/img/hero.jpg" alt="Foto de Frayder Meza" />
      </div>
      <h1>Frayder Meza</h1>
      <h2>Ingeniero de Software - Experto UI/UX</h2>

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
// No se necesita lógica JS para esta sección
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Work+Sans:wght@100;300;400;600;800&display=swap');

.inicio {
  background:
    linear-gradient(
      to top,
      rgba(18, 24, 35, 0.7),
      /* azul grisáceo oscuro */ rgba(10, 14, 25, 0.9) /* azul casi negro */
    ),
    url('/img/esan.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contenido-banner {
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
  margin-top: -5em;
  font-size: 15px;
  font-weight: normal;
  font-family: 'Work Sans', sans-serif;
}

.redes {
  margin-top: 1em;
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

@keyframes slideInCenter {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  60% {
    transform: translateX(-20px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
  }
}
</style>
