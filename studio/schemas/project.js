export default {
  name: 'project',
  title: 'Prosjekt',
  type: 'document',
  initialValue: {
    completed: false,
  },
  fields: [
    {
      name: 'title',
      title: 'Navn',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc, options) => options.parent.title,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "intro",
      title: "Intro",
      type: "text",
      validation: Rule => Rule.max(50)
    },
    {
      name: "description",
      title: "Beskrivelse",
      type: "text",
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: "completed",
      title: "Ferdigstilt",
      type: "boolean",
    },

    {
      name: "completed123",
      title: "Ferdigstilt123",
      type: "boolean",
    },
    {
      title: 'Ressurser',
      name: 'recourses',
      type: 'array',
      of: [
        {
          title: 'Ressurs',
          name: 'recource',
          type: 'object',
          fields: [
            {
              title: 'Tittel',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Url',
              name: 'url',
              type: 'url',
            }
          ]
        }
      ]
    }
  ],
}
