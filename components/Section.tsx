
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight">
          {title}
        </h2>
        <div className="mt-4 h-1 w-24 bg-brand-primary mx-auto rounded-full"></div>
      </div>
      <div>{children}</div>
    </section>
  );
};
