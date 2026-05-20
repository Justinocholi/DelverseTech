import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

const NAV_LINKS: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'technologies', label: 'Technologies' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollTop > 20);
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.header
        className={`navbar-glass ${scrolled ? 'scrolled' : ''}`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

            {/* Logo — real logo image */}
            <motion.button
              onClick={() => handleNav('home')}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src="/logo.png"
                alt="DelverseTech Logo"
                style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </motion.button>

            {/* Desktop Nav */}
            <nav style={{ display: 'flex', gap: '28px' }} className="desktop-nav">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`nav-link ${currentPage === link.id ? 'active' : ''}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + mobile toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <motion.button
                onClick={() => handleNav('contact')}
                className="btn-primary desktop-cta"
                style={{ fontSize: '13px', padding: '10px 20px' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get a Quote
              </motion.button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="mobile-toggle"
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
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
              <div style={{ padding: '16px 24px 24px' }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 16px',
                      background: currentPage === link.id ? 'rgba(99,102,241,0.1)' : 'transparent',
                      border: 'none',
                      borderRadius: '8px',
                      color: currentPage === link.id ? '#6366f1' : '#9ca3af',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      marginBottom: '4px',
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.button
                  onClick={() => handleNav('contact')}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '12px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
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
