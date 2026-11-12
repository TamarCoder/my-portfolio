import { Check, Code2, ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/app/lib/content/projects";

export default function ProjectInfo({ project }: { project: Project }) {
  return (
    <div key={project.title} className="animate-fade-in-up">
      <p className="mb-2 font-mono text-xs tracking-[0.25em] text-cyan-300 uppercase">{project.category}</p>
      <h3 className="mb-4 text-4xl font-bold leading-tight xl:text-5xl">{project.title}</h3>
      <p className="mb-6 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mb-6 grid max-w-xl grid-cols-2 gap-2">
        {project.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent to-cyan-500 text-white">
              <Check size={12} strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mb-7 flex max-w-xl flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-cyan-500 px-5 py-2.5 text-sm font-medium text-white">
            <ExternalLink size={15} /> Live demo
          </a>
        )}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium hover:text-accent-light">
            <Code2 size={15} /> Source code
          </a>
        ) : (
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-muted-foreground">
            <Lock size={14} /> Private company code
          </span>
        )}
      </div>
    </div>
  );
}
