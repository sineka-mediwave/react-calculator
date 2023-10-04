import { useState } from "react";
import "./App.css";

function App() {
  const [num1, getFirstValue] = useState("");
  const [num2, getSecondValue] = useState("");
  const [outres, setOutres] = useState(0);

  const fnHandler = (val: string) => {
    if (num1 && num2) {
      const result = eval(num1 + val + num2);
      if (result) setOutres(result);
    }
  };

  return (
    <header className="App-header">
      <div className="input-div">
        <label htmlFor="num1"> Enter First value: </label>
        <input
          type="number"
          id="num1"
          onChange={(e) => getFirstValue(e.target.value)}
          value={num1}
        />
      </div>
      <div className="input-div">
        <label htmlFor="num2">Enter Second value: </label>
        <input
          type="number"
          id="num2"
          onChange={(e) => getSecondValue(e.target.value)}
          value={num2}
        />
      </div>

      <div>
        <button onClick={() => fnHandler("+")}>Add</button>
        <button onClick={() => fnHandler("-")}>Sub</button>
        <button onClick={() => fnHandler("*")}>Mul</button>
        <button onClick={() => fnHandler("/")}>Div</button>
      </div>
      <div id="result">{outres}</div>
    </header>
  );
}

export default App;
