"use client";

import { useEffect, useState } from "react";
import { ExternalLink, Code2, X } from "lucide-react";
import Image from "next/image";
import SectionHeading from "@/app/components/ui/section-heading";
import Card from "@/app/components/ui/card";
import { projects, type Project } from "@/app/lib/data";

export default function Projects() {
  const [tick, setTick] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTick((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
  }, [selectedProject]);

  useEffect(() => {
    const images = selectedProject?.images ?? [];
    if (images.length < 2) return;

    const intervalId = setInterval(() => {
      setModalImageIndex((prev) => (prev + 1) % images.length);
    }, 2800);

    return () => clearInterval(intervalId);
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <>
      <section id="projects" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading label="Portfolio" title="Featured Projects" />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, i) => {
              const isWide = i === 0;

              return (
                <div
                  key={project.title}
                  onClick={() => {
                    setSelectedProject(project);
                    setModalImageIndex(0);
                  }}
                  className="cursor-pointer"
                >
                  <Card
                    hover
                    className={`group overflow-hidden ${
                      isWide ? "md:col-span-2 md:grid md:grid-cols-2" : ""
                    }`}
                  >
                    {/* IMAGE */}
                    <div
                      className={`flex items-center justify-center bg-linear-to-br from-accent/10 to-accent/5 ${
                        isWide ? "h-48 md:h-auto" : "h-44"
                      }`}
                    >
                      {project.images?.length ? (
                        <Image
                          src={project.images[tick % project.images.length]}
                          alt={`${project.title} preview`}
                          width={900}
                          height={520}
                          className="h-full w-full object-cover transition-opacity duration-500"
                        />
                      ) : (
                        <span className="font-mono text-5xl font-bold text-accent/15">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>

                    {/* INFO */}
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
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent"
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
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent"
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-auto rounded-2xl border border-border bg-card shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 rounded-full bg-background/80 p-2 hover:text-accent"
            >
              <X size={20} />
            </button>

            <div className="grid md:grid-cols-[1.45fr_1fr]">
              {/* IMAGES */}
              <div className="flex min-h-64 flex-col justify-between bg-linear-to-br from-zinc-900 via-zinc-950 to-black p-4 md:min-h-[520px] md:p-6">
                {(() => {
                  const images = selectedProject.images ?? [];

                  if (!images.length) {
                    return (
                      <span className="font-mono text-7xl font-bold text-accent/15">
                        {selectedProject.title.slice(0, 2).toUpperCase()}
                      </span>
                    );
                  }

                  return (
                    <>
                      <div className="flex h-full items-center justify-center rounded-xl border border-white/10 bg-white/5 p-3">
                        <Image
                          src={images[modalImageIndex % images.length]}
                          alt={selectedProject.title}
                          width={1200}
                          height={800}
                          className="h-full max-h-[540px] w-full object-contain"
                        />
                      </div>

                      {images.length > 1 && (
                        <div className="mt-4 flex justify-center gap-2">
                          {images.map((img, index) => (
                            <button
                              key={img}
                              onClick={() => setModalImageIndex(index)}
                              className={`h-2.5 rounded-full transition-all ${
                                modalImageIndex % images.length === index
                                  ? "w-8 bg-accent"
                                  : "w-2.5 bg-white/35"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* INFO */}
              <div className="p-6 sm:p-8">
                <p className="mb-2 font-mono text-xs text-accent uppercase">
                  {selectedProject.category}
                </p>

                <h3 className="mb-4 text-2xl font-semibold">
                  {selectedProject.title}
                </h3>

                <p className="mb-6 text-sm text-muted-foreground">
                  {selectedProject.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      className="flex items-center gap-1.5 text-sm hover:text-accent"
                    >
                      <Code2 size={16} />
                      Code
                    </a>
                  )}

                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      className="flex items-center gap-1.5 text-sm hover:text-accent"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}