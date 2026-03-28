"use client";

import { ArrowDown, Mail } from "lucide-react";
import { LinkedInIcon } from "./ui/icons";
 

const stats = [
  { value: "6+", label: "Years of\nExperience" },
  { value: "3", label: "Companies\nWorked At" },
  { value: "30%", label: "Admin Time\nReduced" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-125 w-125 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 right-1/4 h-100 w-100 rounded-full bg-accent/5 blur-[100px]" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left */}
          <div className="order-2 md:order-1">
            <p className="mb-3 font-mono text-sm tracking-widest text-accent uppercase">
              Hello, I&apos;m
            </p>
            <h1 className="mb-2 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Tamar
              <br />
              <span className="text-accent">Khuskivadze</span>
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Frontend Developer &amp; Mobile Developer — building responsive,
              user-focused interfaces with React, React Native, and modern web
              technologies.
            </p>

            <div className="mb-10 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="animate-pulse-glow rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-light"
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/tamar-khukisvadze"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="mailto:Thamuna.khuskivadze@gmail.com"
                className="rounded-full border border-border p-3 text-muted-foreground transition-colors hover:border-accent hover:text-accent"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
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

          {/* Right - Abstract visual */}
          <div className="order-1 flex items-center justify-center md:order-2">
            <div className="relative">
              <div className="h-64 w-64 rounded-full border-2 border-accent/20 sm:h-80 sm:w-80">
                <div className="absolute inset-4 rounded-full border border-accent/30" />
                <div className="absolute inset-8 rounded-full bg-linear-to-br from-accent/20 to-accent/5" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-6xl font-bold text-accent/60 sm:text-7xl">
                    TK
                  </span>
                </div>
              </div>
              {/* Floating dots */}
              <div className="absolute -right-4 top-8 h-3 w-3 rounded-full bg-accent" />
              <div className="absolute -left-2 bottom-12 h-2 w-2 rounded-full bg-accent-light" />
              <div className="absolute right-8 -bottom-2 h-4 w-4 rounded-full border border-accent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center md:mt-8">
          <a
            href="#about"
            className="animate-bounce text-muted-foreground transition-colors hover:text-accent"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
