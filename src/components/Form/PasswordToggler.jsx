import { Eye } from "@icons";

export default ({ showPassword, setShowPassword }) => {
   return (
      <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
         <Eye open={showPassword} />
      </button>
   );
};
