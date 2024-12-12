import { FaHandPointRight } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

interface VehicleProps {
  title: string;
  imgUrl: string;
  facts: string[];
}

export default function VehicleComponent({
  title,
  imgUrl,
  facts,
}: VehicleProps) {
  return (
    <div className=" w-[80vw] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex-1 lg:flex m-8">
      <img
        src={imgUrl}
        alt={title}
        className=" w-full lg:w-1/2 basis-1/2 object-cover"
      />
      <div className="p-6 flex-1 flex flex-col justify-center basis-1/2">
        <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
          {title}
        </h2>
        <ul className="mb-4 space-y-2">
          {facts.map((fact, index) => (
            <li key={index} className="text-gray-700 flex">
              <TbPointFilled size={25} /> {fact}
            </li>
          ))}
        </ul>
      </div>
   /
    </div>
  );
}
