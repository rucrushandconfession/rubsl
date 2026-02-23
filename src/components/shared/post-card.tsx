import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SanityImage } from "@/components/shared/sanity-image";
import type { Post } from "@/sanity/types";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card>
      <SanityImage image={post.coverImage} alt={post.title} className="h-48 w-full rounded-t-xl object-cover" />
      <CardHeader>
        <Badge className={post.type === "notice" ? "bg-blue-100 text-blue-700" : ""}>{post.type === "news" ? "সংবাদ" : "নোটিশ"}</Badge>
        <h3 className="mt-3 line-clamp-2 text-lg font-semibold">{post.title}</h3>
        <p className="text-sm text-slate-500">{new Date(post.publishedAt).toLocaleDateString("bn-BD")}</p>
      </CardHeader>
      <CardContent>
        <p className="mb-4 line-clamp-3 text-sm text-slate-600">{post.excerpt || "বিস্তারিত জানতে ক্লিক করুন।"}</p>
        <Link href={`/${post.type}/${post.slug.current}`} className="text-sm font-semibold text-teal-700">
          বিস্তারিত পড়ুন →
        </Link>
      </CardContent>
    </Card>
  );
}
