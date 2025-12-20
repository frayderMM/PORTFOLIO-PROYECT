<template>
  <div class="pagina-principal">
    <Header />
    <Inicio />
    <SobreMi />
    <Skills />
    <Curriculum />
    <Portfolio />
    <Contacto />
    <Footer />
  </div>
</template>

<script setup>
import Header from 'src/components/HeaderF.vue'
import Inicio from 'src/components/InicioF.vue'
import SobreMi from 'src/components/SobreMi.vue'
import Skills from 'src/components/SkillsF.vue'
import Curriculum from 'src/components/CurriculumF.vue'
import Portfolio from 'src/components/PortfolioF.vue'
import Contacto from 'src/components/ContactoF.vue'
import Footer from 'src/components/FooterF.vue'
</script>

<style scoped>
.pagina-principal {
  font-family: 'Work Sans', sans-serif;
  background-color: #0c101b;
  color: white;
  scroll-behavior: smooth;
}
</style>
