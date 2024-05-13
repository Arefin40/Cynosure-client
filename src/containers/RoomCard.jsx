import { useState } from "react";
import { Link } from "react-router-dom";
import { Message } from "@icons";
import StarRating from "@containers/StarRating";
import ReviewFormModal from "@containers/ReviewFormModal";

const RoomCard = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <>
         <div className="isolate">
            <div className="relative">
               <Link to="/room">
                  <img
                     src="https://i.ibb.co/1M829wK/junior-king.jpg"
                     className="aspect-[3/2] sm:aspect-square lg:aspect-[3/2] object-cover rounded-xl border"
                  />
               </Link>

               <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-2 absolute bottom-2 left-1/2 -translate-x-1/2 text-sm flex items-center gap-x-2 bg-blur !bg-opacity-75 rounded-full whitespace-nowrap transition-all active:scale-90"
               >
                  <Message />
                  <span className="font-medium text-gray-800">Give review</span>
               </button>
            </div>

            <div className="mt-5 flex items-center gap-x-2">
               <Link to="/room">
                  <h1 className="text-lg font-semibold text-gray-800">
                     Superior King Suite
                  </h1>
               </Link>

               <h4 className="text-xs px-3 py-1 rounded-full bg-primary-200 text-gray-800 font-semibold backdrop-blur-md bg-opacity-30">
                  Unavailable
               </h4>
            </div>

            <div className="mt-1 flex items-center gap-x-2 text-sm">
               <StarRating rating={4} />
               <p>
                  (<span className="text-gray-800">24 reviews</span>)
               </p>
            </div>

            <div className="mt-3 flex gap-x-3 items-center">
               <span className="line-through font-medium">$720</span>

               <h4 className="flex gap-x-1 items-center">
                  <span className="text-lg font-semibold text-primary-500">
                     $580
                  </span>
                  <span>/ night</span>
               </h4>
            </div>
         </div>

         <ReviewFormModal
            isModalOpen={isModalOpen}
            onSubmit={(data) => console.log(data)}
            onCancel={() => setIsModalOpen(false)}
         />
      </>
   );
};
export default RoomCard;
