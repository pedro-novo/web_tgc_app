import {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase-config";

type AuthContextProviderProps = {
  children: JSX.Element;
};

type AuthContextType = {
  isAuth: Boolean;
  isAuthSet: Dispatch<SetStateAction<Boolean>>;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  isAuthSet: () => undefined,
  handleLogout: () => undefined,
});

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isAuth, isAuthSet] = useState<Boolean>(false);

  const handleLogout = async () => {
    await signOut(auth);
    console.log(auth);
    isAuthSet(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, isAuthSet, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
