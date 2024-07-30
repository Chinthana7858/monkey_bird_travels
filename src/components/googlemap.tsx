
// src/components/GoogleMap.tsx
import React from "react";

interface GoogleMapComponentProps {
  src: string; // Define a prop 'src' as a string
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ src }) => {
  return (
    <div className="relative w-full h-96">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={src} // Use 'src' prop dynamically here
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default GoogleMapComponent;
