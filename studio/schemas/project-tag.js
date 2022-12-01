export default {
    name: "projectTag",
    title: "Fagfelt",
    type: "document",
    fields: [
      {
        name: 'tag',
        title: 'Tag',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Kategori',
        type: 'string',
        options: {
          list: [
            {title: 'Utvikling', value: 'development'},
            {title: 'Design', value: 'design'},
            {title: 'Innhold', value: 'content'},
            {title: 'Administrering/Ledelse', value: 'administration'},
            {title: 'Annet', value: 'other'},
          ],
          layout: 'radio'
        }
      }
    ]
  };
