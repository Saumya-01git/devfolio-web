import React from 'react';
import { X, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import GithubIcon from './GithubIcon';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 font-serif"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative text-slate-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto font-serif"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-2">
          <span className="text-4xl">{project.icon}</span>
          <div>
            <span className="text-xs font-bold font-serif px-3 py-1 bg-[#e0f2fe] text-[#0284c7] rounded-full">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold font-serif text-slate-950 mt-1">{project.title}</h3>
          </div>
        </div>

        <p className="text-base font-serif text-[#0084d4] font-bold mb-6">{project.tagline}</p>

        {/* Action Links */}
        <div className="flex flex-wrap gap-3 mb-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold text-xs flex items-center gap-2 transition-colors font-serif"
          >
            <GithubIcon className="w-4 h-4" />
            View Source Code
          </a>

          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#0084d4] hover:bg-[#0284c7] text-white font-bold text-xs flex items-center gap-2 transition-colors font-serif shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Live Web Demo
            </a>
          )}
        </div>

        {/* Highlights List */}
        <div className="space-y-3 mb-6 font-serif">
          <h4 className="text-sm font-bold font-serif text-slate-950 uppercase tracking-wider">Key Architectural Features</h4>
          <ul className="space-y-2">
            {project.highlights.map((h, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-base text-slate-800 font-serif">
                <CheckCircle2 className="w-4 h-4 text-[#0084d4] flex-shrink-0 mt-1" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Breakdown */}
        {project.architecture && (
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 mb-6 space-y-3 font-serif text-sm">
            <div className="flex items-center gap-2 text-[#0084d4] font-bold text-base border-b border-slate-200 pb-2">
              <Layers className="w-4 h-4" /> System Specs & Stack Breakdown
            </div>
            
            {project.architecture.frontend && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <span className="text-slate-950 font-bold">FRONTEND / UI:</span>
                <span className="sm:col-span-2 text-slate-800">{project.architecture.frontend}</span>
              </div>
            )}
            {project.architecture.backend && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <span className="text-slate-950 font-bold">BACKEND / API:</span>
                <span className="sm:col-span-2 text-slate-800">{project.architecture.backend}</span>
              </div>
            )}
            {project.architecture.database && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <span className="text-slate-950 font-bold">DATABASE / CLOUD:</span>
                <span className="sm:col-span-2 text-slate-800">{project.architecture.database}</span>
              </div>
            )}
            {project.architecture.core && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1">
                <span className="text-slate-950 font-bold">AI MODEL CORE:</span>
                <span className="sm:col-span-2 text-slate-800">{project.architecture.core}</span>
              </div>
            )}
          </div>
        )}

        {/* Tech Stack Pills */}
        <div>
          <h4 className="text-sm font-bold font-serif text-slate-950 uppercase tracking-wider mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="text-xs font-bold font-serif py-1 px-3 bg-slate-100 border border-slate-200 text-slate-900 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
