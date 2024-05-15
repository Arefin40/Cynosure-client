import { useState } from "react";
import { Link } from "react-router-dom";
import { Message } from "@icons";
import StarRating from "@containers/StarRating";
import ReviewFormModal from "@containers/ReviewFormModal";
import Star from "@icons/Star";

const RoomCard = ({ room }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <>
         <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="isolate">
            <div className="relative">
               <Link to={`/rooms/${room?._id}`}>
                  <img
                     src={room?.images[0]}
                     className="aspect-[3/2] sm:aspect-square lg:aspect-[3/2] object-cover rounded-xl border"
                  />
               </Link>

               {/* <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-2 absolute bottom-2 left-1/2 -translate-x-1/2 text-sm flex items-center gap-x-2 bg-blur !bg-opacity-75 rounded-full whitespace-nowrap transition-all active:scale-90"
               >
                  <Message />
                  <span className="font-medium text-gray-800">Give review</span>
               </button> */}
            </div>

            <div className="mt-5 flex justify-between gap-x-2 flex-wrap">
               <div className="grid gap-y-1">
                  <div className="flex items-center gap-x-2">
                     <Link to={`/rooms/${room?._id}`}>
                        <h1 className="text-lg font-semibold text-gray-800">{room?.roomType}</h1>
                     </Link>

                     {room?.specialOffer !== "nil" && (
                        <div className="px-2 py-1 flex items-center gap-x-1 rounded bg-primary-500 text-white text-xs">
                           <Star className="w-3 h-3" />
                           Best Deal
                        </div>
                     )}
                  </div>

                  <div className="flex items-center gap-x-2 text-sm">
                     <StarRating rating={room?.rating} />
                     <h4 className="text-gray-800">{room?.totalReviews} reviews</h4>
                  </div>
               </div>

               <div className="grid content-center">
                  <h4 className="flex gap-x-1 items-center">
                     <span className="text-lg font-semibold text-primary-500">${room?.price}</span>
                     <span>/ night</span>
                  </h4>

                  {room?.bookingId !== "nil" && (
                     <h4 className="text-sm text-primary-500 text-center font-semibold">
                        Not Available
                     </h4>
                  )}
               </div>
            </div>
         </div>

         {isModalOpen && (
            <ReviewFormModal
               onSubmit={(data) => console.log(data)}
               onCancel={() => setIsModalOpen(false)}
            />
         )}
      </>
   );
};
export default RoomCard;
