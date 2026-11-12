"use client";

import { useState } from "react";
import ServiceShowcase from "@/app/components/sections/service-showcase";
import { services } from "@/app/lib/content/services";
import { useLanguage } from "@/app/i18n/language-provider";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();
  const s = t.services;

  return (
    <section id="services" className="px-4 py-6 sm:px-6 md:py-10 lg:px-12">
      <div className="mx-auto grid max-w-[2200px] items-stretch gap-5 md:grid-cols-12 md:gap-8 lg:h-[calc(100dvh-5rem)]">
        {/* Left — heading + interactive list */}
        <div className="flex flex-col justify-center md:col-span-5 lg:col-span-6">
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-accent-light uppercase">{s.label}</p>
          <h2 className="mb-4 text-3xl font-bold leading-tight md:mb-8 lg:text-4xl xl:text-5xl">
            {s.titleStart}{" "}
            <span className="bg-linear-to-r from-accent-light to-cyan-400 bg-clip-text text-transparent">{s.titleAccent}</span>{" "}
            {s.titleEnd}
          </h2>

          <ul className="border-t border-white/10">
            {services.map((service, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={service.id} className="border-b border-white/10">
                  <button
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    className="group flex w-full items-center gap-4 py-2.5 text-left md:gap-6 md:py-4"
                  >
                    <span className={`font-mono text-sm transition-colors ${isActive ? "text-cyan-300" : "text-muted-foreground/60"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-base font-semibold transition-all duration-300 md:text-lg lg:text-xl xl:text-2xl ${
                        isActive ? "translate-x-2 text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {s.items[service.id].title}
                    </span>
                    <span
                      className={`h-1 rounded-full bg-linear-to-r from-accent to-cyan-400 transition-all duration-500 ${
                        isActive ? "w-16 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right — preview of the active service */}
        <div className="md:col-span-7 lg:col-span-6">
          <ServiceShowcase service={services[activeIndex]} index={activeIndex} total={services.length} />
        </div>
      </div>
    </section>
  );
}
