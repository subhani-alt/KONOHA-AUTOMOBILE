import React, { useState } from 'react';
import { Download, Eye } from 'lucide-react';
import SEO from '../components/common/SEO';

const Gallery = () => {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85', title: 'Apex Stratos Track Telemetry', category: 'Track' },
    { id: 2, url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1920&q=85', title: 'Chronos GT Studio Lighting', category: 'Studio' },
    { id: 3, url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85', title: 'Nebula EV Solid-State Core', category: 'EV' },
    { id: 4, url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=85', title: 'Phantom E-Hybrid Monocoque', category: 'Monocoque' },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Curated Media Gallery & Wallpapers" description="Download 4K Ultra-wide wallpapers and media assets of Valence hypercars." />

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">Media Downloads</span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold">CURATED GALLERY</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img) => (
            <div key={img.id} className="glass-panel rounded-2xl overflow-hidden border border-white/10 group relative h-80">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 inset-x-6 flex items-center justify-between z-10">
                <div>
                  <span className="text-[10px] font-mono text-copper uppercase">{img.category}</span>
                  <h4 className="font-cinematic text-lg font-bold">{img.title}</h4>
                </div>
                <a href={img.url} download target="_blank" rel="noreferrer" className="p-3 rounded-full bg-black/60 hover:bg-copper hover:text-obsidian text-white transition-colors">
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
