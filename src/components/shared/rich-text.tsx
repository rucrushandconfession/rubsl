import { PortableText } from "@portabletext/react";

export function RichText({ value }: { value: unknown[] | undefined }) {
  if (!value?.length) return <p className="text-slate-600">বিস্তারিত তথ্য শীঘ্রই যুক্ত হবে।</p>;
  return <div className="prose max-w-none prose-slate"><PortableText value={value} /></div>;
}
