import { forwardRef } from "react";
import classNames from "@utils/classNames";

export default forwardRef(
   (
      {
         label,
         name,
         defaultValue = "-",
         className = "grid gap-y-2",
         options,
         errors,
         onChange,
         onBlur,
      },
      ref
   ) => {
      const errorClass = classNames({
         "focus:ring-primary-100 focus:border-primary-500": !errors?.[name],
         "focus:ring-rose-100 border-rose-500 focus:border-rose-500":
            errors?.[name],
      });

      return (
         <div className={className}>
            <label
               htmlFor={name}
               className="text-sm font-semibold text-gray-900"
            >
               {label}
            </label>
            <select
               ref={ref}
               id={name}
               name={name}
               onChange={onChange}
               onBlur={onBlur}
               defaultValue={defaultValue}
               className={`p-3 h-[2.875rem] shadow-sm border-gray-300 text-sm text-gray-900 rounded-md border outline-none focus:ring-2 appearance-none placeholder-gray-500 ${errorClass}`}
            >
               <option value="-" disabled>
                  Select one
               </option>
               {options.map(({ label, value }) => (
                  <option key={value} value={value}>
                     {label}
                  </option>
               ))}
            </select>
            {errors?.[name] && (
               <span className="text-sm text-rose-500">
                  {errors[name].message}
               </span>
            )}
         </div>
      );
   }
);
