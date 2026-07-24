import axios from 'axios';

const API_BASE = '/api';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('konoha_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fallback Dataset for KONOHA AUTOMOBILI
export const FALLBACK_VEHICLES = [
  {
    _id: 'v1',
    name: 'KONOHA APEX STRATOS',
    slug: 'konoha-apex-stratos',
    tagline: 'The Unrivaled Pinnacle of Quad-Turbo V12 Engineering',
    category: 'Quad-Turbo V12',
    price: 3850000,
    priceFormatted: '$3,850,000',
    acceleration: '1.74s',
    topSpeed: '445 km/h',
    horsepower: 2150,
    torque: '2,250 Nm',
    engine: '6.5L Quad-Turbocharged Bespoke V12 + Quad Axial Motors',
    transmission: '7-Speed Dual-Clutch Sequential Kinetic Shift',
    weight: '1,280 kg',
    downforce: '1,350 kg @ 300 km/h',
    description: 'Forged from aerospace titanium and pre-impregnated carbon fiber, the Apex Stratos redefines physical limits. Featuring active ground-effect aerodynamics, quad-electric boost motors, and an uninhibited 11,500 RPM redline.',
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85',
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=85',
    ],
    specsArray: [
      { label: '0-100 km/h', value: '1.74 seconds' },
      { label: 'Top Speed', value: '445 km/h (276 mph)' },
      { label: 'Power Output', value: '2,150 HP @ 10,800 RPM' },
      { label: 'Monocoque Chassis', value: 'Full T1100G Dry Carbon Fiber' },
      { label: 'Braking System', value: '410mm Carbon Ceramic Matrix (CCM-R)' },
      { label: 'Aerodynamics', value: 'Active Rear Diffuser & Twin Venturi Tunnels' },
    ],
    audioExhaustUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3',
    featured: true,
  },
  {
    _id: 'v2',
    name: 'KONOHA CHRONOS GT',
    slug: 'konoha-chronos-gt',
    tagline: 'Sculpted Grand Touring Transformed into Kinetic Art',
    category: 'Hybrid V10',
    price: 2950000,
    priceFormatted: '$2,950,000',
    acceleration: '2.1s',
    topSpeed: '410 km/h',
    horsepower: 1650,
    torque: '1,800 Nm',
    engine: '5.2L Naturally Aspirated V10 + Dual Hybrid E-Axles',
    transmission: '8-Speed Seamless Shift Dual-Clutch',
    weight: '1,390 kg',
    downforce: '950 kg @ 300 km/h',
    description: 'Harmonizing luxury continent-crossing comfort with brutal track efficiency. The Chronos GT seamlessly merges a roaring 10,000 RPM NA V10 soundtrack with instant electric motor torque deployment.',
    heroImage: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1920&q=85',
    images: [
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1920&q=85',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
    ],
    specsArray: [
      { label: '0-100 km/h', value: '2.1 seconds' },
      { label: 'Top Speed', value: '410 km/h' },
      { label: 'Power Output', value: '1,650 HP' },
    ],
    audioExhaustUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3',
    featured: true,
  },
  {
    _id: 'v3',
    name: 'KONOHA NEBULA EV',
    slug: 'konoha-nebula-ev',
    tagline: 'Silent Thunder: 2,400 HP Pure Electric Velocity',
    category: 'Pure EV',
    price: 3400000,
    priceFormatted: '$3,400,000',
    acceleration: '1.65s',
    topSpeed: '430 km/h',
    horsepower: 2400,
    torque: '2,600 Nm',
    engine: 'Quad Motor Solid-State EV Drive Core',
    transmission: 'Direct-Drive 2-Speed Torque Multiplier',
    weight: '1,450 kg',
    downforce: '1,100 kg @ 300 km/h',
    description: 'The futuristic apex of electric performance. Engineered with solid-state cell technology, active plasma aerodynamic dampers, and zero local emissions.',
    heroImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=85',
    ],
    specsArray: [
      { label: '0-100 km/h', value: '1.65 seconds' },
      { label: 'Top Speed', value: '430 km/h' },
      { label: 'Power Output', value: '2,400 HP' },
    ],
    audioExhaustUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3',
    featured: true,
  },
  {
    _id: 'v4',
    name: 'KONOHA PHANTOM E-HYBRID',
    slug: 'konoha-phantom-e-hybrid',
    tagline: 'Track-Focused Aerodynamic Weapon',
    category: 'Track Special',
    price: 4200000,
    priceFormatted: '$4,200,000',
    acceleration: '1.80s',
    topSpeed: '425 km/h',
    horsepower: 1980,
    torque: '2,100 Nm',
    engine: 'Twin-Turbocharged V8 + Kinetic Energy Recovery System (KERS)',
    transmission: '7-Speed Pneumatic Racing Sequential',
    weight: '1,190 kg',
    downforce: '1,600 kg @ 300 km/h',
    description: 'Limited to just 15 examples globally. The Phantom E-Hybrid is engineered purely for circuit dominance and high-downforce cornering speeds exceeding 3.2G.',
    heroImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=85',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=85',
    ],
    specsArray: [
      { label: '0-100 km/h', value: '1.80 seconds' },
      { label: 'Lateral Accel', value: '3.4 G' },
      { label: 'Power Output', value: '1,980 HP' },
    ],
    audioExhaustUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3',
    featured: false,
  },
];

export const FALLBACK_NEWS = [
  {
    _id: 'n1',
    title: 'KONOHA Automobili Unveils World-Record Quad-Turbo V12 Architecture in Geneva',
    slug: 'konoha-unveils-quad-turbo-v12-geneva',
    category: 'Engineering',
    excerpt: 'Featuring 3D-printed titanium manifolds and 2,150 HP, Konoha pushes hypercar physics into unchartered territory.',
    content: 'At an exclusive private gala on Lake Geneva, Konoha Automobili revealed its revolutionary Quad-Turbo V12 powertrain designed entirely in-house by our engineering team...',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    readTime: '5 min read',
    createdAt: '2026-06-15',
  },
  {
    _id: 'n2',
    title: 'The Art of Monocoque Weaving: Inside the Konoha Carbon Atelier',
    slug: 'art-of-monocoque-weaving-konoha-atelier',
    category: 'Launch',
    excerpt: 'An exclusive look behind the scenes at how our carbon artisans hand-lay T1100 dry weave for maximum torsional rigidity.',
    content: 'Torsional stiffness of 65,000 Nm/degree requires extreme precision. Inside the Konoha Atelier, master craftsmen spend over 400 hours laying up individual carbon sheets...',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    readTime: '4 min read',
    createdAt: '2026-05-20',
  },
];

export const FALLBACK_DEALERS = [
  {
    _id: 'd1',
    name: 'Konoha Atelier Monaco',
    city: 'Monte Carlo',
    country: 'Monaco',
    region: 'Europe',
    address: 'Place du Casino, 98000 Monte Carlo',
    phone: '+377 98 98 00 00',
    email: 'monaco@konoha-automobili.com',
    coordinates: { lat: 43.7384, lng: 7.4246 },
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
  },
  {
    _id: 'd2',
    name: 'Konoha Private Showroom Mayfair',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    address: '14 Berkeley Square, Mayfair, London W1J 6EB',
    phone: '+44 20 7946 0912',
    email: 'london@konoha-automobili.com',
    coordinates: { lat: 51.509865, lng: -0.118092 },
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
  },
];

export default api;
