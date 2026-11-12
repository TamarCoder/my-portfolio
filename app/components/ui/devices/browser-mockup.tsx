import Image from "next/image";
import type { ReactNode } from "react";

interface BrowserMockupProps {
  src?: string;
  alt: string;
  url?: string;
  className?: string;
  // Width / height of the screenshot, so it is shown whole instead of cropped.
  aspect?: number;
  sizes?: string;
  children?: ReactNode;
}

// Glass browser window with traffic lights and an address bar.
export default function BrowserMockup({ src, alt, url = "", className = "", aspect = 16 / 9, sizes = "900px", children }: BrowserMockupProps) {
  return (
    <div className={`glass overflow-hidden rounded-2xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)] ${className}`}>
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 truncate rounded-md bg-white/5 px-3 py-1 text-center font-mono text-[11px] text-muted-foreground">
          {url}
        </div>
      </div>
      <div className="relative bg-zinc-950" style={{ aspectRatio: aspect }}>
        {src ? <Image src={src} alt={alt} fill sizes={sizes} quality={90} className="object-cover object-top" /> : children}
      </div>
    </div>
  );
}
