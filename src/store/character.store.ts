import { dataApi } from "@/api/data.api";
import { ICharacter } from "@/types/character.type";
import { SearchFormState } from "@/validations/searchCharacterValidation";
import { create } from "zustand";
import { usePaginationStore } from "./pagination.store";

type TStore = {
  characters: ICharacter[];
  isLoading: boolean;
  getAllCharacters: (vals?: SearchFormState) => Promise<void>;
};

export const useCharacterStore = create<TStore>((set) => ({
  characters: [],
  isLoading: false,
  async getAllCharacters(vlas) {
    try {
      set({ isLoading: true });
      const { data } = await dataApi.getAllCharacters(vlas);
      usePaginationStore.setState(() => ({
        count: data.info.count,
        next: data.info.next,
        pages: data.info.pages,
        prev: data.info.prev,
      }));
      set({ characters: data.results });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
