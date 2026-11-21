import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Articles', href: '#blogs' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'glass-panel py-3.5 shadow-2xl shadow-black/60 border-b border-white/10'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with Aurora Glow */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-pink-500 to-amber-400 p-[1.5px] shadow-lg shadow-pink-500/25 group-hover:shadow-sky-400/30 transition duration-300">
            <div className="w-full h-full bg-[#090c16] rounded-[10px] flex items-center justify-center">
              <Terminal className="w-5 h-5 text-transparent bg-clip-text bg-gradient-to-tr from-sky-400 to-pink-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl text-white tracking-tight leading-none group-hover:text-pink-300 transition">
              Saumya<span className="text-pink-500">.</span>dev
            </span>
            <span className="text-[11px] font-mono tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-pink-400 to-orange-400 font-bold mt-0.5">
              FULL-STACK ARCHITECT
            </span>
          </div>
        </a>

        {/* Desktop Nav with Soft Floating Frost */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl glass-card border border-white/10 shadow-lg shadow-black/20">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-4 py-2 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-sky-500/15 hover:via-pink-500/15 hover:to-orange-500/15 transition duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & CMS Badge */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="http://localhost:5000/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 transition shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>CMS Admin</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-sky-400 via-pink-500 to-orange-400 hover:from-sky-300 hover:via-pink-400 hover:to-orange-300 shadow-lg shadow-pink-500/25 hover:shadow-orange-500/30 transition duration-300 transform hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2.5 rounded-xl glass-card text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-6 space-y-3">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="http://localhost:5000/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-purple-500/10 text-purple-300 border border-purple-500/20"
            >
              Access Custom CMS Panel ↗
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-center rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-400 via-pink-500 to-orange-400"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
