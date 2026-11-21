import React from 'react';
import { Layers, Sparkles, Zap, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  if (!services || services.length === 0) return null;

  // Curated color themes for each service card
  const colorThemes = [
    {
      border: 'hover:border-sky-400/50',
      iconBg: 'bg-sky-500/15 text-sky-400',
      titleHover: 'group-hover:text-sky-300',
      checkColor: 'text-sky-400'
    },
    {
      border: 'hover:border-pink-400/50',
      iconBg: 'bg-pink-500/15 text-pink-400',
      titleHover: 'group-hover:text-pink-300',
      checkColor: 'text-pink-400'
    },
    {
      border: 'hover:border-orange-400/50',
      iconBg: 'bg-orange-500/15 text-orange-400',
      titleHover: 'group-hover:text-orange-300',
      checkColor: 'text-orange-400'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#070913]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/10 via-pink-500/10 to-orange-500/10 border border-sky-500/20 text-sky-300 text-xs font-bold mb-3 tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <span>SOLUTIONS & ARCHITECTURE SERVICES</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Services & <span className="text-gradient-aurora">Capabilities</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-xl leading-relaxed">
            From initial database schema blueprints to production deployment and performance optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const theme = colorThemes[idx % colorThemes.length];
            return (
              <div
                key={s.id}
                className={`glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 ${theme.border} transition duration-300 flex flex-col justify-between group shadow-xl shadow-black/50 hover:-translate-y-1.5`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition shadow-lg`}>
                    {s.icon || '🛠️'}
                  </div>

                  <h3 className={`font-heading text-2xl font-extrabold text-white mb-3 ${theme.titleHover} transition`}>
                    {s.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed mb-6">
                    {s.description}
                  </p>

                  {s.features && s.features.length > 0 && (
                    <div className="space-y-3 pt-4 border-t border-white/5">
                      {s.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className={`w-4 h-4 ${theme.checkColor} flex-shrink-0`} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
