"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
  defaultValue,
  children
}: {
  tabs: { label: string; value: string }[];
  defaultValue: string;
  children: (active: string) => import("react").ReactNode;
}) {
  const [active, setActive] = useState(defaultValue);
  return (
    <div>
      <div className="mb-4 flex gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold",
              active === tab.value ? "bg-primary text-white" : "bg-white text-slate-600"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children(active)}
    </div>
  );
}
