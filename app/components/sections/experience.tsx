import Image from "next/image";
import { Briefcase, TrendingUp, Users, Clock } from "lucide-react";
import SectionHeading from "@/app/components/ui/section-heading";
import Card from "@/app/components/ui/card";
import IconBox from "@/app/components/ui/icon-box";
import { experiences } from "@/app/lib/data";

const metrics = [
  { icon: Clock, value: "30%", label: "Faster processing" },
  { icon: Users, value: "20–25%", label: "More daily capacity" },
  { icon: TrendingUp, value: "2+", label: "Years in development" },
];

export default function Experience() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="About Me" title="Who I Am" />

        {/* Bento grid: photo + bio + metrics */}
        <div className="mb-24 grid gap-4 md:grid-cols-4">
          {/* Photo card */}
          <div className="relative overflow-hidden rounded-2xl border border-border md:row-span-2">
            <Image
              src="/profile-about.jpg"
              alt="Tamar Khuskivadze"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm font-semibold text-white">
                Tamar Khuskivadze
              </p>
              <p className="text-xs text-white/70">
                Frontend &amp; Mobile Developer
              </p>
            </div>
          </div>

          {/* Bio card */}
          <Card className="p-8 md:col-span-3">
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                As a React Frontend &amp; React Native Developer, I bring a
                blend of technical expertise and a unique perspective shaped by a
                diverse background. With experience in JavaScript&nbsp;(ES6+),
                React.js, React Native with Expo, HTML5, CSS3, and responsive
                design, I specialize in building high-performance, user-friendly
                web and mobile applications.
              </p>
              <p>
                Before transitioning to development, I gained valuable insights
                from roles in software operations management and healthcare
                economics, where I honed my problem-solving abilities and
                learned how to optimize systems for better efficiency — leading a
                project to fully digitize a clinic&apos;s administrative
                processes.
              </p>
              <p>
                These experiences sharpened my ability to analyze complex
                systems, communicate effectively with stakeholders, and work
                collaboratively across teams. I approach every task with a
                strategic mindset, always aiming for efficiency and user
                satisfaction.
              </p>
            </div>
          </Card>

          {/* Metric cards */}
          {metrics.map((metric) => (
            <Card key={metric.label} className="flex items-center gap-4 p-5">
              <IconBox>
                <metric.icon size={18} className="text-accent" />
              </IconBox>
              <div>
                <p className="text-xl font-bold text-accent">{metric.value}</p>
                <p className="text-xs text-muted-foreground">{metric.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Experience */}
        <SectionHeading label="Experience" title="My Professional Journey" />

        <div className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.company} hover className="group p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <IconBox className="mt-0.5">
                    <Briefcase
                      size={18}
                      className="text-muted-foreground transition-colors group-hover:text-accent"
                    />
                  </IconBox>
                  <div>
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm font-medium text-accent">
                      {exp.company}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground sm:mt-1">
                  {exp.period}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
