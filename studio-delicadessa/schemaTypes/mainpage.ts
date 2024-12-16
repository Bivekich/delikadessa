import {defineType} from 'sanity'

export default defineType({
  name: 'mainpage',
  title: 'Главная страница',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
    },
  ],
})
