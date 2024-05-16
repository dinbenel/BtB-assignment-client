import { routeNames } from "@/constants/routeNames";
import { Navigate, Outlet } from "react-router-dom";

const AuthRouteGuard = () => {
  const t = 2;
  return <>{t > 1 ? <Outlet /> : <Navigate to={routeNames.login} />}</>;
};

export default AuthRouteGuard;
