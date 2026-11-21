import React, { useState } from 'react';
import { ExternalLink, Info } from 'lucide-react';
import GithubIcon from './GithubIcon';
import { projectsData } from '../data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';

export default function ProjectsGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-6 relative font-serif">
      <div className="w-full font-serif bg-[#f8f5fc] p-8 sm:p-12 rounded-3xl border border-purple-100/80 shadow-sm">
        
        {/* Section Header */}
        <div className="mb-10 font-serif">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Projects List Rows with Middle Vertical Line Divider & Centered Purple Star Node */}
        <div className="space-y-16 font-serif">
          {projectsData.map((project) => (
            <div key={project.id} className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8 group font-serif">
              
              {/* Left Thumbnail Box */}
              <div 
                onClick={() => setSelectedProject(project)}
                className="w-full sm:w-72 h-44 rounded-2xl bg-gradient-to-br from-[#091120] to-[#040a14] border border-slate-300 shadow-md flex flex-col items-center justify-center p-4 text-center cursor-pointer hover:shadow-xl transition-all flex-shrink-0 relative overflow-hidden group/img"
              >
                <div className="text-4xl mb-2 group-hover/img:scale-110 transition-transform">{project.icon}</div>
                <span className="font-bold text-white text-base font-serif">{project.title}</span>
                <span className="text-xs text-purple-300 font-mono mt-1">{project.category}</span>
              </div>

              {/* Middle Vertical Divider Line with Centered Purple Star Node ✦ */}
              <div className="hidden sm:flex flex-col items-center justify-center relative flex-shrink-0">
                <div className="w-[2px] h-full bg-purple-400/60"></div>
                
                <div className="my-2 w-6 h-6 rounded bg-gradient-to-tr from-purple-600 via-indigo-600 to-[#0084d4] text-white flex items-center justify-center shadow-md rotate-45 border border-purple-200 flex-shrink-0">
                  <span className="text-[10px] -rotate-45 font-bold text-white">✦</span>
                </div>

                <div className="w-[2px] h-full bg-purple-400/60"></div>
              </div>

              {/* Right Project Content */}
              <div className="flex-1 space-y-3 font-serif py-1">
                
                {/* Project Title */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 
                    onClick={() => setSelectedProject(project)}
                    className="text-2xl sm:text-3xl font-bold font-serif text-purple-800 hover:text-purple-900 hover:underline cursor-pointer"
                  >
                    {project.title} - {project.tagline}
                  </h3>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Detailed Paragraph */}
                <p className="text-slate-800 text-lg sm:text-xl leading-relaxed font-serif">
                  {project.highlights.join(" ")} Built with <strong className="text-slate-950 font-bold">{project.techStack.join(", ")}</strong>.
                </p>

                {/* View Specs Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-base text-purple-700 font-bold hover:underline flex items-center gap-1.5 pt-1 font-serif"
                >
                  <Info className="w-4 h-4 inline" /> View System Architecture Specs & Links
                </button>

              </div>

            </div>
          ))}
        </div>

        {/* Modal Detail Viewer */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
