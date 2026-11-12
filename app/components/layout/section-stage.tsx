"use client";

import { useState, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { useActiveSection } from "@/app/providers/active-section-provider";
import FitToViewport from "@/app/components/layout/fit-to-viewport";
import { useStepNavigation } from "@/app/components/layout/use-step-navigation";

interface SectionStageProps {
  sections: Record<string, ReactNode>;
}

// Shows one section at a time; the page itself never scrolls.
export default function SectionStage({ sections }: SectionStageProps) {
  const order = Object.keys(sections);
  const hash = useActiveSection();
  const active = sections[hash] ? hash : order[0];
  const index = order.indexOf(active);
  const [previousIndex, setPreviousIndex] = useState(index);
  const [isForward, setIsForward] = useState(true);
  if (previousIndex !== index) {
    setIsForward(index > previousIndex);
    setPreviousIndex(index);
  }
  const next = order[index + 1];

  useStepNavigation(order, active);

  return (
    <main className="fixed inset-0 md:left-24">
      <div
        key={active}
        className={`h-full overflow-hidden pt-20 md:pt-0 ${isForward ? "animate-panel-up" : "animate-panel-down"}`}
      >
        <FitToViewport>{sections[active]}</FitToViewport>
      </div>

      {next && (
        <a
          href={next}
          aria-label="Next section"
          className="glass absolute bottom-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-accent-light"
        >
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      )}

      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {order.map((id) => (
          <a
            key={id}
            href={id}
            aria-label={`Go to ${id.slice(1)}`}
            className={`w-1.5 rounded-full transition-all duration-500 ${id === active ? "h-8 bg-linear-to-b from-accent to-cyan-400" : "h-1.5 bg-foreground/25 hover:bg-foreground/50"}`}
          />
        ))}
      </div>
    </main>
  );
}
