import React from 'react';
import { Cpu, ShieldCheck, Zap, Wind, Gauge, Compass } from 'lucide-react';
import SEO from '../components/common/SEO';

const Technology = () => {
  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Technology & Aerodynamics" description="Explore Valence Quad-Turbo V12 engineering, active ground-effect vacuum channels, and 800V solid-state drive cores." />

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">
            Aerodynamics & Physics
          </span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold tracking-tight">
            ENGINEERING WITHOUT LIMITS
          </h1>
          <p className="text-sm font-sans text-titanium-dark leading-relaxed">
            Where aerospace telemetry meets extreme hypercar velocity. Explore the technological pillars defining Valence Automobili.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-copper/20 text-copper flex items-center justify-center">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="font-cinematic text-2xl font-bold">6.5L Quad-Turbocharged V12</h3>
            <p className="text-xs font-sans text-titanium-dark leading-relaxed">
              Equipped with 3D-printed Inconel exhaust manifolds, dual axial e-turbos, and an unrestricted 11,500 RPM atmospheric redline generating 2,150 HP with zero turbo lag.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-copper/20 text-copper flex items-center justify-center">
              <Wind className="w-7 h-7" />
            </div>
            <h3 className="font-cinematic text-2xl font-bold">Active Venturi Aerodynamics</h3>
            <p className="text-xs font-sans text-titanium-dark leading-relaxed">
              Underbody ground-effect venturi channels create negative pressure beneath the monocoque, generating 1,350 kg of downforce at 300 km/h with zero rear wing drag penalty.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-copper/20 text-copper flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-cinematic text-2xl font-bold">T1100G Dry Carbon Monocoque</h3>
            <p className="text-xs font-sans text-titanium-dark leading-relaxed">
              Constructed from 400 individual hand-laid pre-preg carbon sheets autoclaved at 7 bar pressure. Torsional rigidity exceeds 65,000 Nm/degree for laser-sharp apex precision.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-copper/20 text-copper flex items-center justify-center">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="font-cinematic text-2xl font-bold">Quad Axial-Flux E-Drive</h3>
            <p className="text-xs font-sans text-titanium-dark leading-relaxed">
              4 individual wheel electric motors operating on an 800V architecture execute 1,000 torque vectoring adjustments per second for instantaneous traction deployment.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Technology;
