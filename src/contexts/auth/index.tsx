import { createContext, FC, ReactNode, useState } from "react";
import { User } from "../../types";

type AuthContextType = {
  me?: User;
  setCurrentUser: (user?: User) => void;
};

const AuthContext = createContext<AuthContextType>({
  me: undefined,
  setCurrentUser: () => {},
});

type Props = {
  children: ReactNode;
};

const AuthProvider: FC<Props> = ({ children }) => {
  const [me, setMe] = useState<User>();
  const setCurrentUser = (user?: User) => setMe(user);

  return (
    <AuthContext.Provider value={{ me, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
