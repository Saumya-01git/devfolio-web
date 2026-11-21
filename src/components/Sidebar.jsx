import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Sidebar({ openContactModal, openResumeModal, sidebarCollapsed, setSidebarCollapsed }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', iconClass: 'bx bx-home', href: '#hero' },
    { id: 'about', label: 'About', iconClass: 'bx bx-user-circle', href: '#about' },
    { id: 'skills', label: 'Skills', iconClass: 'bx bx-brain', href: '#skills' },
    { id: 'education', label: 'Education', iconClass: 'bx bx-book', href: '#education' },
    { id: 'experience', label: 'Experience', iconClass: 'bx bx-briefcase-alt', href: '#experience' },
    { id: 'projects', label: 'Projects', iconClass: 'bx bx-briefcase', href: '#projects' },
    { id: 'leadership', label: 'Leadership', iconClass: 'bx bx-pencil', href: '#leadership' },
    { id: 'achievements', label: 'Achievements', iconClass: 'bx bx-star', href: '#achievements' },
    { id: 'certifications', label: 'Certifications', iconClass: 'bx bx-award', href: '#certifications' },
    { id: 'languages', label: 'Languages', iconClass: 'bx bx-world', href: '#languages' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="min-[900px]:hidden fixed top-0 left-0 right-0 z-50 bg-[#040b14] border-b border-white/10 px-5 py-4 flex items-center justify-between shadow-2xl">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')} 
          className="text-2xl font-bold text-white font-serif"
        >
          {personalInfo.name}
        </a>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg bg-[#192338] text-white hover:bg-purple-700 transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="min-[900px]:hidden fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* Fixed Left Sidebar strictly 275px wide */}
      <aside 
        className={`
          fixed top-0 bottom-0 left-0 z-40 w-[275px] bg-[#040b14] border-r border-white/10
          flex flex-col py-10 px-6 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-y-auto font-serif
          ${sidebarCollapsed ? '-translate-x-full' : (mobileOpen ? 'translate-x-0' : '-translate-x-full min-[900px]:translate-x-0')}
        `}
      >
        <div className="flex flex-col space-y-6">
          
          {/* Header Profile Title */}
          <div className="text-center pt-1 space-y-3">
            <h1 className="text-[28px] font-bold text-white tracking-wide font-serif">
              <a 
                href="#hero" 
                onClick={(e) => handleNavClick(e, '#hero')} 
                className="text-white hover:text-purple-400 transition-colors font-serif"
              >
                {personalInfo.name}
              </a>
            </h1>
            
            {/* Plain Icon Row */}
            <div className="flex items-center justify-center gap-5 text-white text-xl pt-1">
              <span className="text-purple-400 text-base">✦</span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-purple-400 transition-all transform hover:scale-110"
                title="GitHub"
              >
                <i className="bx bxl-github"></i>
              </a>
              <button 
                onClick={openContactModal}
                className="text-white hover:text-purple-400 transition-all transform hover:scale-110"
                title="Email"
              >
                <i className="bx bx-envelope"></i>
              </button>
              <button 
                onClick={openContactModal}
                className="text-white hover:text-purple-400 transition-all transform hover:scale-110"
                title="Phone"
              >
                <i className="bx bx-phone"></i>
              </button>
            </div>
          </div>

          <div className="h-px bg-white/10 my-3"></div>

          {/* Navigation Links */}
          <nav className="pt-2 font-serif">
            <ul className="space-y-[24px]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`
                        flex items-center gap-4 py-1 px-1 text-[20px] transition-all duration-200 font-serif
                        ${isActive 
                          ? 'text-white font-bold translate-x-1' 
                          : 'text-[#a8a9b4] hover:text-white hover:translate-x-1'
                        }
                      `}
                    >
                      <i className={`${item.iconClass} text-[24px] transition-colors ${isActive ? 'text-purple-400' : 'text-[#6f7180]'}`}></i>
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}

              {/* Download Resume Link */}
              <li className="pt-1">
                <button
                  onClick={() => { setMobileOpen(false); openResumeModal(); }}
                  className="w-full flex items-center gap-4 py-1 px-1 text-[20px] text-[#a8a9b4] hover:text-white hover:translate-x-1 transition-all text-left font-serif"
                >
                  <i className="bx bx-download text-[24px] text-[#6f7180]"></i>
                  <span>Download Resume</span>
                </button>
              </li>
            </ul>
          </nav>

        </div>
      </aside>
    </>
  );
}
