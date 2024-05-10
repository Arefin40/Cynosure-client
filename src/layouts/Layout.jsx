import { Outlet } from "react-router-dom";

const Layout = () => {
   return (
      <>
         <div className="py-12 flex justify-center border">Header</div>

         <main>
            <Outlet />
         </main>

         <div className="py-12 flex justify-center border">Footer</div>
      </>
   );
};
export default Layout;
