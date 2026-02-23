import { PageHero } from "@/components/shared/page-hero";
import { Card } from "@/components/ui/card";

export const metadata = { title: "যোগাযোগ" };

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <PageHero title="যোগাযোগ" description="প্রয়োজনীয় তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।" />
      <Card className="grid gap-6 p-6 md:grid-cols-2">
        <div className="space-y-2 text-slate-700">
          <p><strong>ঠিকানা:</strong> রাজশাহী বিশ্ববিদ্যালয় ক্যাম্পাস</p>
          <p><strong>ইমেইল:</strong> info@rubsl.org</p>
          <p><strong>ফোন:</strong> +৮৮০১XXXXXXXXX</p>
        </div>
        <iframe title="ম্যাপ" src="https://www.google.com/maps?q=Rajshahi+University&output=embed" className="h-72 w-full rounded-lg border border-slate-200" loading="lazy" />
      </Card>
    </div>
  );
}
