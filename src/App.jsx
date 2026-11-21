import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { portfolioApi } from './lib/api';

export default function App() {
  const [about, setAbout] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      portfolioApi.getAbout(),
      portfolioApi.getSkills(),
      portfolioApi.getProjects(),
      portfolioApi.getExperience(),
      portfolioApi.getBlogs(),
      portfolioApi.getTestimonials(),
      portfolioApi.getServices()
    ])
      .then(([aboutData, skillsData, projectsData, expData, blogsData, testData, servData]) => {
        if (aboutData) setAbout(aboutData);
        if (skillsData) setSkills(skillsData);
        if (projectsData) setProjects(projectsData);
        if (expData) setExperience(expData);
        if (blogsData) setBlogs(blogsData);
        if (testData) setTestimonials(testData);
        if (servData) setServices(servData);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen aurora-bg text-slate-100 flex flex-col justify-between selection:bg-pink-500 selection:text-white relative">
      <Navbar />
      <main className="flex-1">
        <Hero about={about} />
        <AboutSection about={about} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experience={experience} />
        <ServicesSection services={services} />
        <BlogSection blogs={blogs} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection about={about} />
      </main>
      <Footer />
    </div>
  );
}
