import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ExternalLink } from 'lucide-react';

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
        ? 'glass-panel py-3.5 shadow-2xl shadow-black/50 border-b border-white/10'
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 group-hover:scale-105 transition">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-white tracking-tight leading-none group-hover:text-indigo-400 transition">
              Saumya<span className="text-indigo-500">.</span>dev
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">FULL-STACK ENGINEER</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl glass-card border border-white/5">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="px-4 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="http://localhost:5000/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition"
          >
            <span>CMS Admin</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-lg shadow-indigo-600/25 transition"
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
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
            >
              Access Custom CMS Panel ↗
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="py-2.5 text-center rounded-xl text-xs font-bold bg-indigo-600 text-white"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

