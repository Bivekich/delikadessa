export default {
  name: 'advantages',
  title: 'Преимущества',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Например: "Лет опыта" или "Довольных гостей"'
    },
    {
      name: 'number',
      title: 'Число',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Например: "10" или "5000"'
    },
    {
      name: 'suffix',
      title: 'Суффикс (опционально)',
      type: 'string',
      description: 'Например: "+" или "%". Отобразится после числа'
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: (Rule: any) => Rule.max(150),
      description: 'Краткое описание преимущества (макс 150 символов)'
    },
    {
      name: 'icon',
      title: 'Иконка',
      type: 'string',
      options: {
        list: [
          { title: '🏆 Награда', value: 'award' },
          { title: '👥 Люди', value: 'users' },
          { title: '🕐 Время', value: 'clock' },
          { title: '🍽️ Блюда', value: 'utensils' },
          { title: '❤️ Сердце', value: 'heart' },
          { title: '⭐ Звезда', value: 'star' },
          { title: '🏆 Трофей', value: 'trophy' },
          { title: '💎 Бриллиант', value: 'gem' }
        ]
      },
      validation: (Rule: any) => Rule.required(),
      description: 'Выберите иконку для преимущества'
    },
    {
      name: 'order',
      title: 'Порядок отображения',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1),
      description: 'Порядок отображения на сайте (1, 2, 3, 4...)',
      initialValue: 1
    }
  ],
  orderings: [
    {
      title: 'По порядку',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      number: 'number',
      order: 'order'
    },
    prepare(selection: any) {
      const { title, number, order } = selection;
      return {
        title: `${number} - ${title}`,
        subtitle: `Порядок: ${order}`
      };
    }
  }
}
