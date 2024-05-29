interface DriverProps {
  name: string;
  imgUrl: string;
  description: string;
}

export default function Driver({ name, imgUrl, description }: DriverProps) {
  return (
    <div className="w-full border-2 border-white rounded-lg overflow-hidden flex flex-col xl:h-[70vh] lg:h-[50vh] shadow-2xl">
      <div className="h-2/3">
        <img
          src={imgUrl}
          className="w-full h-full object-cover hover:scale-105"
        />
      </div>
      <div className="bg-white flex-1 rounded-b-lg flex flex-col justify-between">
        <div>
          <div className="text-yellow-900 font-semibold text-xl p-3">
            {name}
          </div>
          <div className="text-slate-800 font-semibold p-3">{description}</div>
        </div>
        <div className="text-white font-medium p-3 bg-green-600 flex justify-between"></div>
      </div>
    </div>
  );
}
