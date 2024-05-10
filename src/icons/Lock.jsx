export default ({ className = "w-5 h-5" }) => {
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
            d="M5.853 8.9h12.294a2.946 2.946 0 0 1 2.953 2.953v8.294a2.946 2.946 0 0 1-2.953 2.953H5.853A2.946 2.946 0 0 1 2.9 20.147v-8.294A2.946 2.946 0 0 1 5.853 8.9zM6.9 8V5.232C6.9 2.832 8.832.9 11.232.9v0h1.536c2.4 0 4.332 1.932 4.332 4.332V8"
         />
      </svg>
   );
};
