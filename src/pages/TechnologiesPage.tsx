import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const CATEGORIES = [
  {
    icon: '⚛️',
    title: 'Frontend Development',
    color: '#6366f1',
    description: 'Crafting pixel-perfect, performant user interfaces that delight users at every interaction.',
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'Storybook'],
  },
  {
    icon: '⚙️',
    title: 'Backend Development',
    color: '#06b6d4',
    description: 'Robust, scalable server-side architectures that power high-traffic applications reliably.',
    technologies: ['Node.js', 'Python', 'Django', 'FastAPI', 'Express.js', 'GraphQL', 'REST APIs', 'WebSockets'],
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    color: '#8b5cf6',
    description: 'Native-quality mobile experiences built to run flawlessly on iOS and Android.',
    technologies: ['Flutter', 'React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Dart', 'Expo', 'Ionic', 'Capacitor'],
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    color: '#10b981',
    description: 'Production-grade AI systems trained on your data, deployed at scale.',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI API', 'LangChain', 'Hugging Face', 'ONNX', 'MLflow'],
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    color: '#f59e0b',
    description: 'Resilient cloud infrastructure and automated delivery pipelines for zero-downtime deployments.',
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'ArgoCD'],
  },
  {
    icon: '🗄️',
    title: 'Databases & Storage',
    color: '#ef4444',
    description: 'Right-fit data solutions — relational, NoSQL, vector, or graph — tuned for performance.',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Pinecone', 'Supabase', 'Firebase', 'DynamoDB'],
  },
  {
    icon: '🔐',
    title: 'Security',
    color: '#06b6d4',
    description: 'Hardened security practices baked into every layer of your stack from day one.',
    technologies: ['OWASP Standards', 'JWT / OAuth2', 'SSL / TLS', 'SIEM Tools', 'Vault by HashiCorp', 'Penetration Testing', 'Zero-Trust Architecture', 'SOC2'],
  },
];

const TechnologiesPage: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  const { ref: pillsRef, inView: pillsInView } = useInView<HTMLDivElement>();

  const ALL_TECH = CATEGORIES.flatMap(c => c.technologies);

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Page hero */}
      <section style={{
        padding: 'clamp(60px,8vw,100px) 24px',
        background: 'linear-gradient(180deg,#0a0f1e 0%,#0d1424 100%)',
        position: 'relative', overflow: 'hidden',
        borderBottom: '1px solid rgba(99,102,241,0.1)',
      }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-cyan" style={{ width: '600px', height: '400px', top: '-100px', right: '-100px', opacity: 0.1 }} />
          <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
        </div>
        <div ref={headRef} style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={headInView ? { opacity: 1, y: 0 } : {}}>
            <span className="section-label" style={{ marginBottom: '20px', display: 'inline-flex' }}>Technologies</span>
            <h1 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
              Technologies We<br /><span className="gradient-text">Master & Deliver</span>
            </h1>
            <p style={{ color: '#9ca3af', fontSize: 'clamp(15px,2vw,18px)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7, fontFamily: 'Inter, sans-serif' }}>
              Our engineers work with the most powerful, proven technologies available — always choosing the right tool for your specific challenge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category cards */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#0a0f1e', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="orb orb-indigo" style={{ width: '500px', height: '500px', bottom: '-100px', left: '-100px', opacity: 0.07 }} />
        </div>
        <div ref={gridRef} style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                animate={gridInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: 'rgba(17,24,39,0.6)',
                  backdropFilter: 'blur(24px)',
                  border: hovered === i ? `1px solid ${cat.color}50` : '1px solid rgba(99,102,241,0.12)',
                  borderRadius: '20px',
                  padding: '32px',
                  transition: 'all 0.35s',
                  boxShadow: hovered === i ? `0 0 40px ${cat.color}15` : 'none',
                  transform: hovered === i ? 'translateY(-4px)' : 'none',
                }}
              >
                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: `${cat.color}15`, border: `1px solid ${cat.color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', marginBottom: '18px',
                  boxShadow: hovered === i ? `0 0 20px ${cat.color}30` : 'none',
                  transition: 'box-shadow 0.3s',
                }}>{cat.icon}</div>

                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, color: 'white', marginBottom: '10px' }}>
                  {cat.title}
                </h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', marginBottom: '20px' }}>
                  {cat.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cat.technologies.map(t => (
                    <span key={t} className="tech-tag" style={{ fontSize: '12px', padding: '4px 10px' }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All-tech pill cloud */}
      <section style={{ padding: 'clamp(60px,8vw,100px) 24px', background: '#080c18', position: 'relative', overflow: 'hidden' }}>
        <div className="gradient-divider" style={{ position: 'absolute', top: 0, left: 0, right: 0 }} />
        <div ref={pillsRef} style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={pillsInView ? { opacity: 1, y: 0 } : {}}
            className="section-heading" style={{ color: 'white', marginBottom: '16px' }}>
            Our Full <span className="gradient-text">Tech Arsenal</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={pillsInView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            style={{ color: '#9ca3af', marginBottom: '40px', fontFamily: 'Inter, sans-serif', fontSize: '16px', lineHeight: 1.7 }}>
            {ALL_TECH.length}+ technologies in our stack — and growing.
          </motion.p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            {ALL_TECH.map((tech, i) => (
              <motion.span
                key={i}
                className="tech-tag"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={pillsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.02 }}
                style={{ fontSize: '13px', padding: '6px 14px' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        <div className="gradient-divider" style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
      </section>
    </div>
  );
};

export default TechnologiesPage;
