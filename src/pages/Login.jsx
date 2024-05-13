import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/AuthContext";
import { Lock, Mail, Google } from "@icons";
import { Input, PasswordToggler } from "@components/Form";
import Button from "@components/Button";
import {
   getEmailValidationSchema,
   getPasswordValidationSchema,
} from "@utils/ValidationSchema";
import Github from "@icons/Github";

export default () => {
   document.title = "Cynosure  |  Sign in";
   // prettier-ignore
   const { user, isAuthenticating, signInWithEmail, signInWithProvider } = useAuth();
   const [showPassword, setShowPassword] = useState(false);
   const location = useLocation();
   const nevigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const redirect = () => {
      nevigate(location.state || "/");
   };

   useEffect(() => {
      if (user) nevigate("/");
   }, [nevigate, user]);

   if (user || isAuthenticating) return;

   return (
      <section className="p-8 w-full bg-auth-login">
         <div className="mx-auto w-full max-w-lg">
            {/* Login Form */}
            <div className="mb-8 sm:mb-12 text-center">
               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800">
                  Login
               </h2>
               <p className="mt-2 leading-8 text-gray-600">
                  Please enter your details to sign in
               </p>
            </div>

            <form
               className="grid gap-y-6 w-full"
               onSubmit={handleSubmit((data) =>
                  signInWithEmail(data, redirect)
               )}
            >
               <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  startIcon={<Mail />}
                  errors={errors}
                  {...register(
                     "email",
                     getEmailValidationSchema({ required: true })
                  )}
               />
               <Input
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  startIcon={<Lock />}
                  endIcon={
                     <PasswordToggler
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                     />
                  }
                  placeholder="Enter your password"
                  errors={errors}
                  {...register(
                     "password",
                     getPasswordValidationSchema({ required: true })
                  )}
               />

               <div className="flex items-center justify-center text-sm">
                  <span>Don't have an account?</span>
                  <Link
                     to="/register"
                     className="ml-1 font-semibold text-primary-500"
                  >
                     Create one
                  </Link>
                  .
               </div>

               <Button type="submit" color="primary">
                  Sign in
               </Button>
            </form>

            {/* Singin with Google, Facebook, Github */}
            <div className="my-6 relative mx-auto w-full flex justify-center">
               <div className="w-full absolute border-b top-1/2 transform -translate-y-1/2"></div>
               <div className="relative px-4 py-1 bg-white">
                  Or continue with
               </div>
            </div>

            <div className="grid grid-cols-2 gap-x-2">
               <Button
                  startIcon={<Google />}
                  variant="outlined"
                  color="hover:bg-white text-gray-600 rounded-lg"
                  onClick={signInWithProvider("google", redirect)}
               >
                  Google
               </Button>
               <Button
                  startIcon={<Github className="w-5 h-5  text-[#171515]" />}
                  variant="outlined"
                  color="hover:bg-white text-gray-600 rounded-lg"
                  onClick={signInWithProvider("github", redirect)}
               >
                  Github
               </Button>
            </div>
         </div>
      </section>
   );
};
