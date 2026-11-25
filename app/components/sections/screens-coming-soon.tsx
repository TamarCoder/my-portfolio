"use client";

import Image from "next/image";
import { useLanguage } from "@/app/i18n/language-provider";

export default function ScreensComingSoon() {
  const { t } = useLanguage();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-accent/40 via-zinc-950 to-cyan-500/30 p-4 text-center">
      <Image src="/logo.png" alt="" width={56} height={56} className="rounded-full" />
      <span className="font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase">{t.projects.screensSoon}</span>
    </div>
  );
}
