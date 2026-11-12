"use client";

import { useEffect } from "react";

const MAX_TILT_DEG = 8;

function resetTilt(el: HTMLElement) {
  el.style.transform = "";
  el.style.removeProperty("--glare-opacity");
}

// One listener for the whole page; any element with data-tilt gets the effect.
export default function TiltOnHover() {
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || isReduced) return;

    let current: HTMLElement | null = null;

    function onMove(e: PointerEvent) {
      const el = (e.target as Element).closest<HTMLElement>("[data-tilt]");
      if (current && current !== el) resetTilt(current);
      current = el;
      if (!el) return;

      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.transform = `perspective(900px) rotateX(${(0.5 - y) * MAX_TILT_DEG}deg) rotateY(${(x - 0.5) * MAX_TILT_DEG}deg) scale(1.02)`;
      el.style.setProperty("--glare-x", `${x * 100}%`);
      el.style.setProperty("--glare-y", `${y * 100}%`);
      el.style.setProperty("--glare-opacity", "1");
    }

    function onLeave() {
      if (current) resetTilt(current);
      current = null;
    }

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return null;
}
