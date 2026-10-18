import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Bookmark, ChevronDown, Phone, Clock, X, User } from 'lucide-react';
import { TaanviLogo } from './TaanviLogo';

interface HeaderProps {
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenStories: () => void;
  onSelectCategory: (cat: string) => void;
  onNavigatePage: (page: string) => void;
  cartCount: number;
  wishlistCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenStories,
  onSelectCategory,
  onNavigatePage,
  cartCount,
  wishlistCount
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => {
      // Trigger scroll transition after passing hero top threshold (80px)
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAccordion = (key: string) => {
    setOpenAccordions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const navPills = [
    { label: "New in", cat: "New In", hasDot: false },
    { label: "Shop All", cat: "all", hasDot: false },
    { label: "Kurtis", cat: "Kurtis", hasDot: false },
    { label: "Trending", cat: "Most Wanted", hasDot: true },
    { label: "Tops", cat: "tops", hasDot: false },
    { label: "Bottom", cat: "pants", hasDot: false }
  ];

  const menuCategories = [
    {
      title: "Kurtis",
      subitems: [
        { label: "Corset Kurtis", cat: "corset-tops" },
        { label: "Short Kurtis", cat: "kurti-short" },
        { label: "Long Kurtis", cat: "kurti-long" },
        { label: "Sleeveless Kurtis", cat: "sleeveless" },
        { label: "Deep Back Kurtis", cat: "deep-back" },
        { label: "All Kurtis", cat: "Kurtis" }
      ]
    },
    {
      title: "Dresses & Sets",
      subitems: [
        { label: "Skirt-sets", cat: "sets" },
        { label: "Co-ord Sets", cat: "sets" },
        { label: "Maxi Dresses", cat: "dresses" },
        { label: "Mini Dresses", cat: "dresses" },
        { label: "All Sets & Dresses", cat: "Sets" }
      ]
    },
    {
      title: "Taanvi Men",
      subitems: [
        { label: "Artisan Kurtas", cat: "Nisho Men" },
        { label: "Shop All Men", cat: "Nisho Men" }
      ]
    },
    {
      title: "Tops & Bottoms",
      subitems: [
        { label: "Corset Tops", cat: "corset-tops" },
        { label: "Halter Tops", cat: "tops" },
        { label: "Loose Fitting Pants", cat: "pants" },
        { label: "Artisan Skirts", cat: "skirt" }
      ]
    }
  ];

  return (
    <>
      {/* Floating Header Bar with Dynamic Sticky Behavior matching Nishorama */}
      <header 
        style={{
          position: 'fixed',
          top: isScrolled ? 0 : '36px',
          left: 0,
          width: '100%',
          zIndex: 90,
          pointerEvents: 'none',
          padding: isScrolled ? '12px 24px' : '16px 28px',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          background: isScrolled ? 'rgba(255, 255, 255, 0.96)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(14px)' : 'none',
          boxShadow: isScrolled ? '0 4px 24px rgba(0,0,0,0.06)' : 'none'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '1800px',
          margin: '0 auto',
          position: 'relative'
        }}>
          
          {/* Left Navigation: Logo & Menu Capsule Button */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            pointerEvents: 'auto',
            flex: '0 0 auto',
            zIndex: 10
          }}>
            
            {/* Animated Brand Logo in Top-Left (Smoothly slides in ONLY when scrolled down) */}
            <div 
              style={{
                width: isScrolled ? 'auto' : 0,
                opacity: isScrolled ? 1 : 0,
                transform: isScrolled ? 'translateX(0) scale(1)' : 'translateX(-20px) scale(0.8)',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                overflow: 'hidden',
                marginRight: isScrolled ? '14px' : 0,
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <a 
                href="#home" 
                onClick={(e) => { e.preventDefault(); onNavigatePage("home"); }}
                style={{ display: 'inline-flex', alignItems: 'center' }}
              >
                <TaanviLogo height={30} variant="maroon" />
              </a>
            </div>

            {/* Nishorama Signature 'Menu' Capsule Pill (Dark Brown #482922) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              style={{
                background: '#482922',
                borderRadius: '50px',
                padding: '7px 18px 7px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.18)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.84rem',
                fontFamily: "'Archivo', 'Assistant', sans-serif",
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.15s ease, background 0.15s ease',
                zIndex: 10
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = '#361e19';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#482922';
              }}
            >
              {/* Double Line Hamburger matching Nishorama */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5px', width: '15px' }}>
                <span style={{ width: '100%', height: '1.5px', background: '#FFFFFF', borderRadius: '1px' }}></span>
                <span style={{ width: '100%', height: '1.5px', background: '#FFFFFF', borderRadius: '1px' }}></span>
              </div>
              <span>Menu</span>
            </button>

            {/* Sticky Minimal Category Links when Scrolled */}
            {isScrolled && (
              <nav className="desktop-only animate-fade-in" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '12px' }}>
                <button 
                  onClick={() => onSelectCategory("New In")}
                  style={{ fontSize: '0.86rem', fontWeight: 600, color: '#510C1A', letterSpacing: '0.02em', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                  New In
                </button>
                <button 
                  onClick={() => onSelectCategory("all")}
                  style={{ fontSize: '0.86rem', fontWeight: 500, color: '#444', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                  Shop All
                </button>
                <button 
                  onClick={() => onSelectCategory("Kurtis")}
                  style={{ fontSize: '0.86rem', fontWeight: 500, color: '#444', cursor: 'pointer', background: 'none', border: 'none' }}
                >
                  Kurtis
                </button>
                <button 
                  onClick={() => onSelectCategory("Most Wanted")}
                  style={{ fontSize: '0.86rem', fontWeight: 600, color: '#510C1A', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', background: 'none', border: 'none' }}
                >
                  Trending
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#D9383A' }}></span>
                </button>
              </nav>
            )}

          </div>

          {/* Middle Navigation: Desktop Capsule Pills Centered (Hidden when scrolled, exactly like Nishorama) */}
          <div 
            className="desktop-only" 
            style={{ 
              position: 'absolute',
              left: '50%',
              transform: isScrolled ? 'translate(-50%, -180%)' : 'translate(-50%, 0)',
              opacity: isScrolled ? 0 : 1,
              transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease',
              pointerEvents: isScrolled ? 'none' : 'auto',
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              zIndex: 5
            }}
          >
            {navPills.map((pill) => (
              <button
                key={pill.label}
                onClick={() => onSelectCategory(pill.cat)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '50px',
                  padding: pill.hasDot ? '7px 14px 7px 16px' : '7px 18px',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  fontFamily: "'Archivo', 'Assistant', sans-serif",
                  color: '#382218',
                  border: 'none',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'transform 0.15s ease, background 0.15s ease',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
                }}
              >
                <span>{pill.label}</span>
                {pill.hasDot && (
                  <span style={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    background: '#D9383A', 
                    display: 'inline-block' 
                  }} />
                )}
              </button>
            ))}
          </div>

          {/* Right Action Icons: Rounded White Buttons & Cart Pill */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px', 
            pointerEvents: 'auto',
            flex: '0 0 auto'
          }}>
            
            {/* Story Reel Ring Button */}
            <button
              onClick={onOpenStories}
              title="Watch Taanvi Stories"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFFFFF',
                boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <svg 
                className="animate-spin"
                style={{ position: 'absolute', inset: -2, width: '40px', height: '40px' }}
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#header-story-gradient)"
                  strokeWidth="6"
                  strokeDasharray="70 20"
                />
                <defs>
                  <linearGradient id="header-story-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0074FF" />
                    <stop offset="50%" stopColor="#B92046" />
                    <stop offset="100%" stopColor="#FF6B00" />
                  </linearGradient>
                </defs>
              </svg>
              <span style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: '0.75rem', 
                fontWeight: 900, 
                color: '#510C1A' 
              }}>
                ता
              </span>
            </button>

            {/* Wishlist Icon Button */}
            <button
              onClick={onOpenWishlist}
              title="Saved items"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFFFFF',
                boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                color: '#382218',
                position: 'relative'
              }}
            >
              <Bookmark size={18} />
              {wishlistCount > 0 && (
                <span style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  background: '#E1A144',
                  color: '#3E0813',
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Search Icon Button */}
            <button
              onClick={onOpenSearch}
              title="Search store"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFFFFF',
                boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                color: '#382218'
              }}
            >
              <Search size={18} />
            </button>

            {/* Account / Concierge Button */}
            <button
              onClick={() => onNavigatePage("contact")}
              title="Taanvi Concierge"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFFFFF',
                boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                color: '#382218'
              }}
            >
              <User size={18} />
            </button>

            {/* Cart Pill Button (Matches Nishorama 'Cart | 0' Pill) */}
            <button
              onClick={onOpenCart}
              title="View Bag"
              style={{
                background: '#FFFFFF',
                borderRadius: '50px',
                padding: '7px 18px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                border: 'none',
                cursor: 'pointer',
                color: '#382218',
                fontFamily: "'Archivo', 'Assistant', sans-serif",
                fontSize: '0.82rem',
                fontWeight: 700,
                whiteSpace: 'nowrap'
              }}
            >
              <ShoppingBag size={17} />
              <span>Cart | {cartCount}</span>
            </button>

          </div>

        </div>
      </header>

      {/* Slide-out Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          display: 'flex'
        }}>
          {/* Backdrop */}
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(62, 8, 19, 0.45)',
              backdropFilter: 'blur(3px)'
            }}
          />

          {/* Drawer Content */}
          <div style={{
            position: 'relative',
            width: '88%',
            maxWidth: '380px',
            background: '#FAF6F0',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '4px 0 24px rgba(0,0,0,0.2)',
            overflowY: 'auto'
          }}>
            {/* Drawer Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '20px 24px',
              borderBottom: '1px solid #E8E0D7'
            }}>
              <TaanviLogo height={34} variant="maroon" />
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ padding: '8px', color: '#510C1A' }}
              >
                <X size={24} />
              </button>
            </div>

            {/* Direct Quick Links */}
            <div style={{ padding: '16px 24px', borderBottom: '1px solid #E8E0D7' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <button 
                  onClick={() => { onSelectCategory("New In"); setIsMobileMenuOpen(false); }}
                  style={{ textAlign: 'left', fontSize: '1.05rem', fontWeight: 700, color: '#510C1A' }}
                >
                  NEW IN
                </button>
                <button 
                  onClick={() => { onSelectCategory("Most Wanted"); setIsMobileMenuOpen(false); }}
                  style={{ textAlign: 'left', fontSize: '1.05rem', fontWeight: 700, color: '#510C1A' }}
                >
                  MOST WANTED
                </button>
                <button 
                  onClick={() => { onSelectCategory("all"); setIsMobileMenuOpen(false); }}
                  style={{ textAlign: 'left', fontSize: '1.05rem', fontWeight: 700, color: '#510C1A' }}
                >
                  SHOP ALL
                </button>
                <button 
                  onClick={() => { onNavigatePage("about"); setIsMobileMenuOpen(false); }}
                  style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#444' }}
                >
                  OUR CRAFT & STORY
                </button>
                <button 
                  onClick={() => { onNavigatePage("contact"); setIsMobileMenuOpen(false); }}
                  style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#444' }}
                >
                  CONCIERGE & SUPPORT
                </button>
                <button 
                  onClick={() => { onNavigatePage("tracking"); setIsMobileMenuOpen(false); }}
                  style={{ textAlign: 'left', fontSize: '1rem', fontWeight: 600, color: '#444' }}
                >
                  TRACK ORDER
                </button>
              </div>
            </div>

            {/* Category Accordions */}
            <div style={{ flex: 1, padding: '12px 24px' }}>
              {menuCategories.map((cat) => {
                const isOpen = !!openAccordions[cat.title];
                return (
                  <div key={cat.title} style={{ borderBottom: '1px solid #E8E0D7', padding: '12px 0' }}>
                    <button
                      onClick={() => toggleAccordion(cat.title)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#510C1A'
                      }}
                    >
                      <span>{cat.title}</span>
                      <ChevronDown 
                        size={18} 
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease'
                        }} 
                      />
                    </button>
                    {isOpen && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '12px', paddingLeft: '8px' }}>
                        {cat.subitems.map((sub) => (
                          <button
                            key={sub.label}
                            onClick={() => {
                              onSelectCategory(sub.cat);
                              setIsMobileMenuOpen(false);
                            }}
                            style={{
                              textAlign: 'left',
                              fontSize: '0.88rem',
                              color: '#666',
                              padding: '4px 0'
                            }}
                          >
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Support Box in Drawer */}
            <div style={{ padding: '20px 24px', background: '#F4ECE1', borderTop: '1px solid #E8E0D7' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#510C1A', marginBottom: '4px' }}>
                Taanvi Concierge
              </div>
              <div style={{ fontSize: '0.78rem', color: '#666', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={14} color="#E1A144" />
                Mon to Sat, 10am - 8pm IST
              </div>
              <a 
                href="tel:+919511948736" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#510C1A',
                  color: '#FAF6F0',
                  padding: '9px 16px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}
              >
                <Phone size={15} />
                +91 95119 48736
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Global CSS for desktop responsive */}
      <style>{`
        @media (max-width: 990px) {
          .desktop-only {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
