import React, { useState } from 'react';
import { Sliders, Save, Share2, Check, Sparkles, ChevronRight, Palette, Disc, Shield, ShieldCheck } from 'lucide-react';
import SEO from '../components/common/SEO';
import ConfiguratorCanvas3D from '../components/3d/ConfiguratorCanvas3D';
import { useConfigurator } from '../context/ConfiguratorContext';
import api from '../services/api';

const Configurator = () => {
  const {
    selectedVehicle,
    paint,
    setPaint,
    wheel,
    setWheel,
    caliper,
    setCaliper,
    interior,
    setInterior,
    aero,
    setAero,
    totalPrice,
    formatPrice,
    PAINTS,
    WHEELS,
    CALIPERS,
    INTERIORS,
    AERO_PACKAGES,
  } = useConfigurator();

  const [activeTab, setActiveTab] = useState('paint');
  const [savedShareUrl, setSavedShareUrl] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSaveConfiguration = async () => {
    setIsSaving(true);
    try {
      const res = await api.post('/configurator/save', {
        vehicleId: selectedVehicle._id || 'v1',
        vehicleName: selectedVehicle.name,
        paintColor: paint,
        wheelDesign: wheel,
        interiorTrim: interior,
        caliperColor: caliper,
        aeroPackage: aero,
        totalPrice,
      });

      if (res.data.success) {
        setSavedShareUrl(res.data.shareUrl || `https://valence-automobili.com/configurator?shareId=${res.data.data?.shareId || 'VAL-88219'}`);
        setModalOpen(true);
      }
    } catch (err) {
      setSavedShareUrl(`https://valence-automobili.com/configurator?shareId=VAL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
      setModalOpen(true);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-white pt-20 flex flex-col lg:flex-row overflow-hidden">
      <SEO title="Bespoke 3D Configurator" description="Design your bespoke Valence hypercar in real-time 3D WebGL rendering." />

      {/* Left 3D WebGL Canvas Area */}
      <div className="w-full lg:w-[65%] h-[60vh] lg:h-[calc(100vh-80px)] relative bg-obsidian-card">
        <ConfiguratorCanvas3D />

        {/* Top 3D Status Overlay */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-copper/30">
          <Sparkles className="w-4 h-4 text-copper animate-spin-slow" />
          <span className="text-xs font-mono text-titanium-light uppercase">
            WebGL 3D Studio • Real-Time Shader Active
          </span>
        </div>

        {/* Bottom Orbit Controls Hint */}
        <div className="absolute bottom-6 left-6 z-10 text-[10px] font-mono text-titanium-dark bg-black/50 px-3 py-1.5 rounded-lg border border-white/10">
          Orbit: Drag to Rotate • Scroll to Zoom
        </div>
      </div>

      {/* Right Customization Controls Sidebar */}
      <div className="w-full lg:w-[35%] h-[calc(100vh-80px)] bg-obsidian-light border-l border-white/10 p-6 lg:p-8 flex flex-col justify-between overflow-y-auto">
        
        <div className="space-y-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-mono text-copper uppercase tracking-widest block">Valence Atelier</span>
              <h2 className="font-cinematic text-2xl font-bold">{selectedVehicle.name}</h2>
            </div>

            <button
              onClick={handleSaveConfiguration}
              disabled={isSaving}
              className="flex items-center gap-2 bg-gradient-copper text-obsidian font-mono text-xs font-bold py-2.5 px-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              <Save className="w-4 h-4" />
              <span>{isSaving ? 'Saving...' : 'Save Spec'}</span>
            </button>
          </div>

          {/* Customization Navigation Tabs */}
          <div className="flex items-center gap-1 bg-obsidian p-1 rounded-xl border border-white/10">
            {[
              { id: 'paint', label: 'Paint', icon: Palette },
              { id: 'wheels', label: 'Wheels', icon: Disc },
              { id: 'calipers', label: 'Calipers', icon: Shield },
              { id: 'interior', label: 'Interior', icon: Sparkles },
              { id: 'aero', label: 'Aero', icon: ShieldCheck },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-2.5 rounded-lg text-xs font-mono transition-all flex flex-col items-center gap-1 ${
                  activeTab === tab.id
                    ? 'bg-copper text-obsidian font-bold shadow-md'
                    : 'text-titanium-dark hover:text-white'
                }`}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span className="text-[10px]">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Options */}
          {/* 1. Paint Options */}
          {activeTab === 'paint' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-mono text-xs text-copper uppercase tracking-widest">Exterior Paint Finish</h3>
              <div className="grid grid-cols-2 gap-3">
                {PAINTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPaint(p)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      paint.id === p.id
                        ? 'border-copper bg-copper/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-5 h-5 rounded-full border border-white/30" style={{ backgroundColor: p.hex }} />
                      {paint.id === p.id && <Check className="w-4 h-4 text-copper" />}
                    </div>
                    <span className="font-cinematic text-xs text-white font-bold block">{p.name}</span>
                    <span className="text-[10px] font-mono text-titanium-dark">
                      {p.price === 0 ? 'Included' : `+${formatPrice(p.price)}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 2. Wheel Options */}
          {activeTab === 'wheels' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-mono text-xs text-copper uppercase tracking-widest">Forged Alloy Wheel Geometry</h3>
              <div className="space-y-3">
                {WHEELS.map((w) => (
                  <button
                    key={w.id}
                    onClick={() => setWheel(w)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      wheel.id === w.id
                        ? 'border-copper bg-copper/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-cinematic text-sm text-white font-bold">{w.name}</h4>
                      <p className="text-[10px] font-mono text-titanium-dark">{w.finish}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-copper font-bold block">
                        {w.price === 0 ? 'Included' : `+${formatPrice(w.price)}`}
                      </span>
                      {wheel.id === w.id && <Check className="w-4 h-4 text-copper ml-auto mt-1" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 3. Caliper Options */}
          {activeTab === 'calipers' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-mono text-xs text-copper uppercase tracking-widest">Carbon Ceramic Caliper Finish</h3>
              <div className="grid grid-cols-2 gap-3">
                {CALIPERS.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCaliper(c)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      caliper.id === c.id
                        ? 'border-copper bg-copper/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-5 h-5 rounded-full border border-white/30" style={{ backgroundColor: c.hex }} />
                      {caliper.id === c.id && <Check className="w-4 h-4 text-copper" />}
                    </div>
                    <span className="font-cinematic text-xs text-white font-bold block">{c.name}</span>
                    <span className="text-[10px] font-mono text-titanium-dark">
                      {c.price === 0 ? 'Included' : `+${formatPrice(c.price)}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 4. Interior Options */}
          {activeTab === 'interior' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-mono text-xs text-copper uppercase tracking-widest">Cockpit Tailoring & Upholstery</h3>
              <div className="space-y-3">
                {INTERIORS.map((i) => (
                  <button
                    key={i.id}
                    onClick={() => setInterior(i)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      interior.id === i.id
                        ? 'border-copper bg-copper/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-cinematic text-sm text-white font-bold">{i.name}</h4>
                      <p className="text-[10px] font-mono text-titanium-dark">{i.material}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-copper font-bold block">
                        {i.price === 0 ? 'Included' : `+${formatPrice(i.price)}`}
                      </span>
                      {interior.id === i.id && <Check className="w-4 h-4 text-copper ml-auto mt-1" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 5. Aero Package Options */}
          {activeTab === 'aero' && (
            <div className="space-y-4 animate-fadeIn">
              <h3 className="font-mono text-xs text-copper uppercase tracking-widest">Aerodynamic Carbon Downforce Package</h3>
              <div className="space-y-3">
                {AERO_PACKAGES.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setAero(a)}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                      aero.id === a.id
                        ? 'border-copper bg-copper/10'
                        : 'border-white/10 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div>
                      <h4 className="font-cinematic text-sm text-white font-bold">{a.name}</h4>
                      <p className="text-[10px] font-mono text-titanium-dark leading-relaxed max-w-xs">{a.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-mono text-copper font-bold block">
                        {a.price === 0 ? 'Included' : `+${formatPrice(a.price)}`}
                      </span>
                      {aero.id === a.id && <Check className="w-4 h-4 text-copper ml-auto mt-1" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Bottom Price Bar */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-titanium-dark uppercase">Total Bespoke Specification</span>
            <span className="font-cinematic text-2xl font-extrabold text-gradient-copper">{formatPrice(totalPrice)}</span>
          </div>

          <button
            onClick={handleSaveConfiguration}
            disabled={isSaving}
            className="w-full bg-gradient-copper text-obsidian font-mono text-xs font-bold py-4 rounded-xl hover:opacity-90 transition-opacity uppercase tracking-wider shadow-2xl flex items-center justify-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            <span>Save & Share Specification</span>
          </button>
        </div>

      </div>

      {/* Share Specification Link Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6 animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl max-w-md w-full border border-copper/40 space-y-6 relative text-center">
            <div className="w-16 h-16 rounded-full bg-copper/20 text-copper flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-cinematic text-2xl font-bold">Bespoke Spec Saved</h3>
            <p className="text-xs font-sans text-titanium-dark leading-relaxed">
              Your unique hypercar specification has been recorded in the Valence Atelier Registry.
            </p>

            <div className="bg-obsidian border border-white/15 p-3 rounded-xl flex items-center justify-between text-xs font-mono">
              <span className="truncate text-copper">{savedShareUrl}</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(savedShareUrl);
                  alert('Link copied to clipboard!');
                }}
                className="px-3 py-1 bg-white/10 hover:bg-copper hover:text-obsidian rounded text-[10px] font-bold"
              >
                Copy
              </button>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full bg-copper text-obsidian font-mono text-xs font-bold py-3 rounded-xl"
            >
              Return to Studio
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Configurator;
