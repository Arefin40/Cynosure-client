export default ({ className = "w-full h-full" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} stroke-current text-gray-400`}
      >
         <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="0"
            strokeWidth="1.8"
            d="M1.925 5.376s7.784 7.327 9.808 7.349c2.023.022 9.97-7.302 9.97-7.302M6.846 2.4h10.307A5.927 5.927 0 0 1 23.1 8.334v7.332a5.927 5.927 0 0 1-5.946 5.934H6.847A5.927 5.927 0 0 1 .9 15.666V8.334A5.927 5.927 0 0 1 6.847 2.4z"
         />
      </svg>
   );
};
