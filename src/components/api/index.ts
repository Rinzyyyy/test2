import axios, { AxiosError } from "axios";
import { isError, useMutation, useQuery, useQueryClient } from "react-query";

const url = "http://localhost:8080/users";

const handelError = (e: any) => {
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
};

export const fetchData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/users");
    return response.data;
  } catch (e) {
    handelError(e);
  }
};

export const FetchData2 = () => {
  return useQuery("getData", async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      return response.data;
    } catch (e) {
      handelError(e);
    }
  });
};

export type TodoDataType = {
  id?: number;
  title: string;
  completed: boolean;
};

type resTodoData = {
  data: {
    id: string;
    name: string;
    todo: TodoDataType[];
  }[];
};

export const GetTodoData = () => {
  return useQuery("getTodoData", async () => {
    try {
      const res = await axios.get<resTodoData>("http://localhost:8080/todo");
      return res.data.data;
    } catch (e) {
      handelError(e);
    }
  });
};

export const PostTodoData = () => {
  const queryClient = useQueryClient();
  return useMutation(
    "postTodoData",
    async (data: TodoDataType) => {
      await axios.patch("http://localhost:8080/todo", data);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(["getTodoData"]),
      onError: (e) => handelError(e),
    }
  );
};
