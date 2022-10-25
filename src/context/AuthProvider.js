import React, { createContext, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup ,onAuthStateChanged,signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  // set user information
  const [user, setUser] = useState(null);
  //get current user and set to user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Curent User Tracked", currentUser);

      if (currentUser === null || currentUser.emailVerified) {
        setUser(currentUser);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //log out from website
  const logOut =()=>{
    return signOut(auth);
  }

  // login with google
  const loginGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = { user, loginGoogle, logOut };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
