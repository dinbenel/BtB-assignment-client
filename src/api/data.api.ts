import { AxiosInstance } from "axios";
import { dataClient } from "../lib/api.client";
import { dataApiPath } from "@/constants/apiPathNames";
import { IApiRes } from "@/types/character.type";
import { SearchFormState } from "@/validations/searchCharacterValidation";

class DataApi {
  private httpClient: AxiosInstance = dataClient.instance;

  getAllCharacters(vals?: SearchFormState) {
    const params = this._getSearchParamsFromState(vals);
    const url = params
      ? `${dataApiPath.characters}/?${params}`
      : dataApiPath.characters;
    return this.httpClient.get<IApiRes>(url);
  }

  getCharactersByLink(url: string) {
    return this.httpClient.get<IApiRes>(url);
  }

  getCharactersByPage(page: number) {
    return this.httpClient.get<IApiRes>(
      `${dataApiPath.characters}/?page=${page}`
    );
  }

  private _getSearchParamsFromState(state?: SearchFormState) {
    const params = new URLSearchParams();
    if (!state) return null;
    Object.entries(state).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      }
    });

    return params.toString();
  }
}

export const dataApi = new DataApi();
