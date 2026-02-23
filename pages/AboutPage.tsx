
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Institutional Hero */}
      <section className="bg-deep-charcoal py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-blueprint"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] mb-6 block">Our Heritage</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
            Engineering the Future<br />of <span className="text-primary">Industrial Identity.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Founded in 1998, Mahira Solutions has evolved from a small precision workshop into a global leader in high-end manufacturing and industrial printing systems.
          </p>
        </div>
      </section>

      {/* Pillars of Excellence */}
      <section className="py-24 bg-white dark:bg-deep-charcoal transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-50 dark:bg-primary/10 text-primary rounded-2xl flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-deep-charcoal dark:text-white transition-colors">Precision First</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium transition-colors">We maintain a strict tolerance standard of ±0.005mm across our CNC and fabrication lines, ensuring aerospace-grade reliability.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-orange-50 dark:bg-industrial-orange/10 text-industrial-orange rounded-2xl flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-3xl">security</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-deep-charcoal dark:text-white transition-colors">Security & Identity</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium transition-colors">Our printing division specializes in high-security identity media, deploying millions of encrypted smart cards globally.</p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-green-50 dark:bg-green-500/10 text-green-600 rounded-2xl flex items-center justify-center transition-colors">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter text-deep-charcoal dark:text-white transition-colors">Sustainability</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium transition-colors">All our facilities are ISO 14001 certified, utilizing closed-loop water systems and 100% recyclable PVC waste management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Hub Visual */}
      <section className="relative h-[600px] bg-gray-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
          alt="Factory Floor"
          className="w-full h-full object-cover grayscale opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-charcoal via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-white">
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">A 25,000 SQ. FT.<br />Innovation Center</h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
                Our state-of-the-art facility in Bengaluru houses 5-axis CNC machines, clean-room printing labs, and an automated logistics hub.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-3xl font-black text-primary">50+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">CNC Machines</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-primary">24/7</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Production Cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
