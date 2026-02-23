import { defineArrayMember, defineField, defineType } from "sanity";

export const galleryAlbumType = defineType({
  name: "galleryAlbum",
  title: "Gallery Album",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "date", type: "date" }),
    defineField({ name: "coverImage", type: "image" }),
    defineField({
      name: "images",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [defineField({ name: "image", type: "image" }), defineField({ name: "caption", type: "string" })]
        })
      ]
    })
  ]
});
