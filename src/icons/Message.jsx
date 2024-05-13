export default ({ className = "w-[1.125rem] h-[1.125rem]" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} fill-current text-gray-800`}
      >
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 1.8A10.2 10.2 0 0 0 1.8 12v9.3a.9.9 0 0 0 .9.9H12a10.2 10.2 0 0 0 0-20.4zM0 12C0 5.372 5.372 0 12 0c6.626 0 12 5.372 12 12s-5.374 12-12 12H2.7A2.7 2.7 0 0 1 0 21.3z"
         />
         <path
            fill="#9ca3af"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.3 9.28a.9.9 0 0 1 .9-.9h9.6a.9.9 0 0 1 0 1.8H7.2a.9.9 0 0 1-.9-.9zm0 5.44a.9.9 0 0 1 .9-.9h5.41a.9.9 0 1 1 0 1.8H7.2a.9.9 0 0 1-.9-.9z"
         />
      </svg>
   );
};
