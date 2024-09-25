import React from "react";
import "./Calculator.css";

function KeyPad({ handle, clear, result }) {
  return (
    <div className="keypad-container">
      <div className="keypad-row">
        <button className="keypad-button" onClick={() => handle("7")}>
          7
        </button>
        <button className="keypad-button" onClick={() => handle("8")}>
          8
        </button>
        <button className="keypad-button" onClick={() => handle("9")}>
          9
        </button>
        <button className="keypad-button" onClick={() => handle("*")}>
          *
        </button>
      </div>
      <div className="keypad-row">
        <button className="keypad-button" onClick={() => handle("4")}>
          4
        </button>
        <button className="keypad-button" onClick={() => handle("5")}>
          5
        </button>
        <button className="keypad-button" onClick={() => handle("6")}>
          6
        </button>
        <button className="keypad-button" onClick={() => handle("+")}>
          +
        </button>
      </div>
      <div className="keypad-row">
        <button className="keypad-button" onClick={() => handle("1")}>
          1
        </button>
        <button className="keypad-button" onClick={() => handle("2")}>
          2
        </button>
        <button className="keypad-button" onClick={() => handle("3")}>
          3
        </button>
        <button className="keypad-button" onClick={() => handle("-")}>
          -
        </button>
      </div>
      <div className="keypad-row">
        <button className="keypad-button" onClick={() => handle("0")}>
          0
        </button>
        <button className="keypad-button" onClick={() => handle("/")}>
          /
        </button>
        <button className="keypad-button" onClick={() => result()}>
          =
        </button>
        <button className="keypad-button" onClick={() => clear("")}>
          AC
        </button>
      </div>
    </div>
  );
}

export default KeyPad;
