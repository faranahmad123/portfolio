"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

/** Gradient placeholder for project screenshots */
function ProjectImageFallback({ title }: { title: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0f1119] via-[#00e0ff]/5 to-[#8b5cf6]/5 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#00e0ff]/20 to-[#8b5cf6]/20 flex items-center justify-center mb-3">
          <span className="text-2xl">🚀</span>
        </div>
        <p className="font-mono text-[10px] text-zinc-600 max-w-[200px]">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduce = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);

  const activeProject = projects[activeIndex];
  const isValidImage =
    activeProject.image &&
    !activeProject.image.includes("YOUR_") &&
    activeProject.image.length > 5;

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth * 0.85;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          number="04"
          label="Projects"
          subtitle="Selected work."
        />

        {/* Desktop: two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1fr] gap-8 mt-16">
          {/* Left: scrollable project list */}
          <div className="space-y-4">
            {projects.map((project, i) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, x: shouldReduce ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                className={`w-full text-left glass-card p-6 transition-all duration-300 ${
                  i === activeIndex
                    ? "border-[#00e0ff]/30 shadow-lg shadow-[#00e0ff]/5"
                    : "hover:border-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl font-bold text-white/10">
                    {project.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-white/5 text-zinc-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-bold">{project.title}</h3>
                    <p className="text-zinc-500 text-sm mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    <p className="font-mono text-[10px] text-zinc-700 mt-3">
                      {project.date}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: sticky preview panel */}
          <div className="sticky top-24 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="glass-card overflow-hidden"
              >
                {/* Screenshot */}
                <div className="aspect-video w-full overflow-hidden">
                  {isValidImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <ProjectImageFallback title={activeProject.title} />
                  )}
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2 py-1 rounded-full border border-[#00e0ff]/15 text-[#00e0ff]/70 bg-[#00e0ff]/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-xl">
                    {activeProject.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                    {activeProject.description}
                  </p>

                  {activeProject.bullets && activeProject.bullets.length > 0 && (
                    <div className="mt-4 space-y-2 border-t border-white/5 pt-3">
                      <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                        Key Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {activeProject.bullets.slice(0, 3).map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-zinc-400 leading-relaxed"
                          >
                            <span className="text-[#00e0ff] text-[10px] mt-0.5 shrink-0">
                              ✦
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] px-2 py-1 rounded-md border border-white/5 text-zinc-600 bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn glow-btn-primary text-xs"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn glow-btn-outline text-xs"
                    >
                      <Github size={14} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: horizontal carousel */}
        <div className="lg:hidden mt-12">
          <div className="flex gap-3 mb-4 justify-end">
            <button
              onClick={() => scrollCarousel("left")}
              className="p-2 rounded-lg border border-white/10 text-zinc-500 hover:text-white hover:border-[#00e0ff]/30 transition-all"
              aria-label="Previous project"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="p-2 rounded-lg border border-white/10 text-zinc-500 hover:text-white hover:border-[#00e0ff]/30 transition-all"
              aria-label="Next project"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4"
            style={{ scrollbarWidth: "none" }}
          >
            {projects.map((project) => {
              const isValid =
                project.image &&
                !project.image.includes("YOUR_") &&
                project.image.length > 5;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass-card min-w-[85vw] sm:min-w-[380px] snap-center overflow-hidden shrink-0"
                >
                  <div className="aspect-video w-full">
                    {isValid ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ProjectImageFallback title={project.title} />
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-[#00e0ff]/15 text-[#00e0ff]/70 bg-[#00e0ff]/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-bold">{project.title}</h3>
                    <p className="text-zinc-500 text-sm mt-2 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex gap-3 mt-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-btn glow-btn-primary text-xs !py-2"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-btn glow-btn-outline text-xs !py-2"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
