import { dataApi } from "@/api/data.api";
import { ICharacter } from "@/types/character.type";
import { create } from "zustand";

type TStore = {
  characters: ICharacter[];
  isLoading: boolean;
  getAllCharacters: () => Promise<void>;
};

export const useCharacterStore = create<TStore>((set) => ({
  characters: [],
  isLoading: false,
  async getAllCharacters() {
    try {
      set({ isLoading: true });
      const { data } = await dataApi.getAllCharacters();
      set({ characters: data.results });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
