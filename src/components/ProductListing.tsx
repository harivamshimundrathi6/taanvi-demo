import React, { useState } from 'react';
import type { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowUpDown } from 'lucide-react';

interface ProductListingProps {
  category: string;
  products: Product[];
  onSelectProduct: (p: Product) => void;
  onQuickAdd: (p: Product, size: string) => void;
  onToggleWishlist: (p: Product) => void;
  wishlistIds: Set<string>;
}

export const ProductListing: React.FC<ProductListingProps> = ({
  category,
  products,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<string>("featured");
  const [availabilityOnly, setAvailabilityOnly] = useState<boolean>(false);

  // Filter products
  let filtered = products;

  if (category !== "all" && category !== "All") {
    const lowCat = category.toLowerCase();
    filtered = filtered.filter(p => {
      const matchCat = p.category.toLowerCase().includes(lowCat) || p.slug.toLowerCase().includes(lowCat);
      const matchBadge = p.badge?.toLowerCase().includes(lowCat);
      return matchCat || matchBadge;
    });
  }

  if (selectedSize !== "All") {
    filtered = filtered.filter(p => p.sizes.includes(selectedSize));
  }

  if (availabilityOnly) {
    filtered = filtered.filter(p => p.inStock);
  }

  // Sort products
  if (selectedSort === "price-low") {
    filtered = [...filtered].sort((a, b) => {
      const pA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
      const pB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
      return pA - pB;
    });
  } else if (selectedSort === "price-high") {
    filtered = [...filtered].sort((a, b) => {
      const pA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0;
      const pB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0;
      return pB - pA;
    });
  } else if (selectedSort === "title-asc") {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  }

  const sizes = ["All", "XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div style={{ padding: '36px 0 60px 0', background: '#ffffff', minHeight: '80vh' }}>
      <div className="container">
        
        {/* Collection Header */}
        <div style={{ marginBottom: '28px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
          <span style={{ fontSize: '0.8rem', color: '#777', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Home / Collections / {category}
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: '6px' }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#382218'
            }}>
              {category === 'all' ? 'All Products' : category}
            </h1>
            <span style={{ fontSize: '0.9rem', color: '#666' }}>
              Showing {filtered.length} products
            </span>
          </div>
        </div>

        {/* Filter & Sort Bar */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '14px',
          padding: '14px 18px',
          background: '#fcfcfc',
          border: '1px solid #ebebeb',
          marginBottom: '32px'
        }}>
          {/* Sizes */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#382218', textTransform: 'uppercase' }}>
              Size:
            </span>
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSize(s)}
                style={{
                  padding: '4px 10px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: selectedSize === s ? '#382218' : '#ffffff',
                  color: selectedSize === s ? '#ffffff' : '#382218',
                  border: '1px solid #ddd',
                  borderRadius: '2px'
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Sort & Availability */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#444', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={availabilityOnly} 
                onChange={(e) => setAvailabilityOnly(e.target.checked)} 
              />
              In Stock Only
            </label>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ArrowUpDown size={15} color="#666" />
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                style={{
                  padding: '6px 12px',
                  fontSize: '0.82rem',
                  border: '1px solid #ddd',
                  background: '#ffffff',
                  color: '#382218',
                  borderRadius: '2px'
                }}
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="title-asc">Alphabetically: A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <h3 style={{ fontSize: '1.2rem', color: '#382218', marginBottom: '8px' }}>
              No products match your selected filters.
            </h3>
            <button
              onClick={() => { setSelectedSize("All"); setAvailabilityOnly(false); }}
              style={{
                marginTop: '12px',
                background: '#382218',
                color: '#fff',
                padding: '10px 20px',
                fontSize: '0.85rem',
                fontWeight: 600
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px 18px'
          }}>
            {filtered.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onSelect={onSelectProduct}
                onQuickAdd={onQuickAdd}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.has(p.id)}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
};
