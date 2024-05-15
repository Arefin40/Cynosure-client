import AOS from "aos";
import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "@pages/RouterProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "react-datepicker/dist/react-datepicker.css";
import "leaflet/dist/leaflet.css";
import "react-range-slider-input/dist/style.css";
import "./index.css";

if (!localStorage.getItem("is-promotion-shown")) localStorage.setItem("is-promotion-shown", "no");

AOS.init({
   once: true,
});
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <QueryClientProvider client={queryClient}>
         <RouterProvider />
      </QueryClientProvider>
   </React.StrictMode>
);
