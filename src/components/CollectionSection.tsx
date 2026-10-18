import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface CollectionSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  products: Product[];
  banner?: {
    image: string;
    alt: string;
    title: string;
  };
  onSelectProduct: (p: Product) => void;
  onQuickAdd: (p: Product, size: string) => void;
  onToggleWishlist: (p: Product) => void;
  wishlistIds: Set<string>;
  onViewAll: (category: string) => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({
  id: _id,
  title,
  subtitle,
  products,
  banner,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds,
  onViewAll
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '36px 0', borderBottom: '1px solid #f0f0f0' }}>
      
      {/* Editorial Category Image Banner if present */}
      {banner && (
        <div 
          style={{ 
            maxWidth: '1440px', 
            margin: '0 auto 32px auto', 
            padding: '0 24px',
            cursor: 'pointer'
          }}
          onClick={() => onViewAll(title)}
        >
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img 
              src={banner.image} 
              alt={banner.alt}
              style={{
                width: '100%',
                maxHeight: '340px',
                objectFit: 'cover',
                display: 'block'
              }}
              loading="lazy"
            />
          </div>
        </div>
      )}

      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '22px'
        }}>
          <div>
            <span style={{
              fontFamily: "'Archivo', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#d9383a'
            }}>
              Curated Edit
            </span>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#382218',
              letterSpacing: '0.01em',
              textTransform: 'uppercase'
            }}>
              {title}
            </h2>
            {subtitle && (
              <p style={{ fontSize: '0.86rem', color: '#666', marginTop: '2px' }}>
                {subtitle}
              </p>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => onViewAll(title)}
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#382218',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                textTransform: 'uppercase',
                marginRight: '8px'
              }}
            >
              View All ({products.length})
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => scroll('left')}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#382218',
                background: '#ffffff'
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#382218',
                background: '#ffffff'
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div 
          ref={scrollRef}
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'minmax(240px, 1fr)',
            gap: '16px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '14px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {products.map((p) => (
            <div key={p.id} style={{ scrollSnapAlign: 'start', width: '270px' }}>
              <ProductCard
                product={p}
                onSelect={onSelectProduct}
                onQuickAdd={onQuickAdd}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.has(p.id)}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
