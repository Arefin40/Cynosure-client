import Button from "@components/Button";
import Modal from "@components/Modal";
import { useAuth } from "@contexts/AuthContext";
import { dateDifferenceInDays, formattedDate } from "@utils/DateTime";

const BookingConfirmationModal = ({
   isModalOpen,
   roomId,
   roomType,
   roomImage,
   roomPrice,
   checkOutDate,
   checkInDate,
   specialOffer,
   onConfirmBooking,
   onCancel,
}) => {
   const { user } = useAuth();
   const nights = dateDifferenceInDays(checkOutDate, checkInDate);

   const regularPrice = roomPrice * nights;
   let totalPrice = regularPrice;
   let discount = 0;
   let discountAmount = 0;

   if (specialOffer) {
      const { validFrom, validUntil, packages } = specialOffer;

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
      onConfirmBooking({
         roomId,
         bookedBy: user.email,
         checkInDate,
         checkOutDate,
         totalPrice,
      });
   };

   return (
      <Modal
         isOpen={isModalOpen}
         className="py-5 sm:py-6 w-full max-w-lg grid gap-y-4 rounded-xl shadow-xl z-50 flex-shrink-0 bg-white animate-scale-in overflow-hidden text-gray-500 text-sm border"
      >
         <div className="space-y-1 text-center">
            <h1 className="text-xl text-gray-800 font-semibold">
               Booking Confirmation
            </h1>
            <p>To reserve the room please confirm your booking</p>
         </div>

         <h4 className="px-5 sm:px-6 py-2 bg-gray-100 flex gap-x-3 text-lg">
            <span>Room: </span>
            <span className="text-gray-800 font-semibold">{roomType}</span>
         </h4>

         <div className="px-5 sm:px-6 divide-y space-y-4">
            <div className="flex items-center gap-x-4 gap-y-3 justify-between flex-wrap">
               <div className="space-y-1">
                  <h2>Check-In</h2>
                  <time className="block text-gray-800 font-semibold">
                     {formattedDate(checkInDate)}
                  </time>
               </div>

               <div className="space-y-1">
                  <h2>Check-Out</h2>
                  <time className="block text-gray-800 font-semibold">
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

         <div className="px-5 mt-5 mx-auto max-w-96 w-full flex flex-wrap justify-center gap-2">
            <Button color="primary" onClick={onConfirm} className="w-40">
               Confirm Booking
            </Button>
            <Button variant="outlined" onClick={onCancel} className="w-40">
               Cancel
            </Button>
         </div>
      </Modal>
   );
};
export default BookingConfirmationModal;
