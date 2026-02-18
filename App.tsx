import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import EnquiryPage from './pages/EnquiryPage';
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
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
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
  const product = productId ? PRODUCTS.find(p => p.id === productId) : undefined;

  return <EnquiryPage initialProduct={product} />;
}

export default App;
