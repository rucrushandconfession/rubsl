import { defineArrayMember, defineField, defineType } from "sanity";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "startDate", type: "datetime", validation: (Rule) => Rule.required() }),
    defineField({ name: "endDate", type: "datetime" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "coverImage", type: "image" }),
    defineField({ name: "description", type: "array", of: [defineArrayMember({ type: "block" })] }),
    defineField({ name: "status", type: "string", options: { list: ["upcoming", "past"] }, initialValue: "upcoming" })
  ]
});
