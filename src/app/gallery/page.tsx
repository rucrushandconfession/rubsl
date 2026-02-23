import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { SanityImage } from "@/components/shared/sanity-image";
import { Card } from "@/components/ui/card";
import { getAlbums } from "@/sanity/api";

export const metadata = { title: "গ্যালারি" };

export default async function GalleryPage() {
  const albums = await getAlbums();
  return (
    <div>
      <PageHero title="গ্যালারি" description="স্মরণীয় মুহূর্তগুলো অ্যালবাম আকারে দেখুন।" />
      {albums.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {albums.map((a) => (
            <Link key={a._id} href={`/gallery/${a.slug.current}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
              <SanityImage image={a.coverImage} alt={a.title} className="h-52 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{a.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      ) : <Card className="p-8 text-center text-slate-500">কোনো অ্যালবাম নেই।</Card>}
    </div>
  );
}
