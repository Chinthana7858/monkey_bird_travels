interface AirportTransferProps {
    title: string;
    description: string;
    image: string;
  }
  
  export default function AirportTransferComponent({
    title,
    description,
    image,
  }: AirportTransferProps) {
    return (
      <div className="w-[90vw] lg:w-[15vw] h-auto text-slate-800 border-custom-primaryblue border-2 rounded-xl overflow-hidden shadow-lg mx-auto my-4 flex-1 ">
        <div className="">
          <img src={image} alt={title} className="rounded-t-xl scale-75" />
        </div>
        <div className="p-4">
          <h1 className="text-lg font-semibold mb-2 text-custom-primaryblue ">
            {title}
          </h1>
          <p className="text-base font-medium">{description}</p>
        </div>
        <div className=" w-full py-2 bg-custom-primaryblue"></div>
      </div>
    );
  }
  