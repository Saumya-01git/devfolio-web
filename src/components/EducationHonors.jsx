import React from 'react';
import { educationData } from '../data/portfolioData';

export default function EducationHonors() {
  return (
    <section id="education" className="py-6 relative font-serif">
      <div className="w-full font-serif bg-[#f8f5fc] p-8 sm:p-12 rounded-3xl border border-purple-100/80 shadow-sm">
        
        {/* Section Header */}
        <div className="mb-8 font-serif">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Vertical Timeline */}
        <div className="timeline-container space-y-14 font-serif">
          {educationData.map((edu, idx) => (
            <div key={idx} className="relative space-y-3 font-serif">
              
              {/* Purple Diamond Node Centered Directly ON top of the Timeline Line */}
              <div className="absolute -left-[69px] top-1.5 w-6 h-6 rounded bg-gradient-to-tr from-purple-600 via-indigo-600 to-[#0084d4] text-white flex items-center justify-center shadow-md rotate-45 border border-purple-200">
                <span className="text-[10px] -rotate-45 font-bold text-white">✦</span>
              </div>

              {/* Degree Header */}
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0f172a] uppercase tracking-wide">
                {edu.degree}
              </h3>

              {/* Score & Period Pill */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-purple-100 text-purple-900 text-sm sm:text-base font-serif font-bold px-4 py-1 rounded-full border border-purple-200">
                  {edu.period}
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-sm sm:text-base font-serif font-bold px-4 py-1 rounded-full border border-emerald-200">
                  {edu.score}
                </span>
              </div>

              {/* Institution Name */}
              <p className="text-slate-700 italic text-lg sm:text-xl font-serif pt-1">
                {edu.institution}
              </p>

              {/* Relevant Courses / Subjects */}
              <p className="text-slate-800 text-lg sm:text-xl leading-relaxed font-serif">
                <strong className="text-slate-950 font-bold">{edu.coursesLabel || "Subjects"}:</strong> {edu.courses ? edu.courses.join(', ') : ''}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
