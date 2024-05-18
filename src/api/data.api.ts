import { AxiosInstance } from "axios";
import { dataClient } from "../lib/api.client";
import { dataApiPath } from "@/constants/apiPathNames";
import { IApiRes } from "@/types/character.type";

class DataApi {
  private httpClient: AxiosInstance = dataClient.instance;

  getAllCharacters() {
    return this.httpClient.get<IApiRes>(dataApiPath.characters);
  }
}

export const dataApi = new DataApi();
