import React from 'react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Microsoft Azure Fundamentals (AZ-900) Certification",
      organization: "Microsoft & Ethnus Internship",
      score: "Grade A • 91% Final Score",
      desc: "Completed intensive cloud computing internship covering Microsoft Azure core architectural components, cloud security governance, compliance, virtual networking, and Azure App Services."
    },
    {
      title: "Apna College Data Structures & Algorithms Certification",
      organization: "Apna College",
      score: "Verified Certificate of Completion",
      desc: "Mastered fundamental to advanced data structures (arrays, linked lists, trees, graphs, heaps, dynamic programming) in C++ and Java with 300+ problem solving implementations."
    },
    {
      title: "Banasthali Vidyapith National Entrance Qualification",
      organization: "Banasthali Vidyapith",
      score: "Merit Rank Qualified",
      desc: "Qualified the national entrance examination for Banasthali Vidyapith, demonstrating high academic aptitude in computer science and mathematical analytics."
    }
  ];

  return (
    <section id="certifications" className="py-16 relative font-serif">
      <div className="w-full font-serif">
        
        {/* Section Header */}
        <div className="mb-8 font-serif">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Timeline List with Guaranteed 56px Gap */}
        <div className="timeline-container space-y-14 font-serif">
          {certifications.map((cert, idx) => (
            <div key={idx} className="relative space-y-3 font-serif">
              
              {/* Purple Diamond Node Centered Directly ON top of the Timeline Line */}
              <div className="absolute -left-[69px] top-1.5 w-6 h-6 rounded bg-gradient-to-tr from-purple-600 via-indigo-600 to-[#0084d4] text-white flex items-center justify-center shadow-md rotate-45 border border-purple-200">
                <span className="text-[10px] -rotate-45 font-bold text-white">✦</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0f172a] uppercase tracking-wide">
                {cert.title}
              </h3>

              <div>
                <span className="bg-purple-100 text-purple-900 text-sm sm:text-base font-serif font-bold px-4 py-1 rounded-full border border-purple-200 inline-block">
                  {cert.score} • {cert.organization}
                </span>
              </div>

              <p className="text-slate-800 text-lg sm:text-xl leading-relaxed font-serif">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
