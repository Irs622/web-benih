
import React from 'react';
import { ShoppingCart, Leaf, Menu, X, User } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Beranda', id: 'home' },
    { label: 'Katalog', id: 'catalog' },
    { label: 'Edukasi', id: 'education' },
    { label: 'Tentang Kami', id: 'about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Leaf className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
              SemaiBenih
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id ? 'text-emerald-600' : 'text-stone-600 hover:text-emerald-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('admin')}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors hidden md:block"
            >
              <User className="w-5 h-5 text-stone-600" />
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="md:hidden p-2 text-stone-600"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-stone-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate('admin');
              setIsOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-stone-600 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors"
          >
            Panel Admin
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
