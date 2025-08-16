<template>
  <section id="portfolio" class="portfolio">
    <div class="contenido-seccion">
      <h2>PORTFOLIO</h2>
      <div class="galeria">
        <div class="proyecto" v-for="(proyecto, i) in proyectos" :key="i">
          <img :src="proyecto.imagen" :alt="proyecto.alt" />
          <div class="overlay">
            <h3>{{ proyecto.titulo }}</h3>
            <p>{{ proyecto.descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const proyectos = [
  {
    imagen: '/img/p1.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 1',
  },
  {
    imagen: '/img/p2.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 2',
  },
  {
    imagen: '/img/p3.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 3',
  },
  {
    imagen: '/img/p4.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 4',
  },
  {
    imagen: '/img/p5.jpg',
    titulo: 'Diseño Creativo',
    descripcion: 'Fotografía',
    alt: 'Proyecto 5',
  },
  {
    imagen: '/img/Portfolio/redes.png',
    titulo: 'Redes',
    descripcion: 'Subneteo con VLSM y CIDR',
    alt: 'Proyecto Calculadora IP',
    link: 'https://tusitio.com/calculadora-redes',
    tecnologias: ['Vue 3', 'JavaScript', 'CIDR', 'Subredes', 'CSV', 'Excel'],
  },
]
</script>

<style scoped>
.portfolio {
  --bg: #0c101b;
  --card: #0c101b;
  --text: #e6f1ff;
  --muted: #aab3c5;
  --accent: #00bfff;
  --accent-weak: rgba(0, 191, 255, 0.12);

  background-color: var(--bg);
  color: var(--text);
  padding: 60px 20px;
}

.contenido-seccion {
  max-width: 1100px;
  margin: auto;
}

h2 {
  font-size: 48px;
  font-family: 'Righteous', sans-serif;
  text-align: center;
  padding: 20px 0;
  color: var(--accent);
  letter-spacing: 2px;
}

.galeria {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
}

.proyecto {
  position: relative;
  max-width: 340px;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 12px;
  background-color: var(--card);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.proyecto:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.proyecto img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.proyecto:hover img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  inset: 0;
  text-align: center;
  background: linear-gradient(180deg, rgba(0, 191, 255, 0.85) 0%, rgba(16, 22, 36, 0.92) 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  transition: opacity 0.4s ease;
  font-size: 18px;
  letter-spacing: 2px;
  opacity: 0;
  color: var(--text);
}

.overlay h3 {
  margin-bottom: 12px;
  font-size: 22px;
  font-weight: bold;
  color: var(--text);
  transition: margin-bottom 0.4s ease;
}

.overlay p {
  font-size: 14px;
  color: var(--muted);
}

.proyecto:hover .overlay {
  opacity: 1;
}

.proyecto:hover .overlay h3 {
  margin-bottom: 0;
}
</style>
