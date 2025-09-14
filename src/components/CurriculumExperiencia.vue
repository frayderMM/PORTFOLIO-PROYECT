<template>
  <div class="derecha">
    <!-- Usa la clave del padre o crea una local -->
    <h3>{{ $t('curriculum.experience') }}</h3>

    <div class="carrusel">
      <button
        class="nav-btn"
        @click="prevItem"
        :disabled="indiceActual === 0"
        :aria-label="$t('curriculumExp.prev')"
      >
        ‹
      </button>

      <div class="item der">
        <h4>{{ $t(`curriculumExp.items.${currentId}.title`) }}</h4>
        <span class="casa">{{ $t(`curriculumExp.items.${currentId}.company`) }}</span>
        <span class="fecha">{{ $t(`curriculumExp.items.${currentId}.date`) }}</span>
        <p>{{ $t(`curriculumExp.items.${currentId}.desc`) }}</p>
        <div class="conectord">
          <div class="circulod"></div>
        </div>
      </div>

      <button
        class="nav-btn"
        @click="nextItem"
        :disabled="indiceActual === items.length - 1"
        :aria-label="$t('curriculumExp.next')"
      >
        ›
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Lista por ID (sin textos hardcodeados)
const items = [
  { id: 'promcoser_platform' },
  { id: 'minsur_website_redesign' },
  { id: 'inventory_system' },
  { id: 'crypto_software' },
  { id: 'excel_vba_books' },
  { id: 'sales_dashboard' },
  { id: 'personal_portfolio' },
]

const indiceActual = ref(0)
const currentId = computed(() => items[indiceActual.value]?.id ?? items[0].id)

const nextItem = () => {
  if (indiceActual.value < items.length - 1) indiceActual.value++
}
const prevItem = () => {
  if (indiceActual.value > 0) indiceActual.value--
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
