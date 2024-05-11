import Header from "@containers/Header";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@contexts/AuthContext";
import Footer from "@containers/Footer";

const Layout = () => {
   return (
      <AuthProvider>
         <Toaster />
         <Header />

         <main className="w-full min-h-[calc(100vh-28.75rem)] sm:min-h-[calc(100vh-23.125rem)] lg:min-h-[calc(100vh-30.625rem)]">
            <Outlet />
         </main>

         <Footer />
      </AuthProvider>
   );
};
export default Layout;
