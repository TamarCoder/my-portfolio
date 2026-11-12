import { experiences } from "@/app/lib/content/experience";

export default function ExperienceTimeline() {
  return (
    <div className="glass flex h-full flex-col rounded-3xl p-6 lg:p-7">
      <p className="mb-5 font-mono text-xs tracking-[0.25em] text-accent-light uppercase">
        Experience
      </p>
      <ol className="relative flex flex-1 flex-col justify-between gap-5 pl-7">
        <span className="absolute bottom-2 left-[7px] top-2 w-px bg-linear-to-b from-accent via-cyan-400 to-transparent" />
        {experiences.map((exp, i) => (
          <li key={exp.company} data-tilt className="group relative rounded-2xl p-3 -m-3">
            <span
              className={`absolute -left-7 top-4 h-3.5 w-3.5 rounded-full ring-4 ring-background ${
                i === 0
                  ? "bg-linear-to-br from-accent-light to-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.6)]"
                  : "bg-foreground/30"
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h3 className="text-base font-semibold">{exp.role}</h3>
              <span className="font-mono text-[11px] text-muted-foreground">{exp.period}</span>
            </div>
            <p className="mb-1.5 text-sm font-medium text-accent-light">{exp.company}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
