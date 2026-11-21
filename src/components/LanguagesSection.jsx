import React from 'react';
import { spokenLanguages } from '../data/portfolioData';

export default function LanguagesSection() {
  return (
    <section id="languages" className="py-16 relative font-serif">
      <div className="w-full font-serif">
        
        {/* Section Header */}
        <div className="mb-8 font-serif">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> Languages
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Bulleted List Format Matching Reference Style */}
        <div className="space-y-8 font-serif max-w-4xl pl-2">
          {spokenLanguages.map((lang, idx) => (
            <div key={idx} className="space-y-1 font-serif">
              <h3 className="text-2xl font-bold font-serif text-slate-950 flex items-center gap-3">
                <span className="text-purple-700 text-xl">•</span> {lang.language}
              </h3>
              <p className="text-lg sm:text-xl text-slate-700 font-serif pl-6 leading-relaxed">
                <strong className="text-purple-900 font-bold">{lang.level}</strong> – {lang.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
