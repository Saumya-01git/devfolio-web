import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Sparkles, Layers, ShieldCheck, Zap, Cpu } from 'lucide-react';

export default function AboutSection({ about }) {
  const highlights = [
    {
      title: 'Full-Stack Web Engineering',
      desc: 'React.js, Node.js, Express, and PostgreSQL web modules engineered at Labmentix for enterprise clients.',
      color: 'text-teal-400',
      border: 'hover:border-teal-400/40',
      icon: <Layers className="w-5 h-5 text-teal-400" />
    },
    {
      title: 'Cyber Security & Cryptography',
      desc: 'ASPE encryption, DASP framework research (91.4% Precision@10), secure trapdoors, and phishing threat heuristics.',
      color: 'text-rose-400',
      border: 'hover:border-rose-400/40',
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />
    },
    {
      title: 'High-Performance REST APIs',
      desc: 'Stateless JWT auth, bcrypt hashing, RBAC middleware, and PostgreSQL query optimizations speeding throughput by 28%.',
      color: 'text-cyan-400',
      border: 'hover:border-cyan-400/40',
      icon: <Zap className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'AI & LLM Benchmarking',
      desc: 'Authored 10+ evaluation datasets at GSSoC 2026 with strict JSON Schema (Draft-07) contracts and latency pipelines.',
      color: 'text-pink-400',
      border: 'hover:border-pink-400/40',
      icon: <Cpu className="w-5 h-5 text-pink-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft Teal-Rose Ambient Lighting */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-teal-500/12 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 via-rose-500/10 to-cyan-500/10 border border-teal-500/20 text-teal-300 text-xs font-bold mb-3 tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>BACKGROUND & CORE CRAFT</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-sunset">My Craft</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-2xl leading-relaxed">
            Pursuing Computer Science & Engineering (Cyber Security) at Vellore Institute of Technology (VIT), Chennai.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl mb-12 max-w-5xl mx-auto space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed">
          <p>
            Hey there! I am <strong className="text-white font-bold">{personalInfo.name}</strong>, a Full-Stack Software Engineer with a specialized focus on Web Development, Cyber Security, and Cryptographic Protocols.
          </p>
          <p>
            Currently pursuing my Bachelor of Technology in <strong className="text-teal-300">Computer Science and Engineering (Cyber Security)</strong> from <span className="text-white font-semibold">Vellore Institute of Technology (VIT), Chennai</span>. My technical journey has been marked by building production-grade web systems and researching privacy-preserving search algorithms.
          </p>
          <p>
            My core engineering passion lies at the intersection of <strong className="text-rose-300">full-stack web architecture, artificial intelligence, and cyber security</strong>. As a Web Development Intern at Labmentix, I engineered production React/Node.js web modules, optimizing database query throughput across 15+ backend routes with stateless JWT & RBAC access governance.
          </p>
          <p>
            Beyond internships, I am an active open-source contributor at <strong className="text-teal-300">GirlScript Summer of Code (GSSoC 2026)</strong>, authoring evaluation benchmark datasets and formulating strict JSON Schema (Draft-07) validation contracts for LLM retrieval systems.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {highlights.map((h, i) => (
            <div
              key={i}
              className={`glass-card p-6 rounded-2xl border border-white/5 ${h.border} transition duration-300 space-y-3 hover:-translate-y-1`}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-white/10 flex items-center justify-center">
                {h.icon}
              </div>
              <h3 className={`font-bold text-white text-lg ${h.color}`}>
                {h.title}
              </h3>
              <p className="text-sm text-slate-300/90 leading-relaxed">
                {h.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
