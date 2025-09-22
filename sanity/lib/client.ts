import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  // La propiedad 'useCdn' se elimina, ya que Sanity V3 la maneja automáticamente.
  // Por defecto, usará el CDN (la opción recomendada).
})

