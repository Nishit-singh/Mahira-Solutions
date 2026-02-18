
import React, { useState } from 'react';
import { Product } from '../types';

interface EnquiryPageProps {
  initialProduct?: Product;
}

const EnquiryPage: React.FC<EnquiryPageProps> = ({ initialProduct }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-32 px-6 text-center animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h2 className="text-3xl font-black text-deep-charcoal mb-4">Inquiry Received</h2>
        <p className="text-gray-500 leading-relaxed">
          Thank you for reaching out to Mahira Solutions. A senior technical representative from our {initialProduct?.vertical === 'METAL' ? 'Manufacturing' : 'Printing'} division will contact you within 24 business hours.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-10 bg-primary text-white font-bold py-3 px-8 rounded hover:brightness-110 transition-all"
        >
          Return to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in slide-in-from-bottom-4 duration-500">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-deep-charcoal mb-4 leading-tight">
          B2B Enquiry & Support
        </h1>
        <p className="text-[#4e6797] text-lg max-w-2xl">
          Partner with Mahira Solutions for high-precision manufacturing. Let's discuss your specific industrial requirements today.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
          <h3 className="text-2xl font-black text-deep-charcoal mb-8 border-b border-gray-50 pb-6 uppercase tracking-tight">Service Request Form</h3>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Company Name</label>
                <input required className="w-full h-12 px-4 rounded-lg bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="Mahira Enterprises Ltd" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                <input required className="w-full h-12 px-4 rounded-lg bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="John Smith" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Industry Vertical</label>
                <select className="w-full h-12 px-4 rounded-lg bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none">
                  <option>Industrial Printing</option>
                  <option>Metal Fabrication</option>
                  <option>Structural Engineering</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-gray-400">Monthly Volume (Units/Tons)</label>
                <input className="w-full h-12 px-4 rounded-lg bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="e.g. 5000 units" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Work Email Address</label>
              <input required type="email" className="w-full h-12 px-4 rounded-lg bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="john@company.com" />
            </div>

            {initialProduct && (
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">Inquiring About</p>
                  <p className="text-sm font-bold text-deep-charcoal">{initialProduct.name}</p>
                </div>
                <span className="material-symbols-outlined text-primary">shopping_bag</span>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-gray-400">Requirement Details</label>
              <textarea 
                required
                className="w-full p-4 rounded-lg bg-gray-50 border-gray-100 focus:bg-white focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none min-h-[160px] resize-none" 
                placeholder="Describe your technical specifications, material preferences, and project timelines..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full md:w-auto min-w-[240px] h-14 bg-primary text-white rounded font-black text-lg uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-primary/20"
            >
              Submit B2B Enquiry
            </button>
          </form>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <h4 className="text-lg font-black text-deep-charcoal mb-8 uppercase tracking-tight">Contact Channels</h4>
            <div className="space-y-8">
              {[
                { label: 'Technical Sales', value: '+91 98765 43210', icon: 'call' },
                { label: 'Email Requests', value: 'sales@mahirasolutions.com', icon: 'mail' },
                { label: 'Engineering Hub', value: 'Bengaluru, Industrial Area Ph II', icon: 'location_on' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                    <p className="text-sm font-bold text-deep-charcoal">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-xl shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-3xl">verified</span>
                <h4 className="text-lg font-black uppercase tracking-tight">Enterprise Standard</h4>
              </div>
              <p className="text-sm text-blue-100 leading-relaxed mb-6 font-medium">
                We are a government-registered industrial entity specializing in large-scale metal fabrication and high-security printing. Serving 200+ global clients.
              </p>
              <a href="#" className="inline-block border-b border-white text-xs font-bold uppercase tracking-widest pb-1 hover:text-blue-100 transition-colors">
                Compliance Standards
              </a>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[12rem] leading-none">corporate_fare</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default EnquiryPage;
