import { characterApi } from "@/api/character.api";
import { ICharacter } from "@/types/character.type";
import { create } from "zustand";
import { usePaginationStore } from "./pagination.store";

type TStore = {
  characters: ICharacter[];
  filteredCharacters: ICharacter[];
  isLoading: boolean;
  isDialogOpen: boolean;
  setDialogOpen: (isOpen: boolean) => void;
  getAllCharacters: (url?: string, page?: number) => Promise<void>;
  resetFiltered: () => void;
};

export const useCharacterStore = create<TStore>((set) => ({
  characters: [],
  filteredCharacters: [],
  isLoading: false,
  isDialogOpen: false,
  async getAllCharacters(url, page) {
    try {
      set({ isLoading: true });
      const { data } = await characterApi.getAllCharacters(url);
      usePaginationStore.setState(() => ({
        count: data.info.count,
        next: data.info.next,
        pages: data.info.pages,
        prev: data.info.prev,
        currPage: page ?? 1,
      }));
      if (url) {
        set({ filteredCharacters: data.results });
        return;
      }
      set({ characters: data.results });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  setDialogOpen(isOpen) {
    set({ isDialogOpen: isOpen });
  },
  resetFiltered() {
    set({ filteredCharacters: [] });
  },
}));
