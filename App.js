import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOsawld,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { Navigation } from "./src/infrastructure/navigation";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
// import * as firebase from "firebaseya";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX-qYgvF9bcGRNi3fSf-dH9I69rfsUels",
  authDomain: "mealstogo-8da40.firebaseapp.com",
  projectId: "mealstogo-8da40",
  storageBucket: "mealstogo-8da40.appspot.com",
  messagingSenderId: "956043871732",
  appId: "1:956043871732:web:31d9164b333b11b9a765a1",
};

const app = initializeApp(firebaseConfig);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  //   useEffect(() => {
  //     const auth = getAuth();

  //     signInWithEmailAndPassword(auth, "janhorak58@gmail.com", "test123")
  //       .then((userCredentials) => {
  //         const user = userCredentials.user;
  //         setIsAuthenticated(true);
  //         console.log(user);
  //       })
  //       .catch((e) => {
  //         setIsAuthenticated(false);
  //         console.log(e);
  //       });

  //     //
  //   }, []);

  let [oswaldLoaded] = useOsawld({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
