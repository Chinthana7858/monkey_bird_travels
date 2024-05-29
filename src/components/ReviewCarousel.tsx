"use client";
import React, { useState, useEffect } from 'react';
import Review from './review';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

const reviews = [
  {
    reviewText: "This is an amazing place to visit. The staff were very friendly and the food was delicious! This is an amazing place to visit. The staff were very friendly and the food was delicious! This is an amazing place to visit. The staff were very friendly and the food was delicious! This is an amazing place to visit. The staff were very friendly and the food was delicious!",
    reviewerName: "John Doe",
    rating: 5,
    username: "john_doe",
    profilePictureUrl: "https://via.placeholder.com/150"
  },
  {
    reviewText: "Great experience, but the room was a bit small.",
    reviewerName: "Jane Smith",
    rating: 4,
    username: "jane_smith",
    profilePictureUrl: "https://via.placeholder.com/150"
  },
  {
    reviewText: "Lovely atmosphere and friendly staff. Highly recommend!",
    reviewerName: "Alice Johnson",
    rating: 5,
    username: "alice_johnson",
    profilePictureUrl: "https://via.placeholder.com/150"
  }
];

const ReviewCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto my-10">
      <div className="relative h-96 overflow-hidden">
        {/* Left arrow */}
        {/* <div className="absolute top-0 left-0 flex items-center h-full text-xl">
          <MdKeyboardDoubleArrowLeft className="text-gray-600 cursor-pointer" onClick={prevReview} size={30}/>
        </div> */}
        {/* Right arrow */}
        {/* <div className="absolute top-0 right-0 flex items-center h-full text-xl">
          <MdKeyboardDoubleArrowRight className="text-gray-600 cursor-pointer" onClick={nextReview} size={30}/>
        </div> */}
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <Review {...review} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
