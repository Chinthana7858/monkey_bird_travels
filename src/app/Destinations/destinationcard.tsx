// src/components/DestinationCard.tsx
import React from 'react';

type DestinationCardProps = {
  title: string;
  imgUrl: string;
};

const DestinationCard: React.FC<DestinationCardProps> = ({ title, imgUrl }) => {
  return (
    <div className=" bg-white shadow-lg rounded-lg overflow-hidden flex-col">
     
      <img src={imgUrl} alt={title} className="w-full h-full object-cover hover:scale-105 hover:opacity-85 z-0" />
    
      <div className="bg-whitez-50 opacity-100 p-6">
        <h2 className="text-xl font-medium text-gray-600">{title}</h2>
      </div>
    </div>
  );
};

export default DestinationCard;
