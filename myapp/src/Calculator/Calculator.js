import { useState } from "react";
import "./Calculator.css";
import KeyPad from "./KeyPad";

function Calculator() {
  let [inputValue, setInputValue] = useState(990);
  function handleChange(value) {
    value = value + inputValue;
    setInputValue(value);
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
        <KeyPad handle={handleChange} />
      </div>
    </div>
  );
}

export default Calculator;
