import Image from "next/image";
import PhoneMockup from "@/app/components/ui/devices/phone-mockup";
import BrowserMockup from "@/app/components/ui/devices/browser-mockup";
import type { Project } from "@/app/lib/content/projects";

function ScreensComingSoon() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-linear-to-br from-accent/40 via-zinc-950 to-cyan-500/30 p-4 text-center">
      <Image src="/logo.png" alt="" width={56} height={56} className="rounded-full" />
      <span className="font-mono text-[10px] tracking-[0.2em] text-white/60 uppercase">Screens soon</span>
    </div>
  );
}

// Three phones fanned out in 3D: the middle one in front, the side ones turned toward it.
function PhoneTrio({ project }: { project: Project }) {
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
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <PhoneMockup src={center} alt={`${project.title} screen 1`} className="animate-float w-[32%] max-w-64">
          {placeholder}
        </PhoneMockup>
      </div>
    </div>
  );
}

export default function ProjectDevices({ project }: { project: Project }) {
  if (project.device === "phone") return <PhoneTrio project={project} />;

  if (project.device === "browser") {
    const host = project.live ? new URL(project.live).host : `${project.title.toLowerCase().replace(/\s+/g, "")}.app`;
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
