import axios, { AxiosResponse, AxiosError } from "axios";

export const BASE_URL = "http://localhost:4000/";

export const getRequest = <T>(url: string, options?: object): Promise<T> => {
  return axios
    .get(BASE_URL + url, options)
    .then((response: AxiosResponse<T>) => response.data)
    .catch((error: AxiosError) => {
      throw error;
    });
};
