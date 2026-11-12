import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/app/components/ui/section-heading";
import Card from "@/app/components/ui/card";
import IconBox from "@/app/components/ui/icon-box";
import { services } from "@/app/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-10">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <SectionHeading label="Services" title="What I Can Do For You" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Card key={service.title} hover className="group flex flex-col overflow-hidden p-7">
              <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent-light to-transparent opacity-60" />

              <div className="mb-8 flex items-start justify-between">
                <IconBox
                  size="xl"
                  className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                >
                  <service.icon size={28} strokeWidth={1.75} />
                </IconBox>
                <span className="bg-linear-to-b from-foreground/25 to-transparent bg-clip-text font-mono text-5xl font-bold text-transparent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="h-1 w-10 rounded-full bg-linear-to-r from-accent to-cyan-400 transition-all duration-500 group-hover:w-24" />
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
