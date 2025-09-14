<template>
  <footer class="site-footer" role="contentinfo">
    <!-- Botón ir arriba -->
    <button
      class="to-top"
      type="button"
      :aria-label="$t('footer.goTop')"
      @click="scrollTo('inicio')"
    >
      <i class="fa-solid fa-angles-up" aria-hidden="true"></i>
    </button>

    <!-- Redes sociales -->
    <nav class="social" :aria-label="$t('footer.socialNav')">
      <ul>
        <li>
          <a
            href="https://web.facebook.com/profile.php?id=61559889902327"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('footer.socials.facebook')"
            :title="$t('footer.socials.facebook')"
          >
            <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
            <span class="sr-only">{{ $t('footer.socials.facebook') }}</span>
          </a>
        </li>
        <li>
          <a
            href="https://x.com/FrayderMeza"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('footer.socials.x')"
            :title="$t('footer.socials.x')"
          >
            <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
            <span class="sr-only">{{ $t('footer.socials.x') }}</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/bray_aa_nn/"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('footer.socials.instagram')"
            :title="$t('footer.socials.instagram')"
          >
            <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            <span class="sr-only">{{ $t('footer.socials.instagram') }}</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/frayder/"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('footer.socials.linkedin')"
            :title="$t('footer.socials.linkedin')"
          >
            <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            <span class="sr-only">{{ $t('footer.socials.linkedin') }}</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/frayderMM"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="$t('footer.socials.github')"
            :title="$t('footer.socials.github')"
          >
            <i class="fa-brands fa-github" aria-hidden="true"></i>
            <span class="sr-only">{{ $t('footer.socials.github') }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <p class="smallprint">
      {{ $t('footer.copyrightPrefix', { year: new Date().getFullYear(), name: 'Frayder Meza' }) }}
    </p>
  </footer>
</template>

<script setup>
import { nextTick } from 'vue'

function scrollTo(id) {
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}
</script>

<style scoped>
/* ====== Paleta (ajústala a tu gusto) ====== */
.site-footer {
  --bg: #101624; /* fondo principal */
  --card: #0c101b; /* panel/contraste */
  --text: #e6f1ff; /* texto principal */
  --muted: #aab3c5; /* texto secundario */
  --accent: #00bfff; /* azul de tu timeline */
  --accent-weak: rgba(0, 191, 255, 0.18);
  --ring: rgba(0, 191, 255, 0.45);
}

/* ====== Layout ====== */
.site-footer {
  background: linear-gradient(180deg, var(--bg), #0b1220 70%);
  color: var(--text);
  text-align: center;
  padding: 56px 16px 36px;
  position: relative;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

/* Borde/acento para “emparejar” con tu .item.der */
.site-footer::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 4px;
  background: linear-gradient(90deg, var(--accent), transparent 60%);
  opacity: 0.9;
}

/* ====== Botón ir arriba ====== */
.to-top {
  position: absolute;
  left: 50%;
  top: -28px;
  transform: translateX(-50%);
  width: 56px;
  height: 56px;
  border-radius: 999px;
  border: 1px solid var(--accent);
  background: radial-gradient(100% 100% at 50% 0%, var(--accent-weak), var(--card));
  color: var(--text);
  display: grid;
  place-items: center;
  font-size: 18px;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.35),
    0 0 0 0 var(--ring);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
  cursor: pointer;
}
.to-top:hover {
  transform: translateX(-50%) translateY(-2px);
}
.to-top:focus-visible {
  outline: none;
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.35),
    0 0 0 6px var(--ring);
}

/* ====== Redes ====== */
.social ul {
  list-style: none;
  padding: 0;
  margin: 40px auto 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}
.social a {
  --size: 46px;
  width: var(--size);
  height: var(--size);
  display: inline-grid;
  place-items: center;
  border-radius: 999px;
  text-decoration: none;
  color: var(--text);
  background: linear-gradient(180deg, var(--card), #0b1220);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;
  position: relative;
}
.social a::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  box-shadow: 0 0 0 0 var(--ring);
  transition: box-shadow 0.18s ease;
}
.social a:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  box-shadow:
    inset 0 0 20px var(--accent-weak),
    0 8px 20px rgba(0, 0, 0, 0.35);
}
.social a:focus-visible {
  outline: none;
  border-color: var(--accent);
}
.social a:focus-visible::after {
  box-shadow: 0 0 0 6px var(--ring);
}
.social i {
  font-size: 20px;
}

/* ====== Texto pequeño ====== */
.smallprint {
  margin-top: 18px;
  color: var(--muted);
  font-size: 13px;
}

/* ====== Utilidad accesible ====== */
.sr-only {
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* ====== Responsivo ====== */
@media (min-width: 640px) {
  .social a {
    --size: 50px;
  }
  .site-footer {
    padding: 64px 24px 40px;
  }
}
</style>
