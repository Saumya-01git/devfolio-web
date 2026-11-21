import React from 'react';
import { ArrowRight, Terminal, Sparkles, Code2, Layers, Cpu, Zap } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Hero({ about }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Teal & Slate Ambient Lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-teal-500/16 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[320px] bg-slate-600/18 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/3 w-[500px] h-[350px] bg-sky-600/15 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-7">
          
          {/* Status Badge with Teal-Cyan Outline */}
          <div className="inline-flex items-center gap-2.5 p-[1px] rounded-full bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 shadow-xl shadow-teal-950/40">
            <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#0d131f]/90 backdrop-blur-xl text-sm font-medium text-slate-200">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-400"></span>
              </span>
              <span className="text-slate-200 font-medium">B.Tech CSE (Cyber Security) @ VIT Chennai</span>
              <span className="text-slate-600">|</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300 font-mono text-xs font-bold">
                Custom CMS Driven
              </span>
            </div>
          </div>

          {/* Main Headline with Vivid Teal-Cyan Gradient and Display Font */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.08]">
            Engineering <span className="text-gradient-aurora">secure systems</span> and scalable web architectures.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-normal leading-relaxed">
            {about?.subtitle || 'Full-Stack Software Engineer with specialized focus on Cyber Security, Cryptography, and high-performance Web APIs.'}
          </p>

          {/* CTA Buttons with Teal Glows */}
          <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
            <a
              href="#projects"
              className="px-9 py-4 rounded-2xl bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-500 hover:from-teal-300 hover:via-cyan-300 hover:to-sky-400 text-slate-950 font-extrabold text-base shadow-xl shadow-teal-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 transition duration-200 flex items-center gap-2.5 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition" />
            </a>

            <a
              href={about?.githubUrl || "https://github.com/Saumya-01git"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-2xl glass-card hover:bg-white/10 text-slate-100 font-bold text-base border border-white/15 hover:border-teal-400/40 transition duration-200 flex items-center gap-3"
            >
              <GithubIcon className="w-5 h-5 text-slate-200" />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              className="px-7 py-4 rounded-2xl glass-card hover:bg-white/10 text-slate-100 font-bold text-base border border-white/15 hover:border-cyan-400/40 transition duration-200 flex items-center gap-2.5"
            >
              <Sparkles className="w-5 h-5 text-teal-400" />
              <span>Contact Saumya</span>
            </a>
          </div>

          {/* Unique 4-Color Architectural Highlight Pillars */}
          <div className="pt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl w-full text-left">
            {/* Card 1: Light Blue / Cyan */}
            <div className="p-5 rounded-2xl glass-card border border-sky-500/20 hover:border-sky-400/50 transition duration-300 flex items-center gap-3.5 group shadow-lg shadow-black/20">
              <div className="w-11 h-11 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition shadow-sm shadow-sky-500/30">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-sky-400 font-bold uppercase tracking-wider">Architecture</p>
                <p className="text-base font-bold text-white">Custom Headless CMS</p>
              </div>
            </div>

            {/* Card 2: Hot Pink */}
            <div className="p-5 rounded-2xl glass-card border border-pink-500/20 hover:border-pink-400/50 transition duration-300 flex items-center gap-3.5 group shadow-lg shadow-black/20">
              <div className="w-11 h-11 rounded-xl bg-pink-500/15 text-pink-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition shadow-sm shadow-pink-500/30">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-pink-400 font-bold uppercase tracking-wider">Modern Stack</p>
                <p className="text-base font-bold text-white">React + Vite + Tailwind</p>
              </div>
            </div>

            {/* Card 3: Warm Orange */}
            <div className="p-5 rounded-2xl glass-card border border-orange-500/20 hover:border-orange-400/50 transition duration-300 flex items-center gap-3.5 group shadow-lg shadow-black/20">
              <div className="w-11 h-11 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition shadow-sm shadow-orange-500/30">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-orange-400 font-bold uppercase tracking-wider">Performance</p>
                <p className="text-base font-bold text-white">Sub-30ms Engine</p>
              </div>
            </div>

            {/* Card 4: Royal Purple */}
            <div className="p-5 rounded-2xl glass-card border border-purple-500/20 hover:border-purple-400/50 transition duration-300 flex items-center gap-3.5 group shadow-lg shadow-black/20">
              <div className="w-11 h-11 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition shadow-sm shadow-purple-500/30">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-purple-400 font-bold uppercase tracking-wider">Database</p>
                <p className="text-base font-bold text-white">PostgreSQL & Prisma</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
