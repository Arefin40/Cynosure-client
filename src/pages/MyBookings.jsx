import toast from "react-hot-toast";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@contexts/AuthContext";
import { useAxiosSecure } from "@hooks/axios";
import { formattedDate } from "@utils/DateTime";
import { Edit, Cross } from "@icons";
import classNames from "@utils/classNames";
import ReviewFormModal from "@containers/ReviewFormModal";
import UpdateBookingDateModal from "@containers/UpdateBookingDateModal";
import LoadingState from "@components/LoadingState";
import Modal from "@components/Modal";

const ActionButton = ({ icon, onClick }) => {
   return (
      <button
         onClick={onClick}
         className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition-all active:scale-90"
      >
         {icon}
      </button>
   );
};

const Cell = ({ children, centered = false }) => {
   const cellClasses = classNames({
      "justify-center": centered,
   });
   return <p className={`flex items-center ${cellClasses}`}>{children}</p>;
};

const Status = ({ status = "" }) => {
   const statusClasses = classNames({
      "bg-rose-100 text-rose-500": status === "cancelled",
      "bg-blue-100 text-blue-500": status === "running",
      "bg-emerald-100 text-emerald-500": status === "completed",
   });
   return (
      <Cell centered>
         <span className={`px-3 py-1 rounded-full text-xs ${statusClasses}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
         </span>
      </Cell>
   );
};

const MyBookings = () => {
   const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
   const [isRescheduleModalOpen, setIsRescheduleModalOpen] = useState(false);
   const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
   const [selection, setSelection] = useState(null);

   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();

   let { data: bookings = [], isLoading } = useQuery({
      queryFn: () => axiosSecure.get(`/bookings/${user.email}`).then((res) => res.data),
      queryKey: ["bookings", user],
   });

   const handleReschedule = (booking) => {
      setSelection(booking);
      setIsRescheduleModalOpen(true);
   };
   const handleCancel = (booking) => {
      setSelection(booking);
      setIsCancelModalOpen(true);
   };
   const handleReview = (booking) => {
      setSelection(booking);
      setIsReviewModalOpen(true);
   };

   const cancelBooking = async () => {
      try {
         const res = await axiosSecure.delete(`/bookings/${selection._id}`);
         toast.success(res.data.message);
         setIsCancelModalOpen(true);
      } catch (error) {
         toast.error(err.response.data.message);
      }
   };

   const updateBooking = async (data) => {
      try {
         const res = await axiosSecure.patch(`/booking/${selection._id}`, data);
         toast.success(res.data.message);
      } catch (error) {
         toast.error(error.response.data.message);
      }
   };

   const postReview = async (data) => {
      try {
         const res = await axiosSecure.post("/reviews", {
            userId: user.email,
            roomId: selection.roomId,
            bookingId: selection._id,
            ...data,
         });
         toast.success(res.data.message);
      } catch (error) {
         toast.error(error.response.data.message);
      }
   };

   if (isLoading) return <LoadingState />;

   return (
      <>
         <section className="mt-4 lg:mt-8 container space-y-8">
            <h2 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-gray-800">
               My Bookings
            </h2>

            <section className="shadow-sm text-sm border rounded-xl overflow-x-auto">
               <header className="px-5 py-4 bg-gray-100 text-gray-800 grid grid-cols-table gap-x-4 font-semibold rounded-t-xl justify-between">
                  <p>Room Type</p>
                  <p className="text-center">Check-In</p>
                  <p className="text-center">Check-Out</p>
                  <p className="text-center">Total Price</p>
                  <p className="text-center">Status</p>
                  <p className="text-center">Actions</p>
               </header>

               <main className="rounded-b-xl divide-y">
                  {bookings.map((booking, i) => (
                     <div key={i} className="px-5 py-3 grid grid-cols-table gap-x-4 font-semibold">
                        <Cell>{booking.roomType}</Cell>
                        <Cell centered>{formattedDate(booking.checkInDate)}</Cell>
                        <Cell centered>{formattedDate(booking.checkOutDate)}</Cell>
                        <Cell centered>${booking.totalPrice}</Cell>
                        <Status status="completed" />

                        <div className="flex justify-end gap-x-2">
                           <ActionButton
                              icon={<Edit />}
                              onClick={() => handleReschedule(booking)}
                           />
                           <ActionButton
                              icon={<Cross className="w-3 h-3" />}
                              onClick={() => handleCancel(booking)}
                           />
                           <button
                              onClick={() => handleReview(booking)}
                              className="px-3 h-9 rounded-full text-xs bg-gray-100 hover:bg-gray-200 active:scale-90 transition-all"
                           >
                              Write a review
                           </button>
                        </div>
                     </div>
                  ))}
               </main>
            </section>
         </section>

         {isCancelModalOpen && (
            <Modal
               title="Are you sure?"
               submitButtonLabel="Confirm Cancel"
               cancelButtonLabel="Don't Cancel"
               onSubmit={cancelBooking}
               onCancel={() => setIsCancelModalOpen(false)}
               description="This action is permanent and cannot be undone."
            />
         )}

         {isReviewModalOpen && (
            <ReviewFormModal onSubmit={postReview} onCancel={() => setIsReviewModalOpen(false)} />
         )}

         {isRescheduleModalOpen && (
            <UpdateBookingDateModal
               data={selection}
               onSubmit={updateBooking}
               onCancel={() => setIsRescheduleModalOpen(false)}
            />
         )}
      </>
   );
};
export default MyBookings;
