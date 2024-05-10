import { positions, translates } from "@utils/properties";
import classNames from "@utils/classNames";
import Backdrop from "./Backdrop";

export default ({
   open = false,
   children,
   onClose,
   className = "top-16",
   position = "left",
   hideBackdrop = false,
   backdropClass = "top-16",
}) => {
   const drawerClasses = classNames({
      // Positional class based on the chosen position
      [positions[position]]: true,

      // If drawer is open, set translate-x to 0
      "translate-x-0": open,

      // If drawer is closed, apply translation based on the 'position'
      [translates[position]]: !open,

      // If position is left or right, apply these classes
      "w-full max-w-64 inset-y-0": position === "left" || position === "right",

      // If position is left or right, apply these classes
      "inset-x-0": position === "top" || position === "bottom",
   });

   return (
      <>
         {!hideBackdrop && (
            <Backdrop
               onClick={onClose}
               active={open}
               className={`${backdropClass} lg:hidden`}
            />
         )}

         <div
            className={`${drawerClasses} ${className} fixed bg-white z-50 lg:z-0 transform transition-all`}
         >
            {children}
         </div>
      </>
   );
};
