import { createContext, useContext, useEffect, useState } from "react";
import {
   createUserWithEmailAndPassword,
   GithubAuthProvider,
   GoogleAuthProvider,
   FacebookAuthProvider,
   signInWithEmailAndPassword,
   signInWithPopup,
   updateProfile,
   signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const AuthContext = createContext(null);

export const useAuth = () => {
   return useContext(AuthContext);
};

const formattedErrorMessage = (errorMessage) => {
   const regEx = /auth\/([a-z-]+)/;
   const message = errorMessage.match(regEx)?.[1];
   return message
      ? message.charAt(0).toUpperCase() + message.slice(1).split("-").join(" ")
      : errorMessage;
};

const providers = {
   google: new GoogleAuthProvider(),
   github: new GithubAuthProvider(),
   facebook: new FacebookAuthProvider(),
};

export const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [isAuthenticating, setIsAuthenticating] = useState(true);

   const createAccount = async (
      { displayName, photoURL, email, password },
      callbackFunction
   ) => {
      setIsAuthenticating(true);
      try {
         //prettier-ignore
         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
         await updateProfile(userCredential.user, { displayName, photoURL });
         if (callbackFunction) callbackFunction();
         toast.success("Account created successfully");
         setUser({ ...userCredential.user, displayName, photoURL });
      } catch (error) {
         toast.error(formattedErrorMessage(error.code));
      }
   };

   const signInWithProvider = (authProvider, callbackFunction) => async (e) => {
      e.preventDefault();
      setIsAuthenticating(true);

      try {
         await signInWithPopup(auth, providers[authProvider]);
         if (callbackFunction) callbackFunction();
         toast.success("Signed in successfully");
      } catch (error) {
         toast.error(formattedErrorMessage(error.code));
      }
   };

   const logIn = async ({ email, password }, callbackFunction) => {
      setIsAuthenticating(true);
      try {
         await signInWithEmailAndPassword(auth, email, password);
         if (callbackFunction) callbackFunction();
         toast.success("Signed-in successfully");
      } catch (error) {
         toast.error(formattedErrorMessage(error.code));
      }
   };

   const logOut = async () => {
      setIsAuthenticating(true);
      try {
         await signOut(auth);
         toast.success("Signed-out successfully");
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((currentUser) => {
         setUser(currentUser);
         setIsAuthenticating(false);
      });
      return unsubscribe;
   }, []);

   const values = {
      user,
      isAuthenticating,
      createAccount,
      signInWithProvider,
      signInWithEmail: logIn,
      signOut: logOut,
   };

   return (
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
   );
};
