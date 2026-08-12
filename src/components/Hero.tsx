"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ShieldCheck, Terminal, Award, ChevronDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = PERSONAL_INFO.typingTitles;

  useEffect(() => {
    const fullText = titles[titleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIndex, titles]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Texture & Glow effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Ambient Blue Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Profile Photo Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block mb-6"
        >
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-sky-300 shadow-xl shadow-sky-500/25">
            <img
              src={PERSONAL_INFO.photoUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full border-4 border-slate-950"
            />
          </div>
          <span className="absolute bottom-2 right-2 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-slate-950"></span>
          </span>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md"
        >
          <span>Open to Java Backend & Full-Stack Opportunities</span>
        </motion.div>

        {/* Hero Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 font-heading"
        >
          Hi, I&apos;m{" "}
          <span className="text-gradient hover:opacity-95 transition-opacity">
            {PERSONAL_INFO.name}
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-16 sm:h-20 flex items-center justify-center mb-6"
        >
          <p className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-300">
            Specialized as a{" "}
            <span className="text-sky-400 underline decoration-sky-500/40 decoration-4 underline-offset-8">
              {currentText}
            </span>
            <span className="animate-pulse text-sky-400 font-normal">|</span>
          </p>
        </motion.div>

        {/* Short Bio Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed mb-10"
        >
          Passionate about architecting robust, scalable RESTful APIs using{" "}
          <strong className="text-slate-200">Spring Boot</strong>,{" "}
          <strong className="text-slate-200">Spring Data JPA</strong>, and{" "}
          <strong className="text-slate-200">MySQL</strong>. National-level hackathon winner & AWS-certified in prompt engineering, dedicated to clean code, security standards, and high-performance backend systems.
        </motion.p>

        {/* Quick Achievement Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <Award className="w-4 h-4 text-amber-400" />
            <span>1st Place Ripple 2k26 Hackathon</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>AWS Prompt Engineering Certified</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>GPA 8.7 / 10.0 (B.Tech)</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-200"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Hari_Hara_Nandan_Resume.docx"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm sm:text-base hover:border-sky-500/40 transition-all duration-200"
          >
            <Download className="w-4 h-4 text-sky-400" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-sm sm:text-base hover:border-sky-500/40 transition-all duration-200"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            Contact Me
          </a>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-900/50 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="inline-flex flex-col items-center text-slate-500 hover:text-sky-400 text-xs font-medium gap-2 transition-colors"
        >
          <span>SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
