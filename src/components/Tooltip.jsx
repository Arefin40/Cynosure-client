import classNames from "@utils/classNames";
import { useEffect } from "react";
import { useRef } from "react";

export default ({
   title,
   children,
   className = "text-sm font-semibold px-3 py-2 bg-gray-100 text-gray-600 rounded-lg",
   delay = "delay-150",
   position = "top",
   onClick,
}) => {
   const ref = useRef();

   useEffect(() => {
      if (!ref.current.firstChild.classList.contains("peer"))
         ref.current.firstChild.classList.add("peer");
   });

   const tipClasses = classNames({
      "bottom-full mb-1.5": position === "top",
      "top-full mt-1.5": position === "bottom",
      "right-full mr-1.5": position === "left",
      "left-full ml-1.5": position === "right",
      "left-1/2 -translate-x-1/2": position === "top" || position === "bottom",
      "top-1/2 -translate-y-1/2": position === "left" || position === "right",
   });

   return (
      <div onClick={onClick} ref={ref} className="relative">
         {children}

         {title && (
            <span
               className={`invisible peer-hover:visible opacity-0 peer-hover:opacity-100 scale-0 peer-hover:scale-100 ${delay} absolute ${tipClasses} ${className} transform whitespace-nowrap z-10`}
            >
               {title}
            </span>
         )}
      </div>
   );
};
