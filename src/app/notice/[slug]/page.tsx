import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/sanity/api";
import { RichText } from "@/components/shared/rich-text";

export default async function NoticeDetails({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post || post.type !== "notice") notFound();
  return (
    <article className="mx-auto max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <RichText value={post.body} />
      {post.attachments?.length ? (
        <div className="space-y-2 rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="font-semibold">সংযুক্তি</h3>
          {post.attachments.map((a, i) => (
            <Link key={i} href={a.url} className="block text-teal-700 underline" target="_blank">{a.title}</Link>
          ))}
        </div>
      ) : null}
    </article>
  );
}
