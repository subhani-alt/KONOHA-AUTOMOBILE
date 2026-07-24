import React, { useState, useRef } from 'react';
import { RotateCw, Maximize2, Sparkles } from 'lucide-react';

const Viewer360 = ({ images = [], vehicleName = '' }) => {
  const [rotationIndex, setRotationIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const containerRef = useRef(null);

  const galleryImages = images.length > 0 ? images : [
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85',
    'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1920&q=85',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=85',
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX));
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX);
    const diff = currentX - startX;

    if (Math.abs(diff) > 25) {
      if (diff > 0) {
        setRotationIndex((prev) => (prev + 1) % galleryImages.length);
      } else {
        setRotationIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      }
      setStartX(currentX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-[550px] bg-obsidian-card rounded-2xl border border-white/10 overflow-hidden select-none group">
      {/* 360 Indicator Badge */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-3 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-copper/30">
        <RotateCw className="w-4 h-4 text-copper animate-spin-slow" />
        <span className="text-xs uppercase tracking-widest font-mono text-titanium-light">
          Interactive 360° Studio View
        </span>
      </div>

      {/* Main Image Display */}
      <div
        ref={containerRef}
        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing relative"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <img
          src={galleryImages[rotationIndex]}
          alt={`${vehicleName} 360 view angle ${rotationIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60" />
      </div>

      {/* Rotation Control Bar */}
      <div className="absolute bottom-6 inset-x-6 z-20 flex items-center justify-between bg-black/70 backdrop-blur-xl px-6 py-3 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setRotationIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                rotationIndex === idx ? 'w-8 bg-copper' : 'w-3 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-mono text-titanium-dark uppercase">
          Angle {rotationIndex + 1} / {galleryImages.length}
        </span>
      </div>
    </div>
  );
};

export default Viewer360;
