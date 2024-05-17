import { authApiPath } from "@/constants/apiPathNames";
import { useUserStore } from "@/store/user.store";
import { IUser, IUserResponse } from "@/types/user.type";
import { loginFormState } from "@/validations/loginValidation";
import { axiosClient } from "../lib/api.client";

class AuthApi {
  login(formState: loginFormState) {
    return axiosClient.post<IUserResponse>(authApiPath.login, formState);
  }

  getUserData() {
    const token = useUserStore.getState().token || "";
    return axiosClient.get<IUser>(authApiPath.userData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  }
}

export const authApi = new AuthApi();
