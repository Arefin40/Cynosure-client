import Button from "@components/Button";
import { Area, Bedroom } from "@icons/index";

const FeaturedRoom = ({ title, image }) => {
   return (
      <div className="w-full h-full relative flex flex-col gap-y-6 group overflow-hidden">
         <img src={image} className="h-full object-cover" />

         <div className="absolute inset-0 top-1/2 bg-gradient-to-b from-black/0 to-black/100" />

         <div className="p-5 absolute inset-x-3 bottom-3 sm:inset-x-6 sm:bottom-6 grid justify-items-center z-20 transform translate-y-16 group-hover:translate-y-0 group-hover:bg-blur transition-all duration-200 rounded-2xl">
            <div className="flex items-center gap-x-6 text-sm font-medium text-gray-300">
               <div className="flex items-center gap-x-2">
                  <Bedroom />
                  <h3>2 Guests</h3>
               </div>

               <div className="flex items-center gap-x-2">
                  <Area />
                  <h3>460 SQ FT</h3>
               </div>
            </div>

            <h2 className="my-2 sm:my-3 font-semibold text-base sm:text-lg text-gray-200 uppercase">
               {title}
            </h2>

            <h4 className="mb-2 sm:mb-3 text-gray-200 text-xl sm:text-2xl font-semibold">
               $580
            </h4>

            <Button
               rounded
               color="primary"
               size="large"
               className="px-6 hover:bg-primary-500 invisible group-hover:visible duration-0"
            >
               Book Now
            </Button>
         </div>
      </div>
   );
};
export default FeaturedRoom;
