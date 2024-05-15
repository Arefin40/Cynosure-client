import { forwardRef, createContext, useContext } from "react";

const RadioContext = createContext();

const Radio = ({ className = "flex items-center", withAppearance = false, children, ...props }) => {
   const { ref, name, value, onChange, onBlur } = useContext(RadioContext);

   return (
      <label className={className}>
         <input
            type="radio"
            ref={ref}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            defaultChecked={value === props.value}
            {...props}
            className={withAppearance ? "mr-1.5" : "appearance-none"}
         />
         {children}
      </label>
   );
};

const RadioGroup = forwardRef(
   (
      //prettier-ignore
      {  label, name, value, errors, onChange, onBlur, children, 
         className = "flex items-center gap-x-4",
      },
      ref
   ) => {
      return (
         <RadioContext.Provider value={{ ref, name, value, onChange, onBlur }}>
            <div className="grid gap-y-2">
               <div className="flex items-center gap-x-2">
                  {label && <label className="text-sm font-semibold text-gray-900">{label}</label>}

                  <div className={className}>{children}</div>
               </div>

               {errors?.[name] && (
                  <span className="text-sm text-rose-500">{errors[name].message}</span>
               )}
            </div>
         </RadioContext.Provider>
      );
   }
);

export { Radio, RadioGroup };
