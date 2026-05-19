import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Linkedin, Twitter, Github } from 'lucide-react';
import { TEAM } from '../constants';

const TeamCard: React.FC<{
  member: typeof TEAM[0];
  index: number;
  inView: boolean;
}> = ({ member, index, inView }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(17,24,39,0.6)',
        backdropFilter: 'blur(24px)',
        border: hovered ? `1px solid ${member.color}40` : '1px solid rgba(99,102,241,0.12)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: hovered ? `0 0 50px ${member.color}12, 0 24px 64px rgba(0,0,0,0.4)` : 'none',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Avatar section */}
      <div style={{
        height: '200px',
        background: `linear-gradient(135deg, ${member.color}25, ${member.color}10)`,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Decorative rings */}
        <div style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: `1px solid ${member.color}15`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
        <div style={{
          position: 'absolute',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          border: `1px solid ${member.color}10`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />

        {/* Avatar circle */}
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${member.color}, ${member.color}80)`,
          border: `3px solid ${member.color}50`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Space Grotesk, sans-serif',
          fontWeight: 800,
          fontSize: '32px',
          color: 'white',
          zIndex: 1,
          boxShadow: `0 0 30px ${member.color}30`,
          overflow: 'hidden',
        }}>
          <img
            src={member.avatar}
            alt={member.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          {member.initials}
        </div>

        {/* Social links on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
          }}
        >
          {[
            { Icon: Linkedin, href: member.linkedin },
            { Icon: Twitter, href: member.twitter },
            { Icon: Github, href: '#' },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              onClick={(e) => e.preventDefault()}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(10,15,30,0.8)',
                border: `1px solid ${member.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: member.color,
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              <Icon size={14} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Info */}
      <div style={{ padding: '24px' }}>
        <h3 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '20px',
          fontWeight: 700,
          color: 'white',
          marginBottom: '4px',
        }}>
          {member.name}
        </h3>
        <div style={{
          fontSize: '13px',
          fontWeight: 600,
          color: member.color,
          fontFamily: 'Inter, sans-serif',
          marginBottom: '12px',
          letterSpacing: '0.02em',
        }}>
          {member.role}
        </div>
        <p style={{
          color: '#9ca3af',
          fontSize: '14px',
          lineHeight: 1.6,
          fontFamily: 'Inter, sans-serif',
        }}>
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
};

const TeamSection: React.FC = () => {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="team"
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: '#080c18',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        <div className="orb orb-purple" style={{ width: '500px', height: '500px', top: '-100px', right: '-100px', opacity: 0.08 }} />
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
            Our Team
          </span>
          <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
            The Minds Behind<br />
            <span className="gradient-text">DelverseTech</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: 'clamp(15px, 2vw, 18px)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            A team of elite technologists, strategists, and innovators united by
            a shared obsession with building exceptional digital products.
          </p>
        </motion.div>

        {/* Team grid */}
        <div
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
            maxWidth: '960px',
            margin: '0 auto',
          }}
        >
          {TEAM.map((member, i) => (
            <TeamCard key={i} member={member} index={i} inView={gridInView} />
          ))}
        </div>

        {/* Culture note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '56px',
            padding: '32px',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.06), rgba(6,182,212,0.04))',
            border: '1px solid rgba(99,102,241,0.12)',
            borderRadius: '20px',
            maxWidth: '640px',
            margin: '56px auto 0',
          }}
        >
          <h4 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '20px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '10px',
          }}>
            We're Growing
          </h4>
          <p style={{ color: '#9ca3af', fontSize: '14px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '20px' }}>
            Looking to work with a team that pushes the boundaries of what's possible?
            We're always looking for exceptional talent.
          </p>
          <motion.button
            className="btn-ghost"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
