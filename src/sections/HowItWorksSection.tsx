import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../constants';

interface HowItWorksSectionProps {
  onNavigate: (id: string) => void;
}

const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onNavigate }) => {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: stepsRef, inView: stepsInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="process"
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: '#0a0f1e',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="orb orb-indigo" style={{ width: '500px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.06 }} />
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            Our Process
          </span>
          <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
            How We Turn Ideas<br />
            <span className="gradient-text">Into Shipped Products</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: 'clamp(15px, 2vw, 18px)',
            maxWidth: '540px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            Our proven three-phase framework ensures every project is delivered
            on time, on budget, and beyond expectation.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={stepsRef}>
          {/* Desktop: horizontal with connectors */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0',
            position: 'relative',
          }}>
            {/* Connector line (desktop only) */}
            <div style={{
              position: 'absolute',
              top: '48px',
              left: '16%',
              right: '16%',
              height: '2px',
              background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
              opacity: 0.3,
              zIndex: 0,
            }} />

            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '0 24px 0',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {/* Step number circle */}
                <motion.div
                  className="step-number"
                  style={{ marginBottom: '32px' }}
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.div>

                {/* Arrow connector (between steps, not last) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '28px',
                    right: '-16px',
                    color: '#6366f1',
                    opacity: 0.5,
                    zIndex: 2,
                  }}>
                    <ArrowRight size={20} />
                  </div>
                )}

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '32px 24px',
                    width: '100%',
                    textAlign: 'center',
                  }}
                >
                  <div style={{
                    fontSize: '32px',
                    marginBottom: '16px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}>
                    {step.icon}
                  </div>
                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '12px',
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    color: '#9ca3af',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    fontFamily: 'Inter, sans-serif',
                  }}>
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={stepsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          style={{ textAlign: 'center', marginTop: '60px' }}
        >
          <motion.button
            className="btn-primary"
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Journey <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
