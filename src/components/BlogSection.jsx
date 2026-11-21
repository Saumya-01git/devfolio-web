import React, { useState } from 'react';
import { BookOpen, Calendar, Eye, ArrowRight, X } from 'lucide-react';

export default function BlogSection({ blogs = [] }) {
  const [activeArticle, setActiveArticle] = useState(null);

  if (!blogs || blogs.length === 0) return null;

  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-[#9191E9]/20 to-[#C2AFF0]/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2AFF0]/15 border border-[#C2AFF0]/30 text-[#C2AFF0] text-xs font-bold mb-3 tracking-wider uppercase">
            <BookOpen className="w-4 h-4 text-[#C2AFF0]" />
            <span>ARTICLES & RESEARCH</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-aurora">Insights</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-xl leading-relaxed">
            Research essays on privacy-preserving cloud search, cryptography, and LLM benchmarking.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map(blog => (
            <div
              key={blog.id}
              onClick={() => setActiveArticle(blog)}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#2D5D7B]/30 hover:border-[#9191E9]/60 transition duration-300 flex flex-col justify-between group cursor-pointer shadow-xl shadow-black/40 hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400">
                  <div className="flex items-center gap-1.5 text-[#C2AFF0] font-semibold">
                    <Calendar className="w-4 h-4 text-[#C2AFF0]" />
                    <span>{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : 'Recent'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#457EAC] font-bold">
                    <Eye className="w-4 h-4" />
                    <span>{blog.views || 0} reads</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#C2AFF0] transition leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300/90 leading-relaxed line-clamp-3">
                  {blog.excerpt || blog.content}
                </p>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {blog.tags.map((t, idx) => (
                      <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-[#172735]/80 border border-[#457EAC]/30 text-[#9191E9] font-semibold">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-bold text-[#C2AFF0] group-hover:text-[#9191E9]">
                <span className="font-heading font-extrabold">Read Full Essay</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#2D5D7B]/40 w-full max-w-2xl my-8 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl glass-card text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-400 font-mono">
                <span className="text-[#C2AFF0] font-semibold">{activeArticle.publishedAt ? new Date(activeArticle.publishedAt).toLocaleDateString() : 'Recent'}</span>
                <span>•</span>
                <span className="text-[#457EAC] font-semibold">{activeArticle.views || 0} total reads</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {activeArticle.title}
              </h3>
            </div>

            <div className="text-base sm:text-lg text-slate-200 leading-relaxed whitespace-pre-wrap font-sans space-y-4 pt-4 border-t border-white/10">
              {activeArticle.content}
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#457EAC] via-[#9191E9] to-[#C2AFF0] font-heading text-sm font-extrabold text-slate-950 transition shadow-lg shadow-[#9191E9]/25 hover:brightness-110"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
