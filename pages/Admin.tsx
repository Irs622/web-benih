
import React from 'react';
import { Package, ShoppingBag, TrendingUp, Users, Plus, Edit2, Trash2 } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const Admin: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-stone-900">Dashboard Admin</h1>
          <p className="text-stone-500">Pantau stok, pesanan, dan performa toko Anda.</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 hover:bg-emerald-700 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Tambah Produk</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Total Penjualan', value: 'Rp 45.2M', icon: <TrendingUp className="text-emerald-600" />, trend: '+12.5%' },
          { label: 'Pesanan Aktif', value: '142', icon: <ShoppingBag className="text-blue-600" />, trend: '+3.2%' },
          { label: 'Total Produk', value: '86', icon: <Package className="text-amber-600" />, trend: 'Tetap' },
          { label: 'Pelanggan Baru', value: '28', icon: <Users className="text-purple-600" />, trend: '+5.4%' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-stone-50 rounded-xl">{stat.icon}</div>
              <span className="text-xs font-bold text-emerald-600">{stat.trend}</span>
            </div>
            <p className="text-stone-500 text-sm font-medium">{stat.label}</p>
            <p className="text-2xl font-bold text-stone-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Product Table */}
      <div className="bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-stone-50 flex items-center justify-between">
          <h2 className="text-lg font-bold text-stone-900">Inventaris Benih</h2>
          <div className="flex items-center space-x-4">
             <span className="text-sm text-stone-500">Filter: Semua Kategori</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50 text-stone-400 text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Produk</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4">Stok</th>
                <th className="px-6 py-4">Harga</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {MOCK_PRODUCTS.map(product => (
                <tr key={product.id} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <img src={product.image} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <p className="font-bold text-stone-900 text-sm">{product.name}</p>
                        <p className="text-xs text-stone-400">{product.latinName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs font-medium px-2 py-1 bg-stone-100 rounded-md">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-bold ${product.stock < 50 ? 'text-amber-600' : 'text-stone-900'}`}>{product.stock} Pack</span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-emerald-700">Rp {product.price.toLocaleString()}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${product.isExhibitionOnly ? 'bg-purple-100 text-purple-700' : 'bg-emerald-100 text-emerald-700'}`}>
                      {product.isExhibitionOnly ? 'Pameran' : 'Jual'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-stone-400 hover:text-emerald-600 transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button className="p-2 text-stone-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
