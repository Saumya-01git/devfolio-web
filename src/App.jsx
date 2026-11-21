import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import { portfolioApi } from './lib/api';

export default function App() {
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      portfolioApi.getAbout(),
      portfolioApi.getSkills(),
      portfolioApi.getProjects()
    ])
      .then(([aboutData, skillsData, projectsData]) => {
        if (aboutData) setAbout(aboutData);
        if (skillsData) setSkills(skillsData);
        if (projectsData) setProjects(projectsData);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero about={about} />
        <AboutSection about={about} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
      </main>
      <Footer />
    </div>
  );
}
