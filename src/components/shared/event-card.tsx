import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SanityImage } from "@/components/shared/sanity-image";
import type { Event } from "@/sanity/types";

export function EventCard({ event }: { event: Event }) {
  return (
    <Card>
      <SanityImage image={event.coverImage} alt={event.title} className="h-48 w-full rounded-t-xl object-cover" />
      <CardHeader>
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-sm text-slate-600">{new Date(event.startDate).toLocaleDateString("bn-BD")} · {event.location || "ক্যাম্পাস"}</p>
      </CardHeader>
      <CardContent>
        <Link href={`/events/${event.slug.current}`} className="text-sm font-semibold text-teal-700">
          বিস্তারিত দেখুন →
        </Link>
      </CardContent>
    </Card>
  );
}
