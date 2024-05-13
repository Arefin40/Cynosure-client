import axios from "axios";

export default axios.create({
   baseURL: import.meta.env.APP_API_URL,
});
