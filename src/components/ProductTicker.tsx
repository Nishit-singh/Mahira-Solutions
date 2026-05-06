import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  category: string;
}

interface ProductTickerProps {
  products: Product[];
}

const ProductTicker: React.FC<ProductTickerProps> = ({ products }) => {
  const navigate = useNavigate();

  if (products.length === 0) return null;

  // Duplicate the products to ensure a seamless infinite scroll
  // We need enough items to fill the width twice for the animation to work correctly
  const displayProducts = [...products, ...products, ...products, ...products];

  return (
    <div className="bg-emerald-dark py-4 overflow-hidden border-y border-white/10 select-none">
      <div className="flex animate-ticker whitespace-nowrap">
        {displayProducts.map((product, index) => (
          <div 
            key={`${product.id}-${index}`}
            onClick={() => navigate(`/catalog?category=${product.category}`)}
            className="flex items-center mx-12 cursor-pointer group"
          >
            <span className="text-emerald text-[10px] font-black uppercase tracking-[0.4em] mr-4 opacity-50 group-hover:opacity-100 transition-opacity">●</span>
            <span className="text-white text-lg md:text-xl font-black uppercase tracking-tighter group-hover:text-emerald transition-colors duration-300">
              {product.name}
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          display: flex;
          width: fit-content;
          animation: ticker 60s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ProductTicker;
