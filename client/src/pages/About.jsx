import React from 'react';
import SEO from '../components/common/SEO';

const About = () => {
  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="About Valence Automobili" description="The story, philosophy, and executive vision behind Valence Automobili." />

      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">Our Philosophy</span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold">KINETIC ARTISTRY</h1>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 text-titanium-dark font-sans leading-relaxed text-sm md:text-base">
          <p className="text-xl font-cinematic text-white font-bold">
            Valence Automobili was founded on a singular conviction: that true luxury performance exists at the intersection of raw physical power and uncompromised sculptural elegance.
          </p>
          <p>
            Operating out of our carbon atelier in Sant'Agata Bolognese, our team of aerodynamicists, composite engineers, and interior artisans hand-craft a maximum of 15 vehicles per year.
          </p>
          <p>
            Every engine component, active aero flap, and titanium bolt is engineered in-house to achieve world-record power-to-weight ratios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
