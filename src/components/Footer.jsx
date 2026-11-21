import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 relative overflow-hidden bg-gradient-to-b from-transparent to-[#030408]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-400 via-pink-500 to-orange-400 p-[1px] shadow-md">
              <div className="w-full h-full bg-[#080b15] rounded-[11px] flex items-center justify-center text-pink-400">
                <Terminal className="w-4 h-4" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-white text-base">Saumya<span className="text-pink-500">.</span>dev</span>
              <p className="text-xs text-slate-500">Crafted with custom headless CMS architecture</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#blogs" className="hover:text-white transition">Articles</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="http://localhost:5000/admin" target="_blank" rel="noopener noreferrer" className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 font-bold">CMS Admin ↗</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500">
            <span>&copy; {currentYear} Saumya. All rights reserved.</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
