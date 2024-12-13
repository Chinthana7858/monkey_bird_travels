import { tourPackages } from "@/database/tourpackages";
import Link from "next/link";
import { BsPeopleFill } from "react-icons/bs";
import { FaCalendarDay } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";

interface TourPackageProps {
  id: string;
}

export default function TourPackage({ id }: TourPackageProps) {
  // Find the tour package details based on the provided ID
  const tourPackage = tourPackages.find((tourPackage) => tourPackage.id === id);

  if (!tourPackage) {
    return <div>Tour package not found</div>;
  }

  const { name, imgUrl, description, numOfDays, numOfPeople, season } = tourPackage;

  return (
    <div className="w-full border-2 border-white rounded-lg overflow-hidden flex flex-col xl:h-[70vh] lg:h-[50vh] shadow-2xl">
      <div className="h-2/3">
        <div className="relative w-full h-full">
          <img
            src={imgUrl}
            className="w-full h-full object-cover  hover:opacity-80"
            alt={name}
          />
          <div className="absolute bottom-0 left-0 p-2 bg-white text-slate-600 flex">
            <FaCalendarDay size={25} className="px-1" /> {`${numOfDays} day`}{" "}
            <div className="px-2"></div>
            <BsPeopleFill className="px-1" size={25} />
            {` ${numOfPeople}`}
          </div>
        </div>
      </div>
      <div className="bg-white flex-1 rounded-b-lg flex flex-col justify-between">
        <div>
          <div className="text-blue-700 text-2xl p-3">{name}</div>
          <div className="text-slate-800 font-medium p-3 flex">
            <IoLocation size={20} /> {description}
          </div>
        </div>
        <Link href={`/Tour-Packages/${id}`}>
        <div className="text-white font-medium p-3 bg-green-900 flex justify-between cursor-pointer">
          Explore
          <MdArrowForwardIos size={20} />
        </div>
        </Link>
      </div>
    </div>
  );
}
