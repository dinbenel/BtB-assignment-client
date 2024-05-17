import { authApiPath } from "@/constants/apiPathNames";
import { useUserStore } from "@/store/user.store";
import { IUser, IUserResponse } from "@/types/user.type";
import { loginFormState } from "@/validations/loginValidation";
import { authClient } from "../lib/api.client";
import { AxiosInstance } from "axios";

class AuthApi {
  private httpClient: AxiosInstance = authClient.instance;

  login(formState: loginFormState) {
    return this.httpClient.post<IUserResponse>(authApiPath.login, formState);
  }

  getUserData() {
    const token = useUserStore.getState().token || "";
    return this.httpClient.get<IUser>(authApiPath.userData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
}

export const authApi = new AuthApi();
