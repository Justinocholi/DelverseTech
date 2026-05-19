import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface FooterSectionProps {
  onNavigate: (id: string) => void;
}

const FooterSection: React.FC<FooterSectionProps> = ({ onNavigate }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#060a14',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top gradient border */}
      <div style={{
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(6,182,212,0.4), transparent)',
      }} />

      {/* CTA Banner */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.06))',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        padding: 'clamp(40px, 6vw, 64px) 24px',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          <div>
            <h3 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '8px',
            }}>
              Ready to Start Your
              <span className="gradient-text"> Next Project?</span>
            </h3>
            <p style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', fontSize: '15px' }}>
              Join the companies we've helped transform through technology.
            </p>
          </div>
          <motion.button
            className="btn-primary"
            onClick={() => onNavigate('contact')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontSize: '15px', padding: '16px 32px', flexShrink: 0 }}
          >
            Let's Talk <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* Main footer content */}
      <div style={{ padding: 'clamp(48px, 6vw, 80px) 24px 0', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 800,
                fontSize: '16px',
                color: 'white',
              }}>
                D
              </div>
              <span style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                color: 'white',
              }}>
                Delverse<span style={{ color: '#6366f1' }}>Tech</span>
              </span>
            </div>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: 1.7,
              fontFamily: 'Inter, sans-serif',
              marginBottom: '24px',
            }}>
              Elite technology consulting firm specializing in AI, software engineering,
              cybersecurity, and digital transformation for visionary companies.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Instagram, href: '#', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  onClick={(e) => e.preventDefault()}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6b7280',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = '#6366f1';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.4)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(99,102,241,0.1)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = '#6b7280';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h5 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 700, color: 'white', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Navigation
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {NAV_LINKS.map(link => (
                <li key={link.id} style={{ marginBottom: '10px' }}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#9ca3af')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 700, color: 'white', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Services
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['AI Solutions', 'Web Development', 'Mobile Apps', 'Data Analytics', 'Cybersecurity', 'Cloud & DevOps'].map(s => (
                <li key={s} style={{ marginBottom: '10px' }}>
                  <button
                    onClick={() => onNavigate('services')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#6b7280',
                      fontSize: '14px',
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#9ca3af')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '13px', fontWeight: 700, color: 'white', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Contact
            </h5>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {[
                { icon: <Mail size={13} />, text: 'delversetech@gmail.com' },
                { icon: <Phone size={13} />, text: '+234 806 930 5155' },
                { icon: <MapPin size={13} />, text: 'Asokoro, Abuja, Nigeria' },
              ].map((item, i) => (
                <li key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  marginBottom: '12px',
                  color: '#6b7280',
                  fontSize: '14px',
                  fontFamily: 'Inter, sans-serif',
                }}>
                  <span style={{ color: '#6366f1', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.04)',
        padding: '20px 24px',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
        }}>
          <p style={{ color: '#4b5563', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
            © {year} DelverseTech Limited. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <button
                key={item}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#4b5563',
                  fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#9ca3af')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4b5563')}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
