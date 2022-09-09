import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Navbar } from "../Navbar";

type Props = {
  children: ReactNode;
  hideNav?: boolean;
  page?: string;
};

const Layout: FC<Props> = ({ children, hideNav, page }) => {
  return (
    <>
      <Header>{!hideNav && <Navbar />}</Header>
      <Main className={`page page-${page}`}>{children}</Main>
      <Footer />
    </>
  );
};

export { Layout };
