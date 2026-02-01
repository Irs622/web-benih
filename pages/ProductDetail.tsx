
import React from 'react';
import { ArrowLeft, ShoppingCart, CheckCircle, Info, Sparkles, BookOpen } from 'lucide-react';
import { Product } from '../types';
import { geminiService } from '../services/geminiService';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [aiAdvice, setAiAdvice] = React.useState<string | null>(null);
  const [loadingAi, setLoadingAi] = React.useState(false);

  const fetchAiAdvice = async () => {
    setLoadingAi(true);
    const advice = await geminiService.getPlantingAdvice(product.name);
    setAiAdvice(advice);
    setLoadingAi(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button onClick={onBack} className="flex items-center space-x-2 text-stone-500 hover:text-emerald-600 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        <span className="font-medium">Kembali ke Katalog</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-4">
          <div className="rounded-3xl overflow-hidden border border-stone-100 shadow-xl">
            <img src={product.image} className="w-full aspect-square object-cover" alt={product.name} />
          </div>
          <div className="grid grid-cols-3 gap-4">
             {[1, 2, 3].map(i => (
               <div key={i} className="aspect-square rounded-xl overflow-hidden border border-stone-200 cursor-pointer hover:border-emerald-500 transition-colors">
                  <img src={`https://picsum.photos/seed/detail${product.id}${i}/300/300`} className="w-full h-full object-cover" />
               </div>
             ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">{product.category}</span>
              <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded-full">Sertifikat: LSS-022-IDN</span>
            </div>
            <h1 className="text-4xl font-extrabold text-stone-900 mb-2">{product.name}</h1>
            <p className="text-xl italic text-stone-400 mb-6 font-medium">{product.latinName}</p>
            <p className="text-stone-600 leading-relaxed text-lg">{product.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-stone-50 p-4 rounded-xl flex items-center space-x-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Info className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-bold uppercase">Masa Panen</p>
                <p className="font-bold text-stone-900">{product.harvestTime}</p>
              </div>
            </div>
            <div className="bg-stone-50 p-4 rounded-xl flex items-center space-x-4">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs text-stone-500 font-bold uppercase">Daya Tumbuh</p>
                <p className="font-bold text-stone-900">{product.germinationRate}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-stone-100">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm text-stone-500 mb-1 font-medium">Harga Per Pack</p>
                <p className="text-3xl font-bold text-emerald-700">Rp {product.price.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-stone-500 mb-1 font-medium">Ketersediaan</p>
                <p className={`font-bold ${product.stock > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                  {product.stock > 0 ? `${product.stock} Pack Tersedia` : 'Stok Habis'}
                </p>
              </div>
            </div>

            <button 
              disabled={product.isExhibitionOnly || product.stock <= 0}
              onClick={() => onAddToCart(product)}
              className="w-full py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transition-all transform active:scale-95 disabled:opacity-50 disabled:bg-stone-300 disabled:cursor-not-allowed bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>{product.isExhibitionOnly ? 'Hanya Mode Pameran' : 'Tambah ke Keranjang'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              <span>Spesifikasi & Panduan Tanam</span>
            </h3>
            <div className="bg-white border border-stone-100 rounded-3xl p-8 shadow-sm space-y-8">
              <div>
                <h4 className="font-bold text-stone-900 mb-4">Spesifikasi Mutu</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-stone-600">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 border-t border-stone-50">
                <h4 className="font-bold text-stone-900 mb-4">Instruksi Penanaman</h4>
                <p className="text-stone-600 leading-relaxed bg-stone-50 p-6 rounded-2xl italic">
                  "{product.plantingGuide}"
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 rounded-3xl text-white shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="w-6 h-6 text-amber-300" />
              <h3 className="text-xl font-bold">Tanya AI Expert</h3>
            </div>
            <p className="text-emerald-100 text-sm mb-8 leading-relaxed">
              Dapatkan saran perawatan mendalam dari asisten cerdas kami khusus untuk varietas {product.name}.
            </p>
            {aiAdvice ? (
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl text-xs space-y-2 max-h-[400px] overflow-y-auto mb-6">
                {aiAdvice.split('\n').map((line, i) => <p key={i}>{line}</p>)}
              </div>
            ) : null}
            <button 
              onClick={fetchAiAdvice}
              disabled={loadingAi}
              className="w-full bg-white text-emerald-800 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loadingAi ? 'Menganalisis...' : 'Dapatkan Saran AI'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
