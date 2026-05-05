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

  const activeCategory = searchParams.get('category');

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));

    fetch(`${API_URL}/api/categories`)
      .then(res => res.json())
      .then(data => setCategories(data));
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

  const filteredProducts = activeCategory 
    ? products.filter(p => p.category === activeCategory)
    : products;

  return (
    <div className="bg-off-white min-h-screen py-20">
      <div className="section-container">
        <div className="mb-12 border-l-8 border-emerald pl-8 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald mb-2 block">
              {activeCategory ? `Category: ${activeCategory}` : 'Complete Inventory'}
            </span>
            <h1 className="text-6xl md:text-7xl font-black text-emerald-dark uppercase tracking-tighter leading-none">
              Printing<br />Hub
            </h1>
          </div>
          {activeCategory && (
            <button 
              onClick={() => setSearchParams({})}
              className="btn-outline !py-3 !px-6 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Categories
            </button>
          )}
        </div>

        {!activeCategory ? (
          /* Category Folders View */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {categories.map((cat) => (
              <div 
                key={cat.category}
                onClick={() => setSearchParams({ category: cat.category })}
                className="folder-card group cursor-pointer bg-emerald h-80 flex flex-col justify-end p-8 border-4 border-emerald-dark shadow-2xl"
              >
                <div className="folder-tab"></div>
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                  <span className="material-symbols-outlined text-8xl text-white">folder_open</span>
                </div>
                
                <div className="relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-mint/60 block mb-2">Category</span>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">
                    {cat.category}
                  </h3>
                  <div className="mt-6 flex items-center gap-3 text-mint group-hover:gap-5 transition-all">
                    <span className="text-[11px] font-black uppercase tracking-widest">Explore Products</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        ) : (
          /* Products Grid View */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 animate-slide-up">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => { setSelectedProduct(p); setIsModalOpen(true); }}
              />
            ))}
          </div>
        )}
      </div>

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
