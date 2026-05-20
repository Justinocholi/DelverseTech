import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { CheckCircle, Star, Award, Globe, Lightbulb, Users } from 'lucide-react';
import { TEAM, STATS } from '../constants';
import { Page } from '../App';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: statsRef, inView: statsInView } = useInView<HTMLDivElement>();
  const { ref: storyRef, inView: storyInView } = useInView<HTMLDivElement>();
  const { ref: valuesRef, inView: valuesInView } = useInView<HTMLDivElement>();
  const { ref: teamRef, inView: teamInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  const values = [
    { icon: <Lightbulb size={20} />, title: 'Innovation', desc: 'We push the boundaries of what technology can achieve, constantly exploring new approaches.', color: '#6366f1' },
    { icon: <Users size={20} />, title: 'Collaboration', desc: 'We believe in deep partnership — working alongside our clients, not just for them.', color: '#06b6d4' },
    { icon: <Star size={20} />, title: 'Precision', desc: 'Every detail matters. We maintain the highest standards of quality in every deliverable.', color: '#10b981' },
    { icon: <Award size={20} />, title: 'Integrity', desc: 'We operate with complete transparency, honesty, and ethical practices in all relationships.', color: '#f59e0b' },
    { icon: <Globe size={20} />, title: 'Global Reach', desc: 'Serving clients across continents with the cultural sensitivity and local insight they deserve.', color: '#8b5cf6' },
    { icon: <CheckCircle size={20} />, title: 'Excellence', desc: 'We don\'t just meet expectations — we consistently surpass them.', color: '#ef4444' },
  ];

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{
        padding: 'clamp(60px,8vw,100px) 24px',
        background: 'linear-gradient(180deg,#0a0f1e 0%,#0d1424 100%)',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-indigo" style={{ width: '600px', height: '500px', top: '-150px', right: '-150px', opacity: 0.1 }} />
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        </div>
        <div ref={headRef} style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>About Us</span>
            <h1 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
              Building the Future of<br /><span className="gradient-text">Intelligent Technology</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: 'clamp(15px,2vw,18px)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
              Your trusted partner in digital transformation — delivering innovative, AI-driven solutions
              that help forward-thinking companies lead their industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 'clamp(48px,6vw,80px) 24px', background: '#080c18', position: 'relative' }}>
        <div className="gradient-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div ref={statsRef} style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}>
          {STATS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
              className="stat-card">
              <div className="stat-number">{s.number}{s.suffix}</div>
              <div style={{ color: '#9ca3af', fontSize: '14px', fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="gradient-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* Story */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#0a0f1e', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-cyan" style={{ width: '500px', height: '400px', top: 0, left: '-100px', opacity: 0.07 }} />
        </div>
        <div ref={storyRef} style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '56px', alignItems: 'center' }}>
          {/* Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
              Our <span className="gradient-text">Story</span>
            </h2>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', fontSize: '16px', marginBottom: '20px' }}>
              Founded with a vision to bridge the gap between cutting-edge technology and practical business solutions, DelverseTech has emerged as a leading remote consulting firm specializing in AI-driven software development.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', fontSize: '16px', marginBottom: '20px' }}>
              We understand that in today's rapidly evolving digital landscape, businesses need more than just technology — they need strategic partners who can navigate complexity and deliver solutions that drive real results.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', fontSize: '16px' }}>
              Our team of experienced professionals combines deep technical expertise with industry knowledge to create tailored solutions that not only meet current needs but position our clients for future growth.
            </p>
          </motion.div>

          {/* Vision / Mission cards */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={storyInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: '🔭', title: 'Our Vision', desc: 'To be the global leader in AI-driven solutions, empowering businesses worldwide to achieve unprecedented growth through innovative technology and strategic digital transformation.', color: '#6366f1' },
              { icon: '🎯', title: 'Our Mission', desc: 'To craft innovative, tailored technology solutions that drive meaningful business growth, while building lasting partnerships based on trust, excellence, and shared success.', color: '#06b6d4' },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                background: `rgba(${i === 0 ? '99,102,241' : '6,182,212'},0.06)`,
                border: `1px solid rgba(${i === 0 ? '99,102,241' : '6,182,212'},0.2)`,
                borderRadius: '16px',
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#080c18', position: 'relative' }}>
        <div className="gradient-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div ref={valuesRef} initial={{ opacity: 0, y: 24 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Our Values</span>
            <h2 className="section-heading" style={{ color: 'white' }}>
              Principles That<br /><span className="gradient-text">Guide Everything We Do</span>
            </h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
            {values.map((v, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={valuesInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08 }}
                className="glass-card" style={{ padding: '28px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: `${v.color}15`, border: `1px solid ${v.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: v.color, marginBottom: '16px',
                }}>{v.icon}</div>
                <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '17px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>{v.title}</h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="gradient-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>

      {/* Team */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#0a0f1e', position: 'relative' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={teamInView ? { opacity: 1, y: 0 } : {}}
            style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Our Team</span>
            <h2 className="section-heading" style={{ color: 'white' }}>
              The Minds Behind<br /><span className="gradient-text">DelverseTech</span>
            </h2>
          </motion.div>
          <div ref={teamRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px', maxWidth: '960px', margin: '0 auto' }}>
            {TEAM.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={teamInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                {/* Avatar banner */}
                <div style={{
                  height: '180px',
                  background: `linear-gradient(135deg, ${member.color}25, ${member.color}10)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
                }}>
                  <div style={{
                    width: '90px', height: '90px', borderRadius: '50%',
                    border: `3px solid ${member.color}50`,
                    overflow: 'hidden', background: `linear-gradient(135deg, ${member.color}, ${member.color}80)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: '28px', color: 'white',
                  }}>
                    <img src={member.avatar} alt={member.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                      onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    {member.initials}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>{member.name}</h3>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: member.color, fontFamily: 'Inter, sans-serif', marginBottom: '12px' }}>{member.role}</div>
                  <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
