const SectionHeading = ({ title, children, className = "text-center" }) => {
   return (
      <div
         className={`mx-auto mb-16 sm:mb-20 max-w-2xl lg:max-w-none ${className}`}
      >
         <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            {title}
         </h1>
         <p className="mt-3 text-lg leading-8">{children}</p>
      </div>
   );
};
export default SectionHeading;
