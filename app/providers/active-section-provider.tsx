"use client";

import { useSyncExternalStore } from "react";

const DEFAULT_SECTION = "#home";

// The URL hash is the single source of truth, so every existing <a href="#..."> switches sections for free.
function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

function readHash() {
  return window.location.hash || DEFAULT_SECTION;
}

export function useActiveSection() {
  return useSyncExternalStore(subscribeToHash, readHash, () => DEFAULT_SECTION);
}
