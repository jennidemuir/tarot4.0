import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../utils/init-firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updateProfile,
} from "firebase/auth";

const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout: () => Promise,
  signInWithGoogle: () => Promise,
  forgotPassword: () => Promise,
  resetPassword: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

   useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, (user) => {
       setCurrentUser(user ? user : null);
     });
     return () => {
       unsubscribe();
     };
   }, []);


  function register(displayName, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
    .then(
      (user) => {
        if(user){
          updateProfile(auth.currentUser, {
            displayName: displayName
          })

        }
      }
    )
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signInWithGoogle(){
      const provider = new GoogleAuthProvider()
      return signInWithPopup(auth, provider)
  }

  function forgotPassword(email) {
    return sendPasswordResetEmail(auth, email, {url: 'http://localhost:3000/login'})
  }

  function resetPassword(oobCode, newPassword){
    return confirmPasswordReset(auth, oobCode, newPassword)
  }

  function logout(){
      return signOut(auth)

  }

  const value = {
    currentUser,
    register,
    login,
    logout,
    signInWithGoogle,
    forgotPassword,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
