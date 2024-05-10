import React from "react";
import ReactDOM from "react-dom/client";
import RouterProvider from "@pages/RouterProvider";
import AOS from "aos";

import "aos/dist/aos.css";
import "leaflet/dist/leaflet.css";
import "./index.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <RouterProvider />
   </React.StrictMode>
);
