import type { Metadata } from "next";
import { Noto_Sans_Bengali, Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const noto = Noto_Sans_Bengali({ subsets: ["bengali"], variable: "--font-bn" });
const hind = Hind_Siliguri({ subsets: ["bengali"], weight: ["400", "500", "600", "700"], variable: "--font-alt" });

export const metadata: Metadata = {
  title: "বাংলাদেশ ছাত্রলীগ — রাজশাহী বিশ্ববিদ্যালয় শাখা",
  description: "রাজশাহী বিশ্ববিদ্যালয় শাখার সাংগঠনিক কার্যক্রম, সংবাদ, নোটিশ, ইভেন্ট ও সদস্যপদ তথ্য।",
  openGraph: {
    title: "বাংলাদেশ ছাত্রলীগ — রাজশাহী বিশ্ববিদ্যালয় শাখা",
    description: "Official website",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className={`${noto.variable} ${hind.variable} font-[var(--font-bn)]`}>
        <Header />
        <main className="container-max py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
