import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

import LoginForm from "./components/LoginForm.component";
import { useEffect } from "react";
import { useUserStore } from "@/store/user.store";
import { useNavigate } from "react-router-dom";
import { routeNames } from "@/constants/routeNames";

const Login = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.loggedUser);
  useEffect(() => {
    if (user) {
      navigate(routeNames.home);
    }
  }, [user]);
  return (
    <div className="flex justify-center pt-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
