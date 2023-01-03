import React, { useState, useEffect } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };
   useEffect(() => {
   
    localStorage.setItem("count", JSON.stringify(count));
   
  }, [count]);

  return (
    <div className="app">
      <div>
        <div class="count">
          
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
export default App;
