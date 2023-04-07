import { ReactNode, createContext, useState } from "react";

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

  return (
    <UserContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
