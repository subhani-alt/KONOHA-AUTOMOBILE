import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-obsidian text-white flex flex-col items-center justify-center p-6 text-center">
      <SEO title="404 - Horizon Lost" />

      <div className="glass-panel p-12 rounded-3xl max-w-lg border border-copper/30 space-y-6">
        <div className="w-16 h-16 rounded-full bg-copper/20 text-copper flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">
          Telemetry Signal Interrupted
        </span>

        <h1 className="font-cinematic text-6xl font-extrabold text-gradient-copper">404</h1>

        <p className="text-xs font-sans text-titanium-dark leading-relaxed">
          The requested trajectory does not exist within the Valence Automobili universe. Return to home to resume velocity.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-copper text-obsidian font-mono text-xs font-bold py-3.5 px-8 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider"
        >
          <span>Return to Atelier Home</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
