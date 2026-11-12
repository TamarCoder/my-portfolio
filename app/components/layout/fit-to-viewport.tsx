"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Shrinks the content when it is taller than the screen, so the page never needs to scroll.
export default function FitToViewport({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const content = contentRef.current;
    if (!frame || !content) return;

    const measure = () => {
      const ratio = frame.clientHeight / content.scrollHeight;
      setScale(Math.min(1, ratio));
    };
    const ro = new ResizeObserver(measure);
    ro.observe(frame);
    ro.observe(content);
    measure();
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={frameRef} className="flex h-full items-center justify-center overflow-hidden">
      <div
        ref={contentRef}
        className="w-full origin-center"
        style={{ transform: scale < 1 ? `scale(${scale})` : undefined }}
      >
        {children}
      </div>
    </div>
  );
}
