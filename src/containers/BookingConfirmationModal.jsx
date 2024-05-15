import { useState, useEffect } from "react";
import { useAuth } from "@contexts/AuthContext";
import { dateDifferenceInDays, formattedDate } from "@utils/DateTime";
import axios from "@hooks/axios";
import Modal from "@components/Modal";
import { useQuery } from "@tanstack/react-query";

const BookingConfirmationModal = ({
   isPatch = false,
   roomId,
   roomData,
   checkOutDate,
   checkInDate,
   onConfirmBooking,
   onCancel,
}) => {
   const { user } = useAuth();

   const fetchData = async () => {
      const { data } = await axios.get(`/rooms/${roomId}`);
      return data;
   };

   const { data: room, isLoading } = useQuery({
      queryKey: ["roomBookingData", roomId],
      queryFn: fetchData,
      initialData: roomData || {},
      enabled: !roomData,
      onError: (error) => console.error(error.message),
   });

   if (isLoading) {
      return <div>Loading...</div>;
   }

   const nights = dateDifferenceInDays(checkOutDate, checkInDate);
   const regularPrice = room.price * nights;
   let totalPrice = regularPrice;
   let discount = 0;
   let discountAmount = 0;

   if (room.specialOffer) {
      const { validFrom, validUntil, packages } = room.specialOffer;

      const validFromDate = new Date(validFrom);
      let date = new Date();
      date.setDate(date.getDate() + 60);
      const validUntilDate = validUntil !== "nil" ? new Date(validUntil) : date;

      if (checkInDate >= validFromDate && checkOutDate <= validUntilDate) {
         for (const _package of packages) {
            if (nights >= _package.conditions.nights) {
               discount = _package.discount;
               totalPrice = regularPrice * (1 - discount / 100);
               discountAmount = regularPrice - totalPrice;
            }
         }
      }
   }

   const onConfirm = () => {
      const bookingDetails = { checkInDate, checkOutDate, totalPrice };
      const roomDetails = {
         roomId,
         roomType: room.roomType,
         bookedBy: user.email,
      };
      onConfirmBooking(
         isPatch ? bookingDetails : { ...bookingDetails, ...roomDetails }
      );
   };

   return (
      <Modal
         title="Booking Confirmation"
         description="To reserve the room please confirm your booking"
         wrapperClass="px-0"
         className="text-gray-500 text-sm space-y-5"
         submitButtonLabel="Confirm Booking"
         onSubmit={onConfirm}
         onCancel={onCancel}
      >
         <h4 className="px-5 sm:px-6 py-2 bg-gray-100 flex gap-x-3 text-lg">
            <span>Room: </span>
            <span className="text-gray-800 font-semibold">{room.roomType}</span>
         </h4>

         <div className="px-5 sm:px-6 divide-y space-y-4">
            <div className="flex items-center gap-x-4 gap-y-3 justify-between flex-wrap">
               <div className="space-y-1">
                  <h2>Check-In</h2>
                  <time
                     dateTime={checkInDate}
                     className="block text-gray-800 font-semibold"
                  >
                     {formattedDate(checkInDate)}
                  </time>
               </div>

               <div className="space-y-1">
                  <h2>Check-Out</h2>
                  <time
                     dateTime={checkOutDate}
                     className="block text-gray-800 font-semibold"
                  >
                     {formattedDate(checkOutDate)}
                  </time>
               </div>

               <div className="space-y-1">
                  <h2>Reservation</h2>
                  <p className="block text-gray-800 font-semibold">
                     {nights} nights
                  </p>
               </div>
            </div>

            <div className="pt-4 grid gap-y-2">
               <div className="flex items-center justify-between">
                  <h2>Regular price</h2>
                  <p className="text-gray-800 font-semibold">${regularPrice}</p>
               </div>

               {discount > 0 && (
                  <div className="flex items-center justify-between">
                     <h2>
                        <span>Discount</span>
                        <span className="pl-2">({discount}%)</span>
                     </h2>
                     <p className="text-primary-500 font-semibold">
                        -${discountAmount}
                     </p>
                  </div>
               )}

               <div className="flex items-center justify-between">
                  <h2>Total price</h2>
                  <p className="text-gray-800 font-semibold">${totalPrice}</p>
               </div>
            </div>
         </div>
      </Modal>
   );
};
export default BookingConfirmationModal;
