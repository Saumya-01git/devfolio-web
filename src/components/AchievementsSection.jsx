import React from 'react';

export default function AchievementsSection() {
  const achievements = [
    {
      title: "School Rank 2 Holder (Class X & XII)",
      category: "Featured in Print Newspaper",
      year: "JNV & Oxford Public School",
      desc: "Achieved School Rank 2 distinction in Class X (96.4%) at Jawahar Navodaya Vidyalaya—honored with print newspaper coverage—and Class XII (91.2%) at Oxford Public School."
    },
    {
      title: "Cent Percentage Attendance Award",
      category: "₹2,500 Cash Prize Honor",
      year: "Academic Session",
      desc: "Awarded a ₹2,500 cash prize for flawless 100% attendance, demonstrating unwavering consistency, resilience, patience, and a commitment to show up every single day regardless of how challenging the situation is."
    },
    {
      title: "FIITJEE 100% Scholarship Awardee",
      category: "National Merit Honor",
      year: "Class 8 Level Exam",
      desc: "Awarded a prestigious 100% tuition scholarship by FIITJEE following top ranking performance in nationwide competitive science and mathematics talent examination."
    },
    {
      title: "JNV National Entrance Selection",
      category: "Top 0.1% Merit Rank",
      year: "Nationwide Selection Exam",
      desc: "Selected into Jawahar Navodaya Vidyalaya through nationwide competitive selection examination, securing merit rank among top 0.1% applicants across the country."
    }
  ];

  return (
    <section id="achievements" className="py-16 relative font-serif">
      <div className="w-full font-serif">
        
        {/* Section Header */}
        <div className="mb-8 font-serif">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Timeline List with Guaranteed 56px Gap */}
        <div className="timeline-container space-y-14 font-serif">
          {achievements.map((ach, idx) => (
            <div key={idx} className="relative space-y-3 font-serif">
              
              {/* Purple Diamond Node Centered Directly ON top of the Timeline Line */}
              <div className="absolute -left-[69px] top-1.5 w-6 h-6 rounded bg-gradient-to-tr from-purple-600 via-indigo-600 to-[#0084d4] text-white flex items-center justify-center shadow-md rotate-45 border border-purple-200">
                <span className="text-[10px] -rotate-45 font-bold text-white">✦</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#0f172a] uppercase tracking-wide">
                {ach.title}
              </h3>

              <div>
                <span className="bg-purple-100 text-purple-900 text-sm sm:text-base font-serif font-bold px-4 py-1 rounded-full border border-purple-200 inline-block">
                  {ach.category} • {ach.year}
                </span>
              </div>

              <p className="text-slate-800 text-lg sm:text-xl leading-relaxed font-serif">
                {ach.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
