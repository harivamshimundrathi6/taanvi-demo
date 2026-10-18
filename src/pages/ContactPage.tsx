import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div style={{ background: '#FAF6F0', minHeight: '80vh', padding: '48px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        
        {/* Header Banner */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ 
            fontSize: '0.82rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.15em', 
            color: '#E1A144', 
            fontWeight: 700 
          }}>
            Taanvi Concierge Service
          </span>
          <h1 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            color: '#510C1A', 
            marginTop: '8px', 
            marginBottom: '14px' 
          }}>
            We'd Love to Hear From You
          </h1>
          <p style={{ color: '#666', maxWidth: '600px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
            Whether you need bespoke sizing assistance, bridal styling advice, or order tracking guidance, our dedicated fashion consultants are at your service.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '36px',
          alignItems: 'start'
        }}>
          
          {/* Contact Details Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(81, 12, 26, 0.06)',
            border: '1px solid #E8E0D7'
          }}>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: '1.45rem', 
              color: '#510C1A', 
              marginBottom: '20px' 
            }}>
              Direct Channels
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: '#F9EBD8', 
                  color: '#510C1A', 
                  padding: '12px', 
                  borderRadius: '10px' 
                }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1A1A1A' }}>Email Concierge</h3>
                  <p style={{ fontSize: '0.88rem', color: '#666', marginTop: '2px' }}>concierge@taanviglobal.com</p>
                  <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '2px' }}>Guaranteed response within 4 hours</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: '#F9EBD8', 
                  color: '#510C1A', 
                  padding: '12px', 
                  borderRadius: '10px' 
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1A1A1A' }}>Phone & WhatsApp</h3>
                  <p style={{ fontSize: '0.88rem', color: '#666', marginTop: '2px' }}>+91 95119 48736</p>
                  <p style={{ fontSize: '0.78rem', color: '#999', marginTop: '2px' }}>Mon - Sat, 10:00 AM - 8:00 PM IST</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  background: '#F9EBD8', 
                  color: '#510C1A', 
                  padding: '12px', 
                  borderRadius: '10px' 
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1A1A1A' }}>Flagship Atelier</h3>
                  <p style={{ fontSize: '0.88rem', color: '#666', marginTop: '2px' }}>
                    Taanvi Global Apparels, Coastal Highway Suite 19958, Global Operations.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ 
              marginTop: '32px', 
              paddingTop: '24px', 
              borderTop: '1px solid #F0E8DE',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#555' }}>
                <Clock size={16} color="#E1A144" />
                <span>Quick Dispatch: Orders processed within 24h</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#555' }}>
                <ShieldCheck size={16} color="#510C1A" />
                <span>100% Genuine Handcrafted Silhouettes</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(81, 12, 26, 0.06)',
            border: '1px solid #E8E0D7'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '36px 12px' }}>
                <div style={{ display: 'inline-flex', color: '#510C1A', marginBottom: '16px' }}>
                  <CheckCircle2 size={56} color="#510C1A" />
                </div>
                <h3 style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontSize: '1.6rem', 
                  color: '#510C1A', 
                  marginBottom: '10px' 
                }}>
                  Message Received!
                </h3>
                <p style={{ color: '#666', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto' }}>
                  Thank you for reaching out, <strong>{formData.name}</strong>. Our senior styling team will review your inquiry and get back to you at <strong>{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    marginTop: '24px',
                    background: '#510C1A',
                    color: '#FFFFFF',
                    padding: '12px 28px',
                    borderRadius: '6px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h2 style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontSize: '1.45rem', 
                  color: '#510C1A', 
                  marginBottom: '6px' 
                }}>
                  Send Us a Direct Message
                </h2>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #DDD',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@domain.com"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #DDD',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        border: '1px solid #DDD',
                        fontSize: '0.92rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>
                    Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #DDD',
                      fontSize: '0.92rem',
                      outline: 'none',
                      background: '#FFF'
                    }}
                  >
                    <option value="General Inquiry">General Styling & Fit Inquiry</option>
                    <option value="Order Tracking">Order Status & Tracking</option>
                    <option value="Returns & Exchange">Returns & Size Exchange</option>
                    <option value="Custom Fit">Custom Sizing / Bridal Request</option>
                    <option value="Wholesale">Wholesale & Stockist Inquiries</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your order or question..."
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      border: '1px solid #DDD',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: '#510C1A',
                    color: '#FAF6F0',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    transition: 'background 0.2s ease',
                    marginTop: '8px'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#3E0813')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#510C1A')}
                >
                  <Send size={18} />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
