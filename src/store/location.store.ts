import { locationApi } from "@/api/location.api";
import { ILocation } from "@/types/location.type";
import { create } from "zustand";
import { usePaginationStore } from "./pagination.store";
import { ICharacter } from "@/types/character.type";

type TStore = {
  locations: ILocation[];
  residents: ICharacter[];
  selectedLocations: ILocation | undefined;
  isLoading: boolean;
  isLoadingDialog: boolean;
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  getAllLocations: (url?: string, page?: number) => Promise<void>;
  getLocationResidents: (selectedLocations: ILocation) => Promise<void>;
};

export const useLocationStore = create<TStore>((set) => ({
  locations: [],
  selectedLocations: undefined,
  residents: [],
  isLoading: false,
  isLoadingDialog: false,
  isModalOpen: false,
  async getAllLocations(url, page) {
    try {
      set({ isLoading: true });
      const { data } = await locationApi.getAllLocations(url);
      usePaginationStore.setState(() => ({
        count: data.info.count,
        next: data.info.next,
        pages: data.info.pages,
        prev: data.info.prev,
        currPage: page ?? 1,
      }));
      if (url) {
        // set({ filteredCharacters: data.results });O
        return;
      }
      set({ locations: data.results });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoading: false });
    }
  },
  setIsModalOpen(isModalOpen) {
    set({ isModalOpen });
  },
  async getLocationResidents(location) {
    try {
      set({ isLoadingDialog: true });
      const res = await locationApi.getAllLocationResidents(location.residents);
      const residents = res.map((r) => r.data) as ICharacter[];
      console.log(residents);
      set({ residents });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isLoadingDialog: false });
    }
  },
}));
