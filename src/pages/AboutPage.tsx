import React from 'react';
import { Scissors, HeartHandshake, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutProps {
  onExplore: (category: string) => void;
}

export const AboutPage: React.FC<AboutProps> = ({ onExplore }) => {
  return (
    <div style={{ background: '#FAF6F0', minHeight: '80vh', padding: '54px 0 90px' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ 
            fontSize: '0.84rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.18em', 
            color: '#E1A144', 
            fontWeight: 700 
          }}>
            Our Artisanal Legacy
          </span>
          <h1 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: '2.8rem', 
            fontWeight: 700, 
            color: '#510C1A', 
            marginTop: '10px', 
            marginBottom: '18px',
            lineHeight: 1.2
          }}>
            Bold Silhouettes. Rooted Craft. Raw Edge.
          </h1>
          <p style={{ 
            color: '#555', 
            maxWidth: '720px', 
            margin: '0 auto', 
            fontSize: '1.08rem', 
            lineHeight: 1.7 
          }}>
            Taanvi was founded to reimagine Indian ethnic wear through contemporary structure. From boned corset kurtis to sculpted drapes and deep-back silhouettes, we merge time-honoured handloom traditions with modern empowerment.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px', 
          marginBottom: '64px',
          alignItems: 'center'
        }}>
          <div>
            <img 
              src="/images/banners/banner_corset_kurtis.jpg" 
              alt="Taanvi Atelier Handcraft" 
              style={{ 
                width: '100%', 
                borderRadius: '12px', 
                boxShadow: '0 12px 36px rgba(81, 12, 26, 0.12)',
                border: '1px solid #E8E0D7'
              }}
            />
          </div>
          <div>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: '1.85rem', 
              color: '#510C1A', 
              marginBottom: '16px' 
            }}>
              The Signature Corset Kurti
            </h2>
            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '16px' }}>
              We challenged the conventional loose kurti by embedding gentle architectural boning and corset tailoring into rich cotton and mulberry silk fabrics. The result is a silhouette that offers supportive structure without compromising natural ease.
            </p>
            <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '24px' }}>
              Every piece is printed using natural vegetable dyes, hand-block stamped by generational artisan families in Sanganer and Bagru, and finished with meticulous seam detailing.
            </p>
            <button
              onClick={() => onExplore('corset-tops')}
              style={{
                background: '#510C1A',
                color: '#FAF6F0',
                padding: '12px 26px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: '0.04em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                cursor: 'pointer'
              }}
            >
              <span>Explore Corset Kurtis</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Pillars */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '48px 36px',
          boxShadow: '0 8px 30px rgba(81, 12, 26, 0.05)',
          border: '1px solid #E8E0D7'
        }}>
          <h3 style={{ 
            textAlign: 'center', 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: '1.8rem', 
            color: '#510C1A', 
            marginBottom: '36px' 
          }}>
            The Taanvi Standard
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '28px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '50%', 
                background: '#F9EBD8', 
                color: '#510C1A', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 14px'
              }}>
                <Scissors size={24} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Bespoke Fit</h4>
              <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.5 }}>
                Engineered measurements developed across 12 body types to ensure zero gapping and tailored confidence.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '50%', 
                background: '#F9EBD8', 
                color: '#510C1A', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 14px'
              }}>
                <HeartHandshake size={24} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Fair Trade Craft</h4>
              <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.5 }}>
                Direct partnerships paying fair wages to master weavers and block-printers across heritage clusters.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '54px', 
                height: '54px', 
                borderRadius: '50%', 
                background: '#F9EBD8', 
                color: '#510C1A', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 14px'
              }}>
                <ShieldCheck size={24} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Pure Textiles</h4>
              <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.5 }}>
                Zero synthetic plastics in our main fabrics; 100% natural cottons, linens, and certified pure silks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
