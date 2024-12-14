"use client";
import { tourPackages } from "@/database/tourpackages";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoIosArrowForward, IoIosTimer } from "react-icons/io";
import { MdHome, MdTour } from "react-icons/md";
import Navbar from "@/components/navigationBar";
import AutoChangingTourPackages from "@/app/Tailor-Made-Tours/autochangingpackages";
import { ContactDetails, QuickContact } from "@/components/quickcontact";
import { IoCalendarClearOutline, IoLocationSharp } from "react-icons/io5";
import Imageslider from "./imegeSlider";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";
import TourItineraryItem from "./tourItinerary";
import { GoogleMap } from "@react-google-maps/api";
import GoogleMapComponent from "@/components/googlemap";
import Footer from "@/components/footer";

export default function TourPackagePage() {
  const { id } = useParams(); // Fetch the ID from the URL parameters

  // Find the tour package details based on the provided ID
  const tourPackage = tourPackages.find((tourPackage) => tourPackage.id === id);

  if (!tourPackage) {
    return <div>Tour package not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="bg-white">
        <section>
          <nav className="z-20 w-full lg:absolute">
            <Navbar />
          </nav>
          <img
            src={tourPackage.imgUrl}
            className="w-full lg:h-screen h-[50vh] object-cover"
            alt="Background"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-white text-4xl font-bold drop-shadow-md mb-4">
              {tourPackage.name}
            </div>
            <div className="flex items-center text-white text-2xl font-bold drop-shadow-md">
              <Link href="/">
                <MdHome color="" size={30} className="mr-2" />
              </Link>
              <span>
                <Link href="/">Home</Link>
              </span>
              <IoIosArrowForward color="" size={30} className="mx-2" />
              <span> {tourPackage.name}</span>
            </div>
          </div>
        </section>
        <section>
          <div className=" flex-1 lg:flex">
            <div className=" lg:w-[67vw]">
              <div className="mx-2 px-1">
                <div className="font-semibold text-white bg-custom-primaryblue my-2">
                  <div className="text-xl lg:text-3xl  p-1">
                    {tourPackage.name}
                  </div>
                </div>

                <div className=" flex py-5">
                  <div className=" flex pr-5 text-xl font-semibold">
                    <IoIosTimer
                      size={30}
                      className=" text-yellow-600 font-bold mr-1"
                    />
                    <div className=" text-blue-950">
                      {" "}
                      {tourPackage.numOfNights}{" "}
                      {tourPackage.numOfNights === "One" ? "Night" : "Nights"}
                    </div>
                  </div>

                  <div className=" flex pr-5 text-xl font-semibold">
                    <IoCalendarClearOutline
                      size={30}
                      className=" text-yellow-600 font-bold mr-1"
                    />
                    <div className=" text-blue-950">
                      {" "}
                      {tourPackage.numOfDays}{" "}
                      {tourPackage.numOfDays === "One" ? "Day" : "Days"}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap space-x-4 bg-custom-secondaryblue text-white text-lg font-medium p-1 ">
                  {tourPackage.destinations.map((destination, index) => (
                    <span key={index} className="flex items-center mb-2">
                      <IoLocationSharp className="mr-2 text-yellow-500" />{" "}
                      {destination}
                    </span>
                  ))}
                </div>
                <div className="text-slate-800  font-medium text-justify">
                  {tourPackage.longDescription}
                </div>
                <div className="font-semibold text-custom-primaryblue bg-white my-2">
                  <div className="text-lg lg:text-xl  p-1">
                    Places You’ll See
                  </div>
                </div>

                <div className=" mx-auto">
                  <Imageslider images={tourPackage.images} />
                </div>
                <div>
                  <hr></hr>
                  <div className=" flex-1 lg:flex py-5">
                    <div className=" flex p-3 text-lg lg:text-xl font-semibold basis-1/3 ">
                      <AiFillThunderbolt
                        size={50}
                        className=" text-yellow-600 font-bold mr-1"
                      />
                      <div className=" text-blue-950">
                        <div>Difficulty</div>{" "}
                        <div className="text-sm lg:text-base font-medium">
                          {tourPackage.difficulty}
                        </div>
                      </div>
                    </div>

                    <div className=" flex p-3 text-lg lg:text-xl font-semibold basis-1/3">
                      <MdTour
                        size={50}
                        className=" text-yellow-600 font-bold mr-1"
                      />
                      <div className=" text-blue-950">
                        {" "}
                        <div>Tour Type</div>
                        <div className="text-sm lg:text-base font-medium">
                          {tourPackage.tourtype}
                        </div>
                      </div>
                    </div>
                    <div className=" flex p-3 text-lg lg:text-xl font-semibold basis-auto">
                      <FaMapLocationDot
                        size={50}
                        className=" text-yellow-600 font-bold mr-1"
                      />
                      <div className=" text-blue-950">
                        <div>Date</div>{" "}
                        <div className="text-sm lg:text-base font-medium">
                          {tourPackage.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <div>
                    <div className="font-semibold text-custom-primaryblue bg-white my-2">
                      <div className="text-lg lg:text-xl  p-1">
                        Tour Itinerary
                        <div>
                          {tourPackage.touritinerary.map((item, index) => (
                            <TourItineraryItem
                              key={index}
                              title={item.title}
                              desc={item.desc}
                              point={item.point}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="font-semibold text-custom-primaryblue bg-white my-2">
                  <div className="text-lg lg:text-xl  p-1">
                    Related Accommodations
                  </div>
                </div>
                <div className=" mx-auto">
                  <Imageslider images={tourPackage.accomodation} />
                </div>
                <div className="font-semibold text-custom-primaryblue bg-white my-2">
                  <div className="text-lg lg:text-xl  p-1">Tour Route Map</div>
                </div>
                <GoogleMapComponent
                  src={
                    tourPackage.mapsrc
                  }
                />
                
              </div>
            </div>
            <div className=" w-[30vw]">
              <ContactDetails />
              <AutoChangingTourPackages />
              <QuickContact />
            </div>
          </div>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
