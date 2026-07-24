import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, Heart, User, Sliders } from 'lucide-react';
import MegaMenu from './MegaMenu';
import SearchOverlay from './SearchOverlay';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const { wishlist } = useWishlist();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMegaMenuOpen(false);
    setSearchOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 h-[80px] flex items-center px-6 lg:px-16 ${
          scrolled || megaMenuOpen
            ? 'bg-obsidian/90 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          
          {/* Left: MENU Button (Bugatti Style) */}
          <button
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className="flex items-center gap-3 text-xs font-brand tracking-[0.25em] text-white hover:text-copper uppercase transition-all group"
          >
            <div className="flex flex-col gap-1 w-5">
              <span className={`h-0.5 bg-current transition-transform duration-300 ${megaMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`h-0.5 bg-current transition-opacity duration-300 ${megaMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-current transition-transform duration-300 ${megaMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
            <span>MENU</span>
          </button>

          {/* Center: KONOHA Brand Name Logo (Bugatti Style) */}
          <Link to="/" className="flex flex-col items-center group">
            <span className="font-brand text-2xl lg:text-3xl font-extrabold tracking-[0.35em] text-white group-hover:text-copper transition-colors uppercase">
              KONOHA
            </span>
          </Link>

          {/* Right: STORE / CONFIGURATOR Actions (Bugatti Style) */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden md:flex items-center gap-1.5 text-xs font-brand tracking-widest text-titanium-light hover:text-white uppercase transition-colors"
            >
              <Search className="w-4 h-4 text-copper" />
            </button>

            <Link
              to="/collection"
              className="flex items-center gap-2 text-xs font-brand tracking-[0.2em] text-white hover:text-copper uppercase transition-all"
            >
              <span>STORE</span>
              <ShoppingBag className="w-4 h-4 text-copper" />
              {wishlist.length > 0 && (
                <span className="w-4 h-4 bg-copper text-obsidian font-mono text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <Link
              to={user ? (user.role === 'admin' ? '/admin' : '/login') : '/login'}
              className="hidden md:block text-titanium-light hover:text-white transition-colors"
            >
              <User className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </header>

      {/* Mega Menu Overlay */}
      <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} />

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;
