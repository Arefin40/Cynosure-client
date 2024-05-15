import StarRating from "@containers/StarRating";
import { formattedDate } from "@utils/DateTime";

const Review = ({ review }) => {
   return (
      <>
         <div className="w-full h-full p-4 space-y-5 border shadow-sm rounded-xl">
            <div className="flex items-center justify-between gap-x-8 gap-y-5 flex-wrap">
               <div className="flex items-center gap-x-5">
                  <img
                     src={review?.user?.image}
                     className="object-cover w-11 h-11 rounded-full flex-shrink-0 border"
                  />

                  <div className="grid content-center">
                     <h2 className="text-gray-800 font-semibold">{review?.user?.name}</h2>
                     <time dateTime="" className="text-sm">
                        {review?.timestamp && formattedDate(review?.timestamp)}
                     </time>
                  </div>
               </div>

               <StarRating rating={review?.rating} />
            </div>

            <p className="leading-6">{review?.comment?.body}</p>
         </div>
      </>
   );
};
export default Review;
