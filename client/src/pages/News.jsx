import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import SEO from '../components/common/SEO';
import { FALLBACK_NEWS } from '../services/api';

const News = () => {
  const [category, setCategory] = useState('All');
  const categories = ['All', 'Launch', 'Engineering', 'Motorsport', 'Exhibition'];

  const filtered = category === 'All' ? FALLBACK_NEWS : FALLBACK_NEWS.filter(n => n.category === category);

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title="Valence Gazette & Press Dispatches" description="Official announcements, world-premiere hypercar launches, and engineering technical papers." />

      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-[0.3em] block">
            Official Dispatches
          </span>
          <h1 className="font-cinematic text-4xl md:text-6xl font-extrabold tracking-tight">
            VALENCE GAZETTE
          </h1>
        </div>

        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`text-xs font-mono px-4 py-2 rounded-xl transition-all ${
                category === cat ? 'bg-gradient-copper text-obsidian font-bold' : 'bg-white/5 text-titanium-light'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((article) => (
            <div key={article._id} className="glass-panel rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group">
              <div className="h-64 overflow-hidden relative">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-black/70 text-copper text-[10px] font-mono uppercase px-3 py-1 rounded-full border border-copper/30">
                  {article.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-mono text-titanium-dark">{article.createdAt} • {article.readTime}</span>
                <h3 className="font-cinematic text-xl font-bold group-hover:text-copper transition-colors">{article.title}</h3>
                <p className="text-xs text-titanium-dark font-sans leading-relaxed">{article.excerpt}</p>
                <Link to={`/news/${article.slug}`} className="inline-flex items-center gap-2 text-xs font-mono text-copper pt-2">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
