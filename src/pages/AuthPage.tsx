import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AuthPage: React.FC = () => {
  const [formData, setFormData] = useState({ 
    password: '',
    identifier: '' // email or phone
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: formData.identifier, password: formData.password })
      });
      const data = await res.json();
      
      if (data.success) {
        localStorage.setItem('adminToken', data.token);
        navigate('/admin');
      } else {
        setError(data.error || 'Invalid Admin Credentials');
      }
    } catch (err) {
      setError('Connection to Logistics Server Failed');
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-off-white py-12 px-6">
      <div className="w-full max-w-md p-10 shadow-2xl transition-all duration-500 relative border-t-8 bg-emerald-dark border-mint">
        <button 
          onClick={() => navigate('/')} 
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="mb-10 text-center">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-2 block text-mint">Authorized Personnel Only</span>
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none text-white">
            MANAGEMENT
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mint/60">Admin Identifier (Email/Phone)</label>
            <input 
              required
              value={formData.identifier}
              onChange={e => setFormData({...formData, identifier: e.target.value})}
              className="w-full p-5 bg-white border-2 border-transparent focus:border-mint outline-none font-bold text-sm rounded-none text-emerald-dark"
              placeholder="YOUR CREDENTIALS"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mint/60">Security Clearance Key</label>
            <input 
              type="password"
              required
              value={formData.password}
              onChange={e => setFormData({...formData, password: e.target.value})}
              className="w-full p-5 bg-white rounded-none outline-none font-bold text-sm text-emerald-dark border-2 border-transparent focus:border-mint"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-600/20 border-l-4 border-red-600">
              <p className="text-[10px] font-black uppercase tracking-widest text-white">{error}</p>
            </div>
          )}

          <button className="btn-primary w-full py-6 bg-white text-emerald-dark hover:bg-mint shadow-2xl">
            LOG IN TO DASHBOARD
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-[9px] font-black uppercase tracking-widest text-mint/40">
            Internal Logistics Control System<br />
            Mahira Solutions Enterprises © 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
