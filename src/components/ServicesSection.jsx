import React from 'react';
import { Wrench, CheckCircle2, Sparkles } from 'lucide-react';

export default function ServicesSection({ services = [] }) {
  if (!services || services.length === 0) return null;

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>SOLUTIONS & OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Services & Capabilities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            From initial database schema blueprints to production deployment and performance optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map(s => (
            <div
              key={s.id}
              className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                  {s.icon || '🛠️'}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">
                  {s.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {s.description}
                </p>

                {s.features && s.features.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {s.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

