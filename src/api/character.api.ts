import { dataApiPath } from "@/constants/apiPathNames";
import { IApiRes } from "@/types/character.type";
import { AxiosInstance } from "axios";
import { dataClient } from "../lib/api.client";

class CharacterApi {
  private httpClient: AxiosInstance = dataClient.instance;

  getAllCharacters(path?: string) {
    console.log(path);
    const url = path
      ? `${dataApiPath.characters}/?${path}`
      : dataApiPath.characters;
    return this.httpClient.get<IApiRes>(url);
  }
}

export const characterApi = new CharacterApi();
