import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald selection:text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-[#09090b]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-6 cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald flex items-center justify-center text-white rounded-lg shadow-lg shadow-emerald/20">
              <span className="material-symbols-outlined text-xl md:text-2xl">print</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black text-white tracking-tighter leading-none">
                MAHIRA <span className="text-emerald">SOLUTIONS</span>
              </span>
              <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Enterprises</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            <Link to="/#home" className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">Home</Link>
            <Link to="/#about" className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">About Us</Link>
            <Link to="/catalog" className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">Catalog</Link>
            <Link to="/#contact" className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:block">
              {localStorage.getItem('adminToken') ? (
                <button onClick={() => navigate('/admin')} className="btn-primary py-3 px-8 text-[10px]">
                  DASHBOARD
                </button>
              ) : (
                <button onClick={() => navigate('/login')} className="btn-outline border-white/20 text-white hover:bg-white/10 py-3 px-8 text-[10px]">
                  LOGIN
                </button>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-white/10 rounded-lg"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#09090b] border-b border-white/10 animate-slide-down">
            <nav className="flex flex-col p-6 gap-4">
              <Link to="/#home" onClick={() => setIsMenuOpen(false)} className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white p-4 bg-white/5">Home</Link>
              <Link to="/#about" onClick={() => setIsMenuOpen(false)} className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white p-4 bg-white/5">About Us</Link>
              <Link to="/catalog" onClick={() => setIsMenuOpen(false)} className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white p-4 bg-white/5">Catalog</Link>
              <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="text-xs font-black uppercase tracking-widest text-white/60 hover:text-white p-4 bg-white/5">Contact</Link>
              <div className="pt-4 border-t border-white/10 flex gap-4">
                {localStorage.getItem('adminToken') ? (
                  <button onClick={() => { navigate('/admin'); setIsMenuOpen(false); }} className="flex-1 btn-primary py-4 text-[10px]">
                    DASHBOARD
                  </button>
                ) : (
                  <button onClick={() => { navigate('/login'); setIsMenuOpen(false); }} className="flex-1 btn-outline border-white/20 text-white py-4 text-[10px]">
                    LOGIN
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow pt-[80px]">
        {children}
      </main>

      <footer className="bg-[#09090b] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 mb-16">
            <div>
              <span className="text-2xl font-black tracking-tighter leading-none block mb-2 text-white">MAHIRA</span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-mint/60 mb-8 block">Solutions Enterprises</span>
              <p className="text-mint/40 max-w-md font-medium text-lg leading-relaxed italic">
                "We deliver high-end branding and industrial printing solutions with uncompromising precision."
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-white/40">Services</h4>
                <ul className="space-y-4 text-sm font-bold text-mint/60">
                  <li>Corporate Branding</li>
                  <li>Premium Apparel Printing</li>
                  <li>Industrial ID Solutions</li>
                  <li>Promotional Merchandise</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest mb-6 text-white/40">Support</h4>
                <address className="not-italic text-sm font-bold text-mint/60 space-y-4">
                  <p>L 1/056, LONAPUR CHINHAT,<br />LUCKNOW, UP - 226028</p>
                  <p>ms1989singh@gmail.com</p>
                </address>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
              © 2026 Mahira Solutions Enterprises. Industrial Printing Hub.
            </p>
            <Link to="/login" className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors">Admin Access</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
