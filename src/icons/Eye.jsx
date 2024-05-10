export default ({ className = "w-full h-full", open = true }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className={`${className} fill-current text-gray-500`}
      >
         <defs>
            <mask id="a" maskUnits="userSpaceOnUse">
               <path
                  fill="#fff"
                  d="M0 0v24h24V0zm20.707 2.453 2.121 2.123-16.97 16.971-2.122-2.123z"
               />
            </mask>
         </defs>
         <path
            fillRule="evenodd"
            d="M22.348 12.446a11.854 11.854 0 0 1-10.346 6.087 11.855 11.855 0 0 1-10.349-6.087.882.882 0 0 1 0-.891 11.855 11.855 0 0 1 10.349-6.087c4.29 0 8.255 2.332 10.346 6.087.164.291.164.6 0 .891zm1.336-1.635a13.382 13.382 0 0 0-11.682-6.873A13.384 13.384 0 0 0 .317 10.81a2.394 2.394 0 0 0 0 2.38 13.384 13.384 0 0 0 11.685 6.873c4.845 0 9.321-2.634 11.682-6.873a2.394 2.394 0 0 0 0-2.38zm-11.682 4.328A3.142 3.142 0 0 0 15.139 12a3.142 3.142 0 0 0-3.137-3.138A3.142 3.142 0 0 0 8.862 12a3.142 3.142 0 0 0 3.14 3.139zm0-7.807A4.674 4.674 0 0 0 7.332 12a4.673 4.673 0 0 0 4.67 4.669A4.673 4.673 0 0 0 16.669 12a4.674 4.674 0 0 0-4.667-4.67z"
            clipRule="evenodd"
            mask={open ? null : "url(#a)"}
         />
         {!open && (
            <path
               fill="none"
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeMiterlimit="0"
               strokeWidth="1.5"
               d="m19.955 4.045-15.91 15.91"
               className="stroke-current"
            />
         )}
      </svg>
   );
};
