import React, { useState } from 'react';
import { Search, PackageCheck, Truck, MapPin, AlertCircle } from 'lucide-react';

export const TrackingPage: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [tracked, setTracked] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) {
      setError('Please enter your Order ID (e.g. TNV-98421)');
      return;
    }
    setError('');
    setTracked(true);
  };

  return (
    <div style={{ background: '#FAF6F0', minHeight: '80vh', padding: '50px 0 85px' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{ 
            fontSize: '0.84rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.16em', 
            color: '#E1A144', 
            fontWeight: 700 
          }}>
            Real-Time Logistics
          </span>
          <h1 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: '2.5rem', 
            fontWeight: 700, 
            color: '#510C1A', 
            marginTop: '8px', 
            marginBottom: '12px' 
          }}>
            Track Your Taanvi Order
          </h1>
          <p style={{ color: '#666', fontSize: '1rem', maxWidth: '520px', margin: '0 auto' }}>
            Enter your order tracking reference ID below to monitor packaging, airport clearance, and live courier delivery status.
          </p>
        </div>

        {/* Tracking Input Card */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '36px',
          boxShadow: '0 8px 30px rgba(81, 12, 26, 0.06)',
          border: '1px solid #E8E0D7',
          marginBottom: '32px'
        }}>
          <form onSubmit={handleTrack} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>
                  Order ID or AWB Tracking Number *
                </label>
                <input
                  type="text"
                  placeholder="e.g. TNV-98421 or FEDEX-81928"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
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
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>
                  Billing Email or Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter registered contact"
                  value={phoneOrEmail}
                  onChange={(e) => setPhoneOrEmail(e.target.value)}
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

            {error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#D9383A', fontSize: '0.88rem' }}>
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              style={{
                background: '#510C1A',
                color: '#FAF6F0',
                border: 'none',
                padding: '14px 28px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: 'fit-content'
              }}
            >
              <Search size={18} />
              <span>Track Live Status</span>
            </button>
          </form>
        </div>

        {/* Tracking Live Result Mock */}
        {tracked && (
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(81, 12, 26, 0.06)',
            border: '1px solid #E8E0D7'
          }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              borderBottom: '1px solid #F0E8DE',
              paddingBottom: '20px',
              marginBottom: '28px'
            }}>
              <div>
                <span style={{ fontSize: '0.82rem', color: '#777', textTransform: 'uppercase' }}>Tracking Reference</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#510C1A' }}>
                  {orderId.toUpperCase()}
                </h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.82rem', color: '#777', textTransform: 'uppercase' }}>Courier Partner</span>
                <p style={{ fontSize: '1rem', fontWeight: 600, color: '#1A1A1A' }}>DHL Express Global</p>
              </div>
            </div>

            {/* Stepper */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ 
                  background: '#510C1A', 
                  color: '#FAF6F0', 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <PackageCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1A1A1A' }}>Order Confirmed & Atelier Packaged</h4>
                  <p style={{ fontSize: '0.84rem', color: '#666', marginTop: '2px' }}>Garment passed high-precision quality check and folded into linen garment pouch.</p>
                  <span style={{ fontSize: '0.78rem', color: '#888' }}>Completed Yesterday, 4:15 PM</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ 
                  background: '#E1A144', 
                  color: '#3E0813', 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Truck size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1A1A1A' }}>In Transit - Air Freight Dispatched</h4>
                  <p style={{ fontSize: '0.84rem', color: '#666', marginTop: '2px' }}>Departed International Hub. Customs clearance pre-approved.</p>
                  <span style={{ fontSize: '0.78rem', color: '#888' }}>Today, 09:30 AM</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', opacity: 0.5 }}>
                <div style={{ 
                  background: '#E0D8CE', 
                  color: '#666', 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1A1A1A' }}>Out for Delivery</h4>
                  <p style={{ fontSize: '0.84rem', color: '#666', marginTop: '2px' }}>Local courier assigned for direct doorstep delivery with signature.</p>
                  <span style={{ fontSize: '0.78rem', color: '#888' }}>Estimated: In 2 Business Days</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
