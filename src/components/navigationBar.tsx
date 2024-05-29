"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaInstagramSquare, FaWhatsapp, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareTwitter, FaSquareXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImFacebook2 } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp, IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";

export default function Navbar() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [showOurServises, setShowOurServices] = useState(false);
  const [showDiscoverSL, setShowDiscoverSL] = useState(false);

  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
    console.log(isMobileDropdownOpen);
  };
  const toggleOurServices = () => {
    setShowOurServices(!showOurServises);
    console.log(showOurServises);
  };
  const toggleDiscoverSL = () => {
    setShowDiscoverSL(!showDiscoverSL);
  };

  return (
    <>
      <div className="flex-col  lg:visible collapse h-0 mb-3">
        <div className="basis-2/3 bg-white text-black h-[10vh] flex justify-between font-semibold">
          <div className="items-center justify-center flex border-2 w-full">
            <img src="/logo.png" alt="" className=" scale-50 cursor-pointer" />
          </div>

          <div className=" justify-center flex md:border-2 md:w-full flex-col w-0 border-0 text-slate-700">
            <div className=" flex">
              <FaWhatsapp color="green" size={30} className=" p-1" />
              +94 1700404
            </div>
            <div className=" flex">
              <IoMail color="blue" size={30} className=" p-1" />
              info@example.com
            </div>
          </div>
          <div className=" justify-center flex border-2 w-full flex-col text-slate-700">
            <div className=" flex">
              <IoIosCall color="blue" size={30} className=" p-1" />
              +94 1700404
            </div>
            <div className=" flex">
              <IoMail color="blue" size={30} className=" p-1" />
              info@example.com
            </div>
          </div>
          <div className="items-center justify-center flex border-2 w-full">
            <div className="">
              <ImFacebook2
                size={40}
                color="blue"
                className=" hover:scale-110 cursor-pointer"
                onClick={() => {
                  toggleOurServices();
                }}
              />
            </div>
            <div className="">
              <FaInstagramSquare
                size={50}
                color="red"
                className=" hover:scale-110 cursor-pointer"
              />
            </div>
            <div className="">
              <FaYoutubeSquare
                size={50}
                color="red"
                className=" hover:scale-110 cursor-pointer"
              />
            </div>
            <div className="">
              <FaSquareXTwitter
                size={50}
                color="black"
                className=" hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
          <div className="items-center justify-center flex border-2 w-full">
            <img
              src="/tripadvisor.png"
              alt=""
              className=" scale-50 cursor-pointer hover:scale-75"
            />
          </div>
        </div>
        <div className="basis-1/3 bg-slate-900 h-[7vh] sm:flex justify-between font-medium text-white">
          {/* First row */}
          <div className="flex justify-between w-full ">
            {" "}
            <Link
              href="/"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              <div className="">Home</div>
            </Link>{" "}
            <Link
              href="/About-Us"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              <div className="">About us</div>
            </Link>
            {/* Dropdown for Our Services */}
            <div className="relative w-[33.33%]">
              <div
                className="w-full bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0 h-[7vh]"
                onClick={() => toggleDropdown1()}
              >
                Our Services
                {isDropdownOpen1 ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              {isDropdownOpen1 && (
                <div className="absolute top-full left-0 w-full bg-custom-primaryblue z-10">
                  <a
                    href="Airport-Transfers"
                    className="block cursor-pointer hover:bg-custom-secondaryblue p-2 text-center"
                  >
                    Airport transfer
                  </a>
                  <a
                    href="Hire-A-Car"
                    className="block cursor-pointer hover:bg-custom-secondaryblue p-2 text-center"
                  >
                    Hire a car
                  </a>
                  <a
                    href="Private-Driver"
                    className="block cursor-pointer hover:bg-custom-secondaryblue p-2 text-center"
                  >
                    Private driver
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Second row */}
          <div className="flex justify-between w-full">
            <Link
              href="/Day-Excursions"
              className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0"
            >
              Day Excursions
            </Link>
            <div className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0">
              Tour Packages
            </div>
            <div className="w-[33.33%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0">
              Tailor Made Tours
            </div>
          </div>

          {/* Third row */}
          <div className="flex justify-between w-full">
            <div className="relative w-[40%]">
              <div className="w-full bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0 h-[7vh]">
                Discover Sri Lanka <IoIosArrowDown />
              </div>
              <select className="absolute inset-0 opacity-0 z-10 w-full h-full bg-custom-primaryblue cursor-pointer hover:bg-custom-secondaryblue">
                <option value="service1" className=" cursor-pointer">
                  Destinations
                </option>
                <option value="service2" className=" cursor-pointer">
                  Things to do
                </option>
                <option value="service3" className=" cursor-pointer">
                  Blog
                </option>
              </select>
            </div>
            <div className="w-[30%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0">
              Contact Us
            </div>
            <div className="w-[30%] bg-custom-primaryblue flex items-center justify-center cursor-pointer hover:bg-custom-secondaryblue border hover:border-0">
              Enquire Now
            </div>
          </div>
        </div>
      </div>

      <div className="lg:collapse ">
        <div className=" flex w-full justify-between max-h-[10vh]">
          <div className="">
            <img
              src="/logo.png"
              alt=""
              className="cursor-pointer scale-75  h-[10vh]"
            />
          </div>
          <div className=" pr-4" onClick={toggleMobileDropdown}>
            <GiHamburgerMenu size={30} color="black" />
          </div>
        </div>{" "}
        {/* Dropdown Content */}
        {isMobileDropdownOpen && (
          <div className="">
            <ul>
              <Link href="/">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Home
                </li>
              </Link>
              <Link href="/About-Us">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  About Us
                </li>
              </Link>
              <li
                className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium"
                onClick={() => {
                  toggleOurServices();
                }}
              >
                <div className=" flex">
                  {" "}
                  Our services{" "}
                  {showOurServises ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </li>
              {showOurServises && (
                <div>
                  {" "}
                  <Link href="/Airport-Transfers">
                    <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                      Airport transfer
                    </li>
                  </Link>
                  <Link href="/Hire-A-Car">
                    <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                      Hire a car
                    </li>
                  </Link>
                  <Link href="/Private-Driver">
                    <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                      Private Driver
                    </li>
                  </Link>
                </div>
              )}
              <Link href="/Day-Excursions">
                <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                  Day Excursions
                </li>
              </Link>
              <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                Tour Packages
              </li>
              <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                Tailor Made Tours
              </li>
              <li
                className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium"
                onClick={() => {
                  toggleDiscoverSL();
                }}
              >
                <div className=" flex">
                  {" "}
                  Discover Sri Lanka{" "}
                  {showDiscoverSL ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </li>
              {showDiscoverSL && (
                <div>
                  <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                    Destinations
                  </li>
                  <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                    Things to do
                  </li>
                  <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                    Blog
                  </li>
                </div>
              )}
              <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                Contact Us
              </li>
              <li className=" py-3 pl-3 border bg-custom-primaryblue text-white font-medium">
                Enquire Now
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
