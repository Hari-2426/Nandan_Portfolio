"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, Cpu, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal content box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-sky-900/50 rounded-2xl shadow-2xl shadow-black/80 z-10 p-6 sm:p-8 space-y-6"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div>
            {project.badge && (
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/30 rounded-full mb-3">
                {project.badge}
              </span>
            )}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {project.title}
            </h3>
            <p className="text-sky-400 font-medium text-sm sm:text-base mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Detailed Paragraph */}
          <div className="space-y-3 border-t border-b border-slate-800 py-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Overview & Problem Statement
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Feature Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Technical Features & Architecture
            </h4>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 bg-slate-950/50 p-3 rounded-xl border border-slate-800/60">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold text-sky-300 bg-slate-800 rounded-lg border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" /> View Source Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-xl shadow-lg shadow-sky-500/20 transition-all"
              >
                <ExternalLink className="w-4 h-4" /> Launch Live Demo
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
