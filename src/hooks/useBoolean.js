import { useState } from "react";

export default function useBoolean(defaultState = false) {
   const [active, setActive] = useState(defaultState);

   const toggle = () => setActive((prev) => !prev);
   const open = () => setActive(true);
   const close = () => setActive(false);

   return { active, setActive, open, close, toggle };
}
