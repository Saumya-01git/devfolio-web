import React from 'react';
import { MapPin, Mail, FileText, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap, Cpu } from 'lucide-react';

export default function AboutSection({ about }) {
  if (!about) return null;

  const highlights = [
    {
      title: 'Full-Stack Architecture',
      desc: 'Bespoke headless CMS engines, distributed APIs, and scalable PostgreSQL schemas.',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'hover:border-sky-500/40',
      icon: <Layers className="w-5 h-5 text-sky-400" />
    },
    {
      title: 'Aesthetic UI Engineering',
      desc: 'Component design systems built with React, Vite, and modern Tailwind with micro-animations.',
      color: 'text-pink-400',
      bg: 'bg-pink-500/10',
      border: 'hover:border-pink-500/40',
      icon: <Sparkles className="w-5 h-5 text-pink-400" />
    },
    {
      title: 'Performance & Optimization',
      desc: 'Zero-overhead bundles, lightning database indexing, and low-latency API execution.',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'hover:border-orange-500/40',
      icon: <Zap className="w-5 h-5 text-orange-400" />
    },
    {
      title: 'Bulletproof Security',
      desc: 'Role-based access control, cryptographic JWT tokens, input sanitization, and CORS enforcement.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'hover:border-purple-500/40',
      icon: <ShieldCheck className="w-5 h-5 text-purple-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Soft Pink-Purple Ambient Lighting */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-sky-500/10 via-pink-500/10 to-orange-500/10 border border-pink-500/20 text-pink-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>BACKGROUND & CORE STRENGTHS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-sunset">My Craft</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Passionate about engineering reliable software systems from the database layer to pixel-perfect client interfaces.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden shadow-2xl shadow-black/50">
              <div className="space-y-3">
                <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block font-bold">
                  // Professional Profile
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                  {about.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line pt-2">
                  {about.bio}
                </p>
              </div>

              {/* Meta pills */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-3 text-xs text-slate-300">
                {about.location && (
                  <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card border border-white/5">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>{about.location}</span>
                  </div>
                )}
                {about.email && (
                  <a
                    href={`mailto:${about.email}`}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl glass-card hover:border-pink-500/40 transition"
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
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500/20 via-pink-500/20 to-orange-500/20 text-white font-semibold border border-pink-500/30 hover:border-pink-500/60 transition shadow-md"
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
                className={`glass-card p-5 rounded-2xl border border-white/5 ${item.border} transition duration-300 flex items-start gap-4 group`}
              >
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition shadow-sm`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm group-hover:text-slate-100 transition">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
