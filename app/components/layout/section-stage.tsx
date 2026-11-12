"use client";

import { useEffect, useState, useSyncExternalStore, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import { useActiveSection } from "@/app/providers/active-section-provider";
import FitToViewport from "@/app/components/layout/fit-to-viewport";
import { useStepNavigation } from "@/app/components/layout/use-step-navigation";
import { useLanguage } from "@/app/i18n/language-provider";
import type { NavId } from "@/app/i18n/types";

const noSubscribe = () => () => {};

interface SectionStageProps {
  sections: Record<string, ReactNode>;
}

// Shows one section at a time; the page itself never scrolls.
export default function SectionStage({ sections }: SectionStageProps) {
  const order = Object.keys(sections);
  const { t } = useLanguage();
  const hash = useActiveSection();
  const active = sections[hash] ? hash : order[0];
  const index = order.indexOf(active);
  const [previousIndex, setPreviousIndex] = useState(index);
  const [isForward, setIsForward] = useState(true);
  const [leaving, setLeaving] = useState<string | null>(null);
  // Every fresh visit starts on Home: drop any old hash before the first section is shown.
  const isBrowser = useSyncExternalStore(noSubscribe, () => true, () => false);
  const [hasShown, setHasShown] = useState(false);
  if (isBrowser && !hasShown) {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    setHasShown(true);
    setPreviousIndex(0);
  } else if (hasShown && previousIndex !== index) {
    setIsForward(index > previousIndex);
    setLeaving(order[previousIndex] ?? null);
    setPreviousIndex(index);
  }

  // Keep the old section on screen while it fades out, so the change is smooth.
  useEffect(() => {
    if (!leaving) return;
    const timer = setTimeout(() => setLeaving(null), 450);
    return () => clearTimeout(timer);
  }, [leaving]);
  const next = order[index + 1];

  useStepNavigation(order, active);

  if (!isBrowser) return <main className="fixed inset-0 md:left-24" />;

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
            aria-label={t.nav[id.slice(1) as NavId]}
            className={`w-1.5 rounded-full transition-all duration-500 ${id === active ? "h-8 bg-linear-to-b from-accent to-cyan-400" : "h-1.5 bg-foreground/25 hover:bg-foreground/50"}`}
          />
        ))}
      </div>
    </main>
  );
}
