import Slider1 from "@/components/ImageCarousel";
import Destination from "@/components/destination";
import Footer from "@/components/footer";
import Navbar from "@/components/navigationBar";
import ReviewComponent from "@/components/reviewcomponent";
import Head from "next/head";
import TourPackage from "./Tour-Packages/tourpackageCard";
import { tourPackages } from "@/database/tourpackages";
import Link from "next/link";

export default function Home() {
  return (
    <div>
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
            {/* <BooleanToggle /> */}
          </nav>
          <Slider1 />
        </section>
        <section>
          <div className=" flex-1 mt-2 lg:flex">
            <div className=" basis-1/2">
              <div className=" text-3xl lg:px-16 px-5 font-semibold text-slate-800">
                {" "}
                Explore amazing Sri Lanka with Monkey Bird Travels
              </div>
              <div className=" text-slate-600 px-5 lg:px-16  font-medium p-3 text-justify">
                Imagine embarking on a journey through the enchanting landscapes
                of Sri Lanka where ancient temples whisper tales of history,
                Buddhist ruins stand as timeless guardians, and pristine beaches
                invite you to unwind in paradise. With Monkey Bird Travels –
                Private Driver in Sri Lanka, your adventure is transformed into
                an effortless, all-inclusive experience, allowing you to immerse
                yourself in the wonders of this beautiful island without a
                single worry. At Monkey Bird Travels, we believe every traveler
                is unique, which is why we offer tailor-made tour packages
                designed to suit your preferences. Whether you dream of a
                laid-back escape or a thrilling adventure, our expert team will
                craft the perfect itinerary to make your time in Sri Lanka truly
                unforgettable. Let us handle the details while you savor the
                magic of Sri Lanka. Choose Monkey Bird Travels – Private Driver
                in Sri Lanka for your next extraordinary getaway. Your adventure
                begins here.
              </div>
              <div className="text-blue-600 px-5 lg:px-16  font-medium p-3 flex-1 lg:flex text-center">
                <div>
                  <img src="https://i.imgur.com/c2DVMJA.png" />
                  <div className=" pt-6">Experienced Private Driver</div>
                </div>
                <div>
                  <img src="https://i.imgur.com/zvr4Pw7.png" />
                  <div>Different Destinations</div>
                </div>
                <div>
                  <img src="https://i.imgur.com/oOBh1qs.png" />
                  <div>Quick Response</div>
                </div>
              </div>
            </div>
            <div className=" basis-1/2">
              <img src="https://i.imgur.com/qB77Ode.jpg" />
            </div>
          </div>
        </section>
        <section className=" bg-green-50">
          <div className=" text-3xl lg:px-16 px-5 font-semibold text-white text-center p-3 bg-custom-primaryblue rounded-lg m-4">
            Our most popular Tour Packages
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full lg:w-[80vw] mx-auto p-5">
            {tourPackages.map((packageInfo) => (
              <Link
                href={`/Tour-Packages/${packageInfo.id}`}
                key={packageInfo.id}
              >
                <TourPackage id={packageInfo.id} />
              </Link>
            ))}
          </div>

          <div className=" text-3xl lg:px-16 px-5 font-semibold text-white text-center p-3 bg-custom-primaryblue rounded-lg m-4">
            Popular destinations
          </div>
          <div className="flex-1 lg:flex">
            <Destination
              title="Slit fisherman"
              imgUrl="https://i.imgur.com/Ypjeksa.jpg"
              key={1}
            />
            <Destination
              title="Jaffna"
              imgUrl="https://i.imgur.com/ERfq4i2.jpg"
              key={2}
            />

            <Destination
              title="Nuwara Eliya"
              imgUrl="https://i.imgur.com/UYrJ2L0.jpg"
              key={3}
            />

            <Destination
              title="Kandy"
              imgUrl="https://i.imgur.com/oke6pTe.jpg"
              key={4}
            />
          </div>
          <ReviewComponent />
        </section>

        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}
