import { dataApi } from "@/api/data.api";
import { create } from "zustand";
import { useCharacterStore } from "./character.store";

type TStore = {
  count: number;
  pages: number;
  currPage: number;
  next: string | null;
  prev: string | null;
  setCurrentPage: (page: number) => Promise<void>;
  onNext: () => Promise<void>;
  onPrev: () => Promise<void>;
};

export const usePaginationStore = create<TStore>((set, get) => ({
  count: 0,
  currPage: 1,
  next: null,
  pages: 0,
  prev: null,
  async setCurrentPage(page: number) {
    try {
      useCharacterStore.setState({ isLoading: true });
      const { data } = await dataApi.getCharactersByPage(page);
      useCharacterStore.setState({ characters: data.results });
      set({
        next: data.info.next,
        prev: data.info.prev,
        count: data.info.count,
        pages: data.info.pages,
        currPage: page,
      });
    } catch (error) {
      console.log(error);
    } finally {
      useCharacterStore.setState({ isLoading: false });
    }
  },
  async onNext() {
    const { next, currPage, pages } = get();
    if (!next || currPage >= pages) return;
    try {
      useCharacterStore.setState({ isLoading: true });
      const { data } = await dataApi.getCharactersByLink(next);
      useCharacterStore.setState({ characters: data.results });
      set({
        currPage: currPage + 1,
        next: data.info.next,
        prev: data.info.prev,
        count: data.info.count,
        pages: data.info.pages,
      });
    } catch (error) {
      console.log(error);
    } finally {
      useCharacterStore.setState({ isLoading: false });
    }
  },
  async onPrev() {
    const { prev, currPage } = get();
    if (!prev || currPage <= 1) return;
    try {
      useCharacterStore.setState({ isLoading: true });
      const { data } = await dataApi.getCharactersByLink(prev);
      useCharacterStore.setState({ characters: data.results });
      set({
        currPage: currPage - 1,
        next: data.info.next,
        prev: data.info.prev,
        count: data.info.count,
        pages: data.info.pages,
      });
    } catch (error) {
      console.log(error);
    } finally {
      useCharacterStore.setState({ isLoading: false });
    }
  },
}));
