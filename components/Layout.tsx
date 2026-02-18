import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const isMetal = path.includes('metal');
  const isPrinting = path.includes('printing');
  const isHome = path === '/';
  const isAbout = path === '/about';
  const isContact = path === '/contact';

  // Theme context derived from active view
  const accentColor = isMetal ? 'text-industrial-orange' : 'text-primary';
  const accentBg = isMetal ? 'bg-industrial-orange' : 'bg-primary';

  return (
    <div className="min-h-screen flex flex-col font-sans vertical-transition">
      {/* Header */}
      <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-colors duration-500 ${isMetal ? 'border-industrial-orange/20 shadow-[0_4px_20px_-5px_rgba(242,108,13,0.1)]' : 'border-gray-100 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link
              to="/"
              className="flex items-center gap-2.5 group"
            >
              <div className={`w-10 h-10 ${accentBg} rounded-lg flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-black/5`}>
                <span className="material-symbols-outlined text-white text-2xl">
                  {isMetal ? 'engineering' : 'precision_manufacturing'}
                </span>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-xl font-black tracking-tighter text-deep-charcoal">MAHIRA</span>
                <span className={`text-[10px] uppercase tracking-[0.4em] font-extrabold ${accentColor}`}>SOLUTIONS</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`text-[11px] font-black uppercase tracking-widest hover:text-deep-charcoal transition-colors ${isHome ? 'text-deep-charcoal' : 'text-gray-400'}`}
              >
                Home
              </Link>
              <Link
                to="/printing"
                className={`text-[11px] font-black uppercase tracking-widest hover:text-primary transition-colors ${isPrinting ? 'text-primary' : 'text-gray-400'}`}
              >
                Printing
              </Link>
              <Link
                to="/metal"
                className={`text-[11px] font-black uppercase tracking-widest hover:text-industrial-orange transition-colors ${isMetal ? 'text-industrial-orange' : 'text-gray-400'}`}
              >
                Metal Parts
              </Link>
              <div className="h-4 w-px bg-gray-200"></div>
              <Link
                to="/about"
                className={`text-[11px] font-black uppercase tracking-widest hover:text-deep-charcoal transition-colors ${isAbout ? 'text-deep-charcoal' : 'text-gray-400'}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-[11px] font-black uppercase tracking-widest hover:text-deep-charcoal transition-colors ${isContact ? 'text-deep-charcoal' : 'text-gray-400'}`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-6">

            <Link
              to="/enquiry"
              className={`hidden sm:block ${accentBg} text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-full hover:scale-105 transition-all shadow-xl shadow-black/5`}
            >
              Request Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <span className="material-symbols-outlined text-deep-charcoal text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-20" /> {/* Spacer for header */}
        <div className="p-8 flex flex-col gap-8">
          <nav className="flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-black uppercase tracking-tighter text-left ${isHome ? 'text-deep-charcoal' : 'text-gray-300'}`}
            >
              Home
            </Link>
            <Link
              to="/printing"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-black uppercase tracking-tighter text-left ${isPrinting ? 'text-primary' : 'text-gray-300'}`}
            >
              Printing
            </Link>
            <Link
              to="/metal"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-black uppercase tracking-tighter text-left ${isMetal ? 'text-industrial-orange' : 'text-gray-300'}`}
            >
              Metal Parts
            </Link>
            <div className="h-px w-20 bg-gray-100 my-2"></div>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold uppercase tracking-widest text-left ${isAbout ? 'text-deep-charcoal' : 'text-gray-400'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold uppercase tracking-widest text-left ${isContact ? 'text-deep-charcoal' : 'text-gray-400'}`}
            >
              Contact
            </Link>
          </nav>

          <Link
            to="/enquiry"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`w-full ${accentBg} text-white text-xs font-black uppercase tracking-[0.2em] py-5 rounded-xl shadow-xl shadow-black/5 mt-4 text-center`}
          >
            Request Quote
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className={`${isMetal ? 'bg-[#0a0c0e]' : 'bg-deep-charcoal'} text-white pt-24 pb-12 transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <span className={`material-symbols-outlined ${accentColor} text-3xl`}>
                  {isMetal ? 'engineering' : 'precision_manufacturing'}
                </span>
                <h2 className="text-2xl font-black tracking-tighter">MAHIRA</h2>
              </div>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-8 font-medium">
                Enterprise-grade manufacturing solutions for high-precision components and durable industrial identification since 1998.
              </p>
            </div>

            <div>
              <h4 className={`font-black text-[10px] uppercase tracking-[0.3em] ${isPrinting ? 'text-primary' : 'text-gray-500'} mb-8`}>Printing Systems</h4>
              <ul className="space-y-4 text-[13px] text-gray-400 font-bold uppercase tracking-widest">
                <li><Link to="/printing" className="hover:text-white transition-colors">Identity Media</Link></li>
                <li><Link to="/printing" className="hover:text-white transition-colors">RFID Tagging</Link></li>
                <li><Link to="/printing" className="hover:text-white transition-colors">Safety Print</Link></li>
              </ul>
            </div>

            <div>
              <h4 className={`font-black text-[10px] uppercase tracking-[0.3em] ${isMetal ? 'text-industrial-orange' : 'text-gray-500'} mb-8`}>Metal Division</h4>
              <ul className="space-y-4 text-[13px] text-gray-400 font-bold uppercase tracking-widest">
                <li><Link to="/metal" className="hover:text-white transition-colors">CNC Milling</Link></li>
                <li><Link to="/metal" className="hover:text-white transition-colors">Laser Fab</Link></li>
                <li><Link to="/metal" className="hover:text-white transition-colors">Die Cast Hub</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">Quick Links</h4>
              <ul className="space-y-4 text-[13px] text-gray-400 font-bold uppercase tracking-widest">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/enquiry" className="hover:text-white transition-colors">Enquiry Form</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
            <p>© 2024 Mahira Solutions Enterprises. ISO Verified.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Compliance</a>
              <a href="#" className="hover:text-white transition-colors">Logistics</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Layout;
