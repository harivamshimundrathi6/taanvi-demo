import React, { useState } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import type { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (p: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === '' ? [] : products.filter(p => {
    const q = query.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  const popularSearches = ["Corset Kurti", "Dabu Halter", "White Pants", "Skirt Set", "Sheer Kurti", "Umang Kurta"];

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 120, display: 'flex', flexDirection: 'column' }}>
      
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(3px)'
        }}
      />

      {/* Modal Content */}
      <div style={{
        position: 'relative',
        background: '#ffffff',
        width: '100%',
        maxWidth: '720px',
        margin: '60px auto 0 auto',
        borderRadius: '2px',
        overflow: 'hidden',
        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
        animation: 'fadeIn 0.2s ease-out forwards'
      }}>
        {/* Search input header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '18px 24px',
          borderBottom: '1px solid #ebebeb'
        }}>
          <Search size={22} color="#382218" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for kurtis, tops, corset, sets..."
            autoFocus
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '1.05rem',
              color: '#382218',
              fontFamily: 'inherit'
            }}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{ color: '#888', padding: '4px' }}>
              <X size={18} />
            </button>
          )}
          <button 
            onClick={onClose} 
            style={{ 
              fontSize: '0.85rem', 
              fontWeight: 700, 
              color: '#382218', 
              textTransform: 'uppercase', 
              marginLeft: '8px' 
            }}
          >
            Close
          </button>
        </div>

        {/* Content body */}
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '20px 24px' }}>
          {query.trim() === '' ? (
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Popular Searches
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    style={{
                      background: '#f5f5f5',
                      padding: '6px 14px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#382218',
                      borderRadius: '2px'
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 0', color: '#666' }}>
              <p style={{ fontSize: '0.95rem' }}>No products found for "{query}".</p>
              <span style={{ fontSize: '0.8rem', color: '#999', marginTop: '4px', display: 'block' }}>
                Try searching for "Kurti", "Pants", or "Corset".
              </span>
            </div>
          ) : (
            <div>
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Found {results.length} results
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                {results.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => { onClose(); onSelectProduct(p); }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px',
                      padding: '8px',
                      borderRadius: '2px',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f9f9f9')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      style={{ width: '48px', height: '60px', objectFit: 'cover', borderRadius: '2px' }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.92rem', fontWeight: 600, color: '#382218' }}>{p.title}</h4>
                      <span style={{ fontSize: '0.78rem', color: '#777' }}>{p.category}</span>
                    </div>
                    <span style={{ fontSize: '0.92rem', fontWeight: 700, color: '#382218' }}>{p.price}</span>
                    <ArrowRight size={16} color="#aaa" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
