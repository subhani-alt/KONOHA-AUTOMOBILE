import React, { useState } from 'react';
import { Shield, Car, Users, MessageSquare, Sliders, Plus, Trash2, Edit, Check, Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import { FALLBACK_VEHICLES } from '../services/api';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('vehicles');
  const [vehiclesList, setVehiclesList] = useState(FALLBACK_VEHICLES);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newVehicle, setNewVehicle] = useState({
    name: '',
    category: 'Quad-Turbo V12',
    price: 3500000,
    priceFormatted: '$3,500,000',
    horsepower: 2000,
    acceleration: '1.8s',
    topSpeed: '420 km/h',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85',
    tagline: 'Custom Bespoke Allocation',
  });

  const handleAddVehicle = (e) => {
    e.preventDefault();
    const created = {
      ...newVehicle,
      _id: 'v-' + Date.now(),
      slug: newVehicle.name.toLowerCase().replace(/\s+/g, '-'),
    };
    setVehiclesList([created, ...vehiclesList]);
    setIsAddModalOpen(false);
  };

  const handleDelete = (id) => {
    setVehiclesList(vehiclesList.filter(v => v._id !== id));
  };

  return (
    <div className="min-h-screen bg-obsidian text-white pt-28 pb-24 px-6 lg:px-12">
      <SEO title="Admin CMS Dashboard" />

      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-copper font-mono text-xs uppercase mb-1">
              <Shield className="w-4 h-4" />
              <span>Valence Executive Systems</span>
            </div>
            <h1 className="font-cinematic text-3xl font-extrabold">ADMIN CMS MANAGEMENT</h1>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 bg-gradient-copper text-obsidian font-mono text-xs font-bold py-3 px-5 rounded-xl hover:opacity-90 transition-opacity"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Hypercar</span>
          </button>
        </div>

        {/* System Overview Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <span className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">TOTAL HYPERCARS</span>
            <span className="font-cinematic text-3xl font-bold text-copper">{vehiclesList.length}</span>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <span className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">CLIENT INQUIRIES</span>
            <span className="font-cinematic text-3xl font-bold text-white">42</span>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <span className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">3D BESPOKE SPECS</span>
            <span className="font-cinematic text-3xl font-bold text-gold">128</span>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <span className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">GAZETTE SUBSCRIBERS</span>
            <span className="font-cinematic text-3xl font-bold text-titanium-light">1,490</span>
          </div>
        </div>

        {/* Hypercar Management Table */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h3 className="font-cinematic text-xl font-bold">Active Hypercar Registry</h3>
            <span className="text-xs font-mono text-titanium-dark">{vehiclesList.length} Active Records</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] font-mono text-titanium-dark uppercase">
                  <th className="p-4">Model Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Horsepower</th>
                  <th className="p-4">Price</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs font-mono">
                {vehiclesList.map((v) => (
                  <tr key={v._id} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-cinematic font-bold text-sm text-white flex items-center gap-3">
                      <img src={v.heroImage} alt="" className="w-10 h-7 rounded object-cover" />
                      <span>{v.name}</span>
                    </td>
                    <td className="p-4 text-copper">{v.category}</td>
                    <td className="p-4">{v.horsepower} HP</td>
                    <td className="p-4">{v.priceFormatted}</td>
                    <td className="p-4 text-right space-x-2">
                      <button
                        onClick={() => handleDelete(v._id)}
                        className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
                        title="Delete Hypercar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Add Vehicle Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6 animate-fadeIn">
          <div className="glass-panel p-8 rounded-3xl max-w-lg w-full border border-copper/40 space-y-6 relative">
            <div className="flex items-center justify-between">
              <h3 className="font-cinematic text-2xl font-bold">Add Hypercar Model</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-titanium-dark hover:text-white">✕</button>
            </div>

            <form onSubmit={handleAddVehicle} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Model Name</label>
                <input
                  type="text"
                  required
                  value={newVehicle.name}
                  onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                  placeholder="VALENCE APEX GTR"
                  className="w-full bg-obsidian border border-white/15 rounded-xl py-2.5 px-4 text-xs text-white focus:outline-none focus:border-copper font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Category</label>
                  <select
                    value={newVehicle.category}
                    onChange={(e) => setNewVehicle({ ...newVehicle, category: e.target.value })}
                    className="w-full bg-obsidian border border-white/15 rounded-xl py-2.5 px-4 text-xs text-white focus:outline-none focus:border-copper font-mono"
                  >
                    <option value="Quad-Turbo V12">Quad-Turbo V12</option>
                    <option value="Hybrid V10">Hybrid V10</option>
                    <option value="Pure EV">Pure EV</option>
                    <option value="Track Special">Track Special</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Horsepower</label>
                  <input
                    type="number"
                    value={newVehicle.horsepower}
                    onChange={(e) => setNewVehicle({ ...newVehicle, horsepower: Number(e.target.value) })}
                    className="w-full bg-obsidian border border-white/15 rounded-xl py-2.5 px-4 text-xs text-white focus:outline-none focus:border-copper font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-mono text-titanium-dark uppercase block mb-1">Commission Price Formatted</label>
                <input
                  type="text"
                  value={newVehicle.priceFormatted}
                  onChange={(e) => setNewVehicle({ ...newVehicle, priceFormatted: e.target.value })}
                  className="w-full bg-obsidian border border-white/15 rounded-xl py-2.5 px-4 text-xs text-white focus:outline-none focus:border-copper font-mono"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-copper text-obsidian font-mono text-xs font-bold py-3.5 rounded-xl uppercase tracking-wider mt-4"
              >
                Create Model Record
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
