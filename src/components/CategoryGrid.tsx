import React from 'react';
import { CATEGORIES } from '../data/products';

interface CategoryGridProps {
  onSelectCategory: (cat: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <section style={{ padding: '48px 0 36px 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '28px',
          borderBottom: '1px solid #eee',
          paddingBottom: '14px'
        }}>
          <div>
            <h2 style={{
              fontSize: '1.6rem',
              fontWeight: 700,
              color: '#382218',
              letterSpacing: '0.02em',
              textTransform: 'uppercase'
            }}>
              Categories
              <span style={{ fontSize: '0.95rem', color: '#888', fontWeight: 500, marginLeft: '8px' }}>
                (12)
              </span>
            </h2>
          </div>
          <button
            onClick={() => onSelectCategory("all")}
            style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              color: '#382218',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
          >
            Shop All
          </button>
        </div>

        {/* Categories grid: 9 on wide desktop, perfectly wrapping to second row with matching aspect ratios */}
        <div className="category-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '14px',
          alignItems: 'start'
        }}>
          {CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '100%',
                aspectRatio: '1 / 1.15',
                overflow: 'hidden',
                backgroundColor: '#f3f3f3',
                marginBottom: '10px',
                borderRadius: '2px'
              }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = `https://cdn.shopify.com/s/files/1/0964/1073/0868/files/${cat.slug}.jpg`;
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.06)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  loading="lazy"
                />
              </div>
              <h3 style={{
                fontSize: '0.86rem',
                fontWeight: 600,
                color: '#382218',
                marginBottom: '2px'
              }}>
                {cat.name}
              </h3>
              <span style={{ fontSize: '0.72rem', color: '#888' }}>
                ({cat.count})
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
