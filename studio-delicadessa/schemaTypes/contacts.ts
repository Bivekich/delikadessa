import {defineType} from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Контакты',
  type: 'document',
  fields: [
    {
      name: 'worktime',
      title: 'Часы работы',
      type: 'text',
    },
    {
      name: 'forconnect',
      title: 'Вля связи',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Где мы находимся',
      type: 'string',
    },
    {
      name: 'shortaddress',
      title: 'Короткий адрес',
      type: 'string',
    },
  ],
})
