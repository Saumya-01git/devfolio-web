import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles } from 'lucide-react';

export default function ExperienceSection({ experience = [] }) {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#070913]/70">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-500/12 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-3">
            <Briefcase className="w-3.5 h-3.5 text-pink-400" />
            <span>CAREER PATH & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-sunset">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A track record of engineering leadership, scalable backend architectures, and high-velocity shipping.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Aurora Spine */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-sky-400 via-pink-500 to-orange-400 -translate-x-1/2 hidden sm:block rounded-full shadow-lg shadow-pink-500/30"></div>

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
                  {/* Central Node Badge with Pink Glow */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#080b15] border-2 border-pink-400 flex items-center justify-center z-10 shadow-lg shadow-pink-500/40 hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-sky-400 to-orange-400"></span>
                  </div>

                  {/* Timeline Card */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-pink-500/40 transition duration-300 space-y-4 shadow-xl shadow-black/50">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-extrabold text-white text-lg">{item.role}</span>
                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gradient-to-r from-pink-500/20 to-orange-500/20 text-orange-300 border border-orange-500/30">
                            Present
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 font-bold">
                          @{item.company}
                        </span>
                        <div className="flex items-center gap-1 text-slate-400 font-normal">
                          <Calendar className="w-3.5 h-3.5 text-pink-400" />
                          <span>{item.startDate} – {item.isCurrent ? 'Present' : (item.endDate || '')}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center gap-1 text-slate-400 font-normal">
                            <MapPin className="w-3.5 h-3.5 text-sky-400" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {item.highlights && item.highlights.length > 0 && (
                        <div className="pt-2 border-t border-white/5 space-y-2">
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-300/90">
                              <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 flex-shrink-0 mt-0.5" />
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
