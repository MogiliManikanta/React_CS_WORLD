import React from "react";
import ReactDOM from "react-dom";
import Portals from "./Portals";
function App() {
  return (
    <>
      {/* <h1>App </h1>
      <h2>App Component</h2>
      <Child data={"Manikanta"} />*/}
      <Portals />
    </>
  );
}

function Child(props) {
  return ReactDOM.createPortal(
    <>
      <h1>Child Component</h1>
      <h2>from Parent Component through props : {props.data}</h2>
    </>,
    document.getElementById("root1")
  );
}

export default App;
