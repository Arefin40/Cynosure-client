import { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Modal = ({
   title = "",
   description = "",
   children,
   offset = "p-4 sm:p-5",
   wrapperClass = "px-5 sm:px-6",
   className = "",
   submitButtonLabel = "Submit",
   cancelButtonLabel = "Cancel",
   onSubmit,
   onCancel,
}) => {
   useEffect(() => {
      document.body.classList.add("overflow-hidden");
      return () => {
         document.body.classList.remove("overflow-hidden");
      };
   }, []);

   return ReactDOM.createPortal(
      <div className={`${offset} fixed inset-0 z-50 flex items-center justify-center`}>
         <div
            className={`py-5 sm:py-6 space-y-6 w-full max-w-[28.75rem] rounded-xl shadow-xl z-50 border flex-shrink-0 bg-white animate-scale-in ${wrapperClass}`}
         >
            <div className="px-5 space-y-1 text-center">
               <h1 className="text-xl text-gray-800 font-semibold">{title}</h1>
               <p>{description}</p>
            </div>

            <div className={className}>{children}</div>

            <div className="px-5 mt-5 w-full mx-auto sm:max-w-[23rem] grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-2">
               <Button onClick={onSubmit} type="submit" color="primary">
                  {submitButtonLabel}
               </Button>
               <Button onClick={onCancel} variant="outlined">
                  {cancelButtonLabel}
               </Button>
            </div>
         </div>
      </div>,
      document.getElementById("modal-root")
   );
};

export default Modal;
