import React, { createContext, useEffect } from "react";
import { GoogleAuthProvider, 
  getAuth, 
  signInWithPopup,
  onAuthStateChanged,
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  sendEmailVerification,
  updateProfile} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { useState } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  // set user information
  const [user, setUser] = useState(null);
  //spinner for loading state
  const [loading, setLoading] = useState(true);

  // login with google
  const loginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //create user with email password
  const userRegistration =(email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //login user with email password
  const userLogin =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  //log out from website
  const logOut =()=>{
    setLoading(true);
    return signOut(auth);
  }
  //send a user a verification email
  const verifyEmail =()=>{
    return sendEmailVerification(auth.currentUser);
  }
  //update user's profile
  const updateUserProfile =(profile)=>{
    return updateProfile(auth.currentUser, profile);
  }
  //get current user and set to user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Curent User Tracked", currentUser);
        setUser(currentUser);
        setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  
  const authInfo = {
     user, 
     loading, 
     setLoading,
     loginGoogle, 
     logOut, 
     userRegistration, 
     userLogin,
     verifyEmail,
     updateUserProfile,
    };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
