import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <span className={cn("inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800", className)}>
      {children}
    </span>
  );
}
