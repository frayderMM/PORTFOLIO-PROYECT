// Función de Netlify: guarda y lee la nota del botón secreto en Netlify Blobs.
// Sin clave: cualquiera que llegue a /api/notas puede leerla o editarla.
import { getStore } from '@netlify/blobs'

const MAX_CARACTERES = 100000

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' },
  })
}

export default async (req) => {
  const store = getStore('notas-secretas')

  if (req.method === 'GET') {
    const nota = (await store.get('nota', { type: 'json' })) ?? { texto: '', actualizado: null }
    return json(nota)
  }

  if (req.method === 'PUT') {
    let body
    try {
      body = await req.json()
    } catch {
      return json({ error: 'Formato inválido' }, 400)
    }
    if (typeof body?.texto !== 'string') return json({ error: 'Falta el texto' }, 400)
    if (body.texto.length > MAX_CARACTERES) {
      return json({ error: `Máximo ${MAX_CARACTERES} caracteres` }, 413)
    }
    const nota = { texto: body.texto, actualizado: new Date().toISOString() }
    await store.setJSON('nota', nota)
    return json(nota)
  }

  return json({ error: 'Método no permitido' }, 405)
}

export const config = { path: '/api/notas' }
