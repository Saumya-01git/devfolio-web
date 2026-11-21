import React from 'react';
import { MapPin, Mail, FileText, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap, Cpu } from 'lucide-react';

export default function AboutSection({ about }) {
  if (!about) return null;

  const highlights = [
    {
      title: 'Full-Stack Web Engineering',
      desc: 'React.js, Node.js, Express, and PostgreSQL web modules engineered at Labmentix for enterprise clients.',
      color: 'text-teal-400',
      bg: 'bg-teal-500/10',
      border: 'hover:border-teal-500/40',
      icon: <Layers className="w-5 h-5 text-teal-400" />
    },
    {
      title: 'Cyber Security & Cryptography',
      desc: 'ASPE encryption, DASP framework research (91.4% Precision@10), secure trapdoors, and phishing threat heuristics.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'hover:border-cyan-500/40',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />
    },
    {
      title: 'High-Performance REST APIs',
      desc: 'Stateless JWT auth, bcrypt hashing, RBAC middleware, and PostgreSQL query optimizations speeding throughput by 28%.',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'hover:border-sky-500/40',
      icon: <Zap className="w-5 h-5 text-sky-400" />
    },
    {
      title: 'AI & LLM Benchmarking',
      desc: 'Authored 10+ evaluation datasets at GSSoC 2026 with strict JSON Schema (Draft-07) contracts and latency pipelines.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'hover:border-emerald-500/40',
      icon: <Cpu className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft Teal-Slate Ambient Lighting */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-teal-500/12 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-teal-500/10 via-cyan-500/10 to-sky-500/10 border border-teal-500/20 text-teal-300 text-xs font-bold mb-3 tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>BACKGROUND & CORE STRENGTHS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-sunset">My Craft</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-2xl leading-relaxed">
            B.Tech in Computer Science & Engineering (Cyber Security) at VIT Chennai. Passionate about architecting secure software from relational databases to reactive frontend interfaces.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-11 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden shadow-2xl shadow-black/50">
              <div className="space-y-4">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block font-extrabold">
                  // Professional Profile
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  {about.title}
                </h3>
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed whitespace-pre-line pt-2">
                  {about.bio}
                </p>
              </div>

              {/* Meta pills */}
              <div className="pt-5 border-t border-white/5 flex flex-wrap gap-3.5 text-sm text-slate-200">
                {about.location && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card border border-white/5 font-medium">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>{about.location}</span>
                  </div>
                )}
                {about.email && (
                  <a
                    href={`mailto:${about.email}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card hover:border-pink-500/40 transition font-medium text-pink-300"
                  >
                    <Mail className="w-4 h-4 text-pink-400" />
                    <span>{about.email}</span>
                  </a>
                )}
                {about.resumeUrl && (
                  <a
                    href={about.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500/20 via-pink-500/20 to-orange-500/20 text-white font-bold border border-pink-500/30 hover:border-pink-500/60 transition shadow-md"
                  >
                    <FileText className="w-4 h-4 text-orange-400" />
                    <span>View Resume / CV</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Architectural Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`glass-card p-6 rounded-2xl border border-white/5 ${item.border} transition duration-300 flex items-start gap-4 group`}
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition shadow-sm`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white text-base group-hover:text-slate-100 transition">{item.title}</h4>
                  <p className="text-sm text-slate-300 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
