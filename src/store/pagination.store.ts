import { create } from "zustand";

type TStore = {
  count: number;
  pages: number;
  currPage: number;
  next: string | null;
  prev: string | null;
};

export const usePaginationStore = create<TStore>(() => ({
  count: 0,
  currPage: 1,
  next: null,
  pages: 0,
  prev: null,
}));
