import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';

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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-semibold text-center ">
        {title}
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-4">
        <button className="bg-custom-primaryblue hover:bg-custom-secondaryblue text-white font-medium py-2 px-4 rounded-full flex">
          Discover more<IoMdArrowDropright size={25}/>
        </button>
      </div>
    </div>
  );
}
