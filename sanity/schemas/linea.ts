import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linea',
  title: 'Línea de Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Línea',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagen Principal',
      type: 'image',
    }),
    defineField({
      name: 'color',
      title: 'Color Representativo',
      type: 'string',
    }),
    defineField({
      name: 'sublineas',
      title: 'Sub-Líneas',
      type: 'array',
      of: [{type: 'reference', to: {type: 'sublinea'}}],
    }),
  ],
})
