// import { IoPerson } from "react-icons/ri";

export default {
  name: "author",
  title: "Forfattere",
  type: "document",
  // icon: IoPerson,
  fields: [
    {
      name: "name",
      title: "Navn",
      type: "string",
      valitadion: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Bilde",
      type: "image",
      valitadion: (Rule) => Rule.required(),
    },
  ],
};
