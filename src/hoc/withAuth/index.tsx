import { useEffect } from "react";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const publicRoutes = ["/login", "/signup"];

const withAuth = (Component: FC): FC => {
  const Authenticated: FC = (): any => {
    const { me } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (me && publicRoutes.includes(location.pathname)) navigate("/");

      if (!me && !publicRoutes.includes(location.pathname)) navigate("/login");
    }, [me]);

    return <Component />;
  };
  return Authenticated;
};

export { withAuth };
