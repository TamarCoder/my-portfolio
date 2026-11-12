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
    <section id="about" className="px-6 py-10 lg:px-12">
      <div className="mx-auto grid max-w-[2200px] gap-5 lg:h-[calc(100dvh-5rem)] lg:grid-cols-12">
        {/* Photo with name overlay */}
        <div data-tilt className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10 lg:col-span-3">
          <Image src="/profile-about.jpg" alt="Tamar Khuskivadze" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5">
            <p className="mb-1 font-mono text-[11px] tracking-[0.25em] text-cyan-300 uppercase">{t.about.label}</p>
            <p className="text-2xl font-bold text-white">Tamar Khuskivadze</p>
            <p className="text-sm text-white/70">{t.about.role}</p>
          </div>
        </div>

        {/* Story + metrics */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          <Card className="flex flex-1 flex-col justify-center p-7 lg:p-9">
            <h2 className="mb-5 text-3xl font-bold leading-tight xl:text-4xl">
              {t.about.titleStart}{" "}
              <span className="bg-linear-to-r from-accent-light to-cyan-400 bg-clip-text text-transparent">{t.about.titleAccent}</span>
            </h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-4">
            {t.about.metrics.map((metric, i) => {
              const Icon = metricIcons[i];
              return (
                <Card key={metric.label} hover className="p-4">
                  <IconBox className="mb-3">
                    <Icon size={18} />
                  </IconBox>
                  <p className="text-2xl font-bold text-accent-light">{metric.value}</p>
                  <p className="text-xs text-muted-foreground">{metric.label}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-4">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
