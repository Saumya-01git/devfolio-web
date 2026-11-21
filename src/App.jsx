import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { portfolioApi } from './lib/api';

export default function App() {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    portfolioApi.getAbout().then(data => {
      if (data) setAbout(data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero about={about} />
      </main>
      <Footer />
    </div>
  );
}

