import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import type { Product } from '../data/products';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (p: Product) => void;
  onSelectProduct: (p: Product) => void;
  onQuickAdd: (p: Product, size: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemove,
  onSelectProduct,
  onQuickAdd
}) => {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 110, display: 'flex' }}>
      
      {/* Overlay */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(3px)'
        }}
      />

      {/* Drawer */}
      <div style={{
        position: 'relative',
        marginLeft: 'auto',
        width: '100%',
        maxWidth: '440px',
        background: '#ffffff',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '-4px 0 24px rgba(0,0,0,0.18)',
        animation: 'slideDrawerRight 0.3s ease-out forwards'
      }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '18px 24px',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <div>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#382218', textTransform: 'uppercase' }}>
              Your Wishlist
            </h2>
            <span style={{ fontSize: '0.82rem', color: '#666' }}>
              {items.length} {items.length === 1 ? 'item' : 'items'} saved
            </span>
          </div>

          <button onClick={onClose} style={{ color: '#382218', padding: '6px' }}>
            <X size={22} />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🤍</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#382218', marginBottom: '6px' }}>
                Your wishlist is empty
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#666', marginBottom: '20px' }}>
                Save your favorite kurtis and tops by tapping the bookmark icon.
              </p>
              <button
                onClick={onClose}
                style={{
                  background: '#382218',
                  color: '#ffffff',
                  padding: '10px 24px',
                  fontSize: '0.84rem',
                  fontWeight: 700,
                  textTransform: 'uppercase'
                }}
              >
                Discover Products
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((p) => (
                <div 
                  key={p.id}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid #f2f2f2'
                  }}
                >
                  <div 
                    onClick={() => { onClose(); onSelectProduct(p); }}
                    style={{ width: '80px', height: '100px', cursor: 'pointer', backgroundColor: '#f5f5f5', borderRadius: '2px', overflow: 'hidden' }}
                  >
                    <img src={p.images[0]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4 
                          onClick={() => { onClose(); onSelectProduct(p); }}
                          style={{ fontSize: '0.9rem', fontWeight: 600, color: '#382218', cursor: 'pointer' }}
                        >
                          {p.title}
                        </h4>
                        <button 
                          onClick={() => onRemove(p)}
                          style={{ color: '#999', padding: '2px' }}
                          title="Remove"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#382218', marginTop: '4px' }}>
                        {p.price}
                      </div>
                    </div>

                    <button
                      onClick={() => onQuickAdd(p, p.sizes[0] || 'M')}
                      style={{
                        background: '#382218',
                        color: '#ffffff',
                        padding: '8px 14px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        borderRadius: '2px'
                      }}
                    >
                      <ShoppingBag size={14} />
                      Move to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
