import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeNames } from "../constants/routeNames";
import { lazy } from "react";

const Home = lazy(() => import("@/screens/home/Home.page"));
const Login = lazy(() => import("@/screens/login/login.page"));
const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const AuthRouteGuard = lazy(() => import("@/routes/AuthRouteGuard"));

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
