import { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged, createUserWithEmailAndPassword, browserSessionPersistence, setPersistence, signOut } from "firebase/auth";
import { auth } from "../API/firebaseconfig";
import { useNavigate } from "react-router-dom";

setPersistence(auth, browserSessionPersistence).then(() => {
  return auth.currentUser === null ? signOut(auth) : "";
});

export const AuthContext = createContext(null);

export default function UserContext({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ name: auth.currentUser.displayName, isAuth: true });
        navigate(`/dashboard/${user.uid}`);
      } else {
        setUser(false);
        navigate("/");
      }
    });
  }, []);

  return <AuthContext.Provider value={{ user, setUser, createUser }}>{children}</AuthContext.Provider>;
}

export const AuthCTX = () => {
  return useContext(AuthContext);
};
