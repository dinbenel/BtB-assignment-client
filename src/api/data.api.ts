import { AxiosInstance } from "axios";
import { dataClient } from "../lib/api.client";

class DataApi {
  private httpClient: AxiosInstance = dataClient.instance;

  getAllCharacters() {
    return this.httpClient.get("");
  }
}

export const dataApi = new DataApi();
