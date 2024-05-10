import Header from "@containers/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@contexts/AuthContext";

const Layout = () => {
   return (
      <AuthProvider>
         <Toaster />
         <Header />

         <main>
            <Outlet />
         </main>

         <div className="py-12 flex justify-center border">Footer</div>
      </AuthProvider>
   );
};
export default Layout;
