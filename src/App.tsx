import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import CatalogPage from './pages/CatalogPage';
import AuthPage from './pages/AuthPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
