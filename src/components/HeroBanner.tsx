import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  onExplore: (category: string) => void;
}

const SLIDES = [
  {
    id: 1,
    title: "TAANVOTSAV",
    tagline: "Festive Glamour • Sculpted Bandhani Silhouettes",
    category: "Festive Bangers",
    desktopImg: "/images/banners/hero_navratri_desktop.png",
    mobileImg: "/images/banners/hero_navratri_mobile.png",
    foregroundImg: "/images/banners/hero_navratri_foreground.png",
    linkText: "EXPLORE NOW",
    fallbackUrl: "https://www.nishorama.com/cdn/shop/files/NAVRATRI_1.png?v=1790749616"
  },
  {
    id: 2,
    title: "ISHQ & NOOR",
    tagline: "The Romantic Edit • Halter Tops & Co-Ords",
    category: "sets",
    desktopImg: "/images/banners/hero_ishq_desktop.png",
    mobileImg: "/images/banners/hero_ishq_desktop.png",
    foregroundImg: "/images/banners/hero_ishq_foreground.png",
    linkText: "SHOP ALL",
    fallbackUrl: "https://www.nishorama.com/cdn/shop/files/ISHQ_1.png?v=1790750714"
  },
  {
    id: 3,
    title: "AABH ATELIER",
    tagline: "Signature Corset Kurtis & Dabu Hand-Blocks",
    category: "corset-tops",
    desktopImg: "/images/banners/hero_aabh_desktop.png",
    mobileImg: "/images/banners/hero_aabh_desktop.png",
    foregroundImg: "/images/banners/hero_aabh_foreground.png",
    linkText: "MOST WANTED",
    fallbackUrl: "https://www.nishorama.com/cdn/shop/files/AABH_1.png?v=1790750694"
  }
];

export const HeroBanner: React.FC<HeroBannerProps> = ({ onExplore }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Track scroll position for dynamic parallax and transition
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto transition every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  // Calculate transition progress between 0px and 240px scroll
  // When scrollY=0: fully visible in hero background
  // When scrollY>=240: translates smoothly up to header position and fades out as header logo takes over
  const scrollProgress = Math.min(1, Math.max(0, scrollY / 220));
  const logoOpacity = Math.max(0, 1 - scrollProgress * 1.2);
  const logoScale = 1 - scrollProgress * 0.45;
  const logoTranslateY = -scrollProgress * 120; // moves upward towards top-left

  return (
    <section 
      className="hero-viewport-section"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '620px',
        maxHeight: '100vh',
        overflow: 'hidden',
        background: '#1A0407'
      }}
    >
      {/* 1. LAYER 1: Background Images (Orange Bandhani Background) */}
      {SLIDES.map((s, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={s.id}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 0.9s cubic-bezier(0.25, 1, 0.5, 1)',
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: 1
            }}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={s.mobileImg} />
              <img
                src={s.desktopImg}
                alt={s.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = s.fallbackUrl;
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  display: 'block'
                }}
              />
            </picture>
          </div>
        );
      })}

      {/* 2. LAYER 2: GIANT 'TAANVI' TEXT (BEHIND THE FOREGROUND MODELS - LOCKSCREEN DEPTH EFFECT) */}
      {/* As the user scrolls up, this moves gracefully upward towards the top-left */}
      <div 
        className="hero-taanvi-text"
        style={{
          position: 'absolute',
          top: '18%',
          left: '50%',
          transform: `translate(-50%, calc(-20% + ${logoTranslateY}px)) scale(${logoScale})`,
          transformOrigin: 'center center',
          width: '98%',
          maxWidth: '1800px',
          textAlign: 'center',
          pointerEvents: 'none',
          zIndex: 2,
          userSelect: 'none',
          opacity: logoOpacity,
          transition: 'transform 0.1s ease-out, opacity 0.15s ease-out'
        }}
      >
        <span 
          style={{
            display: 'block',
            fontFamily: "'Archivo', 'Impact', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(4.2rem, 18.5vw, 19.5rem)',
            lineHeight: 0.85,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            textShadow: '0 6px 40px rgba(0, 0, 0, 0.45)',
            whiteSpace: 'nowrap'
          }}
        >
          TAANVI
        </span>
      </div>

      {/* 3. LAYER 3: FOREGROUND MODELS CUTOUT (So TAANVI is seamlessly placed BEHIND the models) */}
      {slide.foregroundImg && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 3,
            pointerEvents: 'none'
          }}
        >
          <img
            src={slide.foregroundImg}
            alt="Taanvi Models Foreground"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block'
            }}
          />
        </div>
      )}

      {/* 4. Subtle Vignette Overlay for Crisp Contrast */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)',
        pointerEvents: 'none',
        zIndex: 4
      }} />

      {/* 5. LAYER 5: Floating Centered Capsule Pill Link ('NISHOTSAV2' / 'SHOP ALL') */}
      <div 
        className="hero-cta-box"
        style={{
          position: 'absolute',
          left: '50%',
          bottom: '72px',
          transform: 'translateX(-50%)',
          zIndex: 10,
          textAlign: 'center'
        }}
      >
        <button
          onClick={() => onExplore(slide.category)}
          style={{
            background: '#FFFFFF',
            color: '#510C1A',
            borderRadius: '7rem',
            padding: '12px 32px',
            fontFamily: "'Archivo', sans-serif",
            fontSize: 'clamp(0.82rem, 1vw, 1.05rem)',
            fontWeight: 800,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            boxShadow: '0 6px 26px rgba(0, 0, 0, 0.28)',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.25s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.background = '#FAF6F0';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.background = '#FFFFFF';
          }}
        >
          <span>{slide.linkText}</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* 6. LAYER 6: Bottom Slide Pagination Dots (Separated from CTA) */}
      <div 
        className="hero-dots-box"
        style={{
          position: 'absolute',
          bottom: '22px',
          left: 0,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          zIndex: 10
        }}
      >
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? '22px' : '8px',
              height: '6px',
              borderRadius: '3px',
              background: idx === currentSlide ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 1px 4px rgba(0,0,0,0.4)'
            }}
          />
        ))}
      </div>

      {/* Responsive adjustments for mobile */}
      <style>{`
        @media (max-width: 768px) {
          .hero-viewport-section {
            height: 90vh !important;
          }
          .hero-viewport-section .gallery-banner-link,
          .hero-viewport-section button {
            bottom: 16vw !important;
            padding: 10px 24px !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </section>
  );
};
