import SectionHeading from "@/app/components/ui/section-heading";
import Card from "@/app/components/ui/card";
import IconBox from "@/app/components/ui/icon-box";
import { services } from "@/app/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Services" title="What I Can Do For You" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const isLarge = i < 2;
            return (
              <Card
                key={service.title}
                hover
                className={`group relative overflow-hidden p-6 ${
                  isLarge ? "lg:col-span-2" : ""
                }`}
              >
                <span className="absolute right-4 top-3 font-mono text-5xl font-bold text-accent/[0.07]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <IconBox size="lg" className="mb-4">
                    <service.icon
                      size={20}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                  </IconBox>
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
