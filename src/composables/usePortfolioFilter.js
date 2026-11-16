// Estado compartido con la sección Proyectos:
// - Habilidades → filtrar proyectos por tecnología
// - Trayectoria → saltar a un proyecto concreto
import { ref } from 'vue'

const techFilter = ref(null) // { label, match: [] } | null
const focusId = ref(null) // id del proyecto a resaltar

function scrollToExplorer() {
  const el = document.getElementById('portfolio-explorar') || document.getElementById('portfolio')
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function usePortfolioFilter() {
  function filterByTech(label, match = [label]) {
    techFilter.value = { label, match }
    scrollToExplorer()
  }
  function clearTech() {
    techFilter.value = null
  }
  function focusProject(id) {
    techFilter.value = null
    focusId.value = null
    // en el siguiente tick para que el watcher se dispare aunque sea el mismo id
    setTimeout(() => (focusId.value = id))
  }
  return { techFilter, focusId, filterByTech, clearTech, focusProject }
}
