import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

const Main: FC<Props> = ({ children, className }) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};

export { Main };
