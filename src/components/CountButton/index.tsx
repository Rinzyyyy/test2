import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const CountButton = () => {
  const { value, setValue } = useContext(AppContext);
  return (
    <>
      <button
        onClick={() => {
          setValue((pre: number) => (pre += 1));
        }}
      >
        add
      </button>
      value-{value}
    </>
  );
};

export default CountButton;
