import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeNames } from "../constants/routeNames";
import { lazy } from "react";

const Home = lazy(() => import("@/screens/home/Home.page"));
const Login = lazy(() => import("@/screens/login/login.page"));
const Location = lazy(() => import("@/screens/location/Location.page"));
const Character = lazy(() => import("@/screens/character/Character.page"));
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthRouteGuard = lazy(() => import("@/routes/AuthRouteGuard"));
const RoleGuard = lazy(() => import("@/routes/RoleGuard"));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: routeNames.home,
        element: <AuthRouteGuard />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: routeNames.characters,
            element: <Character />,
          },
          {
            element: <RoleGuard />,
            children: [
              {
                path: routeNames.location,
                element: <Location />,
              },
            ],
          },
        ],
      },
      {
        path: routeNames.login,
        element: <Login />,
      },
    ],
  },
]);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
