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

         <Outlet />

         <Footer />
      </AuthProvider>
   );
};
export default Layout;
