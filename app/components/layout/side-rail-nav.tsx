"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/providers/theme-provider";
import { useActiveSection } from "@/app/providers/active-section-provider";
import { navLinks } from "@/app/lib/data";
import { navIcons } from "@/app/components/layout/nav-icons";

export default function SideRailNav() {
  const { theme, toggleTheme } = useTheme();
  const active = useActiveSection();

  return (
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
                  aria-current={isActive ? "page" : undefined}
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-all ${
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
  );
}
