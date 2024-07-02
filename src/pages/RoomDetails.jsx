import axios, { useAxiosSecure } from "@hooks/axios";
import { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@contexts/AuthContext";
import { DatePicker } from "@components/Form";
import { Area, Love, Share } from "@icons";
import Button from "@components/Button";
import StarRating from "@containers/StarRating";
import ReviewSection from "@containers/ReviewSection";
import LoadingState from "@components/LoadingState";
import BookingConfirmationModal from "@containers/BookingConfirmationModal";
import toast from "react-hot-toast";

const RoomDetails = () => {
   document.title = "Cynosure  | Room Details";
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [checkInDate, setCheckInDate] = useState(null);
   const [checkOutDate, setCheckOutDate] = useState(null);
   const [images, setImages] = useState([]);
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   const { id } = useParams();
   const { data: room = {}, isLoading } = useQuery({
      queryFn: async () => {
         const { data } = await axios.get(`/rooms/${id}`, {
            withCredentials: true,
         });
         setImages(data?.images);
         return data;
      },
      queryKey: ["room", id],
   });

   if (isLoading) return <LoadingState />;

   const rotateBy = (index) => {
      if (images.length < 3) return;
      if (index === 0) setImages([images[0], images[1], images[2]]);
      else if (index === 1) setImages([images[1], images[2], images[0]]);
      else if (index === 2) setImages([images[2], images[0], images[1]]);
   };

   const getMinDate = (increamentBy) => {
      let minDate = new Date();
      minDate.setDate(minDate.getDate() + increamentBy);
      return minDate;
   };

   const handleReserve = () => {
      if (!user)
         return navigate("/login", {
            replace: true,
            state: location?.pathname,
         });
      setIsModalOpen(true);
   };

   const bookThisRoom = async (data) => {
      try {
         const res = await axiosSecure.post("/bookings", data);
         toast.success(res.data.message);
         setIsModalOpen(false);
         setCheckInDate(null);
         setCheckOutDate(null);
      } catch (error) {
         toast.error(err.response.data.message);
      }
   };

   return (
      <>
         <section className="container mt-4 lg:mt-8 space-y-5 md:space-y-8">
            <section className="w-full lg:h-[33.75rem] grid lg:grid-cols-[1fr_24rem] gap-2 sm:gap-4">
               <div
                  onClick={() => rotateBy(0)}
                  className="max-w-full max-h-full rounded-xl overflow-hidden"
               >
                  <img src={images[0]} className="w-full h-full object-cover" />
               </div>

               <div className="max-h-full grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-2 sm:gap-4 flex-shrink-0">
                  <div
                     onClick={() => rotateBy(1)}
                     className="rounded-xl w-full h-full overflow-hidden"
                  >
                     <img
                        src={images[1]}
                        className="w-full h-full object-cover aspect-video lg:aspect-auto"
                     />
                  </div>
                  <div
                     onClick={() => rotateBy(2)}
                     className="rounded-xl w-full h-full overflow-hidden"
                  >
                     <img
                        src={images[2]}
                        className="w-full h-full object-cover aspect-video lg:aspect-auto"
                     />
                  </div>
               </div>
            </section>

            <section className="grid gap-5 md:gap-8 md:grid-cols-[1fr_22rem] items-start">
               <div className="space-y-4">
                  {room?.specialOffer !== "nil" && (
                     <div className="p-4 rounded-lg bg-discount-pattern text-white uppercase">
                        <div className="flex gap-x-10 gap-y-1 justify-center flex-wrap">
                           {room.specialOffer.packages.map((_package, i) => (
                              <div key={i} className="flex items-center gap-x-2">
                                 <h2 className="text-lg font-bold">{_package.discount}% OFF</h2>
                                 <p>Stay {_package.conditions.nights} nights</p>
                              </div>
                           ))}
                        </div>
                     </div>
                  )}

                  <div className="flex items-center gap-5 justify-between flex-wrap">
                     <div className="space-y-4">
                        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                           {room?.roomType}
                        </h1>

                        <div className="flex items-center gap-x-5">
                           <div className="flex items-center gap-x-2 text-sm">
                              <StarRating rating={room?.rating} />
                              <span>({room?.totalReviews} reviews)</span>
                           </div>

                           <div className="flex items-center gap-x-2">
                              <Area />
                              <span>{room?.size} Sq.ft.</span>
                           </div>
                        </div>
                     </div>

                     <div className="flex items-center justify-center gap-x-2 flex-shrink-0">
                        <Button rounded variant="outlined" startIcon={<Love />}>
                           Save
                        </Button>
                        <Button rounded variant="outlined" startIcon={<Share />}>
                           Share
                        </Button>
                     </div>
                  </div>

                  <div className="mt-2 py-3 sm:py-4 flex items-center gap-x-12 text-sm sm:text-base font-semibold border-y">
                     <span>Status:</span>
                     <span className="text-gray-800">
                        {room?.bookingStatus === "available"
                           ? "Available for booking"
                           : "Currently under booking"}
                     </span>
                  </div>
               </div>

               <div className="p-4 grid gap-y-2 rounded-xl border shadow-sm">
                  <div className="mb-2 flex items-center gap-x-1">
                     <h2 className="text-2xl font-semibold text-gray-800">${room?.price}</h2>
                     <span>/ night</span>
                  </div>

                  <div className="grid grid-cols-[repeat(auto-fit,minmax(12rem,1fr))] items-center gap-2">
                     <DatePicker
                        label="Check-in"
                        name="checkInDate"
                        className="w-full"
                        value={checkInDate}
                        minDate={getMinDate(1)}
                        onChange={(date) => setCheckInDate(date)}
                     />
                     <DatePicker
                        label="Check-out"
                        name="checkOutDate"
                        className="w-full"
                        value={checkOutDate}
                        minDate={getMinDate(2)}
                        onChange={(date) => setCheckOutDate(date)}
                     />
                  </div>

                  <Button
                     color="primary"
                     onClick={handleReserve}
                     disabled={room?.bookingStatus !== "available" || !checkInDate || !checkOutDate}
                     className="w-full max-w-64 md:max-w-none justify-self-center"
                  >
                     Reserve
                  </Button>
               </div>
            </section>

            <section className="space-y-3 sm:space-y-4 leading-7">
               <h2 className="text-lg sm:text-xl text-gray-800 font-semibold sm:font-bold">
                  Description
               </h2>
               <p>{room?.description}</p>
            </section>

            <ReviewSection roomId={id} rating={room?.rating} totalReviews={room?.totalReviews} />
         </section>

         {isModalOpen && (
            <BookingConfirmationModal
               roomId={room._id}
               roomData={{
                  roomType: room.roomType,
                  price: room.price,
                  specialOffer: room.specialOffer,
               }}
               checkInDate={checkInDate}
               checkOutDate={checkOutDate}
               onConfirmBooking={bookThisRoom}
               onCancel={() => setIsModalOpen(false)}
            />
         )}
      </>
   );
};
export default RoomDetails;
