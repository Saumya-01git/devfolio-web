import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  if (!services || services.length === 0) return null;

  // Curated color themes for each service card using 5-color palette:
  // #686868 (Dim Grey), #C2AFF0 (Mauve), #9191E9 (Soft Periwinkle), #457EAC (Steel Blue), #2D5D7B (Baltic Blue)
  const colorThemes = [
    {
      border: 'hover:border-[#C2AFF0]/60',
      iconBg: 'bg-[#C2AFF0]/15 text-[#C2AFF0]',
      titleHover: 'group-hover:text-[#C2AFF0]',
      checkColor: 'text-[#C2AFF0]'
    },
    {
      border: 'hover:border-[#9191E9]/60',
      iconBg: 'bg-[#9191E9]/15 text-[#9191E9]',
      titleHover: 'group-hover:text-[#9191E9]',
      checkColor: 'text-[#9191E9]'
    },
    {
      border: 'hover:border-[#457EAC]/60',
      iconBg: 'bg-[#457EAC]/15 text-[#457EAC]',
      titleHover: 'group-hover:text-[#457EAC]',
      checkColor: 'text-[#457EAC]'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Ambient glow matching palette */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-gradient-to-r from-[#2D5D7B]/25 via-[#457EAC]/20 to-[#9191E9]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2AFF0]/15 border border-[#C2AFF0]/30 text-[#C2AFF0] text-xs font-bold mb-3 tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-[#C2AFF0]" />
            <span>SOLUTIONS & ARCHITECTURE SERVICES</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Services & <span className="text-gradient-aurora">Capabilities</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-xl leading-relaxed">
            Full-stack application development, RESTful API security, and high-throughput PostgreSQL architectures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => {
            const theme = colorThemes[idx % colorThemes.length];
            return (
              <div
                key={s.id}
                className={`glass-panel p-8 sm:p-10 rounded-3xl border border-[#2D5D7B]/30 ${theme.border} transition duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 hover:-translate-y-1.5`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${theme.iconBg} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition shadow-lg`}>
                    {s.icon || '🛠️'}
                  </div>

                  <h3 className={`text-xl font-bold text-white mb-3 ${theme.titleHover} transition`}>
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
