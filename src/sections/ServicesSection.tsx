import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';
import { Page } from '../App';

interface ServiceCardProps {
  service: typeof SERVICES[0];
  index: number;
  inView: boolean;
  onContactClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, inView, onContactClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? `linear-gradient(135deg, rgba(17,24,39,0.9), rgba(17,24,39,0.7))`
          : 'rgba(17,24,39,0.5)',
        backdropFilter: 'blur(24px)',
        border: hovered ? `1px solid ${service.color}50` : '1px solid rgba(99,102,241,0.12)',
        borderRadius: '20px',
        padding: '32px',
        cursor: 'pointer',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: hovered ? `0 0 50px ${service.color}18, 0 24px 64px rgba(0,0,0,0.4)` : 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Icon */}
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '16px',
        background: `${service.color}15`,
        border: `1px solid ${service.color}30`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        marginBottom: '20px',
        transition: 'all 0.3s',
        boxShadow: hovered ? `0 0 20px ${service.color}30` : 'none',
      }}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: 'Space Grotesk, sans-serif',
        fontSize: '20px',
        fontWeight: 700,
        color: 'white',
        marginBottom: '12px',
        letterSpacing: '-0.01em',
      }}>
        {service.title}
      </h3>

      {/* Description */}
      <p style={{
        color: '#9ca3af',
        fontSize: '14px',
        lineHeight: 1.7,
        fontFamily: 'Inter, sans-serif',
        marginBottom: '24px',
        flex: 1,
      }}>
        {service.description}
      </p>

      {/* Features */}
      <ul style={{ marginBottom: '24px' }}>
        {service.features.map((feature, i) => (
          <li key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '13px',
            color: '#d1d5db',
            fontFamily: 'Inter, sans-serif',
            marginBottom: '8px',
          }}>
            <CheckCircle size={13} style={{ color: service.color, flexShrink: 0 }} />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={onContactClick}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'none',
          border: 'none',
          color: service.color,
          fontSize: '13px',
          fontWeight: 600,
          fontFamily: 'Inter, sans-serif',
          cursor: 'pointer',
          padding: 0,
          transition: 'gap 0.2s',
        }}
      >
        Learn More <ArrowRight size={14} style={{ transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none' }} />
      </button>
    </motion.div>
  );
};

interface ServicesSectionProps {
  onNavigate: (page: Page) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();

  return (
    <section
      id="services"
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: 'linear-gradient(180deg, #0a0f1e 0%, #080c18 50%, #0a0f1e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="orb orb-indigo" style={{ width: '600px', height: '400px', top: '0', right: '-100px', opacity: 0.08 }} />
        <div className="orb orb-purple" style={{ width: '400px', height: '400px', bottom: '0', left: '-100px', opacity: 0.08 }} />
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
            What We Do
          </span>
          <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
            Comprehensive Tech<br />
            <span className="gradient-text">Solutions & Services</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: 'clamp(15px, 2vw, 18px)',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            From AI to cybersecurity, we deliver end-to-end technology solutions
            engineered for scale, security, and extraordinary results.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              index={i}
              inView={inView}
              onContactClick={() => onNavigate('contact' as Page)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{ textAlign: 'center', marginTop: '56px' }}
        >
          <p style={{ color: '#9ca3af', marginBottom: '20px', fontFamily: 'Inter, sans-serif', fontSize: '15px' }}>
            Have a custom project in mind?
          </p>
          <motion.button
            className="btn-primary"
            onClick={() => onNavigate('contact' as Page)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Discuss Your Project <ArrowRight size={16} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
