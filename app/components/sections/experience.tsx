"use client";

import Image from "next/image";
import { TrendingUp, Users, Clock } from "lucide-react";
import Card from "@/app/components/ui/card";
import IconBox from "@/app/components/ui/icon-box";
import ExperienceTimeline from "@/app/components/sections/experience-timeline";
import { useLanguage } from "@/app/i18n/language-provider";

const metricIcons = [Clock, Users, TrendingUp];

export default function Experience() {
  const { t } = useLanguage();
  return (
    <section id="about" className="px-4 py-6 sm:px-6 md:py-10 lg:px-12">
      <div className="mx-auto grid max-w-[2200px] gap-4 md:grid-cols-12 md:gap-5 lg:h-[calc(100dvh-5rem)]">
        {/* Photo with name overlay */}
        <div data-tilt className="relative hidden min-h-72 overflow-hidden rounded-3xl border border-white/10 md:col-span-4 md:block lg:col-span-3">
          <Image src="/profile-about.jpg" alt="Tamar Khuskivadze" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5">
            <p className="mb-1 font-mono text-[11px] tracking-[0.25em] text-cyan-300 uppercase">{t.about.label}</p>
            <p className="text-2xl font-bold text-white">Tamar Khuskivadze</p>
            <p className="text-sm text-white/70">{t.about.role}</p>
          </div>
        </div>

        {/* Story + metrics */}
        <div className="flex flex-col gap-4 md:col-span-8 md:gap-5 lg:col-span-5">
          <Card className="flex flex-1 flex-col justify-center p-5 md:p-7 lg:p-9">
            <h2 className="mb-3 text-2xl font-bold leading-tight md:mb-5 md:text-3xl xl:text-4xl">
              {t.about.titleStart}{" "}
              <span className="bg-linear-to-r from-accent-light to-cyan-400 bg-clip-text text-transparent">{t.about.titleAccent}</span>
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="[&:nth-child(n+2)]:hidden md:[&:nth-child(n+2)]:block">{paragraph}</p>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-2 md:gap-4">
            {t.about.metrics.map((metric, i) => {
              const Icon = metricIcons[i];
              return (
                <Card key={metric.label} hover className="p-3 md:p-4">
                  <IconBox className="mb-2 hidden sm:flex md:mb-3">
                    <Icon size={18} />
                  </IconBox>
                  <p className="text-xl font-bold text-accent-light md:text-2xl">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-4">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
