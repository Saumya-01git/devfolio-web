import React, { useState, useMemo } from 'react';
import { Cpu, Sparkles } from 'lucide-react';

export default function SkillsSection({ skills = [] }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => {
    const set = new Set(skills.map(s => s.category).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [skills]);

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') return skills;
    return skills.filter(s => s.category === selectedCategory);
  }, [skills, selectedCategory]);

  const getCategoryColor = (category) => {
    switch (category?.toLowerCase()) {
      case 'frontend':
        return { text: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/30' };
      case 'backend':
        return { text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/30' };
      case 'database':
        return { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/30' };
      default:
        return { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/30' };
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#142330]/70">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#457EAC]/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#9191E9]/18 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2AFF0]/15 border border-[#C2AFF0]/30 text-[#C2AFF0] text-xs font-bold mb-3 tracking-wider uppercase">
            <Cpu className="w-4 h-4 text-[#C2AFF0]" />
            <span>TECHNICAL MASTERY</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-cyber">Technologies</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-2xl leading-relaxed">
            Full-stack frameworks, database systems, cryptography algorithms, and AI evaluation tooling from my technical repertoire.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-9 p-2 rounded-2xl glass-card border border-[#C2AFF0]/20 shadow-lg">
            {categories.map((cat, idx) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-bold transition duration-200 cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#9191E9] to-[#457EAC] text-white shadow-md shadow-[#9191E9]/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSkills.map(skill => {
            const catStyle = getCategoryColor(skill.category);
            return (
              <div
                key={skill.id}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/5 hover:border-pink-500/40 transition duration-300 group relative overflow-hidden shadow-lg shadow-black/30 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-lg ${catStyle.bg} ${catStyle.text} border ${catStyle.border}`}>
                    {skill.category}
                  </span>
                  <span className="font-mono text-sm font-extrabold text-slate-100">
                    {skill.proficiency}%
                  </span>
                </div>

                <h3 className="font-heading font-bold text-white text-lg group-hover:text-pink-300 transition">
                  {skill.name}
                </h3>

                {/* Sunset-Aurora Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-slate-900 border border-white/5 mt-5 overflow-hidden p-[1px]">
                  <div
                    className="h-full bg-gradient-to-r from-sky-400 via-pink-500 to-orange-400 rounded-full transition-all duration-700 shadow-sm shadow-pink-500/50"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
