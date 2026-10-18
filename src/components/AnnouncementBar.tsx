import React, { useState, useEffect } from 'react';

const ANNOUNCEMENTS = [
  "✨ Festive Couture & Heritage Hand-Crafted Kurtis • All-India Express Delivery",
  "Free Express Shipping on Orders Above ₹2,499 • No Hidden Charges",
  "Easy 30-Day Hassle-Free Returns & Free Size Exchanges",
  "Signature Corset Kurtis & Co-Ord Sets • Designed with Transparent Edge"
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      background: 'linear-gradient(90deg, #3E0813 0%, #510C1A 50%, #3E0813 100%)',
      color: '#FAF6F0',
      fontSize: '0.82rem',
      fontWeight: 500,
      letterSpacing: '0.04em',
      height: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 16px',
      borderBottom: '1px solid rgba(225, 161, 68, 0.25)'
    }}>
      <div 
        key={index} 
        className="animate-fade-in"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textAlign: 'center'
        }}
      >
        <span style={{ color: '#E1A144', fontWeight: 700 }}>•</span>
        <span style={{ color: '#FAF6F0' }}>{ANNOUNCEMENTS[index]}</span>
        <span style={{ color: '#E1A144', fontWeight: 700 }}>•</span>
      </div>
    </div>
  );
};
