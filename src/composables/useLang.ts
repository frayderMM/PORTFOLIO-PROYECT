// src/composables/useLang.ts
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLang() {
  const { locale } = useI18n() // instancia global

  const code = computed(() => locale.value.toUpperCase())

  function setLanguage(l: 'es' | 'en') {
    locale.value = l
    localStorage.setItem('lang', l)
    document.documentElement.lang = l
  }

  function toggleLanguage() {
    setLanguage(locale.value === 'es' ? 'en' : 'es')
  }

  return { locale, code, setLanguage, toggleLanguage }
}
