import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/shared/section-title";
import { PostCard } from "@/components/shared/post-card";
import { MemberCard } from "@/components/shared/member-card";
import { EventCard } from "@/components/shared/event-card";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { getCommitteeHighlights, getGalleryPreview, getLatestUpdates, getSiteSettings, getUpcomingEvents } from "@/sanity/api";
import { SanityImage } from "@/components/shared/sanity-image";

export const revalidate = 300;

export default async function HomePage() {
  const [settings, updates, members, events, albums] = await Promise.all([
    getSiteSettings(),
    getLatestUpdates(),
    getCommitteeHighlights(),
    getUpcomingEvents(),
    getGalleryPreview()
  ]);

  return (
    <div className="space-y-14">
      <section className="rounded-2xl bg-gradient-to-r from-teal-700 to-emerald-600 px-6 py-14 text-white shadow-soft sm:px-10">
        <h1 className="text-3xl font-bold sm:text-5xl">{settings.siteTitle}</h1>
        <p className="mt-4 max-w-2xl text-teal-50">{settings.missionLine}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/membership"><Button variant="outline" className="border-white bg-white text-teal-700">সদস্য হোন</Button></Link>
          <Link href="/contact"><Button className="bg-amber-400 text-slate-900 hover:bg-amber-300">যোগাযোগ</Button></Link>
        </div>
      </section>

      <section>
        <SectionTitle title="সর্বশেষ আপডেট" subtitle="সংবাদ ও নোটিশ থেকে সাম্প্রতিক ৬টি আপডেট" />
        {updates.length ? (
          <Tabs tabs={[{ label: "সব", value: "all" }, { label: "সংবাদ", value: "news" }, { label: "নোটিশ", value: "notice" }]} defaultValue="all">
            {(active) => {
              const filtered = active === "all" ? updates : updates.filter((u) => u.type === active);
              return filtered.length ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((p) => <PostCard key={p._id} post={p} />)}</div>
              ) : (
                <Card className="p-8 text-center text-slate-500">এই ক্যাটাগরিতে কোনো আপডেট নেই।</Card>
              );
            }}
          </Tabs>
        ) : <Card className="p-8 text-center text-slate-500">এখনও কোনো আপডেট প্রকাশিত হয়নি।</Card>}
      </section>

      <section>
        <SectionTitle title="কমিটি হাইলাইটস" subtitle="সভাপতি, সাধারণ সম্পাদক ও গুরুত্বপূর্ণ সদস্যবৃন্দ" />
        {members.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{members.map((m) => <MemberCard key={m._id} member={m} />)}</div> : <Card className="p-8 text-center text-slate-500">কমিটি তথ্য শীঘ্রই যুক্ত হবে।</Card>}
      </section>

      <section>
        <SectionTitle title="আসন্ন ইভেন্ট" subtitle="আগামী গুরুত্বপূর্ণ কর্মসূচি ও আয়োজন" />
        {events.length ? <div className="grid gap-6 md:grid-cols-3">{events.map((e) => <EventCard key={e._id} event={e} />)}</div> : <Card className="p-8 text-center text-slate-500">এই মুহূর্তে কোনো আসন্ন ইভেন্ট নেই।</Card>}
      </section>

      <section>
        <SectionTitle title="গ্যালারি প্রিভিউ" subtitle="সাম্প্রতিক মুহূর্তের ঝলক" />
        {albums.length ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {albums.slice(0, 8).map((album) => (
              <Link key={album._id} href={`/gallery/${album.slug.current}`} className="overflow-hidden rounded-xl">
                <SanityImage image={(album as any).previewImage || album.coverImage} alt={album.title} className="h-40 w-full object-cover transition hover:scale-105" />
              </Link>
            ))}
          </div>
        ) : (
          <Card className="p-8 text-center text-slate-500">গ্যালারিতে এখনো ছবি যুক্ত হয়নি।</Card>
        )}
      </section>
    </div>
  );
}
