import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../constants';

const FILTERS = [
  { key: 'all', label: 'All Projects' },
  { key: 'website', label: 'Website' },
  { key: 'ecommerce', label: 'E-Commerce' },
  { key: 'education', label: 'Education' },
];

interface ProjectCardProps {
  project: typeof PORTFOLIO_PROJECTS[0];
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(17,24,39,0.6)',
        backdropFilter: 'blur(24px)',
        border: hovered ? `1px solid ${project.color}50` : '1px solid rgba(99,102,241,0.12)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: hovered ? `0 0 50px ${project.color}15, 0 24px 64px rgba(0,0,0,0.4)` : 'none',
        cursor: 'pointer',
      }}
    >
      {/* Hero Visual */}
      <div style={{
        height: '200px',
        background: `linear-gradient(135deg, ${project.color}40, ${project.color}15)`,
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Decorative circles */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: `1px solid ${project.color}20`,
          top: '-50px',
          right: '-50px',
        }} />
        <div style={{
          position: 'absolute',
          width: '140px',
          height: '140px',
          borderRadius: '50%',
          border: `1px solid ${project.color}15`,
          bottom: '-40px',
          left: '20px',
        }} />

        {/* Project Initial */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '20px',
          background: `${project.color}20`,
          border: `2px solid ${project.color}40`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '32px',
          fontWeight: 800,
          color: project.color,
          zIndex: 1,
          backdropFilter: 'blur(10px)',
        }}>
          {project.title.charAt(0)}
        </div>

        {/* Category badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          padding: '4px 12px',
          background: `${project.color}20`,
          border: `1px solid ${project.color}40`,
          borderRadius: '100px',
          fontSize: '11px',
          fontWeight: 600,
          color: project.color,
          fontFamily: 'Inter, sans-serif',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          {project.categoryLabel}
        </div>

        {/* Hover external link */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            background: 'rgba(10,15,30,0.8)',
            border: `1px solid ${project.color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: project.color,
          }}
        >
          <ExternalLink size={16} />
        </motion.div>
      </div>

      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '20px',
          fontWeight: 700,
          color: 'white',
          marginBottom: '10px',
        }}>
          {project.title}
        </h3>
        <p style={{
          color: '#9ca3af',
          fontSize: '14px',
          lineHeight: 1.6,
          fontFamily: 'Inter, sans-serif',
          marginBottom: '20px',
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-tag" style={{ fontSize: '12px', padding: '4px 10px' }}>
              {tech}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: project.color,
            fontSize: '13px',
            fontWeight: 600,
            fontFamily: 'Inter, sans-serif',
            textDecoration: 'none',
            transition: 'gap 0.2s',
          }}
        >
          View Project <ArrowRight size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  const filtered = activeFilter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: 'linear-gradient(180deg, #080c18 0%, #0a0f1e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="orb orb-cyan" style={{ width: '500px', height: '400px', top: 0, right: 0, opacity: 0.06 }} />
        <div className="orb orb-purple" style={{ width: '400px', height: '400px', bottom: 0, left: 0, opacity: 0.06 }} />
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>
            Portfolio
          </span>
          <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
            Work That Speaks<br />
            <span className="gradient-text">For Itself</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: 'clamp(15px, 2vw, 18px)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            Case studies from real clients. Real results. Real impact.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
            marginBottom: '48px',
          }}
        >
          {FILTERS.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} inView={gridInView} />
            ))}
          </AnimatePresence>
        </div>

        {/* View more teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={gridInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '56px',
            padding: '32px',
            border: '1px dashed rgba(99,102,241,0.2)',
            borderRadius: '16px',
          }}
        >
          <p style={{ color: '#6b7280', fontFamily: 'Inter, sans-serif', fontSize: '14px', marginBottom: '16px' }}>
            More projects in progress. We're always building.
          </p>
          <motion.button
            className="btn-ghost"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Case Studies <ArrowRight size={14} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
