"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Terminal, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section active detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0f17]/85 backdrop-blur-md border-b border-sky-900/30 py-3 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-xl font-bold font-heading tracking-tight text-white transition-all duration-300"
        >
          <span className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400 group-hover:bg-sky-500/20 group-hover:scale-105 transition-all">
            <Terminal className="w-5 h-5" />
          </span>
          <span className="group-hover:text-sky-400 transition-colors">
            Hari<span className="text-sky-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive
                    ? "text-sky-400 font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-sky-500/15 border border-sky-500/30 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action / Social Shortcuts */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all border border-transparent hover:border-slate-700"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-slate-400 hover:text-sky-400 hover:bg-slate-800 transition-all border border-transparent hover:border-slate-700"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-md shadow-sky-500/20 hover:shadow-sky-500/40 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0b0f17]/95 backdrop-blur-xl border-b border-sky-900/40 px-4 pt-4 pb-6 space-y-3"
          >
            <div className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-200 hover:text-sky-400 hover:bg-slate-900/80 rounded-xl text-base font-medium transition-colors border border-transparent hover:border-sky-900/30"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-2">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-5 py-2.5 text-sm font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-xl"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
