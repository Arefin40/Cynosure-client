import { useRef, useState, useEffect } from "react";

const useOutsideClickDetector = (callback, initialState = false) => {
   const targetRef = useRef(null);
   const [isVisible, setIsVisible] = useState(initialState);

   const toggleVisibility = () => setIsVisible((prev) => !prev);
   const show = () => setIsVisible(true);
   const hide = () => setIsVisible(false);

   const handleClickOutside = (e) => {
      if (targetRef?.current && !targetRef.current.contains(e.target)) {
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

   return { ref: targetRef, isVisible, show, hide, toggleVisibility };
};
export default useOutsideClickDetector;
