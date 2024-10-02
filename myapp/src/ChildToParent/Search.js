import { useState } from "react";
function Search(props) {
  const [Input, setInput] = useState("");
  return (
    <>
      <input
        value={Input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          props.addNewTodo(Input);
          setInput("");
        }}
      >
        Add
      </button>
    </>
  );
}

export default Search;
