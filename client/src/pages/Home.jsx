import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Volume2, VolumeX, Sliders, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import SEO from '../components/common/SEO';
import { FALLBACK_VEHICLES, FALLBACK_NEWS } from '../services/api';

const Home = () => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audio] = useState(() => new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3'));

  const toggleSound = () => {
    if (isPlayingAudio) {
      audio.pause();
      setIsPlayingAudio(false);
    } else {
      audio.play().catch(() => {});
      setIsPlayingAudio(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-white overflow-hidden">
      <SEO title="KONOHA AUTOMOBILI | Witness The Legend" description="Experience Konoha Automobili hypercar engineering, 3D WebGL configurator, and bespoke client atelier." />

      {/* ---------------------------------------------------- */}
      {/* FULLSCREEN BUGATTI HYPERCAR HERO BACKGROUND IMAGE    */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full h-screen flex flex-col justify-between items-center pt-24 pb-12 px-6 lg:px-12 select-none">
        
        {/* Fullscreen Hero Background Image (Les Légendes du Ciel Jet Edition) */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
          <img
            src="/bugatti-hero-jet.jpg"
            alt="Konoha Automobili Les Légendes du Ciel"
            className="w-full h-full object-cover scale-105 filter brightness-90 contrast-105"
          />

          {/* Luxury Atmospheric Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-black/20 to-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-obsidian/40 pointer-events-none" />
          <div className="absolute inset-0 noise-overlay pointer-events-none" />
        </div>

        {/* Top Sound Sampler Utility */}
        <div className="relative z-10 w-full flex justify-end">
          <button
            onClick={toggleSound}
            className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 hover:border-copper transition-all text-[10px] font-mono tracking-widest text-titanium-light uppercase shadow-xl"
          >
            {isPlayingAudio ? <Volume2 className="w-3.5 h-3.5 text-copper animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 text-titanium-dark" />}
            <span>{isPlayingAudio ? 'Engine Rev Playing' : 'Exhaust Sound Sampler'}</span>
          </button>
        </div>

        {/* Bottom Minimal Action Overlay (Clean Brand Copyright) */}
        <div className="relative z-10 w-full flex items-center justify-start">
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-titanium-light bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            KONOHA AUTOMOBILI © 2026
          </div>
        </div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* BRAND PHILOSOPHY & KINETIC NUMBERS                   */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 px-6 lg:px-12 relative border-t border-white/10 bg-obsidian-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block mb-3">
              Sculptural Aerodynamics & Engineering
            </span>
            <h2 className="font-brand text-3xl md:text-5xl font-bold leading-tight mb-6 uppercase tracking-wider">
              We do not build sports cars. We carve physical law.
            </h2>
            <p className="text-titanium-dark font-sans leading-relaxed text-sm md:text-base mb-8">
              Every curve of a Konoha hypercar serves a singular purpose: thermal ventilation and vacuum downforce. Our proprietary active venturi tunnels suck the vehicle to the tarmac at 300 km/h with zero drag penalty.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-copper flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-brand text-sm font-bold text-white uppercase">Full Carbon Tub</h4>
                  <p className="text-xs font-sans text-titanium-dark">T1100G dry weave monocoque offering 65,000 Nm/degree rigidity.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-6 h-6 text-copper flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-brand text-sm font-bold text-white uppercase">Quad-Axial Hybrid</h4>
                  <p className="text-xs font-sans text-titanium-dark">Instant 800V torque fill seamlessly coupled to high-rpm V12 sound.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 glass-panel p-8 md:p-12 rounded-3xl border border-copper/30">
              <div className="space-y-8">
                <div>
                  <span className="font-brand text-5xl md:text-6xl font-extrabold text-gradient-copper">11,500</span>
                  <span className="text-xs font-mono text-titanium-dark uppercase tracking-widest block mt-1">MAX ENGINE REDLINE RPM</span>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <span className="font-brand text-5xl md:text-6xl font-extrabold text-gradient-gold">65,000</span>
                  <span className="text-xs font-mono text-titanium-dark uppercase tracking-widest block mt-1">NM/DEGREE TORSIONAL STIFFNESS</span>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <span className="font-brand text-5xl md:text-6xl font-extrabold text-white">15</span>
                  <span className="text-xs font-mono text-titanium-dark uppercase tracking-widest block mt-1">UNITS WORLDWIDE PRODUCTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* FLAGSHIP COLLECTION PREVIEW                          */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block mb-2">
              Bespoke Hypercar Lineup
            </span>
            <h2 className="font-brand text-3xl md:text-4xl font-bold uppercase tracking-wider">The Flagship Portfolio</h2>
          </div>
          <Link
            to="/collection"
            className="text-xs font-mono text-copper hover:underline flex items-center gap-2"
          >
            <span>Explore All Hypercars</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FALLBACK_VEHICLES.slice(0, 3).map((vehicle) => (
            <div
              key={vehicle._id}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={vehicle.heroImage}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 text-[10px] font-mono uppercase tracking-widest text-obsidian bg-copper px-3 py-1 rounded-full font-bold">
                  {vehicle.category}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-brand text-xl font-bold text-white group-hover:text-copper transition-colors uppercase">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-titanium-dark line-clamp-2 leading-relaxed">
                  {vehicle.tagline}
                </p>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10 text-center font-mono text-xs">
                  <div>
                    <span className="text-[10px] text-titanium-dark block">POWER</span>
                    <span className="text-copper font-bold">{vehicle.horsepower} HP</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-titanium-dark block">0-100</span>
                    <span className="text-white font-bold">{vehicle.acceleration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-titanium-dark block">SPEED</span>
                    <span className="text-titanium-light font-bold">{vehicle.topSpeed}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-sm font-semibold text-copper">{vehicle.priceFormatted}</span>
                  <Link
                    to={`/vehicle/${vehicle.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-copper transition-colors"
                  >
                    <span>Specification</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* BESPOKE 3D CONFIGURATOR PROMOTIONAL SECTION           */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 px-6 lg:px-12 relative bg-obsidian-light border-y border-white/10">
        <div className="max-w-7xl mx-auto glass-panel rounded-3xl p-8 lg:p-16 border border-copper/30 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="max-w-xl z-10 space-y-6">
            <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">
              Unrivaled Personalization
            </span>
            <h2 className="font-brand text-3xl md:text-5xl font-extrabold leading-tight uppercase tracking-wider">
              Craft Your Spec in 3D Real-Time
            </h2>
            <p className="text-sm font-sans text-titanium-dark leading-relaxed">
              Step into the Konoha Atelier digital suite. Select custom metallic finishes, forged carbon aero spoilers, titanium wheel geometry, and hand-stitched Alcantara cockpits.
            </p>
            <Link
              to="/configurator"
              className="inline-flex items-center gap-3 bg-gradient-copper text-obsidian font-mono text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl shadow-2xl hover:opacity-90 transition-all"
            >
              <span>Launch 3D Studio</span>
              <Sliders className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative w-full lg:w-1/2 h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80"
              alt="3D Configurator Teaser"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2 font-mono text-xs text-copper bg-black/70 px-4 py-2 rounded-full border border-copper/30">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Real-Time WebGL Active</span>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* LATEST GAZETTE NEWS                                  */}
      {/* ---------------------------------------------------- */}
      <section className="py-28 px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto mb-16 flex items-end justify-between">
          <div>
            <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block mb-2">
              Private Press & Dispatches
            </span>
            <h2 className="font-brand text-3xl md:text-4xl font-bold uppercase tracking-wider">Konoha Gazette</h2>
          </div>
          <Link to="/news" className="text-xs font-mono text-copper hover:underline flex items-center gap-2">
            <span>View All Gazette News</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {FALLBACK_NEWS.map((article) => (
            <div
              key={article._id}
              className="glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-copper text-[10px] font-mono uppercase px-3 py-1 rounded-full border border-copper/30">
                  {article.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-xs font-mono text-titanium-dark">
                  <span>{article.createdAt}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-brand text-lg font-bold text-white group-hover:text-copper transition-colors uppercase">
                  {article.title}
                </h3>
                <p className="text-xs text-titanium-dark font-sans line-clamp-2 leading-relaxed">
                  {article.excerpt}
                </p>
                <Link
                  to={`/news/${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono text-copper pt-2 hover:underline"
                >
                  <span>Read Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
