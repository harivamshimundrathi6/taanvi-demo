import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, RotateCcw, Truck } from 'lucide-react';
import { TaanviLogo } from './TaanviLogo';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onNavigatePage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onNavigatePage }) => {
  return (
    <footer style={{
      background: '#FAF6F0',
      color: '#1A1A1A',
      borderTop: '2px solid #510C1A',
      marginTop: 'auto'
    }}>
      {/* Brand Commitment Banner */}
      <div style={{
        background: '#510C1A',
        color: '#FAF6F0',
        padding: '24px 0',
        borderBottom: '1px solid rgba(225, 161, 68, 0.25)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <Truck size={22} color="#E1A144" />
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Worldwide Express Shipping</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <RotateCcw size={22} color="#E1A144" />
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>30-Day Hassle-Free Returns</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <ShieldCheck size={22} color="#E1A144" />
            <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>100% Genuine Handcrafted Silhouettes</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 24px 30px' }}>
        
        {/* Main 4 Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          
          {/* Col 1: Connect With Us */}
          <div>
            <h3 style={{ 
              fontSize: '0.95rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              color: '#510C1A',
              marginBottom: '18px', 
              letterSpacing: '0.08em' 
            }}>
              Connect With Us
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#555' }}>
              <li>
                <a href="tel:+919511948736" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} color="#510C1A" />
                  <span>Call / WhatsApp: +91 95119 48736</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage("contact")} 
                  style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#555', cursor: 'pointer' }}
                >
                  <Mail size={16} color="#510C1A" />
                  <span>concierge@taanviglobal.com</span>
                </button>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#510C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  <span>Instagram @taanvi.global</span>
                </a>
              </li>
              <li>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={16} color="#510C1A" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Flagship Atelier, Coastal Highway 19958</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 2: Order Support (Separate Pages) */}
          <div>
            <h3 style={{ 
              fontSize: '0.95rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              color: '#510C1A',
              marginBottom: '18px', 
              letterSpacing: '0.08em' 
            }}>
              Order Support
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#555' }}>
              <li>
                <button 
                  onClick={() => onNavigatePage("tracking")}
                  style={{ color: '#555', cursor: 'pointer', textAlign: 'left' }}
                >
                  Track Your Order
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage("policy")}
                  style={{ color: '#555', cursor: 'pointer', textAlign: 'left' }}
                >
                  Refund &amp; Exchange Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage("policy")}
                  style={{ color: '#555', cursor: 'pointer', textAlign: 'left' }}
                >
                  Shipping Policy &amp; Delivery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage("contact")}
                  style={{ color: '#555', cursor: 'pointer', textAlign: 'left' }}
                >
                  FAQ’s &amp; Bespoke Sizing Guide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage("policy")}
                  style={{ color: '#555', cursor: 'pointer', textAlign: 'left' }}
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: We Are Taanvi (Separate Pages) */}
          <div>
            <h3 style={{ 
              fontSize: '0.95rem', 
              fontWeight: 700, 
              textTransform: 'uppercase', 
              color: '#510C1A',
              marginBottom: '18px', 
              letterSpacing: '0.08em' 
            }}>
              We Are Taanvi
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem', color: '#555' }}>
              <li>
                <button 
                  onClick={() => onNavigatePage("about")}
                  style={{ color: '#555', cursor: 'pointer', textAlign: 'left' }}
                >
                  Our Craft &amp; Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage("contact")}
                  style={{ color: '#555', cursor: 'pointer', textAlign: 'left' }}
                >
                  Contact Concierge
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigatePage("about")}
                  style={{ color: '#555', cursor: 'pointer', textAlign: 'left' }}
                >
                  Artisanal Heritage &amp; Hand-blocks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectCategory("Most Wanted")}
                  style={{ color: '#510C1A', fontWeight: 600, cursor: 'pointer', textAlign: 'left' }}
                >
                  Cult Bestsellers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Info & Brand Crest */}
          <div>
            <div style={{ marginBottom: '14px' }}>
              <TaanviLogo height={38} variant="maroon" />
            </div>
            <p style={{ fontSize: '0.86rem', color: '#666', lineHeight: 1.6, marginBottom: '10px' }}>
              <strong>Atelier Headquarters:</strong> Taanvi Global Apparels, Coastal Highway Suite 19958, Global Operations.
            </p>
            <p style={{ fontSize: '0.86rem', color: '#666', lineHeight: 1.6 }}>
              <strong>Support Concierge:</strong> concierge@taanviglobal.com
            </p>
          </div>

        </div>

        {/* Payment & Copyright Strip */}
        <div style={{
          borderTop: '1px solid #E8E0D7',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '0.8rem',
          color: '#888'
        }}>
          <div>
            © {new Date().getFullYear()} TAANVI GLOBAL. All original designs, hand-block patterns, and boned silhouettes are protected.
          </div>

          {/* Accepted Cards */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span>Secure checkout:</span>
            <span style={{ background: '#FFFFFF', padding: '4px 8px', borderRadius: '4px', border: '1px solid #E8E0D7', fontWeight: 600, color: '#333' }}>Visa</span>
            <span style={{ background: '#FFFFFF', padding: '4px 8px', borderRadius: '4px', border: '1px solid #E8E0D7', fontWeight: 600, color: '#333' }}>Mastercard</span>
            <span style={{ background: '#FFFFFF', padding: '4px 8px', borderRadius: '4px', border: '1px solid #E8E0D7', fontWeight: 600, color: '#333' }}>Amex</span>
            <span style={{ background: '#FFFFFF', padding: '4px 8px', borderRadius: '4px', border: '1px solid #E8E0D7', fontWeight: 600, color: '#333' }}>Apple Pay</span>
            <span style={{ background: '#FFFFFF', padding: '4px 8px', borderRadius: '4px', border: '1px solid #E8E0D7', fontWeight: 600, color: '#333' }}>PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
