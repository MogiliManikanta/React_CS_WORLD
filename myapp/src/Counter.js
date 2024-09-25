import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid black",
      }}
    >
      <h1>{count}</h1>
      <button
        style={{
          cursor: "pointer",
          border: "1px solid black",
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "blue",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        style={{
          cursor: count === 0 ? "not-allowed" : "pointer",
          border: "1px solid black",
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: count === 0 ? "gray" : "blue", // Change color if disabled
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
        disabled={count === 0} /* This disables the button when count is 0 */
      >
        -
      </button>
    </div>
  );
}

export default Counter;
