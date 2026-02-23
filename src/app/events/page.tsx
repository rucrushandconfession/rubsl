import { PageHero } from "@/components/shared/page-hero";
import { EventCard } from "@/components/shared/event-card";
import { Card } from "@/components/ui/card";
import { getEvents } from "@/sanity/api";

export const metadata = { title: "ইভেন্ট" };

export default async function EventsPage() {
  const events = await getEvents();
  return <div><PageHero title="ইভেন্ট" description="আসন্ন ও সম্পন্ন আয়োজনসমূহের তালিকা।" />{events.length ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{events.map((e) => <EventCard key={e._id} event={e} />)}</div> : <Card className="p-8 text-center text-slate-500">কোনো ইভেন্ট পাওয়া যায়নি।</Card>}</div>;
}
