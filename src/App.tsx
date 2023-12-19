import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useValue } from "./hooks/context/hook";
import { AppContext } from "./hooks/context/context";
import Note from "./components/Note";

const Acom = () => {
  return <>Acom</>;
};

function App() {
  const { value, setValue } = useValue();

  const [value2, setValue2] = useState(0);

  const [aprice, setAprice] = useState(0);

  const calcAmount = () => {
    console.log("==aprice1:", aprice);
    return aprice;
  };

  const fetch = useCallback(calcAmount, [aprice]);

  const fetch2 = () => {
    console.log("==aprice2:", aprice);
    return aprice;
  };

  useEffect(() => {
    fetch();
    fetch2();
  }, [aprice]);

  return (
    <AppContext.Provider value={{ value }}>
      <Note />
      <button
        onClick={() => {
          setValue2((pre) => (pre += 1));
        }}
      >
        add
      </button>
     s-{aprice}
    </AppContext.Provider>
  );
}
export default App;
