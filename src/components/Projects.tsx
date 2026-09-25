"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

/** Gradient placeholder for project screenshots when not yet provided */
function ProjectImageFallback({ title }: { title: string }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0f1119] via-[#00e0ff]/5 to-[#8b5cf6]/5 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#00e0ff]/20 to-[#8b5cf6]/20 flex items-center justify-center mb-2 sm:mb-3">
          <span className="text-xl sm:text-2xl">🚀</span>
        </div>
        <p className="font-mono text-[10px] text-zinc-500 max-w-[200px] line-clamp-2">
          {title}
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});
  const shouldReduce = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);

  const activeProject = projects[activeIndex];
  const isFallback = (id: string, imgPath?: string) => {
    return (
      !imgPath ||
      imgPath.includes("YOUR_") ||
      imgPath.length < 5 ||
      imgErrors[id]
    );
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const cardWidth = carouselRef.current.querySelector("div")?.offsetWidth || 300;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + 16) : cardWidth + 16,
      behavior: "smooth",
    });
  };

  return (
    <section id="work" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <SectionHeading
          number="04"
          label="Projects"
          subtitle="Selected work."
        />

        {/* Desktop: two-column layout (switches above 768px md: breakpoint) */}
        <div className="hidden md:grid md:grid-cols-[1fr_1fr] gap-8 mt-16 items-start">
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
                className={`w-full text-left glass-card p-5 sm:p-6 transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "border-[#00e0ff]/30 shadow-lg shadow-[#00e0ff]/5"
                    : "hover:border-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-2xl font-bold text-white/10 shrink-0">
                    {project.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-white/5 text-zinc-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-bold truncate">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mt-2 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <p className="font-mono text-[10px] text-zinc-500 mt-3">
                      {project.date}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right: sticky preview panel (Desktop only) */}
          <div className="sticky top-24 h-fit">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="glass-card overflow-hidden"
              >
                {/* 16:9 Aspect Video Container using next/image with fill */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#0c0e17] border-b border-white/5">
                  {!isFallback(activeProject.id, activeProject.image) ? (
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      sizes="(max-width: 1024px) 50vw, 600px"
                      className="object-cover"
                      onError={() =>
                        setImgErrors((prev) => ({ ...prev, [activeProject.id]: true }))
                      }
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
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full border border-[#00e0ff]/15 text-[#00e0ff]/70 bg-[#00e0ff]/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-xl leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-2.5 leading-relaxed">
                    {activeProject.description}
                  </p>

                  {/* Bullet Highlights */}
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
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9px] px-2 py-1 rounded-md border border-white/5 text-zinc-500 bg-white/[0.02]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn glow-btn-primary text-xs inline-flex items-center gap-2 min-h-[44px]"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn glow-btn-outline text-xs inline-flex items-center gap-2 min-h-[44px]"
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

        {/* Mobile: swipeable horizontal carousel (strictly below 768px md: breakpoint) */}
        <div className="md:hidden mt-10 w-full overflow-hidden">
          {/* Mobile carousel navigation arrows */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="font-mono text-xs text-zinc-500">
              Swipe to explore ({projects.length} projects)
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="w-11 h-11 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-[#00e0ff]/30 flex items-center justify-center transition-all bg-white/[0.02] active:scale-95"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="w-11 h-11 rounded-xl border border-white/10 text-zinc-400 hover:text-white hover:border-[#00e0ff]/30 flex items-center justify-center transition-all bg-white/[0.02] active:scale-95"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Swipeable cards track */}
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-1 px-1 -mx-1"
            style={{
              scrollbarWidth: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {projects.map((project) => {
              const fallbackNeeded = isFallback(project.id, project.image);

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: shouldReduce ? 1 : 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="glass-card w-[86vw] max-w-[340px] snap-center overflow-hidden shrink-0 flex flex-col p-4 sm:p-5 border border-white/10"
                >
                  {/* Fixed 16:9 Image container with 16px+ padding from card edge */}
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#0c0e17] border border-white/5 mb-4 shrink-0">
                    {!fallbackNeeded ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 86vw, 340px"
                        className="object-cover"
                        onError={() =>
                          setImgErrors((prev) => ({ ...prev, [project.id]: true }))
                        }
                      />
                    ) : (
                      <ProjectImageFallback title={project.title} />
                    )}
                  </div>

                  {/* Card Content with proper internal spacing */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[9px] px-2 py-0.5 rounded-full border border-[#00e0ff]/15 text-[#00e0ff]/80 bg-[#00e0ff]/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-white font-bold text-base sm:text-lg leading-snug line-clamp-2">
                        {project.title}
                      </h3>

                      <p className="text-zinc-400 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Action buttons (min 44px tap targets for mobile accessibility) */}
                    <div className="flex gap-2.5 mt-5 pt-3 border-t border-white/5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-btn glow-btn-primary text-xs !py-2.5 flex-1 inline-flex items-center justify-center gap-1.5 min-h-[44px]"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glow-btn glow-btn-outline text-xs !py-2.5 flex-1 inline-flex items-center justify-center gap-1.5 min-h-[44px]"
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
