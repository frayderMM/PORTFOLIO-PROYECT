<template>
  <div class="lang-ticker" role="marquee" aria-label="Lenguajes de programación">
    <div class="ticker-track" :style="trackStyle">
      <div class="ticker-group" v-for="n in 2" :key="n">
        <div class="lang-chip" v-for="(item, i) in items" :key="n + '-' + i">
          <i :class="item.icon" aria-hidden="true"></i>
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => [
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'C#', icon: 'devicon-csharp-plain colored' },
      { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'Julia', icon: 'devicon-julia-plain colored' },
      { name: 'Kotlin', icon: 'devicon-kotlin-plain colored' },
      { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain colored' },
    ],
  },
  speed: {
    // px per second
    type: Number,
    default: 60,
  },
})

const trackStyle = computed(() => ({
  '--ticker-speed': `${props.speed}s`,
}))
</script>

<style scoped>
.lang-ticker {
  --bg: rgba(14, 20, 34, 0.45);
  --bd: rgba(30, 144, 255, 0.2);
  --glow: rgba(30, 144, 255, 0.25);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--bd);
  border-radius: 12px;
  background: var(--bg);
  padding: 8px 0;
  mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
}
.ticker-track {
  display: flex;
  width: max-content;
  animation: scroll var(--ticker-speed) linear infinite;
}
.lang-ticker:hover .ticker-track {
  animation-play-state: paused;
}
.ticker-group {
  display: flex;
}
.lang-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 10px;
  padding: 6px 12px;
  border: 1px solid var(--bd);
  border-radius: 999px;
  background: rgba(17, 24, 42, 0.35);
  box-shadow: 0 0 8px var(--glow) inset;
  white-space: nowrap;
}
.lang-chip i {
  font-size: 18px;
}
.lang-chip span {
  font-size: 13px;
  color: #d8ecff;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
