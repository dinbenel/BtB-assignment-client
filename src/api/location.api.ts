import { dataApiPath } from "@/constants/apiPathNames";
import { IApiRes } from "@/types/character.type";
import { ILocation } from "@/types/location.type";
import { AxiosInstance } from "axios";
import { dataClient } from "../lib/api.client";

class LocationApi {
  private httpClient: AxiosInstance = dataClient.instance;

  getAllLocationResidents(urls: string[]) {
    const urlPrm = urls.map((u) => this.httpClient.get(u));
    return Promise.all(urlPrm);
  }

  getAllLocations(path?: string) {
    const url = path
      ? `${dataApiPath.locations}/?${path}`
      : dataApiPath.locations;
    return this.httpClient.get<IApiRes<ILocation>>(url);
  }
}

export const locationApi = new LocationApi();
