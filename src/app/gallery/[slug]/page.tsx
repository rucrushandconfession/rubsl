import { notFound } from "next/navigation";
import { getAlbumBySlug } from "@/sanity/api";
import { SanityImage } from "@/components/shared/sanity-image";

export default async function AlbumDetails({ params }: { params: { slug: string } }) {
  const album = await getAlbumBySlug(params.slug);
  if (!album) notFound();
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{album.title}</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {album.images?.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-xl">
            <SanityImage image={img.image} alt={img.caption || album.title} className="h-52 w-full object-cover" />
            {img.caption ? <p className="mt-1 text-sm text-slate-600">{img.caption}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
