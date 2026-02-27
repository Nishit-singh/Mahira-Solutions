
import React, { useState } from 'react';
import { BusinessVertical, Product } from '../types';
import { PRODUCTS, CATEGORIES } from '../data';
import ProductCard from '../components/ProductCard';

interface CategoryPageProps {
  vertical: BusinessVertical;
  onNavigateProduct: (productId: string) => void;
  onNavigateEnquiry: (productId?: string) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({ vertical, onNavigateProduct, onNavigateEnquiry }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const isMetal = vertical === BusinessVertical.METAL;
  const filteredCategories = CATEGORIES.filter(c => c && c.vertical === vertical);
  const verticalProducts = PRODUCTS.filter(p => p && p.vertical === vertical);

  // Filter logic: If a category is selected, only show that one.
  const displayCategories = activeCategoryId
    ? filteredCategories.filter(c => c.id === activeCategoryId)
    : filteredCategories;

  // Printing Specific Styles: Airy, Primary Blue, Rounder
  // Metal Specific Styles: High contrast, Industrial Orange, Monospace hints, Grid patterns

  const accentColor = isMetal ? 'text-industrial-orange' : 'text-primary';
  const accentBg = isMetal ? 'bg-industrial-orange' : 'bg-primary';
  const heroImg = isMetal
    ? "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1600"
    : "https://images.unsplash.com/photo-1599056377754-06830554c5e3?auto=format&fit=crop&q=80&w=1600";

  return (
    <div className={`animate-in fade-in duration-500 ${isMetal ? 'bg-metal-bg' : 'bg-printing-bg'} dark:bg-deep-charcoal`}>

      {/* Hero: Vertical Specific Header */}
      <section className={`relative h-[400px] flex items-center overflow-hidden transition-colors duration-500 ${isMetal ? 'bg-deep-charcoal' : 'bg-slate-industrial'}`}>
        {!isMetal && <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596495577610-8b1a3d1b3128?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center pointer-events-none mix-blend-overlay"></div>}
        {isMetal && <div className="absolute inset-0 opacity-[0.03] bg-blueprint pointer-events-none"></div>}
        <img
          src={heroImg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isMetal ? 'opacity-30 mix-blend-luminosity' : 'opacity-20'}`}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {isMetal && (
              <span className={`inline-block px-4 py-1.5 ${accentBg} text-white text-[10px] font-black uppercase tracking-[0.3em] rounded mb-6`}>
                Precision Fabrication Unit
              </span>
            )}
            <h1 className={`text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tighter ${isMetal ? 'font-display' : 'font-sans'}`}>
              {isMetal ? 'HARDWARE' : 'IDENTITY'}<br />
              <span className={accentColor}>SOLUTIONS.</span>
            </h1>
            <p className={`text-xl ${isMetal ? 'text-gray-400' : 'text-gray-500'} leading-relaxed font-medium`}>
              {isMetal
                ? 'High-tolerance engineering and heavy industrial supply chain management. ISO 9001 certified fabrication for aerospace and automotive sectors.'
                : 'Sophisticated identification media and tracking hardware. Powering enterprise security and logistics with advanced encoding technology.'}
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Nav / Filter Bar */}
      <div className={`sticky top-20 z-40 border-b transition-colors ${isMetal ? 'bg-deep-charcoal border-white/5' : 'bg-white dark:bg-deep-charcoal border-gray-100 dark:border-white/5 shadow-sm'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-8 py-4 no-scrollbar">
            <button
              onClick={() => setActiveCategoryId(null)}
              className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all whitespace-nowrap ${activeCategoryId === null ? (isMetal ? 'text-industrial-orange border-b-2 border-industrial-orange' : 'text-primary border-b-2 border-primary') : 'text-gray-400'}`}
            >
              ALL
            </button>
            {filteredCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id === activeCategoryId ? null : cat.id)}
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all whitespace-nowrap ${cat.id === activeCategoryId ? (isMetal ? 'text-industrial-orange border-b-2 border-industrial-orange' : 'text-primary border-b-2 border-primary') : (isMetal ? 'text-gray-500 hover:text-industrial-orange' : 'text-gray-400 hover:text-primary')}`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Discovery Sections */}
      <section className={`py-20 ${isMetal ? 'bg-blueprint pb-28' : 'bg-white dark:bg-deep-charcoal'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {displayCategories.map(category => {
            const categoryProducts = verticalProducts.filter(p => p.category === category.id);
            if (categoryProducts.length === 0) return null;

            return (
              <div key={category.id} className="mb-20 last:mb-0">
                <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 ${isMetal ? 'border-l-[12px] border-industrial-orange/40' : 'border-l-4 border-primary'} pl-6`}>
                  <div className="max-w-2xl">
                    <h2 className={`text-3xl font-black text-deep-charcoal dark:text-white uppercase tracking-tighter mb-2 ${isMetal ? 'font-display' : 'font-sans'}`}>
                      {category.title}
                    </h2>
                    <p className={`text-base ${isMetal ? 'text-gray-500 font-mono text-sm' : 'text-gray-400 font-medium'}`}>
                      {category.description}
                    </p>
                  </div>
                  {isMetal && (
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Fabrication Lines: 12</span>
                      <div className="w-32 h-1 bg-industrial-orange"></div>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                  {categoryProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onViewDetails={onNavigateProduct}
                      onQuickEnquiry={onNavigateEnquiry}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dynamic Trust Bar */}
      <section className={`${isMetal ? 'bg-deep-charcoal text-white' : 'bg-gray-50 dark:bg-slate-industrial'} py-16 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center items-center">
            <div className="space-y-4">
              <p className={`text-[40px] font-black tracking-tighter leading-none ${accentColor}`}>
                {isMetal ? '±0.005' : '1M+'}
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
                {isMetal ? 'MICRON TOLERANCE' : 'CARDS DELIVERED'}
              </p>
            </div>
            <div className="space-y-4">
              <p className={`text-[40px] font-black tracking-tighter leading-none ${accentColor}`}>
                {isMetal ? 'AS9100' : 'ISO 14001'}
              </p>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
                {isMetal ? 'DEFENSE CERTIFIED' : 'GLOBAL STANDARD'}
              </p>
            </div>
            <div className="col-span-2 md:text-right">
              <h3 className={`text-2xl font-black mb-4 ${isMetal ? 'text-white' : 'text-deep-charcoal'}`}>Ready for volume contract?</h3>
              <button onClick={() => onNavigateEnquiry()} className={`${accentBg} text-white text-[11px] font-black uppercase tracking-widest px-10 py-4 rounded-full shadow-2xl`}>
                Start Master Procurement
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;
