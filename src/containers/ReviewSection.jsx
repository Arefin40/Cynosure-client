import { useState } from "react";
import { Select } from "@components/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Arrow } from "@icons";
import Review from "@containers/Review";
import ReviewFormModal from "@containers/ReviewFormModal";

const ReviewSection = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

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
                  <h2 className="px-2 py-0.5 rounded bg-primary-500 text-white">
                     4.5
                  </h2>
                  <h4 className="text-gray-800">Very Good</h4>·
                  <p className="font-normal text-base space-x-1">
                     <span>Based on:</span>
                     <span className="text-gray-800 font-medium">
                        24 reviews
                     </span>
                  </p>
               </div>

               <div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
                  <button
                     onClick={() => setIsModalOpen(true)}
                     className="px-4 py-2 text-sm text-primary-500 bg-primary-50 rounded-full active:scale-90 transition-all"
                  >
                     Write a review
                  </button>

                  <Select
                     label="Sort by:"
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
                  <SwiperSlide className="h-auto">
                     <Review>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Tempora eum aliquid consectetur excepturi,
                        reiciendis quibusdam minus dolores doloribus aliquam
                        assumenda.
                     </Review>
                  </SwiperSlide>

                  <SwiperSlide className="h-auto">
                     <Review>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Tempora eum aliquid consectetur.
                     </Review>
                  </SwiperSlide>

                  <SwiperSlide className="h-auto">
                     <Review>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Tempora eum aliquid consectetur excepturi,
                        reiciendis quibusdam minus dolores doloribus aliquam
                        assumenda.
                     </Review>
                  </SwiperSlide>
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

         <ReviewFormModal
            isModalOpen={isModalOpen}
            onSubmit={(data) => console.log(data)}
            onCancel={() => setIsModalOpen(false)}
         />
      </>
   );
};

export default ReviewSection;
