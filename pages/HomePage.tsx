
import React from 'react';
import { PRODUCTS } from '../data';
import { BusinessVertical } from '../types';
import ProductCard from '../components/ProductCard';

interface HomePageProps {
  onNavigate: (view: string) => void;
  onNavigateProduct: (productId: string) => void;
  onNavigateEnquiry: (productId?: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate, onNavigateProduct, onNavigateEnquiry }) => {
  const printingFeatured = PRODUCTS.filter(p => p.vertical === BusinessVertical.PRINTING).slice(0, 5);
  const metalFeatured = PRODUCTS.filter(p => p.vertical === BusinessVertical.METAL).slice(0, 5);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24 border-b border-gray-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded mb-6">
              Industrial Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-deep-charcoal leading-tight mb-8">
              Precision Engineering.<br />
              <span className="text-primary">Advanced Printing.</span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 font-medium">
              Mahira Solutions Enterprises delivers high-end B2B solutions across industrial printing and precision metal manufacturing verticals.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('printing')}
                className="bg-primary text-white font-black py-4 px-10 rounded-full flex items-center gap-3 hover:brightness-110 transition-all shadow-lg shadow-primary/20 uppercase text-xs tracking-widest"
              >
                Explore Printing Hub <span className="material-symbols-outlined">print</span>
              </button>
              <button
                onClick={() => onNavigate('metal')}
                className="bg-gray-100 text-deep-charcoal font-black py-4 px-10 rounded-full flex items-center gap-3 hover:bg-gray-200 transition-all uppercase text-xs tracking-widest"
              >
                Explore Metal Hub <span className="material-symbols-outlined">settings_suggest</span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100 relative group">
              <div className="absolute inset-0 bg-deep-charcoal/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Industrial Engineering"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Removed overlay text "±0.005mm..." as requested */}
          </div>
        </div>

        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 opacity-50 pointer-events-none"></div>
      </section>

      {/* Marquee Section */}
      <section className="py-10 bg-deep-charcoal overflow-hidden border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <p className="text-industrial-orange font-black text-[10px] uppercase tracking-[0.3em] mb-2">Trending Now</p>
          <h3 className="text-white text-xl font-black uppercase tracking-widest">Most Viewed Products</h3>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 px-8">
            {/* Repeated items for infinite scroll illusion */}
            {/* Displaying random mix of products */}
            {[...PRODUCTS].sort(() => 0.5 - Math.random()).slice(0, 8).map((product, i) => (
              <React.Fragment key={i}>
                <div onClick={() => onNavigateProduct(product.id)} className="flex items-center gap-4 cursor-pointer group/item">
                  <span className="text-white/40 font-black text-2xl uppercase tracking-tighter group-hover/item:text-white transition-colors">{product.name}</span>
                  <span className="bg-white/10 text-white text-[9px] px-2 py-0.5 rounded font-mono">{product.vertical}</span>
                </div>
                <span className="text-industrial-orange font-black text-xl">✦</span>
              </React.Fragment>
            ))}
          </div>

          {/* Double the marquee for seamless loop */}
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-16 px-8">
            {[...PRODUCTS].sort(() => 0.5 - Math.random()).slice(0, 8).map((product, i) => (
              <React.Fragment key={`dup-${i}`}>
                <div onClick={() => onNavigateProduct(product.id)} className="flex items-center gap-4 cursor-pointer group/item">
                  <span className="text-white/40 font-black text-2xl uppercase tracking-tighter group-hover/item:text-white transition-colors">{product.name}</span>
                  <span className="bg-white/10 text-white text-[9px] px-2 py-0.5 rounded font-mono">{product.vertical}</span>
                </div>
                <span className="text-industrial-orange font-black text-xl">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Discovery Row: Printing Solutions */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-2">Division 01</p>
              <h2 className="text-3xl font-black text-deep-charcoal uppercase tracking-tighter">Identity & Tracking Solutions</h2>
            </div>
            <button
              onClick={() => onNavigate('printing')}
              className="text-[11px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2 group"
            >
              Browse Full Printing Catalog <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory">
            {printingFeatured.map(product => (
              <div key={product.id} className="min-w-[320px] md:min-w-[380px] snap-start">
                <ProductCard
                  product={product}
                  onViewDetails={onNavigateProduct}
                  onQuickEnquiry={onNavigateEnquiry}
                />
              </div>
            ))}
            {/* View More Card */}
            <button
              onClick={() => onNavigate('printing')}
              className="min-w-[200px] flex flex-col items-center justify-center bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-primary hover:text-primary transition-all group"
            >
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:scale-110 transition-transform">arrow_forward</span>
              <span className="text-xs font-black uppercase tracking-widest">View All</span>
            </button>
          </div>
        </div>
      </section>

      {/* Discovery Row: Metal Solutions */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-2">Division 02</p>
              <h2 className="text-3xl font-black text-deep-charcoal uppercase tracking-tighter">Precision Metal Fabrication</h2>
            </div>
            <button
              onClick={() => onNavigate('metal')}
              className="text-[11px] font-black text-primary uppercase tracking-[0.2em] flex items-center gap-2 group"
            >
              Browse Full Manufacturing Catalog <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </button>
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 no-scrollbar snap-x snap-mandatory">
            {metalFeatured.map(product => (
              <div key={product.id} className="min-w-[320px] md:min-w-[380px] snap-start">
                <ProductCard
                  product={product}
                  onViewDetails={onNavigateProduct}
                  onQuickEnquiry={onNavigateEnquiry}
                />
              </div>
            ))}
            <button
              onClick={() => onNavigate('metal')}
              className="min-w-[200px] flex flex-col items-center justify-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 hover:border-primary hover:text-primary transition-all group"
            >
              <span className="material-symbols-outlined text-4xl mb-4 group-hover:scale-110 transition-transform">arrow_forward</span>
              <span className="text-xs font-black uppercase tracking-widest">View All</span>
            </button>
          </div>
        </div>
      </section>

      {/* Institutional Trust Hub */}
      <section className="py-24 bg-deep-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {[
              { title: 'ISO 9001:2015', icon: 'verified', desc: 'Global quality management standards applied to every manufacturing batch.' },
              { title: 'CMM Verification', icon: 'biotech', desc: 'Coordinate Measuring Machine testing ensures micron-level precision for all metal parts.' },
              { title: 'Scalable Logistics', icon: 'local_shipping', desc: 'Ready for high-volume B2B contract fulfillment with dedicated account management.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
