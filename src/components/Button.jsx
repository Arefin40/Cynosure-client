import { Link } from "react-router-dom";
import classNames from "@utils/classNames";
import {
   colors,
   hoverColors,
   deepHoverColors,
   borderColors,
   textColors,
} from "@utils/properties";

export default ({
   type = "button",
   size = "medium", // small, medium, large
   variant = "contained", // text, outlined, contained
   className = "",
   color = "standard",
   to,
   disabled,
   children,
   startIcon,
   endIcon,
   rounded,
   onClick,
}) => {
   const classes = classNames({
      // Apply padding classes based on size
      "px-3.5 py-1 sm:py-1.5 gap-x-1": size === "small",
      "px-3.5 py-2 sm:py-2.5 gap-x-2": size === "medium",
      "px-3.5 py-3 sm:py-[3.5] gap-x-2": size === "large",

      // Apply rounded corners based on rounded prop
      "rounded-lg": !rounded, // Normal rounded corners
      "rounded-full": rounded, // Fully rounded corners

      // Styles for ghost button and text button variants
      [textColors[color] + " " + hoverColors[color]]:
         color in colors && variant === "text",

      // Styles for outlined button variant
      "border-transparent": variant !== "outlined",
      [`${borderColors[color]} ${hoverColors[color]}`]:
         color in colors && variant === "outlined",

      // Styles for contained button variant
      [colors[color] + " " + deepHoverColors[color]]:
         color in colors && variant === "contained",

      // If corresponding color theme doesn't exist, apply the class directly
      [color]: true,
   });

   return to ? (
      <Link
         to={to}
         className={`${classes} ${className} min-w-16 flex items-center justify-center font-medium border active:scale-95 transition-all leading-normal group`}
      >
         {startIcon}
         <span>{children}</span>
         {endIcon}
      </Link>
   ) : (
      <button
         type={type}
         onClick={onClick}
         disabled={disabled}
         className={`${classes} ${className} min-w-16 flex items-center justify-center font-medium border active:scale-95 transition-all leading-normal group`}
      >
         {startIcon}
         <span>{children}</span>
         {endIcon}
      </button>
   );
};
