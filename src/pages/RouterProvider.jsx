import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@layouts/Layout";
import ErrorPage from "@pages/ErrorPage";
import Register from "@pages/Register";
import Homepage from "@pages/Homepage";
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
            path: "/contact",
            element: <Contact />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
]);

export default () => {
   return <RouterProvider router={router} />;
};
