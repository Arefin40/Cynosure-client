import { NavLink } from "react-router-dom";
import { useBoolean } from "@hooks";
import Drawer from "@components/Drawer";
import Button from "@components/Button";
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
   const { active, open, close } = useBoolean(false);

   return (
      <header className="w-full sticky inset-x-0 top-0 z-40 bg-white border-b">
         <section className="px-5 sm:px-8 h-16 lg:h-auto lg:py-5 mx-auto container flex items-center justify-between">
            <h1 className="w-full text-2xl lg:text-3xl font-bold max-w-36 flex-shrink-0 text-primary-500">
               <span>Cynosure</span>
            </h1>

            <Drawer
               open={active}
               onClose={close}
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
                              onClick={close}
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
                  <Button
                     to="/login"
                     color="primary"
                     size="large"
                     className="w-full"
                  >
                     Login
                  </Button>
               </div>
            </Drawer>

            <UserMenu onClickButton={open} />
         </section>
      </header>
   );
};
