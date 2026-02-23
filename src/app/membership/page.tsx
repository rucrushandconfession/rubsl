import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";

export const metadata = { title: "সদস্যপদ" };

export default function MembershipPage() {
  return (
    <div className="space-y-6">
      <PageHero title="সদস্য হোন" description="অনলাইনে সদস্যপদের আবেদন ফর্ম পূরণ করুন।" />
      <Card className="p-6">
        <h2 className="text-xl font-semibold">কেন যুক্ত হবেন?</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
          <li>নেতৃত্বের দক্ষতা ও ব্যক্তিগত উন্নয়নের সুযোগ</li>
          <li>সামাজিক ও স্বেচ্ছাসেবী কাজে সম্পৃক্ততা</li>
          <li>শিক্ষার্থীদের অধিকার ও কল্যাণে সক্রিয় ভূমিকা</li>
        </ul>
      </Card>
      <Card className="overflow-hidden p-2">
        <p className="p-4 text-sm text-slate-600">নিচের গুগল ফর্মে আপনার তথ্য দিন (Placeholder URL):</p>
        <iframe title="সদস্যপদ ফর্ম" src="https://docs.google.com/forms/d/e/PLACEHOLDER/viewform?embedded=true" className="h-[850px] w-full rounded-lg" loading="lazy" />
      </Card>
    </div>
  );
}
