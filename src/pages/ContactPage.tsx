import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import ContactSection from '../sections/ContactSection';

const ContactPage: React.FC = () => {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Page hero */}
      <section style={{
        padding: 'clamp(60px,8vw,100px) 24px',
        background: 'linear-gradient(180deg,#0a0f1e 0%,#0d1424 100%)',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-indigo" style={{ width: '500px', height: '500px', top: '-150px', right: '-100px', opacity: 0.1 }} />
          <div className="orb orb-cyan" style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', opacity: 0.07 }} />
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        </div>
        <div ref={headRef} style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Contact Us</span>
            <h1 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
              Ready to Build Something<br /><span className="gradient-text">Extraordinary?</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: 'clamp(15px,2vw,18px)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
              We're here to answer your questions, discuss your vision, and build a plan to get you there. Every great project starts with a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reuse the contact form section (strip the id-section padding override) */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;
