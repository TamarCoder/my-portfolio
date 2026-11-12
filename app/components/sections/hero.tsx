"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { LinkedInIcon } from "@/app/components/ui/icons";
import Button from "@/app/components/ui/button";
import HeroPortrait from "@/app/components/sections/hero-portrait";
import { useLanguage } from "@/app/i18n/language-provider";
import { contactInfo } from "@/app/lib/content/contact";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  return (
    <section id="home" className="relative flex min-h-full items-start overflow-hidden px-4 pb-8 pt-2 md:items-center md:py-12 sm:px-6 lg:px-12">
      <div className="mx-auto grid w-full max-w-[2200px] items-center gap-8 md:grid-cols-12 lg:gap-16">
        <div className="md:col-span-7">
          <div className="glass mb-5 inline-flex max-w-full flex-wrap md:mb-8 items-center gap-3 rounded-full py-1.5 pl-1.5 pr-4">
            <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">{h.available}</span>
            <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">{h.location}</span>
          </div>

          <p className="mb-3 text-[clamp(1rem,2vw,1.6rem)] text-muted-foreground">
            {h.greeting} <span className="font-semibold text-foreground">Tamar Khuskivadze</span> —
          </p>
          <h1 className="mb-5 text-[clamp(2rem,min(5.4vw,8.5vh),6rem)] md:mb-8 text-balance font-bold leading-[1.02] tracking-tight">
            {h.titleStart}{" "}
            <span className="bg-linear-to-r from-accent-light to-cyan-400 bg-clip-text text-transparent">{h.web}</span>
            {` ${h.and} `}
            <span className="bg-linear-to-r from-cyan-400 to-emerald-300 bg-clip-text text-transparent">{h.mobile}</span>{" "}
            {h.titleEnd}
          </h1>
          <p className="mb-6 max-w-xl text-base leading-relaxed md:mb-10 md:text-lg text-muted-foreground">
            {h.intro}
          </p>

          <div className="mb-8 flex flex-wrap items-center gap-3 md:mb-12">
            <Button href="#projects" glow className="inline-flex items-center gap-2">
              {h.seeWork} <ArrowUpRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary">{h.getInTouch}</Button>
            <Button href={contactInfo.linkedin.url} variant="icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon size={18} />
            </Button>
            <Button href={`mailto:${contactInfo.email}`} variant="icon" aria-label="Email">
              <Mail size={18} />
            </Button>
          </div>

          <dl className="flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-5 md:gap-x-12 md:pt-8">
            {h.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-3xl font-bold md:text-4xl">{stat.value}</dd>
                <dd className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-first flex justify-center md:order-none md:col-span-5">
          <HeroPortrait />
        </div>
      </div>
    </section>
  );
}
