import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import HeroSection from '../sections/HeroSection';
import StatsSection from '../sections/StatsSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import { useInView } from '../hooks/useInView';
import { SERVICES, PORTFOLIO_PROJECTS } from '../constants';
import { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

/* ── Mini service card for homepage preview ── */
const MiniServiceCard: React.FC<{ service: typeof SERVICES[0]; index: number; inView: boolean }> = ({ service, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.07, duration: 0.5 }}
    className="glass-card"
    style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}
  >
    <div style={{
      width: '48px', height: '48px', borderRadius: '14px',
      background: `${service.color}15`, border: `1px solid ${service.color}30`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '22px', marginBottom: '16px',
    }}>{service.icon}</div>
    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>
      {service.title}
    </h3>
    <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', flex: 1 }}>
      {service.description}
    </p>
  </motion.div>
);

/* ── Mini portfolio card ── */
const MiniProjectCard: React.FC<{ project: typeof PORTFOLIO_PROJECTS[0]; index: number; inView: boolean }> = ({ project, index, inView }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 24 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ delay: index * 0.1 }}
    style={{
      display: 'block',
      background: 'rgba(17,24,39,0.6)',
      border: '1px solid rgba(99,102,241,0.12)',
      borderRadius: '16px',
      overflow: 'hidden',
      textDecoration: 'none',
      transition: 'all 0.3s',
    }}
    whileHover={{ y: -4, borderColor: `${project.color}40` } as any}
  >
    <div style={{
      height: '140px',
      background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: 'Space Grotesk, sans-serif', fontSize: '40px', fontWeight: 800,
        color: project.color, opacity: 0.8,
      }}>{project.title.charAt(0)}</span>
    </div>
    <div style={{ padding: '20px' }}>
      <div style={{ fontSize: '11px', color: project.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px', fontFamily: 'Inter, sans-serif' }}>
        {project.categoryLabel}
      </div>
      <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>
        {project.title}
      </h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
        {project.technologies.slice(0, 3).map(t => (
          <span key={t} className="tech-tag" style={{ fontSize: '11px', padding: '3px 8px' }}>{t}</span>
        ))}
      </div>
    </div>
  </motion.a>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { ref: servicesRef, inView: servicesInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const { ref: aboutRef, inView: aboutInView } = useInView<HTMLDivElement>();
  const { ref: portfolioRef, inView: portfolioInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const { ref: ctaRef, inView: ctaInView } = useInView<HTMLDivElement>();

  return (
    <>
      {/* ── 1. Cinematic hero with video ── */}
      <HeroSection onNavigate={onNavigate} />

      {/* ── 2. Stats & Tech Marquee ── */}
      <StatsSection />

      {/* ── 3. Services preview ── */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-indigo" style={{ width: '500px', height: '400px', top: 0, right: '-100px', opacity: 0.07 }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <span className="section-label" style={{ marginBottom: '18px', display: 'inline-flex' }}>What We Do</span>
            <h2 className="section-heading" style={{ color: 'white', marginBottom: '16px' }}>
              Services Built for<br /><span className="gradient-text">The Future</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '17px', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
              End-to-end technology solutions engineered for scale, security, and extraordinary results.
            </p>
          </motion.div>

          <div ref={servicesRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {SERVICES.map((s, i) => (
              <MiniServiceCard key={i} service={s} index={i} inView={servicesInView} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', marginTop: '48px' }}
          >
            <motion.button className="btn-primary" onClick={() => onNavigate('services')}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Explore All Services <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── 4. About preview ── */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px', background: '#080c18', position: 'relative', overflow: 'hidden' }}>
        <div className="gradient-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'center' }}>
          <motion.div
            ref={aboutRef}
            initial={{ opacity: 0, x: -30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>About Us</span>
            <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
              Your Partner in<br /><span className="gradient-text">Digital Transformation</span>
            </h2>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', fontSize: '16px', marginBottom: '16px' }}>
              Founded with a mission to bridge cutting-edge technology and real business outcomes,
              DelverseTech has grown into a trusted partner for companies that refuse to settle for average.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', fontSize: '16px', marginBottom: '32px' }}>
              We stand at the core of international networks to advance your strategic interests,
              combining deep technical mastery with strategic business thinking.
            </p>
            {[
              'Vision: Global leader in AI-driven technology solutions',
              'Mission: Crafting solutions that drive meaningful growth',
              'Values: Innovation, precision, collaboration, integrity',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '12px' }}>
                <CheckCircle size={15} style={{ color: '#6366f1', marginTop: '2px', flexShrink: 0 }} />
                <span style={{ color: '#9ca3af', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>{item}</span>
              </div>
            ))}
            <motion.button className="btn-primary" onClick={() => onNavigate('about')}
              style={{ marginTop: '24px' }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Learn More <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Visual terminal card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.06))',
              border: '1px solid rgba(99,102,241,0.18)',
              borderRadius: '24px', padding: '36px', position: 'relative', overflow: 'hidden',
            }}>
              <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'rgba(10,15,30,0.85)', borderRadius: '12px', padding: '20px',
                  border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'monospace', fontSize: '13px',
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
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                  {['React', 'Python', 'TensorFlow', 'AWS', 'Docker', 'GraphQL'].map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.3), transparent)' }} />
            </div>
          </motion.div>
        </div>
        <div className="gradient-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ── 5. Portfolio preview ── */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-cyan" style={{ width: '500px', height: '400px', bottom: 0, left: '-100px', opacity: 0.07 }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label" style={{ marginBottom: '18px', display: 'inline-flex' }}>Portfolio</span>
            <h2 className="section-heading" style={{ color: 'white', marginBottom: '16px' }}>
              Work That Speaks<br /><span className="gradient-text">For Itself</span>
            </h2>
          </motion.div>
          <div ref={portfolioRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {PORTFOLIO_PROJECTS.map((p, i) => (
              <MiniProjectCard key={p.id} project={p} index={i} inView={portfolioInView} />
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} animate={portfolioInView ? { opacity: 1 } : {}} transition={{ delay: 0.4 }}
            style={{ textAlign: 'center', marginTop: '40px' }}>
            <motion.button className="btn-primary" onClick={() => onNavigate('portfolio')}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              View Full Portfolio <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ── 6. Testimonials ── */}
      <TestimonialsSection />

      {/* ── 7. CTA banner ── */}
      <section style={{ padding: 'clamp(80px,10vw,120px) 24px', background: '#080c18', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-indigo" style={{ width: '700px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }} />
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
        </div>
        <div ref={ctaRef} style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
              Ready to Transform<br /><span className="gradient-text">Your Business?</span>
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '40px' }}>
              Contact us today and let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <motion.button className="btn-primary" onClick={() => onNavigate('contact')}
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                style={{ fontSize: '16px', padding: '18px 36px' }}>
                Start Your Project <ArrowRight size={18} />
              </motion.button>
              <motion.button className="btn-secondary" onClick={() => onNavigate('about')}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                style={{ fontSize: '16px', padding: '18px 36px' }}>
                Learn About Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
