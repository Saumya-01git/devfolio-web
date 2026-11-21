import React from 'react';
import { ArrowRight, Terminal, Sparkles, Code2, Layers } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Hero({ about }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient Lighting & Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-violet-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-white/10 text-xs font-medium text-slate-300 shadow-xl shadow-indigo-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400">Available for innovative projects & roles</span>
            <span className="text-slate-600">|</span>
            <span className="text-indigo-400 font-mono text-[11px] font-semibold">Custom CMS Powered</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-200">resilient systems</span> and bespoke web experiences.
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
            {about?.subtitle || 'Full-Stack Engineer specialized in custom headless architectures, microservices, and interactive frontend interfaces.'}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition duration-200 flex items-center gap-2 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </a>

            <a
              href={about?.githubUrl || "https://github.com/Saumya-01git"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl glass-card hover:bg-white/10 text-slate-200 font-semibold text-sm border border-white/10 hover:border-white/20 transition duration-200 flex items-center gap-2.5"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-2xl glass-card hover:bg-white/10 text-slate-200 font-semibold text-sm border border-white/10 hover:border-white/20 transition duration-200 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Architecture Highlights Pill Row */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl w-full text-left">
            <div className="p-4 rounded-2xl glass-card border border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Architecture</p>
                <p className="text-sm font-bold text-white">Headless CMS</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl glass-card border border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center flex-shrink-0">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Stack</p>
                <p className="text-sm font-bold text-white">React + Node + DB</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl glass-card border border-white/5 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Performance</p>
                <p className="text-sm font-bold text-white">Sub-30ms APIs</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

