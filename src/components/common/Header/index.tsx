import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return <header className="header container-fluid">{children}</header>;
};

export { Header };
