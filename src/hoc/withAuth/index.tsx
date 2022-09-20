import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const publicRoutes = ["/login", "/signup"];

const withAuth = (Component: FC): FC => {
  const Authenticated: FC = (): any => {
    const { me } = useAuth();
    // const location = useLocation();
    // const navigate = useNavigate();

    // if (!me && publicRoutes.includes(location.pathname)) {
    //   navigate("/home");
    // }
    return <Component />;
  };
  return Authenticated;
};

export { withAuth };
