import React from "react";
class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.data + 10,
    };
  }

  /**
   * static getDerivedStateFromProps is a special React lifecycle method used in class components. 
   * It is called right before rendering when the component receives new props or when the component is being initialized. 
   * Its purpose is to update the component's state based on the changes in props.

Key Points:
It is static, meaning it doesn’t have access to this or component instance.
It returns an object to update the state, or null if no state update is needed.
Common Use Case:
You might use getDerivedStateFromProps when the component’s state needs to be synchronized with its props. For example, 
if a component receives new data through props and needs to update its internal state accordingly.
   */
  static getDerivedStateFromProps(props, state) {
    return {
      count: props.data + 10,
    };
  }
  render() {
    return (
      <div>
        <h1>Child Component</h1>
        <h2> from Parent Component through props : {this.props.data} </h2>

        <br />
        <br />
        <h2> from Child Component through state : {this.state.count} </h2>
      </div>
    );
  }
}
export default Child;
