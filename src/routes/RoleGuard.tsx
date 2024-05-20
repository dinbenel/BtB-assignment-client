import { routeNames } from "@/constants/routeNames";
import { useUserStore } from "@/store/user.store";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RoleGuard = () => {
  const location = useLocation();
  const user = useUserStore((state) => state.loggedUser);
  const isAuthorized = user?.role === "ADMIN";
  return isAuthorized ? (
    <Outlet />
  ) : (
    <Navigate to={routeNames.home} state={{ from: location }} />
  );
};

export default RoleGuard;
