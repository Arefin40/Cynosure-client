import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDropdown } from "@hooks";
import { Filter } from "@icons";
import RangeSlider from "react-range-slider-input";
import axios from "@hooks/axios";
import RoomCard from "@containers/RoomCard";
import LoadingState from "@components/LoadingState";
import Button from "@components/Button";

const Rooms = () => {
   document.title = "Cynosure  |  Rooms";
   const [value, setValue] = useState([0, 1000]);
   const [filter, setFilter] = useState([0, 1000]);
   const { ref, isVisible, toggle } = useDropdown();

   const { data: rooms = [], isLoading } = useQuery({
      queryFn: () =>
         axios.get(`/rooms?minPrice=${value[0]}&maxPrice=${value[1]}`).then((res) => res.data),
      queryKey: ["rooms", filter],
   });

   if (isLoading) return <LoadingState />;

   return (
      <section className="mt-4 lg:mt-8 space-y-6 container isolate">
         <header className="flex justify-end">
            <div ref={ref} className="relative">
               <Button
                  onClick={toggle}
                  startIcon={<Filter />}
                  size="small"
                  variant="outlined"
                  className="px-font-medium"
               >
                  Filter
               </Button>

               {isVisible && (
                  <div className="px-4 py-6 space-y-6 absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg z-50 border">
                     <h2 className="text-center text-gray-800 text-lg font-semibold">
                        Price range
                     </h2>

                     <RangeSlider
                        id="range-slider"
                        className="w-64"
                        min={0}
                        max={1000}
                        value={value}
                        onInput={setValue}
                        onThumbDragEnd={() => setFilter(value)}
                     />

                     <div className="flex items-center justify-between">
                        <p className="w-16 py-1 border text-center rounded-md">{value[0]}</p>
                        <p className="w-16 py-1 border text-center rounded-md">{value[1]}</p>
                     </div>
                  </div>
               )}
            </div>
         </header>

         <main className="grid gap-x-8 gap-y-12 lg:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {rooms?.map((room, i) => (
               <RoomCard key={room._id} room={room} />
            ))}
         </main>
      </section>
   );
};
export default Rooms;
