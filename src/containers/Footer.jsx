import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Github } from "@icons";

export default () => {
   return (
      <section className="px-5 lg:px-0 py-12 lg:py-24 mx-auto container grid gap-y-10 justify-items-center text-center text-gray-700">
         <Link to="/">
            <h1 className="w-full text-2xl lg:text-3xl font-bold max-w-36 flex-shrink-0 text-primary-500">
               <span>Cynosure</span>
            </h1>
         </Link>

         <ul className="grid grid-cols-2 sm:flex items-center gap-6 sm:gap-x-8 lg:gap-x-12 text-sm">
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
         </ul>

         <div className="flex items-center gap-x-10 text-gray-400">
            <Facebook />
            <Instagram />
            <Twitter />
            <Github />
         </div>

         <small className="text-gray-500">
            © 2024 Cynosure.com. All rights reserved.
         </small>
      </section>
   );
};
