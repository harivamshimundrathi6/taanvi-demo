import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryGrid } from './components/CategoryGrid';
import { CollectionSection } from './components/CollectionSection';
import { ProductListing } from './components/ProductListing';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { StoryViewer } from './components/StoryViewer';
import { ScrollingGallery } from './components/ScrollingGallery';
import { Footer } from './components/Footer';

// Dedicated Separate Pages
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { TrackingPage } from './pages/TrackingPage';
import { PolicyPage } from './pages/PolicyPage';
import { CheckoutPage } from './pages/CheckoutPage';

import { PRODUCTS, HOME_COLLECTIONS } from './data/products';
import type { Product, CartItem } from './data/products';

export type PageView = 'home' | 'collection' | 'detail' | 'about' | 'contact' | 'tracking' | 'policy' | 'checkout';

export const App: React.FC = () => {
  // Navigation State
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  // Cart State (Persisted in localStorage)
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('taanvi_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist State (Persisted in localStorage)
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    try {
      const saved = localStorage.getItem('taanvi_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Overlays State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);

  // Save Cart to storage
  useEffect(() => {
    try {
      localStorage.setItem('taanvi_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  // Save Wishlist to storage
  useEffect(() => {
    try {
      localStorage.setItem('taanvi_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Handlers
  const handleSelectCategory = (category: string) => {
    if (category === 'home') {
      setCurrentView('home');
    } else {
      setActiveCategory(category);
      setCurrentView('collection');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePage = (page: string) => {
    setCurrentView(page as PageView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setActiveProduct(product);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, size: string, color: string, quantity: number) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(item => 
        item.product.id === product.id && item.size === size && item.color === color
      );
      if (existingIdx > -1) {
        const copy = [...prev];
        copy[existingIdx].quantity += quantity;
        return copy;
      } else {
        return [...prev, { product, size, color, quantity }];
      }
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = (product: Product, size: string, color: string, quantity: number) => {
    handleAddToCart(product, size, color, quantity);
    setIsCartOpen(false);
    setCurrentView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickAdd = (product: Product, size: string) => {
    handleAddToCart(product, size, product.colors[0] || 'Classic', 1);
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist(prev => {
      const exists = prev.some(p => p.id === product.id);
      if (exists) {
        return prev.filter(p => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveCartItem(index);
    } else {
      setCartItems(prev => {
        const copy = [...prev];
        copy[index].quantity = quantity;
        return copy;
      });
    }
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistIds = new Set(wishlist.map(p => p.id));

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      
      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Main Header & Sticky Nav */}
      <Header
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenStories={() => setIsStoryOpen(true)}
        onSelectCategory={handleSelectCategory}
        onNavigatePage={handleNavigatePage}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
      />

      {/* 3. Main Views Router */}
      <main style={{ flex: 1 }}>
        {currentView === 'home' && (
          <>
            {/* Hero Banner Section */}
            <HeroBanner onExplore={handleSelectCategory} />

            {/* Category Navigation Visual Circles */}
            <CategoryGrid onSelectCategory={handleSelectCategory} />

            {/* First Collection: New In */}
            {HOME_COLLECTIONS.slice(0, 1).map((col) => (
              <CollectionSection
                key={col.id}
                id={col.id}
                title={col.title}
                subtitle={col.subtitle}
                products={col.products}
                banner={col.banner}
                onSelectProduct={handleSelectProduct}
                onQuickAdd={handleQuickAdd}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
                onViewAll={handleSelectCategory}
              />
            ))}

            {/* Seamless Right-to-Left Continuous Scrolling Lookbook Gallery (Between New In and Most Wanted) */}
            <ScrollingGallery onSelectCategory={handleSelectCategory} />

            {/* Remaining Collections: Most Wanted, Festive Bangers, etc. */}
            {HOME_COLLECTIONS.slice(1).map((col) => (
              <CollectionSection
                key={col.id}
                id={col.id}
                title={col.title}
                subtitle={col.subtitle}
                products={col.products}
                banner={col.banner}
                onSelectProduct={handleSelectProduct}
                onQuickAdd={handleQuickAdd}
                onToggleWishlist={handleToggleWishlist}
                wishlistIds={wishlistIds}
                onViewAll={handleSelectCategory}
              />
            ))}
          </>
        )}

        {currentView === 'collection' && (
          <ProductListing
            category={activeCategory}
            products={PRODUCTS}
            onSelectProduct={handleSelectProduct}
            onQuickAdd={handleQuickAdd}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
          />
        )}

        {currentView === 'detail' && activeProduct && (
          <ProductDetail
            product={activeProduct}
            onBack={() => setCurrentView('home')}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onToggleWishlist={handleToggleWishlist}
            isWishlisted={wishlistIds.has(activeProduct.id)}
            relatedProducts={PRODUCTS.filter(p => p.id !== activeProduct.id && p.category === activeProduct.category)}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {/* Dedicated Separate Pages */}
        {currentView === 'about' && (
          <AboutPage onExplore={handleSelectCategory} />
        )}

        {currentView === 'contact' && (
          <ContactPage />
        )}

        {currentView === 'tracking' && (
          <TrackingPage />
        )}

        {currentView === 'policy' && (
          <PolicyPage />
        )}

        {currentView === 'checkout' && (
          <CheckoutPage
            items={cartItems}
            onBack={() => setCurrentView('home')}
            onClearCart={handleClearCart}
          />
        )}
      </main>

      {/* 4. Footer */}
      <Footer 
        onSelectCategory={handleSelectCategory}
        onNavigatePage={handleNavigatePage}
      />

      {/* 5. Drawers & Modals */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onExplore={() => handleSelectCategory("all")}
        onSelectProduct={handleSelectProduct}
        suggestedProducts={PRODUCTS.slice(0, 4)}
        onCheckout={() => {
          setIsCartOpen(false);
          handleNavigatePage('checkout');
        }}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlist}
        onRemove={handleToggleWishlist}
        onSelectProduct={handleSelectProduct}
        onQuickAdd={handleQuickAdd}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={handleSelectProduct}
      />

      <StoryViewer
        isOpen={isStoryOpen}
        onClose={() => setIsStoryOpen(false)}
        onNavigateToCollection={handleSelectCategory}
      />

    </div>
  );
};
export default App;
