import axios from "@hooks/axios";
import { useQuery } from "@tanstack/react-query";
import { Select } from "@components/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Arrow } from "@icons";
import Review from "@containers/Review";

const ReviewSection = ({ rating = 0, totalReviews = 0, roomId }) => {
   const { data: reviews = [], isLoadingReviews } = useQuery({
      queryKey: ["reviews", roomId],
      queryFn: async () => {
         const { data } = await axios.get(`/reviews/${roomId}`);
         return data;
      },
   });

   let remark = "";

   if (reviews.length === 0) remark = "No reviews";
   else if (rating < 1) remark = "Very Bad";
   else if (rating < 2) remark = "Not Good";
   else if (rating < 3) remark = "Average";
   else if (rating < 3) remark = "Good";
   else if (rating >= 4) remark = "Very Good";

   return (
      <>
         <section className="mt-5 space-y-3 sm:space-y-4 leading-7">
            <div className="space-y-0.5">
               <h2 className="text-lg sm:text-xl text-gray-800 font-semibold sm:font-bold">
                  Guest reviews
               </h2>

               <p>See what guests loved the most</p>
            </div>

            <div className="flex items-center justify-between gap-y-4 flex-wrap">
               <div className="flex items-center gap-x-2 font-semibold text-lg">
                  <h2 className="px-2 py-0.5 rounded bg-primary-500 text-white">{rating}</h2>
                  <h4 className="text-gray-800">{remark}</h4>·
                  <p className="font-normal text-base space-x-1">
                     <span>Based on:</span>
                     <span className="text-gray-800 font-medium">{totalReviews} reviews</span>
                  </p>
               </div>

               <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                  <Select
                     label="Sort by:"
                     name="reviewSortBy"
                     className="flex items-center gap-x-2"
                     defaultValue="timestamp"
                     options={[
                        { label: "Timestamp", value: "timestamp" },
                        { label: "Rating", value: "rating" },
                     ]}
                  />
               </div>
            </div>

            <div className="relative space-y-2 w-full">
               <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  spaceBetween={16}
                  breakpoints={{
                     1280: { slidesPerView: 3 },
                     768: { slidesPerView: 2 },
                  }}
                  navigation={{
                     nextEl: ".review-slide-next",
                     prevEl: ".review-slide-prev",
                  }}
               >
                  {!isLoadingReviews && reviews.length > 0 ? (
                     <>
                        {reviews.map((review, i) => (
                           <SwiperSlide key={i} className="h-auto">
                              <Review review={review}>{review.comment.body}</Review>
                           </SwiperSlide>
                        ))}
                     </>
                  ) : (
                     Array.from({ length: 3 }).map((_, i) => (
                        <SwiperSlide key={i} className="grid gap-y-2">
                           <header className="h-6 w-4/5 bg-gray-100 rounded justify-self-start" />
                           <main className="h-32 w-full bg-gray-100 rounded" />
                        </SwiperSlide>
                     ))
                  )}
               </Swiper>

               <div className="w-full flex items-center justify-center gap-x-5">
                  <button className="review-slide-prev w-10 h-10 lg:w-12 lg:h-12 rounded-full flex-shrink-0 flex items-center justify-center transform active:scale-90 transition-all bg-white shadow-md border border-gray-100 text-primary-400">
                     <Arrow direction="backward" />
                  </button>

                  <button className="review-slide-next w-10 h-10 lg:w-12 lg:h-12 rounded-full flex-shrink-0 flex items-center justify-center transform active:scale-90 transition-all bg-white shadow-md border border-gray-100 text-primary-400">
                     <Arrow direction="forward" />
                  </button>
               </div>
            </div>
         </section>
      </>
   );
};

export default ReviewSection;
