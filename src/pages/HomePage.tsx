import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import QueryModal from '../components/QueryModal';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';

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

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQueryModalOpen, setIsQueryModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => setProducts(Array.isArray(data) ? data : []))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  const handleCheckout = (orderDetails: OrderDetails) => {
    fetch(`${API_URL}/api/create-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: orderDetails.totalPrice })
    })
    .then(res => {
      if (!res.ok) throw new Error('Failed to create payment order');
      return res.json();
    })
    .then(order => {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY || 'rzp_test_mock',
        amount: order.amount,
        currency: order.currency,
        name: 'Mahira Solutions',
        description: `Order for ${orderDetails.productName}`,
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

          fetch(`${API_URL}/api/verify-payment`, {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(result => {
            if (result.success) {
              alert('Payment Successful! Your order has been placed.');
              setIsModalOpen(false);
              setSelectedProduct(null);
            } else {
              alert('Payment Verification Failed: ' + result.error);
            }
          })
          .catch(err => alert('Verification Error: ' + err.message));
        },
        prefill: { name: '', email: '', contact: '' },
        theme: { color: '#1e40af' }
      };
      const rzp = new (window as any).Razorpay(options);
      rzp.on('payment.failed', function (response: any) {
        alert('Payment Failed: ' + response.error.description);
      });
      rzp.open();
    })
    .catch(err => alert('Checkout Error: ' + err.message));
  };

  return (
    <div className="bg-off-white">
      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[75vh] flex items-center overflow-hidden bg-white py-12">
        <div className="absolute inset-0 bg-geometric"></div>
        <div className="section-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-text-dark leading-[1.1] mb-8 uppercase tracking-tighter">
              Precision Engineering.<br />
              <span className="text-emerald">Advanced Printing.</span>
            </h1>
            <p className="text-sm md:text-base font-bold text-text-muted leading-relaxed max-w-md mb-10 uppercase tracking-wider opacity-80">
              Mahira Solutions Enterprises delivers high-end B2B solutions across industrial printing verticals.
            </p>
            <div className="flex flex-wrap gap-8">
              <button onClick={() => navigate('/catalog')} className="btn-primary">Explore Printing Hub</button>
              <button onClick={() => setIsQueryModalOpen(true)} className="btn-outline">Consult Our Team</button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="aspect-square bg-emerald rounded-none shadow-[40px_40px_0px_0px_rgba(0,107,94,0.1)] overflow-hidden border-4 border-emerald">
              <img
                src={heroImage}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt="Industrial Printing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 bg-emerald text-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-mint mb-4 block">Our Identity</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-none">
                Pioneering B2B<br />Logistics
              </h2>
              <p className="text-base md:text-lg font-bold text-mint/60 leading-relaxed uppercase tracking-wider italic">
                "We don't just print; we engineer the physical identity of your global enterprise. From security-grade ID tags to massive apparel batches, precision is our only standard."
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-mint p-8 bg-white/5">
                <span className="text-4xl font-black block mb-2">15+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-mint/40">Industrial Verticals</span>
              </div>
              <div className="border-l-4 border-mint p-8 bg-white/5">
                <span className="text-4xl font-black block mb-2">100k+</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-mint/40">Monthly Output</span>
              </div>
              <div className="border-l-4 border-mint p-8 bg-white/5">
                <span className="text-4xl font-black block mb-2">24h</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-mint/40">Rapid Prototypes</span>
              </div>
              <div className="border-l-4 border-mint p-8 bg-white/5">
                <span className="text-4xl font-black block mb-2">99.9%</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-mint/40">Precision Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION (PREVIEW) */}
      <section id="products" className="py-24 bg-off-white text-text-dark">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.5em] text-brand-orange mb-4 block">Trending Now</span>
              <h2 className="text-5xl font-black text-text-dark uppercase tracking-tighter">Most Viewed Products</h2>
            </div>
            <button onClick={() => navigate('/catalog')} className="text-xs font-black uppercase tracking-widest text-emerald border-b-2 border-emerald pb-2">Browse All Products</button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {products.slice(0, 3).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => { setSelectedProduct(p); setIsModalOpen(true); }}
              />
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/catalog')}
              className="btn-primary inline-flex items-center gap-4 py-6 px-16"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">View More</span>
            </button>
          </div>
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-12 bg-emerald text-white">
        <div className="section-container">
          <div className="text-center mb-8">
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-mint mb-2 block">Our Partners</span>
            <h2 className="text-3xl font-black uppercase tracking-tighter">Client Feedback</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { rc: "RC", name: "Robert Chen", role: "Logistics Director", text: "The precision in their ID tag printing is unmatched. A critical partner for our security logistics." },
              { rc: "SW", name: "Sarah Williams", role: "Operations Lead", text: "Bulk apparel printing with zero defects. Mahira has completely streamlined our internal branding." },
              { rc: "VS", name: "Vikram Singh", role: "CEO, Apex Mfg", text: "Rapid turnaround times and impeccable material quality. They truly understand industrial scale." }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border-4 border-mint shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="flex gap-1 text-brand-orange mb-6">
                  {[...Array(5)].map((_, j) => <span key={j} className="material-symbols-outlined text-base fill-current">star</span>)}
                </div>
                <p className="text-sm font-black leading-relaxed mb-8 uppercase tracking-wide italic text-emerald-dark">
                  "{rev.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald rounded-full flex items-center justify-center text-[10px] font-black text-white">{rev.rc}</div>
                  <div>
                    <span className="text-xs font-black block uppercase text-emerald-dark">{rev.name}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald/40">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION - NEW 2-COLUMN DESIGN */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald/5 -skew-x-12 translate-x-1/2"></div>
        
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Content */}
            <div className="space-y-12">
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-emerald mb-4 block">Get In Touch</span>
                <h2 className="text-4xl md:text-6xl font-black text-emerald-dark uppercase tracking-tighter leading-[0.9] mb-8">
                  Connect with our <br /> <span className="text-emerald">Industrial Hub.</span>
                </h2>
                <p className="text-text-muted text-lg font-medium leading-relaxed max-w-md italic">
                  For enterprise inquiries, vendor partnerships, or bulk printing consultations, please use our primary communications desk.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-light flex items-center justify-center text-emerald flex-shrink-0 shadow-lg shadow-emerald/5">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald/40 block mb-1">Corporate HQ</span>
                    <p className="text-sm font-bold text-emerald-dark leading-relaxed">
                      L 1/056, LONAPUR CHINHAT,<br />LUCKNOW, UP - 226028
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-light flex items-center justify-center text-emerald flex-shrink-0 shadow-lg shadow-emerald/5">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald/40 block mb-1">Communication Desk</span>
                    <p className="text-sm font-bold text-emerald-dark">
                      Corporate: solutions@mahira.com<br />
                      Inquiries: ms1989singh@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-light flex items-center justify-center text-emerald flex-shrink-0 shadow-lg shadow-emerald/5">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald/40 block mb-1">Business Lines</span>
                    <p className="text-sm font-bold text-emerald-dark">
                      Primary: +91 63866 58443<br />
                      Logistics: +91 82960 52779
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Form Card */}
            <div className="bg-off-white p-10 md:p-14 rounded-[40px] shadow-2xl border border-emerald-light relative">
              <div className="mb-10">
                <h3 className="text-2xl font-black text-emerald-dark uppercase tracking-tight">Enterprise Inquiry Form</h3>
                <div className="w-12 h-1 bg-emerald mt-2"></div>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="FULL NAME" 
                      className="w-full p-5 bg-white border border-emerald-light focus:border-emerald outline-none font-bold text-[10px] uppercase rounded-2xl transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      placeholder="COMPANY / ORGANIZATION" 
                      className="w-full p-5 bg-white border border-emerald-light focus:border-emerald outline-none font-bold text-[10px] uppercase rounded-2xl transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="CORPORATE EMAIL ADDRESS" 
                    className="w-full p-5 bg-white border border-emerald-light focus:border-emerald outline-none font-bold text-[10px] uppercase rounded-2xl transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <textarea 
                    placeholder="HOW CAN OUR SOLUTIONS EMPOWER YOUR BUSINESS?" 
                    className="w-full p-5 bg-white border border-emerald-light focus:border-emerald outline-none font-bold text-[10px] uppercase rounded-2xl transition-all min-h-[150px]"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  onClick={() => alert('Consultation Request Logged. Our team will contact you shortly.')}
                  className="btn-primary w-full py-6 text-[10px] shadow-emerald/20"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* MODALS */}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setIsModalOpen(false)}
          onCheckout={handleCheckout}
        />
      )}
      {isQueryModalOpen && (
        <QueryModal
          onClose={() => setIsQueryModalOpen(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
