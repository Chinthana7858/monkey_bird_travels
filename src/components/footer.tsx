import React from "react";
import { CiDollar } from "react-icons/ci";
import { FaHome, FaPassport, FaRegNewspaper, FaWhatsapp } from "react-icons/fa";
import { FaCarRear } from "react-icons/fa6";
import { IoIosContact } from "react-icons/io";
import { IoCallSharp, IoMail } from "react-icons/io5";
import { LuPackage2 } from "react-icons/lu";
import { MdTour } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";

export default function Footer() {
  return (
    <footer className=" bg-custom-primaryblue">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex flex-col items-center">
              <div className="text-md font-semibold whitespace-nowrap text-white">
                TRIPADVISOR
              </div>
              <img
                src="https://i.imgur.com/JSPAaVR.png"
                className="w-48 mt-2"
              />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-8 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-md font-semibold uppercase text-white">
                CONTACT INFORMATION
              </h2>
              <ul className="text-white font-medium">
                <li className=" mb-2">
                  <a
                    href="https://wa.me/94711700404"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div className=" flex">
                      <FaWhatsapp color="white" size={25} className=" pr-1" />{" "}
                      +94 70 312 9469
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a href="" className="hover:underline">
                    <div className=" flex">
                      <IoMail color="white" size={25} className=" pr-1" />
                      monkeybirdtravels@gmail.com
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a href="" className="hover:underline">
                    <div className=" flex">
                      <IoCallSharp color="white" size={25} className=" pr-1" />
                      +94 70 312 9469
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a href="" className="hover:underline">
                    <div className=" flex">
                      <FaHome color="white" size={25} className=" pr-1" />
                      555 Sama Mawatha, Yakkaduwa
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold uppercase text-white">
                USEFUL LINKS
              </h2>
              <ul className="text-white font-medium">
                <li className=" mb-2">
                  <a
                    href="https://www.srilankaevisa.lk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div className=" flex">
                      <FaPassport color="white" size={25} className=" pr-1" />{" "}
                      How to get visa
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a
                    href="https://www.accuweather.com/en/lk/colombo/311399/weather-forecast/311399"
                    className="hover:underline"
                  >
                    <div className=" flex">
                      <TiWeatherCloudy
                        color="white"
                        size={25}
                        className=" pr-1"
                      />
                      Weather in Sri Lanka
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a
                    href="https://www.xe.com/currencyconverter/convert/?Amount=1&From=USD&To=LKR"
                    className="hover:underline"
                  >
                    <div className=" flex">
                      <CiDollar color="white" size={25} className=" pr-1" />
                      Currency Exchange4
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a
                    href="https://www.srilanka.travel/travel-news"
                    className="hover:underline"
                  >
                    <div className=" flex">
                      <FaRegNewspaper
                        color="white"
                        size={25}
                        className=" pr-1"
                      />
                      Sri Lanka Travel News
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-md font-semibold text-white uppercase ">
                QUICK LINKS
              </h2>
              <ul className="text-white font-medium">
                <li className=" mb-2">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <div className=" flex">
                      <FaCarRear color="white" size={25} className=" pr-1" />{" "}
                      Private Driver in Sri Lanka{" "}
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a href="" className="hover:underline">
                    <div className=" flex">
                      <LuPackage2 color="white" size={25} className=" pr-1" />
                      Tour Packages in Sri Lanka
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a href="" className="hover:underline">
                    <div className=" flex">
                      <MdTour color="white" size={25} className=" pr-1" />
                      Tailor Made Tours
                    </div>
                  </a>
                </li>
                <li className=" mb-2">
                  <a href="" className="hover:underline">
                    <div className=" flex">
                      <IoIosContact color="white" size={25} className=" pr-1" />
                      Contact Us
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white">
        <div className="flex justify-center mx-auto">
          <img src="/logo.png" alt="" className="cursor-pointer h-[10vh]" />
        </div>
      </div>
    </footer>
  );
}
