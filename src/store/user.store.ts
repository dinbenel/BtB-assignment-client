import { authApi } from "@/api/auth.api";
import { config } from "@/config";
import { IUser } from "@/types/user.type";
import { getFromStorage, setToStorage } from "@/utils/localStorage";
import { loginFormState } from "@/validations/loginValidation";
import { create } from "zustand";

type TStore = {
  isLoading: boolean;
  token: string | null;
  loggedUser: IUser | undefined;
  getLoggedUser: () => Promise<void>;
  login: (formState: loginFormState) => Promise<void>;
};

export const useUserStore = create<TStore>((set) => ({
  isLoading: false,
  token: getFromStorage(config.tokenStorageKey),
  loggedUser: undefined,
  async getLoggedUser() {
    try {
      set({ isLoading: true });
      const { data } = await authApi.getUserData();
      set({ loggedUser: data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  async login(formState) {
    try {
      set({ isLoading: true });
      const { data } = await authApi.login(formState);
      set({ loggedUser: data.user });
      setToStorage(config.tokenStorageKey, data.token);
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
