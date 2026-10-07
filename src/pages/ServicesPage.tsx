import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { SERVICES } from '../constants';
import { Page } from '../App';

const EXPANDED = [
  {
    ...SERVICES[0],
    detail: 'We build and deploy production-grade AI systems — from custom ML models and NLP pipelines to full computer vision and predictive analytics platforms — tailored to your exact business logic.',
    examples: ['Custom ML Model Training', 'NLP & Chatbot Systems', 'Computer Vision Pipelines', 'Predictive Analytics Dashboards', 'AI Workflow Automation'],
  },
  {
    ...SERVICES[1],
    detail: 'From marketing sites to complex SaaS platforms, we engineer fast, secure, SEO-optimized web applications using the latest frameworks, with pixel-perfect design and flawless performance.',
    examples: ['Next.js / React Platforms', 'SaaS Application Development', 'E-commerce Systems', 'CMS Integration', 'Progressive Web Apps'],
  },
  {
    ...SERVICES[2],
    detail: 'Cross-platform and native mobile apps that feel native, load fast, and scale effortlessly. We handle everything from UX wireframes to App Store deployment.',
    examples: ['Flutter Cross-Platform Apps', 'React Native Development', 'Native iOS (Swift)', 'Native Android (Kotlin)', 'App Store Optimization'],
  },
  {
    ...SERVICES[3],
    detail: 'We transform raw business data into actionable intelligence with real-time dashboards, BI pipelines, and advanced predictive models that guide smarter decisions.',
    examples: ['BI Dashboard Development', 'Real-time Data Pipelines', 'ETL Architecture', 'Predictive Modeling', 'Data Visualization'],
  },
  {
    ...SERVICES[4],
    detail: 'Enterprise-grade security across your entire digital footprint — from penetration testing and vulnerability assessments to full compliance frameworks and threat monitoring.',
    examples: ['Penetration Testing', 'Security Architecture Review', 'Vulnerability Assessment', 'GDPR / SOC2 Compliance', 'Threat Intelligence'],
  },
  {
    ...SERVICES[5],
    detail: 'Scalable, resilient cloud infrastructure with automated CI/CD, container orchestration, and IaC — so your team ships faster and your system stays available.',
    examples: ['AWS / GCP / Azure Setup', 'Kubernetes & Docker', 'CI/CD Pipeline Design', 'Infrastructure as Code', 'Cost Optimization'],
  },
];

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>({ threshold: 0.05 });

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* ── Page hero ── */}
      <section style={{
        padding: 'clamp(60px,8vw,100px) 24px',
        background: 'linear-gradient(180deg,#0a0f1e 0%,#0d1424 100%)',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-indigo" style={{ width: '600px', height: '400px', top: '-100px', left: '-100px', opacity: 0.12 }} />
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        </div>
        <div ref={headRef} style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Services</span>
            <h1 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
              Comprehensive Technology<br /><span className="gradient-text">Solutions & Services</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: 'clamp(15px,2vw,18px)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
              From AI to cybersecurity, we deliver end-to-end technology solutions
              engineered for scale, security, and extraordinary results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Service cards ── */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#0a0f1e', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-cyan" style={{ width: '500px', height: '400px', bottom: '0', right: '-100px', opacity: 0.06 }} />
        </div>
        <div ref={cardsRef} style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {EXPANDED.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                style={{
                  background: 'rgba(17,24,39,0.6)',
                  backdropFilter: 'blur(24px)',
                  border: '1px solid rgba(99,102,241,0.12)',
                  borderRadius: '20px',
                  padding: 'clamp(28px,4vw,48px)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '32px',
                  alignItems: 'center',
                  transition: 'border-color 0.3s',
                }}
                whileHover={{ borderColor: `${service.color}40` } as any}
              >
                {/* Left */}
                <div>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '16px',
                    background: `${service.color}15`, border: `1px solid ${service.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '26px', marginBottom: '20px',
                  }}>{service.icon}</div>
                  <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(20px,2.5vw,26px)', fontWeight: 700, color: 'white', marginBottom: '14px' }}>
                    {service.title}
                  </h2>
                  <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.75, fontFamily: 'Inter, sans-serif', marginBottom: '24px' }}>
                    {service.detail}
                  </p>
                  <motion.button className="btn-ghost" onClick={() => onNavigate('contact')} whileHover={{ scale: 1.03 }}>
                    Get Started <ArrowRight size={14} />
                  </motion.button>
                </div>
                {/* Right — features */}
                <div>
                  <p style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', fontFamily: 'Inter, sans-serif' }}>
                    Key Capabilities
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {service.examples.map((ex, j) => (
                      <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#d1d5db' }}>
                        <CheckCircle size={14} style={{ color: service.color, flexShrink: 0 }} />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div initial={{ opacity: 0 }} animate={cardsInView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
            style={{ textAlign: 'center', marginTop: '64px', padding: '48px 32px',
              background: 'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(6,182,212,0.04))',
              border: '1px solid rgba(99,102,241,0.15)', borderRadius: '20px' }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>
              Need a Custom Solution?
            </h3>
            <p style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', marginBottom: '24px', fontSize: '16px' }}>
              Every project is unique. Tell us your vision and we'll build a tailored plan.
            </p>
            <motion.button className="btn-primary" onClick={() => onNavigate('contact')} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              Discuss Your Project <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
