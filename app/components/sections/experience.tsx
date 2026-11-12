import Image from "next/image";
import { TrendingUp, Users, Clock } from "lucide-react";
import Card from "@/app/components/ui/card";
import IconBox from "@/app/components/ui/icon-box";
import ExperienceTimeline from "@/app/components/sections/experience-timeline";

const metrics = [
  { icon: Clock, value: "30%", label: "Faster processing" },
  { icon: Users, value: "20–25%", label: "More daily capacity" },
  { icon: TrendingUp, value: "2+", label: "Years in development" },
];

export default function Experience() {
  return (
    <section id="about" className="px-6 py-10 lg:px-12">
      <div className="mx-auto grid max-w-[2200px] gap-5 lg:h-[calc(100dvh-5rem)] lg:grid-cols-12">
        {/* Photo with name overlay */}
        <div data-tilt className="relative min-h-80 overflow-hidden rounded-3xl border border-white/10 lg:col-span-3">
          <Image src="/profile-about.jpg" alt="Tamar Khuskivadze" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute inset-x-5 bottom-5">
            <p className="mb-1 font-mono text-[11px] tracking-[0.25em] text-cyan-300 uppercase">02 / About</p>
            <p className="text-2xl font-bold text-white">Tamar Khuskivadze</p>
            <p className="text-sm text-white/70">Frontend &amp; Mobile Developer</p>
          </div>
        </div>

        {/* Story + metrics */}
        <div className="flex flex-col gap-5 lg:col-span-5">
          <Card className="flex flex-1 flex-col justify-center p-7 lg:p-9">
            <h2 className="mb-5 text-3xl font-bold leading-tight xl:text-4xl">
              Who I <span className="bg-linear-to-r from-accent-light to-cyan-400 bg-clip-text text-transparent">Am</span>
            </h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                As a React Frontend &amp; React Native Developer, I build high-performance,
                user-friendly web and mobile apps with JavaScript&nbsp;(ES6+), React.js,
                React Native with Expo, HTML5, CSS3 and responsive design.
              </p>
              <p>
                Before development, I worked in software operations management and
                healthcare economics — leading a project to fully digitize a
                clinic&apos;s administrative processes.
              </p>
              <p>
                That taught me to analyze complex systems, talk clearly with
                stakeholders and work across teams — always aiming for efficiency
                and user satisfaction.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <Card key={metric.label} hover className="p-4">
                <IconBox className="mb-3">
                  <metric.icon size={18} />
                </IconBox>
                <p className="text-2xl font-bold text-accent-light">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
}
