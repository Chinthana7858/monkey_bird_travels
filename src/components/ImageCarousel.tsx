"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const DATA = [
  {
    image: "https://i.imgur.com/HMVEr7F.jpg",
    maintitle: "Welcome to Monkey Bird Travels",
    subtitle: "Sri Lanka",
  },
  {
    image: "https://i.imgur.com/ThqdDyn.jpg",
    maintitle: "Wonder of Asia",
    subtitle: "Sri Lanka",
  },
];

function Slider1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 10 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? DATA.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === DATA.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[70vh] lg:h-screen w-full relative group">
      <div
        style={{ backgroundImage: `url(${DATA[currentIndex]?.image})` }}
        className="relative w-full h-full duration-500 bg-center bg-cover"
      >
        <div className="text-white text-center justify-center py-[30vh]">
          <h1 className="lg:text-7xl text-3xl">{DATA[currentIndex]?.maintitle}</h1>
          <p className="lg:text-3xl text-xl">{DATA[currentIndex]?.subtitle}</p>
          <div className=" flex text-center justify-center my-[5vh]">
            {" "}
            <Link href="/Private-Driver">
            <button className=" m-5 border-2 border-white bg-blue-500 py-1 px-2 hover:bg-blue-600">Private Driver</button>
            </Link> 
            <Link href="/Tour-Packages">
            <button className=" m-5 border-2 border-white bg-red-500 py-1 px-2 hover:bg-red-600">Tour packages</button>
            </Link> 
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center">
        {DATA.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              color={slideIndex === currentIndex ? "black" : "gray"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider1;
