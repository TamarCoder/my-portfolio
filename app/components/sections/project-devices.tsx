"use client";

import Image from "next/image";
import BrowserMockup from "@/app/components/ui/devices/browser-mockup";
import BrowserCollage from "@/app/components/sections/browser-collage";
import BrowserVideoStage from "@/app/components/sections/browser-video-stage";
import ScreensComingSoon from "@/app/components/sections/screens-coming-soon";
import { PhoneTrio, PhoneVideoStage, type DevicesProps } from "@/app/components/sections/phone-stages";

export default function ProjectDevices({ project, onPlayVideo }: DevicesProps) {
  if (project.device === "phone" && project.video) return <PhoneVideoStage project={project} video={project.video} onPlayVideo={onPlayVideo} />;
  if (project.device === "phone") return <PhoneTrio project={project} />;

  if (project.device === "browser") {
    const host = project.live ? new URL(project.live).host : `${project.title.toLowerCase().replace(/\s+/g, "")}.app`;
    if (project.video) return <BrowserVideoStage project={project} host={host} video={project.video} onPlayVideo={onPlayVideo} />;
    const [main, ...extras] = project.screens;
    if (main && extras.length > 0) {
      return <BrowserCollage title={project.title} host={host} main={main} extras={extras} />;
    }
    return (
      <div className="flex h-full items-center justify-center [perspective:1800px]">
        <BrowserMockup src={project.screens[0]} alt={`${project.title} preview`} url={host} className="animate-float w-full max-w-3xl [transform:rotateX(8deg)_rotateY(-10deg)]">
          <ScreensComingSoon />
        </BrowserMockup>
      </div>
    );
  }

  return (
    <div className="flex h-full items-center justify-center">
      <div className="glass animate-float relative aspect-[16/10] w-full max-w-3xl overflow-hidden rounded-3xl">
        <Image src={project.screens[0]} alt={`${project.title} preview`} fill sizes="900px" className="object-cover" />
      </div>
    </div>
  );
}
