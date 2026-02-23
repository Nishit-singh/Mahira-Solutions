
import React from 'react';
import { Product, BusinessVertical } from '../types';

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: string) => void;
  onQuickEnquiry: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onQuickEnquiry }) => {
  const isMetal = product.vertical === BusinessVertical.METAL;

  // Theme assignments
  const accentColor = isMetal ? 'text-industrial-orange' : 'text-primary';
  const buttonBg = isMetal ? 'bg-deep-charcoal dark:bg-slate-industrial' : 'bg-primary';
  const cardBorder = isMetal ? 'group-hover:border-industrial-orange/30 dark:border-white/10 dark:group-hover:border-industrial-orange/50' : 'group-hover:border-primary/30 dark:border-white/10 dark:group-hover:border-primary/50';
  const fontClass = isMetal ? 'font-display' : 'font-sans';
  const badgeClass = isMetal ? 'bg-industrial-orange text-white' : 'bg-white/90 dark:bg-deep-charcoal/90 text-deep-charcoal dark:text-white';

  return (
    <div
      onClick={() => onViewDetails(product.id)}
      className={`bg-white dark:bg-slate-industrial group rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer ${cardBorder}`}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50 dark:bg-deep-charcoal">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.badges?.map((badge, idx) => (
            <span key={idx} className={`${badgeClass} backdrop-blur px-2.5 py-0.5 rounded text-[7px] font-black uppercase tracking-widest shadow-sm`}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="p-3 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3
              className={`text-[13px] font-bold text-deep-charcoal dark:text-gray-100 tracking-tight group-hover:${accentColor} transition-colors leading-tight ${fontClass}`}
            >
              {product.name}
            </h3>
          </div>
          <p className="text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 font-medium mb-3 transition-colors">
            {product.shortDescription}
          </p>

          <div className={`${isMetal ? 'bg-gray-100 dark:bg-deep-charcoal/50' : 'bg-gray-50 dark:bg-deep-charcoal/50'} rounded-lg p-2 space-y-1.5 mb-2`}>
            {product.specs?.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/50 last:border-0 pb-1 last:pb-0">
                <span className="text-[8px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{spec.label}</span>
                <span className={`text-[9px] font-bold ${isMetal ? 'text-deep-charcoal dark:text-gray-300 font-mono' : 'text-gray-700 dark:text-gray-300'}`}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons removed for cleaner clickable card interaction */}
      </div>
    </div>
  );
};

export default ProductCard;
