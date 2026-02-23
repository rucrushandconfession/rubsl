import { notFound } from "next/navigation";
import { getPostBySlug } from "@/sanity/api";
import { SanityImage } from "@/components/shared/sanity-image";
import { RichText } from "@/components/shared/rich-text";

export default async function NewsDetails({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post || post.type !== "news") notFound();
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <SanityImage image={post.coverImage} alt={post.title} className="h-72 w-full rounded-xl object-cover" />
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <RichText value={post.body} />
    </article>
  );
}
