import React, { createContext, useEffect } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup ,onAuthStateChanged,signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  // set user information
  const [user, setUser] = useState(null);
  //get current user and set to user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Curent User Tracked", currentUser);
        setUser(currentUser);
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
  //create user with email password
  const userRegistration =(email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //login user with email password
  const userLogin =(email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }



  const authInfo = {
     user, 
     loginGoogle, 
     logOut, 
     userRegistration, 
     userLogin 
    };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
