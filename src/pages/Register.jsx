import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "@contexts/AuthContext";
import { Input, PasswordToggler } from "@components/Form";
import Button from "@components/Button";

import {
   getEmailValidationSchema,
   getPasswordValidationSchema,
} from "@utils/ValidationSchema";

export default () => {
   document.title = "Cynosure  |  Sign up";
   const [showPassword, setShowPassword] = useState(false);
   const { user, isAuthenticating, createAccount } = useAuth();
   const nevigate = useNavigate();
   const redirect = () => nevigate("/");

   useEffect(() => {
      if (user) nevigate("/");
   }, [nevigate, user]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: { displayName: "", photoURL: "", email: "", password: "" },
   });

   if (user || isAuthenticating) return;

   return (
      <section className="p-8 w-full bg-auth-login">
         <div className="mx-auto max-w-lg w-full">
            <div className="mb-8 sm:mb-12 text-center">
               <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-800">
                  Register
               </h2>
               <p className="mt-2 leading-8 text-gray-600">
                  Please enter your details to register
               </p>
            </div>

            <form
               className="grid gap-y-6"
               onSubmit={handleSubmit((data) => createAccount(data, redirect))}
            >
               <Input
                  label="Full name"
                  type="text"
                  placeholder="Enter your name"
                  errors={errors}
                  {...register("displayName", { required: "Name is required" })}
               />
               <Input
                  label="Photo url"
                  type="url"
                  placeholder="Enter your photo url"
                  errors={errors}
                  {...register("photoURL", {
                     required: "Photo url is required",
                  })}
               />
               <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  errors={errors}
                  {...register(
                     "email",
                     getEmailValidationSchema({ required: true })
                  )}
               />

               <div className="relative w-full grid gap-y-1">
                  <Input
                     label="Password"
                     type={showPassword ? "text" : "password"}
                     endIcon={
                        <PasswordToggler
                           {...{ showPassword, setShowPassword }}
                        />
                     }
                     placeholder="Enter your password"
                     className="peer"
                     errors={errors}
                     {...register(
                        "password",
                        getPasswordValidationSchema({ required: true })
                     )}
                  />

                  <div className="p-4 hidden peer-focus-within:grid text-sm bg-white rounded-md shadow-md border whitespace-nowrap gap-y-1 tooltip">
                     <h3 className="text-gray-600 font-medium">
                        Password must contain (at least):
                     </h3>
                     <ul className="grid gap-y-0.5 list-disc list-inside">
                        <li>6 characters.</li>
                        <li>one capital letter.</li>
                        <li>one small letter.</li>
                     </ul>
                  </div>
               </div>

               <div className="flex items-center justify-center text-sm">
                  <span>Already have an account?</span>
                  <Link
                     to="/login"
                     className="ml-1 font-semibold text-primary-500"
                  >
                     Sign in
                  </Link>
                  .
               </div>

               <Button type="submit" color="primary">
                  Create an account
               </Button>
            </form>
         </div>
      </section>
   );
};
