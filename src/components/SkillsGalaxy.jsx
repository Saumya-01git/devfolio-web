import React from 'react';

export default function SkillsGalaxy() {
  const skillSections = [
    {
      title: "Languages & Frameworks",
      items: [
        ["Python", "Java", "C++"],
        ["JavaScript (ES6+)", "React.js", "HTML5 & CSS3"],
        ["Tailwind CSS", "Node.js", "Express.js"]
      ]
    },
    {
      title: "Core Domains & Security",
      items: [
        ["Full Stack Development", "Cyber Security", "REST API Architecture"],
        ["Data Structures", "Algorithms", "Object-Oriented Programming"],
        ["JWT & RBAC Auth", "Database Management", "AI-Native Workflows"]
      ]
    },
    {
      title: "Databases, Cloud & Dev Tools",
      items: [
        ["PostgreSQL (AWS Neon)", "MongoDB", "SQLite"],
        ["Git & GitHub", "Vercel & Render", "Prisma ORM"],
        ["Postman", "Wireshark & Burp Suite", "Cisco Packet Tracer"]
      ]
    },
    {
      title: "AI / ML & Data Science",
      items: [
        ["YOLOv8 & OpenCV (30+ FPS)", "OpenAI Whisper", "Scikit-Learn"],
        ["TF-IDF & NLP", "Support Vector Machines", "Random Forest"],
        ["Pandas & NumPy", "GitHub Copilot", "Google Gemini"]
      ]
    }
  ];

  return (
    <section id="skills" className="py-6 relative font-serif">
      <div className="w-full font-serif bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
        
        {/* Section Header */}
        <div className="mb-8 font-serif">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Multi-Column Bulleted Lists in Large Times New Roman */}
        <div className="space-y-12 font-serif">
          {skillSections.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-950 border-b border-purple-300 pb-2">
                {sec.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 gap-x-10 text-lg sm:text-xl text-slate-800 font-serif">
                {sec.items.map((col, cIdx) => (
                  <ul key={cIdx} className="space-y-2.5 list-disc list-inside">
                    {col.map((item, iIdx) => (
                      <li key={iIdx} className="marker:text-purple-700">
                        <span className="text-slate-900 font-medium font-serif">{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
