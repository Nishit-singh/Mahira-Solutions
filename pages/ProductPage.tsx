
import React from 'react';
import { Product, BusinessVertical } from '../types';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';
import ProductGallery from '../components/ProductGallery';

interface ProductPageProps {
  product: Product;
  onNavigateEnquiry: (productId: string) => void;
  onNavigateProduct: (productId: string) => void;
  onBack: () => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ product, onNavigateEnquiry, onNavigateProduct, onBack }) => {
  const isMetal = product.vertical === BusinessVertical.METAL;
  const accentColor = isMetal ? 'text-industrial-orange' : 'text-primary';
  const accentBg = isMetal ? 'bg-industrial-orange' : 'bg-primary';
  const fontClass = isMetal ? 'font-display' : 'font-sans';
  
  const related = PRODUCTS.filter(p => p.id !== product.id && (p.category === product.category || p.vertical === product.vertical)).slice(0, 6);

  // Mock gallery images if not present
  const galleryImages = product.galleryUrls || [
    `https://picsum.photos/seed/${product.id}1/800/600`,
    `https://picsum.photos/seed/${product.id}2/800/600`,
    `https://picsum.photos/seed/${product.id}3/800/600`,
  ];

  return (
    <div className={`min-h-screen vertical-transition ${isMetal ? 'bg-metal-bg' : 'bg-white'}`}>
      {/* Navigation Breadcrumb */}
      <nav className={`py-5 border-b transition-colors ${isMetal ? 'bg-white/50 border-industrial-orange/10' : 'bg-gray-50 border-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-400">
            <button onClick={onBack} className="hover:text-deep-charcoal flex items-center gap-1 transition-colors">
              <span className="material-symbols-outlined text-sm">home</span> Catalog
            </button>
            <span className="opacity-20">/</span>
            <span className={accentColor}>{product.name}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Gallery Component */}
          <div className="lg:col-span-7">
            <ProductGallery 
              mainImage={product.imageUrl} 
              galleryImages={galleryImages} 
              isMetal={isMetal} 
            />
          </div>

          {/* Detailed Content */}
          <div className="lg:col-span-5 space-y-12">
            <header>
              <div className="flex gap-2 mb-6">
                {product.badges?.map(b => (
                  <span key={b} className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${isMetal ? 'border-industrial-orange text-industrial-orange' : 'border-primary/20 bg-primary/5 text-primary'}`}>{b}</span>
                ))}
              </div>
              <h1 className={`text-4xl md:text-5xl font-black text-deep-charcoal leading-tight uppercase tracking-tighter mb-8 ${fontClass}`}>
                {product.name}
              </h1>
              <p className={`text-lg ${isMetal ? 'text-gray-500 font-mono text-sm leading-relaxed' : 'text-gray-500 font-medium leading-relaxed'}`}>
                {product.fullDescription}
              </p>
            </header>

            {/* Performance Specifications */}
            <div className={`rounded-2xl overflow-hidden transition-all ${isMetal ? 'bg-deep-charcoal text-white shadow-2xl' : 'bg-white border border-gray-100 shadow-sm'}`}>
              <div className={`px-8 py-5 border-b flex items-center justify-between ${isMetal ? 'bg-industrial-orange border-white/10' : 'bg-gray-50 border-gray-100'}`}>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xl">{isMetal ? 'settings_input_component' : 'analytics'}</span>
                  <h3 className="font-black text-[11px] uppercase tracking-[0.25em]">Technical Parameters</h3>
                </div>
                {isMetal && <span className="text-[10px] font-mono opacity-50">Rev. 2.4</span>}
              </div>
              <table className="w-full text-left">
                <tbody>
                  {product.specs.map((spec, i) => (
                    <tr key={i} className={`border-b last:border-0 hover:bg-white/5 transition-colors ${isMetal ? 'border-white/5' : 'border-gray-50'}`}>
                      <td className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase tracking-widest w-2/5">{spec.label}</td>
                      <td className={`px-8 py-4 text-sm font-bold ${isMetal ? 'text-industrial-orange font-mono' : 'text-deep-charcoal'}`}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Use Cases / Sectors */}
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Target Industry Deployment</h4>
              <div className="flex flex-wrap gap-3">
                {product.applications.map(app => (
                  <div key={app} className={`flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all ${isMetal ? 'bg-white border-industrial-orange/20 text-deep-charcoal' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
                    <span className={`material-symbols-outlined text-lg ${accentColor}`}>check_circle</span>
                    <span className="text-[11px] font-black uppercase tracking-widest">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Hub */}
            <div className={`${isMetal ? 'bg-deep-charcoal border-4 border-industrial-orange' : accentBg} p-10 rounded-3xl shadow-2xl shadow-black/10 relative overflow-hidden group`}>
              <div className="relative z-10 text-white">
                <h4 className="text-2xl font-black mb-3 tracking-tighter uppercase">Request Technical Quote</h4>
                <p className="text-sm opacity-80 mb-10 font-medium">B2B volume discount applies for orders over 500 units.</p>
                <button 
                  onClick={() => onNavigateEnquiry(product.id)}
                  className={`w-full ${isMetal ? 'bg-industrial-orange' : 'bg-white'} ${isMetal ? 'text-white' : accentColor} font-black py-5 rounded-2xl hover:scale-[1.03] transition-all flex items-center justify-center gap-3 shadow-xl uppercase tracking-widest text-xs`}
                >
                  <span className="material-symbols-outlined">description</span>
                  Initialize Project
                </button>
              </div>
              {isMetal && <div className="absolute inset-0 opacity-5 bg-blueprint"></div>}
            </div>
          </div>
        </div>

        {/* Horizontal discovery scroll */}
        <div className="mt-32 space-y-16">
          <div className="flex items-end justify-between border-b border-gray-100 pb-10">
            <div>
              <h2 className={`text-4xl font-black text-deep-charcoal uppercase tracking-tighter ${fontClass}`}>Related Components</h2>
              <p className="text-gray-400 mt-2 font-medium">Compatible industrial solutions for multi-channel procurement.</p>
            </div>
          </div>
          <div className="flex overflow-x-auto gap-10 pb-12 no-scrollbar snap-x snap-mandatory">
            {related.map(rel => (
              <div key={rel.id} className="min-w-[340px] snap-start">
                <ProductCard 
                  product={rel} 
                  onViewDetails={onNavigateProduct} 
                  onQuickEnquiry={onNavigateEnquiry} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
