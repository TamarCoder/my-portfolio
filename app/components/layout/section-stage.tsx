"use client";

import type { ReactNode } from "react";
import { useActiveSection } from "@/app/providers/active-section-provider";

interface SectionStageProps {
  sections: Record<string, ReactNode>;
}

// Shows one section at a time instead of a long scrolling page.
export default function SectionStage({ sections }: SectionStageProps) {
  const active = useActiveSection();
  const current = sections[active] ?? sections["#home"];

  return (
    <main className="fixed inset-0 md:left-24">
      <div
        key={active}
        className="animate-panel-in h-full overflow-y-auto overscroll-contain pt-20 md:pt-0"
      >
        {current}
      </div>
    </main>
  );
}
