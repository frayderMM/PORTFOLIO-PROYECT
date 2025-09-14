<template>
  <section id="curriculum" class="curriculum">
    <div class="contenido-seccion">
      <h2>{{ $t('curriculum.title') }}</h2>
      <h3>{{ $t('curriculum.education') }}</h3>
      <div class="bloques">
        <Educacion />
        <Experiencia />
      </div>
    </div>
  </section>
</template>

<script setup>
import Educacion from './CurriculumEducacion.vue'
import Experiencia from './CurriculumExperiencia.vue'
</script>

<style scoped>
.curriculum {
  background-color: #0c101b;
  padding: 4em 2em;
  color: white;
  font-family: 'Work Sans', sans-serif;
}

.contenido-seccion {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.curriculum h2 {
  font-size: 48px;
  color: #ffffff;
  font-family: 'Righteous', sans-serif;
  /* margin-bottom: 2em; */
  font-size: 48px;
  font-family: 'Righteous', sans-serif;
  text-align: center;
  /* padding-bottom: 30px; */
}

.bloques {
  display: flex;
  flex-direction: column;
  gap: 3em;
  align-items: center;
  max-width: 100%;
}

/* Responsive (opcional pero incluido por buenas prácticas) */
@media screen and (max-width: 600px) {
  .curriculum h2 {
    font-size: 32px;
  }

  .bloques {
    gap: 2em;
  }
}

h3 {
  font-size: 28px;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 25px;
  text-align: center;
}
</style>
