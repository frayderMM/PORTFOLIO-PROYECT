// src/boot/i18n.js
import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

export default boot(({ app }) => {
  const saved = localStorage.getItem('lang')
  const browser = (navigator.language || 'es').split('-')[0]
  const initial = saved || (['es', 'en'].includes(browser) ? browser : 'es')

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: initial,
    fallbackLocale: 'en',
    messages,
  })

  document.documentElement.lang = initial
  app.use(i18n)
})
