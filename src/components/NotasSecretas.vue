<template>
  <Teleport to="body">
    <Transition name="notas">
      <div v-if="abierto" class="fondo" @click.self="cerrar">
        <div class="caja" role="dialog" aria-modal="true" aria-labelledby="notas-titulo">
          <header class="cabecera">
            <h2 id="notas-titulo"><i class="fa-solid fa-note-sticky" aria-hidden="true"></i> Mis notas</h2>
            <div class="acciones">
              <button type="button" class="icono" aria-label="Cerrar" @click="cerrar">
                <i class="fa-solid fa-xmark" aria-hidden="true"></i>
              </button>
            </div>
          </header>


          <!-- Nota -->
          <template v-if="fase === 'nota'">
            <textarea
              ref="area"
              v-model="texto"
              class="area"
              placeholder="Escribe aquí… se guarda solo y lo verás en cualquier dispositivo."
              :maxlength="MAX"
              @input="programarGuardado"
            ></textarea>
            <footer class="pie">
              <span class="estado" :class="estado.tipo">
                <i :class="estado.icono" aria-hidden="true"></i> {{ estado.texto }}
              </span>
              <span class="contador">{{ texto.length }} / {{ MAX }}</span>
              <button type="button" class="principal" :disabled="!pendiente || guardando" @click="guardar">
                Guardar
              </button>
            </footer>
          </template>

          <div v-else class="cargando">
            <template v-if="error">
              <p><i class="fa-solid fa-triangle-exclamation" aria-hidden="true"></i> {{ error }}</p>
              <button type="button" class="principal" @click="cargar">Reintentar</button>
            </template>
            <p v-else><i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Cargando…</p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({ abierto: { type: Boolean, default: false } })
const emit = defineEmits(['cerrar'])

const API = '/api/notas'
const MAX = 100000

const fase = ref('cargando') // 'cargando' | 'nota'
const texto = ref('')
const actualizado = ref(null)
const pendiente = ref(false)
const guardando = ref(false)
const error = ref('')
const area = ref(null)
let temporizador = null

async function pedir(method, body) {
  const res = await fetch(API, {
    method,
    headers: { 'content-type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new Error(data.error || `Error ${res.status}`)
  return data
}

async function cargar() {
  error.value = ''
  try {
    const nota = await pedir('GET')
    if (!pendiente.value) texto.value = nota.texto || ''
    actualizado.value = nota.actualizado
    fase.value = 'nota'
    await nextTick()
    area.value?.focus()
  } catch (e) {
    error.value = `No se pudo cargar la nota (${e.message}).`
  }
}

function programarGuardado() {
  pendiente.value = true
  clearTimeout(temporizador)
  temporizador = setTimeout(guardar, 1200)
}

async function guardar() {
  clearTimeout(temporizador)
  if (!pendiente.value || guardando.value) return
  guardando.value = true
  error.value = ''
  const enviado = texto.value
  try {
    const nota = await pedir('PUT', { texto: enviado })
    actualizado.value = nota.actualizado
    // Si siguió escribiendo mientras se guardaba, queda pendiente
    pendiente.value = texto.value !== enviado
    if (pendiente.value) programarGuardado()
  } catch (e) {
    error.value = `No se pudo guardar (${e.message}).`
  } finally {
    guardando.value = false
  }
}

async function cerrar() {
  if (pendiente.value) await guardar()
  emit('cerrar')
}

const estado = computed(() => {
  if (error.value) return { tipo: 'mal', icono: 'fa-solid fa-triangle-exclamation', texto: error.value }
  if (guardando.value) return { tipo: '', icono: 'fa-solid fa-spinner fa-spin', texto: 'Guardando…' }
  if (pendiente.value) return { tipo: '', icono: 'fa-regular fa-pen-to-square', texto: 'Cambios sin guardar' }
  if (!actualizado.value) return { tipo: '', icono: 'fa-regular fa-file', texto: 'Nota vacía' }
  const f = new Date(actualizado.value)
  const cuando = f.toLocaleString('es-PE', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })
  return { tipo: 'bien', icono: 'fa-solid fa-cloud', texto: `Guardado · ${cuando}` }
})

// Al abrir: traer la última versión
watch(
  () => props.abierto,
  (v) => {
    if (v) {
      if (fase.value !== 'nota') fase.value = 'cargando'
      cargar()
    }
  },
)

// Al volver a la pestaña: traer cambios hechos desde otro dispositivo
function alVolver() {
  if (props.abierto && fase.value === 'nota' && !pendiente.value && !document.hidden) cargar()
}
function onTecla(e) {
  if (e.key === 'Escape' && props.abierto) cerrar()
}
onMounted(() => {
  document.addEventListener('visibilitychange', alVolver)
  document.addEventListener('keydown', onTecla)
})
onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', alVolver)
  document.removeEventListener('keydown', onTecla)
  clearTimeout(temporizador)
})
</script>

<style scoped>
.fondo {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 16px;
  background: rgba(5, 8, 15, 0.75);
  backdrop-filter: blur(6px);
}
.caja {
  display: flex;
  flex-direction: column;
  width: min(640px, 100%);
  max-height: calc(100vh - 32px);
  border-radius: 18px;
  overflow: hidden;
  background: #101624;
  border: 1px solid rgba(0, 191, 255, 0.3);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  color: #e6f1ff;
  font-family: 'Work Sans', sans-serif;
}
.cabecera {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.cabecera h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}
.cabecera h2 i {
  color: #00bfff;
  margin-right: 6px;
}
.acciones {
  display: flex;
  gap: 6px;
}
.icono {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #c9d3e3;
  cursor: pointer;
}
.icono:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}


.area {
  flex: 1;
  min-height: 340px;
  padding: 18px;
  border: none;
  resize: vertical;
  background: transparent;
  color: #e6f1ff;
  font: inherit;
  font-size: 16px;
  line-height: 1.6;
}
.area:focus {
  outline: none;
}
.pie {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 13px;
}
.estado {
  flex: 1;
  color: #aab3c5;
}
.estado.bien i {
  color: #4ade80;
}
.estado.mal {
  color: #f87171;
}
.contador {
  color: #5d6a82;
  font-size: 12px;
}
.principal {
  padding: 8px 16px;
  border-radius: 999px;
  border: none;
  background: #1e90ff;
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}
.principal:disabled {
  opacity: 0.4;
  cursor: default;
}
.cargando {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 40px;
  text-align: center;
  color: #aab3c5;
}
.cargando p {
  margin: 0;
}

.notas-enter-active,
.notas-leave-active {
  transition: opacity 0.2s ease;
}
.notas-enter-active .caja,
.notas-leave-active .caja {
  transition: transform 0.2s ease;
}
.notas-enter-from,
.notas-leave-to {
  opacity: 0;
}
.notas-enter-from .caja,
.notas-leave-to .caja {
  transform: translateY(12px) scale(0.98);
}
</style>
