import Button from "@components/Button";
import Modal from "@components/Modal";
import { dateDifferenceInDays, formattedDate } from "@utils/DateTime";

const BookingConfirmationModal = ({
   isModalOpen,
   roomType,
   roomImage,
   roomPrice,
   checkOutDate,
   checkInDate,
   specialOffer,
   onConfirmBooking,
   onCancel,
}) => {
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
      onConfirmBooking(totalPrice);
   };

   return (
      <Modal
         isOpen={isModalOpen}
         className="pb-5 sm:pb-6 w-full max-w-lg grid gap-y-4 rounded-xl shadow-xl z-50 flex-shrink-0 bg-white animate-scale-in overflow-hidden text-gray-500 text-sm"
      >
         <img src={roomImage} className="w-full aspect-[2/1] object-cover" />

         <h2 className="text-gray-800 text-xl font-semibold text-center">
            Booking Confirmation
         </h2>

         <h4 className="block px-5 sm:px-6 py-2 bg-gray-100 text-gray-800 text-lg font-semibold">
            {roomType}
         </h4>

         <div className="px-5 sm:px-6 divide-y space-y-4">
            <div className="flex items-center gap-x-4 justify-between flex-wrap">
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

         <div className="mt-5 mx-auto w-full grid grid-cols-2 gap-x-2 max-w-80">
            <Button color="primary" onClick={onConfirm}>
               Confirm Booking
            </Button>
            <Button variant="outlined" onClick={onCancel}>
               Cancel
            </Button>
         </div>
      </Modal>
   );
};
export default BookingConfirmationModal;
