import { useCallback, useState } from "react";

export default function App() {
  
  const [isActive, setIsActive] = useState(false);
  const [isTestActive, setIsTestActive] = useState(false);

  /* 
    dependency array 給 [] -> 該 callback 永遠不會改變，
    因為每次 re-render 時 [] 不會有任何的變更
  */
  const clickHandler = useCallback(() => {
    if (isTestActive) {
      setIsActive((prevState) => !prevState);
    }
    // 當心！這裡會出現問題！
  }, []);

  const clickTestHandler = () => {
    setIsTestActive((prevState) => !prevState);
  };

  return (
    <div className="App">
    </div>
  );
}