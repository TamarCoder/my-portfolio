"use client";

import { useState } from "react";
import Image from "next/image";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/app/providers/theme-provider";
import { useActiveSection } from "@/app/providers/active-section-provider";
import { navLinks } from "@/app/lib/content/navigation";
import LanguageSwitcher from "@/app/components/layout/language-switcher";
import { useLanguage } from "@/app/i18n/language-provider";

export default function MobileTopBar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection();
  const { t } = useLanguage();

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:hidden">
      <nav className="glass flex items-center justify-between rounded-full py-2 pl-2 pr-3">
        <a href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <Image src="/logo.png" alt="Tamar logo" width={40} height={40} priority className="h-10 w-10 rounded-full" />
          <span>
            Tamar<span className="text-accent">.</span>
          </span>
        </a>
        <div className="flex items-center gap-1">
          <LanguageSwitcher placement="bottom" />
          <button onClick={toggleTheme} className="rounded-full p-2 text-muted-foreground" aria-label={t.common.toggleTheme}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="rounded-full p-2 text-muted-foreground" aria-label={t.common.toggleMenu}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="glass mt-2 flex flex-col gap-1 rounded-3xl p-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm transition-colors ${
                  active === link.href
                    ? "bg-linear-to-r from-accent to-cyan-500 text-white"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.nav[link.id]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
