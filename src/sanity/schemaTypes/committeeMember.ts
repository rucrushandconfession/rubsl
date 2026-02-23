import { defineField, defineType } from "sanity";

export const committeeMemberType = defineType({
  name: "committeeMember",
  title: "Committee Member",
  type: "document",
  fields: [
    defineField({ name: "name", title: "নাম (বাংলা)", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "name_en", title: "Name (English)", type: "string" }),
    defineField({ name: "role", title: "পদবি", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "order", title: "ক্রম", type: "number", initialValue: 100 }),
    defineField({ name: "photo", title: "ছবি", type: "image" }),
    defineField({ name: "department", title: "বিভাগ", type: "string" }),
    defineField({ name: "session", title: "সেশন/বর্ষ", type: "string" }),
    defineField({ name: "facebook", title: "ফেসবুক", type: "url" })
  ]
});
