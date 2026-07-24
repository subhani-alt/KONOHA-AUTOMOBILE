import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';

const Careers = () => {
  const positions = [
    { title: 'Senior Aerodynamics CFD Engineer', dept: 'Engineering', loc: 'Sant’Agata Bolognese, Italy' },
    { title: '800V High-Voltage Battery Specialist', dept: 'E-Mobility', loc: 'Stuttgart, Germany' },
    { title: 'Master Carbon Composite Artisan', dept: 'Atelier', loc: 'Sant’Agata Bolognese, Italy' },
    { title: 'Lead WebGL & 3D Interactive Engineer', dept: 'Digital Experience', loc: 'Remote / London' },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Careers at Valence Automobili" description="Join the engineering and design teams shaping the future of hypercar physics." />

      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">Join the Atelier</span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold">CAREERS AT VALENCE</h1>
        </div>

        <div className="space-y-4">
          {positions.map((pos, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center justify-between group">
              <div>
                <span className="text-[10px] font-mono text-copper uppercase">{pos.dept} • {pos.loc}</span>
                <h3 className="font-cinematic text-xl font-bold group-hover:text-copper transition-colors">{pos.title}</h3>
              </div>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-copper hover:text-obsidian text-white font-mono text-xs py-2.5 px-4 rounded-xl transition-all">
                <span>Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
