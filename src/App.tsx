import React, { useState, useCallback } from 'react';
import './style.css';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import TechnologiesPage from './pages/TechnologiesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FooterSection from './sections/FooterSection';

export type Page = 'home' | 'services' | 'technologies' | 'portfolio' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ background: '#0a0f1e', minHeight: '100vh', overflowX: 'hidden' }}>
      <Navbar currentPage={currentPage} onNavigate={navigate} />

      <main>
        {currentPage === 'home'         && <HomePage onNavigate={navigate} />}
        {currentPage === 'services'     && <ServicesPage onNavigate={navigate} />}
        {currentPage === 'technologies' && <TechnologiesPage />}
        {currentPage === 'portfolio'    && <PortfolioPage onNavigate={navigate} />}
        {currentPage === 'about'        && <AboutPage onNavigate={navigate} />}
        {currentPage === 'contact'      && <ContactPage />}
      </main>

      <FooterSection onNavigate={navigate} />
    </div>
  );
};

export default App;
