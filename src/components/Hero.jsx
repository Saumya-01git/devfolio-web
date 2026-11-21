import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowRight, Sparkles, Terminal, Shield } from 'lucide-react';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Hero({ about }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.subtitles || [
    "Full-Stack Software Engineer",
    "Cyber Security Researcher",
    "Cryptographic Systems Architect",
    "Open Source Contributor"
  ];

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
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* 5-Color Palette Ambient Glow Mesh */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-[#457EAC]/25 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-[#9191E9]/22 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[320px] bg-[#C2AFF0]/18 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[350px] bg-[#2D5D7B]/30 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-7">
          
          {/* Status Badge in Soft Periwinkle & Mauve Outline */}
          <div className="inline-flex items-center gap-2.5 p-[1px] rounded-full bg-gradient-to-r from-[#9191E9] via-[#C2AFF0] to-[#457EAC] shadow-xl shadow-[#2D5D7B]/40">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#172735]/90 backdrop-blur-xl text-sm font-medium text-slate-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C2AFF0] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#C2AFF0]"></span>
              </span>
              <span className="text-slate-200 font-medium">B.Tech CSE (Cyber Security) @ VIT Chennai</span>
              <span className="text-slate-500">|</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2AFF0] to-[#9191E9] font-mono text-xs font-bold">
                Available for Roles
              </span>
            </div>
          </div>

          {/* Main Title & Typing Subtitle */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08]">
            Hi, I'm <span className="text-gradient-aurora">{personalInfo.name}</span>
          </h1>

          <div className="min-h-12 flex items-center justify-center">
            <p className="text-2xl sm:text-4xl text-slate-200 font-bold tracking-tight">
              I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C2AFF0] via-[#9191E9] to-[#457EAC]">{displayText}</span>
              <span className="w-2.5 h-7 sm:h-9 bg-[#C2AFF0] inline-block ml-1 animate-pulse align-middle"></span>
            </p>
          </div>

          {/* Subtitle Bio - Clean, No CGPA, Professional */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl font-normal leading-relaxed">
            Pursuing Computer Science & Engineering (<strong className="text-white font-semibold">Cyber Security</strong>) at <span className="text-[#C2AFF0] font-semibold">Vellore Institute of Technology (VIT), Chennai</span>. Engineering resilient full-stack web architectures, cryptographic protocols, and reactive client interfaces.
          </p>

          {/* CTA Buttons in Palette Colors */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
            <a
              href="#projects"
              className="px-9 py-4 rounded-2xl bg-gradient-to-r from-[#9191E9] via-[#8585E6] to-[#457EAC] hover:from-[#9d9df0] hover:to-[#5590c2] text-white font-extrabold text-base shadow-xl shadow-[#9191E9]/25 hover:shadow-[#C2AFF0]/35 hover:-translate-y-0.5 transition duration-200 flex items-center gap-2.5 group cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition" />
            </a>

            <a
              href={personalInfo.github || "https://github.com/Saumya-01git"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-2xl glass-card hover:bg-white/10 text-slate-100 font-bold text-base border border-[#C2AFF0]/25 hover:border-[#9191E9]/50 transition duration-200 flex items-center gap-3 cursor-pointer"
            >
              <GithubIcon className="w-5 h-5 text-slate-200" />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-2xl glass-card hover:bg-white/10 text-slate-100 font-bold text-base border border-[#9191E9]/25 hover:border-[#C2AFF0]/50 transition duration-200 flex items-center gap-2.5 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-[#C2AFF0]" />
              <span>Let's Talk</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
