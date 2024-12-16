import {defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Меню',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'pdf',
      title: 'Фаил',
      type: 'file',
    },
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
    },
  ],
})
