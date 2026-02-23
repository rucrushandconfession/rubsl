import { notFound } from "next/navigation";
import { getEventBySlug } from "@/sanity/api";
import { SanityImage } from "@/components/shared/sanity-image";
import { RichText } from "@/components/shared/rich-text";

export default async function EventDetails({ params }: { params: { slug: string } }) {
  const event = await getEventBySlug(params.slug);
  if (!event) notFound();
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <SanityImage image={event.coverImage} alt={event.title} className="h-72 w-full rounded-xl object-cover" />
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-slate-600">{event.location} · {new Date(event.startDate).toLocaleDateString("bn-BD")}</p>
      <RichText value={event.description} />
    </article>
  );
}
