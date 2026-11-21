import React from 'react';
import { X, Printer, Download } from 'lucide-react';
import { personalInfo, experienceData, projectsData, educationData, achievementsData, spokenLanguages } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const possiblePaths = [
      "/SAUMYA_Resume (3).pdf",
      "/Saumya_Resume.pdf",
      "/SAUMYA_Resume.pdf"
    ];

    for (const pdfPath of possiblePaths) {
      try {
        const response = await fetch(pdfPath, { method: "HEAD" });
        if (response.ok) {
          const link = document.createElement("a");
          link.href = pdfPath;
          link.setAttribute("download", "Saumya_Resume.pdf");
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          return;
        }
      } catch (e) {
        console.warn("Path check failed:", pdfPath, e);
      }
    }

    // Fallback: Opens browser native Save as PDF window
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 font-serif"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl relative max-w-4xl w-full max-h-[90vh] overflow-y-auto font-serif"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-3 font-serif">
          <div>
            <span className="text-sm font-bold font-serif px-3.5 py-1.5 bg-purple-100 text-purple-900 rounded-full border border-purple-300/60">
              Curriculum Vitae / Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={handleDownloadPDF}
              className="px-4.5 py-2.5 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-purple-900/20 font-serif cursor-pointer transition-all hover:scale-[1.02]"
              title="Download PDF directly to your computer"
            >
              <Download className="w-4 h-4 text-white" />
              Download PDF
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center gap-2 shadow-sm font-serif cursor-pointer transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4 text-white" />
              Print / Save PDF
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Clean Printable Resume Container */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 text-slate-800 font-serif text-sm leading-relaxed space-y-6">
          
          {/* Header */}
          <div className="text-center border-b border-slate-300 pb-4">
            <h1 className="text-3xl font-bold font-serif text-slate-950 tracking-wide uppercase">{personalInfo.name}</h1>
            <p className="text-purple-800 font-serif font-bold text-sm mt-1">
              {personalInfo.phone} | {personalInfo.email} | GitHub: Saumya-01git
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold font-serif text-purple-800 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-3 font-serif">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-950 text-base font-serif">{edu.institution}</h3>
                    <p className="italic text-slate-700 text-sm font-serif">{edu.degree}</p>
                    {edu.courses && (
                      <p className="text-xs text-slate-600 font-serif mt-0.5">
                        <strong>{edu.coursesLabel || "Subjects"}:</strong> {edu.courses.join(', ')}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-serif text-slate-600 text-xs">{edu.period}</span>
                    <span className="block font-bold text-purple-800 font-serif">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold font-serif text-purple-800 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-2 text-sm text-slate-800 font-serif">
              <p><strong className="text-slate-950 font-bold">Programming Languages:</strong> Python, Java, C++, C, JavaScript (ES6+), SQL</p>
              <p><strong className="text-slate-950 font-bold">Frameworks & Frontend:</strong> React.js, HTML5, CSS3, Tailwind CSS, Recharts, Responsive Design</p>
              <p><strong className="text-slate-950 font-bold">Backend & Cloud:</strong> Node.js, Express.js, REST APIs, JWT Auth, Prisma ORM, Multer, Helmet, Swagger, Vercel, Render</p>
              <p><strong className="text-slate-950 font-bold">Databases:</strong> PostgreSQL (AWS Neon Cloud), MongoDB, SQLite</p>
              <p><strong className="text-slate-950 font-bold">AI/ML & AI Tools:</strong> YOLOv8, OpenCV, OpenAI Whisper, Scikit-learn, TF-IDF, NLP, GitHub Copilot, Gemini</p>
              <p><strong className="text-slate-950 font-bold">Developer Tools & Security:</strong> Git, GitHub, Postman, Wireshark, Burp Suite, Packet Tracer, VS Code</p>
            </div>
          </div>

          {/* Languages (Spoken & Written) */}
          <div>
            <h2 className="text-sm font-bold font-serif text-purple-800 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">
              LANGUAGES (SPOKEN & WRITTEN)
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-800 pl-2 font-serif">
              {spokenLanguages.map((lang, lIdx) => (
                <li key={lIdx}>
                  <strong className="text-slate-950 font-bold">{lang.language}:</strong> {lang.level} – <span className="italic text-slate-600">{lang.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold font-serif text-purple-800 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">
              EXPERIENCE
            </h2>
            <div className="space-y-4 font-serif">
              {experienceData.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-950 text-base font-serif">{exp.role} <span className="font-normal italic text-slate-600">| {exp.company}</span></h3>
                    <span className="font-serif text-slate-600 text-xs">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-800 mt-1 pl-2 font-serif">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-bold font-serif text-purple-800 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">
              PROJECTS
            </h2>
            <div className="space-y-4 font-serif">
              {projectsData.map((proj) => (
                <div key={proj.id}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-slate-950 text-base font-serif">
                      {proj.title} – {proj.tagline} <span className="font-normal italic text-slate-600 text-xs">| {proj.techStack.join(', ')}</span>
                    </h3>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-800 mt-1 pl-2 font-serif">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Leadership */}
          <div>
            <h2 className="text-sm font-bold font-serif text-purple-800 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3">
              CERTIFICATIONS & LEADERSHIP ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside space-y-1.5 text-slate-800 pl-2 font-serif">
              {achievementsData.map((ach, idx) => (
                <li key={idx}>
                  <strong className="text-slate-950 font-bold">{ach.title}</strong> – {ach.organization} ({ach.grade}): {ach.desc}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
