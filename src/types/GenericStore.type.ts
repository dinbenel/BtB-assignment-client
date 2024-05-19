import { StoreApi, UseBoundStore } from "zustand";

export type GenericStore<T> = UseBoundStore<StoreApi<T>>;
