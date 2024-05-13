import { useQuery } from "@tanstack/react-query";
import axios from "@hooks/axios";
import RoomCard from "@containers/RoomCard";
import LoadingState from "@components/LoadingState";

const Rooms = () => {
   const { data: rooms = [], isLoading } = useQuery({
      queryFn: () => axios.get("/rooms").then((res) => res.data),
      queryKey: ["rooms"],
   });

   if (isLoading) return <LoadingState />;

   return (
      <section className="mt-4 lg:mt-8 container">
         <main className="grid gap-x-8 gap-y-12 lg:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {rooms?.map((room, i) => (
               <RoomCard key={room._id} room={room} />
            ))}
         </main>
      </section>
   );
};
export default Rooms;
