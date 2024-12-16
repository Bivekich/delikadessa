import {defineType} from 'sanity'

export default defineType({
  name: 'cakes',
  title: 'Торты',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
    },
  ],
})
