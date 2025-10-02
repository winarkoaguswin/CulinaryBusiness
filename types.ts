import type React from 'react';

export interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactElement;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  business: string;
  imageUrl: string;
}
