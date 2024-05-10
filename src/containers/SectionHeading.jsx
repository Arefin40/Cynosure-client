const SectionHeading = ({ title, children }) => {
   return (
      <div className="mx-auto mt-32 mb-16 sm:mt-40 sm:mb-20 max-w-2xl lg:max-w-none text-center">
         <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            {title}
         </h1>
         <p className="mt-2 text-lg leading-8">{children}</p>
      </div>
   );
};
export default SectionHeading;
