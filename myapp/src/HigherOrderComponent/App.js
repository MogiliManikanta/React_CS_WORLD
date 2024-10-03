function App() {
  return (
    <>
      <WrappedComponent name={"Manikanta"} />
    </>
  );
}

function AuthenticatedCheck(Component) {
  let authenticated = true;
  {
    /**Wrapped Component
     */
  }
  return (props) => {
    if (authenticated) {
      return <Component {...props} />;
    } else {
      return <Login />;
    }
  };
}

let WrappedComponent = AuthenticatedCheck(User);

function User(props) {
  return (
    <div>
      <h1>User Component Authenticated</h1>
      <h2>Hello {props.name}</h2>
    </div>
  );
}

function Login() {
  return <h1>Login Component Authenticated</h1>;
}

export default App;
