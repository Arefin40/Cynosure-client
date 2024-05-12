import { useState } from "react";

export default function useVisibility(initialState = false) {
   const [isVisible, setIsVisible] = useState(initialState);

   const toggle = () => setIsVisible((prevState) => !prevState);
   const show = () => setIsVisible(true);
   const hide = () => setIsVisible(false);

   return { isVisible, setIsVisible, show, hide, toggle };
}
