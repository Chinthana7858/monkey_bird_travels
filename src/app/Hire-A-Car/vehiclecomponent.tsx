interface VehicleProps {
    title: string;
    imgUrl: string;
    facts: string[];
  }
  
  export default function VehicleComponent({ title, imgUrl, facts }: VehicleProps) {
    return (
      <div className=" w-[80vw] mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex">
        <img src={imgUrl} alt={title} className="w-1/3 h-48 object-cover" />
        <div className="p-6 flex-1 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">{title}</h2>
          <ul className="mb-4 space-y-2">
            {facts.map((fact, index) => (
              <li key={index} className="text-gray-700">
                {fact}
              </li>
            ))}
          </ul>
        </div>
        
        <button className="py-2 px-4 bg-custom-primaryblue text-white font-semibold rounded-md shadow-sm hover:bg-custom-secondaryblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-primaryblue self-end">
            Book This
          </button>
      </div>
    );
  }