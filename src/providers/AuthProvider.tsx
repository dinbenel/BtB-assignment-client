import { config } from "@/config";
import { useUserStore } from "@/store/user.store";
import { getFromStorage } from "@/utils/localStorage";
import { FC, ReactNode, createContext, useEffect } from "react";

const AuthContext = createContext({});

type Props = {
  children: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const getLoggedUser = useUserStore((state) => state.getLoggedUser);
  const user = useUserStore((state) => state.loggedUser);
  useEffect(() => {
    const token = getFromStorage(config.tokenStorageKey);
    if (token && !user) {
      getLoggedUser();
    }
  }, [user]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
