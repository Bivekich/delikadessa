import {defineType} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Галерея',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: ['Внутри', 'Блюда'],
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
})
