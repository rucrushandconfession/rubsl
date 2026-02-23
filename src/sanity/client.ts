import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN
});

const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: unknown) => builder.image(source);

export const revalidate = 300;
