import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // if user signed in true other false
  const auth = true;

  return auth ? <Outlet /> : <Navigate to="/signUp" />;
};

export default ProtectedRoutes;
