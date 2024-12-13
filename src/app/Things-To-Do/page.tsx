import Footer from "@/components/footer";
import Navbar from "@/components/navigationBar";
import ContactSection from "@/components/quickcontact";
import ReviewComponent from "@/components/reviewcomponent";
import Head from "next/head";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { MdHome } from "react-icons/md";
import ThingToDoCard from "./thing-to-do-card";
import { thingstodo } from "@/database/thingstodo";

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
                  src="https://i.imgur.com/BdjBPnO.jpg"
                  className="w-screen lg:h-screen h-[50vh] object-cover"
                  alt="Background"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-4xl font-bold drop-shadow-md mb-4">
                    Things to do
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
                    <span>Things to do</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center bg-cover bg-center">
            <div className="bg-white bg-opacity-75 p-5 rounded-lg  text-center">
              <div className="  text-3xl md:text-4xl lg:px-16 px-5 mb-5">
                <div className="font-semibold text-blue-600">
                  Things to do in Sri Lanka
                </div>
              </div>
              <div className="text-slate-600 px-5 lg:px-16 font-medium">
                Sri Lanka is a beautiful country with plenty to offer tourists.
                If you are looking for things to do in Sri Lanka (tourist
                attractions in Sri Lanka), you won t be disappointed. From
                sightseeing and wildlife spotting to adventure sports and
                culture, Sri Lanka has something for everyone. The best place to
                visit in Sri Lanka really depends on what you are looking for. If
                you are a nature lover, the rainforest and national parks are
                must-see. If you are after some history and culture, the ancient
                sites and temples are unmissable. And if you are looking for some
                excitement and adventure, the surfing, diving and hiking are
                top-notch. No matter what you choose, you are sure to have an
                amazing time in Sri Lanka.
              </div>
            </div>
          </div>

          <div>
            <div className="pt-2 columns-2 md:columns-3 lg:columns-3 mx-2">
              {thingstodo.map((thingtodo, index) => (
                <div key={index} className="relative mb-4 break-inside-avoid">
                  <ThingToDoCard
                    title={thingtodo.title}
                    imgUrl={thingtodo.imgUrl}
                    starscount={thingtodo.startscount} locationname={thingtodo.locationname}                />
                </div>
              ))}
            </div>
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
