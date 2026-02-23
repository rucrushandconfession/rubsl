import Link from "next/link";
import { Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-max grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-bold text-slate-900">বাংলাদেশ ছাত্রলীগ — রাজশাহী বিশ্ববিদ্যালয় শাখা</h3>
          <p className="text-sm text-slate-600">শিক্ষা, ঐক্য, নৈতিকতা ও উন্নয়নমুখী নেতৃত্বে তরুণ সমাজ গঠনে প্রতিশ্রুতিবদ্ধ।</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">দ্রুত লিংক</h4>
          <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
            <Link href="/about">পরিচিতি</Link>
            <Link href="/committee">কমিটি</Link>
            <Link href="/news">সংবাদ</Link>
            <Link href="/notice">নোটিশ</Link>
            <Link href="/events">ইভেন্ট</Link>
            <Link href="/contact">যোগাযোগ</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-semibold">যোগাযোগ</h4>
          <p className="text-sm text-slate-600">রাজশাহী বিশ্ববিদ্যালয় ক্যাম্পাস, রাজশাহী</p>
          <p className="text-sm text-slate-600">ইমেইল: info@rubsl.org</p>
          <div className="mt-3 flex gap-3">
            <Link href="https://facebook.com" aria-label="Facebook">
              <Facebook className="h-5 w-5 text-slate-600" />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-slate-600" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
