import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { CheckCircle, Globe, Award, Lightbulb } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { ref: headingRef, inView: headingInView } = useInView<HTMLDivElement>();
  const { ref: contentRef, inView: contentInView } = useInView<HTMLDivElement>();
  const { ref: valuesRef, inView: valuesInView } = useInView<HTMLDivElement>();

  const values = [
    { icon: <Lightbulb size={20} />, title: 'Innovation', desc: 'Pushing boundaries of what technology can achieve.', color: '#6366f1' },
    { icon: <Globe size={20} />, title: 'Global Reach', desc: 'Serving clients across continents with local insight.', color: '#06b6d4' },
    { icon: <CheckCircle size={20} />, title: 'Precision', desc: 'Every detail engineered to the highest standard.', color: '#10b981' },
    { icon: <Award size={20} />, title: 'Excellence', desc: 'Award-winning solutions that consistently surpass expectations.', color: '#f59e0b' },
  ];

  return (
    <section
      id="about"
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: '#0a0f1e',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorations */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="orb orb-cyan" style={{ width: '500px', height: '500px', bottom: '-100px', left: '-150px', opacity: 0.12 }} />
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Section label */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            About DelverseTech
          </span>
          <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
            Building the Future of<br />
            <span className="gradient-text">Intelligent Technology</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: 'clamp(15px, 2vw, 18px)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            We are an elite technology consulting firm specializing in AI-driven software,
            cybersecurity, and digital transformation for visionary companies worldwide.
          </p>
        </motion.div>

        {/* Content grid */}
        <div
          ref={contentRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '80px',
          }}
        >
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            {/* Main visual card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.08))',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '24px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative grid inside card */}
              <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Terminal-style mockup */}
                <div style={{
                  background: 'rgba(10,15,30,0.8)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  marginBottom: '20px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                }}>
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                    <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                  </div>
                  <div style={{ color: '#10b981', marginBottom: '6px' }}>$ ./delverse --deploy production</div>
                  <div style={{ color: '#6366f1' }}>✓ AI models initialized...</div>
                  <div style={{ color: '#06b6d4' }}>✓ Security protocols active...</div>
                  <div style={{ color: '#9ca3af' }}>✓ Infrastructure scaled...</div>
                  <div style={{ color: '#10b981', marginTop: '6px' }}>⚡ System ready. Delivering excellence.</div>
                </div>

                {/* Tech pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['React', 'Python', 'TensorFlow', 'AWS', 'Docker', 'GraphQL'].map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              {/* Corner decoration */}
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent)',
              }} />
            </div>

            {/* Floating achievement card */}
            <motion.div
              className="float"
              style={{
                position: 'absolute',
                bottom: '-20px',
                right: '-20px',
                background: 'rgba(17,24,39,0.9)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: '12px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(16,185,129,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981',
              }}>
                <Award size={20} />
              </div>
              <div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>Recognition</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'white', fontFamily: 'Space Grotesk, sans-serif' }}>Top Tech Partner 2024</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={contentInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(24px, 3vw, 32px)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}>
              Your Strategic Partner in<br />
              <span className="gradient-text">Digital Transformation</span>
            </h3>

            <p style={{ color: '#9ca3af', marginBottom: '16px', lineHeight: 1.8, fontFamily: 'Inter, sans-serif' }}>
              Founded with a mission to bridge cutting-edge technology and real business outcomes,
              DelverseTech has grown into a trusted partner for companies that refuse to settle for average.
            </p>
            <p style={{ color: '#9ca3af', marginBottom: '32px', lineHeight: 1.8, fontFamily: 'Inter, sans-serif' }}>
              We combine deep technical mastery with strategic business thinking to deliver solutions
              that don't just solve today's problems — they position you for tomorrow's opportunities.
            </p>

            {/* Highlights */}
            {[
              { label: 'Vision', text: 'Global leader in AI-driven technology solutions' },
              { label: 'Mission', text: 'Crafting innovative solutions that drive meaningful growth' },
              { label: 'Values', text: 'Innovation, precision, collaboration, and integrity' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  marginBottom: '16px',
                  padding: '14px 16px',
                  background: 'rgba(99,102,241,0.05)',
                  border: '1px solid rgba(99,102,241,0.1)',
                  borderRadius: '10px',
                }}
              >
                <CheckCircle size={16} style={{ color: '#6366f1', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <span style={{ fontWeight: 600, color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px' }}>
                    {item.label}:&nbsp;
                  </span>
                  <span style={{ color: '#9ca3af', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>{item.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values */}
        <div ref={valuesRef}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
            }}
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card"
                style={{ padding: '28px', cursor: 'default' }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: `${value.color}15`,
                  border: `1px solid ${value.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: value.color,
                  marginBottom: '16px',
                }}>
                  {value.icon}
                </div>
                <h4 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '8px',
                }}>
                  {value.title}
                </h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
