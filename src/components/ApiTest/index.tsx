import { use } from "i18next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import {
  DeleteTodoData,
  FetchData2,
  GetTodoData,
  PostTodoData,
  fetchData,
} from "../api";

type DataType = {
  id: number;
  username: string;
  password: string;
  token: string;
};

const ApiTest = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  const url = "http://localhost:8080/users";
  const authToken = "token456";

  function isError(error: any): error is Error {
    return error instanceof Error;
  }

  // =================== async fetch ==================
  const fetchDataOne = async () => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (!res.ok) {
        return res.json().then((e) => {
          setError(e.message || "Server error");
        });
      }
      const result = await res.json();
      setData(result);
    } catch (e) {
      setError(isError(e) ? e.message : "An unknown error occurred");
    }
  };

  // ======================== axios ====================
  const fetchDataTwo = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (e) {
      setError(isError(e) ? e.message : "An unknown error occurred");
    }
  };

  useEffect(() => {
    fetchDataOne();
    // fetchDataTwo();
    // =======================  promise fetch ==============
    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) {
    //       return res.json().then((errorData) => {
    //   setError(errorData.message || "Server error");
    // });
    //     }
    //     return res.text();
    //   })
    //   .then((result) => setData(result))
    //   .catch((e: Error) => {
    //     setError(e.message);
    //   });
  }, []);

  // const {
  //   data: resData,
  //   isLoading,
  //   isError: e,
  // } = useQuery("myData", fetchData);

  const { data: data2, isLoading: todoLoading } = GetTodoData();

  const { mutate: postTodo } = PostTodoData();
  const { mutate: deleteTodo } = DeleteTodoData();

  const handleAddTodo = () => {
    postTodo({ title: inputValue, completed: true });
    setInputValue("");
  };

  const handleDeleteTodo = (id: number | undefined) => {
    if (!id) return;
    deleteTodo({ id: id });
  };

  const handleInputTodo = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* <p> ApiTest: {isLoading ? "loading" : resData}</p> */}
      <p> ApiTest: {error ?? data?.username}</p>

      {todoLoading ? (
        "todoLoading"
      ) : data2 && data2[0].todo?.length ? (
        <ul className="flex flex-col gap-2 mt-[20px]">
          {data2[0].todo.map((data) => {
            if (!data._id) return;
            return (
              <li key={data._id} className="flex gap-[10px] justify-between">
                {data.title}
                <button
                  onClick={() => handleDeleteTodo(data._id)}
                  className="py-0 px-2.5 rounded-2xl shadow-none hover:bg-red-700"
                >
                  -
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
      <input
        className="bg-green-100 rounded-xl"
        value={inputValue}
        onChange={handleInputTodo}
      />
      <button
        onClick={handleAddTodo}
        className="ml-[100px] mt-[20px] touch-pan-x hover:bg-sky-700 rounded-xl"
      >
        +
      </button>
    </div>
  );
};

export default ApiTest;
