import { PageHero } from "@/components/shared/page-hero";
import { PostCard } from "@/components/shared/post-card";
import { Card } from "@/components/ui/card";
import { getPostsByType } from "@/sanity/api";

export const metadata = { title: "নোটিশ" };

export default async function NoticePage() {
  const posts = await getPostsByType("notice");
  return <div><PageHero title="নোটিশ" description="গুরুত্বপূর্ণ নির্দেশনা, বিজ্ঞপ্তি ও সংযুক্তি।" />{posts.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map((p) => <PostCard key={p._id} post={p} />)}</div> : <Card className="p-8 text-center text-slate-500">কোনো নোটিশ পাওয়া যায়নি।</Card>}</div>;
}
