"use client";

import PhoneMockup from "@/app/components/ui/devices/phone-mockup";
import PhoneVideoPreview from "@/app/components/ui/phone-video-preview";
import ScreensComingSoon from "@/app/components/sections/screens-coming-soon";
import type { Project } from "@/app/lib/content/projects";
import { useLanguage } from "@/app/i18n/language-provider";

// Three phones fanned out in 3D: the middle one in front, the side ones turned toward it.
export function PhoneTrio({ project }: { project: Project }) {
  const [center, left, right] = [0, 1, 2].map((i) => project.screens[i]);
  const placeholder = <ScreensComingSoon />;
  return (
    <div className="relative h-full [perspective:1600px]">
      <div className="absolute inset-y-0 left-[14%] flex w-[26%] max-w-56 items-center" style={{ transform: "rotateY(30deg) scale(0.88)" }}>
        <PhoneMockup src={left} alt={`${project.title} screen 2`} className="w-full opacity-90">
          {placeholder}
        </PhoneMockup>
      </div>
      <div className="absolute inset-y-0 right-[14%] flex w-[26%] max-w-56 items-center justify-end" style={{ transform: "rotateY(-30deg) scale(0.88)" }}>
        <PhoneMockup src={right} alt={`${project.title} screen 3`} className="w-full opacity-90">
          {placeholder}
        </PhoneMockup>
      </div>
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <PhoneMockup src={center} alt={`${project.title} screen 1`} className="animate-float w-[32%] max-w-64">
          {placeholder}
        </PhoneMockup>
      </div>
    </div>
  );
}

export interface DevicesProps {
  project: Project;
  onPlayVideo: () => void;
}

// Video project: four screenshots fanned out behind, the looping video phone in front.
const BACK_PHONES = [
  { pos: "left-[2%] w-[19%] max-w-40", transform: "rotateY(35deg) scale(0.8)", dim: "opacity-60" },
  { pos: "left-[17%] w-[22%] max-w-48", transform: "rotateY(25deg) scale(0.9)", dim: "opacity-85" },
  { pos: "right-[17%] w-[22%] max-w-48 justify-end", transform: "rotateY(-25deg) scale(0.9)", dim: "opacity-85" },
  { pos: "right-[2%] w-[19%] max-w-40 justify-end", transform: "rotateY(-35deg) scale(0.8)", dim: "opacity-60" },
];

export function PhoneVideoStage({ project, video, onPlayVideo }: DevicesProps & { video: string }) {
  const { t } = useLanguage();
  return (
    <div className="relative h-full [perspective:1600px]">
      {BACK_PHONES.map((phone, i) => (
        <div key={phone.pos} className={`absolute inset-y-0 flex items-center ${phone.pos} ${i === 1 || i === 2 ? "z-[1]" : ""}`} style={{ transform: phone.transform }}>
          <PhoneMockup src={project.screens[i]} alt={`${project.title} screen ${i + 1}`} className={`w-full ${phone.dim}`}>
            <ScreensComingSoon />
          </PhoneMockup>
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <button type="button" onClick={onPlayVideo} aria-label={t.projects.watchIntro} className="animate-float pointer-events-auto w-[30%] max-w-60 cursor-pointer">
          <PhoneMockup src={project.screens[0]} alt={`${project.title} intro`} className="w-full" overlay={<PhoneVideoPreview src={video} label={t.projects.watchWithSound} />} />
        </button>
      </div>
    </div>
  );
}
