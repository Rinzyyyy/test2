import { use } from "i18next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { FetchData2, GetTodoData, PostTodoData, fetchData } from "../api";

type DataType = {
  id: number;
  username: string;
  password: string;
  token: string;
};

const ApiTest = () => {
  const [data, setData] = useState<DataType | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const { mutate } = PostTodoData();

  const handleAddTodo = () => {
    mutate({ title: "Go to zoo", completed: true });
  };

  return (
    <div>
      {/* <p> ApiTest: {isLoading ? "loading" : resData}</p> */}
      <p> ApiTest: {error ?? data?.username}</p>

      {todoLoading ? (
        "todoLoading"
      ) : data2 && data2[0].todo?.length ? (
        data2[0].todo.map((data) => {
          if (data.id) return;
          return (
            <ul key={data.id}>
              <li>{data.title}</li>
            </ul>
          );
        })
      ) : (
        <></>
      )}

      <button
        onClick={handleAddTodo}
        className="ml-[100px] touch-pan-x hover:bg-sky-700"
      >
        +
      </button>
    </div>
  );
};

export default ApiTest;
