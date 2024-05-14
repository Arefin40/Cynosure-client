import axios from "axios";

export default axios.create({
   baseURL: import.meta.env.APP_API_URL,
});

export const useAxiosSecure = () => {
   return axios.create({
      baseURL: import.meta.env.APP_API_URL,
      withCredentials: true,
   });
};
