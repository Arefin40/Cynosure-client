import { useNavigate } from "react-router-dom";
import { Cross } from "@icons";
import Modal from "@components/Modal";
import Button from "@components/Button";

const DiscountPopup = ({ onClose }) => {
   const navigate = useNavigate();

   return (
      <Modal
         wrapperClass="px-4 sm:px-5 bg-black/20 backdrop-blur-sm"
         className="relative p-4 sm:p-5 w-full max-w-96 md:max-w-2xl grid md:grid-cols-2 gap-x-5 gap-y-5 bg-white rounded-lg bg-percentage animate-scale-bounce"
      >
         <div className="w-full aspect-[3/2] md:aspect-[5/4] bg-primary-200 rounded-lg overflow-hidden border">
            <img
               src="https://i.ibb.co/1M829wK/junior-king.jpg"
               className="object-cover w-full h-full"
            />
         </div>

         <div className="grid content-center justify-center gap-y-4 text-center">
            <h1 className="text-3xl text-primary-500 font-bold font-serif">Upto 20% OFF</h1>

            <p className="leading-7">Enjoy offers</p>

            <Button
               color="primary"
               onClick={() => {
                  navigate("/rooms");
                  setIsModalOpen(false);
               }}
               className="px-6 justify-self-center uppercase text-sm"
            >
               Book Now
            </Button>
         </div>

         <button
            onClick={onClose}
            className="w-10 h-10 absolute -top-4 -right-4 flex items-center justify-center rounded-full shadow border border-gray-100 bg-white active:scale-90 transition-all"
         >
            <Cross className="w-3.5 h-3.5 text-gray-500" />
         </button>
      </Modal>
   );
};
export default DiscountPopup;
