export default {
    name: "collabtoolObject",
    title: "Samhandlingsverktøy",
    type: "object",
    fields: [
        {
            name: "url",
            title: "Url",
            type: "url",
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'collabtool',
            title: 'Type samhandlingsverktøy',
            type: "reference",
            to: { type: "collabtool" }
        }
    ],
    preview: {
        select: {
            title: 'collabtool.title'
        }
    }
};