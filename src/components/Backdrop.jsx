import classNames from "@utils/classNames";

export default ({ onClick, className, active = true }) => {
   const classes = classNames({
      // If active, make the overlay visible and fully opaque
      "visible opacity-100": active,

      // If not active, make the overlay invisible and fully transparent
      "invisible opacity-0": !active,
   });

   return (
      <div
         onClick={onClick}
         className={`fixed inset-x-0 inset-y-0 bg-black/50 ${className} ${classes} transition-all z-40`}
      />
   );
};
