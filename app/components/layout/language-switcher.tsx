"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Languages } from "lucide-react";
import { useLanguage } from "@/app/i18n/language-provider";
import { localeNames, locales } from "@/app/i18n/locales";

interface LanguageSwitcherProps {
  // Side rail opens the menu to the right; the mobile bar opens it below.
  placement: "right" | "bottom";
}

export default function LanguageSwitcher({ placement }: LanguageSwitcherProps) {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnOutside = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const menuPosition = placement === "right" ? "bottom-0 left-full ml-4" : "right-0 top-full mt-3";

  return (
    <div ref={rootRef} className="relative">
      <button
        onClick={() => setIsOpen((open) => !open)}
        aria-label={t.common.language}
        aria-expanded={isOpen}
        className="flex h-11 min-w-11 items-center justify-center gap-1 rounded-2xl px-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
      >
        <Languages size={16} />
        {localeNames[locale].short}
      </button>

      {isOpen && (
        <ul className={`glass absolute z-50 w-44 rounded-2xl p-1.5 shadow-2xl backdrop-blur-xl ${menuPosition}`}>
          {locales.map((code) => (
            <li key={code}>
              <button
                onClick={() => {
                  setLocale(code);
                  setIsOpen(false);
                }}
                lang={code}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
                  code === locale ? "bg-linear-to-r from-accent to-cyan-500 text-white" : "hover:bg-white/10"
                }`}
              >
                {localeNames[code].full}
                {code === locale && <Check size={14} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
