import { useRef, useEffect } from "react";
import useVisibility from "@hooks/useVisibility";

const useDropdown = (callback, initialState = false) => {
   const ref = useRef(null);
   const { isVisible, show, hide, toggle } = useVisibility(initialState);

   const handleClickOutside = (e) => {
      if (ref?.current && !ref.current.contains(e.target)) {
         hide();
         callback && callback();
      }
   };

   useEffect(() => {
      isVisible
         ? document.addEventListener("click", handleClickOutside, false)
         : document.removeEventListener("click", handleClickOutside, false);

      return () => {
         document.removeEventListener("click", handleClickOutside, false);
      };
   }, [isVisible]);

   return { ref, isVisible, show, hide, toggle };
};
export default useDropdown;
