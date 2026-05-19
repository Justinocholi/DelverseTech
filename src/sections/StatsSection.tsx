import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { STATS, TECH_STACK } from '../constants';

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration, active]);

  return count;
}

const StatCounter: React.FC<{
  number: string;
  label: string;
  suffix: string;
  active: boolean;
  index: number;
}> = ({ number, label, suffix, active, index }) => {
  const numericValue = parseInt(number.replace(/\D/g, '')) || 0;
  const count = useCountUp(numericValue, 1800, active);

  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <div className="stat-number">
        {count}{number.replace(/\d/g, '')}
        {suffix}
      </div>
      <div style={{
        color: '#9ca3af',
        fontSize: '14px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
      }}>
        {label}
      </div>
    </motion.div>
  );
};

const StatsSection: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const { ref: marqueeRef, inView: marqueeInView } = useInView<HTMLDivElement>();

  return (
    <section
      style={{
        padding: 'clamp(60px, 8vw, 100px) 24px',
        background: '#080c18',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top/bottom gradient dividers */}
      <div className="gradient-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
      <div className="gradient-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Stats */}
        <div
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            marginBottom: '64px',
          }}
        >
          {STATS.map((stat, i) => (
            <StatCounter
              key={i}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              active={inView}
              index={i}
            />
          ))}
        </div>

        {/* Tech marquee */}
        <div ref={marqueeRef} style={{ overflow: 'hidden' }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={marqueeInView ? { opacity: 1 } : {}}
            style={{
              textAlign: 'center',
              color: '#4b5563',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: 'Inter, sans-serif',
              marginBottom: '20px',
            }}
          >
            Technologies We Master
          </motion.p>
          <div style={{ overflow: 'hidden', maskImage: 'linear-gradient(90deg, transparent, black 15%, black 85%, transparent)' }}>
            <div className="marquee-track">
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <span
                  key={i}
                  className="tech-tag"
                  style={{ marginRight: '12px', whiteSpace: 'nowrap', flexShrink: 0 }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
