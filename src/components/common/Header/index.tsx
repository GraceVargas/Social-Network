import { FC, ReactNode } from "react";
import "./styles.scss";

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return <header className="header">{children}</header>;
};

export { Header };
