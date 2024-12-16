import {defineType} from 'sanity'

export default defineType({
  name: 'terassa',
  title: 'Терраса',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Краткое описание',
      type: 'text',
    },
    {
      name: 'fullDescription',
      title: 'Полное описание',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Изображение',
      type: 'image',
    },
    {
      name: 'worktime',
      title: 'Время работы',
      type: 'string',
    },
  ],
})
