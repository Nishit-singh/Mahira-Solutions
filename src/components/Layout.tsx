import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-emerald selection:text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-emerald-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-6 cursor-pointer">
            <div className="w-12 h-12 bg-emerald flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">print</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-emerald tracking-tighter leading-none">MAHIRA</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">Solutions Enterprises</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <Link to="/#home" className="text-xs font-black uppercase tracking-widest text-emerald/60 hover:text-emerald transition-colors">Home</Link>
            <Link to="/#about" className="text-xs font-black uppercase tracking-widest text-emerald/60 hover:text-emerald transition-colors">About Us</Link>
            <Link to="/catalog" className="text-xs font-black uppercase tracking-widest text-emerald/60 hover:text-emerald transition-colors">Catalog</Link>
            <Link to="/#contact" className="text-xs font-black uppercase tracking-widest text-emerald/60 hover:text-emerald transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-6">
            {localStorage.getItem('adminToken') ? (
              <button onClick={() => navigate('/admin')} className="btn-primary py-3 px-8 text-[10px]">
                DASHBOARD
              </button>
            ) : (
              <button onClick={() => navigate('/login')} className="btn-outline py-3 px-8 text-[10px]">
                LOGIN
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="flex-grow pt-[80px]">
        {children}
      </main>

      <footer className="bg-emerald-dark text-white py-20">
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
