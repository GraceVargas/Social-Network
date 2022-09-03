import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="header container-fluid bg-dark">{children}</div>
    </>
  );
};

export { Header };
