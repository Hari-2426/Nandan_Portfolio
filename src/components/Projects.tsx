"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Layers, ArrowUpRight, ChevronRight, Info } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-3">
            FEATURED ENGINEERING WORK
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Production-Grade Projects & Systems
          </p>
          <p className="text-slate-400 text-base mt-4">
            Showcasing backend enterprise security, RESTful API architecture, role-based access control, and hackathon-winning web platforms.
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group glass-card-hover"
            >
              <div className="p-7 space-y-5">
                {/* Header & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/30 rounded-full">
                    {project.badge}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/40 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo for ${project.title}`}
                        className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:text-sky-300 hover:bg-sky-500/20 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors font-heading">
                    {project.title}
                  </h3>
                  <p className="text-xs text-sky-400/90 font-medium mt-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Top Highlights Preview */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  {project.highlights.slice(0, 2).map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-sky-400 font-bold">•</span>
                      <span className="line-clamp-2">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 bg-slate-900/90 rounded-md border border-slate-800 group-hover:border-sky-900/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Drawer Button */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Info className="w-4 h-4" />
                  View Highlights & Architecture
                </button>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-white font-medium"
                  >
                    GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-white font-medium"
                  >
                    Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
