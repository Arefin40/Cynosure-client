import { useEffect } from "react";
import ReactDOM from "react-dom";

const DiscountPopup = ({ children, offset = "p-4 sm:p-5", className = "" }) => {
   useEffect(() => {
      document.body.classList.add("overflow-hidden");
      return () => {
         document.body.classList.remove("overflow-hidden");
      };
   }, []);

   return ReactDOM.createPortal(
      <div className={`${offset} fixed inset-0 z-50 flex items-center justify-center`}>
         <div className={className}>{children}</div>
      </div>,
      document.getElementById("modal-root")
   );
};

export default DiscountPopup;
