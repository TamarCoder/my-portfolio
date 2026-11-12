"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { goToSection, useActiveSection } from "@/app/providers/active-section-provider";
import FitToViewport from "@/app/components/layout/fit-to-viewport";
import { useStepNavigation } from "@/app/components/layout/use-step-navigation";
import { useLanguage } from "@/app/i18n/language-provider";
import type { NavId } from "@/app/i18n/types";

interface SectionStageProps {
  sections: Record<string, ReactNode>;
}

// Shows one section at a time; the page itself never scrolls.
export default function SectionStage({ sections }: SectionStageProps) {
  const order = Object.keys(sections);
  const { t } = useLanguage();
  const path = useActiveSection();
  const active = sections[path] ? path : order[0];
  const index = order.indexOf(active);
  const [previousIndex, setPreviousIndex] = useState(index);
  const [isForward, setIsForward] = useState(true);
  const [leaving, setLeaving] = useState<string | null>(null);
  if (previousIndex !== index) {
    setIsForward(index > previousIndex);
    setLeaving(order[previousIndex] ?? null);
    setPreviousIndex(index);
  }

  // Section links switch in place instead of reloading; old "/#about" links move to "/about".
  useEffect(() => {
    const legacy = window.location.hash === "#home" ? "/" : "/" + window.location.hash.slice(1);
    if (window.location.hash && order.includes(legacy)) window.history.replaceState(null, "", legacy);
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const href = (e.target as Element).closest?.("a")?.getAttribute("href");
      if (!href || !order.includes(href)) return;
      e.preventDefault();
      goToSection(href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [order]);

  // Keep the old section on screen while it fades out, so the change is smooth.
  useEffect(() => {
    if (!leaving) return;
    const timer = setTimeout(() => setLeaving(null), 450);
    return () => clearTimeout(timer);
  }, [leaving]);
  const next = order[index + 1];

  useStepNavigation(order, active);

  return (
    <main className="fixed inset-0 md:left-24">
      {leaving && leaving !== active && (
        <div
          key={`leaving-${leaving}`}
          aria-hidden
          className={`pointer-events-none absolute inset-0 h-full overflow-hidden pt-[5.25rem] md:pt-0 ${isForward ? "animate-panel-out-up" : "animate-panel-out-down"}`}
        >
          <FitToViewport>{sections[leaving]}</FitToViewport>
        </div>
      )}

      <div
        key={active}
        className={`absolute inset-0 h-full overflow-hidden pt-[5.25rem] md:pt-0 ${isForward ? "animate-panel-up" : "animate-panel-down"}`}
      >
        <FitToViewport>{sections[active]}</FitToViewport>
      </div>

      {next && (
        <a
          href={next}
          aria-label={t.common.nextSection}
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
            aria-label={t.nav[(id === "/" ? "home" : id.slice(1)) as NavId]}
            className={`w-1.5 rounded-full transition-all duration-500 ${id === active ? "h-8 bg-linear-to-b from-accent to-cyan-400" : "h-1.5 bg-foreground/25 hover:bg-foreground/50"}`}
          />
        ))}
      </div>
    </main>
  );
}
