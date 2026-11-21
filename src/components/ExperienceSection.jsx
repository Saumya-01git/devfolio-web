import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export default function ExperienceSection({ experience = [] }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#0c121e]/80">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-teal-500/12 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-bold mb-3 tracking-wider uppercase">
            <Briefcase className="w-4 h-4 text-teal-400" />
            <span>CAREER PATH & TRACK RECORD</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-sunset">Experience</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-xl leading-relaxed">
            Enterprise software engineering, secure RESTful APIs, and open-source AI evaluation benchmarks.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Teal-Cyan Spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-teal-400 via-cyan-400 to-sky-500 -translate-x-1/2 hidden sm:block rounded-full shadow-lg shadow-teal-500/30"></div>

          <div className="space-y-8 sm:space-y-12">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node Badge with Teal Glow */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0f18] border-2 border-teal-400 flex items-center justify-center z-10 shadow-lg shadow-teal-500/40 hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"></span>
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="glass-panel p-7 sm:p-9 rounded-3xl border border-white/10 hover:border-teal-400/50 transition duration-300 space-y-4 shadow-xl shadow-black/50">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-bold text-white text-lg sm:text-xl">{item.role}</span>
                        {item.isCurrent && (
                          <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-teal-300 border border-teal-500/30">
                            Present
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 font-extrabold">
                          @{item.company}
                        </span>
                        <div className="flex items-center gap-1.5 text-slate-400 font-normal">
                          <Calendar className="w-3.5 h-3.5 text-teal-400" />
                          <span>{item.startDate} – {item.isCurrent ? 'Present' : (item.endDate || '')}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1.5 text-slate-400 font-normal">
                            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-3 border-t border-white/5 space-y-2.5">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300/95">
                              <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
