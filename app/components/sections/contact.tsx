"use client";

import ContactChannels from "@/app/components/sections/contact-channels";
import ContactForm from "@/app/components/sections/contact-form";
import { useLanguage } from "@/app/i18n/language-provider";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;
  return (
    <section id="contact" className="flex min-h-full items-center py-6 md:py-10">
      <div className="mx-auto grid w-full max-w-[2200px] items-stretch gap-5 px-4 sm:px-6 md:grid-cols-12 md:gap-8 lg:gap-10 lg:px-12">
        <div className="flex flex-col justify-center md:col-span-5">
          <p className="mb-2 font-mono text-xs md:mb-4 md:text-sm tracking-[0.3em] text-accent-light uppercase">{c.label}</p>
          <h2 className="mb-3 text-[clamp(2rem,4.5vw,4.5rem)] md:mb-6 font-bold leading-[1.05] tracking-tight">
            {c.titleStart}{" "}
            <span className="bg-linear-to-r from-accent-light to-cyan-400 bg-clip-text text-transparent">{c.titleAccent}</span>
          </h2>
          <p className="mb-4 hidden max-w-lg text-lg leading-relaxed sm:block md:mb-8 text-muted-foreground">
            {c.intro}
          </p>

          <div className="glass mb-4 hidden md:mb-8 md:inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {c.openToWork}
          </div>

          <ContactChannels />
        </div>

        <div className="md:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
