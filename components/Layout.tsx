import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains('dark');
  });
  const location = useLocation();
  const path = location.pathname;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

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
      <header className={`sticky top-0 z-50 bg-deep-charcoal/95 backdrop-blur-sm border-b transition-colors duration-500 ${isMetal ? 'border-industrial-orange/20 shadow-[0_4px_20px_-5px_rgba(242,108,13,0.1)]' : 'border-white/10 shadow-sm'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2">
          <div className="flex items-center gap-4 sm:gap-10">
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-2.5 group shrink-0"
            >
              <div className={`w-10 h-10 ${accentBg} rounded-lg flex items-center justify-center group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-black/5`}>
                <span className="material-symbols-outlined text-white text-2xl">
                  {isMetal ? 'engineering' : 'precision_manufacturing'}
                </span>
              </div>
              <div className="flex flex-col items-start leading-none hidden sm:flex">
                <span className="text-xl font-black tracking-tighter text-white transition-colors">MAHIRA</span>
                <span className={`text-[10px] uppercase tracking-[0.4em] font-extrabold ${accentColor}`}>SOLUTIONS</span>
              </div>
              <div className="flex flex-col items-start leading-none sm:hidden">
                <span className="text-lg font-black tracking-tighter text-white transition-colors">MAHIRA</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`text-sm font-bold uppercase tracking-widest hover:text-white transition-colors ${isHome ? 'text-white' : 'text-white/70'}`}
              >
                Home
              </Link>
              <Link
                to="/printing"
                className={`text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors ${isPrinting ? 'text-primary' : 'text-white/70'}`}
              >
                Printing
              </Link>
              <Link
                to="/metal"
                className={`text-sm font-bold uppercase tracking-widest hover:text-industrial-orange transition-colors ${isMetal ? 'text-industrial-orange' : 'text-white/70'}`}
              >
                Metal Parts
              </Link>
              <div className="h-4 w-px bg-white/20"></div>
              <Link
                to="/about"
                className={`text-sm font-bold uppercase tracking-widest hover:text-white transition-colors ${isAbout ? 'text-white' : 'text-white/70'}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`text-sm font-bold uppercase tracking-widest hover:text-white transition-colors ${isContact ? 'text-white' : 'text-white/70'}`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              title="Toggle Dark Mode"
            >
              <span className="material-symbols-outlined text-white text-xl sm:text-2xl transition-colors">
                {isDarkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <Link
              to="/enquiry"
              className={`block ${accentBg} text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-full hover:scale-105 transition-all shadow-xl shadow-black/5`}
            >
              Request Quote
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-white text-xl sm:text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-white dark:bg-deep-charcoal transform transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-20" /> {/* Spacer for header */}
        <div className="p-8 flex flex-col gap-8">
          <nav className="flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-black uppercase tracking-tighter text-left ${isHome ? 'text-deep-charcoal dark:text-white' : 'text-gray-300 dark:text-gray-600'}`}
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
            <div className="h-px w-20 bg-gray-100 dark:bg-white/10 my-2"></div>
            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold uppercase tracking-widest text-left ${isAbout ? 'text-deep-charcoal dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-bold uppercase tracking-widest text-left ${isContact ? 'text-deep-charcoal dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}
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
      <footer className={`${isMetal ? 'bg-[#0a0c0e]' : 'bg-deep-charcoal'} text-white pt-16 pb-12 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
