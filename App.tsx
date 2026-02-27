import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import EnquiryPage from './pages/EnquiryPage';
import ErrorBoundary from './components/ErrorBoundary';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { BusinessVertical, Product } from './types';
import { PRODUCTS } from './data';

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavigateProduct = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleNavigateEnquiry = (id?: string) => {
    if (id) {
      navigate(`/enquiry?productId=${id}`);
    } else {
      navigate('/enquiry');
    }
  };

  return (
    <Layout>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={
            <HomePage
              onNavigate={(view) => navigate(view === 'home' ? '/' : `/${view}`)}
              onNavigateProduct={handleNavigateProduct}
              onNavigateEnquiry={handleNavigateEnquiry}
            />
          } />
          <Route path="/printing" element={
            <CategoryPage
              vertical={BusinessVertical.PRINTING}
              onNavigateProduct={handleNavigateProduct}
              onNavigateEnquiry={handleNavigateEnquiry}
            />
          } />
          <Route path="/metal" element={
            <CategoryPage
              vertical={BusinessVertical.METAL}
              onNavigateProduct={handleNavigateProduct}
              onNavigateEnquiry={handleNavigateEnquiry}
            />
          } />
          <Route path="/product/:id" element={<ProductWrapper onNavigateEnquiry={handleNavigateEnquiry} onNavigateProduct={handleNavigateProduct} />} />
          <Route path="/enquiry" element={<EnquiryWrapper />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </ErrorBoundary>
    </Layout>
  );
};

// Wrapper directly inside App.tsx to handle useParams logic cleanly
const ProductWrapper: React.FC<{
  onNavigateEnquiry: (id: string) => void;
  onNavigateProduct: (id: string) => void;
}> = ({ onNavigateEnquiry, onNavigateProduct }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p && p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-deep-charcoal">
        <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-600 mb-4">search_off</span>
        <h2 className="text-2xl font-black text-deep-charcoal dark:text-white uppercase mb-2">Product Not Found</h2>
        <p className="text-gray-500 max-w-md mb-8">The industrial component or printing solution you are looking for does not exist or has been discontinued.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-white font-black py-3 px-8 rounded-full flex items-center gap-2 hover:brightness-110 transition-all text-xs uppercase tracking-widest"
        >
          <span className="material-symbols-outlined text-sm">home</span> Return Catalog
        </button>
      </div>
    );
  }

  return (
    <ProductPage
      product={product}
      onNavigateEnquiry={onNavigateEnquiry}
      onNavigateProduct={onNavigateProduct}
      onBack={() => navigate(product.vertical === BusinessVertical.METAL ? '/metal' : '/printing')}
    />
  );
};

const EnquiryWrapper: React.FC = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const product = productId ? PRODUCTS.find(p => p && p.id === productId) : undefined;

  return <EnquiryPage initialProduct={product} />;
}

export default App;
