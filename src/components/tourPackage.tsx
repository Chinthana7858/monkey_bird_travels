// interface TourPackageProps {
//   id:string;
//     title: string;
//     imgUrl: string;
//     description: string;
//     numOfDays: string;
//     numOfNights: string;
//     season: string;
//   }
  
//   export default function TourPackage({
//     id,
//     title,
//     imgUrl,
//     description,
//     numOfDays,
//     numOfNights,
//     season,
//   }: TourPackageProps) {
//     return (
//       <div className="w-full border-2 border-white rounded-lg overflow-hidden flex flex-col xl:h-[70vh] lg:h-[50vh]">
//         <div className="h-1/2">
//           <img src={imgUrl} className="w-full h-full object-cover hover:scale-105" />
//         </div>
//         <div className="bg-white flex-1 rounded-b-lg flex flex-col justify-between">
//           <div>
//             <div className="text-yellow-900 font-semibold text-xl p-3">{title}</div>
//             <div className="text-slate-800 font-medium p-3">
//               {description}
//             </div>
//           </div>
//           <div className="text-white font-medium p-3 bg-red-950 flex justify-between">
//             <div>{`${numOfDays} days ${numOfNights} nights`}</div>
//             <div>{season}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  