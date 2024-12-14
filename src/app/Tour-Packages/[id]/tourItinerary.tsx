// components/TourItineraryItem.tsx
"use client";

import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { TbPointFilled } from "react-icons/tb";

interface TourItineraryItemProps {
  title: string;
  desc: string;
  point: string;
}

const TourItineraryItem: React.FC<TourItineraryItemProps> = ({
  title,
  desc,
  point,
}) => {
  const [select, setSelect] = useState(false);

  // Correct toggleSelect function to toggle the select state
  function toggleSelect() {
    setSelect(!select); // Use setSelect to update the select state
  }

  return (
    <div className=" my-1 border-2 border-custom-primaryblue rounded-lg">
      <div className="text-sm lg:text-lg font-semibold flex text-custom-secondaryblue p-2">
        <div onClick={toggleSelect} className=" cursor-pointer">
          {select ? (
            <BiSolidUpArrow size={22} className=" text-yellow-600" />
          ) : (
            <BiSolidDownArrow size={22} className=" text-yellow-600" />
          )}
        </div>
        <div className="text-sm lg:text-lg"> {title}</div>
      </div>
      {select ? (
        <div>
          <div className="text-gray-700  font-normal flex text-base">
            {" "}
            <TbPointFilled size={20} className=" opacity-0" />
            {desc}
          </div>
          <div className="text-gray-700 font-normal flex text-base">
            <TbPointFilled size={20} className=" text-slate-700" /> {point}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TourItineraryItem;
