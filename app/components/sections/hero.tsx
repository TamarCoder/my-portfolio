import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { LinkedInIcon } from "@/app/components/ui/icons";
import Button from "@/app/components/ui/button";
import { stats, contactInfo } from "@/app/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-100 w-100 rounded-full bg-accent/8 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/3 h-72 w-72 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left — text */}
        <div className="order-2 lg:order-1">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm text-muted-foreground">
              Available for work
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-accent">Tamar</span>
            <br />
            <span className="text-muted-foreground">Frontend &amp; Mobile</span>
            <br />
            Developer
          </h1>

          <p className="mb-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Crafting high-performance web and mobile applications with React,
            React Native, and modern tools — clean code, sharp UI/UX, real
            results.
          </p>

          {/* CTA + socials */}
          <div className="mb-12 flex flex-wrap items-center gap-3">
            <Button href="#contact" glow>
              Get in Touch
            </Button>
            <Button href="#about" variant="secondary">
              About Me
            </Button>
            <div className="mx-1 hidden h-8 w-px bg-border sm:block" />
            <Button
              href={contactInfo.linkedin.url}
              variant="icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </Button>
            <Button
              href={`mailto:${contactInfo.email}`}
              variant="icon"
              aria-label="Email"
            >
              <Mail size={18} />
            </Button>
          </div>

          {/* Stats */}
          <div className="flex gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="whitespace-pre-line text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — photo */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-accent/20 sm:-inset-6" />
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-accent/15 blur-2xl" />
            <div className="relative h-80 w-64 overflow-hidden rounded-3xl border-2 border-border sm:h-105 sm:w-80">
              <Image
                src="/profile-hero.jpg"
                alt="Tamar Khuskivadze"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="absolute -right-3 top-8 h-3 w-3 rounded-full bg-accent" />
            <div className="absolute -left-2 bottom-16 h-2 w-2 rounded-full bg-accent-light" />
            <div className="absolute -bottom-2 right-12 h-4 w-4 rounded-full border-2 border-accent" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="animate-bounce text-muted-foreground transition-colors hover:text-accent"
          aria-label="Scroll down"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
