
import React from 'react';
import type { Service } from '../types';

export const ServiceCard: React.FC<Service> = ({ title, description, features, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col transform hover:-translate-y-2">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-amber-100 text-brand-primary">
          {icon}
        </div>
      </div>
      <div className="mt-6 flex-grow">
        <h3 className="text-2xl font-bold text-brand-dark">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <ul className="mt-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-3 text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
