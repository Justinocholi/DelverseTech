import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: carouselRef, inView: carouselInView } = useInView<HTMLDivElement>();

  const next = useCallback(() => {
    setDirection(1);
    setCurrent(c => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !carouselInView) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, carouselInView, next]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 80 : -80, scale: 0.95 }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -80 : 80, scale: 0.95 }),
  };

  return (
    <section
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: '#0a0f1e',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="orb orb-indigo" style={{ width: '600px', height: '400px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.07 }} />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            Client Testimonials
          </span>
          <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
            Trusted by Industry<br />
            <span className="gradient-text">Leaders Worldwide</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          style={{ position: 'relative', maxWidth: '840px', margin: '0 auto' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                background: 'rgba(17,24,39,0.7)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(99,102,241,0.2)',
                borderRadius: '24px',
                padding: 'clamp(32px, 5vw, 56px)',
                position: 'relative',
              }}
            >
              {/* Quote icon */}
              <div style={{
                position: 'absolute',
                top: '28px',
                right: '28px',
                color: 'rgba(99,102,241,0.2)',
              }}>
                <Quote size={48} />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                {Array.from({ length: TESTIMONIALS[current].stars }).map((_, i) => (
                  <Star key={i} size={18} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                ))}
              </div>

              {/* Quote text */}
              <p style={{
                color: '#e5e7eb',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                lineHeight: 1.75,
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'italic',
                marginBottom: '36px',
                position: 'relative',
              }}>
                "{TESTIMONIALS[current].text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                  color: 'white',
                  flexShrink: 0,
                  border: '2px solid rgba(99,102,241,0.4)',
                }}>
                  {TESTIMONIALS[current].initials}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: 'white',
                    marginBottom: '2px',
                  }}>
                    {TESTIMONIALS[current].author}
                  </div>
                  <div style={{ fontSize: '13px', color: '#9ca3af', fontFamily: 'Inter, sans-serif' }}>
                    {TESTIMONIALS[current].position} •{' '}
                    <span style={{ color: '#6366f1' }}>{TESTIMONIALS[current].company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginTop: '32px',
          }}>
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  style={{
                    width: i === current ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: i === current ? '#6366f1' : 'rgba(255,255,255,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(99,102,241,0.15)',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#6366f1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Side previews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginTop: '32px',
            opacity: 0.6,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              style={{
                padding: '16px',
                background: i === current ? 'rgba(99,102,241,0.1)' : 'rgba(17,24,39,0.4)',
                border: `1px solid ${i === current ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.05)'}`,
                borderRadius: '12px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s',
                opacity: i === current ? 1 : 0.5,
              }}
            >
              <div style={{ fontWeight: 600, color: 'white', fontSize: '13px', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '4px' }}>
                {t.author}
              </div>
              <div style={{ color: '#6366f1', fontSize: '11px', fontFamily: 'Inter, sans-serif' }}>
                {t.company}
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
