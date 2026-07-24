import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Shield, Cpu, Sparkles, MapPin, Newspaper, Sliders } from 'lucide-react';
import { FALLBACK_VEHICLES } from '../../services/api';

const MegaMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 top-[80px] z-50 bg-obsidian-card/95 backdrop-blur-3xl border-b border-white/10 shadow-2xl py-12 px-8 lg:px-20 transition-all duration-500 animate-fadeIn">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Models */}
        <div>
          <span className="text-xs font-mono text-copper uppercase tracking-widest block mb-4">
            Hypercar Portfolio
          </span>
          <ul className="space-y-3">
            {FALLBACK_VEHICLES.map((v) => (
              <li key={v._id}>
                <Link
                  to={`/vehicle/${v.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between text-base font-cinematic text-titanium-light hover:text-white transition-colors"
                >
                  <span className="group-hover:translate-x-1 transition-transform">{v.name}</span>
                  <span className="text-[10px] font-mono text-copper border border-copper/30 px-2 py-0.5 rounded">
                    {v.horsepower} HP
                  </span>
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-white/10">
              <Link
                to="/collection"
                onClick={onClose}
                className="text-xs font-mono text-copper hover:underline flex items-center gap-1.5"
              >
                <span>View Full Collection</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Craftsmanship & Atelier */}
        <div>
          <span className="text-xs font-mono text-copper uppercase tracking-widest block mb-4">
            Atelier & Science
          </span>
          <ul className="space-y-3">
            {[
              { label: 'Technology & Aerodynamics', path: '/technology', icon: Cpu },
              { label: 'Craftsmanship & Tailoring', path: '/craftsmanship', icon: Sparkles },
              { label: 'Heritage & Motorsports', path: '/heritage', icon: Shield },
              { label: 'Bespoke 3D Configurator', path: '/configurator', icon: Sliders },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="flex items-center gap-3 text-sm font-sans text-titanium-light hover:text-white transition-colors group"
                >
                  <item.icon className="w-4 h-4 text-copper group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Corporate & Network */}
        <div>
          <span className="text-xs font-mono text-copper uppercase tracking-widest block mb-4">
            Global Universe
          </span>
          <ul className="space-y-3">
            {[
              { label: 'Global Dealer Locator', path: '/dealers', icon: MapPin },
              { label: 'Press & Gazette', path: '/news', icon: Newspaper },
              { label: 'Curated Gallery', path: '/gallery', icon: Compass },
              { label: 'Private Commission Contact', path: '/contact', icon: ArrowUpRight },
              { label: 'Careers at Valence', path: '/careers', icon: ArrowUpRight },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className="text-sm font-sans text-titanium-light hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Bespoke Configurator Banner */}
        <div className="glass-panel p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group">
          <div className="relative z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-copper block mb-1">
              Interactive 3D Studio
            </span>
            <h4 className="font-cinematic text-xl text-white mb-2">Bespoke Configurator</h4>
            <p className="text-xs text-titanium-dark font-sans leading-relaxed mb-4">
              Customize your unique hypercar specification in real-time WebGL 3D rendering.
            </p>
          </div>
          <Link
            to="/configurator"
            onClick={onClose}
            className="relative z-10 inline-flex items-center justify-center gap-2 bg-gradient-copper text-obsidian font-mono text-xs font-semibold py-3 px-5 rounded-xl hover:opacity-90 transition-opacity"
          >
            <span>Launch Configurator</span>
            <Sliders className="w-4 h-4" />
          </Link>
          <img
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80"
            alt="Configurator preview"
            className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:scale-105 transition-transform duration-700 pointer-events-none"
          />
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
