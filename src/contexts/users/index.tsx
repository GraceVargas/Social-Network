import { User } from "@types";
import { createContext, FC, ReactNode, useState } from "react";

type UsersContextType = {
  users?: User[];
  loadUsers: (user: User[]) => void;
};

const UsersContext = createContext<UsersContextType>({
  users: [],
  loadUsers: () => {},
});

type Props = {
  children: ReactNode;
};

const UsersProvider: FC<Props> = ({ children }) => {
  const [users, setUsers] = useState<User[]>();
  const loadUsers = (user: User[]) => {
    setUsers(user);
  };

  return (
    <UsersContext.Provider value={{ users, loadUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
