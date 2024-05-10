import { forwardRef } from "react";

const CheckboxIcon = ({ className = "", animated = false }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`checkmark-icon w-4 h-4 text-primary-500 fill-current ${className}`}
      >
         <g
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="0"
            strokeWidth="1.8"
         >
            <path
               className="text-gray-400"
               d="M4 0a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm0 1.8h16c1.206 0 2.2.994 2.2 2.2v16a2.21 2.21 0 0 1-2.2 2.2H4A2.21 2.21 0 0 1 1.8 20V4c0-1.206.994-2.2 2.2-2.2z"
            />

            <path
               className={`${
                  animated ? "checkmark-fill-animated" : "checkmark-fill"
               } origin-center transform scale-0`}
               d="M4 0a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8z"
            />

            <path
               fill="none"
               stroke="#fff"
               strokeDasharray={animated ? "13.987278938293457" : null}
               strokeDashoffset={animated ? "13.987278938293457" : null}
               d="m7.054 11.965 3.321 3.32 6.57-6.57"
               className={
                  animated ? "checkmark-tick-animated" : "checkmark-tick"
               }
            />
         </g>
      </svg>
   );
};

export default forwardRef(
   (
      {
         name,
         children,
         onChange,
         onBlur,
         disabled,
         errors,
         animated = false,
         className = "font-semibold text-gray-900",
      },
      ref
   ) => {
      return (
         <div className="checkbox grid gap-y-2">
            <label
               className={`text-sm leading-6 flex items-center select-none ${className}`}
            >
               <input
                  type="checkbox"
                  ref={ref}
                  id={name}
                  name={name}
                  disabled={disabled}
                  onChange={onChange}
                  onBlur={onBlur}
                  className="appearance-none checkbox"
               />
               <CheckboxIcon animated={animated} className="mr-2" />
               {children}
            </label>

            {errors?.[name] && (
               <span className="text-sm text-rose-500">
                  {errors[name].message}
               </span>
            )}
         </div>
      );
   }
);
