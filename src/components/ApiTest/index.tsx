import { use } from "i18next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { FetchData2, fetchData } from "../api";

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

  // const { data: data2 } = FetchData2();

  return (
    <div>
      {/* <p> ApiTest: {isLoading ? "loading" : resData}</p> */}
      <p> ApiTest: {error ?? data?.username}</p>
    </div>
  );
};

export default ApiTest;
