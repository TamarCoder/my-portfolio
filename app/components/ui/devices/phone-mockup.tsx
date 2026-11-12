import Image from "next/image";
import type { ReactNode } from "react";

interface PhoneMockupProps {
  src?: string;
  alt: string;
  className?: string;
  children?: ReactNode;
}

// iPhone-style frame: titanium edge, black bezel, dynamic island, side buttons and a glass reflection.
export default function PhoneMockup({ src, alt, className = "", children }: PhoneMockupProps) {
  return (
    <div className={`relative aspect-[9/19.5] ${className}`}>
      <span className="absolute -left-[3px] top-[18%] h-[6%] w-[3px] rounded-l bg-zinc-600" />
      <span className="absolute -left-[3px] top-[27%] h-[10%] w-[3px] rounded-l bg-zinc-600" />
      <span className="absolute -right-[3px] top-[24%] h-[13%] w-[3px] rounded-r bg-zinc-600" />

      <div className="relative h-full w-full rounded-[18%/8.3%] bg-linear-to-b from-zinc-500 via-zinc-800 to-zinc-600 p-[2px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.75),0_0_50px_-10px_var(--accent-glow)]">
        <div className="relative h-full w-full overflow-hidden rounded-[17%/7.9%] bg-black p-[3.5%]">
          <div className="relative h-full w-full overflow-hidden rounded-[14%/6.5%] bg-zinc-900">
            {src ? (
              <Image src={src} alt={alt} fill sizes="320px" className="object-cover object-top" />
            ) : (
              children
            )}
            <span className="absolute left-1/2 top-[1.8%] h-[3.6%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
            <span className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
