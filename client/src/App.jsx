import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from '@studio-freight/lenis';

import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { ConfiguratorProvider } from './context/ConfiguratorContext';

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';

import Home from './pages/Home';
import Collection from './pages/Collection';
import VehicleDetails from './pages/VehicleDetails';
import Configurator from './pages/Configurator';
import Technology from './pages/Technology';
import Craftsmanship from './pages/Craftsmanship';
import Heritage from './pages/Heritage';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Gallery from './pages/Gallery';
import DealerLocator from './pages/DealerLocator';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-obsidian text-white flex flex-col justify-between selection:bg-copper selection:text-white">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/vehicle/:identifier" element={<VehicleDetails />} />
          <Route path="/configurator" element={<Configurator />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/craftsmanship" element={<Craftsmanship />} />
          <Route path="/heritage" element={<Heritage />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/dealers" element={<DealerLocator />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <WishlistProvider>
          <ConfiguratorProvider>
            <Router>
              <AppContent />
            </Router>
          </ConfiguratorProvider>
        </WishlistProvider>
      </AuthProvider>
    </HelmetProvider>
  );
};

export default App;
