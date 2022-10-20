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
      name: "contactPersons",
      title: "Kontaktpersoner",
      type: "array",
      of: [{ type: "reference", to: [{ type: "contactPerson" }] }]
    },
    {
      name: 'employee',
      title: 'Ansatt',
      type: 'reference',
      to: { type: 'employee' },
    },
    {
      name: "completed",
      title: "Ferdigstilt",
      type: "boolean",
    },
    {
      title: 'Bidragsytere',
      name: 'contributors',
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: 'employee' }
      }]
    }
  ],
}
