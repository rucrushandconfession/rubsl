"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function MobileSheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button aria-label="মেনু" onClick={() => setOpen(true)} className="rounded-lg border border-slate-200 p-2">
        <Menu className="h-5 w-5" />
      </button>
      <div className={cn("fixed inset-0 z-50 transition", open ? "visible" : "invisible")}>
        <button className={cn("absolute inset-0 bg-slate-900/50", open ? "opacity-100" : "opacity-0")} onClick={() => setOpen(false)} />
        <div className={cn("absolute right-0 top-0 h-full w-72 bg-white p-5 shadow-xl transition", open ? "translate-x-0" : "translate-x-full")}>
          <div className="mb-6 flex justify-end">
            <button onClick={() => setOpen(false)} aria-label="বন্ধ করুন" className="rounded-lg border border-slate-200 p-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div onClick={() => setOpen(false)}>{children}</div>
        </div>
      </div>
    </>
  );
}
