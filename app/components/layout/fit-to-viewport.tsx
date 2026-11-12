"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

const MIN_CHANGE = 0.01;

// Shrinks tall content to fit the screen height, but widens it first so it still fills the full width.
export default function FitToViewport({ children }: { children: ReactNode }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const frame = frameRef.current;
    const content = contentRef.current;
    if (!frame || !content) return;

    const measure = () => {
      const next = Math.min(1, frame.clientHeight / content.scrollHeight);
      setScale((prev) => (Math.abs(prev - next) > MIN_CHANGE ? next : prev));
    };
    const ro = new ResizeObserver(measure);
    ro.observe(frame);
    ro.observe(content);
    measure();
    return () => ro.disconnect();
  }, []);

  const isScaled = scale < 1;

  return (
    <div
      ref={frameRef}
      className={`flex h-full overflow-hidden ${isScaled ? "items-start" : "items-start md:items-center"}`}
    >
      <div
        ref={contentRef}
        className="shrink-0 origin-top-left"
        style={{
          width: `${100 / scale}%`,
          transform: isScaled ? `scale(${scale})` : undefined,
        }}
      >
        {children}
      </div>
    </div>
  );
}
