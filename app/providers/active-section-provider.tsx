"use client";

import { usePathname } from "next/navigation";

// The URL path is the single source of truth: "/" is Home, "/about" is About, and so on.
export function useActiveSection() {
  const pathname = usePathname();
  return pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
}

// Switches section without a reload; Next.js syncs usePathname with pushState.
export function goToSection(path: string) {
  if (window.location.pathname !== path) window.history.pushState(null, "", path);
}
