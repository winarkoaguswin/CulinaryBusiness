import React from 'react';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ServiceCard } from './components/ServiceCard';
import { TeamMemberCard } from './components/TeamMemberCard';
import { FinancialTable } from './components/FinancialTable';
import { TestimonialCard } from './components/TestimonialCard';
import { Footer } from './components/Footer';

import { SERVICES, TEAM_MEMBERS, TESTIMONIALS, FINANCIAL_PROJECTION_DATA } from './constants';

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header />
      <main>
        <Hero />

        <Section id="services" title="Layanan Unggulan Kami" className="bg-white">
          <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Section>

        <Section id="financials" title="Transformasi Finansial Bisnis Anda">
           <div className="max-w-4xl mx-auto">
             <FinancialTable 
                title={FINANCIAL_PROJECTION_DATA.title}
                headers={FINANCIAL_PROJECTION_DATA.headers}
                data={FINANCIAL_PROJECTION_DATA.data}
             />
             <p className="mt-6 text-center text-gray-600 italic">
                *Angka di atas adalah contoh berdasarkan hasil rata-rata klien kami. Hasil aktual dapat bervariasi.
             </p>
           </div>
        </Section>
        
        <Section id="team" title="Tim Ahli Kami" className="bg-white">
          <div className="max-w-5xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <TeamMemberCard key={member.name} {...member} />
            ))}
          </div>
        </Section>
        
        <Section id="testimonials" title="Apa Kata Klien Kami">
          <div className="max-w-7xl mx-auto grid gap-8 lg:grid-cols-3">
             {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
             ))}
          </div>
        </Section>

        <section id="contact" className="bg-brand-secondary">
          <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Siap Mengembangkan Bisnis Kuliner Anda?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-amber-100">
              Jadwalkan sesi konsultasi gratis 30 menit dengan tim ahli kami untuk membahas potensi bisnis Anda.
            </p>
            <a
              href="mailto:contact@gastropreneur.com"
              className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-brand-secondary bg-white hover:bg-amber-50 sm:w-auto"
            >
              Jadwalkan Sesi Gratis
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

export default App;
