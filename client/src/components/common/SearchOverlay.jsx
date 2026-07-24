import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FALLBACK_VEHICLES } from '../../services/api';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const filteredVehicles = FALLBACK_VEHICLES.filter(
    (v) =>
      v.name.toLowerCase().includes(query.toLowerCase()) ||
      v.category.toLowerCase().includes(query.toLowerCase()) ||
      v.engine.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (slug) => {
    navigate(`/vehicle/${slug}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex flex-col items-center pt-24 px-6 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-copper/20 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-3xl">
        <div className="relative mb-12">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-7 h-7 text-copper" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search hypercars, engine technology, or specifications..."
            className="w-full bg-obsidian-card border border-copper/30 rounded-2xl py-6 pl-18 pr-6 text-xl text-white placeholder-titanium-dark focus:outline-none focus:border-copper shadow-2xl transition-all font-sans"
            autoFocus
          />
        </div>

        {/* Quick Filter Tags */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2">
          <span className="text-xs font-mono text-titanium-dark uppercase tracking-widest">Trending:</span>
          {['Apex Stratos', 'V12 Quad-Turbo', 'Solid-State EV', 'Chronos GT', '2100 HP'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="text-xs font-mono px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-copper/20 hover:border-copper/40 text-titanium-light transition-all whitespace-nowrap"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results Grid */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
          {filteredVehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              onClick={() => handleSelect(vehicle.slug)}
              className="glass-panel p-4 rounded-xl flex items-center justify-between cursor-pointer hover:border-copper/50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <img
                  src={vehicle.heroImage}
                  alt={vehicle.name}
                  className="w-20 h-14 object-cover rounded-lg border border-white/10"
                />
                <div>
                  <h4 className="font-cinematic text-lg text-white group-hover:text-copper transition-colors">
                    {vehicle.name}
                  </h4>
                  <p className="text-xs font-mono text-titanium-dark">{vehicle.category} • {vehicle.horsepower} HP • {vehicle.acceleration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-copper font-semibold">{vehicle.priceFormatted}</span>
                <ArrowRight className="w-5 h-5 text-titanium-dark group-hover:text-copper group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
