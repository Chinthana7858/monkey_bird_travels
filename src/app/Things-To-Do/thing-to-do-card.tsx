// src/components/thingstodoCard.tsx
import React from 'react';

type ThingToDoCardProps = {
  
  title: string;
  imgUrl: string;
  starscount: number;
  locationname:string,
};

const ThingToDoCard: React.FC<ThingToDoCardProps> = ({ title, imgUrl, starscount,locationname }) => {
  // Function to render star elements
  const renderStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-6 h-6 ${i < count ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.266a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.042a1 1 0 00-.364 1.118l1.063 3.266c.3.921-.755 1.688-1.539 1.118l-2.8-2.042a1 1 0 00-1.175 0l-2.8 2.042c-.783.57-1.838-.197-1.539-1.118l1.063-3.266a1 1 0 00-.364-1.118L2.95 8.693c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex-col">
      <img src={imgUrl} alt={title} className="w-full h-full object-cover hover:scale-105 hover:opacity-85 z-0" />
      <div className=' p-2 absolute top-0 w-48 m-1 bg-custom-primaryblue'>
        {locationname}
      </div>
      <div className="bg-white z-50 opacity-100 p-6">
        <h2 className="text-xl font-medium text-gray-600">{title}</h2>
        <div className="flex items-center mt-2">
          {renderStars(starscount)}
        </div>
      </div>
    </div>
  );
};

export default ThingToDoCard;
