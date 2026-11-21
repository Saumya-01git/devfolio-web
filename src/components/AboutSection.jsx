import React from 'react';
import { MapPin, Mail, FileText, CheckCircle2, Sparkles } from 'lucide-react';

export default function AboutSection({ about }) {
  if (!about) return null;

  const highlights = [
    { label: 'System Design', desc: 'Custom headless CMS & microservices' },
    { label: 'Frontend Craft', desc: 'Fast, responsive & accessible React apps' },
    { label: 'Data Modeling', desc: 'PostgreSQL, Prisma, schema migrations' },
    { label: 'Code Quality', desc: 'Zero bloat, modular, clean abstractions' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & EXPERTISE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Passionate about engineering reliable software systems from the database layer to pixel-perfect client interfaces.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio & Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 relative overflow-hidden">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {about.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {about.bio}
                </p>
              </div>

              {/* Meta tags */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-4 text-xs text-slate-300">
                {about.location && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-card">
                    <MapPin className="w-4 h-4 text-indigo-400" />
                    <span>{about.location}</span>
                  </div>
                )}
                {about.email && (
                  <a href={`mailto:${about.email}`} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-card hover:border-indigo-500/40 transition">
                    <Mail className="w-4 h-4 text-violet-400" />
                    <span>{about.email}</span>
                  </a>
                )}
                {about.resumeUrl && (
                  <a href={about.resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 transition">
                    <FileText className="w-4 h-4" />
                    <span>View Resume / CV</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right: Technical Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-card p-5 rounded-2xl border border-white/5 flex items-start gap-4 hover:border-indigo-500/40 transition group">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{item.label}</h4>
                  <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
