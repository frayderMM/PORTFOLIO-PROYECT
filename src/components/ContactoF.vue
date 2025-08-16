<template>
  <section id="contacto" class="contacto">
    <div class="contenido-seccion">
      <h2>CONTACTO</h2>

      <div class="fila">
        <!-- Formulario -->
        <div class="col">
          <form @submit.prevent="enviarMensaje" novalidate>
            <div class="form-group" :class="{ error: errors.nombre }">
              <input
                type="text"
                placeholder="Tu Nombre"
                v-model.trim="form.nombre"
                autocomplete="name"
              />
              <small v-if="errors.nombre">{{ errors.nombre }}</small>
            </div>

            <div class="form-group" :class="{ error: errors.telefono }">
              <input
                type="text"
                placeholder="Número telefónico"
                v-model.trim="form.telefono"
                inputmode="tel"
                autocomplete="tel"
              />
              <small v-if="errors.telefono">{{ errors.telefono }}</small>
            </div>

            <div class="form-group" :class="{ error: errors.email }">
              <input
                type="email"
                placeholder="Dirección de correo"
                v-model.trim="form.email"
                autocomplete="email"
              />
              <small v-if="errors.email">{{ errors.email }}</small>
            </div>

            <div class="form-group" :class="{ error: errors.tema }">
              <input type="text" placeholder="Tema" v-model.trim="form.tema" />
              <small v-if="errors.tema">{{ errors.tema }}</small>
            </div>

            <div class="form-group" :class="{ error: errors.mensaje }">
              <textarea rows="8" placeholder="Mensaje" v-model.trim="form.mensaje"></textarea>
              <small v-if="errors.mensaje">{{ errors.mensaje }}</small>
            </div>

            <button type="submit" :disabled="enviando">
              <span v-if="!enviando">Enviar Mensaje <i class="fa-solid fa-paper-plane"></i></span>
              <span v-else>Enviando…</span>
              <span class="overlay"></span>
            </button>

            <p v-if="exito" class="toast-exito">✅ ¡Mensaje enviado correctamente!</p>
          </form>
        </div>

        <!-- Mapa + Info -->
        <div class="col col-info">
          <div class="map-card">
            <div class="map-wrap">
              <iframe
                :src="MAP_EMBED_SRC"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              ></iframe>

              <!-- Botón flotante para abrir en Google Maps -->
              <a
                class="map-open"
                :href="MAP_LINK"
                target="_blank"
                rel="noopener"
                aria-label="Abrir en Google Maps"
              >
                <i class="fa-solid fa-up-right-from-square"></i>
                <span>Ver en Google Maps</span>
              </a>
            </div>
          </div>

          <div class="info">
            <ul>
              <li><i class="fa-solid fa-location-dot"></i> La Molina, Lima, Perú</li>
              <li><i class="fa-solid fa-mobile-screen"></i> Llámame: +51 925650163</li>
              <li><i class="fa-solid fa-envelope"></i> Email: fraydermezamorveli@gmail.com</li>
            </ul>

            <!-- Enlace visible extra (útil en móviles) -->
            <a class="map-link-inline" :href="MAP_LINK" target="_blank" rel="noopener">
              Abrir en Google Maps
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>
      <!-- .fila -->
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

/** 🔗 Enlaces del mapa */
const MAP_LINK = 'https://maps.app.goo.gl/Gg9YXZw3v5nEXobm7'

// Reemplázalo por el iframe oficial de "Compartir > Insertar un mapa" si quieres el pin exacto
const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=La%20Molina%2C%20Lima%2C%20Per%C3%BA&hl=es&z=14&output=embed'

/** 📬 Estado del formulario */
const form = ref({
  nombre: '',
  telefono: '',
  email: '',
  tema: '',
  mensaje: '',
})

const errors = ref({ nombre: '', telefono: '', email: '', tema: '', mensaje: '' })
const enviando = ref(false)
const exito = ref(false)

/** ✅ Validación básica */
function validar() {
  errors.value = { nombre: '', telefono: '', email: '', tema: '', mensaje: '' }
  let ok = true
  if (!form.value.nombre) {
    errors.value.nombre = 'Ingresa tu nombre.'
    ok = false
  }
  if (!form.value.telefono) {
    errors.value.telefono = 'Ingresa tu número.'
    ok = false
  }
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.value.email || !re.test(form.value.email)) {
    errors.value.email = 'Correo no válido.'
    ok = false
  }
  if (!form.value.tema) {
    errors.value.tema = 'Ingresa el tema.'
    ok = false
  }
  if (!form.value.mensaje) {
    errors.value.mensaje = 'Escribe tu mensaje.'
    ok = false
  }
  return ok
}

/** ✉️ Envío con EmailJS */
async function enviarMensaje() {
  exito.value = false
  if (!validar()) return

  enviando.value = true
  try {
    const templateParams = {
      nombre: form.value.nombre,
      telefono: form.value.telefono,
      correo: form.value.email, // tu template usaba "correo"
      tema: form.value.tema,
      mensaje: form.value.mensaje,
    }

    await emailjs.send(
      'service_ab3hmlm', // Service ID
      'template_t8narqa', // Template ID
      templateParams,
      { publicKey: 'aNlRPcQ05FzfswqEg' }, // Public Key
    )

    exito.value = true
    form.value = { nombre: '', telefono: '', email: '', tema: '', mensaje: '' }
  } catch (e) {
    console.error('EmailJS error:', e)
    alert('❌ Ocurrió un error al enviar. Inténtalo nuevamente.')
  } finally {
    enviando.value = false
  }
}
</script>

<style scoped>
/* Paleta emparejada con tu UI anterior (#0c101b + cian #00bfff) */
.contacto {
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

.contacto h2 {
  font-size: 40px;
  font-family: 'Righteous', sans-serif;
  margin-bottom: 2em;
  color: #00bfff;
  text-align: center;
}

.fila {
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
}

.col {
  flex: 1;
  min-width: 300px;
  position: relative;
}

/* Formulario */
form {
  background-color: #101624;
  border-radius: 25px;
  padding: 2em;
  box-shadow: inset 0 0 10px rgba(0, 191, 255, 0.1);
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 14px 16px;
  margin-bottom: 1.2em;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background-color: #0e1422;
  color: white;
  font-size: 16px;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

input::placeholder,
textarea::placeholder {
  color: #8aa0b2;
}

input:hover,
textarea:hover {
  border-color: rgba(0, 191, 255, 0.2);
}

input:focus,
textarea:focus {
  border-color: #00bfff;
  box-shadow:
    0 0 0 3px rgba(0, 191, 255, 0.1),
    0 8px 22px -8px rgba(0, 191, 255, 0.2);
}

/* Botón */
button {
  cursor: pointer;
  user-select: none;
  background: transparent;
  border: 2px solid #00bfff;
  border-radius: 999px;
  padding: 12px 24px;
  font-size: 15px;
  color: white;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 24px -12px rgba(0, 191, 255, 0.2);
  transition: transform 0.08s ease;
}

button:active {
  transform: translateY(1px);
}

button .overlay {
  position: absolute;
  inset: 0;
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 191, 255, 0.2), #00bfff);
  opacity: 0.25;
  transition: width 0.35s ease;
  z-index: -1;
}

button:hover .overlay {
  width: 100%;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Columna info */
.col-info {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

/* Tarjeta/contendor del mapa */
.map-card {
  width: 100%;
  border-radius: 25px;
  border: 1px solid rgba(0, 191, 255, 0.2);
  box-shadow: 0 0 10px rgba(0, 191, 255, 0.15);
  overflow: hidden;
  background-color: #101624;
}

/* Contenedor con relación de aspecto */
.map-wrap {
  position: relative;
  aspect-ratio: 16 / 9; /* Ajusta 4/3 o 1/1 si prefieres */
  min-height: 280px; /* Garantiza altura en móviles */
}

.map-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Botón flotante para abrir Maps */
.map-open {
  position: absolute;
  right: 12px;
  bottom: 12px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 14px;
  background: rgba(0, 191, 255, 0.15);
  border: 1px solid rgba(0, 191, 255, 0.4);
  color: #e8f6ff;
  text-decoration: none;
  backdrop-filter: blur(6px);
  transition:
    background 0.2s ease,
    transform 0.08s ease;
}

.map-open:hover {
  background: rgba(0, 191, 255, 0.25);
}

.map-open:active {
  transform: translateY(1px);
}

.info {
  background-color: #101624;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(0, 191, 255, 0.2);
  margin-top: 0.25em;
}

.info ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info ul li {
  margin-bottom: 14px;
  color: #b9c2cf;
  display: flex;
  align-items: center;
}

.info ul li i {
  color: #00bfff;
  margin-right: 10px;
  font-size: 18px;
}

/* Enlace adicional bajo los datos de contacto (útil en mobile) */
.map-link-inline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  color: #9edbff;
  text-decoration: none;
  border-bottom: 1px dashed rgba(0, 191, 255, 0.4);
  padding-bottom: 2px;
}

.map-link-inline:hover {
  color: #c8ecff;
  border-bottom-color: rgba(0, 191, 255, 0.7);
}

/* Mensaje de éxito */
.toast-exito {
  margin-top: 12px;
  color: #c8ffea;
  background: rgba(0, 191, 255, 0.08);
  border: 1px solid rgba(0, 191, 255, 0.2);
  padding: 10px 14px;
  border-radius: 10px;
}

/* Responsive */
@media (max-width: 900px) {
  .contacto {
    padding: 2em;
    border-radius: 20px;
  }
  .contacto h2 {
    font-size: 32px;
  }
}
</style>
