import React from 'react';
import { Shield, Flag, Award, Compass } from 'lucide-react';
import SEO from '../components/common/SEO';

const Heritage = () => {
  const milestones = [
    { year: '1968', title: 'Racing Roots in Monza', desc: 'Valence origins in Formula prototype chassis design and aerodynamic venturi testing.' },
    { year: '1984', title: 'The First Twin-Turbo V8 Prototype', desc: 'Achieving 340 km/h speed barrier on the Nardò Ring test track.' },
    { year: '2005', title: 'Carbon Tub Breakthrough', desc: 'Pioneering full dry-carbon fiber monocoques for road-legal limited series hypercars.' },
    { year: '2026', title: 'Apex Stratos & Solid-State Era', desc: 'Unveiling 2,150 HP Quad-Turbo V12 hybrid and pure solid-state EV powertrains.' },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Heritage & Motorsport" description="Discover the 60-year racing history and engineering legacy of Valence Automobili." />

      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">
            Legacy of Velocity
          </span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold tracking-tight">
            MOTORSPORT HERITAGE
          </h1>
          <p className="text-sm font-sans text-titanium-dark max-w-2xl mx-auto leading-relaxed">
            From 1968 Monza endurance racing victory to present-day hypercar supremacy.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-copper/30">
          {milestones.map((item, idx) => (
            <div key={idx} className={`relative flex items-center justify-between gap-8 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-1/2 glass-panel p-6 rounded-2xl border border-white/10">
                <span className="font-cinematic text-3xl font-extrabold text-copper block mb-1">{item.year}</span>
                <h3 className="font-cinematic text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs font-sans text-titanium-dark leading-relaxed">{item.desc}</p>
              </div>
              <div className="w-6 h-6 rounded-full bg-copper border-4 border-obsidian z-10 flex-shrink-0" />
              <div className="w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heritage;
