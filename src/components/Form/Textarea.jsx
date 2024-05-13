import classNames from "@utils/classNames";
import { forwardRef } from "react";

export default forwardRef(
   (
      {
         label,
         name,
         value,
         errors,
         placeholder = "",
         rows = "6",
         required = false,
         disabled = false,
         spellCheck,
         onChange,
         onBlur,
      },
      ref
   ) => {
      const textareaClass = classNames({
         "focus:ring-primary-100 focus:border-primary-500": !errors?.[name],
         "focus:ring-rose-100 border-rose-500 focus:border-rose-500":
            errors?.[name],
      });

      return (
         <div>
            {label && (
               <label
                  htmlFor={name}
                  className="block mb-2 text-sm font-semibold text-gray-900 "
               >
                  {label}
               </label>
            )}

            <textarea
               ref={ref}
               id={name}
               name={name}
               rows={rows}
               required={required}
               disabled={disabled}
               value={value}
               placeholder={placeholder}
               spellCheck={spellCheck}
               onChange={onChange}
               onBlur={onBlur}
               className={`block p-3 w-full text-sm text-gray-900 rounded-md border border-gray-300 outline-none focus:ring-2 shadow-sm ${textareaClass}`}
            ></textarea>

            {errors?.[name] && (
               <span className="text-sm text-rose-500">
                  {errors[name].message}
               </span>
            )}
         </div>
      );
   }
);
