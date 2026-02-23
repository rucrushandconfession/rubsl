import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;
export const latestUpdatesQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...6]`;
export const committeeHighlightsQuery = groq`*[_type == "committeeMember"] | order(order asc)[0...6]`;
export const upcomingEventsQuery = groq`*[_type == "event" && status == "upcoming"] | order(startDate asc)[0...3]`;
export const galleryPreviewQuery = groq`*[_type == "galleryAlbum"] | order(date desc)[0...8]{..., "previewImage": coalesce(coverImage, images[0].image)}`;
export const allCommitteeQuery = groq`*[_type == "committeeMember"] | order(order asc)`;
export const postsByTypeQuery = groq`*[_type == "post" && type == $type] | order(publishedAt desc)`;
export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`;
export const allEventsQuery = groq`*[_type == "event"] | order(startDate desc)`;
export const eventBySlugQuery = groq`*[_type == "event" && slug.current == $slug][0]`;
export const albumsQuery = groq`*[_type == "galleryAlbum"] | order(date desc)`;
export const albumBySlugQuery = groq`*[_type == "galleryAlbum" && slug.current == $slug][0]`;
