import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";

import "aos/dist/aos.css";
import "./index.css";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <h1>Hello World</h1>
   </React.StrictMode>
);
