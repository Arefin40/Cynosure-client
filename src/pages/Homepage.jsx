import Button from "@components/Button";
import MapView from "@containers/MapView";

const Homepage = () => {
   document.title = "Cynosure";

   return (
      <>
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
         </section>
      </>
   );
};
export default Homepage;
