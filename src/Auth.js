import React, { useEffect, useState, createContext } from "react";
import Loader from './components/Loader';
import app from "./base";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("dark");
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(async (user) => {
      setCurrentUser(user);
      setPending(false)
      if (user) setUserEmail(user.email);
    });
  }, []);

  if (pending) return <Loader />
  return (
    <AuthContext.Provider value={{ currentUser, colorMode, setColorMode, userEmail, imgSrc, setImgSrc }}>
      {children}
    </AuthContext.Provider>
  );
};