"use client";

import { useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { useInView } from "@/app/components/effects/use-in-view";

interface PhoneVideoPreviewProps {
  src: string;
  label: string;
}

// Muted looping preview over the phone screenshot; the screenshot stays for reduced motion.
export default function PhoneVideoPreview({ src, label }: PhoneVideoPreviewProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    videoRef.current?.play().catch(() => {});
  }, [inView]);

  return (
    <div ref={ref} className="absolute inset-0">
      <video ref={videoRef} src={src} muted loop playsInline preload="metadata" className="h-full w-full object-cover" />
      <span className="glass absolute bottom-[5%] left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[10px] font-medium text-foreground">
        <Play size={10} fill="currentColor" /> {label}
      </span>
    </div>
  );
}
