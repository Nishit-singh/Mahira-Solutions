import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  min_quantity: number;
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <div className="group bg-white border border-emerald-light rounded-none overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col h-full">
      {/* Top Image Section */}
      <div className="relative aspect-video overflow-hidden bg-off-white">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800';
          }}
        />
        <div className="absolute top-4 left-4 bg-text-dark text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 shadow-md">
          {product.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:p-6 flex flex-col flex-grow">
        <h3 className="text-sm md:text-xl font-black text-emerald-dark uppercase mb-2 md:mb-3 tracking-tighter leading-tight group-hover:text-emerald transition-colors min-h-[2.5rem] md:min-h-[3rem]">
          {product.name}
        </h3>
        
        <p className="text-[9px] md:text-[11px] text-text-muted font-bold leading-relaxed mb-4 md:mb-6 line-clamp-2 uppercase tracking-wide opacity-80">
          {product.description}
        </p>

        {/* Features Placeholder - Hidden on mobile to save space */}
        <div className="hidden md:block space-y-2 mb-6">
          <div className="flex items-center gap-2 text-[9px] font-bold text-emerald/70 uppercase">
            <span className="material-symbols-outlined text-xs">check_circle</span>
            High Definition Precision
          </div>
          <div className="flex items-center gap-2 text-[9px] font-bold text-emerald/70 uppercase">
            <span className="material-symbols-outlined text-xs">check_circle</span>
            Industrial Grade Materials
          </div>
        </div>

        {/* Info Box (Quantity & Price) */}
        <div className="bg-emerald-light/30 p-2 md:p-4 mb-4 md:mb-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 border-l-4 border-emerald">
          <div>
            <span className="text-[7px] md:text-[8px] font-black text-text-muted uppercase tracking-widest block mb-0.5">MIN QTY</span>
            <span className="text-[9px] md:text-xs font-black text-emerald">{product.min_quantity} UNITS</span>
          </div>
          <div className="md:text-right">
            <span className="text-[7px] md:text-[8px] font-black text-text-muted uppercase tracking-widest block mb-0.5">UNIT RATE</span>
            <span className="text-[9px] md:text-xs font-black text-emerald">₹{product.price}</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onSelect(product)}
          className="btn-primary mt-auto w-full flex items-center justify-center gap-2 md:gap-3 !py-3 md:!py-4"
        >
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Configure</span>
          <span className="material-symbols-outlined text-[10px] md:text-sm">arrow_outward</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
