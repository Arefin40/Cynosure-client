import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";
import Register from "@pages/Register";
import Login from "@pages/Login";
import Homepage from "@pages/Homepage";
import Rooms from "@pages/Rooms";
import RoomDetails from "@pages/RoomDetails";
import Contact from "@pages/Contact";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Homepage />,
         },
         {
            path: "/rooms",
            element: <Rooms />,
         },
         {
            path: "/room/:roomId",
            element: <RoomDetails />,
         },
         {
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/register",
            element: <Register />,
         },
         {
            path: "/login",
            element: <Login />,
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
