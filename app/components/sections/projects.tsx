import { ExternalLink, Code2 } from "lucide-react";
import SectionHeading from "@/app/components/ui/section-heading";
import Card from "@/app/components/ui/card";
import { projects } from "@/app/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Portfolio" title="Featured Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const isWide = i === 0;
            return (
              <Card
                key={project.title}
                hover
                className={`group overflow-hidden ${
                  isWide ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                }`}
              >
                {/* Visual */}
                <div
                  className={`flex items-center justify-center bg-linear-to-br from-accent/10 to-accent/5 ${
                    isWide ? "h-48 md:h-auto" : "h-44"
                  }`}
                >
                  <span className="font-mono text-5xl font-bold text-accent/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8">
                  <p className="mb-1 font-mono text-xs tracking-wider text-accent uppercase">
                    {project.category}
                  </p>
                  <h3 className="mb-3 text-xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Code2 size={16} />
                        Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground/40">
                        <Code2 size={16} />
                        Code
                      </span>
                    )}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground/40">
                        <ExternalLink size={16} />
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
