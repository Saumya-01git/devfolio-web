import React, { useState } from 'react';
import { BookOpen, Calendar, Eye, ArrowRight, X, Sparkles } from 'lucide-react';

export default function BlogSection({ blogs = [] }) {
  const [activeArticle, setActiveArticle] = useState(null);

  if (!blogs || blogs.length === 0) return null;

  return (
    <section id="blogs" className="py-24 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-500/12 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-pink-400" />
            <span>ARTICLES & ESSAYS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-aurora">Insights</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Essays on custom headless CMS design, distributed software architectures, and developer tooling.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map(blog => (
            <div
              key={blog.id}
              onClick={() => setActiveArticle(blog)}
              className="glass-panel p-7 sm:p-9 rounded-3xl border border-white/10 hover:border-purple-400/50 transition duration-300 flex flex-col justify-between group cursor-pointer shadow-xl shadow-black/50 hover:-translate-y-1.5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-pink-300">
                    <Calendar className="w-3.5 h-3.5 text-pink-400" />
                    <span>{blog.publishedAt ? new Date(blog.publishedAt).toLocaleDateString() : 'Recent'}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-sky-400 font-bold">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{blog.views || 0} reads</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-300 group-hover:via-pink-300 group-hover:to-orange-300 transition leading-snug">
                  {blog.title}
                </h3>

                <p className="text-sm text-slate-300/90 leading-relaxed line-clamp-3">
                  {blog.excerpt || blog.content}
                </p>

                {blog.tags && blog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {blog.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-purple-500/20 text-purple-300 font-semibold">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-bold text-pink-400 group-hover:text-pink-300">
                <span>Read Full Essay</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 w-full max-w-2xl my-8 relative max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-xl glass-card text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="text-pink-400 font-semibold">{activeArticle.publishedAt ? new Date(activeArticle.publishedAt).toLocaleDateString() : 'Recent'}</span>
                <span>•</span>
                <span className="text-sky-400 font-semibold">{activeArticle.views || 0} total reads</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {activeArticle.title}
              </h3>
            </div>

            <div className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-wrap font-sans space-y-4 pt-4 border-t border-white/10">
              {activeArticle.content}
            </div>

            <div className="pt-6 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-pink-500 text-xs font-bold text-white transition shadow-lg shadow-pink-500/25"
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
