import React, { useState } from 'react';
import { X, Mail, Phone, Copy, Check, Send, Sparkles, Heart, MessageSquare } from 'lucide-react';
import GithubIcon from './GithubIcon';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function ContactDrawer({ isOpen, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'SDE Role / Internship Inquiry', message: '' });

  if (!isOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      console.log('Confetti triggered');
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    triggerConfetti();
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="glass-modal-backdrop" onClick={onClose}>
      <div 
        className="glass-modal-content glass-panel p-6 sm:p-8 border-white/20 shadow-2xl relative max-w-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-heading text-white">Let's Connect & Collaborate</h3>
            <p className="text-xs text-slate-400">Reach out for Software Development Engineer & Cyber Security opportunities.</p>
          </div>
        </div>

        {/* Quick Copy Contact Pill Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          
          {/* Email Copy Card */}
          <div className="glass-panel p-3.5 border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <div className="truncate text-xs">
                <span className="text-slate-400 block text-[10px]">EMAIL</span>
                <span className="font-mono text-white truncate block">{personalInfo.email}</span>
              </div>
            </div>
            <button
              onClick={copyEmail}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-purple-500/30 text-slate-300 transition-colors flex-shrink-0 ml-2"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Phone Copy Card */}
          <div className="glass-panel p-3.5 border-white/10 bg-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <div className="truncate text-xs">
                <span className="text-slate-400 block text-[10px]">PHONE</span>
                <span className="font-mono text-white truncate block">{personalInfo.phone}</span>
              </div>
            </div>
            <button
              onClick={copyPhone}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-cyan-500/30 text-slate-300 transition-colors flex-shrink-0 ml-2"
              title="Copy Phone"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>

        </div>

        {formSubmitted ? (
          <div className="glass-panel p-8 text-center bg-emerald-500/10 border-emerald-500/30 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold font-heading text-white">Message Sent Successfully!</h4>
            <p className="text-xs text-slate-300">
              Thank you for reaching out! Saumya will respond to your message shortly at <span className="text-cyan-300 font-mono">{formData.email || 'your email'}</span>.
            </p>
          </div>
        ) : (
          /* Contact Form */
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Vance"
                  className="glass-input"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className="glass-input"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Subject / Opportunity</label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="glass-input"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1.5">Message</label>
              <textarea
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share role details or collaboration ideas..."
                className="glass-input resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn-glass-primary w-full justify-center py-3 text-sm shadow-xl shadow-purple-500/20"
            >
              <Send className="w-4 h-4" />
              Send Direct Message
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
