import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  min_quantity: number;
}

interface Category {
  category: string;
  image_url: string;
}

interface OrderDetails {
  productId: number;
  productName: string;
  quantity: number;
  totalPrice: number;
  instructions: string;
  file: File | null;
}

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const activeCategory = searchParams.get('category');

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        // Derive unique categories dynamically and normalize them
        const uniqueCats = Array.from(new Set(data.map((p: Product) => p.category.trim().toUpperCase())))
          .map(catName => ({ category: catName as string }));
        setCategories(uniqueCats as any);
      })
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  const handleCheckout = (orderDetails: OrderDetails) => {
    fetch(`${API_URL}/api/create-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: orderDetails.totalPrice })
    })
    .then(res => res.json())
    .then(order => {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY || 'rzp_test_mock',
        amount: order.amount,
        currency: order.currency,
        name: 'Mahira Solutions',
        order_id: order.id,
        handler: function (response: any) {
          const formData = new FormData();
          formData.append('razorpay_order_id', response.razorpay_order_id);
          formData.append('razorpay_payment_id', response.razorpay_payment_id);
          formData.append('razorpay_signature', response.razorpay_signature);
          formData.append('product_name', orderDetails.productName);
          formData.append('quantity', String(orderDetails.quantity));
          formData.append('amount', String(orderDetails.totalPrice));
          formData.append('instructions', orderDetails.instructions);
          if (orderDetails.file) formData.append('designFile', orderDetails.file);

          fetch(`${API_URL}/api/verify-payment`, { method: 'POST', body: formData })
          .then(res => res.json())
          .then(() => {
            alert('Order Placed Successfully!');
            setIsModalOpen(false);
          });
        },
        theme: { color: '#1e40af' }
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    });
  };

  const filteredProducts = products.filter(p => {
    const matchesCategory = !activeCategory || p.category.trim().toUpperCase() === activeCategory.toUpperCase();
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Smaller Premium Hero Header */}
      <div className="relative bg-[#09090b] pt-20 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald/20 rounded-full blur-[100px]"></div>
        
        <div className="section-container relative z-10 !py-0">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4 animate-slide-up">
              <div className="w-8 h-[1px] bg-emerald"></div>
              <span className="text-emerald text-[9px] font-black uppercase tracking-[0.4em]">
                Inventory Hub
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-4 animate-slide-up">
              Printing <span className="text-emerald">Inventory.</span>
            </h1>
            <p className="text-white/40 text-[11px] md:text-sm font-medium leading-relaxed max-w-lg italic animate-slide-up [animation-delay:200ms]">
              Explore our full range of precision-engineered industrial solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Filter Bar - Enhanced Glassmorphism */}
      <div className="sticky top-[80px] md:top-[96px] z-30 py-6 transition-all duration-300">
        <div className="section-container !py-0">
          <div className="bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-3xl p-4 md:p-6 flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md group">
              <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-emerald transition-transform group-focus-within:scale-110">search</span>
              <input 
                type="text" 
                placeholder="Find a product..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-[#f8fafc] border-2 border-transparent focus:border-emerald/20 focus:bg-white outline-none font-bold text-[11px] uppercase tracking-widest transition-all rounded-2xl text-emerald-dark"
              />
            </div>

            {/* Dynamic Filter Dropdown */}
            <div className="relative w-full lg:w-auto">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full lg:w-64 flex items-center justify-between px-8 py-4 bg-emerald text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-emerald/20 hover:bg-emerald-dark transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">filter_list</span>
                  <span>{activeCategory || 'All Products'}</span>
                </div>
                <span className={`material-symbols-outlined transition-transform duration-300 ${isFilterOpen ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              {isFilterOpen && (
                <div className="absolute top-full left-0 w-full mt-3 bg-white border border-emerald/10 rounded-2xl shadow-2xl overflow-hidden animate-slide-down z-50 max-h-64 overflow-y-auto no-scrollbar">
                  <button
                    onClick={() => { setSearchParams({}); setIsFilterOpen(false); }}
                    className={`w-full text-left px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-colors border-b border-emerald/5 ${
                      !activeCategory ? 'bg-emerald/5 text-emerald' : 'text-emerald-dark hover:bg-emerald/5'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.category}
                      onClick={() => { setSearchParams({ category: cat.category }); setIsFilterOpen(false); }}
                      className={`w-full text-left px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-colors border-b last:border-0 border-emerald/5 ${
                        activeCategory === cat.category ? 'bg-emerald/5 text-emerald' : 'text-emerald-dark hover:bg-emerald/5'
                      }`}
                    >
                      {cat.category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="section-container !py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 animate-slide-up [animation-delay:400ms]">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id}>
                <ProductCard
                  product={product}
                  onSelect={(p) => { setSelectedProduct(p); setIsModalOpen(true); }}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full py-40 text-center flex flex-col items-center">
              <div className="w-24 h-24 bg-emerald/5 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-5xl text-emerald/20">search_off</span>
              </div>
              <h3 className="text-xl text-emerald-dark/40 font-black uppercase tracking-widest">No matching results</h3>
              <p className="text-text-muted text-xs uppercase tracking-widest mt-2 font-bold">Try adjusting your filters or search query</p>
              <button 
                onClick={() => {setSearchQuery(''); setSearchParams({});}}
                className="mt-8 text-emerald text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-emerald pb-1"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default CatalogPage;
