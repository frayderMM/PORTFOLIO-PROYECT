<template>
  <!-- Contenedor de páginas; los componentes viven en cada vista -->
  <div class="main-layout">
    <router-view />
  </div>
</template>

<script setup>
// Este layout solo actúa como contenedor; cada página maneja su propio contenido.
</script>

<style scoped>
.main-layout {
  min-height: 100vh;
  background-color: #0c101b;
  color: white;
}
</style>
