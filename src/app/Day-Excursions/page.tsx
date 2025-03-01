import Footer from "@/components/footer";
import Navbar from "@/components/navigationBar";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdHome } from "react-icons/md";
import TourPackage from "../Tour-Packages/tourpackageCard";
import { dayexcursions } from "@/database/dayexcursions";
import DayPackage from "./daypackage";
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
                  src="https://i.imgur.com/9wbIaBl.jpg"
                  className="w-screen lg:h-screen h-[50vh] object-cover"
                  alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-4xl font-bold drop-shadow-md mb-4">
                    Day Tours in Sri Lanka
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
                    <span>Day Excursions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center bg-cover bg-center">
            <div className="bg-white bg-opacity-75 p-5 rounded-lg  text-center">
              <div className=" text-slate-800  px-5 lg:px-16 font-medium text-justify">
                {" "}
                Our one-day tour packages are designed to showcase the
                highlights of Sri Lanka in a short yet unforgettable journey.
                Whether you want to explore the ancient wonders of Anuradhapura
                or relax on the pristine beaches of Trincomalee, our carefully
                curated day tours cover the most iconic destinations across the
                island. Travel in comfort with our air-conditioned vehicles, and
                let our knowledgeable and friendly guides take care of every
                detail. From historical landmarks to breathtaking natural
                beauty, we ensure your day trip is both enriching and enjoyable.
                If you are looking for a fun, convenient, and affordable way to
                experience the best of Sri Lanka, Monkeybird Travels has the
                perfect one-day tour for you. Let us make your day
                extraordinary!
              </div>
            </div>
          </div>
          <div className="text-4xl lg:px-16 px-5 mb-5 text-center font-sans"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:w-[80vw] mx-auto p-5">
            {dayexcursions.map((packageInfo) => (
              <DayPackage
                id={packageInfo.id}
                key={packageInfo.id}
                name={packageInfo.name}
                imgUrl={packageInfo.imgUrl}
                description={packageInfo.description}
                numOfDays={packageInfo.numOfDays}
                numOfPeople={packageInfo.numOfPeople}
                season={packageInfo.season}
              />
            ))}
          </div>

          <div className=" h-10"></div>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
