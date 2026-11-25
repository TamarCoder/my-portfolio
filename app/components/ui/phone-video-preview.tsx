"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { useInView } from "@/app/components/effects/use-in-view";

const START_DELAY_MS = 1500;

interface PhoneVideoPreviewProps {
  src: string;
  label: string;
}

// Muted preview over the phone screenshot: fades in, plays once, fades back out.
export default function PhoneVideoPreview({ src, label }: PhoneVideoPreviewProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => {
      videoRef.current?.play().then(() => setPlaying(true)).catch(() => {});
    }, START_DELAY_MS);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <div ref={ref} className="absolute inset-0">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="none"
        onEnded={() => setPlaying(false)}
        className={`h-full w-full object-cover transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
      />
      <span className="glass absolute bottom-[5%] left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-medium text-foreground">
        <Play size={10} fill="currentColor" /> {label}
      </span>
    </div>
  );
}
