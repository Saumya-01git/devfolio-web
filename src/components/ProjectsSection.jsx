import React, { useState } from 'react';
import { Briefcase, ExternalLink, Sparkles, X, ArrowUpRight } from 'lucide-react';

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
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-sky-500/10 via-pink-500/10 to-orange-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-500/20 text-pink-300 text-xs font-bold mb-3 tracking-wider uppercase">
              <Briefcase className="w-4 h-4 text-orange-400" />
              <span>SHOWCASE & PRODUCTS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Featured <span className="text-gradient-aurora">Projects</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-xl leading-relaxed">
              Systems architecture, custom headless applications, and high-performance user interfaces.
            </p>
          </div>

          <div className="flex items-center gap-2 p-1.5 rounded-xl glass-card border border-white/10 shadow-lg self-start sm:self-auto">
            <button
              onClick={() => setFilterFeatured(false)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-200 ${
                !filterFeatured
                  ? 'bg-gradient-to-r from-sky-400 to-pink-500 text-white shadow-md shadow-pink-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setFilterFeatured(true)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-200 ${
                filterFeatured
                  ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md shadow-orange-500/25'
                  : 'text-slate-400 hover:text-white'
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
              className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-pink-500/50 transition duration-300 flex flex-col justify-between group shadow-xl shadow-black/50 hover:-translate-y-1.5"
            >
              <div>
                {/* Project Visual */}
                <div
                  onClick={() => setActiveProject(project)}
                  className="w-full h-52 bg-slate-900/90 relative overflow-hidden cursor-pointer"
                >
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-[#0e1326] via-[#141b33] to-[#1a1329] flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-pink-500/20 text-pink-400 flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition shadow-lg shadow-pink-500/20">
                        ⚡
                      </div>
                      <span className="text-xs font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400 font-semibold">
                        Custom CMS Engine
                      </span>
                    </div>
                  )}

                  {project.isFeatured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-pink-500/30 to-orange-500/30 text-white border border-pink-500/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-sky-400 font-bold">
                    <span>/{project.slug}</span>
                  </div>

                  <h3
                    onClick={() => setActiveProject(project)}
                    className="font-bold text-white text-xl sm:text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-300 group-hover:to-pink-300 transition cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300/90 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-3 py-1 rounded-xl bg-slate-900/90 border border-white/10 text-pink-300 font-medium"
                        >
                          #{tag}
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
                  className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 group/btn"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
                </button>

                <div className="flex items-center gap-2.5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl glass-card hover:border-pink-500/40 text-slate-300 hover:text-white transition"
                      aria-label="GitHub repo"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-gradient-to-r from-sky-500/20 to-pink-500/20 border border-pink-500/30 text-white hover:border-pink-500/60 transition"
                      aria-label="Live demo"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 w-full max-w-2xl my-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl glass-card text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <span className="text-xs font-mono text-sky-400 font-bold">/{activeProject.slug}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{activeProject.title}</h3>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed whitespace-pre-line">
                {activeProject.content || activeProject.description}
              </p>

              {activeProject.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProject.tags.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900 border border-pink-500/20 text-pink-300 font-medium">
                      #{t}
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
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 via-pink-500 to-orange-400 hover:from-sky-300 hover:via-pink-400 hover:to-orange-300 text-white font-heading font-extrabold text-sm flex items-center gap-2 shadow-lg shadow-pink-500/30 transition"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl glass-card text-slate-200 hover:text-white font-heading font-bold text-sm flex items-center gap-2 border border-white/10 hover:border-pink-500/40 transition"
                  >
                    <GithubIcon className="w-4 h-4" />
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
