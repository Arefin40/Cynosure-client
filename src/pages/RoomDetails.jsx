import { Area, Calendar } from "@icons";
import { Input } from "@components/Form";
import Button from "@components/Button";
import StarRating from "@containers/StarRating";
import ReviewSection from "@containers/ReviewSection";

const RoomDetails = () => {
   return (
      <section className="container mt-4 lg:mt-8 space-y-5 md:space-y-8">
         <section className="w-full grid lg:flex gap-2 sm:gap-4">
            <div className="rounded-xl w-full aspect-[5/3] overflow-hidden">
               <img
                  src="https://i.ibb.co/1M829wK/junior-king.jpg"
                  className="w-full h-full object-cover"
               />
            </div>

            <div className="lg:w-96 flex lg:grid gap-2 sm:gap-4 flex-shrink-0">
               <div className="rounded-xl w-full h-full overflow-hidden">
                  <img
                     src="https://i.ibb.co/1M829wK/junior-king.jpg"
                     className="max-w-full max-h-full object-cover aspect-video lg:aspect-auto"
                  />
               </div>
               <div className="rounded-xl w-full h-full overflow-hidden">
                  <img
                     src="https://i.ibb.co/1M829wK/junior-king.jpg"
                     className="max-w-full max-h-full object-cover aspect-video lg:aspect-auto"
                  />
               </div>
            </div>
         </section>

         <section className="grid gap-5 md:gap-8 md:grid-cols-[1fr_22rem] items-start">
            <div className="space-y-4">
               <div className="flex items-center gap-5 justify-between flex-wrap">
                  <div className="space-y-4">
                     <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Superior King Room
                     </h1>

                     <div className="flex items-center gap-x-5">
                        <div className="flex items-center gap-x-2 text-sm">
                           <StarRating rating={4} />
                           <span>(24 reviews)</span>
                        </div>

                        <div className="flex items-center gap-x-2">
                           <Area />
                           <span>460 Sq.ft.</span>
                        </div>
                     </div>
                  </div>

                  <div className="w-full min-h-12 max-w-96 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                     offers
                  </div>
               </div>

               <div className="mt-2 py-3 sm:py-4 flex items-center gap-x-12 text-sm sm:text-base font-semibold border-y">
                  <span>Unavailable Until:</span>
                  <span className="text-gray-800">12 May 2024</span>
               </div>
            </div>

            <div className="p-4 grid gap-y-2 rounded-xl border shadow-sm">
               <div className="mb-2 flex items-center gap-x-1">
                  <h2 className="text-2xl font-semibold text-gray-800">$580</h2>
                  <span>/ night</span>
               </div>

               <div className="grid grid-cols-[repeat(auto-fit,minmax(9.625rem,1fr))] items-center gap-2">
                  <Input
                     label="Check-in"
                     startIcon={<Calendar />}
                     placeholder="DD/MM/YYYY"
                     className="w-full"
                  />
                  <Input
                     label="Check-out"
                     startIcon={<Calendar />}
                     placeholder="DD/MM/YYYY"
                     className="w-full"
                  />
               </div>

               <Button
                  color="primary"
                  className="w-full max-w-64 md:max-w-none justify-self-center"
               >
                  Reserve
               </Button>
            </div>
         </section>

         <section className="space-y-3 sm:space-y-4 leading-7">
            <h2 className="text-lg sm:text-xl text-gray-800 font-semibold sm:font-bold">
               Description
            </h2>
            <p>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
               possimus at exercitationem consequuntur quas ipsam voluptate
               dolores facere corrupti quaerat commodi id molestiae? Vitae
               expedita ex, dolores alias exercitationem excepturi sed minima
               sapiente minus molestiae placeat optio autem fugit, beatae quasi.
               Eaque cum commodi nulla facilis necessitatibus cumque, magnam
               vitae?
            </p>
         </section>

         <ReviewSection />
      </section>
   );
};
export default RoomDetails;
