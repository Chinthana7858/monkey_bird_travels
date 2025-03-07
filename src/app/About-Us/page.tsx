"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navigationBar";
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
        <meta
          name="description"
          content="Embark on unforgettable journeys with Monkey Bird Travels. Discover breathtaking destinations, curated travel experiences, and exclusive deals for your next adventure."
        />
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
                  src="https://i.imgur.com/kGdNndW.jpg"
                  className="w-screen lg:h-screen h-[50vh] object-cover"
                  alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-4xl font-bold drop-shadow-md mb-4">
                    About Us
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
                    <span>About Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.imgur.com/0Onzutl.jpg')",
            }}
          >
            <div className="bg-white bg-opacity-75 p-5 rounded-lg  text-center">
              <div className="text-3xl md:text-4xl lg:px-16 px-5 mb-5">
                <div className="font-semibold text-blue-600">
                  We focus on bringing the best
                </div>
                <div className="text-green-600 font-semibold">
                  Travel Experience
                </div>
              </div>
              <div className="text-3xl lg:px-16 px-5 font-semibold text-blue-800 mb-5">
                Who we are
              </div>
              <div className="text-slate-600 px-5 lg:px-16 font-medium">
                For over a decade, Monkeybird Travels has been crafting
                unforgettable experiences for travelers from across the globe.
                With a perfect balance of affordability, comfort, and safety, we
                take pride in delivering world-class tours that showcase the
                very best of Sri Lanka. Our team is dedicated to staying updated
                with the latest health and safety protocols, ensuring that your
                journey is as enjoyable as it is secure. At Monkeybird Travels,
                our highly skilled and knowledgeable drivers are more than just
                chauffeurs—they are your guides through Sri Lanka s rich
                history, breathtaking geography, and vibrant culture. Embark on
                a journey to uncover the island s hidden treasures. Wander
                through historical landmarks, immerse yourself in diverse
                wildlife, and savor the unmatched beauty of golden beaches and
                lush landscapes. From the exquisite cuisine to the heartwarming
                smiles of the locals, Sri Lanka offers a travel experience like
                no other. At Monkeybird Travels, we don t just offer trips we
                create memories that last a lifetime. Whether you are exploring
                ancient ruins, marveling at the intricate beauty of Sri Lanka s
                temples, or relaxing on its serene shores, your adventure will
                be one to treasure forever. Let us guide you through the wonders
                of the Land of Smiles. Pack your bags and let Monkeybird Travels
                turn your dream vacation into reality. We can t wait to welcome
                you!
              </div>
            </div>
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
