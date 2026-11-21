import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-6 relative font-serif">
      <div className="w-full font-serif bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
        
        {/* Section Header */}
        <div className="mb-8 font-serif">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Timeline List */}
        <div className="timeline-container space-y-14 font-serif">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative space-y-3 font-serif">
              
              {/* Purple Diamond Node Centered Directly ON top of the Timeline Line */}
              <div className="absolute -left-[69px] top-1.5 w-6 h-6 rounded bg-gradient-to-tr from-purple-600 via-indigo-600 to-[#0084d4] text-white flex items-center justify-center shadow-md rotate-45 border border-purple-200">
                <span className="text-[10px] -rotate-45 font-bold text-white">✦</span>
              </div>

              {/* Role Header */}
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0f172a] uppercase tracking-wide">
                {exp.role} <span className="text-purple-700 font-normal italic">@ {exp.company}</span>
              </h3>

              {/* Date & Location Pill */}
              <div>
                <span className="bg-purple-100 text-purple-900 text-sm sm:text-base font-serif font-bold px-4 py-1 rounded-full border border-purple-200 inline-block">
                  {exp.period} • {exp.location} ({exp.badge})
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="list-disc list-inside space-y-2 text-slate-800 text-lg sm:text-xl leading-relaxed font-serif pl-1">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>

              {/* Tech Stack */}
              <p className="text-slate-800 text-lg sm:text-xl font-serif pt-1">
                <strong className="text-slate-950 font-bold">Technologies:</strong> {exp.skills.join(', ')}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
