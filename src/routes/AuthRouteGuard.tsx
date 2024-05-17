import { routeNames } from "@/constants/routeNames";
import { useUserStore } from "@/store/user.store";
import { Navigate, Outlet } from "react-router-dom";

const AuthRouteGuard = () => {
  const user = useUserStore((state) => state.loggedUser);

  return <>{user ? <Outlet /> : <Navigate to={routeNames.login} />}</>;
};

export default AuthRouteGuard;
