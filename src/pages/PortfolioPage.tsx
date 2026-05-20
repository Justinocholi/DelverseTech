import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../constants';
import { Page } from '../App';

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'website', label: 'Website' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'education', label: 'Education' },
];

interface PortfolioPageProps {
  onNavigate: (page: Page) => void;
}

const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState('all');
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  const filtered = filter === 'all' ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

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
          <div className="orb orb-purple" style={{ width: '600px', height: '400px', top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.1 }} />
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        </div>
        <div ref={headRef} style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Portfolio</span>
            <h1 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
              Work That Speaks<br /><span className="gradient-text">For Itself</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: 'clamp(15px,2vw,18px)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
              Real clients, real results, real impact. Explore our case studies and see the depth of what we build.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#0a0f1e', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-cyan" style={{ width: '400px', height: '400px', bottom: 0, right: 0, opacity: 0.06 }} />
        </div>
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          {/* Filters */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '48px' }}>
            {FILTERS.map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} className={`filter-btn ${filter === f.key ? 'active' : ''}`}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div ref={gridRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '28px' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={gridInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.93 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    background: 'rgba(17,24,39,0.7)',
                    backdropFilter: 'blur(24px)',
                    border: '1px solid rgba(99,102,241,0.12)',
                    borderRadius: '20px', overflow: 'hidden',
                    transition: 'border-color 0.3s',
                  }}
                  whileHover={{ borderColor: `${project.color}40`, y: -4 } as any}
                >
                  {/* Visual header */}
                  <div style={{
                    height: '220px',
                    background: `linear-gradient(135deg, ${project.color}35, ${project.color}12)`,
                    position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <div style={{ position: 'absolute', width: '220px', height: '220px', borderRadius: '50%', border: `1px solid ${project.color}20`, top: '-40px', right: '-40px' }} />
                    <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', border: `1px solid ${project.color}12`, bottom: '-30px', left: '20px' }} />
                    <div style={{
                      width: '90px', height: '90px', borderRadius: '22px',
                      background: `${project.color}20`, border: `2px solid ${project.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Space Grotesk, sans-serif', fontSize: '36px', fontWeight: 800,
                      color: project.color, zIndex: 1,
                    }}>{project.title.charAt(0)}</div>
                    <div style={{
                      position: 'absolute', top: '16px', left: '16px',
                      padding: '5px 12px', background: `${project.color}20`, border: `1px solid ${project.color}40`,
                      borderRadius: '100px', fontSize: '11px', fontWeight: 600,
                      color: project.color, fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>{project.categoryLabel}</div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ position: 'absolute', top: '16px', right: '16px', width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(10,15,30,0.8)', border: `1px solid ${project.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: project.color, textDecoration: 'none' }}>
                      <ExternalLink size={15} />
                    </a>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '28px' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.7, fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                      {project.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {project.technologies.map(t => (
                        <span key={t} className="tech-tag" style={{ fontSize: '12px', padding: '4px 10px' }}>{t}</span>
                      ))}
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: project.color, fontSize: '13px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textDecoration: 'none' }}>
                      View Live Project <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* More coming soon */}
          <motion.div initial={{ opacity: 0 }} animate={gridInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}
            style={{ textAlign: 'center', marginTop: '64px', padding: '40px', border: '1px dashed rgba(99,102,241,0.2)', borderRadius: '16px' }}>
            <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>
              More Projects In Progress
            </h4>
            <p style={{ color: '#6b7280', fontFamily: 'Inter, sans-serif', fontSize: '14px', marginBottom: '20px' }}>
              We're always building. Have a project in mind?
            </p>
            <motion.button className="btn-primary" onClick={() => onNavigate('contact')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Start Your Project <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
