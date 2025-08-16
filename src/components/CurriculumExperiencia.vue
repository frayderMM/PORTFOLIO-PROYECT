<template>
  <div class="derecha">
    <h3>Experiencia</h3>

    <div class="carrusel">
      <button class="nav-btn" @click="prevItem" :disabled="indiceActual === 0">‹</button>

      <div class="item der">
        <h4>{{ experiencia[indiceActual].titulo }}</h4>
        <span class="casa">{{ experiencia[indiceActual].empresa }}</span>
        <span class="fecha">{{ experiencia[indiceActual].fecha }}</span>
        <p>{{ experiencia[indiceActual].descripcion }}</p>
        <div class="conectord">
          <div class="circulod"></div>
        </div>
      </div>

      <button class="nav-btn" @click="nextItem" :disabled="indiceActual === experiencia.length - 1">
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const experiencia = [
  {
    titulo: 'Plataforma Web PROMCOSER',
    empresa: 'PROMCOSER',
    fecha: '2024',
    descripcion:
      'Gestión de personal, maquinaria y clientes, con digitalización del "Parte Diario" y reportes interactivos. Tecnologías: Visual Studio, Quasar, SQL Server, Git/GitHub.',
  },
  {
    titulo: 'Rediseño Web',
    empresa: 'Minsur',
    fecha: '2025',
    descripcion:
      'Sitio oficial con Quasar (Vue) y .NET Core, diseño responsivo e integración de APIs.',
  },
  {
    titulo: 'Sistema de Inventario',
    empresa: 'Ferretería',
    fecha: '2024',
    descripcion: 'Python y SQL Server con API SUNAT para validación de datos en tiempo real.',
  },
  {
    titulo: 'Software de Criptografía',
    empresa: 'Proyecto personal',
    fecha: '2025',
    descripcion:
      'Java con 5 algoritmos (CSRD, NSRPQ, Transposición Columnar, Vigenère y XOR), en ejecución serial y paralela.',
  },
  {
    titulo: 'Macro Excel VBA – Libros Electrónicos',
    empresa: 'Cooperativa Cafetalera Inkawasi',
    fecha: '2024',
    descripcion:
      'Automatización para generar TXT del Registro de Activos Fijos y envío a SUNAT vía PLE.',
  },
  {
    titulo: 'Dashboard de Ventas',
    empresa: 'Cooperativa Cafetalera Inkawasi',
    fecha: '2025',
    descripcion: 'Control y análisis de ventas por lote en Excel.',
  },
  {
    titulo: 'Portafolio Personal',
    empresa: 'Proyecto personal',
    fecha: '2025',
    descripcion: 'Sitio web en Vue/Quasar, HTML, CSS y JS, publicado en Netlify.',
  },
]

const indiceActual = ref(0)

const nextItem = () => {
  if (indiceActual.value < experiencia.length - 1) {
    indiceActual.value++
  }
}

const prevItem = () => {
  if (indiceActual.value > 0) {
    indiceActual.value--
  }
}
</script>

<style scoped>
.derecha {
  background-color: #0c101b;
  width: 100%;
  max-width: 100%;
  margin: 3em auto;
  border-radius: 40px;
  padding: 3em 4em;
  color: white;
  font-family: 'Work Sans', sans-serif;
  box-shadow: 0 0 15px rgba(0, 140, 187, 0.3);
}

.derecha h3 {
  font-size: 40px;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 2em;
  color: #00bfff;
  text-align: center;
}

.carrusel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
}

.nav-btn {
  background: none;
  border: none;
  color: #00bfff;
  font-size: 2.5em;
  cursor: pointer;
  transition: 0.2s ease;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.item.der {
  flex: 1;
  position: relative;
  margin-bottom: 2.5em;
  padding: 1.5em 2em;
  border-left: 4px solid #00bfff;
  background-color: #101624;
  border-radius: 25px;
  text-align: left;
  min-width: 0;
}

.item.der h4 {
  font-size: 24px;
  color: #00bfff;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 0.3em;
}

.item.der .casa {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 0.2em;
  display: block;
}

.item.der .fecha {
  font-size: 14px;
  color: #aaa;
  margin-bottom: 1em;
  display: block;
}

.item.der p {
  font-size: 16px;
  line-height: 1.6;
}

.conectord {
  position: absolute;
  left: -14px;
  top: 1.5em;
  width: 24px;
  height: 24px;
  background: #0c101b;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circulod {
  width: 12px;
  height: 12px;
  background-color: #00bfff;
  border-radius: 50%;
  border: 2px solid #0c101b;
}

@media screen and (max-width: 768px) {
  .derecha {
    max-width: 95%;
    padding: 2em;
  }

  .derecha h3 {
    font-size: 28px;
  }

  .item.der {
    padding: 1em;
  }

  .item.der h4 {
    font-size: 20px;
  }

  .nav-btn {
    font-size: 2em;
  }
}
</style>
