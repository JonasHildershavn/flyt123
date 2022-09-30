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
      name: 'projectLeader',
      title: 'Prosjektleder',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'techLead',
      title: 'Tech lead',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'designLead',
      title: 'Design lead',
      type: 'reference',
      to: {type: 'author'},
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
  ],
}
