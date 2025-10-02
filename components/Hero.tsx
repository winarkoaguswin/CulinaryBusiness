
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-dark">
      <div className="absolute inset-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2&random=1" 
          alt="Culinary business background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          <span className="block">Membangun Imperium Kuliner,</span>
          <span className="block text-brand-primary mt-2">Satu Cabang Sekaligus.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
          Partner akselerasi Anda dalam ekspansi dan transformasi bisnis kuliner di Indonesia. Dari standarisasi SOP hingga strategi branding, kami siapkan bisnis Anda untuk 'Naik Kelas'.
        </p>
        <div className="mt-10">
          <a
            href="#services"
            className="bg-brand-primary text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-amber-600 transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 transform hover:-translate-y-1 hover:scale-105"
          >
            Lihat Layanan Kami
          </a>
        </div>
      </div>
    </section>
  );
};