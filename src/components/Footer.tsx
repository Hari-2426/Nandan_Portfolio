"use client";

import { ArrowUp, Mail, Heart, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080b11] border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#hero" className="flex items-center gap-2 text-lg font-bold text-white font-heading">
              <span className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Terminal className="w-4 h-4" />
              </span>
              <span>Hari Hara Nandan</span>
            </a>
            <p className="text-xs text-slate-400 text-center md:text-left">
              Java Backend Developer | Spring Boot | REST APIs | MySQL
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-900/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-900/50 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-sky-400 p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-900/50 transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-900/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Hari Hara Nandan. Built with Next.js, React, Tailwind CSS & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
