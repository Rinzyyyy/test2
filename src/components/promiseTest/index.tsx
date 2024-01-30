import React, { useState } from "react";

const PromiseTest = () => {
  const [value, setValue] = useState(null);
  const promise1 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  promise1.then((res: any) => {
    // console.log("==PromiseTest", res);
    setValue(res);
  });

  // console.log("==PromiseTest", promise1);

  return <div>PromiseTest: {value}</div>;
};

export default PromiseTest;
