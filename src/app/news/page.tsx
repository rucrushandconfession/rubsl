import { PageHero } from "@/components/shared/page-hero";
import { PostCard } from "@/components/shared/post-card";
import { Card } from "@/components/ui/card";
import { getPostsByType } from "@/sanity/api";

export const metadata = { title: "সংবাদ" };

export default async function NewsPage() {
  const posts = await getPostsByType("news");
  return <div><PageHero title="সংবাদ" description="ক্যাম্পাস ও সংগঠনের সাম্প্রতিক সংবাদসমূহ।" />{posts.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map((p) => <PostCard key={p._id} post={p} />)}</div> : <Card className="p-8 text-center text-slate-500">কোনো সংবাদ পাওয়া যায়নি।</Card>}</div>;
}
