import axios, { AxiosError } from "axios";
import { isError, useQuery } from "react-query";

export const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/get");
    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const axiosError = e as AxiosError;
      if (axiosError.response) {
        return axiosError.response.data;
      }
      if (axiosError.request) {
        return axiosError.request;
      }
      return axiosError.message;
    }
    return isError(e) ? e.message : "An unknown error occurred";
  }
};

export const FetchData2 = () => {
  return useQuery("getData", async () => {
    try {
      const response = await axios.get("http://localhost:3000/get");
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const axiosError = e as AxiosError;
        if (axiosError.response) {
          return axiosError.response.data;
        }
        if (axiosError.request) {
          return axiosError.request;
        }
        return axiosError.message;
      }
      return isError(e) ? e.message : "An unknown error occurred";
    }
  });
};
