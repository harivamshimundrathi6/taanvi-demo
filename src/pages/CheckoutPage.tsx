import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, Lock } from 'lucide-react';
import type { CartItem } from '../data/products';

interface CheckoutPageProps {
  items: CartItem[];
  onBack: () => void;
  onClearCart: () => void;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({ items, onBack, onClearCart }) => {
  const [completed, setCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '•••• •••• •••• 4242',
    expiry: '12/28',
    cvv: '•••'
  });

  const subtotal = items.reduce((sum, item) => {
    const numericPrice = parseFloat(item.product.price.replace(/[^0-9.]/g, '')) || 0;
    return sum + (numericPrice * item.quantity);
  }, 0);

  const shipping = subtotal >= 2499 || subtotal === 0 ? 0 : 199;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const mockId = 'TNV-' + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(mockId);
    setCompleted(true);
    onClearCart();
  };

  if (completed) {
    return (
      <div style={{ background: '#FAF6F0', minHeight: '80vh', padding: '60px 0 90px' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '48px 32px',
            boxShadow: '0 12px 40px rgba(81, 12, 26, 0.08)',
            border: '1px solid #E8E0D7'
          }}>
            <div style={{ display: 'inline-flex', color: '#510C1A', marginBottom: '20px' }}>
              <CheckCircle2 size={64} color="#510C1A" />
            </div>
            <h1 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: '2.4rem', 
              color: '#510C1A', 
              marginBottom: '10px' 
            }}>
              Order Placed Successfully!
            </h1>
            <p style={{ fontSize: '1.05rem', color: '#444', marginBottom: '6px' }}>
              Thank you, <strong>{form.firstName || 'Valued Customer'}</strong>. Your order is confirmed.
            </p>
            <div style={{
              background: '#F9EBD8',
              borderRadius: '8px',
              padding: '12px 20px',
              display: 'inline-block',
              margin: '18px 0 24px',
              color: '#510C1A',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '0.04em'
            }}>
              Order ID: {orderNumber}
            </div>
            <p style={{ color: '#666', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '460px', margin: '0 auto 28px' }}>
              A confirmation email and tracking link have been dispatched to <strong>{form.email || 'your email'}</strong>. Our artisan atelier will now carefully inspect and package your garments.
            </p>
            <button
              onClick={onBack}
              style={{
                background: '#510C1A',
                color: '#FAF6F0',
                padding: '14px 32px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer'
              }}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#FAF6F0', minHeight: '80vh', padding: '40px 0 80px' }}>
      <div className="container" style={{ maxWidth: '1080px' }}>
        
        <button
          onClick={onBack}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#510C1A',
            fontWeight: 600,
            fontSize: '0.92rem',
            marginBottom: '24px',
            cursor: 'pointer'
          }}
        >
          <ArrowLeft size={18} />
          <span>Return to Store</span>
        </button>

        <h1 style={{ 
          fontFamily: "'Playfair Display', Georgia, serif", 
          fontSize: '2.4rem', 
          color: '#510C1A', 
          marginBottom: '32px' 
        }}>
          Secure Express Checkout
        </h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', alignItems: 'start' }}>
          
          {/* Checkout Form */}
          <form onSubmit={handlePlaceOrder} style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '36px',
            boxShadow: '0 8px 30px rgba(81, 12, 26, 0.05)',
            border: '1px solid #E8E0D7',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            {/* Express Checkout 1-Click Bar matching Nishorama / Fastrr */}
            <div style={{
              background: '#fcf6f0',
              border: '1px dashed #d9b89c',
              borderRadius: '8px',
              padding: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px'
            }}>
              <div>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#382218', display: 'block' }}>
                  ⚡ Instant 1-Click Checkout
                </span>
                <span style={{ fontSize: '0.74rem', color: '#777' }}>
                  Auto-fill demo address &amp; place order in 1 step
                </span>
              </div>
              <button
                type="button"
                onClick={() => setForm({
                  firstName: 'Ananya',
                  lastName: 'Sharma',
                  email: 'ananya.sharma@example.com',
                  address: '42 Heritage Boulevard, Bandra West',
                  city: 'Mumbai',
                  state: 'MH',
                  zip: '400050',
                  cardNumber: '•••• •••• •••• 4242',
                  expiry: '12/28',
                  cvv: '888'
                })}
                style={{
                  background: '#482922',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50px',
                  padding: '7px 16px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                Auto-Fill
              </button>
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', borderBottom: '1px solid #F0E8DE', paddingBottom: '12px' }}>
              Shipping Details
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>First Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Last Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Email Address *</label>
              <input
                type="email"
                required
                placeholder="jane@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Street Address *</label>
              <input
                type="text"
                required
                placeholder="123 Luxury Way, Apt 4B"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>City *</label>
                <input
                  type="text"
                  required
                  placeholder="New York"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>State *</label>
                <input
                  type="text"
                  required
                  placeholder="NY"
                  value={form.state}
                  onChange={(e) => setForm({ ...form, state: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>ZIP *</label>
                <input
                  type="text"
                  required
                  placeholder="10001"
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })}
                  style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem' }}
                />
              </div>
            </div>

            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1A1A1A', borderBottom: '1px solid #F0E8DE', paddingBottom: '12px', marginTop: '12px' }}>
              Payment Method
            </h2>

            <div style={{
              background: '#FAF6F0',
              padding: '16px',
              borderRadius: '8px',
              border: '1px solid #E8E0D7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Lock size={18} color="#510C1A" />
                <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#510C1A' }}>256-Bit Encrypted Payment</span>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#666' }}>Visa / MC / Amex</span>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Card Number</label>
              <input
                type="text"
                value={form.cardNumber}
                readOnly
                style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem', background: '#F9F9F9' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>Expiry</label>
                <input
                  type="text"
                  value={form.expiry}
                  readOnly
                  style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem', background: '#F9F9F9' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: 600, color: '#333', marginBottom: '6px' }}>CVV</label>
                <input
                  type="text"
                  value={form.cvv}
                  readOnly
                  style={{ width: '100%', padding: '12px', border: '1px solid #DDD', borderRadius: '6px', fontSize: '0.92rem', background: '#F9F9F9' }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={items.length === 0}
              style={{
                background: items.length === 0 ? '#CCC' : '#510C1A',
                color: '#FAF6F0',
                border: 'none',
                padding: '16px',
                borderRadius: '6px',
                fontWeight: 700,
                fontSize: '1.05rem',
                letterSpacing: '0.04em',
                cursor: items.length === 0 ? 'not-allowed' : 'pointer',
                marginTop: '12px',
                transition: 'background 0.2s ease'
              }}
            >
              Pay ₹{total.toLocaleString('en-IN')} & Place Order
            </button>
          </form>

          {/* Order Summary Card */}
          <div style={{
            background: '#FFFFFF',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 8px 30px rgba(81, 12, 26, 0.05)',
            border: '1px solid #E8E0D7'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#510C1A', marginBottom: '20px' }}>
              Order Bag ({items.length})
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '360px', overflowY: 'auto', marginBottom: '24px' }}>
              {items.map((item, idx) => {
                const itemNumeric = parseFloat(item.product.price.replace(/[^0-9.]/g, '')) || 0;
                return (
                  <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                    <img
                      src={item.product.images[0] || ''}
                      alt={item.product.title}
                      style={{ width: '64px', height: '80px', objectFit: 'cover', borderRadius: '4px' }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1A1A1A' }}>{item.product.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#666', marginTop: '2px' }}>
                        Size: {item.size} • Color: {item.color} • Qty: {item.quantity}
                      </p>
                      <p style={{ fontSize: '0.88rem', fontWeight: 700, color: '#510C1A', marginTop: '4px' }}>
                        ₹{(itemNumeric * item.quantity).toLocaleString('en-IN')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ borderTop: '1px solid #F0E8DE', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#555' }}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.92rem', color: '#555' }}>
                <span>Express Shipping</span>
                <span>{shipping === 0 ? <strong style={{ color: '#2E7D32' }}>FREE</strong> : `₹${shipping.toLocaleString('en-IN')}`}</span>
              </div>
              <div style={{ 
                borderTop: '2px solid #510C1A', 
                paddingTop: '14px', 
                marginTop: '6px', 
                display: 'flex', 
                justifyContent: 'space-between', 
                fontSize: '1.25rem', 
                fontWeight: 700, 
                color: '#510C1A' 
              }}>
                <span>Total Due</span>
                <span>₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.82rem', color: '#777' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck size={14} color="#510C1A" />
                <span>Express 4-7 Day Tracked Delivery</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={14} color="#510C1A" />
                <span>30-Day Free Return & Size Guarantee</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
