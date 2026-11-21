import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.subtitles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 75);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="pt-24 sm:pt-28 pb-10 flex flex-col justify-center items-start text-left relative w-full font-serif">
      <div className="w-full space-y-6 font-serif bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/80 shadow-sm">
        
        {/* Status Pill */}
        <div>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-800 text-sm font-serif">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available for SDE Internships & Roles</span>
          </div>
        </div>

        {/* Big Name Title */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-[#0f172a] tracking-tight leading-tight font-serif pt-2">
          {personalInfo.name}
        </h1>

        {/* Typing Subtitle */}
        <div className="min-h-12 flex items-center">
          <p className="text-3xl sm:text-4xl text-slate-900 font-bold font-serif">
            I'm a <span className="text-purple-700 underline decoration-purple-400/40 underline-offset-8 font-serif">{displayText}</span>
            <span className="w-3 h-8 bg-purple-700 inline-block ml-1 animate-pulse align-middle"></span>
          </p>
        </div>

        {/* Subtitle Paragraph */}
        <p className="text-slate-700 text-xl sm:text-2xl max-w-4xl leading-relaxed font-serif pt-2">
          Pursuing B.Tech Computer Science & Engineering (<strong className="text-slate-950 font-bold">Cyber Security</strong>) at <span className="text-purple-800 font-bold">Vellore Institute of Technology (VIT), Chennai</span> [CGPA 8.97]. Engineering production-grade full-stack web applications, AI models, and secure REST APIs.
        </p>

      </div>
    </section>
  );
}
