
import React from 'react';
import type { TeamMember } from '../types';

export const TeamMemberCard: React.FC<TeamMember> = ({ name, role, imageUrl }) => {
  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto">
        <img
          className="rounded-full w-full h-full object-cover shadow-lg"
          src={imageUrl}
          alt={`Photo of ${name}`}
        />
         <div className="absolute inset-0 rounded-full border-4 border-brand-primary/50"></div>
      </div>
      <div className="mt-4">
        <h4 className="text-xl font-bold text-brand-dark">{name}</h4>
        <p className="text-brand-primary font-semibold">{role}</p>
      </div>
    </div>
  );
};
