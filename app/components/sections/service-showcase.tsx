import { ArrowUpRight } from "lucide-react";
import IconBox from "@/app/components/ui/icon-box";
import type { Service } from "@/app/lib/content/services";

interface ServiceShowcaseProps {
  service: Service;
  index: number;
  total: number;
}

// Big preview panel for the selected service; `key` on the parent replays the entry animation.
export default function ServiceShowcase({ service, index, total }: ServiceShowcaseProps) {
  return (
    <div data-tilt className="glass relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-8 lg:p-12">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/30 blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-28 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[90px]" />

      <div key={service.title} className="animate-fade-in-up relative">
        <div className="mb-10 flex items-start justify-between">
          <IconBox size="xl" className="h-20 w-20 rounded-3xl">
            <service.icon size={36} strokeWidth={1.6} />
          </IconBox>
          <span className="font-mono text-sm text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mb-5 text-4xl font-bold leading-tight xl:text-5xl">{service.title}</h3>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{service.description}</p>
      </div>

      <a
        href="#contact"
        className="group relative mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-linear-to-r from-accent to-cyan-500 px-6 py-3 text-sm font-medium text-white"
      >
        Start a project
        <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
