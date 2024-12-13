"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navigationBar";
import { QuickContact } from "@/components/quickcontact";
import ReviewComponent from "@/components/reviewcomponent";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowForward, IoMdMailUnread } from "react-icons/io";
import { MdHome } from "react-icons/md";
import {
  FaFacebookSquare,
  FaHome,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneSquareAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import {
  FaSquareYoutube,
  FaSquareXTwitter,
  FaSquarePinterest,
} from "react-icons/fa6";
import { ImLinkedin } from "react-icons/im";
import GoogleMapComponent from "@/components/googlemap";
import Popup from "reactjs-popup";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Monkey Bird Travels</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white  ">
        <section className="">
          <nav className="z-20 w-screen lg:absolute">
            <Navbar />
          </nav>
          <div className="relative w-screen h-full">
            <div className="relative w-screen h-full">
              <div className="relative w-screen h-full">
                <img
                  src="https://i.imgur.com/kGdNndW.jpg"
                  className="w-screen lg:h-screen h-[50vh] object-cover"
                  alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-4xl font-bold drop-shadow-md mb-4">
                    Contact Us
                  </div>
                  <div className="flex items-center text-white text-2xl font-bold drop-shadow-md">
                    <Link href="/">
                      {" "}
                      <MdHome color="" size={30} className="mr-2" />{" "}
                    </Link>
                    <span>
                      {" "}
                      <Link href="/">Home</Link>
                    </span>

                    <IoIosArrowForward color="" size={30} className="mx-2" />
                    <span>Contact Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className=" flex-1 lg:flex">
              <div className=" basis-1/2 ">
                <div className="flex-1  text-slate-700 mt-10 mx-10">
                  <h1 className="lg:text-4xl md:text-3xl text-2xl font-medium  mb-4">
                    Our Office
                  </h1>
                  <div className=" flex my-4">
                    <div className=" text-yellow-500 pr-3">
                      <FaHome size={40} />
                    </div>
                    <div className=" flex-col font-medium">
                      <div className="lg:text-xl md:text-lg text-md">
                        Office address
                      </div>
                      <div className="lg:text-lg md:text-md text-sm">
                        555 Sama Mawatha, Yakkaduwa
                      </div>
                    </div>
                  </div>
                  <div className=" flex my-4">
                    <div className=" text-yellow-500 pr-3">
                      <IoMdMailUnread size={40} />
                    </div>
                    <div className=" flex-col font-medium">
                      <div className="lg:text-xl md:text-lg text-md">
                        Our Email
                      </div>
                      <div className="lg:text-lg md:text-md text-sm">
                        monkeybirdtravels@gmail.com{" "}
                      </div>
                    </div>
                  </div>
                  <div className=" flex my-4">
                    <div className=" text-yellow-500 pr-3">
                      <FaPhoneSquareAlt size={40} />
                    </div>
                    <div className=" flex-col font-medium">
                      <div className="lg:text-xl md:text-lg text-md">
                        Phone Number
                      </div>
                      <div className="lg:text-lg md:text-md text-sm">
                        +94 70 312 9469
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex-col pt-4">
                  <div className=" text-slate-700 px-11 lg:text-3xl md:text-2xl text-xl font-medium">
                    Social Networks
                  </div>
                  <div className=" text-slate-700 px-10 flex">
                    <a href="https://www.facebook.com/monkeybirdtravels">
                      <FaFacebookSquare
                        size={40}
                        className=" mx-1 cursor-pointer"
                        style={{ color: "#4267B2" }}
                      />
                    </a>
                    <a href="https://wa.me/94703129469">
                      <FaWhatsappSquare
                        size={40}
                        className=" mx-1 cursor-pointer"
                        style={{ color: "#25D366" }}
                      />
                    </a>
                    <FaSquareYoutube
                      size={40}
                      className=" mx-1 cursor-pointer"
                      style={{ color: "#FF0000" }}
                    />
                    <FaInstagramSquare
                      size={40}
                      className=" mx-1 cursor-pointer"
                      style={{ color: "#E1306C" }}
                    />
                    <FaSquareXTwitter
                      size={40}
                      className=" mx-1 cursor-pointer"
                      style={{ color: "#282828" }}
                    />
                    <FaLinkedin
                      size={40}
                      className=" mx-1 cursor-pointer"
                      style={{ color: "#4267B2" }}
                    />
                    <FaSquarePinterest
                      size={40}
                      className=" mx-1 cursor-pointer"
                      style={{ color: "#E60023" }}
                    />
                  </div>
                </div>
              </div>

              <div className=" basis-1/2">
                <QuickContact size="" />
              </div>
            </div>
          </div>

          <div className=" w-[95vw] mx-auto my-4">
            <GoogleMapComponent
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.6559374639398!2d79.92217656898428!3d7.089799981855968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fa0b3763136d%3A0x9bf94ec450799a2f!2sDivulgas%20Junction!5e0!3m2!1sen!2slk!4v1734076264766!5m2!1sen!2slk"
              }
            />
          </div>
        </section>
        <ReviewComponent />
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
