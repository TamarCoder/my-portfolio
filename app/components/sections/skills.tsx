import SectionHeading from "@/app/components/ui/section-heading";
import { skills, journey } from "@/app/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="bg-muted/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Skills & Journey"
          title="My Skills & Experience"
        />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Skills — tag cloud style */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-lg font-semibold">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-accent/40"
                >
                  <div
                    className="absolute inset-y-0 left-0 bg-accent/6 transition-all"
                    style={{ width: `${skill.level}%` }}
                  />
                  <div className="relative flex items-center gap-3">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-accent">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-lg font-semibold">My Journey</h3>
            <div className="space-y-6">
              {journey.map((item, i) => (
                <div key={item.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background font-mono text-xs font-bold text-accent">
                      {String(i + 1)}
                    </div>
                    {i < journey.length - 1 && (
                      <div className="mt-1 h-full w-px bg-border" />
                    )}
                  </div>
                  <div className="pb-6">
                    <span className="font-mono text-xs text-accent">
                      {item.year}
                    </span>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
