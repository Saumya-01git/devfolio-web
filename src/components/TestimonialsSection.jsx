import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';

export default function TestimonialsSection({ testimonials = [] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-bold mb-3 tracking-wider uppercase">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>ENDORSEMENTS & PRAISE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Peer & Client <span className="text-gradient-sunset">Testimonials</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-xl leading-relaxed">
            Feedback from engineering leaders, clients, and technical collaborators.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-pink-500/40 transition duration-300 flex flex-col justify-between group shadow-xl shadow-black/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-8 h-8 text-slate-700 group-hover:text-pink-500/40 transition" />
                </div>

                <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg">{t.authorName}</h4>
                  <p className="text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 font-extrabold">
                    {t.authorRole} {t.company ? `• ${t.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
