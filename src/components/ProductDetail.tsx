import React, { useState } from 'react';
import type { Product } from '../data/products';
import { Bookmark, ShoppingBag, Truck, RotateCcw, ShieldCheck, Check, ArrowLeft } from 'lucide-react';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (p: Product, size: string, color: string, quantity: number) => void;
  onBuyNow?: (p: Product, size: string, color: string, quantity: number) => void;
  onToggleWishlist: (p: Product) => void;
  isWishlisted: boolean;
  relatedProducts: Product[];
  onSelectProduct: (p: Product) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onBack,
  onAddToCart,
  onBuyNow,
  onToggleWishlist,
  isWishlisted,
  relatedProducts,
  onSelectProduct
}) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || 'Classic');
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div style={{ padding: '24px 0 60px 0', background: '#ffffff' }}>
      <div className="container">
        
        {/* Back Link */}
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#382218',
            marginBottom: '24px',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={16} />
          Back to Collection
        </button>

        {/* Product Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start'
        }}>
          
          {/* Gallery Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Main Stage */}
            <div style={{
              width: '100%',
              aspectRatio: '4 / 5',
              overflow: 'hidden',
              backgroundColor: '#f5f5f5',
              borderRadius: '2px',
              position: 'relative'
            }}>
              <img
                src={product.images[selectedImgIndex] || product.images[0]}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {product.badge && (
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: '#d9383a',
                  color: '#fff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  textTransform: 'uppercase'
                }}>
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImgIndex(i)}
                    style={{
                      width: '74px',
                      height: '92px',
                      overflow: 'hidden',
                      border: selectedImgIndex === i ? '2px solid #382218' : '1px solid #e0e0e0',
                      borderRadius: '2px',
                      padding: 0,
                      opacity: selectedImgIndex === i ? 1 : 0.65,
                      transition: 'opacity 0.2s'
                    }}
                  >
                    <img src={img} alt="thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div>
              <span style={{
                fontFamily: "'Archivo', sans-serif",
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#777',
                textTransform: 'uppercase'
              }}>
                TAANVI ATELIER • {product.category}
              </span>
              <h1 style={{
                fontSize: '1.85rem',
                fontWeight: 800,
                color: '#382218',
                marginTop: '4px',
                lineHeight: 1.2
              }}>
                {product.title}
              </h1>

              {/* Price Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '10px' }}>
                <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#382218' }}>
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span style={{ fontSize: '1.1rem', color: '#999', textDecoration: 'line-through' }}>
                    {product.originalPrice}
                  </span>
                )}
                <span style={{
                  background: '#f2eae1',
                  color: '#382218',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderRadius: '2px'
                }}>
                  Taxes Included
                </span>
              </div>
            </div>

            {/* Color selection */}
            {product.colors.length > 0 && (
              <div>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#382218', textTransform: 'uppercase' }}>
                  Color: <span style={{ fontWeight: 500, color: '#666' }}>{selectedColor}</span>
                </span>
                <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        border: selectedColor === c ? '2px solid #382218' : '1px solid #ddd',
                        background: selectedColor === c ? '#382218' : '#ffffff',
                        color: selectedColor === c ? '#ffffff' : '#382218',
                        borderRadius: '2px'
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selection */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#382218', textTransform: 'uppercase' }}>
                  Select Size: <span style={{ fontWeight: 500, color: '#666' }}>{selectedSize}</span>
                </span>
                <span style={{ fontSize: '0.78rem', color: '#777', textDecoration: 'underline', cursor: 'pointer' }}>
                  Size Guide
                </span>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      minWidth: '48px',
                      padding: '8px 14px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      border: selectedSize === s ? '2px solid #382218' : '1px solid #ddd',
                      background: selectedSize === s ? '#382218' : '#ffffff',
                      color: selectedSize === s ? '#ffffff' : '#382218',
                      borderRadius: '2px'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#382218', textTransform: 'uppercase' }}>
                Quantity:
              </span>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                border: '1px solid #ddd',
                borderRadius: '2px'
              }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{ padding: '6px 14px', fontSize: '1rem', fontWeight: 700 }}
                >
                  -
                </button>
                <span style={{ padding: '0 10px', fontSize: '0.9rem', fontWeight: 600 }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{ padding: '6px 14px', fontSize: '1rem', fontWeight: 700 }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons: Add to Bag + Instant Buy Now */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={handleAdd}
                  style={{
                    flex: 1,
                    background: addedAnimation ? '#2b7a4b' : '#382218',
                    color: '#ffffff',
                    padding: '16px 24px',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background 0.3s',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {addedAnimation ? (
                    <>
                      <Check size={18} />
                      Added to Bag
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      Add to Bag
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  style={{
                    width: '56px',
                    border: '1px solid #382218',
                    background: isWishlisted ? '#fbeeee' : '#ffffff',
                    color: isWishlisted ? '#d9383a' : '#382218',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  title={isWishlisted ? "Wishlisted" : "Save to Wishlist"}
                >
                  <Bookmark size={20} fill={isWishlisted ? "#d9383a" : "none"} />
                </button>
              </div>

              {/* Instant 1-Click Buy Now Button */}
              {onBuyNow && (
                <button
                  onClick={() => onBuyNow(product, selectedSize, selectedColor, quantity)}
                  style={{
                    width: '100%',
                    background: '#f6c582',
                    color: '#382218',
                    padding: '16px 24px',
                    fontSize: '0.92rem',
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(246, 197, 130, 0.45)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f2b562';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#f6c582';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  ⚡ Buy It Now • {product.price}
                </button>
              )}
            </div>

            {/* Value Guarantees */}
            <div style={{
              background: '#fafafa',
              border: '1px solid #f0f0f0',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '6px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#444' }}>
                <Truck size={18} color="#382218" />
                <span>Free Express Shipping across India over ₹2,499</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#444' }}>
                <RotateCcw size={18} color="#382218" />
                <span>30-Day Free Returns, No Questions Asked</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: '#444' }}>
                <ShieldCheck size={18} color="#382218" />
                <span>All Custom Taxes &amp; Duties Included</span>
              </div>
            </div>

            {/* Description & Details Accordion */}
            <div style={{ marginTop: '12px' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#382218', textTransform: 'uppercase', marginBottom: '8px' }}>
                Description &amp; Story
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: 1.6 }}>
                {product.description}
              </p>

              <ul style={{ marginTop: '12px', listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {product.details.map((d, i) => (
                  <li key={i} style={{ fontSize: '0.86rem', color: '#666' }}>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div style={{ marginTop: '64px', borderTop: '1px solid #eee', paddingTop: '40px' }}>
            <h2 style={{
              fontSize: '1.4rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#382218',
              marginBottom: '20px'
            }}>
              You May Also Covet
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '18px'
            }}>
              {relatedProducts.slice(0, 4).map((rp) => (
                <div 
                  key={rp.id}
                  onClick={() => onSelectProduct(rp)}
                  style={{ cursor: 'pointer' }}
                >
                  <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', background: '#f5f5f5', marginBottom: '8px' }}>
                    <img src={rp.images[0]} alt={rp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#382218' }}>{rp.title}</h4>
                  <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#382218', marginTop: '2px' }}>{rp.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
