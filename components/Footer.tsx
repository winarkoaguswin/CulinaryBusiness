
import React from 'react';
import { IconForkKnife } from './Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center">
            <IconForkKnife className="h-8 w-8 text-brand-primary" />
            <span className="ml-2 text-2xl font-extrabold text-white tracking-tight">
              GastroPreneur
            </span>
        </div>
        <p className="mt-4 text-gray-400">
          Membantu Bisnis Kuliner Indonesia Naik Kelas.
        </p>
        <div className="mt-8 text-gray-400">
          <p>Email: <a href="mailto:contact@gastropreneur.com" className="text-brand-primary hover:underline">contact@gastropreneur.com</a></p>
          <p>Phone: +62 812-3456-7890</p>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GastroPreneur Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
