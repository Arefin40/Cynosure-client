import classNames from "@utils/classNames";
import { forwardRef } from "react";

export default forwardRef(
   (
      {
         name,
         label,
         type = "text",
         className = "",
         placeholder = "",
         value,
         errors,
         startIcon,
         endIcon,
         required = false,
         disabled = false,
         hideBorder = false,
         spellCheck,
         onChange,
         onBlur,
      },
      ref
   ) => {
      const inputClass = classNames({
         "pl-11": startIcon,
         "pl-3": !startIcon,
         "pr-11": endIcon,
         "pr-3": !endIcon,
         "focus:ring-primary-100 focus:border-primary-500": !errors?.[name],
         "focus:ring-rose-100 border-rose-500 focus:border-rose-500":
            errors?.[name],
         "shadow-sm border-gray-300": !hideBorder,
         "bg-transparent border-transparent": hideBorder,
      });

      return (
         <div className={className}>
            {label && (
               <label
                  htmlFor={name}
                  className="inline-block mb-2 text-sm font-semibold text-gray-900 "
               >
                  {label}
               </label>
            )}

            <div className="relative w-full">
               {startIcon && (
                  <div className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 flex items-center justify-center">
                     {startIcon}
                  </div>
               )}

               <input
                  ref={ref}
                  type={type}
                  id={name}
                  name={name}
                  value={value}
                  required={required}
                  disabled={disabled}
                  spellCheck={spellCheck}
                  placeholder={placeholder}
                  onChange={onChange}
                  onBlur={onBlur}
                  className={`block w-full py-3 ${inputClass} text-sm text-gray-900 rounded-md border outline-none focus:ring-2`}
               />

               {endIcon && (
                  <div className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center">
                     {endIcon}
                  </div>
               )}
            </div>

            {errors?.[name] && (
               <span className="text-sm text-rose-500">
                  {errors[name].message}
               </span>
            )}
         </div>
      );
   }
);
