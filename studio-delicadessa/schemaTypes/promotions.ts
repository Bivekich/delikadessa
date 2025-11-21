export default {
  name: 'promotions',
  title: 'Акции и скидки',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Название акции',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
      description: 'Например: "Счастливые часы" или "Скидка на день рождения"'
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'text',
      validation: (Rule: any) => Rule.required().max(300),
      description: 'Краткое описание акции (макс 300 символов)'
    },
    {
      name: 'discount',
      title: 'Размер скидки (%)',
      type: 'number',
      validation: (Rule: any) => Rule.min(0).max(100),
      description: 'Процент скидки (например: 20). Оставь пустым если скидки нет'
    },
    {
      name: 'conditions',
      title: 'Условия акции',
      type: 'text',
      validation: (Rule: any) => Rule.max(200),
      description: 'Условия получения скидки (опционально)'
    },
    {
      name: 'promoCode',
      title: 'Промокод',
      type: 'string',
      description: 'Промокод для получения скидки (опционально, например: BIRTHDAY2024)'
    },
    {
      name: 'image',
      title: 'Изображение акции',
      type: 'image',
      description: 'Картинка для акции (рекомендуемый размер: 600x400px)',
      options: {
        hotspot: true
      }
    },
    {
      name: 'validFrom',
      title: 'Действует с',
      type: 'date',
      description: 'Дата начала акции (опционально)'
    },
    {
      name: 'validUntil',
      title: 'Действует до',
      type: 'date',
      description: 'Дата окончания акции (опционально)'
    },
    {
      name: 'isActive',
      title: 'Активна',
      type: 'boolean',
      description: 'Отображать ли акцию на сайте',
      initialValue: true,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'bookingLink',
      title: 'Показывать кнопку бронирования',
      type: 'boolean',
      description: 'Показывать ли кнопку "Забронировать" на карточке акции',
      initialValue: true
    },
    {
      name: 'order',
      title: 'Порядок отображения',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1),
      description: 'Порядок отображения на сайте (1, 2, 3...)',
      initialValue: 1
    }
  ],
  orderings: [
    {
      title: 'По порядку',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'По дате создания',
      name: 'createdDesc',
      by: [{ field: '_createdAt', direction: 'desc' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      discount: 'discount',
      isActive: 'isActive',
      media: 'image'
    },
    prepare(selection: any) {
      const { title, discount, isActive } = selection;
      const status = isActive ? '✅ Активна' : '❌ Неактивна';
      const discountText = discount ? ` (-${discount}%)` : '';
      return {
        title: `${title}${discountText}`,
        subtitle: status,
        media: selection.media
      };
    }
  }
}
