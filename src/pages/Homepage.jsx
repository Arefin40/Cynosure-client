import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Input } from "@components/Form";
import { Arrow } from "@icons";
import Button from "@components/Button";
import FeaturedRoom from "@containers/FeaturedRoom";
import MapView from "@containers/MapView";
import ReviewCard from "@containers/ReviewCard";
import SectionHeading from "@containers/SectionHeading";

const Homepage = () => {
   document.title = "Cynosure";

   const rooms = [
      {
         title: "Junior King Suite",
         image: "https://i.ibb.co/1M829wK/junior-king.jpg",
      },
      {
         title: "Junior Queen Suite",
         image: "https://i.ibb.co/CPsPWCP/junior-queen.jpg",
      },
   ];

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

         <section className="container grid gap-y-32 sm:gap-y-40">
            <section className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
               <div>
                  <h4 className="text-gray-800 font-medium">Discover</h4>

                  <h1 className="mt-2 mb-3 text-3xl sm:text-4xl text-gray-800 font-extrabold leading-snug">
                     Explore Our Hotel and Nearby Attractions
                  </h1>

                  <p className="mb-8 leading-8">
                     Immerse yourself in the beauty of our hotel and discover
                     the wonders of the surrounding area. With our interactive
                     map, you can easily explore the hotel's locations and
                     nearby attractions, making your stay truly unforgettable.
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

            <section>
               <SectionHeading
                  title="Happy Customers"
                  className="text-center lg:text-left"
               >
                  Read what our customers have to say about us
               </SectionHeading>

               <div className="grid md:grid-cols-2 gap-x-16 gap-y-16">
                  <ReviewCard
                     timestamp="2 May 2024"
                     rating={4}
                     customerName="Customer 1"
                     customerPhotoUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  >
                     Our stay at the hotel was amazing. The staff was friendly
                     and the room was clean and comfortable.
                  </ReviewCard>

                  <ReviewCard
                     timestamp="14 Apr 2024"
                     rating={5}
                     customerName="Customer 2"
                     customerPhotoUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  >
                     I highly recommend this hotel. The service was excellent
                     and the location was perfect.
                  </ReviewCard>
               </div>
            </section>

            <section className="px-4 md:px-8 py-12 lg:py-16 grid justify-items-center bg-gray-100">
               <SectionHeading
                  title="Get Exclusive Updates and Offers"
                  spacing="mb-10 sm:mb-12"
               >
                  Sign up for our newsletter to receive the latest updates,
                  deals, and exclusive offers.
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

            <section className="overflow-hidden">
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
                  {rooms.map(({ title, image }) => (
                     <SwiperSlide
                        key={title}
                        className="aspect-[3/2] rounded-xl overflow-hidden"
                     >
                        <FeaturedRoom title={title} image={image} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </section>
         </section>
      </>
   );
};
export default Homepage;
