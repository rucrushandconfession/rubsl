import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({ name: "type", type: "string", options: { list: ["news", "notice"] }, validation: (Rule) => Rule.required() }),
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title", maxLength: 96 }, validation: (Rule) => Rule.required() }),
    defineField({ name: "publishedAt", type: "datetime", validation: (Rule) => Rule.required() }),
    defineField({ name: "coverImage", type: "image" }),
    defineField({ name: "excerpt", type: "text", rows: 3 }),
    defineField({ name: "body", type: "array", of: [defineArrayMember({ type: "block" })] }),
    defineField({
      name: "attachments",
      title: "নোটিশ সংযুক্তি",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [defineField({ name: "title", type: "string" }), defineField({ name: "url", type: "url" })]
        })
      ]
    })
  ]
});
