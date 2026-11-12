"use client";

import { useState } from "react";
import ServiceShowcase from "@/app/components/sections/service-showcase";
import { services } from "@/app/lib/content/services";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="px-6 py-10 lg:px-12">
      <div className="mx-auto grid max-w-[2200px] items-stretch gap-8 lg:h-[calc(100dvh-5rem)] lg:grid-cols-12">
        {/* Left — heading + interactive list */}
        <div className="flex flex-col justify-center lg:col-span-6">
          <p className="mb-3 font-mono text-xs tracking-[0.3em] text-accent-light uppercase">03 / Services</p>
          <h2 className="mb-8 text-4xl font-bold leading-tight xl:text-5xl">
            What I can <span className="bg-linear-to-r from-accent-light to-cyan-400 bg-clip-text text-transparent">build</span> for you
          </h2>

          <ul className="border-t border-white/10">
            {services.map((service, i) => {
              const isActive = i === activeIndex;
              return (
                <li key={service.title} className="border-b border-white/10">
                  <button
                    onMouseEnter={() => setActiveIndex(i)}
                    onFocus={() => setActiveIndex(i)}
                    onClick={() => setActiveIndex(i)}
                    aria-pressed={isActive}
                    className="group flex w-full items-center gap-6 py-4 text-left"
                  >
                    <span className={`font-mono text-sm transition-colors ${isActive ? "text-cyan-300" : "text-muted-foreground/60"}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-xl font-semibold transition-all duration-300 xl:text-2xl ${
                        isActive ? "translate-x-2 text-foreground" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {service.title}
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
        <div className="lg:col-span-6">
          <ServiceShowcase service={services[activeIndex]} index={activeIndex} total={services.length} />
        </div>
      </div>
    </section>
  );
}
