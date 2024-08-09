import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  //
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      {/* if count > 0 -> show button */}
      {count > 0 && (
        <div>
          <button
            style={{ backgroundColor: "lightgreen" }}
            onClick={resetCount}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
