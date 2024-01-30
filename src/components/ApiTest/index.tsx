import { use } from "i18next";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { FetchData2, fetchData } from "../api";

const ApiTest = () => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const url = "http://localhost:3000/get";

  function isError(error: any): error is Error {
    return error instanceof Error;
  }

  // =================== async fetch ==================
  const fetchDataOne = async () => {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const result = await res.text();
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
    //       throw new Error(`HTTP error! Status: ${res.status}`);
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
      <p> ApiTest: {error ?? data}</p>
    </div>
  );
};

export default ApiTest;
