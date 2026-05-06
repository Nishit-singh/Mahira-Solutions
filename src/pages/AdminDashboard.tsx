import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Order {
  id: number;
  name: string;
  email: string;
  phone: string;
  product_name: string;
  quantity: number;
  amount: number;
  status: string;
  timestamp: string;
  file_url: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  min_quantity: number;
}

const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5000' : '');

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'products'>('orders');
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showProductModal, setShowProductModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productImage, setProductImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const [productForm, setProductForm] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    min_quantity: 1
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    const token = localStorage.getItem('adminToken');
    if (!token) { navigate('/login'); return; }

    setIsLoading(true);
    const endpoint = activeTab === 'orders' ? '/api/admin/orders' : '/api/products';
    
    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.status === 401 || res.status === 403) {
        localStorage.removeItem('adminToken');
        navigate('/login');
        return;
      }
      const data = await res.json();
      if (activeTab === 'orders') setOrders(Array.isArray(data) ? data : []);
      else setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('FETCH ERROR:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken');
    const method = editingProduct ? 'PUT' : 'POST';
    const endpoint = editingProduct ? `/api/admin/products/${editingProduct.id}` : '/api/admin/products';

    const formData = new FormData();
    formData.append('name', productForm.name);
    formData.append('description', productForm.description);
    formData.append('price', String(productForm.price));
    formData.append('category', productForm.category);
    formData.append('min_quantity', String(productForm.min_quantity));
    
    if (productImage) {
      formData.append('productImage', productImage);
    } else if (editingProduct) {
      formData.append('current_image_url', editingProduct.image_url);
    }

    try {
      const res = await fetch(`${API_URL}${endpoint}`, {
        method,
        headers: { 
          'Authorization': `Bearer ${token}` 
        },
        body: formData
      });
      if (res.ok) {
        setShowProductModal(false);
        setEditingProduct(null);
        setProductImage(null);
        fetchData();
      }
    } catch (err) {
      alert('Action failed');
    }
  };

  const confirmDelete = (id: number) => {
    setProductToDelete(id);
    setShowDeleteConfirm(true);
  };

  const executeDelete = async () => {
    if (!productToDelete) return;
    const token = localStorage.getItem('adminToken');
    try {
      await fetch(`${API_URL}/api/admin/products/${productToDelete}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setShowDeleteConfirm(false);
      setProductToDelete(null);
      fetchData();
    } catch (err) {
      alert('Delete failed');
    }
  };

  const openEdit = (p: Product) => {
    setEditingProduct(p);
    setProductForm({
      name: p.name,
      description: p.description,
      price: p.price,
      category: p.category,
      min_quantity: p.min_quantity
    });
    setProductImage(null);
    setShowProductModal(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/login');
  };

  if (isLoading) return <div className="p-20 font-black uppercase text-emerald">Syncing Logistics...</div>;

  return (
    <div className="bg-off-white min-h-screen p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 border-b-8 border-emerald pb-8">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald mb-2 block">Management Hub</span>
            <h1 className="text-5xl font-black text-emerald-dark uppercase tracking-tighter">Business Portal</h1>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setActiveTab('orders')}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'orders' ? 'bg-emerald text-white shadow-lg' : 'bg-white text-emerald-dark border-2 border-emerald-light'}`}
            >
              Orders
            </button>
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'products' ? 'bg-emerald text-white shadow-lg' : 'bg-white text-emerald-dark border-2 border-emerald-light'}`}
            >
              Inventory
            </button>
            <button onClick={handleLogout} className="btn-outline border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8">Log Out</button>
          </div>
        </div>

        {/* ORDERS TAB */}
        {activeTab === 'orders' && (
          <div className="shadow-2xl">
            {/* Mobile Alert */}
            <div className="block md:hidden bg-emerald/5 border-2 border-emerald p-12 text-center rounded-2xl">
              <span className="material-symbols-outlined text-5xl text-emerald mb-6">desktop_windows</span>
              <h3 className="text-xl font-black text-emerald-dark uppercase tracking-tighter mb-4">Desktop Access Required</h3>
              <p className="text-[10px] font-bold text-text-muted uppercase leading-relaxed tracking-widest">
                To view and manage detailed order logistics, please access the dashboard from a laptop or desktop computer.
              </p>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full bg-white border-collapse">
              <thead>
                <tr className="bg-emerald text-white text-[10px] font-black uppercase tracking-widest text-left">
                  <th className="p-6">Client</th>
                  <th className="p-6">Project</th>
                  <th className="p-6">Investment</th>
                  <th className="p-6">Blueprint</th>
                </tr>
              </thead>
              <tbody className="text-xs font-bold text-text-muted">
                {orders.map(order => (
                  <tr key={order.id} className="border-b border-emerald-light hover:bg-emerald-light/5 transition-colors">
                    <td className="p-6">
                      <div className="flex flex-col uppercase font-black text-emerald-dark">
                        {order.name}
                        <span className="text-[9px] opacity-60 tracking-wider font-bold">{order.email} | {order.phone}</span>
                      </div>
                    </td>
                    <td className="p-6 uppercase">{order.product_name} <span className="opacity-40">x{order.quantity}</span></td>
                    <td className="p-6 font-black text-emerald">₹{order.amount}</td>
                    <td className="p-6">
                      {order.file_url ? <a href={`${API_URL}${order.file_url}`} target="_blank" rel="noreferrer" className="text-emerald border-b border-emerald uppercase text-[10px]">Source File</a> : 'No Design'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        )}

        {/* PRODUCTS TAB */}
        {activeTab === 'products' && (
          <div className="space-y-8">
            <div className="flex justify-end">
              <button 
                onClick={() => { setEditingProduct(null); setProductForm({ name: '', description: '', price: 0, category: '', min_quantity: 1 }); setProductImage(null); setShowProductModal(true); }}
                className="btn-primary py-4 px-12"
              >
                Add New Solution
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {products.map(product => (
                <div key={product.id} className="bg-white p-3 md:p-6 shadow-xl border-t-4 border-emerald group">
                  <div className="aspect-square bg-off-white mb-3 md:mb-4 overflow-hidden border border-emerald-light">
                    {product.image_url ? (
                      <img src={`${API_URL}${product.image_url}`} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-emerald/20">
                        <span className="material-symbols-outlined text-2xl md:text-4xl">image</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm md:text-xl font-black text-emerald-dark uppercase mb-1 md:mb-2 tracking-tighter line-clamp-1">{product.name}</h3>
                  <p className="text-[8px] md:text-[10px] font-bold text-text-muted mb-3 md:mb-4 uppercase line-clamp-1">{product.description}</p>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-3 md:pt-4 border-t border-emerald-light gap-2">
                    <span className="text-[10px] md:text-base text-emerald font-black">₹{product.price}</span>
                    <div className="flex gap-1 md:gap-2 w-full md:w-auto">
                      <button onClick={() => openEdit(product)} className="flex-1 md:flex-none text-[8px] md:text-[9px] font-black uppercase tracking-widest text-emerald hover:bg-emerald hover:text-white p-2 border border-emerald transition-all">Edit</button>
                      <button onClick={() => confirmDelete(product.id)} className="flex-1 md:flex-none text-[8px] md:text-[9px] font-black uppercase tracking-widest text-red-600 hover:bg-red-600 hover:text-white p-2 border border-red-600 transition-all">Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODUCT MODAL */}
        {showProductModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-emerald-dark/60 backdrop-blur-sm" onClick={() => setShowProductModal(false)}></div>
            <div className="relative w-full max-w-lg bg-white p-10 shadow-2xl overflow-y-auto max-h-[90vh] border-t-8 border-emerald">
              <button 
                onClick={() => setShowProductModal(false)}
                className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-emerald-dark hover:bg-emerald-light transition-colors"
              >
                <span className="material-symbols-outlined text-2xl">close</span>
              </button>

              <h2 className="text-3xl font-black text-emerald-dark uppercase tracking-tighter mb-8 border-b-2 border-emerald pb-4">
                {editingProduct ? 'Edit Solution' : 'Add New Solution'}
              </h2>
              <form onSubmit={handleProductSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Product Name</label>
                  <input required value={productForm.name} onChange={e => setProductForm({...productForm, name: e.target.value})} className="w-full p-4 bg-off-white border-2 border-transparent focus:border-emerald outline-none font-bold text-xs uppercase" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Description</label>
                  <textarea required value={productForm.description} onChange={e => setProductForm({...productForm, description: e.target.value})} className="w-full p-4 bg-off-white border-2 border-transparent focus:border-emerald outline-none font-bold text-xs uppercase min-h-[80px]" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Unit Rate (₹)</label>
                    <input type="number" required value={productForm.price} onChange={e => setProductForm({...productForm, price: Number(e.target.value)})} className="w-full p-4 bg-off-white border-2 border-transparent focus:border-emerald outline-none font-bold text-xs uppercase" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Min Qty</label>
                    <input type="number" required value={productForm.min_quantity} onChange={e => setProductForm({...productForm, min_quantity: Number(e.target.value)})} className="w-full p-4 bg-off-white border-2 border-transparent focus:border-emerald outline-none font-bold text-xs uppercase" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Product Showcase Image</label>
                  <div className="relative group">
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={(e) => setProductImage(e.target.files?.[0] || null)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />
                    <div className="w-full p-6 border-2 border-dashed border-emerald rounded-none flex flex-col items-center justify-center group-hover:bg-emerald/5 transition-colors">
                      <span className="material-symbols-outlined text-2xl text-emerald mb-2">add_photo_alternate</span>
                      <span className="text-[9px] font-black uppercase tracking-widest text-emerald">
                        {productImage ? productImage.name : (editingProduct ? 'REPLACE CURRENT IMAGE' : 'UPLOAD PRODUCT IMAGE')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-text-muted">Industrial Category</label>
                  <input required value={productForm.category} onChange={e => setProductForm({...productForm, category: e.target.value})} className="w-full p-4 bg-off-white border-2 border-transparent focus:border-emerald outline-none font-bold text-xs uppercase" placeholder="E.G. CORPORATE, APPAREL" />
                </div>
                <button type="submit" className="btn-primary w-full py-5 text-[10px]">
                  {editingProduct ? 'Save Modifications' : 'Initialize Solution'}
                </button>
              </form>
            </div>
          </div>
        )}
        {/* DELETE CONFIRMATION MODAL */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
            <div className="absolute inset-0 bg-emerald-dark/80 backdrop-blur-md" onClick={() => setShowDeleteConfirm(false)}></div>
            <div className="relative w-full max-w-sm bg-white p-10 shadow-2xl border-t-8 border-red-600 animate-slide-down">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-4xl text-red-600">delete_forever</span>
                </div>
                <h2 className="text-2xl font-black text-emerald-dark uppercase tracking-tighter mb-4">Confirm Deletion</h2>
                <p className="text-[10px] font-bold text-text-muted uppercase leading-relaxed tracking-widest mb-8">
                  This action is irreversible. The selected industrial solution will be permanently removed from the active inventory.
                </p>
                <div className="flex flex-col gap-3">
                  <button 
                    onClick={executeDelete}
                    className="w-full py-4 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all"
                  >
                    Permanently Delete
                  </button>
                  <button 
                    onClick={() => setShowDeleteConfirm(false)}
                    className="w-full py-4 bg-white text-emerald-dark border-2 border-emerald-light text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-light/10 transition-all"
                  >
                    Cancel Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
