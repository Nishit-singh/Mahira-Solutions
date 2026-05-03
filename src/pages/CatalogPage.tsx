import React, { useEffect, useState } from 'react';
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

interface OrderDetails {
  productId: number;
  productName: string;
  quantity: number;
  totalPrice: number;
  instructions: string;
  file: File | null;
}

const API_URL = import.meta.env.VITE_API_URL || '';

const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleCheckout = (orderDetails: OrderDetails) => {
    // Logic same as HomePage - could be abstracted to a hook
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

  return (
    <div className="bg-off-white min-h-screen py-20">
      <div className="section-container">
        <div className="mb-12 border-l-8 border-emerald pl-8">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald mb-2 block">Complete Inventory</span>
          <h1 className="text-6xl md:text-7xl font-black text-emerald-dark uppercase tracking-tighter leading-none">
            Printing<br />Hub
          </h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => { setSelectedProduct(p); setIsModalOpen(true); }}
            />
          ))}
        </div>
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
