import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, createContext, useState, useEffect } from "react";
import { auth } from "../config/firebase";

interface UserContextProviderProps {
  children: ReactNode;
}

interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

interface UserContextType {
  user: User | null;
  logIn: (user: User) => void;
  logOut: () => void;
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const logIn = (user: User) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName, email, photoURL, uid } = user;
        if (displayName && email && photoURL && uid) {
          logIn({ displayName, email, photoURL, uid });
        }
      } else {
        logOut();
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
