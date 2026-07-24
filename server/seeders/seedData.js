const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const Vehicle = require('../models/Vehicle');
const News = require('../models/News');
const Dealer = require('../models/Dealer');

dotenv.config();

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/valence_automobili';

const vehicles = [
  {
    name: 'VALENCE APEX STRATOS',
    slug: 'valence-apex-stratos',
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
    description: 'Forged from aerospace titanium and pre-impregnated carbon fiber, the Apex Stratos redefines physical limits. Featuring active ground-effect aerodynamics, quad-electric boost motors, and an uninhibited 11,500 RPM atmospheric redline.',
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
    standardFeatures: [
      'Telemetry System with Augmented Reality Track HUD',
      'Bespoke Titanium Inconel 3D-Printed Exhaust System',
      'Variable Torque Vectoring with Drift & Apex Modes',
      'Custom Fitted Alcantara & Saddle Cognac Racing Bucket Seats',
    ],
  },
  {
    name: 'VALENCE CHRONOS GT',
    slug: 'valence-chronos-gt',
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
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85',
    ],
    specsArray: [
      { label: '0-100 km/h', value: '2.1 seconds' },
      { label: 'Top Speed', value: '410 km/h' },
      { label: 'Power Output', value: '1,650 HP' },
      { label: 'Battery Capacity', value: '28 kWh 800V Ultra-Fast Architecture' },
      { label: 'Audio System', value: 'Bespoke 18-Speaker Titanium Sound Architecture' },
    ],
    audioExhaustUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3',
    featured: true,
    standardFeatures: [
      'Glassmorphic Dual High-Resolution Control Cockpit',
      'Active Electrochromic Panoramic Roof',
      'Bespoke Machined Aluminum Switchgear',
    ],
  },
  {
    name: 'VALENCE NEBULA EV',
    slug: 'valence-nebula-ev',
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
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=85',
    ],
    specsArray: [
      { label: '0-100 km/h', value: '1.65 seconds' },
      { label: 'Top Speed', value: '430 km/h' },
      { label: 'Power Output', value: '2,400 HP' },
      { label: 'Range', value: '620 km WLTP' },
    ],
    audioExhaustUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3',
    featured: true,
    standardFeatures: [
      '800V Ultra-Fast 350kW Flash Charging System',
      'Sub-Zero Active Battery Liquid Conditioning',
    ],
  },
  {
    name: 'VALENCE PHANTOM E-HYBRID',
    slug: 'valence-phantom-e-hybrid',
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
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85',
    ],
    specsArray: [
      { label: '0-100 km/h', value: '1.80 seconds' },
      { label: 'Lateral Acceleration', value: '3.4 G' },
      { label: 'Power Output', value: '1,980 HP' },
    ],
    audioExhaustUrl: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c6a282f1.mp3?filename=car-engine-rev-105260.mp3',
    featured: false,
    standardFeatures: [
      'Pneumatic Air-Jack Quick Lift System',
      'FIA Carbon Safety Cell with Integrated Roll-Cage',
    ],
  },
];

const newsArticles = [
  {
    title: 'VALENCE Automobili Unveils World-Record Quad-Turbo V12 Architecture in Geneva',
    slug: 'valence-unveils-quad-turbo-v12-geneva',
    category: 'Engineering',
    excerpt: 'Featuring 3D-printed titanium manifolds and 2,150 HP, Valence pushes hypercar physics into unchartered territory.',
    content: 'At an exclusive private gala on Lake Geneva, Valence Automobili revealed its revolutionary Quad-Turbo V12 powertrain designed entirely in-house by our engineering team in Sant’Agata Bolognese. The engine achieves a specific power density unmatched in modern automotive history...',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    readTime: '5 min read',
  },
  {
    title: 'The Art of Monocoque Weaving: Inside the Valence Carbon Atelier',
    slug: 'art-of-monocoque-weaving-valence-atelier',
    category: 'Launch',
    excerpt: 'An exclusive look behind the scenes at how our carbon artisans hand-lay T1100 dry weave for maximum torsional rigidity.',
    content: 'Torsional stiffness of 65,000 Nm/degree requires extreme precision. Inside the Valence Atelier, master craftsmen spend over 400 hours laying up individual carbon sheets in vacuum autoclaves to create the Apex Stratos tub...',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    readTime: '4 min read',
  },
];

const dealers = [
  {
    name: 'Valence Atelier Monaco',
    city: 'Monte Carlo',
    country: 'Monaco',
    region: 'Europe',
    address: 'Place du Casino, 98000 Monte Carlo',
    phone: '+377 98 98 00 00',
    email: 'monaco@valence-automobili.com',
    coordinates: { lat: 43.7384, lng: 7.4246 },
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Valence Private Showroom Mayfair',
    city: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    address: '14 Berkeley Square, Mayfair, London W1J 6EB',
    phone: '+44 20 7946 0912',
    email: 'london@valence-automobili.com',
    coordinates: { lat: 51.509865, lng: -0.118092 },
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Valence Concierge Dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East & Africa',
    address: 'DIFC Gate Village, Building 3, Dubai',
    phone: '+971 4 362 7000',
    email: 'dubai@valence-automobili.com',
    coordinates: { lat: 25.2048, lng: 55.2708 },
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Valence Beverly Hills Gallery',
    city: 'Los Angeles',
    country: 'United States',
    region: 'Americas',
    address: '9604 Wilshire Blvd, Beverly Hills, CA 90212',
    phone: '+1 310 555 0199',
    email: 'beverlyhills@valence-automobili.com',
    coordinates: { lat: 34.0696, lng: -118.4053 },
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('[SEED] Connected to MongoDB...');

    await User.deleteMany();
    await Vehicle.deleteMany();
    await News.deleteMany();
    await Dealer.deleteMany();

    const adminUser = await User.create({
      name: 'Valence Executive Concierge',
      email: 'admin@valence.com',
      password: 'adminpassword123',
      role: 'admin',
    });

    console.log('[SEED] Created Admin User: admin@valence.com / adminpassword123');

    await Vehicle.insertMany(vehicles);
    console.log(`[SEED] Created ${vehicles.length} Hypercars`);

    await News.insertMany(newsArticles);
    console.log(`[SEED] Created ${newsArticles.length} News Articles`);

    await Dealer.insertMany(dealers);
    console.log(`[SEED] Created ${dealers.length} Showrooms`);

    console.log('[SEED] Database Seed Complete!');
    process.exit(0);
  } catch (error) {
    console.error('[SEED] Error seeding database:', error.message);
    process.exit(1);
  }
};

if (require.main === module) {
  seedDB();
}
