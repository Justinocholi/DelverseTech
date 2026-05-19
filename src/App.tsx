import React, { useState, useEffect, useCallback } from 'react';
import './style.css';

import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import StatsSection from './sections/StatsSection';
import HowItWorksSection from './sections/HowItWorksSection';
import PortfolioSection from './sections/PortfolioSection';
import TestimonialsSection from './sections/TestimonialsSection';
import TeamSection from './sections/TeamSection';
import ContactSection from './sections/ContactSection';
import FooterSection from './sections/FooterSection';

const SECTION_IDS = ['home', 'about', 'services', 'process', 'portfolio', 'testimonials', 'team', 'contact'];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;

      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = useCallback((id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 68; // navbar height
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, []);

  return (
    <div style={{ background: '#0a0f1e', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar activeSection={activeSection} onNavigate={navigateTo} />

      <main>
        <HeroSection onNavigate={navigateTo} />
        <AboutSection />
        <StatsSection />
        <ServicesSection onNavigate={navigateTo} />
        <HowItWorksSection onNavigate={navigateTo} />
        <PortfolioSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
      </main>

      <FooterSection onNavigate={navigateTo} />
    </div>
  );
};

export default App;
