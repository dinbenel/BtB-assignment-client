import { dataApi } from "@/api/data.api";
import { create } from "zustand";

type TStore = {
  count: number;
  pages: number;
  currPage: number;
  next: string | null;
  prev: string | null;
  setCurrentPage: (page: number) => Promise<any>;
  onNext: () => Promise<any>;
  onPrev: () => Promise<any>;
};

export const usePaginationStore = create<TStore>((set, get) => ({
  count: 0,
  currPage: 1,
  next: null,
  pages: 0,
  prev: null,
  async setCurrentPage(page: number) {
    try {
      const { data } = await dataApi.getCharactersByPage(page);
      set({
        next: data.info.next,
        prev: data.info.prev,
        count: data.info.count,
        pages: data.info.pages,
        currPage: page,
      });
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  },
  async onNext() {
    const { next, currPage, pages } = get();
    if (!next || currPage >= pages) return;
    try {
      const { data } = await dataApi.getCharactersByLink(next);
      set({
        currPage: currPage + 1,
        next: data.info.next,
        prev: data.info.prev,
        count: data.info.count,
        pages: data.info.pages,
      });
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  },
  async onPrev() {
    const { prev, currPage } = get();
    if (!prev || currPage <= 1) return;
    try {
      const { data } = await dataApi.getCharactersByLink(prev);
      set({
        currPage: currPage - 1,
        next: data.info.next,
        prev: data.info.prev,
        count: data.info.count,
        pages: data.info.pages,
      });
      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  },
}));
