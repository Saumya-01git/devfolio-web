import React from 'react';

export default function LeadershipSection() {
  const leadershipRoles = [
    {
      title: "House Captain Leader",
      organization: "Jawahar Navodaya Vidyalaya (JNV)",
      period: null,
      desc: "Elected as House Captain in 8th grade to lead student governance, oversee daily house roll-call attendance, resolve resident issues and grievances, maintain campus discipline, and coordinate house academic & cultural activities."
    },
    {
      title: "Technical & Content Core Member",
      organization: "Mathematics Club, VIT Chennai",
      period: "2025 – Present",
      desc: "Initially contributed in the Content & Outreach Department by authoring comprehensive engineering mathematics module solutions and collaborating on Discrete Mathematics problem sets with timely team submissions. Recently transitioned to the Technical Team to drive technical initiatives and platform tools."
    },
    {
      title: "Open Source Contributor",
      organization: "GirlScript Summer of Code (GSSOC)",
      period: "Aug 2026 – Present",
      desc: "Contributed to community open-source repositories by submitting pull requests, fixing UI responsiveness bugs, refactoring backend API error handling modules, and participating in peer code reviews."
    }
  ];

  return (
    <section id="leadership" className="py-16 relative font-serif">
      <div className="w-full font-serif">
        
        {/* Section Header */}
        <div className="mb-8 font-serif">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> Leadership & Extracurriculars
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Timeline List with Guaranteed 56px Gap */}
        <div className="timeline-container space-y-14 font-serif">
          {leadershipRoles.map((role, idx) => (
            <div key={idx} className="relative space-y-3 font-serif">
              
              {/* Purple Diamond Node Centered Directly ON top of the Timeline Line */}
              <div className="absolute -left-[69px] top-1.5 w-6 h-6 rounded bg-gradient-to-tr from-purple-600 via-indigo-600 to-[#0084d4] text-white flex items-center justify-center shadow-md rotate-45 border border-purple-200">
                <span className="text-[10px] -rotate-45 font-bold text-white">✦</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0f172a] uppercase tracking-wide">
                {role.title} <span className="text-purple-700 font-normal italic">@ {role.organization}</span>
              </h3>

              {role.period && (
                <div>
                  <span className="bg-purple-100 text-purple-900 text-sm sm:text-base font-serif font-bold px-4 py-1 rounded-full border border-purple-200 inline-block">
                    {role.period}
                  </span>
                </div>
              )}

              <p className="text-slate-800 text-lg sm:text-xl leading-relaxed font-serif">
                {role.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
