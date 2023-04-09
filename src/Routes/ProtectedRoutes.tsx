import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);

  const auth = user ? true : false;

  return auth ? <Outlet /> : <Navigate to="/signIn" />;
};

export default ProtectedRoutes;
