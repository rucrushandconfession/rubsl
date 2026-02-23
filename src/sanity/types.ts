export type SiteSettings = {
  siteTitle: string;
  missionLine: string;
  contactInfo?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  socials?: { facebook?: string; youtube?: string };
};

export type CommitteeMember = {
  _id: string;
  name: string;
  name_en?: string;
  role: string;
  order: number;
  department?: string;
  session?: string;
  facebook?: string;
  photo?: unknown;
};

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  type: "news" | "notice";
  publishedAt: string;
  excerpt?: string;
  coverImage?: unknown;
  body?: unknown[];
  attachments?: { title: string; url: string }[];
};

export type Event = {
  _id: string;
  title: string;
  slug: { current: string };
  startDate: string;
  endDate?: string;
  location?: string;
  coverImage?: unknown;
  description?: unknown[];
  status: "upcoming" | "past";
};

export type GalleryAlbum = {
  _id: string;
  title: string;
  slug: { current: string };
  date: string;
  coverImage?: unknown;
  images?: { image: unknown; caption?: string }[];
};
