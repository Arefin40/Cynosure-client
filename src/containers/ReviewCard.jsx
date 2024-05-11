import StarRating from "@containers/StarRating";

const ReviewCard = ({
   children,
   customerName,
   customerPhotoUrl,
   rating,
   timestamp,
}) => {
   return (
      <div className="grid gap-y-6 grid-rows-[auto,1fr,auto]">
         <StarRating
            rating={rating}
            starClass="w-4 h-4"
            className="gap-x-1.5"
         />

         <p className="leading-8">{children}</p>

         <div className="flex items-center gap-x-4">
            <img
               src={customerPhotoUrl}
               className="w-12 h-12 rounded-full border"
            />

            <div>
               <h2 className="text-gray-800 font-semibold">{customerName}</h2>
               <time dateTime="" className="text-sm">
                  {timestamp}
               </time>
            </div>
         </div>
      </div>
   );
};
export default ReviewCard;
