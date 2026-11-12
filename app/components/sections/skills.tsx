"use client";

import { useInView } from "@/app/components/effects/use-in-view";
import SkillRing from "@/app/components/ui/skill-ring";
import SectionHeading from "@/app/components/ui/section-heading";
import { skills } from "@/app/lib/content/skills";
import { useLanguage } from "@/app/i18n/language-provider";

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-10">
      <div ref={ref} className="mx-auto max-w-[2200px] px-6 lg:px-12">
        <SectionHeading label={t.skills.label} title={t.skills.title} />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Skills — glass cards with animated rings */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-lg font-semibold">{t.skills.techStack}</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  data-tilt
                  className={`glass group flex items-center gap-4 rounded-2xl p-3 pr-5 hover:border-accent/40 ${
                    inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: inView ? `${i * 70}ms` : "0ms" }}
                >
                  <div className="relative shrink-0">
                    <SkillRing level={skill.level} show={inView} />
                    <span className="absolute inset-0 flex items-center justify-center font-mono text-[11px] font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <span className="text-sm font-medium transition-colors group-hover:text-accent-light">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Journey — glass timeline */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg font-semibold">{t.skills.journey}</h3>
            <div className="relative space-y-4 pl-8">
              <div className="absolute bottom-3 left-[11px] top-3 w-px bg-linear-to-b from-accent via-cyan-400 to-transparent" />
              {t.journey.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative transition-all duration-700 ${
                    inView ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: inView ? `${200 + i * 120}ms` : "0ms" }}
                >
                  <span className="absolute -left-8 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-background ring-2 ring-accent shadow-[0_0_14px_var(--accent-glow)]">
                    <span className="h-2 w-2 rounded-full bg-linear-to-br from-accent-light to-cyan-400" />
                  </span>
                  <div data-tilt className="glass rounded-2xl p-4 hover:border-accent/40">
                    <span className="inline-block rounded-full bg-accent/15 px-2.5 py-0.5 font-mono text-xs text-accent-light">
                      {item.year}
                    </span>
                    <h4 className="mt-2 text-sm font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
