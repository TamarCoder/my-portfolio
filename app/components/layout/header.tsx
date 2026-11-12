"use client";

import { useState } from "react";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/app/providers/theme-provider";
import Button from "@/app/components/ui/button";
import { navLinks } from "@/app/lib/data";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-2 pr-3 sm:pr-4">
        <a href="#home" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <Image
            src="/logo.png"
            alt="Tamar logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10 rounded-full shadow-[0_0_18px_rgba(34,211,238,0.35)]"
          />
          <span>
            Tamar<span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Button href="#contact" className="hidden md:inline-block px-5 py-2">
            Hire me
          </Button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-full p-2 text-muted-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl px-6 py-6 md:hidden">
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
  );
}
