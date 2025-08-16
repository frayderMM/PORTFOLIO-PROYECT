<template>
  <div class="saludo">
    <h1>{{ mensaje }}</h1>
    <button @click="cambiarMensaje">Cambiar mensaje</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mensaje = ref('¡Hola desde Vue!')

function cambiarMensaje() {
  mensaje.value = '¡Mensaje actualizado!'
}
</script>

<style scoped>
.saludo {
  text-align: center;
  padding: 20px;
}

button {
  margin-top: 10px;
  padding: 8px 16px;
  font-size: 16px;
}
</style>
