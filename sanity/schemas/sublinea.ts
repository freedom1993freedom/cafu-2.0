import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'sublinea',
  title: 'Sub-Línea',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la Sub-Línea',
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
      name: 'productos',
      title: 'Productos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'producto'}}],
    }),
  ],
})