import React, { useState } from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import SEO from '../components/common/SEO';
import { FALLBACK_DEALERS } from '../services/api';

const DealerLocator = () => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const regions = ['All', 'Europe', 'Americas', 'Middle East & Africa'];

  const filteredDealers = selectedRegion === 'All'
    ? FALLBACK_DEALERS
    : FALLBACK_DEALERS.filter(d => d.region === selectedRegion);

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Global Dealer Locator & Showrooms" description="Locate official Valence Automobili Ateliers in Monte Carlo, London, Dubai, and Beverly Hills." />

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">Global Network</span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold">DEALER LOCATOR</h1>
        </div>

        <div className="flex items-center justify-center gap-2">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`text-xs font-mono px-4 py-2 rounded-xl transition-all ${
                selectedRegion === reg ? 'bg-gradient-copper text-obsidian font-bold' : 'bg-white/5 text-titanium-light'
              }`}
            >
              {reg}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredDealers.map((dealer) => (
            <div key={dealer._id} className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] font-mono text-copper uppercase tracking-widest">{dealer.region}</span>
                <h3 className="font-cinematic text-2xl font-bold">{dealer.name}</h3>
                <p className="text-xs font-mono text-titanium-dark flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-copper" />
                  <span>{dealer.address}</span>
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2 text-titanium-light">
                  <Phone className="w-4 h-4 text-copper" />
                  <span>{dealer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-titanium-light">
                  <Mail className="w-4 h-4 text-copper" />
                  <span>{dealer.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealerLocator;
