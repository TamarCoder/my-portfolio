"use client";

import { useState } from "react";
import { Check, Code2, ExternalLink, Lock, Play } from "lucide-react";
import type { Project } from "@/app/lib/content/projects";
import { useLanguage } from "@/app/i18n/language-provider";
import VideoModal from "@/app/components/ui/video-modal";

export default function ProjectInfo({ project }: { project: Project }) {
  const { t } = useLanguage();
  const text = t.projects.items[project.id];
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <div key={project.id} className="animate-fade-in-up">
      <p className="mb-2 font-mono text-xs tracking-[0.25em] text-cyan-300 uppercase">{text.category}</p>
      <h3 className="mb-2 text-3xl font-bold leading-tight md:mb-4 lg:text-4xl xl:text-5xl">{project.title}</h3>
      <p className="mb-4 line-clamp-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:mb-6 md:line-clamp-none md:text-base">{text.description}</p>

      <ul className="mb-6 hidden max-w-xl grid-cols-2 gap-2 sm:grid">
        {text.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent to-cyan-500 text-white">
              <Check size={12} strokeWidth={3} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mb-5 flex max-w-xl flex-wrap gap-2 md:mb-7">
        {project.tags.map((tag) => (
          <span key={tag} className="glass rounded-full px-3 py-1 text-xs text-muted-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        {project.video && (
          <button type="button" onClick={() => setVideoOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-cyan-500 px-5 py-2.5 text-sm font-medium text-white transition-all hover:brightness-110">
            <Play size={15} fill="currentColor" /> {t.projects.watchIntro}
          </button>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent to-cyan-500 px-5 py-2.5 text-sm font-medium text-white">
            <ExternalLink size={15} /> {t.projects.liveDemo}
          </a>
        )}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium hover:text-accent-light">
            <Code2 size={15} /> {t.projects.sourceCode}
          </a>
        ) : (
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm text-muted-foreground">
            <Lock size={14} /> {t.projects.privateCode}
          </span>
        )}
      </div>

      {videoOpen && project.video && (
        <VideoModal src={project.video} title={project.title} closeLabel={t.projects.closeVideo} onClose={() => setVideoOpen(false)} />
      )}
    </div>
  );
}
