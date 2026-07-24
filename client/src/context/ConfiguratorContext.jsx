import React, { createContext, useContext, useState, useMemo } from 'react';

const ConfiguratorContext = createContext();

export const PAINTS = [
  { id: 'copper', name: 'Deep Copper Metallic', hex: '#C87D55', finish: 'Metallic Gloss', price: 0 },
  { id: 'obsidian', name: 'Obsidian Matte Black', hex: '#111111', finish: 'Satin Matte', price: 45000 },
  { id: 'gold', name: 'Champagne Gold Pearl', hex: '#D4AF37', finish: 'Pearl Metallic', price: 65000 },
  { id: 'silver', name: 'Liquid Titanium Silver', hex: '#C0C0C0', finish: 'High Refinement Gloss', price: 35000 },
  { id: 'emerald', name: 'Monaco Emerald Metallic', hex: '#004D40', finish: 'Deep Tint Gloss', price: 55000 },
  { id: 'crimson', name: 'Rosso Speed Crimson', hex: '#8B0000', finish: 'Triple Layer Metallic', price: 50000 },
];

export const WHEELS = [
  { id: 'aero-21', name: '21" Forged Aero Turbine Alloy', finish: 'Titanium Brushed', price: 0 },
  { id: 'y-spoke-21', name: '21"/22" Staggered Y-Spoke Forged', finish: 'Obsidian Gloss Black', price: 28000 },
  { id: 'carbon-21', name: '21" Lightweight Carbon Weave Wheels', finish: 'Full Carbon Fiber', price: 75000 },
];

export const CALIPERS = [
  { id: 'gold', name: 'Champagne Gold Anodized', hex: '#D4AF37', price: 0 },
  { id: 'copper', name: 'Deep Copper Heat Coat', hex: '#C87D55', price: 8000 },
  { id: 'black', name: 'Carbon Black Matte', hex: '#1A1A1A', price: 5000 },
  { id: 'acid-yellow', name: 'Acid Racing Yellow', hex: '#E6C566', price: 10000 },
];

export const INTERIORS = [
  { id: 'cognac', name: 'Cognac Saddle Leather & Matte Carbon', material: 'Semi-Aniline Nappa Leather', accentColor: '#C87D55', price: 0 },
  { id: 'obsidian-alcantara', name: 'Full Obsidian Alcantara Track Spec', material: 'Ultra-Lightweight Alcantara', accentColor: '#333333', price: 32000 },
  { id: 'silk-white', name: 'Monaco Silk White & Titanium Weave', material: 'Bespoke White Leather', accentColor: '#E2E8F0', price: 48000 },
];

export const AERO_PACKAGES = [
  { id: 'standard', name: 'Active Aerodynamic Pack', description: 'Active Rear Diffuser & Retractable Airbrake', price: 0 },
  { id: 'track-carbon', name: 'Apex Track Carbon Aero Spec', description: 'Dual Venturi Front Splitter, High-Downforce Rear Wing & Roof Scoop', price: 120000 },
];

export const ConfiguratorProvider = ({ children }) => {
  const [selectedVehicle, setSelectedVehicle] = useState({
    _id: 'v1',
    name: 'VALENCE APEX STRATOS',
    basePrice: 3850000,
  });

  const [paint, setPaint] = useState(PAINTS[0]);
  const [wheel, setWheel] = useState(WHEELS[0]);
  const [caliper, setCaliper] = useState(CALIPERS[0]);
  const [interior, setInterior] = useState(INTERIORS[0]);
  const [aero, setAero] = useState(AERO_PACKAGES[0]);

  const totalPrice = useMemo(() => {
    const base = selectedVehicle.basePrice || 3850000;
    return base + paint.price + wheel.price + caliper.price + interior.price + aero.price;
  }, [selectedVehicle, paint, wheel, caliper, interior, aero]);

  const formatPrice = (price) => {
    return '$' + price.toLocaleString('en-US');
  };

  return (
    <ConfiguratorContext.Provider
      value={{
        selectedVehicle,
        setSelectedVehicle,
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
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => useContext(ConfiguratorContext);
