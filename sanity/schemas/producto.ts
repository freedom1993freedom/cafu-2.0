import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'producto',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'ID (URL)',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'shortDescription',
      title: 'Descripción Corta',
      type: 'string',
    }),
    defineField({
      name: 'longDescription',
      title: 'Descripción Larga',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true, // Permite recortar mejor la imagen
      },
    }),
    defineField({
      name: 'keyFeatures',
      title: 'Puntos Fuertes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Título'},
            {name: 'description', type: 'string', title: 'Descripción'},
          ],
        },
      ],
    }),
    defineField({
      name: 'specs',
      title: 'Especificaciones Técnicas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'key', type: 'string', title: 'Característica'},
            {name: 'value', type: 'string', title: 'Valor'},
          ],
        },
      ],
    }),
  ],
})
