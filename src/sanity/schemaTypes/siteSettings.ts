import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site Title", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image" }),
    defineField({ name: "missionLine", title: "Mission Line", type: "string" }),
    defineField({
      name: "contactInfo",
      title: "Contact Info",
      type: "object",
      fields: [
        defineField({ name: "phone", type: "string" }),
        defineField({ name: "email", type: "string" }),
        defineField({ name: "address", type: "text" })
      ]
    }),
    defineField({
      name: "socials",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "facebook", type: "url" }),
        defineField({ name: "youtube", type: "url" })
      ]
    })
  ]
});
