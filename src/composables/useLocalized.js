// Devuelve el texto en el idioma activo a partir de un objeto { es, en }.
// Si recibe un string, lo devuelve tal cual.
import { useI18n } from 'vue-i18n'

export function useLocalized() {
  const { locale } = useI18n()

  function l(value) {
    if (value == null) return ''
    if (typeof value === 'string') return value
    const lang = String(locale.value).startsWith('en') ? 'en' : 'es'
    return value[lang] ?? value.es ?? value.en ?? ''
  }

  return { l, locale }
}
