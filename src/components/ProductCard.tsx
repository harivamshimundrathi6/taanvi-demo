import React, { useState } from 'react';
import { Bookmark, Plus, Check } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onSelect: (p: Product) => void;
  onQuickAdd: (p: Product, size: string) => void;
  onToggleWishlist: (p: Product) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickAdd,
  onToggleWishlist,
  isWishlisted
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const [justAdded, setJustAdded] = useState(false);

  const mainImg = product.images[0] || "https://row.nishorama.com/cdn/shop/files/whitepant-hero-AI.jpg?v=1783768645";
  const hoverImg = product.images[1] || mainImg;

  const handleSelectSize = (size: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(product, size);
    setShowSizes(false);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  const handleDirectAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (product.sizes && product.sizes.length > 1) {
      setShowSizes(prev => !prev);
    } else {
      const defaultSize = product.sizes?.[0] || 'M';
      handleSelectSize(defaultSize, e);
    }
  };

  return (
    <div 
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: '#ffffff',
        borderRadius: '0px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setShowSizes(false); }}
    >
      {/* Media container */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 5',
          overflow: 'hidden',
          backgroundColor: '#f6f6f6',
          cursor: 'pointer'
        }}
        onClick={() => onSelect(product)}
      >
        <img 
          src={isHovered ? hoverImg : mainImg} 
          alt={product.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: isHovered ? 'scale(1.03)' : 'scale(1)'
          }}
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <span style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: product.badge === 'Sale' ? '#d9383a' : '#382218',
            color: '#ffffff',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            padding: '3px 8px',
            textTransform: 'uppercase',
            borderRadius: '2px',
            zIndex: 2
          }}>
            {product.badge}
          </span>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isWishlisted ? '#d9383a' : '#382218',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 2,
            transition: 'transform 0.2s ease',
            border: 'none',
            cursor: 'pointer'
          }}
          title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <Bookmark size={16} fill={isWishlisted ? "#d9383a" : "none"} />
        </button>

        {/* Quick Size Selector Popup on Hover / Click */}
        {showSizes && (
          <div 
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '10px',
              right: '10px',
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(8px)',
              borderRadius: '24px',
              padding: '10px 14px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.16)',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              alignItems: 'center',
              zIndex: 4,
              animation: 'fadeInUp 0.2s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <span style={{ fontSize: '0.7rem', color: '#666', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Select Size to Add
            </span>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={(e) => handleSelectSize(s, e)}
                  style={{
                    background: '#f3efe9',
                    border: '1px solid #e0d6cb',
                    borderRadius: '50px',
                    padding: '4px 10px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#382218',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#482922';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f3efe9';
                    e.currentTarget.style.color = '#382218';
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Info Block with Nishorama '+ Add' button on the right */}
      <div 
        style={{ 
          padding: '12px 2px 4px 2px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '8px'
        }}
      >
        {/* Title, Price, and Swatches (Click opens detail) */}
        <div 
          style={{ flex: 1, minWidth: 0, cursor: 'pointer' }}
          onClick={() => onSelect(product)}
        >
          <h3 style={{
            fontSize: '0.92rem',
            fontWeight: 500,
            color: '#1a1a1a',
            lineHeight: '1.3',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            {product.title}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#382218' }}>
              {product.price}
            </span>
            {product.originalPrice && (
              <span style={{ fontSize: '0.82rem', color: '#999', textDecoration: 'line-through' }}>
                {product.originalPrice}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
            {product.colors.slice(0, 2).map((c, i) => (
              <span 
                key={i}
                style={{
                  fontSize: '0.68rem',
                  color: '#777',
                  background: '#f6f6f6',
                  padding: '1px 6px',
                  borderRadius: '2px'
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Authentic Nishorama '+ Add' Capsule Pill Button */}
        <button
          onClick={handleDirectAdd}
          style={{
            flex: '0 0 auto',
            background: justAdded ? '#2b7a4b' : '#f5f5f5',
            color: justAdded ? '#ffffff' : '#382218',
            borderRadius: '50px',
            border: 'none',
            padding: '6px 14px',
            fontSize: '0.8rem',
            fontWeight: 700,
            fontFamily: "'Archivo', sans-serif",
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            cursor: 'pointer',
            transition: 'all 0.18s ease',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)'
          }}
          onMouseEnter={(e) => {
            if (!justAdded) {
              e.currentTarget.style.background = '#482922';
              e.currentTarget.style.color = '#ffffff';
            }
          }}
          onMouseLeave={(e) => {
            if (!justAdded) {
              e.currentTarget.style.background = '#f5f5f5';
              e.currentTarget.style.color = '#382218';
            }
          }}
        >
          {justAdded ? (
            <>
              <Check size={13} strokeWidth={3} />
              <span>Added</span>
            </>
          ) : (
            <>
              <Plus size={13} strokeWidth={2.5} />
              <span>Add</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
