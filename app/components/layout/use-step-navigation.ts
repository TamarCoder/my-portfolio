"use client";

import { useEffect, useRef } from "react";
import { goToSection } from "@/app/providers/active-section-provider";

const LOCK_MS = 900;
const WHEEL_THRESHOLD = 25;
const WHEEL_GAP_MS = 200;
const SWIPE_THRESHOLD = 50;

// Wheel, keyboard and swipe move one section at a time, instead of scrolling.
export function useStepNavigation(order: string[], active: string) {
  const orderRef = useRef(order);
  const activeRef = useRef(active);
  const lockedUntil = useRef(0);

  useEffect(() => {
    orderRef.current = order;
    activeRef.current = active;
  }, [order, active]);

  useEffect(() => {
    let lastWheel = 0;
    let gestureUsed = false;
    let touchStartY = 0;

    const goBy = (step: number) => {
      const now = Date.now();
      if (now < lockedUntil.current) return;
      const list = orderRef.current;
      const next = list[list.indexOf(activeRef.current) + step];
      if (!next) return;
      lockedUntil.current = now + LOCK_MS;
      goToSection(next);
    };

    // Open dialogs (project modal) keep their own scrolling.
    const isInsideDialog = (e: Event) => !!(e.target as Element).closest?.("[data-no-step]");

    // Trackpad momentum sends wheel events for a while; only a pause starts a new gesture.
    const onWheel = (e: WheelEvent) => {
      if (isInsideDialog(e)) return;
      const now = Date.now();
      if (now - lastWheel > WHEEL_GAP_MS) gestureUsed = false;
      lastWheel = now;
      if (gestureUsed || Math.abs(e.deltaY) <= WHEEL_THRESHOLD) return;
      gestureUsed = true;
      goBy(e.deltaY > 0 ? 1 : -1);
    };
    const onKey = (e: KeyboardEvent) => {
      if (document.querySelector("[data-no-step]")) return;
      if ((e.target as HTMLElement).closest("input, textarea")) return;
      if (["ArrowDown", "PageDown", " "].includes(e.key)) goBy(1);
      if (["ArrowUp", "PageUp"].includes(e.key)) goBy(-1);
    };
    const onTouchStart = (e: TouchEvent) => (touchStartY = e.touches[0].clientY);
    const onTouchEnd = (e: TouchEvent) => {
      if (isInsideDialog(e)) return;
      const dy = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(dy) > SWIPE_THRESHOLD) goBy(dy > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);
}
