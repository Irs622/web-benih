
import React from 'react';
import { Search, Filter, ShoppingCart, Eye, Package } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { Product, Category } from '../types';

interface CatalogProps {
  onAddToCart: (product: Product) => void;
  onViewDetail: (product: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onAddToCart, onViewDetail }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [mode, setMode] = React.useState<'Market' | 'Exhibition'>('Market');

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.latinName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-stone-900 mb-2">Katalog Benih</h1>
          <p className="text-stone-500">Temukan ribuan benih unggul untuk kebutuhan pertanian Anda.</p>
        </div>

        <div className="flex items-center p-1 bg-stone-100 rounded-xl w-fit">
          <button 
            onClick={() => setMode('Market')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'Market' ? 'bg-white shadow-sm text-emerald-700' : 'text-stone-500'}`}
          >
            Mode Pasar
          </button>
          <button 
            onClick={() => setMode('Exhibition')}
            className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${mode === 'Exhibition' ? 'bg-white shadow-sm text-emerald-700' : 'text-stone-500'}`}
          >
            Mode Pameran
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 space-y-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Cari benih..." 
              className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div>
            <h4 className="font-bold mb-4 flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Kategori</span>
            </h4>
            <div className="space-y-2">
              <button 
                onClick={() => setSelectedCategory('All')}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${selectedCategory === 'All' ? 'bg-emerald-600 text-white' : 'hover:bg-stone-100'}`}
              >
                Semua Kategori
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${selectedCategory === cat ? 'bg-emerald-600 text-white' : 'hover:bg-stone-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={product.name} />
                  {product.isExhibitionOnly && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                      Premium Exhibit
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3">
                    <button 
                      onClick={() => onViewDetail(product)}
                      className="p-3 bg-white text-stone-900 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    {!product.isExhibitionOnly && mode === 'Market' && (
                      <button 
                        onClick={() => onAddToCart(product)}
                        className="p-3 bg-white text-stone-900 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
                      >
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-emerald-600 text-xs font-bold uppercase mb-2">{product.category}</p>
                  <h3 className="text-lg font-bold mb-1 text-stone-900">{product.name}</h3>
                  <p className="text-xs italic text-stone-400 mb-4">{product.latinName}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      {mode === 'Market' && !product.isExhibitionOnly ? (
                        <p className="text-xl font-bold text-emerald-700">Rp {product.price.toLocaleString()}</p>
                      ) : (
                        <p className="text-sm font-medium text-stone-400">Pameran Digital</p>
                      )}
                    </div>
                    <div className="flex items-center text-xs text-stone-500">
                      <Package className="w-3 h-3 mr-1" />
                      <span>Stok: {product.stock}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-stone-50 rounded-3xl">
              <Package className="w-16 h-16 mx-auto text-stone-200 mb-4" />
              <h3 className="text-xl font-bold text-stone-900">Benih tidak ditemukan</h3>
              <p className="text-stone-500">Coba ubah kata kunci atau kategori filter Anda.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Catalog;
