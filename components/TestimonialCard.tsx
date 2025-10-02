import React from 'react';
import type { Testimonial } from '../types';
import { IconQuote } from './Icons';

export const TestimonialCard: React.FC<Testimonial> = ({ quote, name, business, imageUrl }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <img
        className="w-24 h-24 rounded-full object-cover shadow-md border-4 border-amber-200"
        src={imageUrl}
        alt={`Photo of ${name}`}
      />
      <IconQuote className="w-8 h-8 text-amber-300 mt-6 mb-4" />
      <p className="text-gray-600 italic leading-relaxed flex-grow">"{quote}"</p>
      <div className="mt-6">
        <h4 className="font-bold text-lg text-brand-dark">{name}</h4>
        <p className="text-brand-primary font-medium">{business}</p>
      </div>
    </div>
  );
};
