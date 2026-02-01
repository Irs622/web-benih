
import { Product, Article, Category } from './types';

export const CATEGORIES: Category[] = ['Sayuran', 'Buah', 'Tanaman Hias', 'Perkebunan', 'Pangan'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Benih Tomat Cherry Red',
    latinName: 'Solanum lycopersicum',
    category: 'Sayuran',
    description: 'Tomat cherry dengan rasa manis yang intens dan produktivitas tinggi. Sangat cocok untuk ditanam di dataran rendah maupun tinggi.',
    harvestTime: '60-70 Hari',
    germinationRate: '95%',
    price: 25000,
    stock: 150,
    image: 'https://picsum.photos/seed/tomato/600/400',
    isExhibitionOnly: false,
    specifications: ['Kemurnian: 99%', 'Kadar Air: 7%', 'Daya Berkecambah: 85%'],
    plantingGuide: 'Rendam benih dalam air hangat selama 2 jam, semai di media rockwool atau tanah humus.'
  },
  {
    id: '2',
    name: 'Bibit Durian Musang King',
    latinName: 'Durio zibethinus',
    category: 'Buah',
    description: 'Varietas durian premium dengan daging buah kuning keemasan, tekstur lembut, dan rasa manis pahit yang khas.',
    harvestTime: '4-5 Tahun',
    germinationRate: 'N/A (Cangkok)',
    price: 150000,
    stock: 20,
    image: 'https://picsum.photos/seed/durian/600/400',
    isExhibitionOnly: true,
    specifications: ['Asal: Malaysia', 'Tinggi: 50-70cm', 'Kualitas: Super'],
    plantingGuide: 'Siapkan lubang tanam 60x60x60cm, campur tanah dengan pupuk organik.'
  },
  {
    id: '3',
    name: 'Benih Selada Green Romaine',
    latinName: 'Lactuca sativa',
    category: 'Sayuran',
    description: 'Selada renyah dengan daun hijau segar, sangat populer untuk menu salad dan burger.',
    harvestTime: '45 Hari',
    germinationRate: '90%',
    price: 18000,
    stock: 300,
    image: 'https://picsum.photos/seed/lettuce/600/400',
    isExhibitionOnly: false,
    specifications: ['Toleran Panas', 'Tahan Virus', 'Bobot: 300-400g'],
    plantingGuide: 'Semai pada media lembab, hindarkan dari sinar matahari langsung di 3 hari pertama.'
  },
  {
    id: '4',
    name: 'Benih Bunga Matahari Giant',
    latinName: 'Helianthus annuus',
    category: 'Tanaman Hias',
    description: 'Bunga matahari raksasa yang dapat tumbuh hingga ketinggian 2 meter dengan diameter bunga yang lebar.',
    harvestTime: '90 Hari',
    germinationRate: '85%',
    price: 35000,
    stock: 50,
    image: 'https://picsum.photos/seed/sunflower/600/400',
    isExhibitionOnly: false,
    specifications: ['Warna: Kuning Cerah', 'Kebutuhan Sinar: Full Sun'],
    plantingGuide: 'Tanam langsung di tanah dengan kedalaman 2cm, beri jarak 50cm antar tanaman.'
  }
];

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: '5 Cara Memilih Benih Unggul untuk Pemula',
    excerpt: 'Memilih benih adalah langkah krusial dalam keberhasilan bertani. Simak tips praktis dari ahli kami.',
    content: 'Isi artikel lengkap mengenai pemilihan benih...',
    author: 'Admin Semai',
    date: '15 Mei 2024',
    image: 'https://picsum.photos/seed/farming1/800/400'
  },
  {
    id: 'art-2',
    title: 'Manfaat Pertanian Berkelanjutan (Regenerative)',
    excerpt: 'Mengenal teknik bertani yang tidak hanya menghasilkan pangan tapi juga memperbaiki ekosistem.',
    content: 'Isi artikel mengenai sustainability...',
    author: 'Pakar Tani',
    date: '20 Mei 2024',
    image: 'https://picsum.photos/seed/farming2/800/400'
  }
];
