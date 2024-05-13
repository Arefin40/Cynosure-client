import StarRating from "@containers/StarRating";

const Review = ({ children }) => {
   return (
      <>
         <div className="w-full h-full p-4 space-y-5 border shadow-sm rounded-xl">
            <div className="flex items-center justify-between gap-x-8 gap-y-5 flex-wrap">
               <div className="flex items-center gap-x-5">
                  <img
                     src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                     className="object-cover w-11 h-11 rounded-full flex-shrink-0"
                  />

                  <div className="grid content-center">
                     <h2 className="text-gray-800 font-semibold">
                        Customer name
                     </h2>
                     <time dateTime="" className="text-sm">
                        12 May 2024
                     </time>
                  </div>
               </div>

               <StarRating rating={4} />
            </div>

            <p className="leading-6">{children}</p>
         </div>
      </>
   );
};
export default Review;
