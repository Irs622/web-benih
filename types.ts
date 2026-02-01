
export type Category = 'Sayuran' | 'Buah' | 'Tanaman Hias' | 'Perkebunan' | 'Pangan';

export interface Product {
  id: string;
  name: string;
  latinName: string;
  category: Category;
  description: string;
  harvestTime: string;
  germinationRate: string;
  price: number;
  stock: number;
  image: string;
  isExhibitionOnly: boolean;
  specifications: string[];
  plantingGuide: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed';
  date: string;
  customerName: string;
}
