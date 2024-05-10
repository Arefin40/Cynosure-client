import Button from "@components/Button";
import MapView from "@containers/MapView";
import ReviewCard from "@containers/ReviewCard";
import SectionHeading from "@containers/SectionHeading";

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
         </section>
      </>
   );
};
export default Homepage;
