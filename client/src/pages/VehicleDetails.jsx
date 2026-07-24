import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Sliders, Volume2, VolumeX, ShieldCheck, Zap, Gauge, Heart, Send, Check } from 'lucide-react';
import SEO from '../components/common/SEO';
import Viewer360 from '../components/3d/Viewer360';
import { FALLBACK_VEHICLES } from '../services/api';
import { useWishlist } from '../context/WishlistContext';

const VehicleDetails = () => {
  const { identifier } = useParams();
  const { wishlist, toggleWishlist } = useWishlist();

  const vehicle = FALLBACK_VEHICLES.find(
    (v) => v.slug === identifier || v._id === identifier
  ) || FALLBACK_VEHICLES[0];

  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audio] = useState(() => new Audio(vehicle.audioExhaustUrl || 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3'));
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleSound = () => {
    if (isPlayingAudio) {
      audio.pause();
      setIsPlayingAudio(false);
    } else {
      audio.play().catch(() => {});
      setIsPlayingAudio(true);
    }
  };

  const handleReserveSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const isSaved = wishlist.includes(vehicle._id);

  return (
    <div className="min-h-screen bg-obsidian text-white pt-28 pb-24 px-6 lg:px-12">
      <SEO title={vehicle.name} description={vehicle.description} image={vehicle.heroImage} />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Back Link & Header Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Link
              to="/collection"
              className="inline-flex items-center gap-2 text-xs font-mono text-copper hover:underline mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Hypercar Collection</span>
            </Link>

            <span className="text-xs font-mono text-titanium-dark uppercase tracking-widest block mb-1">
              {vehicle.category} • Commissioned Series
            </span>
            <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold tracking-tight">
              {vehicle.name}
            </h1>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => toggleWishlist(vehicle._id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-xs font-mono transition-all ${
                isSaved
                  ? 'bg-copper text-obsidian border-copper font-bold'
                  : 'bg-black/60 text-white border-white/15 hover:border-copper/40'
              }`}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>{isSaved ? 'In Wishlist' : 'Add to Wishlist'}</span>
            </button>

            <Link
              to="/configurator"
              className="flex items-center gap-2 bg-gradient-copper text-obsidian font-mono text-xs font-bold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Sliders className="w-4 h-4" />
              <span>Bespoke 3D Configurator</span>
            </Link>
          </div>
        </div>

        {/* 360 Viewer Section */}
        <div className="space-y-4">
          <Viewer360 images={vehicle.images} vehicleName={vehicle.name} />

          <div className="flex items-center justify-between glass-panel p-4 rounded-xl border border-white/10 text-xs font-mono">
            <span className="text-titanium-dark">Drag left or right to rotate perspective</span>
            <button
              onClick={toggleSound}
              className="flex items-center gap-2 text-copper hover:underline"
            >
              {isPlayingAudio ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span>{isPlayingAudio ? 'Mute Engine Exhaust' : 'Listen to Engine Sound'}</span>
            </button>
          </div>
        </div>

        {/* Main Specs & Telemetry Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left 2 Columns: Description & Engineering Features */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="font-cinematic text-2xl font-bold mb-4 text-copper">Engineering Architecture</h3>
              <p className="text-sm font-sans text-titanium-dark leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Specifications Array */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-copper uppercase tracking-widest">Technical Telemetry</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicle.specsArray?.map((spec, idx) => (
                  <div key={idx} className="glass-panel p-4 rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-titanium-dark">{spec.label}</span>
                    <span className="text-sm font-mono text-white font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard Features */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs text-copper uppercase tracking-widest">Bespoke Inclusions</h4>
              <div className="space-y-2.5">
                {vehicle.standardFeatures?.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs font-sans text-titanium-light">
                    <ShieldCheck className="w-4 h-4 text-copper flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Purchase Panel */}
          <div>
            <div className="glass-panel p-8 rounded-3xl border border-copper/30 sticky top-28 space-y-6">
              <div>
                <span className="text-[10px] font-mono text-titanium-dark uppercase tracking-widest block mb-1">
                  Starting Commission Price
                </span>
                <span className="font-cinematic text-4xl font-extrabold text-gradient-copper block">
                  {vehicle.priceFormatted}
                </span>
                <span className="text-[10px] font-mono text-titanium-dark block mt-1">
                  Excluding local taxes and bespoke client customization options.
                </span>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setReserveModalOpen(true)}
                  className="w-full bg-gradient-copper text-obsidian font-mono text-xs font-bold py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider shadow-2xl"
                >
                  Request Private Commission
                </button>

                <Link
                  to="/configurator"
                  className="w-full flex items-center justify-center gap-2 glass-panel text-white font-mono text-xs font-bold py-4 rounded-xl border border-white/15 hover:border-copper/40 transition-colors uppercase tracking-wider"
                >
                  <Sliders className="w-4 h-4 text-copper" />
                  <span>Customize in 3D</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-white/10 text-center text-xs font-mono text-titanium-dark space-y-1">
                <p>Delivery Lead Time: 8-12 Months</p>
                <p>Limited Production Slot Allocation</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Private Commission Reserve Modal */}
      {reserveModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6 animate-fadeIn">
          <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-lg w-full border border-copper/40 relative">
            {formSubmitted ? (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-copper/20 text-copper flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="font-cinematic text-2xl font-bold">Commission Inquiry Received</h3>
                <p className="text-xs text-titanium-dark leading-relaxed">
                  A private Valence Concierge advisor will review your requested allocation for {vehicle.name} and contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setReserveModalOpen(false);
                    setFormSubmitted(false);
                  }}
                  className="mt-4 bg-copper text-obsidian font-mono text-xs font-bold py-3 px-8 rounded-xl"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleReserveSubmit} className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-cinematic text-2xl font-bold">Request Private Commission</h3>
                  <button
                    type="button"
                    onClick={() => setReserveModalOpen(false)}
                    className="text-titanium-dark hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-xs text-titanium-dark font-sans">
                  Allocating slot for <strong className="text-white">{vehicle.name}</strong> ({vehicle.priceFormatted}).
                </p>

                <div>
                  <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Lord / Lady / Mr / Ms..."
                    className="w-full bg-obsidian border border-white/15 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Private Email</label>
                  <input
                    type="email"
                    required
                    placeholder="client@domain.com"
                    className="w-full bg-obsidian border border-white/15 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-obsidian border border-white/15 rounded-xl py-3 px-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-copper text-obsidian font-mono text-xs font-bold py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider mt-4"
                >
                  Submit Private Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleDetails;
