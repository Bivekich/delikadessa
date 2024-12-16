import {defineType} from 'sanity'

export default defineType({
  name: 'aboutUs',
  title: 'О нас',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название',
      type: 'string',
    },
    {
      name: 'description',
      title: 'О нас маленький текст',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Изображение верхнее',
      type: 'image',
    },
    {
      name: 'image2',
      title: 'Изображение терасса',
      type: 'image',
    },
    {
      name: 'advantages',
      title: 'Преимущества',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'advantageTitle',
              title: 'Преимущество заголовок',
              type: 'string',
            },
            {
              name: 'advantageDescription',
              title: 'Преимущество описание',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
})
