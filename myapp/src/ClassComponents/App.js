import React from "react";
import Child from "./Child";
class App extends React.Component {
  constructor() {
    super(); //mandatory to call super class constructor
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <h1>Class Component</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            // this.set
            this.setState({ count: this.state.count + 10 }); //In React, this.setState should be called with an object that describes the new
            //  state, or with a function that returns the new state. You are currently passing this.state.count + 10
            // This will not work directly, which is incorrect because it is not in the expected format.
            console.log(this.state.count);
          }}
        >
          Click Me
        </button>

        <Child data={this.state.count} />
      </>
    );
  }
}
export default App;
