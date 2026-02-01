
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import Admin from './pages/Admin';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleViewDetail = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('detail');
    window.scrollTo(0, 0);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        onNavigate={navigateTo}
        currentPage={currentPage}
      />
      
      <main className="flex-grow bg-stone-50">
        {currentPage === 'home' && <Home onNavigate={navigateTo} />}
        {currentPage === 'catalog' && <Catalog onAddToCart={addToCart} onViewDetail={handleViewDetail} />}
        {currentPage === 'detail' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setCurrentPage('catalog')} 
            onAddToCart={addToCart} 
          />
        )}
        {currentPage === 'admin' && <Admin />}
        {currentPage === 'education' && (
          <div className="max-w-4xl mx-auto px-4 py-32 text-center">
             <h2 className="text-4xl font-bold mb-4">Pusat Edukasi SemaiBenih</h2>
             <p className="text-stone-500 mb-8">Halaman ini akan berisi artikel-artikel teknik penanaman modern.</p>
             <button onClick={() => navigateTo('catalog')} className="text-emerald-600 font-bold hover:underline">Jelajahi Katalog Benih &rarr;</button>
          </div>
        )}
        {currentPage === 'about' && (
          <div className="max-w-4xl mx-auto px-4 py-32">
             <h2 className="text-4xl font-bold mb-8">Tentang SemaiBenih</h2>
             <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
               <p>SemaiBenih lahir dari visi untuk memodernisasi sektor pertanian Indonesia melalui penyediaan benih berkualitas tinggi yang mudah diakses oleh siapa saja.</p>
               <p>Kami bekerja sama dengan pemulia tanaman terbaik dan laboratorium pengujian benih terakreditasi untuk memastikan setiap butir benih memiliki potensi hasil yang maksimal.</p>
               <div className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
                  <h3 className="font-bold text-emerald-900 mb-4 text-xl">Visi Kami</h3>
                  <p className="italic text-emerald-800">"Menjadi katalisator utama dalam terciptanya kedaulatan pangan nasional yang berbasis pada teknologi benih unggul dan berkelanjutan."</p>
               </div>
             </div>
          </div>
        )}
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={() => {
          alert('Terima kasih! Pesanan Anda sedang diproses oleh sistem marketplace kami.');
          setCart([]);
          setIsCartOpen(false);
        }}
      />
    </div>
  );
};

export default App;
