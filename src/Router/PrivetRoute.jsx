import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../config/firebase.config";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubsCribe();
    };
  }, [user]);
  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
