import React, { useState, useEffect } from 'react';
import { Sparkles, Sun, Moon, FileText, Send, Menu, X, Shield, Terminal, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, openContactModal, openResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'py-3' : 'py-5'
    }`}>
      <div className="container">
        <nav className="glass-panel px-6 py-3.5 flex items-center justify-between border-white/10 shadow-2xl">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950/80 rounded-[10px] backdrop-blur-md flex items-center justify-center">
                <Code className="w-5 h-5 text-purple-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-heading font-extrabold text-xl tracking-tight gradient-text">
                {personalInfo.name}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono text-purple-400 font-semibold tracking-wider uppercase">
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
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all duration-200"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={openResumeModal}
              className="btn-glass-secondary py-2 px-4 text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              Resume
            </button>

            {/* Hire Me / Contact Button */}
            <button
              onClick={openContactModal}
              className="btn-glass-primary py-2 px-4 text-xs font-semibold shadow-lg shadow-purple-500/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Let's Connect
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glass-panel p-4 flex flex-col gap-2 border-white/10 animate-fadeIn">
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
                onClick={() => { setMobileMenuOpen(false); openResumeModal(); }}
                className="btn-glass-secondary justify-center py-2.5 text-sm"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                View Resume PDF
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); openContactModal(); }}
                className="btn-glass-primary justify-center py-2.5 text-sm"
              >
                <Sparkles className="w-4 h-4" />
                Let's Connect
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
