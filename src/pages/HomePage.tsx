import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { Page } from '../App';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

/* ─── Data ─── */
const SLIDES = [
  {
    title: 'Transform Your Business with',
    highlight: 'Cutting-Edge Technology',
    desc: 'From web development to AI implementation, we deliver comprehensive solutions that streamline operations and accelerate digital transformation for forward-thinking companies.',
  },
  {
    title: 'Delverse Solutions: Your Partner in',
    highlight: 'Digital Transformation',
    desc: 'We stand at the core of international networks to advance your strategic interests. Our mission is to craft innovative, tailored solutions that drive meaningful business growth.',
  },
  {
    title: 'Innovative',
    highlight: 'AI Solutions',
    desc: 'Leverage cutting-edge artificial intelligence to transform your business processes and drive meaningful business growth with our comprehensive technology solutions.',
  },
];

const SERVICES = [
  { icon: '🧠', title: 'AI-Powered Solutions',        desc: 'Leverage cutting-edge artificial intelligence to transform your business processes and decision-making.' },
  { icon: '🌐', title: 'Website Development',          desc: 'Create stunning, responsive websites that engage users and drive conversions with modern design principles.' },
  { icon: '📱', title: 'Web & Mobile App Development', desc: 'Build powerful applications for web and mobile platforms with seamless user experiences.' },
  { icon: '📊', title: 'Data Analytics',               desc: 'Transform raw data into actionable insights that drive strategic business decisions.' },
  { icon: '🔐', title: 'IT Support & Cybersecurity',   desc: 'Protect your digital assets with comprehensive security solutions and reliable IT support.' },
  { icon: '👥', title: 'Business Consulting',          desc: 'Strategic technology consulting to optimise operations and accelerate digital transformation.' },
];

const TECH_STACK = ['React', 'Flutter', 'Node.js', 'Python', 'Django', 'TensorFlow', 'PyTorch', 'AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'UI/UX Design'];

const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Delverse Technologies transformed our digital presence completely. Their team delivered a comprehensive website solution that not only looks professional but also significantly improved our operational efficiency.',
    author: 'Engr. Yakubu Samaila',
    position: 'Managing Director/CEO',
    company: 'MECA GROUP',
    initials: 'YS',
    color: '#6366f1',
  },
  {
    stars: 5,
    text: "Working with Delverse was a game-changer for our consultancy firm. They understood our complex requirements and delivered a sophisticated platform that perfectly aligns with our business needs.",
    author: 'Dr. I.B. Gashinbaki',
    position: 'Group Country Director',
    company: 'DCP',
    initials: 'IG',
    color: '#06b6d4',
  },
  {
    stars: 5,
    text: "The educational platform Delverse developed for us exceeded all expectations. Their innovative approach to UX design and robust backend architecture created a learning environment that both educators and students love.",
    author: 'Michael Adebayo',
    position: 'Director, Products',
    company: 'Learnly App',
    initials: 'MA',
    color: '#8b5cf6',
  },
];

const PROCESS = [
  { num: '1', title: 'Discovery & Planning',   desc: 'We deeply understand your business goals, challenges, and competitive landscape to craft a comprehensive strategy and technology roadmap.' },
  { num: '2', title: 'Design & Development',   desc: 'Our team designs intuitive interfaces and builds robust, scalable systems using modern frameworks and best practices.' },
  { num: '3', title: 'Testing & QA',           desc: 'Rigorous quality assurance across devices and scenarios ensures your product launches flawlessly and performs reliably.' },
  { num: '4', title: 'Launch & Support',        desc: 'We handle seamless deployment and provide ongoing support, monitoring, and maintenance to keep your system at peak performance.' },
];

/* ─── Sub-components ─── */
const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="section-label" style={{ marginBottom: '16px', display: 'inline-flex' }}>{children}</span>
);

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [slide, setSlide] = useState(0);

  // Auto-advance slides every 6 s
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const { ref: aboutRef,        inView: aboutInView        } = useInView<HTMLDivElement>();
  const { ref: servicesRef,     inView: servicesInView     } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const { ref: techRef,         inView: techInView         } = useInView<HTMLDivElement>();
  const { ref: testiRef,        inView: testiInView        } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const { ref: processRef,      inView: processInView      } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const { ref: ctaRef,          inView: ctaInView          } = useInView<HTMLDivElement>();

  return (
    <>
      {/* ══════════════════════════════════════
          1. HERO — video bg, text left, image right
          ══════════════════════════════════════ */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        {/* Video */}
        <video autoPlay muted loop playsInline className="video-background">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="overlay" style={{ background: 'rgba(10,15,30,0.72)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '100px 24px 60px', width: '100%' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
            {/* Left — text */}
            <div style={{ flex: '1 1 380px' }}>
              <motion.h1
                key={slide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: 'clamp(32px, 5vw, 54px)',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                  letterSpacing: '-0.02em',
                }}
              >
                {SLIDES[slide].title}{' '}
                <span style={{
                  background: 'linear-gradient(135deg,#6366f1,#06b6d4)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {SLIDES[slide].highlight}
                </span>
              </motion.h1>

              <motion.p
                key={`desc-${slide}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ color: '#c4c9d4', fontSize: '17px', lineHeight: 1.75, marginBottom: '32px', fontFamily: 'Inter, sans-serif' }}
              >
                {SLIDES[slide].desc}
              </motion.p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
                <motion.button
                  className="btn-primary"
                  onClick={() => onNavigate('services')}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ fontSize: '15px', padding: '14px 30px' }}
                >
                  Our Services
                </motion.button>
                <motion.button
                  className="btn-secondary"
                  onClick={() => onNavigate('about')}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ fontSize: '15px', padding: '14px 30px' }}
                >
                  About Us
                </motion.button>
              </div>

              {/* Slide indicators */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '36px' }}>
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    style={{
                      width: i === slide ? '28px' : '8px', height: '8px',
                      borderRadius: '4px', border: 'none', cursor: 'pointer',
                      background: i === slide ? '#6366f1' : 'rgba(255,255,255,0.3)',
                      transition: 'all 0.3s', padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right — image (image 2.jpg as in original) */}
            <div style={{ flex: '1 1 340px', display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  padding: '8px',
                  border: '1px solid rgba(99,102,241,0.2)',
                  boxShadow: '0 0 60px rgba(99,102,241,0.15)',
                  maxWidth: '460px', width: '100%',
                }}
              >
                <img
                  src="/image 2.jpg"
                  alt="Technology transformation"
                  style={{ width: '100%', borderRadius: '10px', display: 'block', objectFit: 'cover', maxHeight: '340px' }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. ABOUT — image left, text + VMV cards right
          ══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-indigo" style={{ width: '500px', height: '400px', top: 0, right: '-100px', opacity: 0.07 }} />
        </div>
        <div
          ref={aboutRef}
          style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '48px', position: 'relative' }}
        >
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ flex: '1 1 300px' }}
          >
            <img
              src="/image 2.jpg"
              alt="Delverse Solutions"
              style={{ width: '100%', borderRadius: '16px', objectFit: 'cover', maxHeight: '420px', boxShadow: '0 0 60px rgba(99,102,241,0.15)', border: '1px solid rgba(99,102,241,0.15)' }}
            />
          </motion.div>

          {/* Right — text + Vision/Mission/Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ flex: '1 1 340px' }}
          >
            <SectionLabel>About Us</SectionLabel>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(26px,3.5vw,38px)', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: 1.2 }}>
              Delverse Solutions: Your Partner in{' '}
              <span className="gradient-text">Digital Transformation</span>
            </h2>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', fontSize: '16px', marginBottom: '28px' }}>
              We stand at the core of international networks to advance your strategic interests. Our mission is to craft innovative, tailored solutions that drive meaningful business growth, while building lasting partnerships based on trust, excellence, and shared success.
            </p>

            {/* Vision / Mission / Values 3-card grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px,1fr))', gap: '14px', marginBottom: '28px' }}>
              {[
                { label: 'Vision',  text: 'To deliver future-driven technology solutions that empower businesses globally to achieve extraordinary growth.',   color: '#6366f1' },
                { label: 'Mission', text: 'To design and implement innovative, tailored solutions that accelerate business growth and build long-term partnerships.', color: '#06b6d4' },
                { label: 'Values',  text: 'Innovation, Collaboration, Precision & Excellence',                                                                color: '#10b981' },
              ].map((v, i) => (
                <div key={i} style={{
                  background: 'rgba(17,24,39,0.6)',
                  border: `1px solid ${v.color}25`,
                  borderRadius: '12px', padding: '16px',
                  textAlign: 'center',
                  backdropFilter: 'blur(16px)',
                }}>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '14px', fontWeight: 700, color: v.color, marginBottom: '8px' }}>{v.label}</h3>
                  <p style={{ fontSize: '12px', color: '#9ca3af', lineHeight: 1.5, fontFamily: 'Inter, sans-serif' }}>{v.text}</p>
                </div>
              ))}
            </div>

            <motion.button
              className="btn-primary"
              onClick={() => onNavigate('about')}
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            >
              Learn More About Us <ArrowRight size={15} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. SERVICES — 6-card grid
          ══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#080c18', position: 'relative' }}>
        <div className="gradient-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <SectionLabel>What We Do</SectionLabel>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
              Our Core Services
            </h2>
            <p style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', fontSize: '17px' }}>
              Transforming your business with cutting-edge technology
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px,1fr))', gap: '22px' }}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                className="glass-card"
                style={{ padding: '30px', cursor: 'default' }}
                whileHover={{ y: -5 } as any}
              >
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '19px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>{s.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            style={{ textAlign: 'center', marginTop: '44px' }}
          >
            <motion.button className="btn-primary" onClick={() => onNavigate('services')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Explore All Services <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
        <div className="gradient-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ══════════════════════════════════════
          4. TECHNOLOGIES — pill tags
          ══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#0a0f1e', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            ref={techRef}
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
          >
            <SectionLabel>Our Stack</SectionLabel>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', fontSize: '17px', marginBottom: '40px' }}>
              Built on a foundation of excellence with cutting-edge technologies
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              {TECH_STACK.map((tech, i) => (
                <motion.span
                  key={i}
                  className="tech-tag"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={techInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.04 }}
                  style={{ fontSize: '14px', padding: '8px 18px' }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            <motion.button
              className="btn-ghost"
              onClick={() => onNavigate('technologies')}
              style={{ marginTop: '32px' }}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0 }}
              animate={techInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              View All Technologies <ArrowRight size={14} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. TESTIMONIALS — 3 cards
          ══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#080c18', position: 'relative' }}>
        <div className="gradient-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            ref={testiRef}
            initial={{ opacity: 0, y: 20 }}
            animate={testiInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <SectionLabel>Testimonials</SectionLabel>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
              What Our Clients Say
            </h2>
            <p style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', fontSize: '17px' }}>
              Trusted by leading companies across various industries
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: '22px' }}>
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={testiInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: '28px', cursor: 'default' }}
              >
                {/* Stars */}
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} size={16} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                  ))}
                </div>
                <p style={{ color: '#c4c9d4', fontSize: '14px', lineHeight: 1.75, fontStyle: 'italic', fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    background: `linear-gradient(135deg,${t.color},${t.color}80)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '16px', color: 'white', flexShrink: 0,
                  }}>{t.initials}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px' }}>{t.author}</div>
                    <div style={{ fontSize: '12px', color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>{t.position}</div>
                    <div style={{ fontSize: '12px', color: t.color, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="gradient-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* ══════════════════════════════════════
          6. PROCESS — 4 steps
          ══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#0a0f1e', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <motion.div
            ref={processRef}
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '56px' }}
          >
            <SectionLabel>Our Process</SectionLabel>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px,4vw,42px)', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
              Our Process
            </h2>
            <p style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', fontSize: '17px' }}>
              How we deliver exceptional results for our clients
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px,1fr))', gap: '22px' }}>
            {PROCESS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass-card"
                style={{ padding: '32px 24px', textAlign: 'center', cursor: 'default' }}
                whileHover={{ y: -4 } as any}
              >
                <div className="step-number" style={{ margin: '0 auto 20px' }}>{step.num}</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>{step.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. CTA BANNER
          ══════════════════════════════════════ */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#080c18', position: 'relative', overflow: 'hidden' }}>
        <div className="gradient-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-indigo" style={{ width: '700px', height: '500px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.08 }} />
        </div>
        <div ref={ctaRef} style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={ctaInView ? { opacity: 1, y: 0 } : {}}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
              Ready to Transform Your Business?
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '18px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '36px' }}>
              Contact us today and let's discuss how we can help you achieve your digital transformation goals.
            </p>
            <motion.button
              className="btn-primary"
              onClick={() => onNavigate('contact')}
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              Start Your Project <ArrowRight size={17} />
            </motion.button>
          </motion.div>
        </div>
        <div className="gradient-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>
    </>
  );
};

export default HomePage;
