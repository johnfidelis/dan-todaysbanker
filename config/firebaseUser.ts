// config/firebaseUser.ts
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyCsF6VIBFl3OA1vO9ZLU6XrqsX6k4mB9w4",
    authDomain: "jpfootball-com.firebaseapp.com",
    projectId: "jpfootball-com",
    storageBucket: "jpfootball-com.firebasestorage.app",
    messagingSenderId: "606503007811",
    appId: "1:606503007811:web:f638eb8e35a7085d9086f6",
    measurementId: "G-QGDE4T3TMX"
};

const apps = getApps();
export const userFirebaseApp =
  apps.length === 0 ? initializeApp(firebaseConfig, "user-app") : apps[0];

export const userDb = getFirestore(userFirebaseApp);
