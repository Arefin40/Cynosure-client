import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";

export default axios.create({
   baseURL: import.meta.env.APP_API_URL,
});

export const axiosSecure = axios.create({
   baseURL: import.meta.env.APP_API_URL,
   withCredentials: true,
});

export const useAxiosSecure = () => {
   const { signOut } = useAuth();
   const navigate = useNavigate();

   //   Response Interceptor
   axiosSecure.interceptors.response.use(
      (res) => res,

      async (error) => {
         console.error("Error from axios interceptor", error.response);

         if (error.response.status === 401 || error.response.status === 403) {
            await signOut();
            navigate("/login");
         }

         return Promise.reject(error);
      }
   );

   return axiosSecure;
};
