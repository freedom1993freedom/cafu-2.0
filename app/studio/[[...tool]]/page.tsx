'use client'

/**
 * Este componente carga el Sanity Studio.
 * Reemplaza el archivo generado automáticamente que causaba errores.
 */
import {NextStudio} from 'next-sanity/studio'
import config from '@/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}
