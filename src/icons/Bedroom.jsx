export default ({ className = "w-5 h-5" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} fill-current`}
      >
         <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.2"
            className="stroke-current"
            d="M4.86 21.823H2.021v-2.807h2.837zm14.28 0h2.838v-2.807H19.14zM14.411 6.855h3.31a.94.94 0 0 1 .946.936v2.806h-5.201V7.791a.94.94 0 0 1 .945-.936zm-4.823 0h-3.31a.94.94 0 0 0-.946.936v2.806h5.202V7.791a.94.94 0 0 0-.946-.936zm11.917 4.002v-6.34c0-1.292-1.059-2.34-2.365-2.34H4.86c-1.306 0-2.365 1.048-2.365 2.34v6.34m19.956 2.547H1.549v-.936c0-1.033.847-1.87 1.891-1.87h17.12c1.044 0 1.891.837 1.891 1.87zm.946 5.613H.604v-4.678a.94.94 0 0 1 .945-.935h20.902a.94.94 0 0 1 .946.935z"
         />
      </svg>
   );
};
