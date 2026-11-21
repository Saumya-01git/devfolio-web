import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsGalaxy from './components/SkillsGalaxy';
import EducationHonors from './components/EducationHonors';
import ExperienceTimeline from './components/ExperienceTimeline';
import ProjectsGrid from './components/ProjectsGrid';
import LeadershipSection from './components/LeadershipSection';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import LanguagesSection from './components/LanguagesSection';
import ContactDrawer from './components/ContactDrawer';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f4f9] text-slate-800 font-serif relative scroll-smooth selection:bg-purple-600 selection:text-white">
      
      {/* Frameless Dark Purple Sidebar Toggle Icon */}
      <button
        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
        className={`
          hidden min-[900px]:flex fixed top-6 z-50 items-center justify-center p-2 rounded-lg
          text-purple-700 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer
          ${sidebarCollapsed ? 'left-6' : 'left-[285px]'}
        `}
        title={sidebarCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        {sidebarCollapsed ? (
          <Menu className="w-7 h-7 text-purple-700" />
        ) : (
          <X className="w-7 h-7 text-purple-700" />
        )}
      </button>

      {/* Fixed Left Sidebar Navigation */}
      <Sidebar
        openContactModal={() => setContactOpen(true)}
        openResumeModal={() => setResumeOpen(true)}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      {/* Main Content Wrapper */}
      <div className={`
        min-h-screen justify-between overflow-x-hidden transition-all duration-300
        ${sidebarCollapsed ? 'sidebar-collapsed-offset' : 'sidebar-desktop-offset'}
      `}>
        
        {/* Main Content Container */}
        <main className={`
          py-8 max-w-5xl w-full space-y-16 sm:space-y-24 transition-all duration-300
          ${sidebarCollapsed ? 'mx-auto px-6 sm:px-16' : ''}
        `}>
          
          <Hero />

          <AboutSection />

          <SkillsGalaxy />

          <EducationHonors />

          <ExperienceTimeline />

          <ProjectsGrid />

          <LeadershipSection />

          <AchievementsSection />

          <CertificationsSection />

          <LanguagesSection />

        </main>

        {/* Footer */}
        <Footer
          openContactModal={() => setContactOpen(true)}
          openResumeModal={() => setResumeOpen(true)}
        />

      </div>

      {/* Scroll to Top Floating Dark Purple Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-purple-700 hover:bg-purple-800 text-white flex items-center justify-center shadow-lg transition-all transform hover:scale-110 cursor-pointer"
          title="Scroll to Top"
        >
          <i className="bx bx-chevron-up text-2xl"></i>
        </button>
      )}

      {/* Modals */}
      <ContactDrawer
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

    </div>
  );
}
