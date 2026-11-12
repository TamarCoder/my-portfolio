"use client";

import { ArrowUpRight } from "lucide-react";
import IconBox from "@/app/components/ui/icon-box";
import type { services } from "@/app/lib/content/services";
import { useLanguage } from "@/app/i18n/language-provider";

interface ServiceShowcaseProps {
  service: (typeof services)[number];
  index: number;
  total: number;
}

// Big preview panel for the selected service; `key` on the parent replays the entry animation.
export default function ServiceShowcase({ service, index, total }: ServiceShowcaseProps) {
  const { t } = useLanguage();
  const text = t.services.items[service.id];
  return (
    <div data-tilt className="glass relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-5 md:p-8 lg:p-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[90px]" />

      <div key={service.id} className="animate-fade-in-up relative">
        <div className="mb-4 flex items-start justify-between md:mb-10">
          <IconBox size="xl" className="h-12 w-12 rounded-2xl md:h-20 md:w-20 md:rounded-3xl">
            <service.icon size={36} strokeWidth={1.6} />
          </IconBox>
          <span className="font-mono text-sm text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mb-3 text-2xl font-bold leading-tight md:mb-5 lg:text-4xl xl:text-5xl">{text.title}</h3>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-lg">{text.description}</p>

        <p className="mb-2 mt-5 font-mono md:mb-3 md:mt-10 text-xs tracking-[0.2em] text-muted-foreground uppercase">{t.services.builtWith}</p>
        <ul className="flex flex-wrap gap-2">
          {text.stack.map((tool) => (
            <li key={tool} className="glass rounded-full px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm">{tool}</li>
          ))}
        </ul>

        <p className="mb-2 mt-5 hidden font-mono sm:block md:mb-3 md:mt-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">{t.services.whereIDidIt}</p>
        <ul className="hidden gap-3 sm:grid xl:grid-cols-2">
          {text.proof.map((item) => (
            <li key={item.place} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="block font-semibold">{item.place}</span>
              <span className="text-sm leading-snug text-muted-foreground">{item.result}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#contact"
        className="group relative mt-5 inline-flex md:mt-10 w-fit items-center gap-3 rounded-full bg-linear-to-r from-accent to-cyan-500 px-6 py-3 text-sm font-medium text-white"
      >
        {t.services.startProject}
        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
