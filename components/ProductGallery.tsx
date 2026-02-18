
import React, { useState } from 'react';

interface ProductGalleryProps {
  mainImage: string;
  galleryImages?: string[];
  isMetal?: boolean;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ mainImage, galleryImages = [], isMetal }) => {
  const [activeImage, setActiveImage] = useState(mainImage);
  const allImages = [mainImage, ...galleryImages];

  return (
    <div className="space-y-6">
      <div className={`aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-2xl transition-all duration-700 ${isMetal ? 'border-4 border-white' : 'border border-gray-100'}`}>
        <img 
          src={activeImage} 
          alt="Product Focus" 
          className={`w-full h-full object-cover transition-all duration-500 ${isMetal ? 'grayscale hover:grayscale-0' : ''}`} 
        />
      </div>
      <div className="grid grid-cols-4 gap-4 md:gap-6">
        {allImages.slice(0, 4).map((img, i) => (
          <button 
            key={i} 
            onClick={() => setActiveImage(img)}
            className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all hover:scale-105 ${activeImage === img ? (isMetal ? 'border-industrial-orange' : 'border-primary') : 'border-transparent opacity-60 hover:opacity-100'}`}
          >
            <img src={img} alt={`Detail ${i}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
