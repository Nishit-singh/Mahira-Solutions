import React, { useState } from 'react';

interface QueryModalProps {
  onClose: () => void;
}

const QueryModal: React.FC<QueryModalProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });

  const handleRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = '916386658443'; // Real Mahira Solutions Number
    const text = encodeURIComponent(`*New Query from Mahira Web*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Query:* ${formData.query}`);
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-emerald-dark/40 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-white rounded-none p-8 shadow-2xl overflow-y-auto max-h-[90vh] border-t-8 border-emerald">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-emerald hover:bg-emerald-light transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
        <div className="mb-8">
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald mb-1 block">Inquiry Channel</span>
          <h2 className="text-3xl font-black text-emerald-dark uppercase tracking-tighter leading-none">Quick Query</h2>
        </div>

        <form onSubmit={handleRedirect} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-text-muted">Full Name</label>
            <input 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full p-4 bg-off-white rounded-none outline-none focus:border-emerald border-2 border-transparent font-bold text-xs uppercase"
              placeholder="YOUR NAME"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-text-muted">Business Email</label>
            <input 
              type="email"
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full p-4 bg-off-white rounded-none outline-none focus:border-emerald border-2 border-transparent font-bold text-xs uppercase"
              placeholder="EMAIL ADDRESS"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase tracking-widest text-text-muted">Inquiry Details</label>
            <textarea 
              required
              value={formData.query}
              onChange={e => setFormData({...formData, query: e.target.value})}
              className="w-full p-4 bg-off-white rounded-none outline-none focus:border-emerald border-2 border-transparent font-bold text-xs min-h-[100px] uppercase"
              placeholder="DESCRIBE YOUR REQUIREMENT..."
            />
          </div>
          <button className="btn-primary w-full py-5 flex items-center justify-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Initialize WhatsApp Chat</span>
            <span className="material-symbols-outlined text-sm">chat_bubble</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QueryModal;
