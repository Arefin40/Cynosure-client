import DatePicker from "react-datepicker";
import classNames from "@utils/classNames";
import Calendar from "@icons/Calendar";

export default ({
   name,
   label,
   className = "",
   wrapperClassName = "",
   placeholder = "DD/MM/YYYY",
   dateFormat = "dd/MM/yyyy",
   value,
   errors,
   startIcon = <Calendar />,
   endIcon,
   hideBorder = false,
   onChange,
   ...restProps
}) => {
   const datePickerClass = classNames({
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
      <div className={wrapperClassName}>
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
               <div className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-3 flex items-center justify-center z-10">
                  {startIcon}
               </div>
            )}

            <DatePicker
               onChange={onChange}
               placeholderText={placeholder}
               selected={value}
               dateFormat={dateFormat}
               wrapperClassName={className}
               {...restProps}
               className={`block w-full py-3 ${datePickerClass} text-sm text-gray-900 rounded-md border outline-none focus:ring-2`}
            />

            {endIcon && (
               <div className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-3 flex items-center justify-center">
                  {endIcon}
               </div>
            )}
         </div>
      </div>
   );
};
