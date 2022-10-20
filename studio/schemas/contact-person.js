export default {
    name: "contactPerson",
    title: "Kontaktperson",
    type: "document",
    fields: [
        {
            name: "employee",
            title: "Navn på person",
            type: 'reference',
            to: { type: 'employee' },
            validation: (Rule) => Rule.required(),
        },
        {
            name: "role",
            title: "Rolle",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'employee.name',
            subtitle: 'role'
        }
    }
};