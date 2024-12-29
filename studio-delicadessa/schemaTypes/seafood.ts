export default {
  name: 'seafood',
  title: 'Аквариум',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название (для админки)',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Фотография',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Порядок отображения',
      type: 'number',
    },
  ],
}
