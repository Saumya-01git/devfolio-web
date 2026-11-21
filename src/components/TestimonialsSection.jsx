import React, { useState } from 'react';
import { Star, MessageSquareQuote, Plus, X, Check, Sparkles } from 'lucide-react';
import { portfolioApi } from '../lib/api';

export default function TestimonialsSection({ testimonials: initialTestimonials = [] }) {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    authorName: '',
    authorRole: '',
    company: '',
    rating: 5,
    content: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Keep in sync if parent prop changes initially
  React.useEffect(() => {
    if (initialTestimonials && initialTestimonials.length > 0 && testimonials.length === 0) {
      setTestimonials(initialTestimonials);
    }
  }, [initialTestimonials]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await portfolioApi.submitTestimonial(formData);
      if (res && (res.success || res.data)) {
        const newEntry = res.data || {
          id: 'temp-' + Date.now(),
          ...formData
        };
        // Prepend to visible list
        setTestimonials(prev => [newEntry, ...prev]);
        setSubmitSuccess(true);
        setTimeout(() => {
          setSubmitSuccess(false);
          setIsModalOpen(false);
          setFormData({ authorName: '', authorRole: '', company: '', rating: 5, content: '' });
        }, 1800);
      } else {
        throw new Error(res?.message || 'Failed to submit endorsement.');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[350px] bg-gradient-to-r from-[#2D5D7B]/25 via-[#457EAC]/20 to-[#9191E9]/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C2AFF0]/15 border border-[#C2AFF0]/30 text-[#C2AFF0] text-xs font-bold mb-3 tracking-wider uppercase">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>ENDORSEMENTS & PRAISE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Peer & Industry <span className="text-gradient-aurora">Endorsements</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-xl mt-3 max-w-xl leading-relaxed">
            Technical feedback from engineering leaders, architects, and technical collaborators.
          </p>

          {/* Action Button: Anyone Can Leave an Endorsement */}
          <div className="mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#9191E9] to-[#C2AFF0] text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#9191E9]/25 hover:brightness-110 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Write an Endorsement</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(testimonials.length > 0 ? testimonials : initialTestimonials).map(t => (
            <div
              key={t.id || Math.random()}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#2D5D7B]/30 hover:border-[#C2AFF0]/50 transition duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-8 h-8 text-slate-600 group-hover:text-[#C2AFF0]/60 transition" />
                </div>

                <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed mb-6">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-base sm:text-lg">{t.authorName}</h4>
                  <p className="text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#C2AFF0] to-[#9191E9] font-extrabold">
                    {t.authorRole} {t.company ? `• ${t.company}` : ''}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal: Write Testimonial */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#2D5D7B]/50 w-full max-w-lg relative my-8 shadow-2xl space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#C2AFF0] font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Peer Recommendation</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Leave an Endorsement</h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Collaborated together on a project or open-source repo? Share your experience below!
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-8 rounded-2xl bg-emerald-950/70 border border-emerald-500/40 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-2xl">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-white">Endorsement Published!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for your feedback! Your endorsement is now live on the showcase.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.authorName}
                    onChange={e => setFormData({ ...formData, authorName: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/60 focus:border-[#C2AFF0] focus:ring-1 focus:ring-[#C2AFF0] text-slate-100 placeholder-slate-500 text-sm outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Your Role / Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.authorRole}
                      onChange={e => setFormData({ ...formData, authorRole: e.target.value })}
                      placeholder="e.g. Senior Tech Lead"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/60 focus:border-[#C2AFF0] focus:ring-1 focus:ring-[#C2AFF0] text-slate-100 placeholder-slate-500 text-sm outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Tech Systems"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/60 focus:border-[#C2AFF0] focus:ring-1 focus:ring-[#C2AFF0] text-slate-100 placeholder-slate-500 text-sm outline-none transition"
                    />
                  </div>
                </div>

                {/* Rating Stars */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Rating (1 to 5 Stars)
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map(star => {
                      const active = (hoverRating || formData.rating) >= star;
                      return (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="p-1 cursor-pointer transition-transform hover:scale-110"
                        >
                          <Star className={`w-6 h-6 ${active ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
                        </button>
                      );
                    })}
                    <span className="text-xs font-mono text-amber-400 font-bold ml-2">
                      {formData.rating} / 5 Stars
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Endorsement Feedback *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.content}
                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your testimonial here..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/60 focus:border-[#C2AFF0] focus:ring-1 focus:ring-[#C2AFF0] text-slate-100 placeholder-slate-500 text-sm outline-none transition resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#9191E9] to-[#C2AFF0] text-slate-950 font-bold text-xs shadow-md shadow-[#9191E9]/20 hover:brightness-110 transition cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Publishing...' : 'Publish Endorsement ✨'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
}
