"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Server, Database, Code2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const stats = [
    { label: "B.Tech GPA", value: "8.7 / 10", subText: "Computer Science & Data Science", icon: GraduationCap },
    { label: "Core Projects", value: "3+", subText: "Spring Boot & Full Stack", icon: Server },
    { label: "Hackathon Wins", value: "3", subText: "Including 1st Place National", icon: Award },
    { label: "AWS Certified", value: "Prompt Eng.", subText: "Cloud & AI Fundamentals", icon: ShieldCheck },
  ];

  const highlights = [
    "Expertise in Spring Boot, Spring Security, JWT Authentication, and JPA/Hibernate ORM.",
    "Proven track record building production-ready RESTful APIs with global exception handling.",
    "Solid understanding of relational database schema design, normalization, and indexing (MySQL & Oracle).",
    "National-level hackathon winner with experience building machine learning backed web applications.",
    "Certified in AWS Prompt Engineering with keen interest in cloud-native serverless systems."
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-3">
            BACKGROUND & EDUCATION
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Engineering High-Performance Java Backend Solutions
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl glass-card-hover border border-slate-800/80 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="p-3 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-1 group-hover:text-sky-400 transition-colors">
                  {item.value}
                </h3>
                <p className="text-xs text-slate-400">{item.subText}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Layout: Bio & Education Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Bio & Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-sky-400" />
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-6">
                {PERSONAL_INFO.summary}
              </p>

              <h4 className="text-sm font-semibold uppercase tracking-wider text-sky-400 mb-4">
                Core Strengths & Highlights
              </h4>
              <div className="space-y-3">
                {highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 leading-normal">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education & Academic Credentials Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <GraduationCap className="w-32 h-32 text-sky-400" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
                Education
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="text-sky-400 font-medium text-sm mb-4">
                {PERSONAL_INFO.education.institution}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-800/80 text-sm">
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Duration</span>
                  <span className="text-slate-200 font-medium">{PERSONAL_INFO.education.duration}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Academic Standing (GPA)</span>
                  <span className="text-sky-400 font-bold px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-800/50">
                    {PERSONAL_INFO.education.gpa}
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Specialization</span>
                  <span className="text-slate-200 font-medium">Data Science & Software Dev</span>
                </div>
              </div>
            </div>

            {/* Architecture Focus Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/60 border border-sky-900/40">
              <div className="flex items-center gap-3 mb-2 text-sky-400 font-bold text-base">
                <Database className="w-5 h-5" />
                Backend Engineering Focus
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated to building maintainable layered code (Controller → Service → Repository), leveraging Java OOP principles, enforcing strict payload validation, and writing secure, transaction-safe queries.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
