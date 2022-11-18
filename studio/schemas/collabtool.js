export default {
    name: "collabtool",
    title: "Samhandlingsverktøy",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Tittel / Navn på samhandlingsverktøy",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            name: "image",
            title: "Bilde",
            type: "image",
            valitadion: (Rule) => Rule.required(),
        }
    ],
};