import AirportTransferComponent from "@/app/Airport-Transfers/airporttransfercomponent";
import Footer from "@/components/footer";
import Navbar from "@/components/navigationBar";
import ContactSection from "@/components/quickcontact";
import ReviewComponent from "@/components/reviewcomponent";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdHome } from "react-icons/md";

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
          <nav className="z-20 w-full lg:absolute">
            <Navbar />
          </nav>
          <div className="relative w-screen h-full">
            <div className="relative w-screen h-full">
              <div className="relative w-screen h-full">
                <img
                  src="https://i.imgur.com/E2qrNTN.jpg"
                  className="w-screen lg:h-screen h-[50vh] object-cover"
                  alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-4xl font-bold drop-shadow-md mb-4">
                    Airport Transfers
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
                    <span>Airport Transfers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center bg-cover bg-center">
            <div className="bg-white bg-opacity-75 p-5 rounded-lg  text-center">
              <div className="text-3xl md:text-4xll lg:px-16 px-5 mb-5">
                <div className="font-semibold text-blue-600">
                  Airport Taxi / Airport Transfers In Sri Lanka
                </div>
              </div>
              <div className="text-slate-600 px-5 lg:px-16 font-medium">
                Looking for reliable and hassle-free transportation in Sri
                Lanka? Look no further than Monkeybird Travels! We offer
                affordable airport taxi services to and from Colombo
                International Airport, as well as taxi services throughout
                Colombo and across the country. With experienced drivers who
                know the best routes, we ensure a smooth and comfortable ride
                every time. Our 24/7 availability means you can rely on us
                anytime, whether you are traveling for business or leisure. From
                the moment you land, we ill take the stress out of your journey
                so you can relax and enjoy your trip. Our highly competitive
                rates make Monkeybird Travels the perfect choice for all
                your transportation needs, offering the best value without
                compromising on quality. Wherever you are headed in Sri Lanka,
                we are here to get you there safely and comfortably. Book with
                Monkeybird Travels today and make your journey truly
                worry-free!
              </div>
            </div>
          </div>
          <div className=" flex-1 lg:flex">
            <div className=" w-4"></div>
            <AirportTransferComponent
              title={"Friendly Private Driver guide"}
              description={
                "We are Friendly / Professional Driver Guides with great Knowledge about the Sri Lanka."
              }
              image={"https://i.imgur.com/c2DVMJA.png"}
            />
            <div className=" w-4"></div>
            <AirportTransferComponent
              title={"Super Fast Booking"}
              description={
                "You can book your tour within minutes by choosing one of our taxi service or tour package."
              }
              image={"https://i.imgur.com/wnGxqXv.jpg"}
            />
            <div className=" w-4"></div>
            <AirportTransferComponent
              title={"100+ Amazing Destinations"}
              description={
                "We have created some awesome tour plans with Top sights and some hidden tourist Attractions."
              }
              image={"https://i.imgur.com/93nKZk8.jpg"}
            />{" "}
            <div className=" w-4"></div>
            <AirportTransferComponent
              title={"FULLY VACCINATED ?"}
              description={
                "Then you can stay at any type of accommodation and no need to be subjected to an on-arrival PCR test."
              }
              image={"https://i.imgur.com/KlcUWV4.jpg"}
            />
            <div className=" w-4"></div>
          </div>
          <div>
            <ContactSection />
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
