"use client";

import BrowserMockup from "@/app/components/ui/devices/browser-mockup";
import PhoneVideoPreview from "@/app/components/ui/phone-video-preview";
import type { Project } from "@/app/lib/content/projects";
import { useLanguage } from "@/app/i18n/language-provider";

// WeGrids screenshot ratio; projects with other screenshots set screenAspect.
const DEFAULT_SCREEN_ASPECT = 1425 / 665;

// Two windows left, two right; the far ones smaller and dimmer, like the phone stage.
const BACK_WINDOWS = [
  { pos: "left-0 top-[14%] w-[30%]", transform: "rotateY(30deg) scale(0.85)", dim: "opacity-55" },
  { pos: "left-[9%] bottom-[16%] w-[34%] z-[1]", transform: "rotateY(20deg) scale(0.92)", dim: "opacity-80" },
  { pos: "right-[9%] top-[16%] w-[34%] z-[1]", transform: "rotateY(-20deg) scale(0.92)", dim: "opacity-80" },
  { pos: "right-0 bottom-[14%] w-[30%]", transform: "rotateY(-30deg) scale(0.85)", dim: "opacity-55" },
];

interface BrowserVideoStageProps {
  project: Project;
  host: string;
  video: string;
  onPlayVideo: () => void;
}

export default function BrowserVideoStage({ project, host, video, onPlayVideo }: BrowserVideoStageProps) {
  const { t } = useLanguage();
  // Projects with five screens keep the first one only as the video fallback.
  const backScreens = project.screens.slice(-BACK_WINDOWS.length);
  return (
    <div className="relative h-full [perspective:1800px]">
      {BACK_WINDOWS.map((win, i) => (
        <div key={win.pos} className={`absolute ${win.pos}`} style={{ transform: win.transform }}>
          <BrowserMockup src={backScreens[i]} alt={`${project.title} screen ${i + 2}`} url={host} aspect={project.screenAspect ?? DEFAULT_SCREEN_ASPECT} sizes="20vw" className={win.dim} />
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <button type="button" onClick={onPlayVideo} aria-label={t.projects.watchIntro} className="animate-float pointer-events-auto w-[58%] max-w-[44rem] cursor-pointer">
          <BrowserMockup
            src={project.screens[0]}
            alt={`${project.title} intro`}
            url={host}
            aspect={16 / 9}
            sizes="(min-width: 768px) 40vw, 60vw"
            overlay={<PhoneVideoPreview src={video} label={t.projects.watchWithSound} />}
          />
        </button>
      </div>
    </div>
  );
}
