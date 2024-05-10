import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
   apiKey: import.meta.env.APP_API_KEY,
   authDomain: import.meta.env.APP_AUTH_DOMAIN,
   projectId: import.meta.env.APP_PROJECT_ID,
   storageBucket: import.meta.env.APP_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.APP_MESSAGING_SENDER_ID,
   appId: import.meta.env.APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
