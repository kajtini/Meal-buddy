import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const RedirectionRoute = () => {
  const { user } = useContext(UserContext);

  const auth = user ? true : false;

  return auth ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectionRoute;
