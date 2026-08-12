"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Server, Cloud, Wrench, Brain, Layout, Flame, Check } from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Languages: Code,
  Backend: Server,
  Databases: Database,
  "Cloud & AI": Cloud,
  "Tools & DevOps": Wrench,
  Concepts: Brain,
  Frontend: Layout,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");

  const filterTabs = ["All", "Backend", "Databases", "Cloud & AI", "Tools & Concepts"];

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeTab === "All") return true;
    if (activeTab === "Backend") return cat.category === "Backend" || cat.category === "Languages";
    if (activeTab === "Databases") return cat.category === "Databases" || cat.category === "Languages";
    if (activeTab === "Cloud & AI") return cat.category === "Cloud & AI";
    if (activeTab === "Tools & Concepts") return cat.category === "Tools & DevOps" || cat.category === "Concepts";
    return true;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-xs uppercase tracking-widest text-sky-400 font-bold mb-3">
            TECHNICAL REPERTOIRE
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
            Skills & Enterprise Technologies
          </p>
          <p className="text-slate-400 text-base mt-3">
            Categorized technical stack spanning enterprise Java backend frameworks, databases, cloud prompt engineering, and core CS fundamentals.
          </p>
          <div className="mt-4 h-1 w-20 bg-sky-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeTab === tab
                  ? "bg-sky-500 text-slate-950 border-sky-400 shadow-md shadow-sky-500/20"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((catGroup, idx) => {
            const IconComponent = CATEGORY_ICONS[catGroup.category] || Code;

            return (
              <motion.div
                key={catGroup.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-7 rounded-2xl border border-slate-800 glass-card-hover flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white font-heading">
                        {catGroup.category}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {catGroup.description}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800/80 my-4" />

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-2">
                    {catGroup.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                          skill.hot
                            ? "bg-sky-500/10 text-sky-300 border-sky-500/30 hover:border-sky-400 hover:bg-sky-500/20"
                            : "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
                        }`}
                      >
                        {skill.hot && (
                          <Flame className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
