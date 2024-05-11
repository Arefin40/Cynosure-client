export default ({ className = "", direction = "forward" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512"
         className={`${className} w-5 h-5 fill-current ${
            direction === "backward" ? "rotate-180" : ""
         }`}
      >
         <path d="M121.373 457.373 322.745 256 121.373 54.627a32 32 0 0 1 45.254-45.254l224 224a32 32 0 0 1 0 45.254l-224 224a32 32 0 0 1-45.254-45.254z" />
      </svg>
   );
};
