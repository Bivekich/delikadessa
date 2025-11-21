export default {
  name: 'reviews',
  title: 'Отзывы',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Имя гостя',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'text',
      title: 'Текст отзыва',
      type: 'text',
      validation: (Rule: any) => Rule.required().min(10).max(500)
    },
    {
      name: 'rating',
      title: 'Рейтинг',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
      description: 'От 1 до 5 звезд'
    },
    {
      name: 'date',
      title: 'Дата отзыва',
      type: 'datetime',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Фото из отзыва (опционально)',
      type: 'image',
      description: 'Скриншот переписки, фото блюда и т.д.'
    },
    {
      name: 'avatar',
      title: 'Фото гостя (опционально)',
      type: 'image',
      description: 'Аватар или фото автора отзыва'
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'text',
      media: 'avatar'
    }
  }
}
