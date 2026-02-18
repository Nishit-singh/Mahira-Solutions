
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <section className="bg-white py-24 border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Get in Touch</span>
              <h1 className="text-5xl font-black text-deep-charcoal mb-8 tracking-tighter uppercase">Connect with our<br/>Global HQ.</h1>
              <p className="text-lg text-gray-500 mb-12 leading-relaxed font-medium">
                For administrative inquiries, vendor partnerships, or career opportunities, please use our general contact channels.
              </p>
              
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-2">Main Office</h4>
                    <p className="text-deep-charcoal font-bold">Industrial Estate Phase IV, Peenya<br/>Bengaluru, Karnataka 560058</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-2">Email Channels</h4>
                    <p className="text-deep-charcoal font-bold">Corporate: solutions@mahira.com<br/>Support: support@mahira.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-2">Phone Lines</h4>
                    <p className="text-deep-charcoal font-bold">HQ: +91 (80) 4455 6677<br/>Technical: +91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-10 lg:p-16 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-black mb-8 uppercase tracking-tighter">Global Contact Form</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" placeholder="Full Name" />
                  <input className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" placeholder="Company" />
                </div>
                <input className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" placeholder="Work Email" />
                <textarea className="w-full bg-white border border-gray-200 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold min-h-[150px]" placeholder="How can we help your business?"></textarea>
                <button className="w-full bg-primary text-white font-black py-5 rounded-2xl uppercase tracking-widest text-xs hover:brightness-110 shadow-xl shadow-primary/20 transition-all">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
