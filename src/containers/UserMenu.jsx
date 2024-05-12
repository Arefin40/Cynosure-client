import { Link } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import { useDropdown } from "@hooks";
import { Menu, Account } from "@icons";

const DropdownMenu = ({ onLogOut, userData }) => {
   return (
      <ul className="py-2 mt-2 hidden lg:grid absolute right-0 top-full w-48 bg-white shadow-md rounded-md text-sm font-medium z-50 border">
         {userData ? (
            <>
               <div className="mx-2 pb-2 mb-2 flex items-center gap-x-3 border-b">
                  <img
                     src={userData?.photoURL}
                     className="w-8 h-8 rounded-full border"
                  />
                  <h3 className="text-gray-800">{userData?.displayName}</h3>
               </div>

               <Link
                  to="/bookings"
                  className="px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 hover:text-gray-800 rounded-md"
               >
                  <span>My Bookings</span>
               </Link>

               <button
                  onClick={onLogOut}
                  className="w-full px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 hover:text-gray-800 rounded-md"
               >
                  <span>Log out</span>
               </button>
            </>
         ) : (
            <>
               <Link
                  to="/register"
                  className="px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 text-gray-800 rounded-md"
               >
                  <span>Sign up</span>
               </Link>

               <Link
                  to="/login"
                  className="px-3 py-2 flex items-center gap-x-3 hover:bg-gray-100 hover:text-gray-800 rounded-md"
               >
                  <span>Log in</span>
               </Link>
            </>
         )}
      </ul>
   );
};

const TriggerButton = ({ onClick, userData, className = "flex" }) => {
   return (
      <button
         onClick={onClick}
         className={`p-1.5 ${className} items-center gap-x-3 border rounded-full`}
      >
         <div className="ml-2 w-5 h-5 flex items-center justify-center flex-shrink-0">
            <Menu className="w-4 h-4" />
         </div>

         {userData ? (
            <img
               src={userData?.photoURL}
               className="w-7 h-7 rounded-full border flex-shrink-0"
            />
         ) : (
            <Account className="w-7 h-7 rounded-full border flex-shrink-0" />
         )}
      </button>
   );
};

export default ({ onClickButton }) => {
   const { user, signOut } = useAuth();
   const { ref, isVisible, hide, toggle } = useDropdown();

   return (
      <div
         ref={ref}
         className="relative w-full max-w-36 flex items-center justify-end"
      >
         <TriggerButton
            onClick={onClickButton}
            userData={user}
            className="flex lg:hidden"
         />

         <TriggerButton
            onClick={toggle}
            userData={user}
            className="hidden lg:flex"
         />

         {isVisible && (
            <DropdownMenu userData={user} onLogOut={signOut} onClose={hide} />
         )}
      </div>
   );
};
