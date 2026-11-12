"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/app/components/ui/section-heading";
import { skills, journey } from "@/app/lib/data";

// Fires once when the element first scrolls into view.
function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

const R = 22;
const CIRC = 2 * Math.PI * R;

function SkillRing({ level, show }: { level: number; show: boolean }) {
  return (
    <svg viewBox="0 0 56 56" className="h-14 w-14 -rotate-90" aria-hidden>
      <defs>
        <linearGradient id="skill-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-light)" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r={R} fill="none" strokeWidth="4" className="stroke-foreground/10" />
      <circle
        cx="28"
        cy="28"
        r={R}
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        stroke="url(#skill-grad)"
        strokeDasharray={CIRC}
        strokeDashoffset={show ? CIRC * (1 - level / 100) : CIRC}
        style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)" }}
      />
    </svg>
  );
}

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-24">
      <div ref={ref} className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <SectionHeading label="Skills & Journey" title="My Skills & Experience" />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Skills — glass cards with animated rings */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-lg font-semibold">Tech Stack</h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={`glass group flex items-center gap-4 rounded-2xl p-3 pr-5 transition-all duration-700 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent-glow ${
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
            <h3 className="mb-5 text-lg font-semibold">My Journey</h3>
            <div className="relative space-y-4 pl-8">
              <div className="absolute bottom-3 left-[11px] top-3 w-px bg-linear-to-b from-accent via-cyan-400 to-transparent" />
              {journey.map((item, i) => (
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
                  <div className="glass rounded-2xl p-4 transition-all hover:border-accent/40">
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
