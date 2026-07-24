import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Heart, ArrowRight, Volume2, Sliders } from 'lucide-react';
import SEO from '../components/common/SEO';
import { FALLBACK_VEHICLES } from '../services/api';
import { useWishlist } from '../context/WishlistContext';

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const { wishlist, toggleWishlist } = useWishlist();

  const categories = ['All', 'Quad-Turbo V12', 'Hybrid V10', 'Pure EV', 'Track Special'];

  let filtered = FALLBACK_VEHICLES.filter((v) => {
    const matchesCategory = selectedCategory === 'All' || v.category === selectedCategory;
    const matchesSearch =
      v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.engine.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortBy === 'price_low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price_high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'power') {
    filtered.sort((a, b) => b.horsepower - a.horsepower);
  }

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Hypercar Collection" description="Explore the full portfolio of Valence quad-turbo V12, hybrid electric, and solid-state hypercars." />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">
            Bespoke Engineering Portfolio
          </span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold tracking-tight">
            THE HYPERCAR COLLECTION
          </h1>
          <p className="text-sm font-sans text-titanium-dark leading-relaxed">
            Each model represents an uncompromised pinnacle of aerodynamic downforce, chassis rigidity, and extreme power output.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-mono px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-copper text-obsidian font-bold shadow-lg'
                    : 'bg-white/5 text-titanium-light hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-4 w-full lg:w-auto justify-end">
            <div className="relative flex-1 lg:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-copper" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models..."
                className="w-full bg-obsidian border border-white/15 rounded-xl py-2 pl-10 pr-4 text-xs text-white placeholder-titanium-dark focus:outline-none focus:border-copper font-sans"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-obsidian border border-white/15 rounded-xl py-2 px-3 text-xs text-titanium-light focus:outline-none focus:border-copper font-mono"
            >
              <option value="featured">Sort: Featured</option>
              <option value="power">Sort: Horsepower (High)</option>
              <option value="price_high">Sort: Price (High to Low)</option>
              <option value="price_low">Sort: Price (Low to High)</option>
            </select>
          </div>

        </div>

        {/* Hypercar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((vehicle) => {
            const isSaved = wishlist.includes(vehicle._id);
            return (
              <div
                key={vehicle._id}
                className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={vehicle.heroImage}
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-6 inset-x-6 flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-obsidian bg-copper px-3.5 py-1 rounded-full font-bold shadow-lg">
                      {vehicle.category}
                    </span>

                    <button
                      onClick={() => toggleWishlist(vehicle._id)}
                      className={`p-2.5 rounded-full backdrop-blur-md transition-colors ${
                        isSaved ? 'bg-copper text-obsidian' : 'bg-black/60 text-white hover:text-copper'
                      }`}
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="font-cinematic text-3xl font-bold text-white group-hover:text-copper transition-colors mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-xs font-sans text-titanium-dark leading-relaxed">
                      {vehicle.tagline}
                    </p>
                  </div>

                  {/* Telemetry Grid */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 text-center font-mono">
                    <div className="bg-white/5 p-3 rounded-xl">
                      <span className="text-[10px] text-titanium-dark block mb-0.5">HORSEPOWER</span>
                      <span className="text-sm text-copper font-bold">{vehicle.horsepower} HP</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl">
                      <span className="text-[10px] text-titanium-dark block mb-0.5">ACCELERATION</span>
                      <span className="text-sm text-white font-bold">{vehicle.acceleration}</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl">
                      <span className="text-[10px] text-titanium-dark block mb-0.5">TOP SPEED</span>
                      <span className="text-sm text-titanium-light font-bold">{vehicle.topSpeed}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <span className="text-[10px] font-mono text-titanium-dark block uppercase">Starting Commission</span>
                      <span className="font-mono text-xl font-bold text-copper">{vehicle.priceFormatted}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to="/configurator"
                        className="p-3 rounded-xl bg-white/5 hover:bg-copper/20 text-copper border border-copper/30 transition-colors"
                        title="Configure in 3D"
                      >
                        <Sliders className="w-4 h-4" />
                      </Link>

                      <Link
                        to={`/vehicle/${vehicle.slug}`}
                        className="inline-flex items-center gap-2 bg-gradient-copper text-obsidian font-mono text-xs font-bold py-3 px-5 rounded-xl hover:opacity-90 transition-opacity"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Collection;
