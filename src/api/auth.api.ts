import { authApiPath } from "@/constants/apiPathNames";
import { axiosClient } from "../lib/api.client";

class AuthApi {
  httpClient = axiosClient;

  login(email: string) {
    return this.httpClient.post(authApiPath.login, { email });
  }
}

export const authApi = new AuthApi();
