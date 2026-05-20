import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

const NAV_LINKS: { id: Page; label: string }[] = [
  { id: 'home',         label: 'Home' },
  { id: 'services',     label: 'Services' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'portfolio',    label: 'Portfolio' },
  { id: 'about',        label: 'About Us' },
  { id: 'contact',      label: 'Contact Us' },
];

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>

            {/* Logo — circle-logo.PNG, matching original size */}
            <button
              onClick={() => handleNav('home')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
            >
              <img
                src="/circle-logo.PNG"
                alt="Delverse Technologies"
                style={{ height: '70px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </button>

            {/* Desktop nav links */}
            <nav className="desktop-nav" style={{ display: 'flex', gap: '40px' }}>
              {NAV_LINKS.map(link => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500 }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <motion.button
              onClick={() => handleNav('contact')}
              className="btn-primary desktop-cta"
              style={{ fontSize: '14px', padding: '10px 22px' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Quote
            </motion.button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-toggle"
              style={{
                display: 'none', alignItems: 'center', justifyContent: 'center',
                width: '40px', height: '40px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px', color: 'white', cursor: 'pointer',
              }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '12px 16px 20px' }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      padding: '11px 14px', marginBottom: '4px',
                      background: currentPage === link.id ? 'rgba(99,102,241,0.12)' : 'transparent',
                      border: 'none', borderRadius: '8px',
                      color: currentPage === link.id ? '#6366f1' : '#9ca3af',
                      fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 500, cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => handleNav('contact')}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
                >
                  Get a Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
