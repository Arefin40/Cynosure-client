import axios from "@hooks/axios";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Input } from "@components/Form";
import { Arrow } from "@icons";
import Button from "@components/Button";
import FeaturedRoom from "@containers/FeaturedRoom";
import MapView from "@containers/MapView";
import Review from "@containers/Review";
import SectionHeading from "@containers/SectionHeading";
import toast from "react-hot-toast";
import DiscountPopup from "@components/DiscountPopup";
import { useState } from "react";

const Homepage = () => {
   document.title = "Cynosure";
   const promotionNotShowed = localStorage.getItem("is-promotion-shown") === "no";
   const [show, setShow] = useState(promotionNotShowed);

   const { data, isLoading } = useQuery({
      queryKey: ["home"],
      queryFn: async () => {
         const { data } = await axios.get("/");
         return data;
      },
   });

   return (
      <>
         <section className="relative mb-16 sm:mb-24 select-none overflow-hidden">
            <Swiper
               modules={[Autoplay, Navigation]}
               loop
               autoplay={{ delay: 5000 }}
               speed={700}
               navigation={{
                  nextEl: ".hero-slide-next",
                  prevEl: ".hero-slide-prev",
               }}
               className="w-full aspect-[16/14] sm:aspect-[16/8]"
            >
               <SwiperSlide>
                  <img
                     src="https://i.ibb.co/XzpmbmC/hero-1.jpg"
                     className="w-full h-full object-cover object-bottom"
                  />
               </SwiperSlide>

               <SwiperSlide>
                  <img
                     src="https://i.ibb.co/4RyS8RQ/hero-2.jpg"
                     className="w-full h-full object-cover object-bottom"
                  />
               </SwiperSlide>

               <SwiperSlide>
                  <img
                     src="https://i.ibb.co/BtSC3K3/hero-3.jpg"
                     className="w-full h-full object-cover object-bottom"
                  />
               </SwiperSlide>
            </Swiper>

            <div className="px-4 w-full absolute top-1/2 flex items-center justify-between gap-x-5 -translate-y-1/2 z-20">
               <button className="hero-slide-prev w-11 h-11 lg:w-14 lg:h-14 rounded-full flex-shrink-0 flex items-center justify-center transform active:scale-90 transition-all bg-blur !bg-opacity-30 text-primary-400">
                  <Arrow direction="backward" />
               </button>

               <button className="hero-slide-next w-11 h-11 lg:w-14 lg:h-14 rounded-full flex-shrink-0 flex items-center justify-center transform active:scale-90 transition-all bg-blur !bg-opacity-30 text-primary-400">
                  <Arrow direction="forward" />
               </button>
            </div>
         </section>

         {!isLoading && (
            <section className="container space-y-32 sm:space-y-40">
               <section
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="grid lg:grid-cols-2 gap-x-16 gap-y-10 items-center"
               >
                  <div>
                     <h4 className="text-gray-800 font-medium">Discover</h4>

                     <h1 className="mt-3 mb-5 text-3xl sm:text-4xl text-gray-800 font-extrabold leading-snug">
                        Explore Our Hotel and Nearby Attractions
                     </h1>

                     <p className="mb-8 leading-8">
                        Immerse yourself in the beauty of our hotel and discover the wonders of the
                        surrounding area. With our interactive map, you can easily explore the
                        hotel's locations and nearby attractions, making your stay truly
                        unforgettable.
                     </p>

                     <div className="flex items-center gap-x-4">
                        <Button variant="outlined" color="primary">
                           Book Now
                        </Button>

                        <Button variant="text" color="primary">
                           Learn more
                        </Button>
                     </div>
                  </div>

                  <MapView />
               </section>

               <section
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="px-5 py-10 grid md:flex gap-x-16 md:gap-x-16 gap-y-6 justify-center text-center text-white uppercase bg-discount-pattern rounded-xl flex-wrap"
               >
                  <div className="grid sm:flex gap-x-10 gap-y-6">
                     {data?.specialOffer.packages.map((offer, i) => (
                        <div key={i} className="grid gap-y-2">
                           <h2 className="text-5xl font-bold">{offer.discount}% OFF</h2>
                           <p>Stay {offer.conditions.nights} nights</p>
                        </div>
                     ))}
                  </div>

                  <div className="grid gap-y-2">
                     <p>Only when you</p>
                     <Button
                        onClick={() => toast.success("Congrats! offers enabled")}
                        color="bg-[#e42867] hover:bg-[#c42158]"
                     >
                        Click Here
                     </Button>
                  </div>
               </section>

               <section
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="overflow-hidden"
               >
                  <div className="mb-16 sm:mb-20 flex items-center justify-between gap-y-6 flex-col lg:flex-row">
                     <div className="max-w-2xl lg:max-w-none text-center lg:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                           Featured Rooms
                        </h1>
                        <p className="mt-3 text-lg leading-8">
                           Discover our hand-picked selection of luxury rooms.
                        </p>
                     </div>

                     <div className="flex items-center gap-x-5">
                        <button className="slide-button-prev w-14 h-14 rounded-full border-2 flex-shrink-0 flex items-center justify-center transform active:scale-90 transition-all">
                           <Arrow direction="backward" />
                        </button>
                        <button className="slide-button-next w-14 h-14 rounded-full border-2 flex-shrink-0 flex items-center justify-center transform active:scale-90 transition-all">
                           <Arrow direction="forward" />
                        </button>
                     </div>
                  </div>

                  <Swiper
                     modules={[Navigation]}
                     slidesPerView={1}
                     spaceBetween={32}
                     breakpoints={{
                        1024: { slidesPerView: 2 },
                     }}
                     navigation={{
                        nextEl: ".slide-button-next",
                        prevEl: ".slide-button-prev",
                     }}
                     className="w-full"
                  >
                     {data?.featuredRooms.map((room, i) => (
                        <SwiperSlide key={i} className="aspect-[3/2] rounded-xl overflow-hidden">
                           <FeaturedRoom room={room} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
               </section>

               <section data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                  <SectionHeading title="Happy Customers" className="text-center lg:text-left">
                     Read what our customers have to say about us
                  </SectionHeading>

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
                        {isLoading
                           ? Array.from({ length: 3 }).map((_, i) => (
                                <SwiperSlide key={i} className="grid gap-y-2">
                                   <header className="h-6 w-4/5 bg-gray-100 rounded justify-self-start" />
                                   <main className="h-32 w-full bg-gray-100 rounded" />
                                </SwiperSlide>
                             ))
                           : data?.reviews.map((review, i) => (
                                <SwiperSlide key={i} className="h-auto">
                                   <Review review={review}>{review.comment.body}</Review>
                                </SwiperSlide>
                             ))}
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

               <section
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  className="px-4 md:px-8 py-12 lg:py-16 grid justify-items-center bg-gray-100"
               >
                  <SectionHeading title="Get Exclusive Updates and Offers">
                     Sign up for our newsletter to receive the latest updates, deals, and exclusive
                     offers.
                  </SectionHeading>

                  <div className="w-full flex items-center gap-x-1 lg:gap-x-4 max-w-md">
                     <Input className="w-full" placeholder="Enter your email" />
                     <Button color="primary" className="lg:px-5 flex-shrink-0">
                        Subscribe
                     </Button>
                  </div>

                  <small className="mt-4 text-xs">
                     By joining, you agree to our{" "}
                     <span className="text-gray-800 font-semibold cursor-pointer">
                        Terms and Conditions
                     </span>
                     .
                  </small>
               </section>
            </section>
         )}

         {show && (
            <DiscountPopup>
               <div className="px-5 py-10 grid md:flex gap-x-16 md:gap-x-16 gap-y-6 justify-center text-center text-white uppercase bg-discount-pattern rounded-xl flex-wrap max-w-lg mx-auto">
                  <div className="grid sm:flex gap-x-10 gap-y-6">
                     {data?.specialOffer.packages.map((offer, i) => (
                        <div key={i} className="grid gap-y-2">
                           <h2 className="text-5xl font-bold">{offer.discount}% OFF</h2>
                           <p>Stay {offer.conditions.nights} nights</p>
                        </div>
                     ))}
                  </div>

                  <div className="grid gap-y-2">
                     <p>Only when you</p>
                     <Button
                        onClick={() => {
                           localStorage.setItem("is-promotion-shown", "yes");
                           toast.success("Congrats! offers enabled");
                           setShow(false);
                        }}
                        color="bg-[#e42867] hover:bg-[#c42158]"
                     >
                        Click Here
                     </Button>
                  </div>
               </div>
            </DiscountPopup>
         )}
      </>
   );
};
export default Homepage;
