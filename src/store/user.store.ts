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
  loggedUser: {
    id: "bc2e6d1a-53fe-4518-b4ce-adfe9dbd97c8",
    email: "din@dino.com",
    firsName: "din",
    password: "1234567",
    lastName: "dino",
    role: "ADMIN",
    createdAt: "2024-05-16T14:06:53.748Z",
    updatedAt: "2024-05-16T14:06:53.748Z",
  },
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
