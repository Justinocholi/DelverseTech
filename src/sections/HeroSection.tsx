import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Zap, Shield, Brain } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';
import { Page } from '../App';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

const ROTATING_WORDS = ['Intelligence', 'Innovation', 'Security', 'Performance', 'Excellence'];

const FloatingCard: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
  style?: React.CSSProperties;
  delay?: number;
}> = ({ icon, label, value, color, style, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: delay + 1, duration: 0.6 }}
    className="float"
    style={{
      position: 'absolute',
      background: 'rgba(10,15,30,0.85)',
      backdropFilter: 'blur(20px)',
      border: `1px solid ${color}30`,
      borderRadius: '12px',
      padding: '14px 18px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: `0 0 30px ${color}20`,
      zIndex: 3,
      ...style,
    }}
  >
    <div style={{
      width: '36px', height: '36px', borderRadius: '8px',
      background: `${color}20`, display: 'flex', alignItems: 'center',
      justifyContent: 'center', color, flexShrink: 0,
    }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: '11px', color: '#6b7280', fontFamily: 'Inter, sans-serif', marginBottom: '2px' }}>{label}</div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>{value}</div>
    </div>
  </motion.div>
);

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayWord, setDisplayWord] = useState(ROTATING_WORDS[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(ROTATING_WORDS[0].length);

  useEffect(() => {
    const word = ROTATING_WORDS[wordIndex];
    const delay = isDeleting ? 60 : charIndex === word.length ? 2000 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < word.length) {
          setDisplayWord(word.slice(0, charIndex + 1));
          setCharIndex(c => c + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setDisplayWord(word.slice(0, charIndex - 1));
          setCharIndex(c => c - 1);
        } else {
          setIsDeleting(false);
          setWordIndex(i => (i + 1) % ROTATING_WORDS.length);
        }
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [wordIndex, charIndex, isDeleting]);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>

      {/* ── Layer 1: Cinematic video background ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          filter: 'brightness(0.35) saturate(0.7)',
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* ── Layer 2: Dark gradient overlay on top of video ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        background: `
          linear-gradient(180deg,
            rgba(10,15,30,0.60) 0%,
            rgba(10,15,30,0.40) 40%,
            rgba(10,15,30,0.55) 70%,
            rgba(10,15,30,0.95) 100%
          ),
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.18) 0%, transparent 70%)
        `,
      }} />

      {/* ── Layer 3: Particle canvas ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <ParticleBackground />
      </div>

      {/* ── Layer 4: Grid dot pattern ── */}
      <div className="grid-pattern" style={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.25, pointerEvents: 'none' }} />

      {/* ── Layer 5: Content ── */}
      <div style={{
        position: 'relative',
        zIndex: 4,
        maxWidth: '1280px',
        width: '100%',
        padding: '0 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '96px',
      }}>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label"
          style={{ marginBottom: '28px' }}
        >
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#6366f1', flexShrink: 0,
            boxShadow: '0 0 8px #6366f1',
          }} />
          Next-Generation Technology Solutions
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{ marginBottom: '16px', maxWidth: '920px' }}
        >
          <span style={{ color: 'white' }}>We Build</span>
          <br />
          <span className="gradient-text" style={{ display: 'inline-block', minWidth: '300px' }}>
            {displayWord}
            <span style={{
              display: 'inline-block', width: '3px', height: '0.85em',
              background: '#6366f1', marginLeft: '4px',
              verticalAlign: 'middle',
              animation: 'blink 1s step-end infinite',
            }} />
          </span>
          <br />
          <span style={{ color: 'white' }}>Into Reality</span>
        </motion.h1>

        <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            fontSize: 'clamp(16px,2.5vw,20px)', color: '#c4c9d4',
            maxWidth: '640px', lineHeight: 1.7,
            marginBottom: '40px', fontFamily: 'Inter, sans-serif',
          }}
        >
          DelverseTech engineers elite AI systems, impenetrable security architectures,
          and world-class software that propels forward-thinking companies into the future.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '60px' }}
        >
          <motion.button className="btn-primary" onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            style={{ fontSize: '15px', padding: '16px 32px' }}>
            Start Your Project <ArrowRight size={16} />
          </motion.button>
          <motion.button className="btn-secondary" onClick={() => onNavigate('portfolio')}
            whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            style={{ fontSize: '15px', padding: '16px 32px' }}>
            View Our Work
          </motion.button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center',
            padding: '24px 32px',
            background: 'rgba(10,15,30,0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(99,102,241,0.15)',
            borderRadius: '16px',
          }}
        >
          {[
            { num: '50+', label: 'Projects Delivered' },
            { num: '30+', label: 'Happy Clients' },
            { num: '5+', label: 'Years Experience' },
            { num: '99%', label: 'Client Satisfaction' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', fontWeight: 700,
                background: 'linear-gradient(135deg,#6366f1,#06b6d4)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>{s.num}</div>
              <div style={{ fontSize: '12px', color: '#9ca3af', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating metric cards */}
      <FloatingCard icon={<Brain size={18} />} label="AI Models Deployed" value="24 Active Systems"
        color="#6366f1" style={{ top: '25%', left: '3%' }} delay={0.2} />
      <FloatingCard icon={<Shield size={18} />} label="Security Rating" value="Enterprise Grade"
        color="#10b981" style={{ top: '35%', right: '3%' }} delay={0.4} />
      <FloatingCard icon={<Zap size={18} />} label="Uptime SLA" value="99.9% Guaranteed"
        color="#06b6d4" style={{ bottom: '20%', left: '5%' }} delay={0.6} />

      {/* Scroll cue */}
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: '#6b7280', fontFamily: 'Inter, sans-serif', fontSize: '11px',
          letterSpacing: '0.1em', textTransform: 'uppercase', zIndex: 4,
        }}
      >
        <span>Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
