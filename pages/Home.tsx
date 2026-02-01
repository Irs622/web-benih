
import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sprout, TrendingUp } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Farming field"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 bg-emerald-600/30 backdrop-blur-md rounded-full text-emerald-100 text-sm font-semibold mb-6">
              🌱 Kualitas Terjamin & Bersertifikat
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Benih Unggul untuk Masa Depan Pertanian Berkelanjutan
            </h1>
            <p className="text-lg text-stone-200 mb-10 leading-relaxed">
              Dapatkan benih tanaman berkualitas tinggi yang telah melalui uji mutu laboratorium untuk hasil panen maksimal dan ketahanan terhadap penyakit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('catalog')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all group"
              >
                <span>Lihat Katalog</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('education')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Pelajari Teknik Tanam
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Kenapa Memilih SemaiBenih?</h2>
          <p className="text-stone-500 max-w-xl mx-auto">Kami mengutamakan standar mutu yang ketat untuk memastikan setiap benih yang Anda tanam memberikan hasil terbaik.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
              title: "Sertifikat Resmi",
              desc: "Seluruh benih telah mendapatkan sertifikasi dari Balai Pengawasan dan Sertifikasi Benih (BPSB)."
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-emerald-600" />,
              title: "Daya Tumbuh Tinggi",
              desc: "Tingkat perkecambahan di atas 85% dengan seleksi ketat bibit-bibit unggul dari indukan terpilih."
            },
            {
              icon: <Zap className="w-8 h-8 text-emerald-600" />,
              title: "Hasil Cepat & Optimal",
              desc: "Varietas genjah yang mempercepat masa panen tanpa mengurangi kualitas gizi dan rasa buah."
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:border-emerald-200 transition-colors">
              <div className="bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Categories */}
      <section className="bg-emerald-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Jelajahi Berbagai Koleksi Kami</h2>
              <p className="text-emerald-100/70">Mulai dari sayuran harian hingga tanaman perkebunan bernilai ekonomi tinggi, semua tersedia di satu tempat.</p>
            </div>
            <button 
              onClick={() => onNavigate('catalog')}
              className="mt-6 md:mt-0 text-emerald-400 font-bold hover:text-emerald-300 flex items-center space-x-2"
            >
              <span>Semua Kategori</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Sayuran', img: 'https://picsum.photos/seed/veggies/300/400' },
              { name: 'Buah-buahan', img: 'https://picsum.photos/seed/fruits/300/400' },
              { name: 'Tanaman Hias', img: 'https://picsum.photos/seed/flowers/300/400' },
              { name: 'Perkebunan', img: 'https://picsum.photos/seed/estate/300/400' }
            ].map((cat, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer" onClick={() => onNavigate('catalog')}>
                <img src={cat.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={cat.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold">{cat.name}</h4>
                  <p className="text-sm text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity">Lihat Koleksi &rarr;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
