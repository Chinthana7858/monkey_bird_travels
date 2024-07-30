// src/components/AutoChangingTourPackages.tsx
import { tourPackages } from "@/database/tourpackages";
import React, { useState, useEffect } from "react";
import TourPackage from "../Tour-Packages/tourpackageCard";

const AutoChangingTourPackages: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tourPackages.length);
    }, 3000); // Change package every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentPackage = tourPackages[currentIndex];

  return (
    <div className=" p-6 lg:p-0  w-[100vw] lg:w-[30vw]  justify-center items-center h-auto mx-auto">
      <div className="text-2xl font-bold text-center text-white bg-custom-primaryblue rounded-xl">Other packages</div>
      <div className="flex">
        <TourPackage id={"1"}          
        />
      </div>
    </div>
  );
};

export default AutoChangingTourPackages;
