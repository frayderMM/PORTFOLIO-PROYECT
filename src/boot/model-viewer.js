import { boot } from 'quasar/wrappers'

export default boot(({ app }) => {
  // Tell Vue that <model-viewer> is a custom element
  if (app && app.config && app.config.compilerOptions) {
    const prev = app.config.compilerOptions.isCustomElement
    app.config.compilerOptions.isCustomElement = (tag) => {
      if (tag === 'model-viewer') return true
      return typeof prev === 'function' ? prev(tag) : false
    }
  }
})
