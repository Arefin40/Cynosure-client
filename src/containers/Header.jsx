import { Link, NavLink } from "react-router-dom";
import { useVisibility } from "@hooks";
import { useAuth } from "@contexts/AuthContext";
import Drawer from "@components/Drawer";
import Button from "@components/Button";
import UserCard from "@containers/UserCard";
import UserMenu from "@containers/UserMenu";

const navigations = [
   {
      path: "/",
      label: "Home",
   },
   {
      path: "/rooms",
      label: "Rooms",
   },
   {
      path: "/bookings",
      label: "My Bookings",
      userOnly: true,
   },
   {
      path: "/gallery",
      label: "Gallery",
   },
   {
      path: "/contact",
      label: "Contact us",
   },
];

export default () => {
   const { user } = useAuth();
   const { isVisible, toggle, hide } = useVisibility(false);

   return (
      <header className="w-full sticky inset-x-0 top-0 z-40 bg-white border-b">
         <section className="px-5 sm:px-8 h-16 lg:h-auto lg:py-5 mx-auto container flex items-center justify-between">
            <Link to="/">
               <h1 className="w-full text-2xl lg:text-3xl font-bold max-w-36 flex-shrink-0 text-primary-500">
                  <span>Cynosure</span>
               </h1>
            </Link>

            <Drawer
               open={isVisible}
               onClose={hide}
               className="top-16 lg:static flex flex-col lg:flex-row lg:items-center lg:justify-center lg:w-full lg:max-w-none lg:translate-x-0 border-t lg:border-0"
            >
               <ul className="p-6 lg:p-0 text-base grid lg:flex lg:justify-center items-center gap-x-12 gap-y-6 font-medium text-gray-700">
                  {navigations.map(
                     ({ path, label, userOnly = false }) =>
                        !userOnly && (
                           <NavLink
                              end
                              to={path}
                              key={path}
                              onClick={hide}
                              className={({ isActive }) =>
                                 isActive ? "text-primary-500" : ""
                              }
                           >
                              {label}
                           </NavLink>
                        )
                  )}
               </ul>

               <div className="m-2 mb-5 mt-auto rounded-lg lg:hidden">
                  {user ? (
                     <UserCard className="w-full text-sm" />
                  ) : (
                     <Button
                        to="/login"
                        color="primary"
                        size="large"
                        className="w-full"
                     >
                        Login
                     </Button>
                  )}
               </div>
            </Drawer>

            <UserMenu onClickButton={toggle} />
         </section>
      </header>
   );
};
