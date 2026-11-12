"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectDevices from "@/app/components/sections/project-devices";
import ProjectInfo from "@/app/components/sections/project-info";
import { projects } from "@/app/lib/content/projects";
import { useLanguage } from "@/app/i18n/language-provider";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const project = projects[activeIndex];
  const goBy = (step: number) => setActiveIndex((i) => (i + step + projects.length) % projects.length);

  return (
    <section id="projects" className="px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-[2200px] flex-col gap-6 lg:h-[calc(100dvh-5rem)]">
        {/* Top bar — label + project tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.3em] text-accent-light uppercase">{t.projects.label}</p>
          <div className="glass flex flex-wrap gap-1 rounded-full p-1">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(i)}
                aria-pressed={i === activeIndex}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  i === activeIndex ? "bg-linear-to-r from-accent to-cyan-500 text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>

        {/* Stage — devices + info */}
        <div className="relative grid flex-1 items-center gap-10 lg:grid-cols-12">
          <div className="pointer-events-none absolute left-1/4 top-1/2 h-[60%] w-[40%] -translate-y-1/2 rounded-full bg-accent/25 blur-[120px]" />
          <div key={project.id} className="animate-fade-in-up relative h-[52vh] lg:col-span-7 lg:h-full">
            <ProjectDevices project={project} />
          </div>
          <div className="relative lg:col-span-5">
            <ProjectInfo project={project} />
            <div className="mt-8 flex items-center gap-4">
              <button onClick={() => goBy(-1)} aria-label={t.projects.previous} className="glass flex h-11 w-11 items-center justify-center rounded-full hover:text-accent-light">
                <ChevronLeft size={18} />
              </button>
              <span className="font-mono text-sm text-muted-foreground">
                {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <button onClick={() => goBy(1)} aria-label={t.projects.next} className="glass flex h-11 w-11 items-center justify-center rounded-full hover:text-accent-light">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
