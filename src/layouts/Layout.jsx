import Header from "@containers/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <Header />

         <main>
            <Outlet />
         </main>

         <div className="py-12 flex justify-center border">Footer</div>
      </>
   );
};
export default Layout;
