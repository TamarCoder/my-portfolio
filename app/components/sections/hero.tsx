import Image from "next/image";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { LinkedInIcon } from "@/app/components/ui/icons";
import Button from "@/app/components/ui/button";
import { stats, contactInfo } from "@/app/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-full flex-col justify-center overflow-hidden px-6 py-12 lg:px-12"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Top row — status + location */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-sm text-muted-foreground">Available for work</span>
          </div>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Tbilisi, Georgia — 01 / Home
          </span>
        </div>

        {/* Giant name, full width */}
        <h1 className="font-bold leading-[0.9] tracking-tighter">
          <span className="block text-[clamp(1.25rem,2.4vw,2.25rem)] font-medium tracking-tight text-muted-foreground">
            Hi, I&apos;m
          </span>
          <span className="block bg-linear-to-r from-foreground via-accent-light to-cyan-400 bg-clip-text text-[clamp(4rem,15vw,15rem)] text-transparent">
            TAMAR
          </span>
        </h1>

        {/* Divider line */}
        <div className="my-8 h-px w-full bg-linear-to-r from-accent via-cyan-400/60 to-transparent" />

        {/* Bottom grid — role, text, actions | stats | photo */}
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-2xl font-semibold sm:text-3xl">
              Frontend &amp; Mobile <span className="text-muted-foreground">Developer</span>
            </p>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Crafting high-performance web and mobile applications with React,
              React Native, and modern tools — clean code, sharp UI/UX, real
              results.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#contact" glow className="inline-flex items-center gap-2">
                Get in Touch <ArrowUpRight size={16} />
              </Button>
              <Button href="#about" variant="secondary">
                About Me
              </Button>
              <Button
                href={contactInfo.linkedin.url}
                variant="icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </Button>
              <Button href={`mailto:${contactInfo.email}`} variant="icon" aria-label="Email">
                <Mail size={18} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:col-span-4">
            {stats.map((stat) => (
              <div key={stat.label} data-tilt className="glass rounded-2xl p-4">
                <p className="text-3xl font-bold text-accent-light">{stat.value}</p>
                <p className="mt-1 whitespace-pre-line text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:col-span-3 lg:justify-end">
            <div data-tilt className="rounded-3xl">
              <div className="glass absolute -inset-3 rotate-3 rounded-[2rem]" />
              <div className="relative h-72 w-56 overflow-hidden rounded-3xl border border-white/10 sm:h-80 sm:w-64">
                <Image
                  src="/profile-hero.jpg"
                  alt="Tamar Khuskivadze"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-accent md:block"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
