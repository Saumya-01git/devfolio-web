import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, FileText, Menu, X, Shield, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ResumeModal from './ResumeModal';

export default function Navbar({ darkMode: propDarkMode, setDarkMode: propSetDarkMode, openContactModal, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (propSetDarkMode) propSetDarkMode(next);
  };

  const handleResumeClick = () => {
    if (openResumeModal) {
      openResumeModal();
    } else {
      setResumeOpen(true);
    }
  };

  const handleConnectClick = () => {
    if (openContactModal) {
      openContactModal();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Articles', href: '#blogs' },
    { name: 'Contact', href: '#contact' },
  ];

  const currentDark = propDarkMode !== undefined ? propDarkMode : isDark;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="glass-panel px-6 py-3.5 flex items-center justify-between border-white/10 shadow-2xl rounded-2xl">
            {/* Logo Brand */}
            <a href="#" className="flex items-center gap-3 group text-decoration-none">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 via-cyan-400 to-rose-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950/80 rounded-[10px] backdrop-blur-md flex items-center justify-center">
                  <Code className="w-5 h-5 text-teal-400 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-white">
                  {personalInfo.name}<span className="text-rose-400">.</span>dev
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-teal-400 font-semibold tracking-wider uppercase">
                  <Shield className="w-3 h-3 text-cyan-400 inline" /> SDE & Cyber Sec
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md p-1.5 rounded-2xl border border-white/10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all duration-200 cursor-pointer"
                title={currentDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {currentDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-teal-400" />}
              </button>

              {/* Resume Button */}
              <button
                type="button"
                onClick={handleResumeClick}
                className="py-2.5 px-4 rounded-xl glass-card hover:border-teal-400/50 text-slate-200 hover:text-white text-xs font-bold flex items-center gap-2 border border-white/10 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <FileText className="w-4 h-4 text-teal-400" />
                <span>Resume</span>
              </button>

              {/* Hire Me / Contact Button */}
              <button
                type="button"
                onClick={handleConnectClick}
                className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-rose-400 hover:from-teal-300 hover:via-cyan-300 hover:to-rose-300 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-teal-500/20 transition-all cursor-pointer hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 cursor-pointer"
              >
                {currentDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-teal-400" />}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 glass-panel p-4 flex flex-col gap-2 border-white/10 rounded-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => { setMobileMenuOpen(false); handleResumeClick(); }}
                  className="py-2.5 px-4 rounded-xl glass-card text-xs font-bold text-center text-slate-200 flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-teal-400" />
                  <span>View Resume</span>
                </button>
                <button
                  type="button"
                  onClick={() => { setMobileMenuOpen(false); handleConnectClick(); }}
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-rose-400 text-slate-950 text-xs font-bold text-center flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Let's Connect</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Self-contained Interactive Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
