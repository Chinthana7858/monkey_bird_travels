// src/components/GoogleMap.tsx
import React from "react";

const GoogleMapComponent: React.FC = () => {
  return (
    <div className="relative w-full h-96">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.997752854966!2d80.08701469999998!3d7.126059799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd73de376d15%3A0x21f00195b96e8127!2sKFC%20Nittambuwa!5e0!3m2!1sen!2slk!4v1718178216632!5m2!1sen!2slk"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;

