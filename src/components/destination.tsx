import Link from "next/link";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

interface DestinationProps {
  title: string;
  imgUrl: string;
}

export default function Destination({ title, imgUrl }: DestinationProps) {
  return (
    <div className="relative">
      <img
        src={imgUrl}
        alt={title}
        className=" w-full h-full object-cover hover:opacity-80"
      />
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 text-white text-center">
        <div className="bg-black bg-opacity-60 inline-block px-4 py-2 rounded">
          <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4">
        <Link href="/Destinations">
          <button className="bg-custom-primaryblue hover:bg-custom-secondaryblue text-white font-medium py-2 px-4 rounded-full flex">
            Discover more
            <IoMdArrowDropright size={25} />
          </button>
        </Link>
      </div>
    </div>
  );
}
