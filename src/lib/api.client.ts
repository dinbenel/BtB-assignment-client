import { config } from "@/config";
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

class AxiosClient {
  private axiosInstance: AxiosInstance;

  constructor(url: string) {
    this.axiosInstance = axios.create({
      baseURL: url,
      timeout: config.timeout,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  private initializeRequestInterceptor() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }

  private initializeResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        // Handle error cases
        if (!error || (error.response && error.response.status === 401)) {
        }
        return Promise.reject(error);
      }
    );
  }

  public get instance(): AxiosInstance {
    return this.axiosInstance;
  }
}

const authClient = new AxiosClient(config.loginUrl);
const dataClient = new AxiosClient(config.baseUrl);

export { authClient, dataClient };
