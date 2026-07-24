import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, ArrowUpRight, ShieldCheck, Globe, Instagram, Youtube, Twitter } from 'lucide-react';
import api from '../../services/api';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await api.post('/contact/subscribe', { email });
      setSubscribed(true);
      setEmail('');
    } catch (err) {
      setSubscribed(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-obsidian-light border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-copper/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Newsletter Gazette Section */}
        <div className="glass-panel p-8 lg:p-12 rounded-3xl mb-16 border border-copper/20 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-mono text-copper tracking-widest uppercase block mb-2">
              Private Communications
            </span>
            <h3 className="font-cinematic text-2xl lg:text-3xl text-white mb-2">
              Subscribe to the Valence Private Gazette
            </h3>
            <p className="text-sm font-sans text-titanium-dark leading-relaxed">
              Receive private invitations to private unveilings, track telemetries, and confidential commission opportunities.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex items-center gap-3">
            {subscribed ? (
              <div className="flex items-center gap-2 text-copper font-mono text-sm">
                <ShieldCheck className="w-5 h-5" />
                <span>You are subscribed to Valence Private Gazette.</span>
              </div>
            ) : (
              <div className="relative flex-1 lg:w-96">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your private email..."
                  required
                  className="w-full bg-obsidian border border-white/15 rounded-xl py-3.5 pl-5 pr-14 text-sm text-white placeholder-titanium-dark focus:outline-none focus:border-copper font-sans"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-gradient-copper text-obsidian rounded-lg font-mono text-xs font-bold hover:opacity-90 transition-opacity flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-copper p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-obsidian rounded-[7px] flex items-center justify-center">
                  <span className="font-cinematic text-sm font-bold text-copper">V</span>
                </div>
              </div>
              <span className="font-cinematic text-lg font-bold tracking-widest text-white">
                VALENCE AUTOMOBILI
              </span>
            </div>
            <p className="text-xs text-titanium-dark leading-relaxed max-w-sm">
              Valence Automobili is a premier Italian hypercar atelier dedicated to extreme aerodynamic efficiency, uncompromised power density, and bespoke client tailoring.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-copper/20 text-titanium-light hover:text-copper transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-copper/20 text-titanium-light hover:text-copper transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-full bg-white/5 hover:bg-copper/20 text-titanium-light hover:text-copper transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hypercars */}
          <div>
            <h4 className="font-mono text-xs text-copper uppercase tracking-widest mb-4">Hypercars</h4>
            <ul className="space-y-2.5 text-xs text-titanium-dark">
              <li><Link to="/vehicle/valence-apex-stratos" className="hover:text-white transition-colors">Apex Stratos (V12)</Link></li>
              <li><Link to="/vehicle/valence-chronos-gt" className="hover:text-white transition-colors">Chronos GT (V10 Hybrid)</Link></li>
              <li><Link to="/vehicle/valence-nebula-ev" className="hover:text-white transition-colors">Nebula EV (2400 HP)</Link></li>
              <li><Link to="/vehicle/valence-phantom-e-hybrid" className="hover:text-white transition-colors">Phantom E-Hybrid</Link></li>
              <li><Link to="/collection" className="hover:text-copper transition-colors">View All Models</Link></li>
            </ul>
          </div>

          {/* Atelier & Tech */}
          <div>
            <h4 className="font-mono text-xs text-copper uppercase tracking-widest mb-4">Atelier</h4>
            <ul className="space-y-2.5 text-xs text-titanium-dark">
              <li><Link to="/technology" className="hover:text-white transition-colors">Aerodynamics & Chassis</Link></li>
              <li><Link to="/craftsmanship" className="hover:text-white transition-colors">Carbon Monocoque</Link></li>
              <li><Link to="/configurator" className="hover:text-white transition-colors">Bespoke Configurator</Link></li>
              <li><Link to="/heritage" className="hover:text-white transition-colors">Motorsport Heritage</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Media Gallery</Link></li>
            </ul>
          </div>

          {/* Global Network */}
          <div>
            <h4 className="font-mono text-xs text-copper uppercase tracking-widest mb-4">Showrooms</h4>
            <ul className="space-y-2.5 text-xs text-titanium-dark">
              <li><Link to="/dealers" className="hover:text-white transition-colors">Monte Carlo Atelier</Link></li>
              <li><Link to="/dealers" className="hover:text-white transition-colors">Mayfair London</Link></li>
              <li><Link to="/dealers" className="hover:text-white transition-colors">Dubai DIFC</Link></li>
              <li><Link to="/dealers" className="hover:text-white transition-colors">Beverly Hills</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Private Commission</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Rights Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-titanium-dark font-mono gap-4">
          <p>© 2026 VALENCE AUTOMOBILI S.p.A. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Preferences</a>
            <Link to="/admin" className="hover:text-copper transition-colors">Admin CMS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
