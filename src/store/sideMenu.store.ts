import { create } from "zustand";

type TStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useSideMenuStore = create<TStore>((set) => ({
  isOpen: false,
  setIsOpen(isOpen) {
    set({ isOpen });
  },
}));
