import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
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

  const handleNav = useCallback((id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  }, [onNavigate]);

  return (
    <>
      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 navbar-glass ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>
            {/* Logo */}
            <motion.button
              onClick={() => handleNav('home')}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: '16px',
                color: 'white',
                flexShrink: 0,
              }}>
                D
              </div>
              <span style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: 'white',
                letterSpacing: '-0.02em',
              }}>
                Delverse<span style={{ color: '#6366f1' }}>Tech</span>
              </span>
            </motion.button>

            {/* Desktop Nav */}
            <nav style={{ display: 'none', gap: '32px' }} className="desktop-nav hidden md:flex">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <motion.button
                onClick={() => handleNav('contact')}
                className="btn-primary hidden md:inline-flex"
                style={{ fontSize: '13px', padding: '10px 20px' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get a Quote
              </motion.button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  display: 'flex',
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
                className="md:hidden"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="mobile-menu md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '16px 24px 24px' }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNav(link.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '12px 16px',
                      background: activeSection === link.id ? 'rgba(99,102,241,0.1)' : 'transparent',
                      border: 'none',
                      borderRadius: '8px',
                      color: activeSection === link.id ? '#6366f1' : '#9ca3af',
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
                  transition={{ delay: 0.35 }}
                >
                  Get a Quote
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Desktop nav styles via a style tag for the hidden class */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .hidden.md\\:flex { display: flex !important; }
          .hidden.md\\:inline-flex { display: inline-flex !important; }
          .md\\:hidden { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
