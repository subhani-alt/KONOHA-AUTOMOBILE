import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Share2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import { FALLBACK_NEWS } from '../services/api';

const NewsDetail = () => {
  const { slug } = useParams();
  const article = FALLBACK_NEWS.find(n => n.slug === slug) || FALLBACK_NEWS[0];

  return (
    <div className="min-h-screen bg-obsidian text-white pt-32 pb-24 px-6 lg:px-12">
      <SEO title={article.title} description={article.excerpt} image={article.image} />

      <div className="max-w-4xl mx-auto space-y-8">
        <Link to="/news" className="inline-flex items-center gap-2 text-xs font-mono text-copper hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Gazette Articles</span>
        </Link>

        <div className="space-y-4">
          <span className="text-xs font-mono text-copper uppercase tracking-widest">{article.category}</span>
          <h1 className="font-cinematic text-3xl md:text-5xl font-bold">{article.title}</h1>
          <div className="flex items-center gap-4 text-xs font-mono text-titanium-dark border-y border-white/10 py-3">
            <span>{article.createdAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {article.readTime}</span>
          </div>
        </div>

        <div className="h-96 rounded-2xl overflow-hidden border border-white/10">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert max-w-none text-titanium-light font-sans leading-relaxed text-sm md:text-base space-y-6">
          <p className="text-lg font-cinematic text-copper">{article.excerpt}</p>
          <p>{article.content}</p>
          <p>Engineering teams spent over 18 months refining the aerodynamic venturi profile in computational fluid dynamics (CFD) simulation before validating physical wind-tunnel telemetry in Stuttgart.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
