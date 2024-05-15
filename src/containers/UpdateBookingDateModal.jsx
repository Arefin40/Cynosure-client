import { useState } from "react";
import { DatePicker } from "@components/Form";
import Modal from "@components/Modal";
import BookingConfirmationModal from "@containers/BookingConfirmationModal";

const UpdateBookingDateModal = ({ data, onCancel, onSubmit }) => {
   const [checkInDate, setCheckInDate] = useState(new Date(data?.checkInDate));
   const [checkOutDate, setCheckOutDate] = useState(new Date(data?.checkOutDate));
   const [isModalOpen, setIsModalOpen] = useState(false);

   const getMinDate = (increamentBy) => {
      let minDate = new Date();
      minDate.setDate(minDate.getDate() + increamentBy);
      return minDate;
   };

   return (
      <>
         <Modal
            title="Reschedule Booking"
            description="Update check-in and check-out date"
            onSubmit={() => setIsModalOpen(true)}
            onCancel={onCancel}
         >
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
         </Modal>

         {isModalOpen && (
            <BookingConfirmationModal
               isPatch
               roomId={data.roomId}
               checkInDate={checkInDate}
               checkOutDate={checkOutDate}
               onConfirmBooking={onSubmit}
               onCancel={() => setIsModalOpen(false)}
            />
         )}
      </>
   );
};
export default UpdateBookingDateModal;
