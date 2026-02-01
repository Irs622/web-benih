
import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onCheckout: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, onCheckout }) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col">
        <div className="p-6 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold">Keranjang Belanja</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full">
            <X className="w-6 h-6 text-stone-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-stone-400">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
              <p>Keranjang Anda masih kosong.</p>
              <button onClick={onClose} className="mt-4 text-emerald-600 font-semibold hover:underline">
                Mulai Belanja
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.product.id} className="flex space-x-4">
                <img src={item.product.image} className="w-20 h-20 object-cover rounded-lg" alt={item.product.name} />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold text-stone-900">{item.product.name}</h3>
                    <button onClick={() => onRemove(item.product.id)} className="text-stone-300 hover:text-red-500">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-stone-500 mb-2">Rp {item.product.price.toLocaleString()}</p>
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={() => onUpdateQuantity(item.product.id, -1)}
                      className="w-8 h-8 flex items-center justify-center border border-stone-200 rounded-md hover:bg-stone-50"
                    >
                      -
                    </button>
                    <span className="font-medium">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.product.id, 1)}
                      className="w-8 h-8 flex items-center justify-center border border-stone-200 rounded-md hover:bg-stone-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-stone-100 space-y-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-emerald-700">Rp {total.toLocaleString()}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all transform active:scale-95"
            >
              <span>Checkout Sekarang</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
