import React, { useState } from 'react';
import { Send, Mail, MapPin, Sparkles, CheckCircle2, Copy, Check } from 'lucide-react';
import { portfolioApi } from '../lib/api';

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ContactSection({ about }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const contactEmail = about?.email || 'saumya@portfolio.local';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await portfolioApi.sendContactMessage(formData);
      if (res && (res.success || res.data)) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(res?.message || 'Failed to deliver message.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/10 via-violet-600/10 to-transparent rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Have a project in mind, want to discuss custom CMS architecture, or exploring a new engineering role? Drop me a note!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>
                <p className="text-xs text-slate-400">
                  Feel free to reach out directly via email or connect through professional networks.
                </p>
              </div>

              {/* Email Card with 1-click copy */}
              <div className="p-4 rounded-2xl glass-card border border-white/5 flex items-center justify-between">
                <div className="truncate mr-3">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">Email Address</span>
                  <a href={`mailto:${contactEmail}`} className="text-sm font-semibold text-indigo-400 hover:underline truncate">
                    {contactEmail}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              {about?.location && (
                <div className="p-4 rounded-2xl glass-card border border-white/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">Base Location</span>
                    <span className="text-sm font-semibold text-white">{about.location}</span>
                  </div>
                </div>
              )}

              {/* Social Buttons */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-3">Social Profiles</span>
                <div className="flex items-center gap-3">
                  <a
                    href={about?.githubUrl || "https://github.com/Saumya-01git"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl glass-card hover:border-indigo-500/40 text-slate-300 hover:text-white transition"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  {about?.linkedinUrl && (
                    <a
                      href={about.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-2xl glass-card hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white transition"
                    >
                      LinkedIn ↗
                    </a>
                  )}
                  {about?.twitterUrl && (
                    <a
                      href={about.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-2xl glass-card hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white transition"
                    >
                      Twitter / X ↗
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl shadow-black/50 relative">
              
              {status === 'success' ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Delivered!</h3>
                  <p className="text-sm text-slate-400 max-w-sm">
                    Thank you for reaching out. Your message has been saved to the Core CMS inbox, and I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status === 'error' && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                      <span>⚠️</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Inquiry / Architecture Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      rows="5"
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or question in detail..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 px-6 rounded-2xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-xl shadow-indigo-600/30 transition duration-200 disabled:opacity-50 flex items-center justify-center gap-2 group"
                  >
                    {status === 'sending' ? (
                      <span>Delivering message...</span>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
