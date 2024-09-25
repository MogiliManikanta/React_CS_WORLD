import { useState } from "react";
import "./Calculator.css";
import KeyPad from "./KeyPad";

function Calculator() {
  let [inputValue, setInputValue] = useState("");
  function handleChange(value) {
    value = inputValue + value;
    setInputValue(value);
  }
  function handlerClear() {
    setInputValue("");
  }
  function handleResult() {
    setInputValue(eval(inputValue));
  }
  return (
    <div className="calculator-container">
      <h1>Calculator</h1>
      <div className="calculator-content">
        <input
          type="text"
          placeholder="Enter number"
          className="calculator-input"
          value={inputValue}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <KeyPad
          handle={handleChange}
          clear={handlerClear}
          result={handleResult}
        />
      </div>
    </div>
  );
}

export default Calculator;
