import { sanityClient } from "@/sanity/client";
import * as q from "@/sanity/queries";
import type { CommitteeMember, Event, GalleryAlbum, Post, SiteSettings } from "@/sanity/types";

const sampleSite: SiteSettings = {
  siteTitle: "বাংলাদেশ ছাত্রলীগ — রাজশাহী বিশ্ববিদ্যালয় শাখা",
  missionLine: "শিক্ষা, ঐক্য ও মানবিক মূল্যবোধে গড়ে উঠুক আগামী প্রজন্ম।",
  contactInfo: { phone: "+৮৮০১XXXXXXXXX", email: "info@rubsl.org", address: "শহীদুল্লাহ কলাভবন সংলগ্ন, রাজশাহী বিশ্ববিদ্যালয়" },
  socials: { facebook: "https://facebook.com", youtube: "https://youtube.com" }
};

export async function safeFetch<T>(query: string, params?: Record<string, unknown>, fallback?: T): Promise<T> {
  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 300 } });
  } catch {
    return fallback as T;
  }
}

export const getSiteSettings = () => safeFetch<SiteSettings>(q.siteSettingsQuery, {}, sampleSite);
export const getLatestUpdates = () => safeFetch<Post[]>(q.latestUpdatesQuery, {}, []);
export const getCommitteeHighlights = () => safeFetch<CommitteeMember[]>(q.committeeHighlightsQuery, {}, []);
export const getUpcomingEvents = () => safeFetch<Event[]>(q.upcomingEventsQuery, {}, []);
export const getGalleryPreview = () => safeFetch<GalleryAlbum[]>(q.galleryPreviewQuery, {}, []);
export const getCommittee = () => safeFetch<CommitteeMember[]>(q.allCommitteeQuery, {}, []);
export const getPostsByType = (type: "news" | "notice") => safeFetch<Post[]>(q.postsByTypeQuery, { type }, []);
export const getPostBySlug = (slug: string) => safeFetch<Post | null>(q.postBySlugQuery, { slug }, null);
export const getEvents = () => safeFetch<Event[]>(q.allEventsQuery, {}, []);
export const getEventBySlug = (slug: string) => safeFetch<Event | null>(q.eventBySlugQuery, { slug }, null);
export const getAlbums = () => safeFetch<GalleryAlbum[]>(q.albumsQuery, {}, []);
export const getAlbumBySlug = (slug: string) => safeFetch<GalleryAlbum | null>(q.albumBySlugQuery, { slug }, null);
