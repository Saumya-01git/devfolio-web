import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ openContactModal, openResumeModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative border-t border-slate-200 mt-20 font-sans">
      <div className="w-full">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Column */}
          <div>
            <span className="font-heading font-extrabold text-lg text-slate-900">
              {personalInfo.name}
            </span>
            <p className="text-xs text-slate-500 font-mono">B.Tech CSE (Cyber Security) @ VIT Chennai</p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
            <a href="#about" className="hover:text-[#0084d4] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#0084d4] transition-colors">Skills</a>
            <a href="#education" className="hover:text-[#0084d4] transition-colors">Education</a>
            <a href="#experience" className="hover:text-[#0084d4] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#0084d4] transition-colors">Projects</a>
            <button onClick={openResumeModal} className="hover:text-[#0084d4] transition-colors">Resume PDF</button>
            <button onClick={openContactModal} className="hover:text-[#0084d4] transition-colors">Contact</button>
          </div>

          {/* Right Column */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm transition-all flex items-center gap-2 text-xs font-mono"
            title="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0084d4]" />
          </button>

        </div>

        {/* Bottom Copy Note */}
        <div className="text-center mt-6 text-xs text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} {personalInfo.name} • VIT Chennai</span>
        </div>
      </div>
    </footer>
  );
}
