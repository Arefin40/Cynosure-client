export default ({ className = "w-full h-full" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 36 36"
         className={`fill-current text-primary-500 ${className}`}
      >
         <g fillRule="evenodd">
            <path
               className="text-gray-800"
               d="M27.26 30.89a.27.27 0 0 0 .07.1A16 16 0 0 1 8.67 31a.23.23 0 0 0 .06-.1l1.47-3.68a6 6 0 0 1 5.58-3.78h4.43a6 6 0 0 1 5.57 3.77zm-4.4-17.46A4.86 4.86 0 1 1 18 8.57a4.86 4.86 0 0 1 4.86 4.86z"
            />
            <path d="M18 2A16 16 0 0 0 7.29 29.89l1.33-3.31a7.68 7.68 0 0 1 7.17-4.86h4.43a7.68 7.68 0 0 1 7.15 4.86l1.33 3.31A16 16 0 0 0 18 2zm0 18a6.57 6.57 0 1 1 6.57-6.57A6.57 6.57 0 0 1 18 20z" />
         </g>
      </svg>
   );
};
