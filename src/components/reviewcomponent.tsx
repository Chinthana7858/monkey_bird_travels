import React from "react";
import ReviewCarousel from "./ReviewCarousel"; // Make sure to adjust the import path as needed

const ReviewComponent: React.FC = () => {
  return (
    <div className="bg-yellow-500 flex flex-col lg:flex-row">
      {/* Image and Button Section */}
      <div className="basis-1/2 flex justify-center lg:mt-20">
        <div className="lg:px-16 px-5 font-semibold">
          <div className="relative bg-green-500 w-96 h-auto mx-auto my-10 rounded-md overflow-hidden">
            <div className="relative w-full h-80">
              <img
                src="https://i.imgur.com/mOI775a.png"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex justify-center py-4">
              <button className="bg-white text-slate-800 py-2 px-4 rounded-full">
                Thanks for your support!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Carousel Section */}
      <div className="basis-1/2 flex flex-col justify-center lg:mt-20">
        <div className="text-2xl font-semibold text-white mx-auto mb-4">
          What they say about us?
        </div>
        <div className="mx-2">
          <ReviewCarousel />
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
