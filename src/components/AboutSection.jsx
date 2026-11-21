import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-6 relative">
      <div className="w-full bg-[#f8f5fc] p-8 sm:p-12 rounded-3xl border border-purple-100/80 shadow-sm">
        
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="section-header-title">
            <span className="text-purple-600 text-2xl font-serif">✦</span> About
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-[#0084d4] mt-2 mb-8 rounded-full"></div>
        </div>

        {/* Spacious, Large Times New Roman text layout */}
        <div className="max-w-4xl space-y-6 text-slate-800 text-xl sm:text-2xl leading-relaxed font-serif">
          <p className="text-slate-950 font-medium">
            Hey there! I am <strong className="text-purple-700 font-bold">{personalInfo.name}</strong>, a passionate Computer Science & Cyber Security student with a drive to solve complex problems through technology and innovation.
          </p>

          <p>
            Currently pursuing a Bachelor of Technology in <strong className="text-slate-950">Computer Science and Engineering (Cyber Security)</strong> from <span className="text-purple-800 font-bold">Vellore Institute of Technology (VIT), Chennai</span> (CGPA: <span className="text-purple-800 font-bold">8.97 / 10.0</span>). My academic journey has been marked by consistent excellence, ranking in top national percentiles and earning competitive entrance honors.
          </p>

          <p>
            My passion lies at the intersection of <strong className="text-slate-950">full-stack web architecture, artificial intelligence, and cyber security</strong>. As a Web Development Intern at Labmentix, I engineered production-grade React/Node.js web applications, optimizing API query throughput across 15+ backend REST routes with JWT & RBAC governance.
          </p>

          <p>
            Beyond internships, I am an active open-source contributor at <strong className="text-slate-950">GirlScript Summer of Code (GSSOC)</strong>, refactoring backend API error handling modules and fixing UI responsiveness bugs. Whether it's building real-time computer vision threat detection pipelines or speech transcription web apps, I believe in creating software that makes a meaningful impact.
          </p>
        </div>

      </div>
    </section>
  );
}
