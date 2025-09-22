import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

// CAMBIO: La ruta ahora apunta a la carpeta correcta dentro de tu proyecto
import {schemaTypes} from './sanity/schemas'

// Leemos las variables de entorno para conectar con el proyecto correcto
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio', 
  name: 'cafu_content_studio',
  title: 'Cafu Content Studio',
  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
