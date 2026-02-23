import Link from "next/link";
import { MobileSheet } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  ["/", "হোম"],
  ["/about", "পরিচিতি"],
  ["/committee", "কমিটি"],
  ["/news", "সংবাদ"],
  ["/notice", "নোটিশ"],
  ["/events", "ইভেন্ট"],
  ["/gallery", "গ্যালারি"],
  ["/membership", "সদস্যপদ"],
  ["/contact", "যোগাযোগ"]
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-bold text-teal-700">
          বাংলাদেশ ছাত্রলীগ — রাবি শাখা
        </Link>
        <nav className="hidden items-center gap-5 md:flex">
          {navItems.map(([href, label]) => (
            <Link key={href} href={href} className="text-sm font-medium text-slate-700 hover:text-teal-700">
              {label}
            </Link>
          ))}
          <Link href="/membership">
            <Button size="sm">সদস্য হোন</Button>
          </Link>
        </nav>
        <div className="md:hidden">
          <MobileSheet>
            <div className="flex flex-col gap-3">
              {navItems.map(([href, label]) => (
                <Link key={href} href={href} className="rounded-lg px-3 py-2 hover:bg-slate-100">
                  {label}
                </Link>
              ))}
            </div>
          </MobileSheet>
        </div>
      </div>
    </header>
  );
}
