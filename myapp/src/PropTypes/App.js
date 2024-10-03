import PropTypes from "prop-types";

function App() {
  return (
    <>
      <User name={"Manikanta"} />
    </>
  );
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

User.defaultProps = {
  age: 0,
  name: "Manikanta",
};

function User(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <h2>Age : {props.age}</h2>
    </>
  );
}
export default App;
