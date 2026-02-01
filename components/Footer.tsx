
import React from 'react';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="text-emerald-500 w-6 h-6" />
              <span className="text-xl font-bold text-white">SemaiBenih</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Pusat benih unggul bersertifikat untuk masa depan pertanian Indonesia yang berkelanjutan dan modern.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Tautan Cepat</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Semua Benih</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Panduan Tanam</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Program Kemitraan</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Kebijakan Privasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Kategori</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Benih Sayuran</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Benih Buah</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Tanaman Hias</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Tanaman Pangan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Jl. Agrikultur No. 45, Bogor</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>halo@semaibenih.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs">
          <p>© 2024 SemaiBenih Digital Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
