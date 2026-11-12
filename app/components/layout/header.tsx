"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  User,
  Layers,
  Sparkles,
  FolderGit2,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useTheme } from "@/app/providers/theme-provider";
import Button from "@/app/components/ui/button";
import { navLinks } from "@/app/lib/data";

const navIcons: Record<string, LucideIcon> = {
  "#home": Home,
  "#about": User,
  "#services": Layers,
  "#skills": Sparkles,
  "#projects": FolderGit2,
  "#contact": Mail,
};

// Tracks which section is currently in the middle of the screen.
function useActiveSection() {
  const [active, setActive] = useState("#home");
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();

  return (
    <>
      {/* Desktop — vertical glass rail on the left */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden p-4 md:flex">
        <nav className="glass flex w-16 flex-col items-center justify-between rounded-3xl py-4">
          <a href="#home" aria-label="Home">
            <Image
              src="/logo.png"
              alt="Tamar logo"
              width={44}
              height={44}
              priority
              className="h-11 w-11 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-transform hover:scale-110"
            />
          </a>

          <ul className="flex flex-col items-center gap-2">
            {navLinks.map((link) => {
              const Icon = navIcons[link.href];
              const isActive = active === link.href;
              return (
                <li key={link.href} className="group relative">
                  <a
                    href={link.href}
                    aria-label={link.label}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative flex h-11 w-11 items-center justify-center rounded-2xl transition-all ${
                      isActive
                        ? "bg-linear-to-br from-accent to-cyan-500 text-white shadow-[0_0_18px_var(--accent-glow)]"
                        : "text-muted-foreground hover:bg-white/10 hover:text-foreground"
                    }`}
                  >
                    <Icon size={19} />
                  </a>
                  <span className="glass pointer-events-none absolute left-full top-1/2 ml-4 -translate-x-2 -translate-y-1/2 whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-medium opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
                    {link.label}
                  </span>
                </li>
              );
            })}
          </ul>

          <button
            onClick={toggleTheme}
            className="flex h-11 w-11 items-center justify-center rounded-2xl text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </aside>

      {/* Mobile — top glass bar */}
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:hidden">
        <nav className="glass flex items-center justify-between rounded-full py-2 pl-2 pr-3">
          <a href="#home" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
            <Image src="/logo.png" alt="Tamar logo" width={40} height={40} priority className="h-10 w-10 rounded-full" />
            <span>
              Tamar<span className="text-accent">.</span>
            </span>
          </a>
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-muted-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full p-2 text-muted-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="glass mt-2 rounded-3xl px-6 py-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Button href="#contact" onClick={() => setMobileOpen(false)}>
                  Hire me
                </Button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
