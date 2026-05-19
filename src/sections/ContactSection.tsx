import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Mail, Phone, MapPin, Clock, CheckCircle, Send } from 'lucide-react';

const CONTACT_INFO = [
  { icon: <Mail size={18} />, label: 'Email', value: 'delversetech@gmail.com', color: '#6366f1' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+234 806 930 5155', color: '#06b6d4' },
  { icon: <MapPin size={18} />, label: 'Office', value: 'Asokoro, Abuja, Nigeria', color: '#10b981' },
  { icon: <Clock size={18} />, label: 'Hours', value: 'Mon–Fri, 8AM–5PM WAT', color: '#f59e0b' },
];

const ContactSection: React.FC = () => {
  const { ref: headRef, inView: headInView } = useInView<HTMLDivElement>();
  const { ref: formRef, inView: formInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const [form, setForm] = useState({
    name: '', email: '', service: '', message: '',
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', service: '', message: '' });
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '14px 18px',
    background: focused === field ? 'rgba(99,102,241,0.06)' : 'rgba(255,255,255,0.03)',
    border: focused === field ? '1px solid rgba(99,102,241,0.6)' : '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    color: 'white',
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    outline: 'none',
    transition: 'all 0.3s',
    boxShadow: focused === field ? '0 0 0 3px rgba(99,102,241,0.1)' : 'none',
  });

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: 'linear-gradient(180deg, #0a0f1e 0%, #080c18 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div className="orb orb-indigo" style={{ width: '600px', height: '600px', bottom: '-200px', right: '-200px', opacity: 0.1 }} />
        <div className="orb orb-cyan" style={{ width: '400px', height: '400px', top: '-100px', left: '-100px', opacity: 0.07 }} />
        <div className="grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
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
            Get In Touch
          </span>
          <h2 className="section-heading" style={{ color: 'white', marginBottom: '20px' }}>
            Ready to Build<br />
            <span className="gradient-text">Something Extraordinary?</span>
          </h2>
          <p style={{
            color: '#9ca3af',
            fontSize: 'clamp(15px, 2vw, 18px)',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: 'Inter, sans-serif',
          }}>
            Let's discuss your vision. Our team responds within 24 hours with
            a clear plan to get your project moving.
          </p>
        </motion.div>

        <div
          ref={formRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Contact cards */}
            <div style={{ marginBottom: '40px' }}>
              {CONTACT_INFO.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={formInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '16px 20px',
                    background: 'rgba(17,24,39,0.5)',
                    border: `1px solid ${info.color}15`,
                    borderRadius: '12px',
                    marginBottom: '12px',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `${info.color}15`,
                    border: `1px solid ${info.color}25`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: info.color,
                    flexShrink: 0,
                  }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#6b7280', fontFamily: 'Inter, sans-serif', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {info.label}
                    </div>
                    <div style={{ fontSize: '14px', color: '#e5e7eb', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                      {info.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why choose us */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.04))',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '16px',
              padding: '24px',
            }}>
              <h4 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                color: 'white',
                marginBottom: '16px',
              }}>
                Why Work With Us?
              </h4>
              {[
                'Free initial consultation & strategy session',
                'Response within 24 business hours',
                'Direct access to senior engineers',
                'Transparent pricing, no hidden costs',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '12px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  color: '#9ca3af',
                }}>
                  <CheckCircle size={14} style={{ color: '#6366f1', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: 'rgba(17,24,39,0.6)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(99,102,241,0.15)',
              borderRadius: '24px',
              padding: 'clamp(24px, 4vw, 40px)',
            }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', padding: '40px 20px' }}
                >
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: '#10b981',
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '12px',
                  }}>
                    Message Received!
                  </h3>
                  <p style={{ color: '#9ca3af', fontFamily: 'Inter, sans-serif', fontSize: '15px', marginBottom: '24px' }}>
                    Thank you for reaching out. We'll get back to you within 24 hours with a tailored response.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-ghost"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'white',
                    marginBottom: '24px',
                  }}>
                    Send a Message
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        placeholder="Your name"
                        style={{ ...inputStyle('name'), gridColumn: '1' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        placeholder="your@email.com"
                        style={inputStyle('email')}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onFocus={() => setFocused('service')}
                      onBlur={() => setFocused(null)}
                      style={{ ...inputStyle('service'), cursor: 'pointer' }}
                    >
                      <option value="" style={{ background: '#111827' }}>Select a service...</option>
                      <option value="ai" style={{ background: '#111827' }}>AI & Machine Learning</option>
                      <option value="web" style={{ background: '#111827' }}>Web Development</option>
                      <option value="mobile" style={{ background: '#111827' }}>Mobile Apps</option>
                      <option value="data" style={{ background: '#111827' }}>Data Analytics</option>
                      <option value="security" style={{ background: '#111827' }}>Cybersecurity</option>
                      <option value="cloud" style={{ background: '#111827' }}>Cloud & DevOps</option>
                      <option value="other" style={{ background: '#111827' }}>Other / Custom</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '12px', color: '#9ca3af', marginBottom: '6px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={5}
                      placeholder="Tell us about your project, goals, timeline, and budget..."
                      style={{ ...inputStyle('message'), resize: 'vertical', minHeight: '120px' }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary"
                    disabled={submitting}
                    whileHover={{ scale: submitting ? 1 : 1.02 }}
                    whileTap={{ scale: submitting ? 1 : 0.98 }}
                    style={{ width: '100%', justifyContent: 'center', fontSize: '15px', padding: '16px' }}
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send size={16} />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
