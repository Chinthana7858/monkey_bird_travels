import React from "react";

interface ReviewProps {
  reviewText: string;
  reviewerName: string;
  rating: number;
  username: string;
  profilePictureUrl: string;
}

const Review: React.FC<ReviewProps> = ({
  reviewText,
  reviewerName,
  rating,
  username,
  profilePictureUrl,
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={i <= rating ? "yellow" : "gray"}
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-lg p-6 mx-auto my-4 bg-white shadow-md rounded-md">
      <div className="flex items-center mb-4">
        <img
          src={profilePictureUrl}
          alt={`${reviewerName}'s profile`}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <div className="text-gray-800 font-semibold">{reviewerName}</div>
          <div className="text-blue-600">@{username}</div>
          <div className="flex mt-1">{renderStars(rating)}</div>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-4 pt-4">
        <p className="text-gray-700">{reviewText}</p>
      </div>
    </div>
  );
};

export default Review;
