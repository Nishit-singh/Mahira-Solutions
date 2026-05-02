import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  min_quantity: number;
}

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onCheckout: (orderDetails: any) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onCheckout }) => {
  const [quantity, setQuantity] = useState(product.min_quantity);
  const [instructions, setInstructions] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const totalPrice = quantity * product.price;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckout({
      productId: product.id,
      productName: product.name,
      quantity,
      totalPrice,
      instructions,
      file
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-emerald-dark/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-white rounded-none shadow-2xl overflow-y-auto max-h-[90vh]">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8 border-b-2 border-emerald pb-4">
            <div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-emerald mb-1 block">Project Specifications</span>
              <h2 className="text-3xl font-black text-emerald-dark uppercase tracking-tighter leading-none">{product.name}</h2>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-emerald hover:bg-emerald-light transition-colors">
              <span className="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-8 items-end">
              <div className="space-y-3">
                <label className="text-[9px] font-black uppercase tracking-widest text-text-muted">Quantity</label>
                <div className="flex items-center">
                  <button type="button" onClick={() => setQuantity(Math.max(product.min_quantity, quantity - 1))} className="w-10 h-10 border border-emerald text-emerald font-black">-</button>
                  <input type="number" value={quantity} readOnly className="w-full h-10 text-center text-lg font-black text-emerald outline-none border-y border-emerald" />
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 border border-emerald text-emerald font-black">+</button>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-black text-text-muted uppercase tracking-widest block mb-1">Total Investment</span>
                <span className="text-3xl font-black text-emerald leading-none tracking-tighter">₹{totalPrice}</span>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-widest text-text-muted">Custom Instructions</label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="PLACEMENT, COLORS, BRANDING GUIDELINES..."
                className="w-full p-4 bg-off-white border border-emerald-light rounded-none outline-none focus:border-emerald font-bold text-[11px] min-h-[80px] uppercase"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[9px] font-black uppercase tracking-widest text-text-muted">Source Blueprint / Logo</label>
              <div className="relative group">
                <input
                  type="file"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="w-full p-6 border border-dashed border-emerald rounded-none flex flex-col items-center justify-center group-hover:bg-emerald/5 transition-colors">
                  <span className="material-symbols-outlined text-2xl text-emerald mb-2">upload_file</span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald">{file ? file.name : 'ATTACH DESIGN FILE'}</span>
                </div>
              </div>
            </div>

            <button type="submit" className="btn-primary w-full py-5 text-[10px] shadow-emerald/20">
              Confirm & Proceed to Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
