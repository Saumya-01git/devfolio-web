import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ openContactModal, openResumeModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative border-t border-[#2D5D7B]/30 mt-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-[#2D5D7B]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-black/30">
          
          {/* Left Column */}
          <div className="text-center md:text-left">
            <span className="font-heading font-extrabold text-xl text-white tracking-wide block">
              {personalInfo.name}
            </span>
            <p className="text-xs text-slate-400 font-mono mt-0.5">B.Tech CSE (Cyber Security) @ VIT Chennai</p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <a href="#about" className="hover:text-[#C2AFF0] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#C2AFF0] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#C2AFF0] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#C2AFF0] transition-colors">Experience</a>
            <a href="#services" className="hover:text-[#C2AFF0] transition-colors">Services</a>
            <a href="#blogs" className="hover:text-[#C2AFF0] transition-colors">Articles</a>
            <a href="#contact" className="hover:text-[#C2AFF0] transition-colors">Contact</a>
          </div>

          {/* Right Column */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2.5 rounded-xl bg-[#2D5D7B]/40 hover:bg-[#457EAC]/50 text-slate-200 border border-[#457EAC]/30 shadow-md transition-all flex items-center gap-2 text-xs font-mono group"
            title="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C2AFF0] group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Bottom Copy Note */}
        <div className="text-center mt-6 text-xs text-slate-400 font-mono">
          <span>© {new Date().getFullYear()} {personalInfo.name} • Built with React, Tailwind & Core CMS Engine</span>
        </div>
      </div>
    </footer>
  );
}
