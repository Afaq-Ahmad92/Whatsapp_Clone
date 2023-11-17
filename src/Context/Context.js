import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { auth, Provider } from "../Database/Config";
export const ContextProvider = createContext();
const Context = (props) => {
  const [user, setUser] = useState(null);
  const [loader, settLoader] = useState(false);
  const Register = () => {
    signInWithPopup(auth, Provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(token);
      setUser(user);
      settLoader(true);
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      settLoader(true);
    });
  }, []);

  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(false);
        settLoader(false);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <ContextProvider.Provider
      value={{
        user,
        loader,
        Register,
        Logout,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
};

export default Context;
