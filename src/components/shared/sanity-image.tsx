import Image from "next/image";
import { urlFor } from "@/sanity/client";

export function SanityImage({ image, alt, className }: { image: unknown; alt: string; className?: string }) {
  const url = image ? urlFor(image).width(1200).height(800).fit("crop").url() : "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop";
  return <Image src={url} alt={alt} width={1200} height={800} className={className} />;
}
