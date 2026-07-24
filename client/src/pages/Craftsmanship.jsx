import React from 'react';
import { Sparkles, Shield, Compass, Heart } from 'lucide-react';
import SEO from '../components/common/SEO';

const Craftsmanship = () => {
  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Craftsmanship & Atelier" description="Inside the Valence Atelier: hand-stitched semi-aniline leathers, titanium switchgears, and bespoke client commissions." />

      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">
            Atelier Sant'Agata
          </span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold tracking-tight">
            THE ART OF BESPOKE TAILORING
          </h1>
          <p className="text-sm font-sans text-titanium-dark leading-relaxed">
            No two Valence hypercars are identical. Every client commission receives hundreds of hours of dedicated artisan labor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-cinematic text-xl font-bold text-copper">Semi-Aniline Nappa Leather</h3>
            <p className="text-xs text-titanium-dark font-sans leading-relaxed">
              Sourced from high-altitude Alpine pastures to ensure zero skin blemishes, hand-dyed using organic vegetable pigments.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-cinematic text-xl font-bold text-copper">Machined Billet Titanium</h3>
            <p className="text-xs text-titanium-dark font-sans leading-relaxed">
              Cockpit switchgears and paddle shifters are CNC-milled from solid Grade 5 titanium blocks with sub-micron tactile feel.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-cinematic text-xl font-bold text-copper">Exposed Carbon Weaves</h3>
            <p className="text-xs text-titanium-dark font-sans leading-relaxed">
              Matching symmetrical herringbone carbon weave alignment across panel gaps to within 0.2 millimeters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Craftsmanship;
