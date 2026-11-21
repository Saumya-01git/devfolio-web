import React, { useState } from 'react';
import { Briefcase, ExternalLink, Sparkles, X } from 'lucide-react';

const GithubIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectsSection({ projects = [] }) {
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const displayedProjects = filterFeatured
    ? projects.filter(p => p.isFeatured)
    : projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>PORTFOLIO WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Systems architecture, custom headless applications, and high-performance user interfaces.
            </p>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-xl glass-card border border-white/5 self-start sm:self-auto">
            <button
              onClick={() => setFilterFeatured(false)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                !filterFeatured ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilterFeatured(true)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                filterFeatured ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Featured Only
            </button>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map(project => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 hover:-translate-y-1"
            >
              <div>
                {/* Project Visual */}
                <div
                  onClick={() => setActiveProject(project)}
                  className="w-full h-52 bg-slate-900/80 relative overflow-hidden cursor-pointer"
                >
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-indigo-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition">
                        ⚡
                      </div>
                      <span className="text-xs font-mono text-slate-500">custom headless engine</span>
                    </div>
                  )}

                  {project.isFeatured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between text-xs text-indigo-400 font-mono">
                    <span>/{project.slug}</span>
                  </div>

                  <h3
                    onClick={() => setActiveProject(project)}
                    className="font-bold text-white text-xl group-hover:text-indigo-400 transition cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-white/5 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="p-6 sm:p-7 pt-0 border-t border-white/5 flex items-center justify-between text-xs">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-slate-300 hover:text-white font-semibold underline underline-offset-4 decoration-indigo-500/50 hover:decoration-indigo-500 transition"
                >
                  Read Architecture Details →
                </button>

                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl glass-card hover:border-white/20 text-slate-300 hover:text-white transition"
                      aria-label="GitHub link"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600/40 transition"
                      aria-label="Live Demo link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 w-full max-w-2xl my-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl glass-card text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <span className="text-xs font-mono text-indigo-400">/{activeProject.slug}</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">{activeProject.title}</h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                {activeProject.content || activeProject.description}
              </p>

              {activeProject.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProject.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-900 border border-white/10 text-indigo-300">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                {activeProject.demoUrl && (
                  <a
                    href={activeProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl glass-card text-slate-200 hover:text-white font-semibold text-xs flex items-center gap-2 border border-white/10 transition"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

