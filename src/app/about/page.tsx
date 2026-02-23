import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";

export const metadata = { title: "পরিচিতি" };

export default function AboutPage() {
  return (
    <div>
      <PageHero title="আমাদের পরিচিতি" description="ঐতিহ্য, আদর্শ ও শিক্ষার্থী কল্যাণমুখী কর্মকাণ্ডের সংক্ষিপ্ত বিবরণ।" />
      <Card className="p-6 leading-8 text-slate-700">
        বাংলাদেশ ছাত্রলীগ — রাজশাহী বিশ্ববিদ্যালয় শাখা শিক্ষার্থীদের নৈতিক, সাংস্কৃতিক ও একাডেমিক উন্নয়নে কাজ করে।
        আমরা ক্যাম্পাসে সহমর্মিতা, নেতৃত্ব এবং সেবার মানসিকতা জাগ্রত করতে নিয়মিত আলোচনা সভা, স্বেচ্ছাসেবী কার্যক্রম ও দক্ষতা উন্নয়ন কর্মশালা আয়োজন করে থাকি।
      </Card>
    </div>
  );
}
