import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({
   isOpen,
   children,
   wrapperClass = "p-4 sm:p-5",
   className = "",
   ...restProps
}) => {
   useEffect(() => {
      isOpen
         ? document.body.classList.add("overflow-hidden")
         : document.body.classList.remove("overflow-hidden");

      return () => {
         document.body.classList.remove("overflow-hidden");
      };
   }, [isOpen]);

   if (!isOpen) return null;

   return ReactDOM.createPortal(
      <div
         className={`${wrapperClass} fixed inset-0 z-50 flex items-center justify-center`}
      >
         <div className={className} {...restProps}>
            {children}
         </div>
      </div>,
      document.getElementById("modal-root")
   );
};

export default Modal;
