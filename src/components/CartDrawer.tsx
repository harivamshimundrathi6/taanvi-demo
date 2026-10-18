import React from 'react';
import { X, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';
import type { CartItem, Product } from '../data/products';
import confetti from 'canvas-confetti';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onExplore: () => void;
  onSelectProduct: (p: Product) => void;
  suggestedProducts: Product[];
  onCheckout?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onExplore,
  onSelectProduct,
  suggestedProducts,
  onCheckout
}) => {
  if (!isOpen) return null;

  const totalAmount = items.reduce((acc, item) => {
    const p = parseFloat(item.product.price.replace(/[^0-9.]/g, '')) || 0;
    return acc + p * item.quantity;
  }, 0);

  const handleCheckout = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    if (onCheckout) {
      onClose();
      onCheckout();
    }
  };

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
        maxWidth: '460px',
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
              Your Bag
            </h2>
            <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: 600 }}>
              ( ₹{totalAmount.toLocaleString('en-IN')} )
            </span>
          </div>

          <button onClick={onClose} style={{ color: '#382218', padding: '6px' }}>
            <X size={22} />
          </button>
        </div>

        {/* Free shipping progress bar */}
        <div style={{ background: '#fcf8f4', padding: '10px 24px', borderBottom: '1px solid #f2e7db' }}>
          <div style={{ fontSize: '0.78rem', color: '#382218', fontWeight: 600, marginBottom: '6px' }}>
            {totalAmount >= 2499
              ? "🎉 You've unlocked FREE Express All-India Shipping!"
              : `Add ₹${(2499 - totalAmount).toLocaleString('en-IN')} more for FREE Express Shipping`}
          </div>
          <div style={{ height: '4px', background: '#e5d7c7', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              width: `${Math.min(100, (totalAmount / 2499) * 100)}%`,
              background: '#382218',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        {/* Cart items / Empty State */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>🛍️</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#382218', marginBottom: '6px' }}>
                Your bag is empty!
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#666', marginBottom: '20px' }}>
                Explore our signature corset kurtis and co-ord collections.
              </p>
              <button
                onClick={() => { onClose(); onExplore(); }}
                style={{
                  background: '#382218',
                  color: '#ffffff',
                  padding: '12px 28px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                Shop Now
                <ArrowRight size={16} />
              </button>

              {/* Curated Suggested Products in Empty Cart matching Nishorama */}
              <div style={{ marginTop: '40px', textAlign: 'left', borderTop: '1px solid #f0f0f0', paddingTop: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#382218' }}>
                    Curated for you babe !!
                  </span>
                  <span style={{ fontSize: '0.74rem', color: '#d9383a', fontWeight: 700 }}>
                    UPTO 50% OFF
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {suggestedProducts.slice(0, 4).map((sp) => (
                    <div
                      key={sp.id}
                      onClick={() => { onClose(); onSelectProduct(sp); }}
                      style={{ cursor: 'pointer', aspectRatio: '4/5', overflow: 'hidden', background: '#f5f5f5' }}
                    >
                      <img src={sp.images[0]} alt={sp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map((item, index) => (
                <div 
                  key={`${item.product.id}-${item.size}-${index}`}
                  style={{
                    display: 'flex',
                    gap: '14px',
                    paddingBottom: '16px',
                    borderBottom: '1px solid #f2f2f2'
                  }}
                >
                  <div style={{ width: '80px', height: '100px', flexShrink: 0, backgroundColor: '#f5f5f5', borderRadius: '2px', overflow: 'hidden' }}>
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>

                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#382218' }}>
                          {item.product.title}
                        </h4>
                        <button 
                          onClick={() => onRemoveItem(index)}
                          style={{ color: '#999', padding: '2px' }}
                          title="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div style={{ fontSize: '0.78rem', color: '#777', marginTop: '3px' }}>
                        Size: <strong>{item.size}</strong> • Color: <strong>{item.color}</strong>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        border: '1px solid #ddd',
                        borderRadius: '2px'
                      }}>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                          style={{ padding: '3px 10px', fontSize: '0.9rem', fontWeight: 700 }}
                        >
                          -
                        </button>
                        <span style={{ padding: '0 8px', fontSize: '0.85rem', fontWeight: 600 }}>
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          style={{ padding: '3px 10px', fontSize: '0.9rem', fontWeight: 700 }}
                        >
                          +
                        </button>
                      </div>

                      <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#382218' }}>
                        {item.product.price}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Checkout */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', background: '#fafafa', borderTop: '1px solid #eee' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.88rem', color: '#666' }}>
              <span>Subtotal:</span>
              <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#382218' }}>
                ₹{totalAmount.toLocaleString('en-IN')}
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#777', marginBottom: '14px' }}>
              <ShieldCheck size={14} color="#2b7a4b" />
              <span>All Taxes &amp; Duties included. 30-Day Hassle Free Returns.</span>
            </div>

            <button
              onClick={handleCheckout}
              style={{
                width: '100%',
                background: '#382218',
                color: '#ffffff',
                padding: '16px',
                fontSize: '0.92rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              Proceed to Checkout • ₹{totalAmount.toLocaleString('en-IN')}
              <ArrowRight size={16} />
            </button>

            {/* Payment methods icons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '14px', opacity: 0.7 }}>
              <span style={{ fontSize: '0.72rem', color: '#888' }}>
                Secure Payment by Visa • Mastercard • Amex • Apple Pay • Google Pay
              </span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
