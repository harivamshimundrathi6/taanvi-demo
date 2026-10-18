import React from 'react';
import { RotateCcw, Truck, Check } from 'lucide-react';

export const PolicyPage: React.FC = () => {
  return (
    <div style={{ background: '#FAF6F0', minHeight: '80vh', padding: '50px 0 85px' }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <span style={{ 
            fontSize: '0.84rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.16em', 
            color: '#E1A144', 
            fontWeight: 700 
          }}>
            Worry-Free Customer Guarantee
          </span>
          <h1 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            color: '#510C1A', 
            marginTop: '8px', 
            marginBottom: '12px' 
          }}>
            Shipping, Exchanges & Return Policy
          </h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: '580px', margin: '0 auto' }}>
            We want you to feel sublime in every Taanvi silhouette. If the fit isn't immaculate, our seamless exchange policy has you covered.
          </p>
        </div>

        {/* 3 Grid Pillars */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 6px 24px rgba(81, 12, 26, 0.05)',
            border: '1px solid #E8E0D7'
          }}>
            <div style={{ background: '#F9EBD8', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#510C1A', marginBottom: '16px' }}>
              <RotateCcw size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>
              30-Day Hassle-Free Exchange
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6 }}>
              Need a different waist or bust fit on your corset kurti? Request a free size exchange within 30 days of delivery.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 6px 24px rgba(81, 12, 26, 0.05)',
            border: '1px solid #E8E0D7'
          }}>
            <div style={{ background: '#F9EBD8', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#510C1A', marginBottom: '16px' }}>
              <Truck size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>
              Worldwide Express Shipping
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6 }}>
              Free express shipping on all orders above ₹2,499. Dispatched in tamper-proof protective luxury boxes.
            </p>
          </div>

          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '28px',
            boxShadow: '0 6px 24px rgba(81, 12, 26, 0.05)',
            border: '1px solid #E8E0D7'
          }}>
            <div style={{ background: '#F9EBD8', width: '48px', height: '48px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#510C1A', marginBottom: '16px' }}>
              <Check size={22} />
            </div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>
              Duties & Taxes Covered
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.6 }}>
              All international customs duties and local taxes are pre-calculated and covered at checkout—zero surprise courier fees.
            </p>
          </div>

        </div>

        {/* Detailed Guidelines */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '36px',
          boxShadow: '0 8px 30px rgba(81, 12, 26, 0.05)',
          border: '1px solid #E8E0D7'
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', color: '#510C1A', marginBottom: '18px' }}>
            Frequently Asked Shipping & Return Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>
                How do I initiate a return or exchange?
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                Simply write to our support concierge at <strong>concierge@taanviglobal.com</strong> or message our WhatsApp concierge at <strong>+91 95119 48736</strong> with your Order ID. A reverse doorstep pickup will be arranged automatically.
              </p>
            </div>

            <div style={{ borderTop: '1px solid #F0E8DE', paddingTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>
                What is the typical delivery timeframe?
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                Orders within India are delivered within 2-4 business days. International express shipments to the US, UK, Canada, Australia, and UAE are delivered within 4-7 business days via DHL Express / FedEx.
              </p>
            </div>

            <div style={{ borderTop: '1px solid #F0E8DE', paddingTop: '16px' }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '6px' }}>
                Are items returnable if tags are detached?
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                To qualify for a full refund or exchange, garments must remain in unworn, unwashed condition with all original Taanvi artisan tags intact.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
