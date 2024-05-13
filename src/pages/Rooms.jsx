import RoomCard from "@containers/RoomCard";

const Rooms = () => {
   return (
      <section className="mt-4 lg:mt-8 container">
         <main className="grid gap-x-8 gap-y-12 lg:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
               <RoomCard key={i} />
            ))}
         </main>
      </section>
   );
};
export default Rooms;
