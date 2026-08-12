"use client";

import { motion } from "framer-motion";
import { Award, Trophy, ShieldCheck, CheckCircle, ExternalLink, Star } from "lucide-react";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/data/portfolioData";

export default function CertificationsAchievements() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-sky-500/10 blur-[130px] rounded-full pointer-events-none" />

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
            RECOGNITION & CERTIFICATIONS
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Credentials & Competition Honors
          </p>
          <p className="text-slate-400 text-base mt-3">
            Official industry certifications and national-level hackathon wins validating enterprise engineering proficiency.
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        {/* Top Grid: Certifications */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            <h3 className="text-xl font-bold text-white font-heading">
              Verified Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl border border-slate-800 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/30 rounded-full">
                      {cert.badgeText}
                    </span>
                    {cert.year && (
                      <span className="text-xs text-slate-500 font-medium">
                        {cert.year}
                      </span>
                    )}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 leading-snug font-heading">
                    {cert.title}
                  </h4>

                  <p className="text-xs font-semibold text-sky-400/90 mb-3">
                    Issuer: {cert.issuer}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Verified Professional Credential</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Grid: Hackathon Achievements */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Trophy className="w-5 h-5 text-amber-400" />
            <h3 className="text-xl font-bold text-white font-heading">
              Hackathon & Competition Achievements
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((item, idx) => (
              <motion.div
                key={item.title + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl border border-slate-800 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`p-3 rounded-xl ${
                      idx === 0
                        ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                        : "bg-sky-500/10 text-sky-400 border border-sky-500/30"
                    }`}>
                      {item.iconType === "trophy" ? (
                        <Trophy className="w-5 h-5" />
                      ) : item.iconType === "award" ? (
                        <Award className="w-5 h-5" />
                      ) : (
                        <Star className="w-5 h-5" />
                      )}
                    </span>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      idx === 0
                        ? "bg-amber-500/10 text-amber-300 border border-amber-500/30"
                        : "bg-slate-900 text-slate-400 border border-slate-800"
                    }`}>
                      {item.award}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs font-semibold text-sky-400 mb-3">
                    {item.event}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
